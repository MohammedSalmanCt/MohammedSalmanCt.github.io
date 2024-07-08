'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "4ab2258faeb865de3ae73018e7b9009f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "027dbdc5990d4d1f40c7ce4736102458",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e8acd13e88d8764f06e15f21ac929f5",
".git/logs/refs/heads/main": "9f331619d68f91a5c2e5bf634f43b00c",
".git/logs/refs/remotes/origin/main": "8565200c55775d0b0c5daa95222e51c8",
".git/objects/00/813d49e0c6fdf1f42b27a4921b1e39397aad7e": "af6b37e16731d75e693afcd86ea71b2a",
".git/objects/04/08e6dbd79d36eb3e0a187c58ee951a175e3734": "07aadd782c3495647f5c7397691d1819",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/11/bd3eb81e61e19e9775d0c79e3cf954431094f7": "7415a189b22dffdd5385b49cff0fcaa0",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/7300a209da2392af0bf55b3aa887ea869c4060": "99536ae9869baf2cf82857be29dfb325",
".git/objects/1a/ac1bf125ac6645ef5e77691758e3062270082c": "2c35afd49da47a86d9d03ced7c7f95a4",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5ccfa62ed20186243d04cb0e9a59fbe56d2582": "6f11e77d044d47c329d02e17fb0ccb8d",
".git/objects/26/f19a5868a92e47564940c56c30d682a836bee0": "acda043fb78c0d5dffb40b47c7e8680a",
".git/objects/2b/7574945eb88daf7275806f62e8eb2d9937e98f": "7cf57a3393258b3975068d59f201ed84",
".git/objects/2d/059e391de4123060ab41208af3cf7cea0197ab": "dfcfac20d877a81ab92fd98cd9879883",
".git/objects/30/14290bf19dc591d1577edafd82b164cbb1300b": "4332f886ff0b76cb141c8ac8261f43c2",
".git/objects/34/09bbc68c87f0ede4f58474c75f33e51a8d770c": "2509388db87e239c490852b3c25b719e",
".git/objects/36/30500ac04d1390087c425faffaa46c5f9b404d": "2202345fd1480c595a5db7c0f001c8cc",
".git/objects/36/74d7ba081c6947e88efb817a5f3692e3048dbd": "bee0cc5b2f096089ee33c1d1ee6b393e",
".git/objects/37/deb3fd47a0a7b6c75b9df95660063f39aaa2bf": "95757c01a5fdc93fa62bc730642fa1e8",
".git/objects/3f/3baac82230d2170fcefeaca395d4ced4fc100d": "93cd2aea8742e1a26090e811c67dd007",
".git/objects/40/91ea6fdb9a440a4c5aa8c35460a7f99350342a": "f34af6032a964cdb8779c167a7b6ee83",
".git/objects/44/533d7722c47c8d827f422ed41b63724875e24e": "3957fa95a37570d1e0fa1e646fe3e7ad",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/65d3791447505ce4e175d3a084b5a4654dd615": "0746cbe6866a282e8f51586b93592821",
".git/objects/4c/1f3cce8821478e4de7d29bd5393196326e7e3e": "31c9d511ad681d24b4d43765f4d78e6e",
".git/objects/4c/8cfc0b186d774c5e20414c0ebc076e16f52d9c": "98210152c1e815a2515e2a6633ec41ba",
".git/objects/4e/7d8134bd709fcd450c91234a98940f8735381a": "22fd41e0989a7d3657d04468705fa7b1",
".git/objects/50/b05f5ebfc37cb1584878489aa56f7ec808fe09": "1e28e6115d499ffc0ad3785ecd4bfb5d",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/f097fce64c2705f17c865d600a510484bad172": "bbc890e44a0599b10156cbaf79171921",
".git/objects/61/013b60c688771c88392282c9d4bcc628775335": "8aa7f96a0c3a758a484ecfd3d5c69d17",
".git/objects/67/56b25cd3cc913e89426fddc760613dba7fbef5": "6ca62669a2e1cf1949043f3d65511ad0",
".git/objects/6c/c4abc0d3f5adb1d926997fa19f431c1d09458c": "d1e38ead58b63e00dcd1d179316f046c",
".git/objects/6e/09f71187b3b031ddcadc76ab1d182f56130c58": "2ce2435c0063cb5a788377c73c457338",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/bce88588d7c1580713347ae7d097875b5fceaf": "2a2f621e50bbeac997a728fe4390e67a",
".git/objects/77/77af196ef4d0256fbc794f06b596fac0ca3a77": "bee7cef6a5306b337bb28def71d0c3d2",
".git/objects/79/19a0aeca45470b1be446b87e68e8696c02a6a9": "413444e3246a498e7a2386597ccbf030",
".git/objects/81/f779c7c478e453454078a0c08709692c9a6751": "8cf85d3031fc7b2dc5ef345c0af90879",
".git/objects/82/4c00a24f880df83eb5a40aa596ec0394ed235a": "ffba9b8dee4588c69d25bf832f4e5421",
".git/objects/82/ea44f79ff8baeae451a02be0444749283a9b6a": "b9e92dcbc3a3cb07dba5acd858ce77b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/1cfc47f4b8ff89de41bd4fdcaff20ab001f0ed": "b03e404e356cf488387a10dcf3588f08",
".git/objects/97/6825d0eb35449225958b84d23d814f358fe7da": "0057c8c453e17f75468bd0bb8dfc0759",
".git/objects/99/49e026b1d05f7aeedf6c360649e14f1e3c4ef4": "475a5c72cca52e14725ee8b3a0534e5a",
".git/objects/9a/6fdc29008cb01c1601a544e9e0bb9236ff1edb": "3903cfce40cfec98418c295f948d1e96",
".git/objects/a0/11a5d35d969e15f59ee911edb0dab295a098aa": "77c22a1810c76badae7c176ed2e0522d",
".git/objects/a4/71784db408c2c2a6fae6a76fe2d05c16d3be73": "9a9754ef6a0f732ed81acfc1114626e2",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/399803ab315801f3935f103ebe5e3cfb05960d": "194d0fab96f96d9fb961941900a015c5",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/186ea5df4db4a514fc46e17581e0a7b1f8a75c": "b0ad6eb3b7b3191b627f1bb99b20599b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/4c21a69cda8d5747436b93d0b9f70f24ecb5ec": "68bb97d59fdc59f1e615723568036a37",
".git/objects/bd/e4c909832462f623a5517db43c3f02b001f396": "2f0867762d2e3754619567420680c704",
".git/objects/be/dbdc2b26249509ed53205c3e97c54d3e1eaa03": "b808ca6dbc5a91585e55fe4b739a0b3a",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cb/8e196640782cc07fff89c6254a68275ed8a416": "6d44ae954f758cb3f76d85a61e01c370",
".git/objects/d1/c245d562aa97bdf9bc50708fbd20d27fa07144": "0db311c1fd1ef750c6c3df9bb72eba24",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/82baadb684655e2cd34314cba2fd9cfcdbdcda": "f977ebf5e0df943842ab331f9d9bb71b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/fad39559b7e0e7fea954fef5264b6364c62720": "532b22915667397f116840e134d44859",
".git/objects/e5/2b90e1d8cc94ea855a85da94ee51fd1c089250": "2727721a4410ba352c8df169110c76ae",
".git/objects/e5/96c4ac60640b37722ebdd56aac72adb14f4b39": "2c490c2b6f5d4031f2380484386a075f",
".git/objects/e5/9a4543264ce993bd606e3031e24d4e7f14288b": "bc18a5786857c2e63d147e9f9d571950",
".git/objects/e6/aebe27149cb74580917c296bcf90f94580aa6e": "241bbc44b89522ad1d431d57139909a0",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/88836e37be3cc001d6228494b02ef70cdb9828": "3474fbf6ed062ca42676b304befe85ad",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/ada755ec1af2b6d56c318e19f01469d4276d59": "9f377d197ed246c6c4df5c4d2fffb155",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/f8/62accbe7a0500b0721ece406fe695795f612c9": "8a936c8b471afcb5f29644ab35f7ddb5",
".git/objects/fa/b4d0aa6c35cfbf70536a6eeaf8cbe6183bd4c4": "4e201ed2692851388db0710d20191a61",
".git/refs/heads/main": "507beb23c3b653e4c68dca77d48d151b",
".git/refs/remotes/origin/main": "3cb6605eed1dcc2e6de6f95ae3ea5dee",
"assets/AssetManifest.bin": "d2803c4b4abdf67dd414c432764a7237",
"assets/AssetManifest.bin.json": "60251dfd782d49cd4857946e5b10e3bd",
"assets/AssetManifest.json": "02ebc40affa5f90e0c4c6c0c9a2a68c9",
"assets/assets/loginScreen/download.jpeg": "84d035f91a23b99733b69ecef8611e1c",
"assets/assets/loginScreen/login%25201.png": "28984d3c5864ac62983c37205cf33aa1",
"assets/assets/loginScreen/mobile.jpeg": "2487e1f76eae270d524664a1e93de41a",
"assets/assets/logo/Logo.svg": "43ebf77278f2fcfaf278c889649dc744",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0c10d33dd4d2119c5a5690a5c502782b",
"assets/NOTICES": "e400b3ab67b3f8ae28dffeb40bf0c09d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "01aaa76dcfabfb34c4f30acfc18056f2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "59e616fbb3e3ede7af83d57c555b0c91",
"/": "59e616fbb3e3ede7af83d57c555b0c91",
"main.dart.js": "e3050f9531d146b39ad4ff4948b05976",
"manifest.json": "2e1bdaca2e88117e3ec977c7dfd3b0fa",
"version.json": "88808f15545e5641e2e726d1f9ef405e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
