'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "c048b722aba4da6a7beb8dcee728e6d7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "e24616836f5db54c94ef99ccc7eabac0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bea9f7ce821a1a048f1c77f7285cd2f6",
".git/logs/refs/heads/main": "bbefb6d64431784bfd93bf2b1721c0b1",
".git/logs/refs/remotes/origin/main": "1de2c27765dadc96c0a8980f4e12e508",
".git/objects/06/859d82a40a384cfcb08e6b92afcfec3a35eb1c": "d30f02fac4bfbd3fd41d3871d71f46c5",
".git/objects/09/c2e44cc0b4b06b481e518b63015e5db243cd6d": "32be59af84f7dcdf85be786a8658b717",
".git/objects/14/f11d21bcd1e5f2a1423b4be575fdb7020b6418": "3760c277be9a419bb9d30f4d5fa713aa",
".git/objects/16/ead121acba55d3c1cca2c56a308327516b8a95": "6e3dfba7a5974f0ec7d32fa156f407df",
".git/objects/18/ec17310d1c8ce5b847e938ea72d1e42c278898": "151f0d9cc3ac861f56b34b0e364a3bd5",
".git/objects/1a/af6665eee4b54ec892ffd6079bd5f401d8040d": "ec1fc3924ac4109ef4566fcc5bd648ff",
".git/objects/21/f3c2647427acce1f870290267e57efcf3dee42": "816f5eb7c10f454206f0a5e5da7e1484",
".git/objects/22/01756717fb786166a6ecdc85e8f6a53ebf7f8f": "76a4991b10d62aeff5be5a9b23e30066",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/2a/bf32bd70b2e1541982baa53f96128a956723cc": "9eb6ea46512523131033226c203d3910",
".git/objects/2b/2bedb90ba32a79956024c3839b7a40fc16a053": "5abe53dbb50938f607d0c303945ae386",
".git/objects/2b/86cba5edbd2b64dacfd56ead855c0fd937b5c3": "e3cbab1265a2e9a5b0a59096d4574690",
".git/objects/30/04bcdd6534a5876aca16d48c7b16778c8b353d": "da80fe9bdc00753837b2a67f0b5b055e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/11ad30feda759dd17ddf82eac6f0ac011c63e1": "b2ef9e4ad74aed37e464385fb3ea1d16",
".git/objects/3f/a3cd824cd7fd14edf4d8a944d261803216fb16": "31a2ae3932c2c47e025defe24462cd5b",
".git/objects/43/c407d4684edb2180811939a97b1b9b5363353a": "53d39607fdf5f4a763d2a0c6594f666e",
".git/objects/75/7a997affed9c0823b026691a4a586388f41642": "9fa973dfd0ba4d781c7803f6b0cb5aaf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/4ab76af79e89a8a957e7514411068001a339d4": "5b910d78bf36f5970823dd41f5d01464",
".git/objects/82/7d59ab328e4ca78799a360c925c00a1a500d44": "ad1121b921177f5d987f6d0c6e13b890",
".git/objects/85/6154d1605bdebc9d342448f91b46b7d48a53fe": "f70d7f9373c8a1af92f6f17140426a9a",
".git/objects/96/e6a10485aefd6aec8549a0b2e9df4aa3066926": "dca996fb264f311b31979b1ee71c83ee",
".git/objects/9a/02bc6d2a62b235485000b02fd03fa1b92498c2": "7ec2f0ce62219c8c7795cbe73c806e4b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/c8dff56da0a696ab53892a8002a5179684a756": "91ab98d4d7f0a1a6c188866849994210",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/1a9f7d91744ce2aafecd1cf6d3efc5f5707616": "8e46935b494431ff8f1247dd36204ec6",
".git/objects/bb/867e166af074217eb8f33ffeba580f06da93ef": "53af677fd18ed2f5c462c38d0baca613",
".git/objects/ce/13a6d7001660461abbde557653655da8b0aa96": "81c06edc3017a234e146cc82639b2614",
".git/objects/db/1ba0fda224144721621f61d387de05ecaf66ae": "ce8404296928f9bd1f24797c4c7b48bb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/b4641cc5cbb0331c69ed8cb1362ca9cd897a58": "5e75c382e9ec9af496495d4d2795b648",
".git/objects/fd/06b0ee653b0fa14aebd2324be3a6eb0337c22e": "e71a62e5de9cf5be8292776151665a8d",
".git/objects/ff/7446869b164094dcc7eb6292417341acc229d1": "c62bee51e33a0d0bcebbfb51f6849fcf",
".git/refs/heads/main": "1bee09ce583d2edae8497f3349dee879",
".git/refs/remotes/origin/main": "1bee09ce583d2edae8497f3349dee879",
"assets/AssetManifest.json": "71f69dc6511fccc0def9708909830399",
"assets/assets/fonts/Battambang.ttf": "d3fdd4ceb85ae7181b0a1f64dd5cd28b",
"assets/assets/fonts/KHMMOOL1.ttf": "2bdfb26ca7c50733b046a58739fce996",
"assets/assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/Siemreap.ttf": "01a09003da4063952afa7734f4f393af",
"assets/assets/images/example.png": "9e718c6394ea643b9c3659c45eb4b60f",
"assets/assets/images/facebook.jpg": "e78b8801fec15b36530841424b13057d",
"assets/assets/images/flag-english.png": "7329dc1b4637cffb56a1c3033f18778b",
"assets/assets/images/flag-khmer.png": "948a0fe85ddd04f3dd1309a7a483738d",
"assets/assets/images/google.jpg": "d0991539b51f1520c42d1dee04ba0faa",
"assets/assets/images/icon.png": "fbfe90f885ce28edfa37961b85f24eca",
"assets/assets/images/image-not-found.png": "0de1b5aaad52d2881b6c20a5102cfe5d",
"assets/FontManifest.json": "693440689a13cf71ce31f0cd4b36e7c5",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7c9fed43e40f9352820ff47183887bb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "f864bbf6d6d1a098b0245fba02e5bbcf",
"icons/Icon-192.png": "917710437aa653b08f90d43ec54a635b",
"icons/Icon-512.png": "8555b82ea023b3ed190c50e3a4709119",
"index.html": "e005cb3bdf79afe643ce1d4606f3ccfb",
"/": "e005cb3bdf79afe643ce1d4606f3ccfb",
"main.dart.js": "156df15c87db62abe4a720bef8f8fbd8",
"manifest.json": "8cecded0d0782dd165da49eea12d54f9",
"version.json": "ea93f80a858e904392f272af8f75a2d1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
