const cacheName = 'static-cache'
const assets = [
    './',
    './index.html',
    './frei.html',
    './str.html',
    './leopard7.mp3',
    './app.js',
    './style.css',
    './image/freiburg-small.png',
    './image/straßbourg-small.png'
]
// install
self.addEventListener('install', evt => {
    // console.log('sw is insalled')
    evt.waitUntil(
        caches.open(cacheName)
        .then(cache =>{
            console.log('cache all assets')
            cache.addAll(assets)
    })
    )

})

// activate
self.addEventListener('activate', evt => {
    console.log('is active')
})

// fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch', evt)
    evt.respondWith(
        caches.match(evt.request)
        .then(cacheRes => {
            return cacheRes || fetch(evt.request)
        })
    )
})