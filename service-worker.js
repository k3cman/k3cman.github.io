"use strict";var precacheConfig=[["/index.html","34cd45a50ba2850b045c159dd701bcc6"],["/static/css/main.b8a554ce.css","4360cb7f6eb3b32e4664903d60e96e5c"],["/static/js/main.634c2a55.js","a048ded765537c3d187ebba43aa863e3"],["/static/media/aws.a25f56b0.png","a25f56b0322709c3744c93d613332a87"],["/static/media/bootstrap.e0ba2ed1.svg","e0ba2ed1017b901a2536ccc0d02eea0f"],["/static/media/css3.747e0cdd.png","747e0cdd86b84302647a03026e26fd08"],["/static/media/email.e854eb8d.jpg","e854eb8d4c62e1da2174190029559df0"],["/static/media/enmIntl.549e777e.jpg","549e777ee0c6e504c78459ca0c1413f8"],["/static/media/enmRu.7e3377a8.jpg","7e3377a846919f6706d18dd0662e216e"],["/static/media/firebase.f131ba6c.png","f131ba6cda2b76b1a539512db1bf4300"],["/static/media/heroku.0446f863.png","0446f8636435d493f1349d92defd8253"],["/static/media/javascript.03cbde69.jpg","03cbde693a391ec3eaec7a535a6b4231"],["/static/media/material-ui-logo.cb2f65a2.svg","cb2f65a2181811ba82d3db0ed0880d1c"],["/static/media/mobile.05e0722b.jpg","05e0722b1bf92da51455aa97468c597c"],["/static/media/mongo.7fb7c5d0.png","7fb7c5d02dc79f3db6cae47a2ca1ea02"],["/static/media/myface.3e20b178.png","3e20b17829718cbb2f6675da272998b8"],["/static/media/mysql.78229801.png","782298013b08f866798d2cfa8c4d354e"],["/static/media/productInfo.7d4de67b.jpg","7d4de67b6eae0e26618cc433b3d8443b"],["/static/media/react.e4c89192.png","e4c891925b933b1e1955881896986b96"],["/static/media/rn.ce13eec4.png","ce13eec44c5df67482c3ff0c357a1b1b"],["/static/media/sass.64f68b22.png","64f68b222f5d8f40dbf5dcf0441e059c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});