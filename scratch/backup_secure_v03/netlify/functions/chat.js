exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const body = JSON.parse(event.body);
        const { provider, messages, model, systemPrompt } = body;

        let apiUrl = "";
        let requestBody = {};
        let headers = { "Content-Type": "application/json" };
        let apiKey = "";

        if (provider === "openai") {
            apiKey = process.env.OPENAI_API_KEY;
            if (!apiKey) throw new Error("OPENAI_API_KEY no configurada en el servidor.");
            apiUrl = "https://api.openai.com/v1/chat/completions";
            headers["Authorization"] = `Bearer ${apiKey}`;
            
            const openAiMessages = [];
            if (systemPrompt) openAiMessages.push({ role: "system", content: systemPrompt });
            messages.forEach(msg => openAiMessages.push({ role: msg.role === "user" ? "user" : "assistant", content: msg.content }));

            requestBody = {
                model: model || "gpt-4o-mini",
                messages: openAiMessages,
                temperature: 0.75,
                max_tokens: 512
            };
        } else if (provider === "gemini") {
            apiKey = process.env.GEMINI_API_KEY;
            if (!apiKey) throw new Error("GEMINI_API_KEY no configurada en el servidor.");
            apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model || "gemini-2.5-flash"}:generateContent?key=${apiKey}`;
            
            const contents = [];
            messages.forEach(msg => contents.push({ role: msg.role === "user" ? "user" : "model", parts: [{ text: msg.content }] }));

            requestBody = {
                system_instruction: systemPrompt ? { parts: [{ text: systemPrompt }] } : undefined,
                contents: contents,
                generationConfig: { temperature: 0.75, maxOutputTokens: 512 }
            };
        } else {
            return { statusCode: 400, body: JSON.stringify({ error: "Proveedor inválido." }) };
        }

        const response = await fetch(apiUrl, { method: "POST", headers: headers, body: JSON.stringify(requestBody) });
        const data = await response.json();

        if (!response.ok) return { statusCode: response.status, body: JSON.stringify({ error: data.error?.message || data.error || "Error IA" }) };

        let reply = "";
        if (provider === "openai") reply = data.choices[0].message.content;
        else if (provider === "gemini") reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

        return { statusCode: 200, body: JSON.stringify({ reply }) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
