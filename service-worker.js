"use strict";var precacheConfig=[["/index.html","09b5a5f6b4cdfdad7862148b7b9395b6"],["/static/css/main.3a8fe477.css","013e595a65f92f16618c0ae926068703"],["/static/js/main.84bf4ba4.js","3e7504b4ac613e1f00fdd77481b7f84a"],["/static/media/ETHR(gif).5856c41c.gif","5856c41c6bf0a82d502e657a0f8f1457"],["/static/media/LnC(gif).4d5b1550.gif","4d5b1550106d7c78d02042f2fa012bc4"],["/static/media/Resume(PDF).fdea2e57.pdf","fdea2e579ce90c5431cfcb4b92ffa421"],["/static/media/css.8f047bb8.png","8f047bb893c3c4ee94de0832935d7c89"],["/static/media/fiction-jeans.f101bed2.png","f101bed2774810285054b80dfa9e304a"],["/static/media/handlebars.9730fec0.png","9730fec00493b26e637fbf9b3d3a2384"],["/static/media/html.5df52566.png","5df525661c134dba981cdf75324932ad"],["/static/media/jes-es6.3d159447.jpg","3d159447d61d4b58d638fec0977a8f10"],["/static/media/jquery.a5872891.png","a58728919c10c74e25a9b656c478f730"],["/static/media/mysql.255b77e2.png","255b77e251b19a6d0600634d2ff9b006"],["/static/media/nodejs.9100f2eb.png","9100f2eb47cae949fb1f01853263103c"],["/static/media/react.84d44aff.png","84d44aff3af7aab4ce4495c3de9c2e64"],["/static/media/rest-api.693896a0.png","693896a0df0e78f3cad494f6d43f53ea"],["/static/media/twitterbootstrap.73844123.png","7384412324c769e447d3c4f86e9ff068"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});