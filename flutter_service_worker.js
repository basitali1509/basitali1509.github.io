'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2bfdc161afb722d8cf8030fdfcc1fecd",
"assets/AssetManifest.json": "b7cc0c530fce075b423d6982f2657a01",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/cpp.png": "50010d23f73206894019f4a3a2a92427",
"assets/assets/icons/cpp_logo.png": "7dbb19906a91403a8e1e02648e635015",
"assets/assets/icons/dart_logo.png": "c979b430b2da155059ebc0a22b0a26ac",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/firebase_logo.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/assets/icons/flutter_logo.png": "70135fb5474e65fa678024389564b59e",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/github_logo.png": "7b8cc62d859cf5e0969df78655ccd22e",
"assets/assets/icons/git_logo.png": "ab40d02f0aa8bf85de12fd45bda5b0c0",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/kotlin_logo.png": "816fd8697b199ae4a7b5dfeccb9ce423",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/mysql_logo.png": "22053d1b7574fc820199fe97e0744714",
"assets/assets/icons/NEDUET_logo.png": "ffad3f052623c7589b32b1132c3f5186",
"assets/assets/icons/postman_logo.png": "df4716aaf3cc5b918aa6eec27b66a0d9",
"assets/assets/icons/problem_solving.png": "f3043cacb877e8cc76e2dcbb2e5c1e68",
"assets/assets/icons/rest_api_logo.png": "a26fadd01c4a7cc59dc4f9b6cd08cc90",
"assets/assets/icons/sql.png": "3ba741de8d02bf7d4d0efdd38dea06b9",
"assets/assets/icons/sqltie_logo.png": "de50e7d4e9eec06dd44b23ff4c0d9f87",
"assets/assets/icons/stripe_logo.png": "102e19395196c8ff4a7d0b30951183d6",
"assets/assets/icons/studio_logo.png": "b97e87ddf73232a4d53687f590b3907c",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/Amazon_App.png": "4d4771b8e6ed6f10e64b3fc28ce121ab",
"assets/assets/images/chat_app.png": "7596b74c4094a39ac334eaf70bc21e61",
"assets/assets/images/food_app.png": "a4f14f3fcef3625b21bfae5793dbebf6",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/notes_app.png": "01eee3d6d09ffc535c745b841019bfa9",
"assets/assets/images/oct_daily.jpg": "a30bb2c71ed7b7ed534ad60e0483aff8",
"assets/assets/images/profile_bg.jpg": "eb868372f5deca94f1dbe207268a7088",
"assets/assets/images/profile_bg_icon.png": "4cac8cf23f87822f750a5e7e722ebdc5",
"assets/assets/images/splash.png": "dd259b40105bfb7e44ed30a3a65417e2",
"assets/assets/images/weather_app.png": "1688790cf4cc2cbceaafea1a6ece0065",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/fonts/MaterialIcons-Regular.otf": "79caeeb83cd4bccb336362657f872f0a",
"assets/NOTICES": "47e9f29cb697f0006c7fd04841a3ebbf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/profile_bg_icon.png": "4cac8cf23f87822f750a5e7e722ebdc5",
"index.html": "41617ba04c90e3b07404c121aac8d3d8",
"/": "41617ba04c90e3b07404c121aac8d3d8",
"main.dart.js": "5edeb75f5ea92a6e44a207d3ba704607",
"manifest.json": "387d1df39ed0ae8a0286091581b842c3",
"splash/img/dark-1x.png": "12bee15afbbf0ef7fe361118ad45a3bc",
"splash/img/dark-2x.png": "12bee15afbbf0ef7fe361118ad45a3bc",
"splash/img/dark-3x.png": "12bee15afbbf0ef7fe361118ad45a3bc",
"splash/img/dark-4x.png": "12bee15afbbf0ef7fe361118ad45a3bc",
"splash/img/light-1x.png": "12bee15afbbf0ef7fe361118ad45a3bc",
"splash/img/light-2x.png": "12bee15afbbf0ef7fe361118ad45a3bc",
"splash/img/light-3x.png": "12bee15afbbf0ef7fe361118ad45a3bc",
"splash/img/light-4x.png": "12bee15afbbf0ef7fe361118ad45a3bc",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "fd07e329d0addaee7af5d9dfe633aa54",
"version.json": "09b8d8692176eee75d346bc7dad2bfed"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
