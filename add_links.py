import codecs

c = codecs.open('docs/multimedia.html', 'r', encoding='utf-8').read()
links = '''
    <h2 class="section-title">Explorar Más</h2>
    <div class="media-grid">
        <a href="comics.html" class="media-card" style="text-decoration:none; text-align:center;">
            <div class="card-content">
                <h3><i class="fas fa-book-open"></i> Cómics Oficiales</h3>
            </div>
        </a>
        <a href="publicidad.html" class="media-card" style="text-decoration:none; text-align:center;">
            <div class="card-content">
                <h3><i class="fas fa-bullhorn"></i> Banners y Publicidad</h3>
            </div>
        </a>
    </div>
'''

if 'Explorar Más' not in c:
    c = c.replace('<!-- Lightbox Modal -->', links + '\n    <!-- Lightbox Modal -->')
    codecs.open('docs/multimedia.html', 'w', encoding='utf-8').write(c)
    print("Links added to multimedia.html")
else:
    print("Links already exist")
