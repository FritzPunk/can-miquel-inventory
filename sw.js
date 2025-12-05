// Service Worker for Can Miquel Inventory PWA
const CACHE_NAME = 'can-miquel-inventory-v22-mobile-layout-fix';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './icon.svg'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching app assets');
                return cache.addAll(ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - Network first for HTML (iOS fix), cache first for others

self.addEventListener('fetch', (event) => {
    // Network-first strategy for HTML files (better for iOS updates)
    if (event.request.mode === 'navigate' || event.request.destination === 'document') {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Clone and cache the response
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    // Fall back to cache if offline
                    return caches.match(event.request).then((response) => {
                        return response || caches.match('./index.html');
                    });
                })
        );
    } else {
        // Cache-first strategy for CSS, JS, images
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    return response || fetch(event.request)
                        .then((fetchResponse) => {
                            // Don't cache external requests
                            if (!event.request.url.startsWith(self.location.origin)) {
                                return fetchResponse;
                            }
                            // Cache new requests
                            return caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request, fetchResponse.clone());
                                    return fetchResponse;
                                });
                        });
                })
                .catch(() => {
                    // Offline fallback
                    return caches.match('./index.html');
                })
        );
    }
});

