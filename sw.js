// Minimal service worker — its only job is to make this site installable as an
// app. It deliberately does not cache anything, so the app always loads fresh
// from the network and Firestore rather than showing stale data or an old build.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', () => {
  // Deliberately pass-through: always hit the network, never serve from cache.
});
