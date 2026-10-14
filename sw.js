const CACHE_NAME = 'lilutrans-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap'
];

// Instalação do Service Worker e Cache dos ficheiros
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Ficheiros em cache com sucesso');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Ativação e limpeza de caches antigas
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('A limpar cache antiga:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Interceção de pedidos (Network First, fallback to Cache)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
