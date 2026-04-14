
const CACHE='investor-robot-v6-cache';
const URLS=['./','./index.html','./manifest.json','./icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(URLS))); self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(resp=>{const clone=resp.clone(); caches.open(CACHE).then(c=>c.put(e.request,clone)).catch(()=>{}); return resp;}).catch(()=>cached)));});
