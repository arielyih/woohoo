!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).jsSHA=t()}(this,function(){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function t(n,t,e,r){var i,u,o,s=t||[0],a=(e=e||0)>>>3,h=-1===r?3:0;for(i=0;i<n.length;i+=1)u=(o=i+a)>>>2,s.length<=u&&s.push(0),s[u]|=n[i]<<8*(h+r*(o%4));return{value:s,binLen:8*n.length+e}}function e(e,r,i){switch(r){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(e){case"HEX":return function(n,t,e){return function(n,t,e,r){var i,u,o,s;if(0!=n.length%2)throw new Error("String of HEX type must be in byte increments");var a=t||[0],h=(e=e||0)>>>3,f=-1===r?3:0;for(i=0;i<n.length;i+=2){if(u=parseInt(n.substr(i,2),16),isNaN(u))throw new Error("String of HEX type contains invalid characters");for(o=(s=(i>>>1)+h)>>>2;a.length<=o;)a.push(0);a[o]|=u<<8*(f+r*(s%4))}return{value:a,binLen:4*n.length+e}}(n,t,e,i)};case"TEXT":return function(n,t,e){return function(n,t,e,r,i){var u,o,s,a,h,f,c,w,l=0,v=e||[0],p=(r=r||0)>>>3;if("UTF8"===t)for(c=-1===i?3:0,s=0;s<n.length;s+=1)for(o=[],128>(u=n.charCodeAt(s))?o.push(u):2048>u?(o.push(192|u>>>6),o.push(128|63&u)):55296>u||57344<=u?o.push(224|u>>>12,128|u>>>6&63,128|63&u):(s+=1,u=65536+((1023&u)<<10|1023&n.charCodeAt(s)),o.push(240|u>>>18,128|u>>>12&63,128|u>>>6&63,128|63&u)),a=0;a<o.length;a+=1){for(h=(f=l+p)>>>2;v.length<=h;)v.push(0);v[h]|=o[a]<<8*(c+i*(f%4)),l+=1}else for(c=-1===i?2:0,w="UTF16LE"===t&&1!==i||"UTF16LE"!==t&&1===i,s=0;s<n.length;s+=1){for(u=n.charCodeAt(s),!0===w&&(u=(a=255&u)<<8|u>>>8),h=(f=l+p)>>>2;v.length<=h;)v.push(0);v[h]|=u<<8*(c+i*(f%4)),l+=2}return{value:v,binLen:8*l+r}}(n,r,t,e,i)};case"B64":return function(t,e,r){return function(t,e,r,i){var u,o,s,a,h,f,c=0,w=e||[0],l=(r=r||0)>>>3,v=-1===i?3:0,p=t.indexOf("=");if(-1===t.search(/^[a-zA-Z0-9=+/]+$/))throw new Error("Invalid character in base-64 string");if(t=t.replace(/=/g,""),-1!==p&&p<t.length)throw new Error("Invalid '=' found in base-64 string");for(u=0;u<t.length;u+=4){for(a=t.substr(u,4),s=0,o=0;o<a.length;o+=1)s|=n.indexOf(a.charAt(o))<<18-6*o;for(o=0;o<a.length-1;o+=1){for(h=(f=c+l)>>>2;w.length<=h;)w.push(0);w[h]|=(s>>>16-8*o&255)<<8*(v+i*(f%4)),c+=1}}return{value:w,binLen:8*c+r}}(t,e,r,i)};case"BYTES":return function(n,t,e){return function(n,t,e,r){var i,u,o,s,a=t||[0],h=(e=e||0)>>>3,f=-1===r?3:0;for(u=0;u<n.length;u+=1)i=n.charCodeAt(u),o=(s=u+h)>>>2,a.length<=o&&a.push(0),a[o]|=i<<8*(f+r*(s%4));return{value:a,binLen:8*n.length+e}}(n,t,e,i)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(n){throw new Error("ARRAYBUFFER not supported by this environment")}return function(n,e,r){return function(n,e,r,i){return t(new Uint8Array(n),e,r,i)}(n,e,r,i)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(n){throw new Error("UINT8ARRAY not supported by this environment")}return function(n,e,r){return t(n,e,r,i)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function r(t,e,r,i){switch(t){case"HEX":return function(n){return function(n,t,e,r){var i,u,o="",s=t/8,a=-1===e?3:0;for(i=0;i<s;i+=1)u=n[i>>>2]>>>8*(a+e*(i%4)),o+="0123456789abcdef".charAt(u>>>4&15)+"0123456789abcdef".charAt(15&u);return r.outputUpper?o.toUpperCase():o}(n,e,r,i)};case"B64":return function(t){return function(t,e,r,i){var u,o,s,a,h,f="",c=e/8,w=-1===r?3:0;for(u=0;u<c;u+=3)for(a=u+1<c?t[u+1>>>2]:0,h=u+2<c?t[u+2>>>2]:0,s=(t[u>>>2]>>>8*(w+r*(u%4))&255)<<16|(a>>>8*(w+r*((u+1)%4))&255)<<8|h>>>8*(w+r*((u+2)%4))&255,o=0;o<4;o+=1)f+=8*u+6*o<=e?n.charAt(s>>>6*(3-o)&63):i.b64Pad;return f}(t,e,r,i)};case"BYTES":return function(n){return function(n,t,e){var r,i,u="",o=t/8,s=-1===e?3:0;for(r=0;r<o;r+=1)i=n[r>>>2]>>>8*(s+e*(r%4))&255,u+=String.fromCharCode(i);return u}(n,e,r)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(n){throw new Error("ARRAYBUFFER not supported by this environment")}return function(n){return function(n,t,e){var r,i=t/8,u=new ArrayBuffer(i),o=new Uint8Array(u),s=-1===e?3:0;for(r=0;r<i;r+=1)o[r]=n[r>>>2]>>>8*(s+e*(r%4))&255;return u}(n,e,r)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(n){throw new Error("UINT8ARRAY not supported by this environment")}return function(n){return function(n,t,e){var r,i=t/8,u=-1===e?3:0,o=new Uint8Array(i);for(r=0;r<i;r+=1)o[r]=n[r>>>2]>>>8*(u+e*(r%4))&255;return o}(n,e,r)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}var i=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],u=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s="Chosen SHA variant is not supported";function a(n,t){var e,r,i=n.binLen>>>3,u=t.binLen>>>3,o=i<<3,s=4-i<<3;if(i%4!=0){for(e=0;e<u;e+=4)r=i+e>>>2,n.value[r]|=t.value[e>>>2]<<o,n.value.push(0),n.value[r+1]|=t.value[e>>>2]>>>s;return(n.value.length<<2)-4>=u+i&&n.value.pop(),{value:n.value,binLen:n.binLen+t.binLen}}return{value:n.value.concat(t.value),binLen:n.binLen+t.binLen}}function h(n){var t={outputUpper:!1,b64Pad:"=",outputLen:-1},e=n||{},r="Output length must be a multiple of 8";if(t.outputUpper=e.outputUpper||!1,e.b64Pad&&(t.b64Pad=e.b64Pad),e.outputLen){if(e.outputLen%8!=0)throw new Error(r);t.outputLen=e.outputLen}else if(e.shakeLen){if(e.shakeLen%8!=0)throw new Error(r);t.outputLen=e.shakeLen}if("boolean"!=typeof t.outputUpper)throw new Error("Invalid outputUpper formatting option");if("string"!=typeof t.b64Pad)throw new Error("Invalid b64Pad formatting option");return t}function f(n,t,r,i){var u=n+" must include a value and format";if(!t){if(!i)throw new Error(u);return i}if(void 0===t.value||!t.format)throw new Error(u);return e(t.format,t.encoding||"UTF8",r)(t.value)}var c=function(){function n(n,t,e){var r=e||{};if(this.t=t,this.i=r.encoding||"UTF8",this.numRounds=r.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=n,this.u=[],this.s=0,this.h=!1,this.v=0,this.A=!1,this.l=[],this.H=[]}return n.prototype.update=function(n){var t,e=0,r=this.S>>>5,i=this.p(n,this.u,this.s),u=i.binLen,o=i.value,s=u>>>5;for(t=0;t<s;t+=r)e+this.S<=u&&(this.m=this.R(o.slice(t,t+r),this.m),e+=this.S);this.v+=e,this.u=o.slice(e>>>5),this.s=u%this.S,this.h=!0},n.prototype.getHash=function(n,t){var e,i,u=this.U,o=h(t);if(this.T){if(-1===o.outputLen)throw new Error("Output length must be specified in options");u=o.outputLen}var s=r(n,u,this.C,o);if(this.A&&this.F)return s(this.F(o));for(i=this.K(this.u.slice(),this.s,this.v,this.B(this.m),u),e=1;e<this.numRounds;e+=1)this.T&&u%32!=0&&(i[i.length-1]&=16777215>>>24-u%32),i=this.K(i,u,0,this.L(this.o),u);return s(i)},n.prototype.setHMACKey=function(n,t,r){if(!this.g)throw new Error("Variant does not support HMAC");if(this.h)throw new Error("Cannot set MAC key after calling update");var i=e(t,(r||{}).encoding||"UTF8",this.C);this.k(i(n))},n.prototype.k=function(n){var t,e=this.S>>>3,r=e/4-1;if(1!==this.numRounds)throw new Error("Cannot set numRounds with MAC");if(this.A)throw new Error("MAC key already set");for(e<n.binLen/8&&(n.value=this.K(n.value,n.binLen,0,this.L(this.o),this.U));n.value.length<=r;)n.value.push(0);for(t=0;t<=r;t+=1)this.l[t]=909522486^n.value[t],this.H[t]=1549556828^n.value[t];this.m=this.R(this.l,this.m),this.v=this.S,this.A=!0},n.prototype.getHMAC=function(n,t){var e=h(t);return r(n,this.U,this.C,e)(this.Y())},n.prototype.Y=function(){var n;if(!this.A)throw new Error("Cannot call getHMAC without first setting MAC key");var t=this.K(this.u.slice(),this.s,this.v,this.B(this.m),this.U);return n=this.R(this.H,this.L(this.o)),this.K(t,this.U,this.S,n,this.U)},n}(),w=function(n,t){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(n,t)};function l(n,t){function e(){this.constructor=n}w(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}function v(n,t){return n<<t|n>>>32-t}function p(n,t){return n>>>t|n<<32-t}function A(n,t){return n>>>t}function N(n,t,e){return n^t^e}function I(n,t,e){return n&t^~n&e}function m(n,t,e){return n&t^n&e^t&e}function g(n){return p(n,2)^p(n,13)^p(n,22)}function S(n,t){var e=(65535&n)+(65535&t);return(65535&(n>>>16)+(t>>>16)+(e>>>16))<<16|65535&e}function d(n,t,e,r){var i=(65535&n)+(65535&t)+(65535&e)+(65535&r);return(65535&(n>>>16)+(t>>>16)+(e>>>16)+(r>>>16)+(i>>>16))<<16|65535&i}function y(n,t,e,r,i){var u=(65535&n)+(65535&t)+(65535&e)+(65535&r)+(65535&i);return(65535&(n>>>16)+(t>>>16)+(e>>>16)+(r>>>16)+(i>>>16)+(u>>>16))<<16|65535&u}function b(n){return p(n,7)^p(n,18)^A(n,3)}function E(n){return p(n,6)^p(n,11)^p(n,25)}function H(n){return[1732584193,4023233417,2562383102,271733878,3285377520]}function U(n,t){var e,r,i,u,o,s,a,h=[];for(e=t[0],r=t[1],i=t[2],u=t[3],o=t[4],a=0;a<80;a+=1)h[a]=a<16?n[a]:v(h[a-3]^h[a-8]^h[a-14]^h[a-16],1),s=a<20?y(v(e,5),I(r,i,u),o,1518500249,h[a]):a<40?y(v(e,5),N(r,i,u),o,1859775393,h[a]):a<60?y(v(e,5),m(r,i,u),o,2400959708,h[a]):y(v(e,5),N(r,i,u),o,3395469782,h[a]),o=u,u=i,i=v(r,30),r=e,e=s;return t[0]=S(e,t[0]),t[1]=S(r,t[1]),t[2]=S(i,t[2]),t[3]=S(u,t[3]),t[4]=S(o,t[4]),t}function C(n,t,e,r){for(var i,u=15+(t+65>>>9<<4),o=t+e;n.length<=u;)n.push(0);for(n[t>>>5]|=128<<24-t%32,n[u]=4294967295&o,n[u-1]=o/4294967296|0,i=0;i<n.length;i+=16)r=U(n.slice(i,i+16),r);return r}var R=function(n){function t(t,r,i){var u=this;if("SHA-1"!==t)throw new Error(s);var o=i||{};return(u=n.call(this,t,r,i)||this).g=!0,u.F=u.Y,u.C=-1,u.p=e(u.t,u.i,u.C),u.R=U,u.B=function(n){return n.slice()},u.L=H,u.K=C,u.m=[1732584193,4023233417,2562383102,271733878,3285377520],u.S=512,u.U=160,u.T=!1,o.hmacKey&&u.k(f("hmacKey",o.hmacKey,u.C)),u}return l(t,n),t}(c);function L(n){return"SHA-224"==n?u.slice():o.slice()}function K(n,t){var e,r,u,o,s,a,h,f,c,w,l,v,N=[];for(e=t[0],r=t[1],u=t[2],o=t[3],s=t[4],a=t[5],h=t[6],f=t[7],l=0;l<64;l+=1)N[l]=l<16?n[l]:d(p(v=N[l-2],17)^p(v,19)^A(v,10),N[l-7],b(N[l-15]),N[l-16]),c=y(f,E(s),I(s,a,h),i[l],N[l]),w=S(g(e),m(e,r,u)),f=h,h=a,a=s,s=S(o,c),o=u,u=r,r=e,e=S(c,w);return t[0]=S(e,t[0]),t[1]=S(r,t[1]),t[2]=S(u,t[2]),t[3]=S(o,t[3]),t[4]=S(s,t[4]),t[5]=S(a,t[5]),t[6]=S(h,t[6]),t[7]=S(f,t[7]),t}var T=function(n){function t(t,r,i){var u=this;if("SHA-224"!==t&&"SHA-256"!==t)throw new Error(s);var o=i||{};return(u=n.call(this,t,r,i)||this).F=u.Y,u.g=!0,u.C=-1,u.p=e(u.t,u.i,u.C),u.R=K,u.B=function(n){return n.slice()},u.L=L,u.K=function(n,e,r,i){return function(n,t,e,r,i){for(var u,o=15+(t+65>>>9<<4),s=t+e;n.length<=o;)n.push(0);for(n[t>>>5]|=128<<24-t%32,n[o]=4294967295&s,n[o-1]=s/4294967296|0,u=0;u<n.length;u+=16)r=K(n.slice(u,u+16),r);return"SHA-224"===i?[r[0],r[1],r[2],r[3],r[4],r[5],r[6]]:r}(n,e,r,i,t)},u.m=L(t),u.S=512,u.U="SHA-224"===t?224:256,u.T=!1,o.hmacKey&&u.k(f("hmacKey",o.hmacKey,u.C)),u}return l(t,n),t}(c),F=function(n,t){this.N=n,this.I=t};function k(n,t){var e;return t>32?(e=64-t,new F(n.I<<t|n.N>>>e,n.N<<t|n.I>>>e)):0!==t?(e=32-t,new F(n.N<<t|n.I>>>e,n.I<<t|n.N>>>e)):n}function B(n,t){var e;return t<32?(e=32-t,new F(n.N>>>t|n.I<<e,n.I>>>t|n.N<<e)):(e=64-t,new F(n.I>>>t|n.N<<e,n.N>>>t|n.I<<e))}function Y(n,t){return new F(n.N>>>t,n.I>>>t|n.N<<32-t)}function M(n,t,e){return new F(n.N&t.N^~n.N&e.N,n.I&t.I^~n.I&e.I)}function j(n,t,e){return new F(n.N&t.N^n.N&e.N^t.N&e.N,n.I&t.I^n.I&e.I^t.I&e.I)}function O(n){var t=B(n,28),e=B(n,34),r=B(n,39);return new F(t.N^e.N^r.N,t.I^e.I^r.I)}function X(n,t){var e,r;e=(65535&n.I)+(65535&t.I);var i=(65535&(r=(n.I>>>16)+(t.I>>>16)+(e>>>16)))<<16|65535&e;return e=(65535&n.N)+(65535&t.N)+(r>>>16),r=(n.N>>>16)+(t.N>>>16)+(e>>>16),new F((65535&r)<<16|65535&e,i)}function z(n,t,e,r){var i,u;i=(65535&n.I)+(65535&t.I)+(65535&e.I)+(65535&r.I);var o=(65535&(u=(n.I>>>16)+(t.I>>>16)+(e.I>>>16)+(r.I>>>16)+(i>>>16)))<<16|65535&i;return i=(65535&n.N)+(65535&t.N)+(65535&e.N)+(65535&r.N)+(u>>>16),u=(n.N>>>16)+(t.N>>>16)+(e.N>>>16)+(r.N>>>16)+(i>>>16),new F((65535&u)<<16|65535&i,o)}function P(n,t,e,r,i){var u,o;u=(65535&n.I)+(65535&t.I)+(65535&e.I)+(65535&r.I)+(65535&i.I);var s=(65535&(o=(n.I>>>16)+(t.I>>>16)+(e.I>>>16)+(r.I>>>16)+(i.I>>>16)+(u>>>16)))<<16|65535&u;return u=(65535&n.N)+(65535&t.N)+(65535&e.N)+(65535&r.N)+(65535&i.N)+(o>>>16),o=(n.N>>>16)+(t.N>>>16)+(e.N>>>16)+(r.N>>>16)+(i.N>>>16)+(u>>>16),new F((65535&o)<<16|65535&u,s)}function _(n,t){return new F(n.N^t.N,n.I^t.I)}function x(n){var t=B(n,1),e=B(n,8),r=Y(n,7);return new F(t.N^e.N^r.N,t.I^e.I^r.I)}function V(n){var t=B(n,14),e=B(n,18),r=B(n,41);return new F(t.N^e.N^r.N,t.I^e.I^r.I)}var Z=[new F(i[0],3609767458),new F(i[1],602891725),new F(i[2],3964484399),new F(i[3],2173295548),new F(i[4],4081628472),new F(i[5],3053834265),new F(i[6],2937671579),new F(i[7],3664609560),new F(i[8],2734883394),new F(i[9],1164996542),new F(i[10],1323610764),new F(i[11],3590304994),new F(i[12],4068182383),new F(i[13],991336113),new F(i[14],633803317),new F(i[15],3479774868),new F(i[16],2666613458),new F(i[17],944711139),new F(i[18],2341262773),new F(i[19],2007800933),new F(i[20],1495990901),new F(i[21],1856431235),new F(i[22],3175218132),new F(i[23],2198950837),new F(i[24],3999719339),new F(i[25],766784016),new F(i[26],2566594879),new F(i[27],3203337956),new F(i[28],1034457026),new F(i[29],2466948901),new F(i[30],3758326383),new F(i[31],168717936),new F(i[32],1188179964),new F(i[33],1546045734),new F(i[34],1522805485),new F(i[35],2643833823),new F(i[36],2343527390),new F(i[37],1014477480),new F(i[38],1206759142),new F(i[39],344077627),new F(i[40],1290863460),new F(i[41],3158454273),new F(i[42],3505952657),new F(i[43],106217008),new F(i[44],3606008344),new F(i[45],1432725776),new F(i[46],1467031594),new F(i[47],851169720),new F(i[48],3100823752),new F(i[49],1363258195),new F(i[50],3750685593),new F(i[51],3785050280),new F(i[52],3318307427),new F(i[53],3812723403),new F(i[54],2003034995),new F(i[55],3602036899),new F(i[56],1575990012),new F(i[57],1125592928),new F(i[58],2716904306),new F(i[59],442776044),new F(i[60],593698344),new F(i[61],3733110249),new F(i[62],2999351573),new F(i[63],3815920427),new F(3391569614,3928383900),new F(3515267271,566280711),new F(3940187606,3454069534),new F(4118630271,4000239992),new F(116418474,1914138554),new F(174292421,2731055270),new F(289380356,3203993006),new F(460393269,320620315),new F(685471733,587496836),new F(852142971,1086792851),new F(1017036298,365543100),new F(1126000580,2618297676),new F(1288033470,3409855158),new F(1501505948,4234509866),new F(1607167915,987167468),new F(1816402316,1246189591)];function q(n){return"SHA-384"===n?[new F(3418070365,u[0]),new F(1654270250,u[1]),new F(2438529370,u[2]),new F(355462360,u[3]),new F(1731405415,u[4]),new F(41048885895,u[5]),new F(3675008525,u[6]),new F(1203062813,u[7])]:[new F(o[0],4089235720),new F(o[1],2227873595),new F(o[2],4271175723),new F(o[3],1595750129),new F(o[4],2917565137),new F(o[5],725511199),new F(o[6],4215389547),new F(o[7],327033209)]}function D(n,t){var e,r,i,u,o,s,a,h,f,c,w,l,v,p,A,N,I=[];for(e=t[0],r=t[1],i=t[2],u=t[3],o=t[4],s=t[5],a=t[6],h=t[7],w=0;w<80;w+=1)w<16?(l=2*w,I[w]=new F(n[l],n[l+1])):I[w]=z((void 0,void 0,void 0,p=B(v=I[w-2],19),A=B(v,61),N=Y(v,6),new F(p.N^A.N^N.N,p.I^A.I^N.I)),I[w-7],x(I[w-15]),I[w-16]),f=P(h,V(o),M(o,s,a),Z[w],I[w]),c=X(O(e),j(e,r,i)),h=a,a=s,s=o,o=X(u,f),u=i,i=r,r=e,e=X(f,c);return t[0]=X(e,t[0]),t[1]=X(r,t[1]),t[2]=X(i,t[2]),t[3]=X(u,t[3]),t[4]=X(o,t[4]),t[5]=X(s,t[5]),t[6]=X(a,t[6]),t[7]=X(h,t[7]),t}var G=function(n){function t(t,r,i){var u=this;if("SHA-384"!==t&&"SHA-512"!==t)throw new Error(s);var o=i||{};return(u=n.call(this,t,r,i)||this).F=u.Y,u.g=!0,u.C=-1,u.p=e(u.t,u.i,u.C),u.R=D,u.B=function(n){return n.slice()},u.L=q,u.K=function(n,e,r,i){return function(n,t,e,r,i){for(var u,o=31+(t+129>>>10<<5),s=t+e;n.length<=o;)n.push(0);for(n[t>>>5]|=128<<24-t%32,n[o]=4294967295&s,n[o-1]=s/4294967296|0,u=0;u<n.length;u+=32)r=D(n.slice(u,u+32),r);return"SHA-384"===i?[(r=r)[0].N,r[0].I,r[1].N,r[1].I,r[2].N,r[2].I,r[3].N,r[3].I,r[4].N,r[4].I,r[5].N,r[5].I]:[r[0].N,r[0].I,r[1].N,r[1].I,r[2].N,r[2].I,r[3].N,r[3].I,r[4].N,r[4].I,r[5].N,r[5].I,r[6].N,r[6].I,r[7].N,r[7].I]}(n,e,r,i,t)},u.m=q(t),u.S=1024,u.U="SHA-384"===t?384:512,u.T=!1,o.hmacKey&&u.k(f("hmacKey",o.hmacKey,u.C)),u}return l(t,n),t}(c),J=[new F(0,1),new F(0,32898),new F(2147483648,32906),new F(2147483648,2147516416),new F(0,32907),new F(0,2147483649),new F(2147483648,2147516545),new F(2147483648,32777),new F(0,138),new F(0,136),new F(0,2147516425),new F(0,2147483658),new F(0,2147516555),new F(2147483648,139),new F(2147483648,32905),new F(2147483648,32771),new F(2147483648,32770),new F(2147483648,128),new F(0,32778),new F(2147483648,2147483658),new F(2147483648,2147516545),new F(2147483648,32896),new F(0,2147483649),new F(2147483648,2147516424)],Q=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function W(n){var t,e=[];for(t=0;t<5;t+=1)e[t]=[new F(0,0),new F(0,0),new F(0,0),new F(0,0),new F(0,0)];return e}function $(n){var t,e=[];for(t=0;t<5;t+=1)e[t]=n[t].slice();return e}function nn(n,t){var e,r,i,u,o,s,a,h,f,c=[],w=[];if(null!==n)for(r=0;r<n.length;r+=2)t[(r>>>1)%5][(r>>>1)/5|0]=_(t[(r>>>1)%5][(r>>>1)/5|0],new F(n[r+1],n[r]));for(e=0;e<24;e+=1){for(u=W(),r=0;r<5;r+=1)c[r]=(o=t[r][0],s=t[r][1],a=t[r][2],h=t[r][3],f=t[r][4],new F(o.N^s.N^a.N^h.N^f.N,o.I^s.I^a.I^h.I^f.I));for(r=0;r<5;r+=1)w[r]=_(c[(r+4)%5],k(c[(r+1)%5],1));for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)t[r][i]=_(t[r][i],w[r]);for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)u[i][(2*r+3*i)%5]=k(t[r][i],Q[r][i]);for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)t[r][i]=_(u[r][i],new F(~u[(r+1)%5][i].N&u[(r+2)%5][i].N,~u[(r+1)%5][i].I&u[(r+2)%5][i].I));t[0][0]=_(t[0][0],J[e])}return t}function tn(n){var t,e,r=0,i=[0,0],u=[4294967295&n,n/4294967296&2097151];for(t=6;t>=0;t--)0==(e=u[t>>2]>>>8*t&255)&&0===r||(i[r+1>>2]|=e<<8*(r+1),r+=1);return r=0!==r?r:1,i[0]|=r,{value:r+1>4?i:[i[0]],binLen:8+8*r}}function en(n){return a(tn(n.binLen),n)}function rn(n,t){var e,r=tn(t),i=t>>>2,u=(i-(r=a(r,n)).value.length%i)%i;for(e=0;e<u;e++)r.value.push(0);return r.value}var un=function(n){function t(t,r,i){var u=this,o=6,a=0,h=i||{};if(1!==(u=n.call(this,t,r,i)||this).numRounds){if(h.kmacKey||h.hmacKey)throw new Error("Cannot set numRounds with MAC");if("CSHAKE128"===u.o||"CSHAKE256"===u.o)throw new Error("Cannot set numRounds for CSHAKE variants")}switch(u.C=1,u.p=e(u.t,u.i,u.C),u.R=nn,u.B=$,u.L=W,u.m=W(),u.T=!1,t){case"SHA3-224":u.S=a=1152,u.U=224,u.g=!0,u.F=u.Y;break;case"SHA3-256":u.S=a=1088,u.U=256,u.g=!0,u.F=u.Y;break;case"SHA3-384":u.S=a=832,u.U=384,u.g=!0,u.F=u.Y;break;case"SHA3-512":u.S=a=576,u.U=512,u.g=!0,u.F=u.Y;break;case"SHAKE128":o=31,u.S=a=1344,u.U=-1,u.T=!0,u.g=!1,u.F=null;break;case"SHAKE256":o=31,u.S=a=1088,u.U=-1,u.T=!0,u.g=!1,u.F=null;break;case"KMAC128":o=4,u.S=a=1344,u.M(i),u.U=-1,u.T=!0,u.g=!1,u.F=u.X;break;case"KMAC256":o=4,u.S=a=1088,u.M(i),u.U=-1,u.T=!0,u.g=!1,u.F=u.X;break;case"CSHAKE128":u.S=a=1344,o=u.O(i),u.U=-1,u.T=!0,u.g=!1,u.F=null;break;case"CSHAKE256":u.S=a=1088,o=u.O(i),u.U=-1,u.T=!0,u.g=!1,u.F=null;break;default:throw new Error(s)}return u.K=function(n,t,e,r,i){return function(n,t,e,r,i,u,o){var s,a,h=0,f=[],c=i>>>5,w=t>>>5;for(s=0;s<w&&t>=i;s+=c)r=nn(n.slice(s,s+c),r),t-=i;for(n=n.slice(s),t%=i;n.length<c;)n.push(0);for(n[(s=t>>>3)>>2]^=u<<s%4*8,n[c-1]^=2147483648,r=nn(n,r);32*f.length<o&&(a=r[h%5][h/5|0],f.push(a.I),!(32*f.length>=o));)f.push(a.N),0==64*(h+=1)%i&&(nn(null,r),h=0);return f}(n,t,0,r,a,o,i)},h.hmacKey&&u.k(f("hmacKey",h.hmacKey,u.C)),u}return l(t,n),t.prototype.O=function(n,t){var e=function(n){var t=n||{};return{funcName:f("funcName",t.funcName,1,{value:[],binLen:0}),customization:f("Customization",t.customization,1,{value:[],binLen:0})}}(n||{});t&&(e.funcName=t);var r=a(en(e.funcName),en(e.customization));if(0!==e.customization.binLen||0!==e.funcName.binLen){for(var i=rn(r,this.S>>>3),u=0;u<i.length;u+=this.S>>>5)this.m=this.R(i.slice(u,u+(this.S>>>5)),this.m),this.v+=this.S;return 4}return 31},t.prototype.M=function(n){var t=function(n){var t=n||{};return{kmacKey:f("kmacKey",t.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:f("Customization",t.customization,1,{value:[],binLen:0})}}(n||{});this.O(n,t.funcName);for(var e=rn(en(t.kmacKey),this.S>>>3),r=0;r<e.length;r+=this.S>>>5)this.m=this.R(e.slice(r,r+(this.S>>>5)),this.m),this.v+=this.S;this.A=!0},t.prototype.X=function(n){var t=a({value:this.u.slice(),binLen:this.s},function(n){var t,e,r=0,i=[0,0],u=[4294967295&n,n/4294967296&2097151];for(t=6;t>=0;t--)0==(e=u[t>>2]>>>8*t&255)&&0===r||(i[r>>2]|=e<<8*r,r+=1);return i[(r=0!==r?r:1)>>2]|=r<<8*r,{value:r+1>4?i:[i[0]],binLen:8+8*r}}(n.outputLen));return this.K(t.value,t.binLen,this.v,this.B(this.m),n.outputLen)},t}(c);return function(){function n(n,t,e){if("SHA-1"==n)this.j=new R(n,t,e);else if("SHA-224"==n||"SHA-256"==n)this.j=new T(n,t,e);else if("SHA-384"==n||"SHA-512"==n)this.j=new G(n,t,e);else{if("SHA3-224"!=n&&"SHA3-256"!=n&&"SHA3-384"!=n&&"SHA3-512"!=n&&"SHAKE128"!=n&&"SHAKE256"!=n&&"CSHAKE128"!=n&&"CSHAKE256"!=n&&"KMAC128"!=n&&"KMAC256"!=n)throw new Error(s);this.j=new un(n,t,e)}}return n.prototype.update=function(n){this.j.update(n)},n.prototype.getHash=function(n,t){return this.j.getHash(n,t)},n.prototype.setHMACKey=function(n,t,e){this.j.setHMACKey(n,t,e)},n.prototype.getHMAC=function(n,t){return this.j.getHMAC(n,t)},n}()});

$(function() {
  var searchVal = getParam('q'),
    searchCity = getParam('c');

  if (searchVal != null) {
    datas.getApi([{ 'class': 'Name', 'val': searchVal }]);
    $('#search-bar').val(searchVal);
  } else if (searchCity != null) {
    var ary = [{ 'class': 'city', 'val': [{ 'name': searchCity, 'idx': getCityIdx(searchCity) }] }];
    datas.getApi(ary);
    filter.setOutside(ary);
    $('.search-clear').addClass('hide');
  } else {
    datas.getApi([]);
    $('.search-clear').addClass('hide');
  }
  result.init();

  window.onload = function() {
    $('.loading-wrap').removeClass('show');
  };
});

function getCityIdx(name) {
  switch (name) {
    case '臺北市':
      return 1;
      break;
    case '新北市':
      return 2;
      break;
    case '桃園市':
      return 3;
      break;
    case '新竹市':
      return 4;
      break;
    case '苗栗縣':
      return 5;
      break;
    case '臺中市':
      return 6;
      break;
    case '彰化縣':
      return 7;
      break;
    case '雲林縣':
      return 8;
      break;
    case '嘉義市':
      return 9;
      break;
    case '臺南市':
      return 10;
      break;
    case '高雄市':
      return 11;
      break;
    case '屏東縣':
      return 12;
      break;
    case '基隆市':
      return 13;
      break;
    case '新北市':
      return 14;
      break;
    case '宜蘭縣':
      return 15;
      break;
    case '新竹縣':
      return 16;
      break;
    case '南投縣':
      return 17;
      break;
    case '花蓮縣':
      return 18;
      break;
    case '嘉義縣':
      return 19;
      break;
    case '臺東縣':
      return 20;
      break;
    case '連江縣':
      return 21;
      break;
    case '澎湖縣':
      return 22;
      break;
    case '金門縣':
      return 23;
      break;
    default:
      return 0;;
      break;
  }
}

var result = {
    filterAry: [],
    init: function() {
      var $searchInput = $('.search-wrap').find('input'),
        $clearBtn = $('.search-clear'),
        $popup = $('.result-popup');

      $clearBtn.on('click', function() {
        if ($searchInput.val() !== '') $searchInput.val('');
        datas.searchAry = [];
        datas.getApi(datas.searchAry);
        $clearBtn.addClass('hide');
      });

      $searchInput.on('keyup', function() {
        if ($(this).val() == '') $clearBtn.addClass('hide');
        else $clearBtn.removeClass('hide');
      });

      $('.search-btn').on('click', function() {
        if ($searchInput.val() !== '') {
          if (location.hostname !== '') window.location = 'https://' + location.hostname + '/woohoo/result?q=' + $searchInput.val();
          else window.location = 'file:///Users/arielyih/Documents/woohoo/' + 'result.html?q=' + $searchInput.val();
        }
      });

      $('.result-info').on('click', '.result-item', function() {
        if (!$('.result-info').hasClass('show-list') || $(window).width() < 768) {
          $(this).clone().appendTo('.result-popup');
          $popup.addClass('open');
        }
      });

      $('.popup-close').on('click', function() {
        $popup.removeClass('open');
        $popup.find('.result-item').remove();
      });

      $('.show-list-grid').find('button').on('click', function() {
        var $info = $('.result-info');
        if ($(this).hasClass('icon-list-view')) {
          $(this).parent().addClass('is-list');
          $info.addClass('show-list');
        } else {
          $(this).parent().removeClass('is-list');
          $info.removeClass('show-list');
        }
      });

      $('.result-pages button').on('click', function() {
        var $parent = $(this).parent();

        if ($(this).hasClass('page-up')) {
          datas.page -= 1;
          datas.getApi(datas.searchAry);
          if ($parent.hasClass('end')) $parent.removeClass('end');
        } else {
          datas.page += 1;
          datas.getApi(datas.searchAry);
          if ($parent.hasClass('start')) $parent.removeClass('start');
        }
      });

      filter.init();
    }
  },
  filter = {
    init: function() {
      var $filterBtn = $('.filter-btn'),
        $panel = $('.filter-panel'),
        $info = $('.filter-info'),
        $this = this;

      $filterBtn.on('click', function() {
        var classVal = '',
          idx = 1;
        // set panel
        $info.find('button').each(function() {
          classVal = $(this).data('class');
          idx = $(this).data('idx');
          $panel.find('[data-class="' + classVal + '"]').find('li:nth-of-type(' + idx + ')').addClass('active');
        });

        $(this).toggleClass('open');
        $panel.toggleClass('open');
      });

      $info.on('click', 'button', function() {
        var btnClass = $(this).data('class'),
          btnVal = $(this).find('span').text(),
          $wrap = $('.filter-wrap'),
          count = $('.filter-count').text();
        $.each(datas.searchAry, function(idx, val) {
          if (val.class == btnClass) {
            $.each(val.val, function(index, value) {
              if (value.name == btnVal) {
                val.val.splice(index, 1)
              }
            });
          }
        });
        $(this).remove();
        count--;
        if (count == 0) {
          $wrap.removeClass('show');
        } else {
          $('.filter-count').text(count);
        }
        datas.getApi(datas.searchAry);
      });

      $('.panel-close').on('click', function() {
        $this.panelClose();
      });

      $panel.find('li').on('click', function() {
        $(this).toggleClass('active');
      });

      $('.clear-all').on('click', function() {
        $info.find('button').remove();
        $this.panelClose();
        // call api
      });

      $('.filter-submit').on('click', function() {
        var $wrap = $('.filter-wrap'),
          count = $this.count('city') + $this.count('time') + $this.count('type');

        if (datas.searchAry.length == 4) datas.searchAry = [datas.searchAry[0]];
        else if (datas.searchAry.length !== 0 && datas.searchAry[0].class != 'Name') datas.searchAry = [];
        datas.searchAry.push({ 'class': 'city', 'val': $this.submit('city') });
        datas.searchAry.push({ 'class': 'time', 'val': $this.submit('time') });
        datas.searchAry.push({ 'class': 'type', 'val': $this.submit('type') });

        if (count == 0) {
          $wrap.removeClass('show');
        } else {
          $wrap.addClass('show').find('.filter-count').text(count);
        }

        $info.find('button').remove();
        $this.setOutside(datas.searchAry);
        datas.getApi(datas.searchAry);
      });
    },
    panelClose: function() {
      $('.filter-panel').removeClass('open').find('li.active').removeClass('active');
      $('.filter-btn').removeClass('open');
    },
    submit: function(name) {
      var ary = [];
      $('.filter-panel').find('[data-class="' + name + '"]').find('.active').each(function() {
        ary.push({ 'name': $(this).text(), 'idx': $(this).index() + 1 });
      });
      return ary;
    },
    count: function(name) {
      return $('.filter-panel').find('[data-class="' + name + '"]').find('.active').length;
    },
    setOutside: function(ary) {
      var idx = 0,
        elm = '';
      while (idx < ary.length) {
        if (ary[idx].val.length > 0) {
          var valClass = ary[idx].class,
            valAry = ary[idx].val;
          if (valClass !== 'Name') {
            $.each(valAry, function(idx, val) {
              elm = '<button data-class="' + valClass + '" data-idx="' + val.idx + '"><span>' + val.name + '</span><div class="btn-close"></div></button>'
              $('.filter-info>div').append(elm);
            });
          }
        }
        idx++;
      }
      this.panelClose();
    }
  },
  datas = {
    page: 0,
    searchAry: [],
    getApi: function(searchAry) {
      if ($('.result-info').find('.result-item').length > 0) $('.result-info').find('.result-item').remove();
      $('.loading-wrap').addClass('show');
      var $this = this,
        idx = 0,
        searchVal = '',
        url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=36&$skip=' + $this.page * 36 + '&';
      $this.searchAry = searchAry;
      if (searchAry.length !== 0) {
        while (idx < searchAry.length) {
          var info = searchAry[idx],
            filterName = '',
            searchTemp = '';
          switch (info.class) {
            case 'city':
              filterName = 'City';
              break;
            case 'time':
              filterName = 'OpenTime';
              break;
            case 'type':
              filterName = 'Class';
              break;
            default:
              filterName = info.class;
              break;
          }
          if (filterName == 'Name') searchTemp = "contains(" + info.class + ",'" + info.val + "')";
          else {
            if (info.val.length > 0) {
              searchTemp = '(';
              if (filterName == 'Class') {
                $.each(info.val, function(idx, val) {
                  if (idx !== 0) searchTemp += ' or ';
                  searchTemp = searchTemp + "contains(Class1,'" + val.name + "') or contains(Class2,'" + val.name + "') or contains(Class3,'" + val.name + "')";
                });
              } else {
                $.each(info.val, function(idx, val) {
                  if (idx !== 0) searchTemp += ' or ';
                  searchTemp = searchTemp + "contains(" + filterName + ",'" + val.name + "')";
                });
              }
              searchTemp += ')';
            }
          }
          if (searchTemp !== '') {
            if (searchVal !== '') searchVal = searchVal + ' and ' + searchTemp;
            else searchVal = searchTemp;
          }

          idx++;
        }
      }
      searchVal = (searchVal == '') ? '$format=JSON' : '$filter=' + searchVal + '&$format=JSON';
      url += searchVal;
      $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        headers: $this.getAuthorizationHeader(),
        success: function(data) {
          $this.setResult(data);
        }
      });
    },
    getAuthorizationHeader: function() {
      var AppID = '3f3793038b0c4aa8b0547de43c28cc64';
      var AppKey = 'fd6eIy1aeKyXq1o0X1pEi_5k0IM';
      var GMTString = new Date().toGMTString();
      var ShaObj = new jsSHA('SHA-1', 'TEXT');
      ShaObj.setHMACKey(AppKey, 'TEXT');
      ShaObj.update('x-date: ' + GMTString);
      var HMAC = ShaObj.getHMAC('B64');
      var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

      return { 'Authorization': Authorization, 'X-Date': GMTString };
    },
    setResult: function(data) {
      var elm = '',
        idx = 0,
        info,
        length = data.length,
        page = datas.page,
        $btns = $('.result-pages');


      $btns.removeClass('hide start end');
      if (page == 0) $btns.addClass('start').removeClass('end');

      if (length < 36) {
        $btns.addClass('end').removeClass('start');
        if (page == 0) $btns.addClass('hide');
      }
      if (length > 0) {
        while (idx < length) {
          info = data[idx];
          elm = '<div class="result-item"><div class="img-wrap';
          if (info.Picture.PictureDescription1 !== undefined) {
            elm = elm + '"><img src="' + info.Picture.PictureUrl1 + '" alt="' + info.Picture.PictureDescription1 + '" onerror="imgError(this)"></div>'
          } else {
            elm = elm + ' no-img"></div>'
          }
          elm += '<div class="info-wrap"><div class="result-title"><h3>' + info.Name + '</h3><div class="pop-add-tel"><a href="https://www.google.com/maps?q=' + info.Address + '" target="_blank"><i class="icon-location"></i>' + info.Address + '</a><a href="tel:' + info.Phone + '"><i class="icon-phone"></i>' + info.Phone + '</a></div></div><div class="pop-scroll"><p class="pop-des">' + info.DescriptionDetail.replace(/。。/g, '。').replace(/。/g, '。\n<i/>') + '</p><ul>';
          if (info.OpenTime !== undefined) {
            elm = elm + '<li class="result-open"><h4><i class="icon-clock"></i>開放時間</h4><p>' + info.OpenTime + '</p></li>';
          }
          if (info.TicketInfo !== undefined) {
            elm = elm + '<li class="result-ticket"><h4><i class="icon-ticket"></i>票價資訊</h4><p>' + info.TicketInfo + '</p></li>';
          }
          if (info.WebsiteUrl !== undefined) {
            elm = elm + '<li class="result-website"><h4><i class="icon-globe"></i>網站</h4><a href="' + info.WebsiteUrl + '" target="_blank">前往</a></li>';
          }
          if (info.TravelInfo !== undefined) {
            elm = elm + '<li class="result-tranport"><h4><i class="icon-transport"></i>交通資訊</h4><p>' + info.TravelInfo.replace(/。。/g, '。').replace(/。/g, '。\n<i/>') + '</p></li>';
          }
          if (info.Remarks !== undefined) {
            elm = elm + '<li class="result-cautions"><h4><i class="icon-cautions"></i>警告及注意事項</h4><p>' + info.Remarks.replace(/。。/g, '。').replace(/。/g, '。\n<i/>') + '</p></li>';
          }
          elm += '</ul></div><p class="result-tag">';
          if (info.City !== undefined) {
            elm = elm + '<span>#' + info.City + '</span>'
          }
          if (info.Class1 !== undefined) {
            elm = elm + '<span>#' + info.Class1 + '</span>'
          }
          if (info.Class2 !== undefined) {
            elm = elm + '<span>#' + info.Class2 + '</span>'
          }
          if (info.Class3 !== undefined) {
            elm = elm + '<span>#' + info.Class3 + '</span>'
          }
          elm += "</p>"

          $('.result-info').append(elm);
          idx++;
        }
      }
      else {
        elm = '<div class="result-item no-info">Oops 找不到您搜尋的資料</div>';
        $('.result-info').append(elm);
      }
      $('.loading-wrap').removeClass('show');
    }
  }

function getParam(key) {
  var searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(key);
}

function imgError(img) {
  $(img).parent().addClass('no-img');
  $(img).remove();
}