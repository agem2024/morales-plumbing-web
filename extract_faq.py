import re
import json

# Extract faq100 Q&A from app.js
with open(r"C:\Users\alexp\.gemini\antigravity\scratch\morales-repo-3\app.js", encoding='utf-8', errors='replace') as f:
    content = f.read()

# Find the English translations block - look for the en: { section
# Find faq100_q_1 through faq100_q_100 and faq100_a_1 through faq100_a_100
# Use regex to find all faq100 keys in any language (we'll take English first)

# Find English block
en_match = re.search(r'"en"\s*:\s*\{(.*?)\n\s*\}(?=\s*,\s*"(?:es|zh|tl|vi)")', content, re.DOTALL)
if not en_match:
    # Try alternate format
    en_match = re.search(r"'en'\s*:\s*\{(.*?)\n\s*\}(?=\s*,\s*['\"](?:es|zh|tl|vi)['\"])", content, re.DOTALL)

print("Found EN block:", bool(en_match))

# Extract all faq100 Q&A pairs from entire file (ES first, fallback EN)
questions = {}
answers = {}

# Search for faq100_q_N and faq100_a_N patterns in the full file
q_pattern = re.findall(r'"faq100_q_(\d+)"\s*:\s*"((?:[^"\\]|\\.)*)"', content)
a_pattern = re.findall(r'"faq100_a_(\d+)"\s*:\s*"((?:[^"\\]|\\.)*)"', content)

print(f"Found {len(q_pattern)} questions, {len(a_pattern)} answers")

# Build dicts - take last occurrence (will be last language found, likely VI - use ES)
# We need to find them in ES context specifically
# Find es block
es_start = content.find('"es"')
if es_start == -1:
    es_start = content.find("'es'")

es_section = content[es_start:es_start+100000]

q_es = re.findall(r'"faq100_q_(\d+)"\s*:\s*"((?:[^"\\]|\\.)*)"', es_section)
a_es = re.findall(r'"faq100_a_(\d+)"\s*:\s*"((?:[^"\\]|\\.)*)"', es_section)

print(f"ES block: {len(q_es)} questions, {len(a_es)} answers")

for num, text in q_es:
    questions[int(num)] = text.replace('\\"', '"').replace('\\n', ' ')

for num, text in a_es:
    answers[int(num)] = text.replace('\\"', '"').replace('\\n', ' ')

# If ES missing some, fill from global
for num, text in q_pattern:
    n = int(num)
    if n not in questions:
        questions[n] = text.replace('\\"', '"').replace('\\n', ' ')

for num, text in a_pattern:
    n = int(num)
    if n not in answers:
        answers[n] = text.replace('\\"', '"').replace('\\n', ' ')

print(f"Total unique questions: {len(questions)}, answers: {len(answers)}")

# Show first 5 to verify
for i in range(1, 6):
    print(f"\nQ{i}: {questions.get(i, 'MISSING')[:100]}")
    print(f"A{i}: {answers.get(i, 'MISSING')[:100]}")
