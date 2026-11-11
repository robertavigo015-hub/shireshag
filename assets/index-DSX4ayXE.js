(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,N=33779,P=35840,ne=35841,F=35842,I=35843,re=36196,ie=37492,ae=37496,oe=37488,L=37489,se=37490,ce=37491,le=37808,ue=37809,de=37810,fe=37811,pe=37812,me=37813,he=37814,ge=37815,_e=37816,ve=37817,ye=37818,be=37819,xe=37820,Se=37821,Ce=36492,we=36494,Te=36495,Ee=36283,De=36284,Oe=36285,ke=36286,Ae=2300,je=2301,R=2302,Me=2303,Ne=2400,Pe=2401,z=2402,Fe=3200,Ie=`srgb`,B=`srgb-linear`,Le=`linear`,Re=`srgb`,ze=7680,Be=35044,Ve=35048,He=2e3;function Ue(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function We(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ge(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ke(){let e=Ge(`canvas`);return e.style.display=`block`,e}var qe={};function Je(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ye(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function V(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function H(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Xe(...e){let t=e.join(` `);t in qe||(qe[t]=!0,V(...e))}function Ze(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Qe={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},$e=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},et=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),tt=1234567,nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(et[e&255]+et[e>>8&255]+et[e>>16&255]+et[e>>24&255]+`-`+et[t&255]+et[t>>8&255]+`-`+et[t>>16&15|64]+et[t>>24&255]+`-`+et[n&63|128]+et[n>>8&255]+`-`+et[n>>16&255]+et[n>>24&255]+et[r&255]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]).toLowerCase()}function at(e,t,n){return Math.max(t,Math.min(n,e))}function ot(e,t){return(e%t+t)%t}function st(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ct(e,t,n){return e===t?0:(n-e)/(t-e)}function lt(e,t,n){return(1-n)*e+n*t}function ut(e,t,n,r){return lt(e,t,1-Math.exp(-n*r))}function dt(e,t=1){return t-Math.abs(ot(e,t*2)-t)}function ft(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function mt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ht(e,t){return e+Math.random()*(t-e)}function gt(e){return e*(.5-Math.random())}function _t(e){e!==void 0&&(tt=e);let t=tt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vt(e){return e*nt}function yt(e){return e*rt}function bt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function xt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function St(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ct(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:V(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function wt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tt(e,t){if(t.constructor===Float32Array)return e;let n=wt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Et(e,t){if(t.constructor===Float32Array)return e;let n=wt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Dt={DEG2RAD:nt,RAD2DEG:rt,generateUUID:it,clamp:at,euclideanModulo:ot,mapLinear:st,inverseLerp:ct,lerp:lt,damp:ut,pingpong:dt,smoothstep:ft,smootherstep:pt,randInt:mt,randFloat:ht,randFloatSpread:gt,seededRandom:_t,degToRad:vt,radToDeg:yt,isPowerOfTwo:bt,ceilPowerOfTwo:xt,floorPowerOfTwo:St,setQuaternionFromProperEuler:Ct,normalize:Et,denormalize:Tt},U=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:V(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(At.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(At.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kt.copy(this).projectOnVector(e),this.sub(kt)}reflect(e){return this.sub(kt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kt=new W,At=new Ot,G=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Xe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(jt.makeScale(e,t)),this}rotate(e){return Xe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(jt.makeRotation(-e)),this}translate(e,t){return Xe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(jt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jt=new G,Mt=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nt=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pt(){let e={enabled:!0,workingColorSpace:B,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Lt(e.r),e.g=Lt(e.g),e.b=Lt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Le:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[B]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),e}var Ft=Pt();function It(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Lt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Rt,zt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rt===void 0&&(Rt=Ge(`canvas`)),Rt.width=e.width,Rt.height=e.height;let t=Rt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Rt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ge(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=It(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(It(t[e]/255)*255):t[e]=It(t[e]);return{data:t,width:e.width,height:e.height}}return V(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Bt=0,Vt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bt++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ht(r[t].image)):e.push(Ht(r[t]))}else e=Ht(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ht(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?zt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(V(`Texture: Unable to serialize Texture.`),{})}var Ut=0,Wt=new W,Gt=class r extends $e{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=it(),this.name=``,this.source=new Vt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wt).x}get height(){return this.source.getSize(Wt).y}get depth(){return this.source.getSize(Wt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){V(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null,Gt.DEFAULT_MAPPING=300,Gt.DEFAULT_ANISOTROPY=1;var Kt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qt=class extends $e{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Gt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Vt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Jt=class extends qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yt=class extends Gt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Xt=class extends Gt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Zt=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Qt.setFromMatrixColumn(e,0).length(),i=1/Qt.setFromMatrixColumn(e,1).length(),a=1/Qt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(en,e,tn)}lookAt(e,t,n){let r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),nn.crossVectors(n,an),nn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),nn.crossVectors(n,an)),nn.normalize(),rn.crossVectors(an,nn),r[0]=nn.x,r[4]=rn.x,r[8]=an.x,r[1]=nn.y,r[5]=rn.y,r[9]=an.y,r[2]=nn.z,r[6]=rn.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*N,i[12]=a*w+o*O+s*j+c*P,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*N,i[13]=l*w+u*O+d*j+f*P,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*N,i[14]=p*w+m*O+h*j+g*P,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*N,i[15]=_*w+v*O+y*j+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Qt.set(r[0],r[1],r[2]).length(),o=Qt.set(r[4],r[5],r[6]).length(),s=Qt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),$t.copy(this);let c=1/a,l=1/o,u=1/s;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=l,$t.elements[5]*=l,$t.elements[6]*=l,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qt=new W,$t=new Zt,en=new W(0,0,0),tn=new W(1,1,1),nn=new W,rn=new W,an=new W,on=new Zt,sn=new Ot,cn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-at(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:V(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return on.makeRotationFromQuaternion(e),this.setFromRotationMatrix(on,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sn.setFromEuler(this),this.setFromQuaternion(sn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER=`XYZ`;var ln=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},un=0,dn=new W,fn=new Ot,pn=new Zt,mn=new W,hn=new W,gn=new W,_n=new Ot,vn=new W(1,0,0),yn=new W(0,1,0),bn=new W(0,0,1),xn={type:`added`},Sn={type:`removed`},Cn={type:`childadded`,child:null},wn={type:`childremoved`,child:null},Tn=class e extends $e{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:un++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new cn,r=new Ot,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new G}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ln,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.multiply(fn),this}rotateOnWorldAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.premultiply(fn),this}rotateX(e){return this.rotateOnAxis(vn,e)}rotateY(e){return this.rotateOnAxis(yn,e)}rotateZ(e){return this.rotateOnAxis(bn,e)}translateOnAxis(e,t){return dn.copy(e).applyQuaternion(this.quaternion),this.position.add(dn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vn,e)}translateY(e){return this.translateOnAxis(yn,e)}translateZ(e){return this.translateOnAxis(bn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mn.copy(e):mn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),hn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(hn,mn,this.up):pn.lookAt(mn,hn,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),fn.setFromRotationMatrix(pn),this.quaternion.premultiply(fn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(H(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null):H(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sn),wn.child=e,this.dispatchEvent(wn),wn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hn,e,gn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hn,_n,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Tn.DEFAULT_UP=new W(0,1,0),Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=class extends Tn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Dn={type:`move`},On=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},jn={h:0,s:0,l:0};function Mn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ie){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ft.workingColorSpace){if(e=ot(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Mn(i,r,e+1/3),this.g=Mn(i,r,e),this.b=Mn(i,r,e-1/3)}return Ft.colorSpaceToWorking(this,r),this}setStyle(e,t=Ie){function n(t){t!==void 0&&parseFloat(t)<1&&V(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:V(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);V(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ie){let n=kn[e.toLowerCase()];return n===void 0?V(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}copyLinearToSRGB(e){return this.r=Lt(e.r),this.g=Lt(e.g),this.b=Lt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ie){return Ft.workingToColorSpace(Nn.copy(this),e),Math.round(at(Nn.r*255,0,255))*65536+Math.round(at(Nn.g*255,0,255))*256+Math.round(at(Nn.b*255,0,255))}getHexString(e=Ie){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(Nn.copy(this),t);let n=Nn.r,r=Nn.g,i=Nn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Ie){Ft.workingToColorSpace(Nn.copy(this),e);let t=Nn.r,n=Nn.g,r=Nn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(jn);let n=lt(An.h,jn.h,t),r=lt(An.s,jn.s,t),i=lt(An.l,jn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new K;K.NAMES=kn;var Pn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new K(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fn=class extends Tn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},In=new W,Ln=new W,Rn=new W,zn=new W,Bn=new W,Vn=new W,Hn=new W,Un=new W,Wn=new W,Gn=new W,Kn=new Kt,qn=new Kt,Jn=new Kt,Yn=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){In.subVectors(r,t),Ln.subVectors(n,t),Rn.subVectors(e,t);let a=In.dot(In),o=In.dot(Ln),s=In.dot(Rn),c=Ln.dot(Ln),l=Ln.dot(Rn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn)!==null&&zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,zn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,zn.x),s.addScaledVector(a,zn.y),s.addScaledVector(o,zn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Kn.setScalar(0),qn.setScalar(0),Jn.setScalar(0),Kn.fromBufferAttribute(e,t),qn.fromBufferAttribute(e,n),Jn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kn,i.x),a.addScaledVector(qn,i.y),a.addScaledVector(Jn,i.z),a}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),Ln.subVectors(e,t),In.cross(Ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),In.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Bn.subVectors(r,n),Vn.subVectors(i,n),Un.subVectors(e,n);let s=Bn.dot(Un),c=Vn.dot(Un);if(s<=0&&c<=0)return t.copy(n);Wn.subVectors(e,r);let l=Bn.dot(Wn),u=Vn.dot(Wn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Bn,a);Gn.subVectors(e,i);let f=Bn.dot(Gn),p=Vn.dot(Gn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Vn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Hn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Hn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Bn,a).addScaledVector(Vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Qn):Qn.fromBufferAttribute(r,t),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),$n.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),$n.copy(e.boundingBox)),$n.applyMatrix4(e.matrixWorld),this.union($n)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),sr.subVectors(this.max,or),er.subVectors(e.a,or),tr.subVectors(e.b,or),nr.subVectors(e.c,or),rr.subVectors(tr,er),ir.subVectors(nr,tr),ar.subVectors(er,nr);let t=[0,-rr.z,rr.y,0,-ir.z,ir.y,0,-ar.z,ar.y,rr.z,0,-rr.x,ir.z,0,-ir.x,ar.z,0,-ar.x,-rr.y,rr.x,0,-ir.y,ir.x,0,-ar.y,ar.x,0];return!ur(t,er,tr,nr,sr)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,er,tr,nr,sr))?!1:(cr.crossVectors(rr,ir),t=[cr.x,cr.y,cr.z],ur(t,er,tr,nr,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zn=[new W,new W,new W,new W,new W,new W,new W,new W],Qn=new W,$n=new Xn,er=new W,tr=new W,nr=new W,rr=new W,ir=new W,ar=new W,or=new W,sr=new W,cr=new W,lr=new W;function ur(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){lr.fromArray(e,a);let o=i.x*Math.abs(lr.x)+i.y*Math.abs(lr.y)+i.z*Math.abs(lr.z),s=t.dot(lr),c=n.dot(lr),l=r.dot(lr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var dr=new W,fr=new U,pr=0,mr=class extends $e{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Be,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:wt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix4(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyNormalMatrix(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.transformDirection(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Tt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Et(e,this.array):Math.round(e*t)}},hr=class extends mr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},gr=class extends mr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_r=class extends mr{constructor(e,t,n){super(new Float32Array(e),t,n)}},vr=new Xn,yr=new W,br=new W,xr=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?vr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(yr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(br)),this.expandByPoint(yr.copy(e.center).sub(br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sr=0,Cr=new Zt,wr=new Tn,Tr=new W,Er=new Xn,Dr=new Xn,Or=new W,kr=class e extends $e{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sr++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ue(e)?gr:hr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cr.makeRotationFromQuaternion(e),this.applyMatrix4(Cr),this}rotateX(e){return Cr.makeRotationX(e),this.applyMatrix4(Cr),this}rotateY(e){return Cr.makeRotationY(e),this.applyMatrix4(Cr),this}rotateZ(e){return Cr.makeRotationZ(e),this.applyMatrix4(Cr),this}translate(e,t,n){return Cr.makeTranslation(e,t,n),this.applyMatrix4(Cr),this}scale(e,t,n){return Cr.makeScale(e,t,n),this.applyMatrix4(Cr),this}lookAt(e){return wr.lookAt(e),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new _r(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&V(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)H(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Or.addVectors(this.boundingBox.min,Er.min),this.boundingBox.expandByPoint(Or),Or.addVectors(this.boundingBox.max,Er.max),this.boundingBox.expandByPoint(Or)):(this.boundingBox.expandByPoint(Er.min),this.boundingBox.expandByPoint(Er.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&H(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)H(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(Er.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dr.setFromBufferAttribute(n),this.morphTargetsRelative?(Or.addVectors(Er.min,Dr.min),Er.expandByPoint(Or),Or.addVectors(Er.max,Dr.max),Er.expandByPoint(Or)):(Er.expandByPoint(Dr.min),Er.expandByPoint(Dr.max))}Er.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Or.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Or));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Or.fromBufferAttribute(a,t),o&&(Tr.fromBufferAttribute(e,t),Or.add(Tr)),r=Math.max(r,n.distanceToSquared(Or))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&H(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){H(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new mr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let l=new W,u=new W,d=new W,f=new U,p=new U,m=new U,h=new W,g=new W;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new W,b=new W,x=new W,S=new W;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new mr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Or.fromBufferAttribute(e,t),Or.normalize(),e.setXYZ(t,Or.x,Or.y,Or.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new mr(a,r,i)}if(this.index===null)return V(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Be,this.updateRanges=[],this.version=0,this.uuid=it()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=jr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=jr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function jr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=it()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Mr=new W,Nr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:wt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix4(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyNormalMatrix(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.transformDirection(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Je(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new mr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Je(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?Tt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Et(e,this.data.array):Math.round(e*t)}},Pr=new W,Fr=new W,Ir=new G,Lr=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Pr.subVectors(n,t).cross(Fr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Pr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ir.getNormalMatrix(e),r=this.coplanarPoint(Pr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Rr=0,zr=class extends $e{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ze,this.stencilZFail=ze,this.stencilZPass=ze,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){V(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Lr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Br=class extends zr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vr,Hr=new W,Ur=new W,Wr=new W,Gr=new U,Kr=new U,qr=new Zt,Jr=new W,Yr=new W,Xr=new W,Zr=new U,Qr=new U,$r=new U,ei=class extends Tn{constructor(e=new Br){if(super(),this.isSprite=!0,this.type=`Sprite`,Vr===void 0){Vr=new kr;let e=new Ar(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute(`position`,new Nr(e,3,0,!1)),Vr.setAttribute(`uv`,new Nr(e,2,3,!1))}this.geometry=Vr,this.material=e,this.center=new U(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&H(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ur.setFromMatrixScale(this.matrixWorld),qr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ur.multiplyScalar(-Wr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ti(Jr.set(-.5,-.5,0),Wr,a,Ur,r,i),ti(Yr.set(.5,-.5,0),Wr,a,Ur,r,i),ti(Xr.set(.5,.5,0),Wr,a,Ur,r,i),Zr.set(0,0),Qr.set(1,0),$r.set(1,1);let o=e.ray.intersectTriangle(Jr,Yr,Xr,!1,Hr);if(o===null&&(ti(Yr.set(-.5,.5,0),Wr,a,Ur,r,i),Qr.set(0,1),o=e.ray.intersectTriangle(Jr,Xr,Yr,!1,Hr),o===null))return;let s=e.ray.origin.distanceTo(Hr);s<e.near||s>e.far||t.push({distance:s,point:Hr.clone(),uv:Yn.getInterpolation(Hr,Jr,Yr,Xr,Zr,Qr,$r,new U),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ti(e,t,n,r,i,a){Gr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Kr.copy(Gr):(Kr.x=a*Gr.x-i*Gr.y,Kr.y=i*Gr.x+a*Gr.y),e.copy(t),e.x+=Kr.x,e.y+=Kr.y,e.applyMatrix4(qr)}var ni=new W,ri=new W,ii=new W,ai=new W,oi=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ri.copy(e).add(t).multiplyScalar(.5),ii.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ri);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ii),o=ai.dot(this.direction),s=-ai.dot(ii),c=ai.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ri).addScaledVector(ii,d),f}intersectSphere(e,t){if(e.radius<0)return null;ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),r=ni.dot(ni)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,N=C/w,P=1/w,ne=T-M*D,F=E-N*D,I=O-M*A,re=k-N*A,ie=ee-M*te,ae=j-N*te,oe=ie*re-ae*I,L=ne*ae-F*ie,se=I*F-re*ne;if(r){if(oe<0||L<0||se<0)return null}else if((oe<0||L<0||se<0)&&(oe>0||L>0||se>0))return null;let ce=oe+L+se;if(ce===0)return null;let le=P*(oe*D+L*A+se*te);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},si=class extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ci=new Zt,li=new oi,ui=new xr,di=new W,fi=new W,pi=new W,mi=new W,hi=new W,gi=new W,_i=new W,vi=new W,q=class extends Tn{constructor(e=new kr,t=new si){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){gi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(hi.fromBufferAttribute(s,e),a?gi.addScaledVector(hi,r):gi.addScaledVector(hi.sub(t),r))}t.add(gi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ui.copy(n.boundingSphere),ui.applyMatrix4(i),li.copy(e.ray).recast(e.near),ui.containsPoint(li.origin)===!1&&(li.intersectSphere(ui,di)===null||li.origin.distanceToSquared(di)>(e.far-e.near)**2)||(ci.copy(i).invert(),li.copy(e.ray).applyMatrix4(ci),(n.boundingBox===null||li.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=bi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=bi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=bi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=bi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function yi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;vi.copy(s),vi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(vi);return l<n.near||l>n.far?null:{distance:l,point:vi.clone(),object:e}}function bi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,fi),e.getVertexPosition(c,pi),e.getVertexPosition(l,mi);let u=yi(e,t,n,r,fi,pi,mi,_i);if(u){let e=new W;Yn.getBarycoord(_i,fi,pi,mi,e),i&&(u.uv=Yn.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=Yn.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=Yn.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};Yn.getNormal(fi,pi,mi,t.normal),u.face=t,u.barycoord=e}return u}var xi=class extends Gt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Si=class extends mr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ci=new Zt,wi=new Zt,Ti=[],Ei=new Xn,Di=new Zt,Oi=new q,ki=new xr,Ai=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Di)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),Ei.copy(e.boundingBox).applyMatrix4(Ci),this.boundingBox.union(Ei)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),ki.copy(e.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ki.copy(this.boundingSphere),ki.applyMatrix4(n),e.ray.intersectsSphere(ki)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ci),wi.multiplyMatrices(n,Ci),Oi.matrixWorld=wi,Oi.raycast(e,Ti);for(let e=0,n=Ti.length;e<n;e++){let n=Ti[e];n.instanceId=i,n.object=this,t.push(n)}Ti.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new xi(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ji=new xr,Mi=new U(.5,.5),Ni=new W,Pi=class{constructor(e=new Lr,t=new Lr,n=new Lr,r=new Lr,i=new Lr,a=new Lr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=He,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476+Mi.distanceTo(e.center),ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ni.x=r.normal.x>0?e.max.x:e.min.x,Ni.y=r.normal.y>0?e.max.y:e.min.y,Ni.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ni)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fi=new Zt,Ii=class e{constructor(){this.coordinateSystem=He,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Fi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Pi),n[e].setFromProjectionMatrix(Fi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Pi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Li=class extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ri=new W,zi=new W,Bi=new Zt,Vi=new oi,Hi=new xr,Ui=new W,Wi=new W,Gi=class extends Tn{constructor(e=new kr,t=new Li){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ri.fromBufferAttribute(t,e-1),zi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ri.distanceTo(zi);e.setAttribute(`lineDistance`,new _r(n,1))}else V(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(r),Hi.radius+=i,e.ray.intersectsSphere(Hi)===!1)return;Bi.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Bi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ki(this,e,Vi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ki(this,e,Vi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ki(this,e,Vi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ki(this,e,Vi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ki(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ri.fromBufferAttribute(s,i),zi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ri,zi,Ui,Wi)>r)return;Ui.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ui);if(!(c<t.near||c>t.far))return{distance:c,point:Wi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var qi=new W,Ji=new W,Yi=class extends Gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)qi.fromBufferAttribute(t,e),Ji.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+qi.distanceTo(Ji);e.setAttribute(`lineDistance`,new _r(n,1))}else V(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Xi=class extends zr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zi=new Zt,Qi=new oi,$i=new xr,ea=new W,ta=class extends Tn{constructor(e=new kr,t=new Xi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),$i.radius+=i,e.ray.intersectsSphere($i)===!1)return;Zi.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Zi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ea.fromBufferAttribute(l,n),na(ea,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ea.fromBufferAttribute(l,a),na(ea,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function na(e,t,n,r,i,a,o){let s=Qi.distanceSqToPoint(e);if(s<n){let n=new W;Qi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ra=class extends Gt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ia=class extends Gt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},aa=class extends Gt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},oa=class extends aa{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sa=class extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ca=class e extends kr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new _r(c,3)),this.setAttribute(`normal`,new _r(l,3)),this.setAttribute(`uv`,new _r(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},la=class e extends kr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new _r(u,3)),this.setAttribute(`normal`,new _r(d,3)),this.setAttribute(`uv`,new _r(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ua=class e extends la{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},da=class e extends kr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new _r(i,3)),this.setAttribute(`normal`,new _r(i.slice(),3)),this.setAttribute(`uv`,new _r(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new W,r=new W,i=new W;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new W;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new W;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new W,t=new W,n=new W,r=new W,o=new U,s=new U,c=new U;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},fa=class e extends da{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},pa=class e extends kr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new _r(p,3)),this.setAttribute(`normal`,new _r(m,3)),this.setAttribute(`uv`,new _r(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ma=class e extends kr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new _r(p,3)),this.setAttribute(`normal`,new _r(m,3)),this.setAttribute(`uv`,new _r(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ha(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(_a(i))i.isRenderTargetTexture?(V(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(_a(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ga(e){let t={};for(let n=0;n<e.length;n++){let r=ha(e[n]);for(let e in r)t[e]=r[e]}return t}function _a(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function va(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ya(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ft.workingColorSpace}var ba={clone:ha,merge:ga},xa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ca=class extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xa,this.fragmentShader=Sa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=va(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Kt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wa=class extends Ca{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ta=class extends zr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ea=class extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Fe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Da=class extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ka(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Aa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ja=class extends Aa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ne,endingEnd:Ne}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pe:i=e,o=2*t-n;break;case z:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Pe:a=e,s=2*n-t;break;case z:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ma=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Na=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Pa=class extends Aa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=La(n,t,g,y,r);i[p]=Fa(x,o,_,b,m)}return i}};function Fa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ia(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function La(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Fa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ia(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ra=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ka(e.settings)&&(n.settings={inTangents:Oa(e.settings.inTangents,Array),outTangents:Oa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ae:t=this.InterpolantFactoryMethodDiscrete;break;case je:t=this.InterpolantFactoryMethodLinear;break;case R:t=this.InterpolantFactoryMethodSmooth;break;case Me:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return V(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ae;case this.InterpolantFactoryMethodLinear:return je;case this.InterpolantFactoryMethodSmooth:return R;case this.InterpolantFactoryMethodBezier:return Me}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;ka(this.settings)&&(za(this.settings.inTangents,e),za(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ka(this.settings)&&(Ba(this.settings.inTangents,e),Ba(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(H(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(H(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){H(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){H(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&We(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){H(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===R,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ka(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function za(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Ba(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ra.prototype.ValueTypeName=``,Ra.prototype.TimeBufferType=Float32Array,Ra.prototype.ValueBufferType=Float32Array,Ra.prototype.DefaultInterpolation=je;var Va=class extends Ra{constructor(e,t,n){super(e,t,n)}};Va.prototype.ValueTypeName=`bool`,Va.prototype.ValueBufferType=Array,Va.prototype.DefaultInterpolation=Ae,Va.prototype.InterpolantFactoryMethodLinear=void 0,Va.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Ra{constructor(e,t,n,r){super(e,t,n,r)}};Ha.prototype.ValueTypeName=`color`;var Ua=class extends Ra{constructor(e,t,n,r){super(e,t,n,r)}};Ua.prototype.ValueTypeName=`number`;var Wa=class extends Aa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ot.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ga=class extends Ra{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Wa(this.times,this.values,this.getValueSize(),e)}};Ga.prototype.ValueTypeName=`quaternion`,Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Ra{constructor(e,t,n){super(e,t,n)}};Ka.prototype.ValueTypeName=`string`,Ka.prototype.ValueBufferType=Array,Ka.prototype.DefaultInterpolation=Ae,Ka.prototype.InterpolantFactoryMethodLinear=void 0,Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends Ra{constructor(e,t,n,r){super(e,t,n,r)}};qa.prototype.ValueTypeName=`vector`;var Ja=class extends Tn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ya=new Zt,Xa=new W,Za=new W,Qa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xa),Za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Za),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ya,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$a=new W,eo=new Ot,to=new W,no=class extends Tn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=He,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($a,eo,to),to.x===1&&to.y===1&&to.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,eo,to.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($a,eo,to),to.x===1&&to.y===1&&to.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,eo,to.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ro=new W,io=new U,ao=new U,oo=class extends no{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ro.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ro.x,ro.y).multiplyScalar(-e/ro.z),ro.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ro.x,ro.y).multiplyScalar(-e/ro.z)}getViewSize(e,t){return this.getViewBounds(e,io,ao),t.subVectors(ao,io)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},so=class extends Qa{constructor(){super(new oo(90,1,.5,500)),this.isPointLightShadow=!0}},co=class extends Ja{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new so}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},lo=class extends no{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uo=class extends Qa{constructor(){super(new lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fo=class extends Ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new uo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},po=-90,mo=1,ho=class extends Tn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new oo(po,mo,e,t);r.layers=this.layers,this.add(r);let i=new oo(po,mo,e,t);i.layers=this.layers,this.add(i);let a=new oo(po,mo,e,t);a.layers=this.layers,this.add(a);let o=new oo(po,mo,e,t);o.layers=this.layers,this.add(o);let s=new oo(po,mo,e,t);s.layers=this.layers,this.add(s);let c=new oo(po,mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},go=class extends oo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},_o=`\\[\\]\\.:\\/`,vo=RegExp(`[\\[\\]\\.:\\/]`,`g`),yo=`[^\\[\\]\\.:\\/]`,bo=`[^`+_o.replace(`\\.`,``)+`]`,xo=`((?:WC+[\\/:])*)`.replace(`WC`,yo),So=`(WCOD+)?`.replace(`WCOD`,bo),Co=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,yo),wo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,yo),To=RegExp(`^`+xo+So+Co+wo+`$`),Eo=[`material`,`materials`,`bones`,`map`],Do=class{constructor(e,t,n){let r=n||Oo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Oo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(vo,``)}static parseTrackName(e){let t=To.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Eo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){V(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){H(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){H(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){H(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){H(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){H(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;H(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oo.Composite=Do,Oo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Oo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Oo.prototype.GetterByBindingType=[Oo.prototype._getValue_direct,Oo.prototype._getValue_array,Oo.prototype._getValue_arrayElement,Oo.prototype._getValue_toArray],Oo.prototype.SetterByBindingTypeAndVersioning=[[Oo.prototype._setValue_direct,Oo.prototype._setValue_direct_setNeedsUpdate,Oo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oo.prototype._setValue_array,Oo.prototype._setValue_array_setNeedsUpdate,Oo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oo.prototype._setValue_arrayElement,Oo.prototype._setValue_arrayElement_setNeedsUpdate,Oo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oo.prototype._setValue_fromArray,Oo.prototype._setValue_fromArray_setNeedsUpdate,Oo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function ko(e,t,n,r){let i=Ao(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ne:case I:return Math.max(e,16)*Math.max(t,8)/4;case P:case F:return Math.max(e,8)*Math.max(t,8)/2;case re:case ie:case oe:case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ae:case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ce:case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ao(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?V(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function jo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Mo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var No={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},Po={basic:{uniforms:ga([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:No.meshbasic_vert,fragmentShader:No.meshbasic_frag},lambert:{uniforms:ga([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:No.meshlambert_vert,fragmentShader:No.meshlambert_frag},phong:{uniforms:ga([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:No.meshphong_vert,fragmentShader:No.meshphong_frag},standard:{uniforms:ga([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:No.meshphysical_vert,fragmentShader:No.meshphysical_frag},toon:{uniforms:ga([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new K(0)}}]),vertexShader:No.meshtoon_vert,fragmentShader:No.meshtoon_frag},matcap:{uniforms:ga([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:No.meshmatcap_vert,fragmentShader:No.meshmatcap_frag},points:{uniforms:ga([J.points,J.fog]),vertexShader:No.points_vert,fragmentShader:No.points_frag},dashed:{uniforms:ga([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:No.linedashed_vert,fragmentShader:No.linedashed_frag},depth:{uniforms:ga([J.common,J.displacementmap]),vertexShader:No.depth_vert,fragmentShader:No.depth_frag},normal:{uniforms:ga([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:No.meshnormal_vert,fragmentShader:No.meshnormal_frag},sprite:{uniforms:ga([J.sprite,J.fog]),vertexShader:No.sprite_vert,fragmentShader:No.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:No.background_vert,fragmentShader:No.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:No.backgroundCube_vert,fragmentShader:No.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:No.cube_vert,fragmentShader:No.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:No.equirect_vert,fragmentShader:No.equirect_frag},distance:{uniforms:ga([J.common,J.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:No.distance_vert,fragmentShader:No.distance_frag},shadow:{uniforms:ga([J.lights,J.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:No.shadow_vert,fragmentShader:No.shadow_frag}};Po.physical={uniforms:ga([Po.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:No.meshphysical_vert,fragmentShader:No.meshphysical_frag};var Fo={r:0,b:0,g:0},Io=new Zt,Lo=new G;Lo.set(-1,0,0,0,1,0,0,0,1);function Ro(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new q(new ca(1,1,1),new Ca({name:`BackgroundCubeMaterial`,uniforms:ha(Po.backgroundCube.uniforms),vertexShader:Po.backgroundCube.vertexShader,fragmentShader:Po.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Io.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lo),l.material.toneMapped=Ft.getTransfer(i.colorSpace)!==Re,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new pa(2,2),new Ca({name:`BackgroundMaterial`,uniforms:ha(Po.background.uniforms),vertexShader:Po.background.vertexShader,fragmentShader:Po.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ft.getTransfer(i.colorSpace)!==Re,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Fo,ya(e)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function zo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Bo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Vo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(V(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&V(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&V(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ho(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Lr,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Uo=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ra(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ca(5,5,5),i=new Ca({name:`CubemapFromEquirect`,uniforms:ha(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new ho(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Wo=256,Go=3,Ko=20,qo=256,Jo=16,Yo=3,Xo=new W,Zo=new K,Qo=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ho(1,10,null),this._boxMesh=new q(new ca(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Xo}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Zo));let h=new ho(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=as(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=is(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Wo,St(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Wo:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=$o(e,!1,!1),n=Math.log2(e)-Go;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=$o(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=as()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=is()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ts(),this._integrationMaterial=ns());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Jo);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Yo)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(qo*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=rs());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function $o(e,t,n){return new Uo(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:B,depthBuffer:n})}function es(e,t,n){return new Ca({name:e,uniforms:t,vertexShader:No.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function ts(){return es(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qo}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ns(){return es(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Jo}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rs(){return es(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ko}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function is(){return es(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function as(){return es(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function os(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Uo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Qo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Qo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ss(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Xe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function cs(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?gr:hr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function ls(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function us(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:H(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ds(e,t,n){let r=new WeakMap,i=new Kt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Yt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new U(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function fs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ps={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ms(e,t,n,r,i,a){let o=new Jt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new kr;u.setAttribute(`position`,new _r([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new _r([0,2,0,0,2,0],2));let d=new wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new q(u,d),p=new lo(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Jt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Jt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new aa(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Ft.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=ps[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var hs=new Gt,gs=new aa(1,1),_s=new oa(1),vs=new Yt,ys=new Xt,bs=new ra,xs=[],Ss=[],Cs=new Float32Array(16),ws=new Float32Array(9),Ts=new Float32Array(4);function Es(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=xs[i];if(a===void 0&&(a=new Float32Array(i),xs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ds(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Os(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ks(e,t){let n=Ss[t];n===void 0&&(n=new Int32Array(t),Ss[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function As(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ds(n,t))return;e.uniform2fv(this.addr,t),Os(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ds(n,t))return;e.uniform3fv(this.addr,t),Os(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ds(n,t))return;e.uniform4fv(this.addr,t),Os(n,t)}}function Ps(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ds(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Os(n,t)}else{if(Ds(n,r))return;Ts.set(r),e.uniformMatrix2fv(this.addr,!1,Ts),Os(n,r)}}function Fs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ds(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Os(n,t)}else{if(Ds(n,r))return;ws.set(r),e.uniformMatrix3fv(this.addr,!1,ws),Os(n,r)}}function Is(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ds(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Os(n,t)}else{if(Ds(n,r))return;Cs.set(r),e.uniformMatrix4fv(this.addr,!1,Cs),Os(n,r)}}function Ls(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ds(n,t))return;e.uniform2iv(this.addr,t),Os(n,t)}}function zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ds(n,t))return;e.uniform3iv(this.addr,t),Os(n,t)}}function Bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ds(n,t))return;e.uniform4iv(this.addr,t),Os(n,t)}}function Vs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ds(n,t))return;e.uniform2uiv(this.addr,t),Os(n,t)}}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ds(n,t))return;e.uniform3uiv(this.addr,t),Os(n,t)}}function Ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ds(n,t))return;e.uniform4uiv(this.addr,t),Os(n,t)}}function Gs(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Ks(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Gs(gs):hs,n.setTexture2D(t||a,i)}function qs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ys,i)}function Js(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Gs(_s):bs,n.setTextureCube(t||a,i)}function Ys(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||vs,i)}function Xs(e){switch(e){case 5126:return As;case 35664:return js;case 35665:return Ms;case 35666:return Ns;case 35674:return Ps;case 35675:return Fs;case 35676:return Is;case 5124:case 35670:return Ls;case 35667:case 35671:return Rs;case 35668:case 35672:return zs;case 35669:case 35673:return Bs;case 5125:return Vs;case 36294:return Hs;case 36295:return Us;case 36296:return Ws;case 35678:case 36198:case 36298:case 36306:case 35682:return Ks;case 35679:case 36299:case 36307:return qs;case 35680:case 36300:case 36308:case 36293:return Js;case 36289:case 36303:case 36311:case 36292:return Ys}}function Zs(e,t){e.uniform1fv(this.addr,t)}function Qs(e,t){let n=Es(t,this.size,2);e.uniform2fv(this.addr,n)}function $s(e,t){let n=Es(t,this.size,3);e.uniform3fv(this.addr,n)}function ec(e,t){let n=Es(t,this.size,4);e.uniform4fv(this.addr,n)}function tc(e,t){let n=Es(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function nc(e,t){let n=Es(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function rc(e,t){let n=Es(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ic(e,t){e.uniform1iv(this.addr,t)}function ac(e,t){e.uniform2iv(this.addr,t)}function oc(e,t){e.uniform3iv(this.addr,t)}function sc(e,t){e.uniform4iv(this.addr,t)}function cc(e,t){e.uniform1uiv(this.addr,t)}function lc(e,t){e.uniform2uiv(this.addr,t)}function uc(e,t){e.uniform3uiv(this.addr,t)}function dc(e,t){e.uniform4uiv(this.addr,t)}function fc(e,t,n){let r=this.cache,i=t.length,a=ks(n,i);Ds(r,a)||(e.uniform1iv(this.addr,a),Os(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Gs(gs):hs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function pc(e,t,n){let r=this.cache,i=t.length,a=ks(n,i);Ds(r,a)||(e.uniform1iv(this.addr,a),Os(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ys,a[e])}function mc(e,t,n){let r=this.cache,i=t.length,a=ks(n,i);Ds(r,a)||(e.uniform1iv(this.addr,a),Os(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Gs(_s):bs;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function hc(e,t,n){let r=this.cache,i=t.length,a=ks(n,i);Ds(r,a)||(e.uniform1iv(this.addr,a),Os(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||vs,a[e])}function gc(e){switch(e){case 5126:return Zs;case 35664:return Qs;case 35665:return $s;case 35666:return ec;case 35674:return tc;case 35675:return nc;case 35676:return rc;case 5124:case 35670:return ic;case 35667:case 35671:return ac;case 35668:case 35672:return oc;case 35669:case 35673:return sc;case 5125:return cc;case 36294:return lc;case 36295:return uc;case 36296:return dc;case 35678:case 36198:case 36298:case 36306:case 35682:return fc;case 35679:case 36299:case 36307:return pc;case 35680:case 36300:case 36308:case 36293:return mc;case 36289:case 36303:case 36311:case 36292:return hc}}var _c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xs(t.type)}},vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gc(t.type)}},yc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},bc=/(\w+)(\])?(\[|\.)?/g;function xc(e,t){e.seq.push(t),e.map[t.id]=t}function Sc(e,t,n){let r=e.name,i=r.length;for(bc.lastIndex=0;;){let a=bc.exec(r),o=bc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){xc(n,l===void 0?new _c(s,e,t):new vc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new yc(s),xc(n,e)),n=e}}}var Cc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Sc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function wc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Tc=37297,Ec=0;function Dc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Oc=new G;function kc(e){Ft._getMatrix(Oc,Ft.workingColorSpace,e);let t=`mat3( ${Oc.elements.map(e=>e.toFixed(4))} )`;switch(Ft.getTransfer(e)){case Le:return[t,`LinearTransferOETF`];case Re:return[t,`sRGBTransferOETF`];default:return V(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ac(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Dc(e.getShaderSource(t),r)}return i}function jc(e,t){let n=kc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Mc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Nc(e,t){let n=Mc[t];return n===void 0?(V(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Pc=new W;function Fc(){return Ft.getLuminanceCoefficients(Pc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Pc.x.toFixed(4)}, ${Pc.y.toFixed(4)}, ${Pc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ic(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(zc).join(`
`)}function Lc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Rc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function zc(e){return e!==``}function Bc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Vc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(e){return e.replace(Hc,Wc)}function Wc(e,t){let n=No[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Uc(n)}var Gc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(e){return e.replace(Gc,qc)}function qc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Jc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Yc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Xc(e){return Yc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Zc={302:`ENVMAP_MODE_REFRACTION`};function Qc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Zc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var $c={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function el(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:$c[e.combine]||`ENVMAP_BLENDING_NONE`}function tl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Xc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Qc(n),d=el(n),f=Ic(n),p=Lc(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(zc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(zc).join(`
`),g.length>0&&(g+=`
`)):(h=[Jc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(zc).join(`
`),g=[Jc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:No.tonemapping_pars_fragment,n.toneMapping===0?``:Nc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,No.colorspace_pars_fragment,jc(`linearToOutputTexel`,n.outputColorSpace),Fc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(zc).join(`
`)),o=Uc(o),o=Bc(o,n),o=Vc(o,n),s=Uc(s),s=Bc(s,n),s=Vc(s,n),o=Kc(o),s=Kc(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=wc(i,i.VERTEX_SHADER,v),x=wc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Ac(i,b,`vertex`),n=Ac(i,x,`fragment`);H(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):V(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Cc(i,m),w=Rc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Tc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ec++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var nl=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new il(e),t.set(e,n)),n}},il=class{constructor(e){this.id=nl++,this.code=e,this.usedTimes=0}};function al(e){return e===1030||e===37490||e===36285}function ol(e,t,n,r,i,a){let o=new ln,s=new rl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&V(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Po[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,te=m.isBatchedMesh===!0,M=!!i.map,N=!!i.matcap,P=!!b,ne=P&&b.isPMREMTexture===!0,F=!!i.aoMap,I=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,ae=!!i.displacementMap,oe=!!i.emissiveMap,L=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.diffuseRoughness>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=ce&&!!i.anisotropyMap,_e=le&&!!i.clearcoatMap,ve=le&&!!i.clearcoatNormalMap,ye=le&&!!i.clearcoatRoughnessMap,be=ue&&!!i.diffuseRoughnessMap,xe=pe&&!!i.iridescenceMap,Se=pe&&!!i.iridescenceThicknessMap,Ce=me&&!!i.sheenColorMap,we=me&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=he&&!!i.transmissionMap,ke=he&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,R=i.alphaTest>0,Me=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let z=ne?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Fe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:te,batchingColor:te&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:N,envMap:P,envMapMode:P&&b.mapping,envMapPMREM:ne,envMapMaxLod:ne?z.length-1:null,envMapSize:ne?z[0].width:null,aoMap:F,lightMap:I,bumpMap:re,normalMap:ie,displacementMap:ae,emissiveMap:oe,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&al(i.normalMap.format),metalnessMap:L,roughnessMap:se,anisotropy:ce,anisotropyMap:ge,clearcoat:le,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,diffuseRoughness:ue,diffuseRoughnessMap:be,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:me,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:he,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:R,alphaHash:Me,combine:i.combine,mapUv:M&&p(i.map.channel),aoMapUv:F&&p(i.aoMap.channel),lightMapUv:I&&p(i.lightMap.channel),bumpMapUv:re&&p(i.bumpMap.channel),normalMapUv:ie&&p(i.normalMap.channel),displacementMapUv:ae&&p(i.displacementMap.channel),emissiveMapUv:oe&&p(i.emissiveMap.channel),metalnessMapUv:L&&p(i.metalnessMap.channel),roughnessMapUv:se&&p(i.roughnessMap.channel),anisotropyMapUv:ge&&p(i.anisotropyMap.channel),clearcoatMapUv:_e&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(i.sheenRoughnessMap.channel),specularMapUv:Te&&p(i.specularMap.channel),specularColorMapUv:Ee&&p(i.specularColorMap.channel),specularIntensityMapUv:De&&p(i.specularIntensityMap.channel),transmissionMapUv:Oe&&p(i.transmissionMap.channel),thicknessMapUv:ke&&p(i.thicknessMap.channel),alphaMapUv:je&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ie||ce),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(M||je),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&Ft.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:oe&&i.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Po[t];n=ba.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new tl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function sl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function cl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ll(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ul(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||cl),r.length>1&&r.sort(t||ll),i.length>1&&i.sort(t||ll)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function dl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ul,e.set(t,[i])):n>=r.length?(i=new ul,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function fl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new K};break;case`SpotLight`:n={position:new W,direction:new W,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function pl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ml=0;function hl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function gl(e){let t=new fl,n=pl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new Zt,o=new Zt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(hl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ml++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function _l(e){let t=new gl(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function vl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new _l(e),t.set(n,[a])):r>=i.length?(a=new _l(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var yl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xl=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Sl=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Cl=new Zt,wl=new W,Tl=new W;function El(e,t,n){let i=new Pi,a=new U,s=new U,c=new Kt,l=new Ea,u=new Da,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:yl,fragmentShader:bl}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new kr;y.setAttribute(`position`,new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new q(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(V(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){V(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){V(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Jt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new aa(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Uo(a.x),p.map.depthTexture=new oa(a.x,m)):(p.map=new Jt(a.x,a.y),p.map.depthTexture=new aa(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),wl.setFromMatrixPosition(d.matrixWorld),e.position.copy(wl),Tl.copy(e.position),Tl.add(xl[t]),e.up.copy(Sl[t]),e.lookAt(Tl),e.updateMatrixWorld(),n.makeTranslation(-wl.x,-wl.y,-wl.z),Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Cl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Jt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Dl(e,t){function n(){let t=!1,n=new Kt,r=null,i=new Kt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Qe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),te=M>=1);let P=null,ne={},F=e.getParameter(e.SCISSOR_BOX),I=e.getParameter(e.VIEWPORT),re=new Kt().fromArray(F),ie=new Kt().fromArray(I);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),L(e.CULL_FACE),pe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(se(e.BLEND),g=!1);else if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:H(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:H(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:H(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:H(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?se(e.CULL_FACE):(L(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(te&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ye(t){t?L(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+j-1),P!==t&&(e.activeTexture(t),P=t)}function xe(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+j-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function Se(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function je(){try{e.texImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function R(){try{e.texImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Pe(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function z(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Ie(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function B(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:je,texImage3D:R,pixelStorei:Ne,getParameter:Me,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:Pe,viewport:z,reset:B}}function Ol(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new U,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):Ge(`canvas`)}function O(e,t,n){let r=1,i=B(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),V(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&V(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function ee(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function j(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];V(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||V(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Le:Ft.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function te(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,V(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function M(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function P(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ne(e){I(e.target)}function F(e){re(e.target)}function I(e){e.removeEventListener(`dispose`,ne),P(e),ae(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function re(e){e.removeEventListener(`dispose`,F),P(e),L(e)}function ie(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?re(t):I(t))}C.clear(),b.clear()}function ae(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&oe(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function oe(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function L(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&I(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let se=0;function ce(){se=0}function le(){return se}function ue(e){se=e}function de(){let e=se;return e>=p.maxTextures&&V(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),se+=1,e}function fe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function pe(e,t){let n=f.get(e);if(e.isVideoTexture&&Fe(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)V(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)V(`WebGLRenderer: Texture marked for update but image is incomplete`);else{we(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function me(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?we(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function he(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?we(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ge(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?Te(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let _e={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ve={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ye={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function be(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&V(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,_e[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,_e[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,_e[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ve[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ve[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ye[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function xe(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ne),N(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=fe(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&oe(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function Se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ce(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=Se(r.start,t.width,4),c=Se(n.start,t.width,4);r.start<=o+1&&s===c&&Se(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function we(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=xe(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Ft.getPrimaries(Ft.workingColorSpace),n=t.colorSpace===``?null:Ft.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=Ie(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=j(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);be(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=M(t,e);if(t.isDepthTexture)u=te(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Ce(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ko(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ko(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=B(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=B(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Te(e,t,n){if(t.image.length!==6)return;let r=xe(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Ft.getPrimaries(Ft.workingColorSpace),o=t.colorSpace===``?null:Ft.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ie(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=j(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=M(t,h);be(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=te(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=B(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ee(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=j(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),z(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Pe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function De(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=te(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;z(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=j(i.internalFormat,a,o,i.normalized,i.colorSpace);z(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Oe(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?ge(t.depthTexture,0):pe(t.depthTexture,0);let o=i.__webglTexture,s=Pe(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)z(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)z(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ke(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Oe(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?Oe(t.__webglFramebuffer[0],e,0):Oe(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),De(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),De(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ae(e,t,n){let r=f.get(e);t!==void 0&&Ee(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&ke(e)}function je(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,F),N(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&z(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=j(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Pe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),De(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),be(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Ee(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Ee(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),be(o,r),Ee(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),be(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Ee(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Ee(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&ke(e)}function R(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Me=[];function Ne(e){if(e.samples>0){if(z(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Me.length=0,Me.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Me.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Me))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function z(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Fe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ft.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&V(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):H(`WebGLTextures: Unsupported texture color space:`,n)),t}function B(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=de,this.resetTextureUnits=ce,this.getTextureUnits=le,this.setTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=me,this.setTexture3D=he,this.setTextureCube=ge,this.rebindTextures=Ae,this.setupRenderTarget=je,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=z,this.dispose=ie}function kl(e,t){function n(n,r=``){let i,a=Ft.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Al=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ml=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ca({vertexShader:Al,fragmentShader:jl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new pa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nl=class extends $e{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Ml,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new U,k=null,A=null,ee=new oo;ee.viewport=new Kt;let j=new oo;j.viewport=new Kt;let te=[ee,j],M=new go,N=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new On,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new On,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new On,C[e]=t),t.getHandSpace()};function ne(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function F(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,F),r.removeEventListener(`inputsourceschange`,I);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}N=null,P=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,L.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,F),r.addEventListener(`inputsourceschange`,I),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Jt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new aa(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Jt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),L.setContext(r),L.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(N!==M.near||P!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,P=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;re(M,i);for(let e=0;e<a.length;e++)re(a[e],i);M.projectionMatrix.copy(ee.projectionMatrix),M.projectionMatrixInverse.copy(ee.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,M,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let ae=null;function oe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new oo,o.layers.enable(n),o.viewport=new Kt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new sa,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let L=new jo;L.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},Pl=new Zt,Fl=new G;Fl.set(-1,0,0,0,1,0,0,0,1);function Il(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ya(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Pl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Fl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ll(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?V(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):V(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Rl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zl=null;function Bl(){return zl===null&&(zl=new xi(Rl,16,16,k,g),zl.name=`DFG_LUT`,zl.minFilter=o,zl.magFilter=o,zl.wrapS=t,zl.wrapT=t,zl.generateMipmaps=!1,zl.needsUpdate=!0),zl}var Vl=class{constructor(e={}){let{canvas:t=Ke(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,j=null,te=[],M=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,ne=!1,F=null,I=null,re=null,ie=null;this._outputColorSpace=Ie;let ae=0,oe=0,L=null,se=-1,ce=null,le=new Kt,ue=new Kt,de=null,fe=new K(0),pe=0,me=t.width,he=t.height,ge=1,_e=null,ve=null,ye=new Kt(0,0,me,he),be=new Kt(0,0,me,he),xe=!1,Se=new Pi,Ce=new Ii,we=!1,Te=!1,Ee=new Zt,De=new W,Oe=new Kt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return L===null?ge:1}let R=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,z,Fe,B,Le,Re,ze,Be,Ve,Ue,We,Ge,qe,Ye,Xe,Qe,$e,et,tt,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),R===null){let t=`webgl2`;if(R=Me(t,e),R===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),H(`WebGLRenderer: `+e.message),e}function at(){Ne=new ss(R),Ne.init(),nt=new kl(R,Ne),Pe=new Vo(R,Ne,e,nt),z=new Dl(R,Ne),Pe.reversedDepthBuffer&&h&&z.buffers.depth.setReversed(!0),I=R.createFramebuffer(),re=R.createFramebuffer(),ie=R.createFramebuffer(),Fe=new us(R),B=new sl,Le=new Ol(R,Ne,z,B,Pe,nt,Fe),Re=new os(P),ze=new Mo(R),rt=new zo(R,ze),Be=new cs(R,ze,Fe,rt),Ve=new fs(R,Be,ze,rt,Fe),$e=new ds(R,Pe,Le),Ye=new Ho(B),Ue=new ol(P,Re,Ne,Pe,rt,Ye),We=new Il(P,B),Ge=new dl,qe=new vl(Ne),Qe=new Ro(P,Re,z,Ve,x,s),Xe=new El(P,Ve,Pe),it=new Ll(R,Fe,Pe,z),et=new Bo(R,Ne,Fe),tt=new ls(R,Ne,Fe),Fe.programs=Ue.programs,P.capabilities=Pe,P.extensions=Ne,P.properties=B,P.renderLists=Ge,P.shadowMap=Xe,P.state=z,P.info=Fe}S!==1009&&(N=new ms(S,t.width,t.height,o,r,i));let ot=new Nl(P,R);this.xr=ot,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){ot.isPresenting?V(`WebGLRenderer: Can't change size while VR device is presenting.`):(me=e,he=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(me*ge,he*ge).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)H(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){V(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}N.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(le)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),z.viewport(le.copy(ye).multiplyScalar(je()).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),z.scissor(ue.copy(be).multiplyScalar(je()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){z.setScissorTest(xe=e)},this.setOpaqueSort=function(e){_e=e},this.setTransparentSort=function(e){ve=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=C.has(t)}if(e){let e=L.texture.type,t=w.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,R.clearBufferuiv(R.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,R.clearBufferiv(R.COLOR,0,E))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),F=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Qe.dispose(),Ge.dispose(),qe.dispose(),Le.dispose(),B.dispose(),Re.dispose(),Ve.dispose(),Be.dispose(),rt.dispose(),it.dispose(),Ue.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,gt),ot.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),Je(`WebGLRenderer: Context Lost.`),ne=!0}function ct(){Je(`WebGLRenderer: Context Restored.`),ne=!1;let e=Fe.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;at(),Fe.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function lt(e){H(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),B.remove(e)}function ft(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=ze.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*je()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*je()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){F!==null&&e.isNodeMaterial&&F.setObject(r,e),we===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),F!==null&&F.renderStart(e,t,n),j=qe.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),F!==null&&F.updateLights(j.state.lightsArray),Te=this.localClippingEnabled,we=Ye.init(this.clippingPlanes,Te),we===!0&&Ye.setGlobalState(this.clippingPlanes,t),F!==null&&Xe.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),j=M.pop(),F!==null&&F.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new jo;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,ot.setAnimationLoop(e),e===null?vt.stop():vt.start()},ot.addEventListener(`sessionstart`,gt),ot.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){H(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;F!==null&&F.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=N!==null&&(L===null||n)&&N.begin(P,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,L),j=qe.get(e,M.length),j.init(t),j.state.textureUnits=Le.getTextureUnits(),M.push(j),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ce.setFromArrayCamera(t):Se.setFromProjectionMatrix(Ee,He,t.reversedDepth),Te=this.localClippingEnabled,we=Ye.init(this.clippingPlanes,Te),k=Ge.get(e,te.length),k.init(),te.push(k),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,P.sortObjects)}yt(e,t,0,P.sortObjects),k.finish(),F!==null&&F.updateLights(j.state.lightsArray),P.sortObjects===!0&&k.sort(_e,ve),Ae=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ae&&Qe.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),we===!0&&Ye.beginShadows();let i=j.state.shadowsArray;if(Xe.render(i,e,t),we===!0&&Ye.endShadows(),(r&&N.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Ae&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(k,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Ae&&Qe.render(e),bt(k,e,t)}L!==null&&oe===0&&(Le.updateMultisampleRenderTarget(L),Le.updateRenderTargetMipmap(L)),r&&N.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),rt.resetDefaultState(),se=-1,ce=null,M.pop(),M.length>0?(j=M[M.length-1],Le.setTextureUnits(j.state.textureUnits),we===!0&&Ye.setGlobalState(P.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,F!==null&&F.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=Ve.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Oe.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&k.push(e,i,a,n,Oe.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),we===!0&&Ye.setGlobalState(P.clippingPlanes,n),r&&z.viewport(le.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Jt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||le;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),u=P.getActiveCubeFace(),d=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(fe),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),Ae&&Qe.render(n);let f=P.toneMapping;P.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),we===!0&&Ye.setGlobalState(P.clippingPlanes,r),St(e,n,r),Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a))}P.setRenderTarget(s,u,d),P.setClearColor(fe,pe),p!==void 0&&(r.viewport=p),P.toneMapping=f}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){F!==null&&i.isNodeMaterial&&F.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function wt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Tt(e,t,n){t.isScene!==!0&&(t=ke);let r=B.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return U(e,s),d}else s.uniforms=Ue.getUniforms(e),F!==null&&e.isNodeMaterial&&F.build(e,n,s),e.onBeforeCompile(s,P),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),U(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=wt(j.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Et(e,t,n,r,i){let a=B.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Tt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Cc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function U(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=ke),Le.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?P.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ft.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=j.state.lights;if(we===!0&&(Te===!0||e!==ce)){let t=e===ce&&r.id===se;Ye.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===wt(j.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Et(r,t,i,s,h):Tt(r,t,i),F&&r.isNodeMaterial&&F.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==se&&(se=r.id,w=!0),C||ce!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(R,`projectionMatrix`,e.projectionMatrix),E.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(R,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&E.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(R,`sunShadowMap`,y.state.sunShadowMap,Le),y.state.directionalShadowMap.length>0&&E.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,Le),y.state.spotShadowMap.length>0&&E.setValue(R,`spotShadowMap`,y.state.spotShadowMap,Le),y.state.pointShadowMap.length>0&&E.setValue(R,`pointShadowMap`,y.state.pointShadowMap,Le)),i.isSkinnedMesh){E.setOptional(R,i,`bindMatrix`),E.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(R,`boneTexture`,e.boneTexture,Le))}i.isBatchedMesh&&(E.setOptional(R,i,`batchingTexture`),E.setValue(R,`batchingTexture`,i._matricesTexture,Le),E.setOptional(R,i,`batchingIdTexture`),E.setValue(R,`batchingIdTexture`,i._indirectTexture,Le),E.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(R,`batchingColorTexture`,i._colorsTexture,Le));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&$e.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Bl()),w){if(E.setValue(R,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&kt(O,T),a&&r.fog===!0&&We.refreshFogUniforms(O,a),We.refreshMaterialUniforms(O,r,ge,he,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of j.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Cc.upload(R,Dt(v),O,Le)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Cc.upload(R,Dt(v),O,Le),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(R,`center`,i.center),E.setValue(R,`modelViewMatrix`,i.modelViewMatrix),E.setValue(R,`normalMatrix`,i.normalMatrix),E.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,S),it.bind(n,S)}}return S}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,z.viewport(le),z.scissor(ue),z.setScissorTest(de),se=-1;return}if(o.__webglFramebuffer===void 0)Le.setupRenderTarget(e);else if(o.__hasExternalTextures)Le.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Le.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Le.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else le.copy(ye).multiplyScalar(ge).floor(),ue.copy(be).multiplyScalar(ge).floor(),de=xe;if(n!==0&&(r=I),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(le),z.scissor(ue),z.setScissorTest(de),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}se=-1};function G(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=G(o);if(u.__formatReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=L===null?null:B.get(L).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=G(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=L===null?null:B.get(L).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ze(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Le.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(Le.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Le.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(Le.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,re),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&Le.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Le.setTextureCube(e,0):e.isData3DTexture?Le.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Le.setTexture2DArray(e,0):Le.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){ae=0,oe=0,L=null,z.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return He}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}},Hl=class{handlers={};on(e,t){let n=this.handlers[e]??=new Set;return n.add(t),()=>n.delete(t)}emit(e,t){let n=this.handlers[e];if(n)for(let e of[...n])e(t)}},Ul={top:0,right:0,bottom:0,left:0},Wl=e=>({top:e?.top??0,right:e?.right??0,bottom:e?.bottom??0,left:e?.left??0});function Gl(e={}){let t=new Hl,n=window.Telegram?.WebApp,r=n&&n.platform&&n.platform!==`unknown`?n:void 0,i=e=>{try{return!!r&&r.isVersionAtLeast(e)}catch{return!1}},a=(e,t)=>{try{t()}catch(t){console.warn(`[telegram] ${e} failed`,t)}},o=new Set,s=(e,n)=>{let r=o.size>0;n?o.add(e):o.delete(e);let i=o.size>0;i&&!r?t.emit(`pause`,e):!i&&r&&t.emit(`resume`,void 0)};document.addEventListener(`visibilitychange`,()=>s(`document-hidden`,document.visibilityState===`hidden`)),document.visibilityState===`hidden`&&o.add(`document-hidden`);let c=i(`8.0`),l=()=>({device:c?Wl(r?.safeAreaInset):{...Ul},content:c?Wl(r?.contentSafeAreaInset):{...Ul}}),u=()=>{if(!c)return;let{device:e,content:t}=l(),n=document.documentElement.style;for(let r of[`top`,`right`,`bottom`,`left`])n.setProperty(`--sa-${r}`,`${e[r]}px`),n.setProperty(`--csa-${r}`,`${t[r]}px`)};if(window.addEventListener(`keydown`,e=>{e.code===`Escape`&&!e.repeat&&t.emit(`escape`,void 0)}),r){if(a(`ready`,()=>r.ready()),a(`expand`,()=>r.expand()),(e.fullscreen??!0)&&i(`8.0`)&&r.requestFullscreen&&a(`requestFullscreen`,()=>r.requestFullscreen()),i(`7.7`)&&r.disableVerticalSwipes&&a(`disableVerticalSwipes`,()=>r.disableVerticalSwipes()),(e.lockOrientation??!0)&&i(`8.0`)&&r.lockOrientation&&a(`lockOrientation`,()=>r.lockOrientation()),u(),c){let e=()=>{u(),t.emit(`viewport`,void 0)};r.onEvent(`safeAreaChanged`,e),r.onEvent(`contentSafeAreaChanged`,e),r.onEvent(`fullscreenChanged`,e),r.onEvent(`fullscreenFailed`,()=>{}),r.onEvent(`activated`,()=>s(`telegram-deactivated`,!1)),r.onEvent(`deactivated`,()=>s(`telegram-deactivated`,!0)),r.isActive===!1&&s(`telegram-deactivated`,!0)}r.onEvent(`viewportChanged`,()=>t.emit(`viewport`,void 0)),i(`6.1`)&&r.BackButton.onClick(()=>t.emit(`escape`,void 0))}let d=i(`6.1`)?r.HapticFeedback:void 0;return{inTelegram:!!r,version:r?.version??`0`,platform:r?.platform??`browser`,events:t,haptics:{impact(e=`light`){d&&a(`haptic`,()=>d.impactOccurred(e))},notify(e){d&&a(`haptic`,()=>d.notificationOccurred(e))},selection(){d&&a(`haptic`,()=>d.selectionChanged())}},get paused(){return o.size>0},setClosingConfirmation(e){i(`6.2`)&&a(`closingConfirmation`,()=>e?r.enableClosingConfirmation():r.disableClosingConfirmation())},setBackButtonVisible(e){i(`6.1`)&&a(`BackButton`,()=>e?r.BackButton.show():r.BackButton.hide())},safeArea:l,deviceStorage:i(`9.0`)&&r?.DeviceStorage?r.DeviceStorage:null}}var Kl=1/60,ql=.05,Jl=.25,Yl=class{timeScale=1;tick=0;unscaledTime=0;fps=0;frameMs=0;acc=0;last=-1;raf=0;running=!1;pauseFlag=!1;fpsFrames=0;fpsTime=0;hooks;constructor(e){this.hooks=e}get paused(){return this.pauseFlag}setPaused(e){e!==this.pauseFlag&&(this.pauseFlag=e,this.last=-1)}start(){this.running||(this.running=!0,this.last=-1,this.raf=requestAnimationFrame(this.frame))}stop(){this.running=!1,cancelAnimationFrame(this.raf)}advance(e){e=Math.min(Math.max(e,0),Jl),this.unscaledTime+=e;let t=this.pauseFlag?0:Math.max(0,this.timeScale);this.acc+=Math.min(e*t,ql);let n=0;for(;this.acc>=.016666666666666666&&n<3;)this.hooks.fixed(Kl,this.tick),this.tick++,this.acc-=Kl,n++;n===3&&(this.acc=Math.min(this.acc,Kl));let r={realDt:e,unscaledTime:this.unscaledTime,gameTime:this.tick*Kl,steps:n,timeScale:t,alpha:this.acc/Kl};return this.hooks.update?.(r),this.hooks.timeScale&&(this.timeScale=this.hooks.timeScale()),this.hooks.render(r),this.measure(e),r}measure(e){this.fpsFrames++,this.fpsTime+=e,this.fpsTime>=.5&&(this.fps=this.fpsFrames/this.fpsTime,this.frameMs=this.fpsTime/this.fpsFrames*1e3,this.fpsFrames=0,this.fpsTime=0)}frame=e=>{if(!this.running)return;let t=this.last<0?0:(e-this.last)/1e3;this.last=e,this.advance(t),this.raf=requestAnimationFrame(this.frame)}},Xl=new Set([`Space`,`ShiftLeft`,`ShiftRight`]),Zl=class{events=new Hl;pointers=new Set;keys=new Set;blockedUntil=-1/0;now;surface;cleanup=[];constructor(e,t=()=>performance.now()/1e3){this.surface=e,this.now=t,e.style.touchAction=`none`,this.listen(window,`pointerdown`,this.onPointerDown,{capture:!0}),this.listen(window,`pointerup`,this.onPointerUp,{capture:!0}),this.listen(window,`pointercancel`,this.onPointerUp,{capture:!0}),this.listen(window,`keydown`,this.onKeyDown),this.listen(window,`keyup`,this.onKeyUp),this.listen(window,`blur`,()=>this.releaseAll()),this.listen(e,`contextmenu`,e=>e.preventDefault())}get inputsDown(){return this.pointers.size+this.keys.size}get held(){return this.inputsDown>0}blockInputUntil(e){this.blockedUntil=Math.max(this.blockedUntil,e)}get blocked(){return this.now()<this.blockedUntil}releaseAll(){let e=this.inputsDown;this.pointers.clear(),this.keys.clear();for(let t=e-1;t>=0;t--)this.events.emit(`up`,t)}dispose(){this.cleanup.forEach(e=>e()),this.cleanup.length=0}listen(e,t,n,r){e.addEventListener(t,n,r),this.cleanup.push(()=>e.removeEventListener(t,n,r))}startsOnGame(e){return e===this.surface||e instanceof Element&&!!e.closest(`[data-input-passthrough]`)}press(){this.events.emit(`down`,this.inputsDown)}onPointerDown=e=>{if((e.pointerType!==`mouse`||e.button===0)&&this.startsOnGame(e.target)&&!(this.blocked||this.pointers.has(e.pointerId))){this.pointers.add(e.pointerId);try{this.surface.setPointerCapture?.(e.pointerId)}catch{}this.press()}};onPointerUp=e=>{this.pointers.delete(e.pointerId)&&this.events.emit(`up`,this.inputsDown)};onKeyDown=e=>{Xl.has(e.code)&&(e.preventDefault(),e.repeat||this.keys.has(e.code)||this.blocked||(this.keys.add(e.code),this.press()))};onKeyUp=e=>{this.keys.delete(e.code)&&this.events.emit(`up`,this.inputsDown)}},Ql={ambSky:{value:new K(.7,.8,.9)},ambEquator:{value:new K(.6,.6,.6)},ambGround:{value:new K(.4,.4,.35)},globalColoring:{value:new K(1,1,1)},rimColor:{value:new K(1,1,1)},rimStrength:{value:.25}};function $l(e,t={}){if(e.userData.shaded)return e;e.userData.shaded=!0;let n=!!t.rim;return e.onBeforeCompile=e=>{e.uniforms.uAmbSky=Ql.ambSky,e.uniforms.uAmbEquator=Ql.ambEquator,e.uniforms.uAmbGround=Ql.ambGround,e.uniforms.uGlobalColoring=Ql.globalColoring,n&&(e.uniforms.uRimColor=Ql.rimColor,e.uniforms.uRimStrength=Ql.rimStrength),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 uAmbSky;
uniform vec3 uAmbEquator;
uniform vec3 uAmbGround;
uniform vec3 uGlobalColoring;
${n?`uniform vec3 uRimColor;
uniform float uRimStrength;`:``}`).replace(`#include <lights_fragment_begin>`,`#include <lights_fragment_begin>
{
  vec3 wN = inverseTransformDirection( geometryNormal, viewMatrix );
  vec3 tri = wN.y > 0.0 ? mix( uAmbEquator, uAmbSky, wN.y ) : mix( uAmbEquator, uAmbGround, -wN.y );
  irradiance += tri * PI;
}`).replace(`#include <opaque_fragment>`,`${n?`outgoingLight += uRimColor * uRimStrength * pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), 3.0 ) * diffuseColor.rgb;
`:``}outgoingLight *= uGlobalColoring;
#include <opaque_fragment>`)},e.customProgramCacheKey=()=>n?`shade-rim`:`shade`,e}var eu={skyTop:`#3f8fd8`,skyBottom:`#cde9f7`,skyGround:`#cde9f7`,fog:`#cde9f7`,ground:`#9db58a`,pavement:`#d9d4c7`,road:`#5d6066`,sun:`#fff4e0`};function tu(e){let t=new Vl({canvas:e,antialias:!0,powerPreference:`high-performance`,stencil:!1});return t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.outputColorSpace=Ie,t.shadowMap.enabled=!0,t.shadowMap.type=1,t}var nu=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww; // keep on the far plane
  }
`,ru=`
  uniform vec3 top;
  uniform vec3 bottom;
  uniform vec3 ground;
  varying vec3 vDir;
  void main() {
    float h = normalize(vDir).y;
    vec3 col = h < 0.0 ? ground : mix(bottom, top, smoothstep(0.0, 1.0, h));
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function iu(){let e=new Ca({uniforms:{top:{value:new K(eu.skyTop)},bottom:{value:new K(eu.skyBottom)},ground:{value:new K(eu.skyGround)}},vertexShader:nu,fragmentShader:ru,side:1,depthWrite:!1,fog:!1}),t=new q(new ma(500,32,16),e);return t.name=`sky`,t.frustumCulled=!1,t.renderOrder=-1e3,t}function au(){let e=new Fn;e.fog=new Pn(eu.fog,16,40);let t=iu();e.add(t);let n=new q(new pa(400,400),$l(new Ta({color:eu.ground})));n.name=`ground`,n.rotation.x=-Math.PI/2,n.position.y=-.27,n.receiveShadow=!0,e.add(n);let r=new fo(eu.sun,2.2);r.name=`sun`,r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.bias=-5e-4,r.shadow.normalBias=.02,e.add(r,r.target);let i=new oo(60,1,.1,1e3);return i.position.set(3.2,5.2,-5.5),i.lookAt(0,.6,3.5),{scene:e,camera:i,sun:r,sky:t,ground:n,resize(e,t){i.aspect=e/Math.max(1,t),i.updateProjectionMatrix()},followCamera(e){t.position.set(i.position.x,-.0975+e,i.position.z)}}}var ou=2147483647,su=161803398,cu=class{sa=new Int32Array(56);inext=0;inextp=21;constructor(e){e|=0;let t=this.sa,n=su-(e===-2147483648?ou:Math.abs(e));t[55]=n;let r=1;for(let e=1;e<55;e++){let i=21*e%55;t[i]=r,r=n-r,r<0&&(r+=ou),n=t[i]}for(let e=1;e<5;e++)for(let e=1;e<56;e++)t[e]-=t[1+(e+30)%55],t[e]<0&&(t[e]+=ou);this.inext=0,this.inextp=21}internalSample(){let e=this.inext,t=this.inextp;++e>=56&&(e=1),++t>=56&&(t=1);let n=this.sa[e]-this.sa[t];return n===ou&&n--,n<0&&(n+=ou),this.sa[e]=n,this.inext=e,this.inextp=t,n}sample(){return this.internalSample()*(1/ou)}next(){return this.internalSample()}nextMax(e){if(e<0)throw RangeError(`maxValue`);return Math.trunc(this.sample()*e)}nextRange(e,t){if(e>t)throw RangeError(`minValue`);let n=t-e;return n<=ou?Math.trunc(this.sample()*n)+e:Math.trunc(this.largeRangeSample()*n)+e}nextDouble(){return this.sample()}largeRangeSample(){let e=this.internalSample();this.internalSample()%2==0&&(e=-e);let t=e;return t+=2147483646,t/=2*ou-1,t}},lu=Math.fround,uu=e=>e<0?0:e>1?1:e;function du(e,t,n){return e=lu(e),t=lu(t),lu(e+lu(lu(t-e)*lu(uu(n))))}function fu(e){let t=Math.round(e);return(t-e===.5&&t%2!=0?t-1:t)+0}function pu(e){return lu(uu(e.nextRange(0,1e4)/1e4))}function mu(e,t=.5){return pu(e)<t}function hu(e,t=.5){return t<=0?!1:pu(e)<t}function gu(e,t){return t[e.nextMax(t.length)]}function _u(e,t){return Math.imul(e>>>0,65599)+(t&255)>>>0}function vu(e,t){return t>>>=0,e=_u(e,t&255),e=_u(e,t>>>8&255),e=_u(e,t>>>16&255),_u(e,t>>>24&255)}var yu=e=>vu(1,e);function bu(e,t,n,r){let i=e>>>0;return i=vu(i,fu(lu(t*128))),i=vu(i,fu(lu(n*128))),i=vu(i,fu(lu(r*128))),i}var xu=e=>new cu(e|0);function Su(e){let t=new cu(e),n=e%31;if(n>1)for(let e=n-1;e>0;e--)t.nextMax(e);return t}var Cu=(e,t,n=.001)=>Math.abs(e-t)<=n,wu=(e,t)=>e-Math.floor(e/t)*t,Tu=(e,t)=>t===0?e:e-Math.floor(e/t)*t,Eu=(e,t)=>t<=0?0:(e%t+t)%t;function Du(e,t,n){return e<t?e=t:e>n&&(e=n),e}var Ou=(e,t)=>e%t,ku=e=>e*(e+1)/2;function Au(e){if(e<=0)return 0;let t=Math.floor((Math.sqrt(8*e+1)-1)/2);for(;ku(t+1)<=e;)t++;for(;t>0&&ku(t)>e;)t--;return t}var ju=class{cfg;distanceReachedAtStartScene=0;constructor(e){this.cfg=e}get chunkLength(){return this.cfg.chunkLength}distanceForZ(e){return Math.floor(e)+this.distanceReachedAtStartScene}zForDistance(e){return e-this.distanceReachedAtStartScene}chunkZ(e,t){return(e-t)*this.chunkLength}chunkAtZ(e,t){return t+fu(e/this.chunkLength)}isCloseToChunkBorder(e){let t=this.chunkLength,n=wu(e/t,1);return n<.25/t||n>1-.25/t}lastCheckpointAt(e){let t=this.cfg.checkpointLength;if(!this.cfg.everIncreasingCheckpointSize){let n=(t===0?0:Math.trunc(e/t))*t;return e<0&&e!==n&&(n-=t),n}let n=Au(e);return n*(n+1)/2}nextCheckpointAt(e){let t=this.lastCheckpointAt(e);return this.cfg.everIncreasingCheckpointSize?t+Au(t)+1:t+this.cfg.checkpointLength}sameCheckpoint(e,t){return this.lastCheckpointAt(e)===this.lastCheckpointAt(t)}lastCheckpointChunk(e){let t=this.chunkLength;return t===0?0:Math.trunc(this.lastCheckpointAt(e)/t)}spawnZForBest(e){return this.zForDistance(this.lastCheckpointAt(e))}environmentForChunk(e){let t=this.cfg.environments;return e>9?t[Eu(Math.trunc(e/10),t.length)]:t[0]}difficultyForChunk(e){let t=this.cfg.difficulties;if(!t.length)return null;if(e<1)return t[0];let n=0;for(let r of t){if(e>=n&&e<n+r.length)return r;n+=r.length}return t[t.length-1]}cameraIndexForChunk(e,t){let n=this.environmentForChunk(e).possibleCameras,r=Math.trunc(e/5);return n.length?n[Eu(r,n.length)]:Eu(r,t)}},Mu={NORMAL:0,FILLED:1,EXPLOSIVE:2,GEYSER:3,WEB:4},Nu={NONE:0,LEFT:1,RIGHT:2},Pu=.0625,Fu=.0625,Iu=.7125,Lu=.65,Ru=1024,zu={z:0,chunkIndex:-1},Bu=class e{crackIndex=-1;crackType=Mu.NORMAL;length=1;width=1;scale={x:1,y:1,z:1};xPos=0;chunk=zu;localStartPoint=0;prev=null;next=null;ground=null;hasCoin=!1;isCoinBag=!1;isSpeedupCrack=!1;collectedSpeedupAtTime=-1;snowType=Nu.NONE;snowMeshIndex=-1;presentType=Nu.NONE;presentCollectedAtTime=-1;customPaverColorIndex=-1;timedPaverIndex=-1;isSafePaver=!1;collapsePaverAtTime=0;timePaverSoundPlayed=!1;explosionStartedAtTime=-1;hasSpawnedExplosionParticle=!1;isFirstCrackOfCheckpoint=!1;isLastCrackOfCheckpoint=!1;missionTag=``;allowMidgroundCharacters=!0;obstacle=null;obstacleTimeOffset=0;obstacleIndexOverride=-1;customObject=null;sfxTag=null;stepCount=0;firstSteppedOnAtTime=0;lastSteppedOnAtTime=0;firstStartedLiftedNextFootAtTime=0;firstSteppedOnNextCrackAtTime=0;indexOfTheNextSteppedOnCrack=-1;footFirstLiftedOffAtTime=0;comboCountOnStep=0;comboIndexOnStep=0;cashInAtTime=34028235e31;loseComboAtTime=0;willBeHitByFoot=!1;steppedBetweenMeAndPrevious=!1;wasHitByDeadHead=!1;collectedComboState=0;collectedComboNumber=-1;collectedComboFailed=!1;static newSentinel(){let t=new e;return t.crackIndex=-1,t.prev=t,t.next=t,t}static getNew(){return new e}get maxPos(){return this.chunk.z+this.localStartPoint}get endPos(){return this.maxPos+this.length}get isTimedPaver(){return this.timedPaverIndex>=0}get isSnowPaver(){return this.snowType!==Nu.NONE}get isPresentPaver(){return this.presentType!==Nu.NONE}isCollapsed(e){return this.collapsePaverAtTime>0&&this.collapsePaverAtTime<=e}get prevCrack(){let e=this.prev;return e&&e.crackIndex>=0?e:null}get nextCrack(){let e=this.next;return e&&e.crackIndex>=0?e:null}minPos(e=0){let t=this;for(let n=this.prev;n&&n.crackIndex>=0;n=n.prev)if(t=n,!(n.collapsePaverAtTime>0&&e>=n.collapsePaverAtTime))return n.maxPos+n.length;return t.maxPos-Fu}get overlapLenience(){return this.crackType===Mu.WEB?.25:.5}isOverlapping(e,t,n=0){let r=this.overlapLenience;return e-r*t<=this.maxPos&&this.minPos(n)<=e+r*t}centerOfCrackHoleZ(e=0){return(this.minPos(e)+this.maxPos)/2}distanceReached(e){if(e.cfg.everIncreasingCheckpointSize)return this.crackIndex-1023;let t=this.nextCrack,n=t?t.maxPos:this.maxPos+this.length+Fu;return e.distanceForZ(n+.05)}unlink(){let e=this.prev,t=this.next;e&&(e.next=t),t&&(t.prev=e),this.prev=null,this.next=null}insertAfter(e){let t=e.next;this.prev=e,this.next=t,e.next=this,t&&(t.prev=this)}destroy(){this.unlink(),this.hasCoin=this.isCoinBag=this.isSpeedupCrack=!1,this.chunk=zu,this.ground=null,this.customObject=null,this.sfxTag=null,this.hasSpawnedExplosionParticle=this.isSafePaver=!1,this.collapsePaverAtTime=0,this.collectedSpeedupAtTime=-1,this.crackIndex=-1,this.explosionStartedAtTime=-1,this.crackType=Mu.NORMAL,this.timedPaverIndex=-1,this.obstacle&&(this.obstacle.parentCrack=null),this.obstacle=null,this.obstacleTimeOffset=0,this.obstacleIndexOverride=-1,this.snowType=Nu.NONE,this.snowMeshIndex=-1,this.presentType=Nu.NONE,this.customPaverColorIndex=-1}};function Vu(e,t,n=!1,r=!1){e.isSpeedupCrack=!1,e.isFirstCrackOfCheckpoint=!1;let i=t.chunkLength,a=e.prevCrack;if(a&&t.cfg.allowCoffee&&i!==0&&(e.isSpeedupCrack=fu(a.maxPos/i)!==fu(e.maxPos/i),e.isSpeedupCrack&&(e.hasCoin=!1)),!t.cfg.everIncreasingCheckpointSize){let n=e.maxPos,r=n-Math.trunc(n);e.isFirstCrackOfCheckpoint=Math.abs(r)<=.01&&Tu(t.distanceForZ(n+.01),t.cfg.checkpointLength)===0}else if(e.crackIndex!==1024){let n=e.distanceReached(t);e.isFirstCrackOfCheckpoint=!t.sameCheckpoint(n-1,n-2)}e.maxPos<0&&(e.presentType=Nu.NONE),n&&r||(e.firstSteppedOnAtTime=0,e.cashInAtTime=0,e.presentCollectedAtTime=-1,e.collectedComboState=0,e.collectedComboNumber=-1,e.collectedComboFailed=!1),e.lastSteppedOnAtTime=0,e.wasHitByDeadHead=!1,e.comboCountOnStep=0,e.comboIndexOnStep=0,e.stepCount=0,e.steppedBetweenMeAndPrevious=!1,e.willBeHitByFoot=!1,e.hasSpawnedExplosionParticle=!1,e.collapsePaverAtTime=0,e.timePaverSoundPlayed=!1,e.firstStartedLiftedNextFootAtTime=0,e.firstSteppedOnNextCrackAtTime=0,e.loseComboAtTime=0,e.footFirstLiftedOffAtTime=0,e.indexOfTheNextSteppedOnCrack=-1,e.explosionStartedAtTime=-1}var Hu=class{sentinel=Bu.newSentinel();world;isForOpponent;allowCoins;comboIndex=0;lastCollectedComboNumber=0;version=0;constructor(e,t=0){this.world=e,this.isForOpponent=t,this.allowCoins=t===0}get head(){return this.sentinel.nextCrack}get tail(){return this.sentinel.prevCrack}*[Symbol.iterator](){for(let e=this.sentinel.next;e&&e!==this.sentinel;e=e.next)yield e}get count(){let e=0;for(let t of this)e++;return e}addCrackToListInOrder(e){e.unlink();let t=this.sentinel;for(let n=this.sentinel.prev;n&&n!==this.sentinel;n=n.prev)if(n.maxPos<e.maxPos){t=n;break}e.insertAfter(t),e.ground=this;let n=e.prevCrack,r=n?n.crackIndex+1:this.world.distanceForZ(e.maxPos)+Ru;r<0&&(r=0);for(let t=e;t;t=t.nextCrack)t.crackIndex=r++,Vu(t,this.world,!1);this.version++}destroyCrack(e){e.destroy(),this.version++}crackOverlapping(e,t,n=0){for(let r=this.tail;r;r=r.prevCrack)if(r.isOverlapping(e,t,n)&&r.crackType!==Mu.FILLED)return r;return null}furthestCrackBeforePosition(e){for(let t=this.tail;t;t=t.prevCrack)if(t.maxPos<=e)return t;return null}closestCrackAfterPosition(e){for(let t=this.head;t;t=t.nextCrack)if(e<t.maxPos)return t;return null}closestCrackBeforePosition(e){let t=this.closestCrackAfterPosition(e);return t?t.prevCrack:null}findCrackWithIndex(e){for(let t=this.tail;t;t=t.prevCrack)if(t.crackIndex===e)return t;return null}movementNeededToAvoidAnyCracks(e,t,n=-34028235e31,r=34028235e31,i=0){let a=this.crackOverlapping(e,t,i);if(!a)return 0;let o=a.overlapLenience,s=a.minPos(i),c=s-(e+o*t),l=a.maxPos-(e-o*t),u=(s+a.maxPos)/2;return(c<n||e>u)&&l<=r?l:c}},Uu={Default:0,Ground:1,Player:2,World:3,Cuttable:4,PlayerCorpse:5,PlayerBystander:6,SkySphere:7,Car:8,CarWheel:9,PlayerChaser:10,PlayerOpponent:11},Y=Uu,Wu={[Y.Default]:[Y.Default,Y.Ground,Y.World,Y.Cuttable,Y.PlayerCorpse,Y.SkySphere,Y.PlayerChaser,Y.PlayerOpponent],[Y.Ground]:[Y.Default,Y.Ground,Y.Player,Y.World,Y.Cuttable,Y.PlayerCorpse,Y.PlayerBystander,Y.SkySphere,Y.CarWheel,Y.PlayerChaser,Y.PlayerOpponent],[Y.Player]:[Y.Ground,Y.Player,Y.Car,Y.PlayerChaser],[Y.World]:[Y.Default,Y.Ground,Y.World,Y.Cuttable,Y.PlayerCorpse,Y.SkySphere,Y.PlayerChaser,Y.PlayerOpponent],[Y.Cuttable]:[Y.Default,Y.Ground,Y.World,Y.Cuttable,Y.PlayerCorpse,Y.SkySphere,Y.PlayerChaser,Y.PlayerOpponent],[Y.PlayerCorpse]:[Y.Default,Y.Ground,Y.World,Y.Cuttable,Y.PlayerCorpse,Y.PlayerBystander,Y.SkySphere,Y.Car,Y.PlayerChaser],[Y.PlayerBystander]:[Y.Ground,Y.PlayerCorpse,Y.PlayerBystander,Y.SkySphere,Y.PlayerChaser],[Y.SkySphere]:[Y.Default,Y.Ground,Y.World,Y.Cuttable,Y.PlayerCorpse,Y.PlayerBystander,Y.SkySphere,Y.PlayerChaser,Y.PlayerOpponent],[Y.Car]:[Y.Player,Y.PlayerCorpse,Y.Car,Y.PlayerChaser],[Y.CarWheel]:[Y.Ground,Y.PlayerChaser],[Y.PlayerChaser]:[Y.Default,Y.Ground,Y.Player,Y.World,Y.Cuttable,Y.PlayerCorpse,Y.PlayerBystander,Y.SkySphere,Y.Car,Y.CarWheel,Y.PlayerChaser],[Y.PlayerOpponent]:[Y.Default,Y.Ground,Y.World,Y.Cuttable,Y.SkySphere,Y.PlayerOpponent]};function Gu(e){let t=Wu[e].reduce((e,t)=>e|1<<t,0);return(1<<e&65535)<<16|t&65535}var Ku=Math.PI/180,qu=(e=0,t=0,n=0)=>({x:e,y:t,z:n}),Ju=e=>({x:e.x,y:e.y,z:e.z}),Yu=(e,t)=>({x:e.x+t.x,y:e.y+t.y,z:e.z+t.z}),Xu=(e,t)=>({x:e.x-t.x,y:e.y-t.y,z:e.z-t.z}),X=(e,t)=>({x:e.x*t,y:e.y*t,z:e.z*t}),Zu=(e,t)=>e.x*t.x+e.y*t.y+e.z*t.z,Qu=e=>Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z),$u=e=>e.x*e.x+e.y*e.y+e.z*e.z;function ed(e){let t=Qu(e);return t>1e-5?X(e,1/t):qu()}function td(e,t){let n=$u(e);return n>t*t?X(e,t/Math.sqrt(n)):e}var nd=e=>Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.z),rd=Object.freeze({x:1,y:0,z:0});Object.freeze({x:-1,y:0,z:0});var id=Object.freeze({x:0,y:1,z:0}),ad=Object.freeze({x:0,y:0,z:1}),od=(e,t,n)=>e<t?t:e>n?n:e,sd=e=>e<0?0:e>1?1:e,cd=(e,t,n)=>e+(t-e)*sd(n);function ld(e,t,n){return e===t?0:sd((n-e)/(t-e))}function ud(e,t,n){return Math.abs(t-e)<=n?t:e+Math.sign(t-e)*n}var dd=e=>e>=0?1:-1,fd=()=>({x:0,y:0,z:0,w:1}),pd=e=>({x:e.x,y:e.y,z:e.z,w:e.w});function md(e,t){return{x:e.w*t.x+e.x*t.w+e.y*t.z-e.z*t.y,y:e.w*t.y-e.x*t.z+e.y*t.w+e.z*t.x,z:e.w*t.z+e.x*t.y-e.y*t.x+e.z*t.w,w:e.w*t.w-e.x*t.x-e.y*t.y-e.z*t.z}}var hd=e=>({x:-e.x,y:-e.y,z:-e.z,w:e.w});function gd(e){let t=Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z+e.w*e.w);return t>1e-9?{x:e.x/t,y:e.y/t,z:e.z/t,w:e.w/t}:fd()}var _d=(e,t)=>e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w;function vd(e,t){let n=2*(e.y*t.z-e.z*t.y),r=2*(e.z*t.x-e.x*t.z),i=2*(e.x*t.y-e.y*t.x);return{x:t.x+e.w*n+(e.y*i-e.z*r),y:t.y+e.w*r+(e.z*n-e.x*i),z:t.z+e.w*i+(e.x*r-e.y*n)}}function yd(e,t){let n=ed(t),r=e*Ku*.5,i=Math.sin(r);return{x:n.x*i,y:n.y*i,z:n.z*i,w:Math.cos(r)}}function bd(e,t,n){return md(md(yd(t,id),yd(e,rd)),yd(n,ad))}function xd(e,t){let n=Math.min(Math.abs(_d(e,t)),1);return n>1-1e-6?0:2*Math.acos(n)/Ku}function Sd(e,t,n){let r=_d(e,t),i=t.x,a=t.y,o=t.z,s=t.w;r<0&&(r=-r,i=-i,a=-a,o=-o,s=-s);let c,l;if(r>.9995)c=1-n,l=n;else{let e=Math.acos(r),t=Math.sin(e);c=Math.sin((1-n)*e)/t,l=Math.sin(n*e)/t}return gd({x:e.x*c+i*l,y:e.y*c+a*l,z:e.z*c+o*l,w:e.w*c+s*l})}var Cd=(e,t,n)=>Sd(e,t,sd(n));function wd(e){let{x:t,y:n,z:r,w:i}=e;i<0&&(t=-t,n=-n,r=-r,i=-i);let a=Math.sqrt(t*t+n*n+r*r);if(a<1e-9)return{x:2*t,y:2*n,z:2*r};let o=2*Math.atan2(a,i);return{x:t/a*o,y:n/a*o,z:r/a*o}}var Td=1/60,Ed=Pu,Dd=e=>1-.85**(e*120),Od=(e,t)=>Math.abs(t-.016666666666666666)<=1e-4?e:e**+(t/Td),kd=class{biPed;part;name;toeAnchor;heelAnchor;footLength;base;rot;vel=qu();_attached=!0;needsToTouchGround=!1;desiredYPos=-1;currentMaxSpeed=0;currentAcceleration=0;speedVariance=0;desiredSpeedVariance=0;firstNeededToTouchGroundAtTime=-1;expectedLandingFrame=0;expectedLandingSolePosition=qu();expectedLandingRotation=fd();solePosWhenLetGoOfFoot=qu();solePosWhenLastTouchingGround=qu();distanceToOtherFoot=0;isLikelyToLandOnCrack=!1;shouldLandAtSamePositionAsOtherFoot=!1;hasClaimedScoreForLastStep=!0;hasPlayedHeelSound=!0;touchDownCrack=null;hasPlayedToeSound=!0;lerpToExpectedGroundedPosition=!1;attachedToGroundChangedAtTime=-1;footStepEffectPosition=-1;stuckCrack=null;stuckToGroundTimer=0;stuckForce=0;stuckToGroundAtPos=qu();frameCount=0;rotationAtDeath=fd();constructor(e,t){this.biPed=e,this.part=t,this.name=t.name;let n=t.def.shape;if(n.kind===`box`){let e=Xu(n.center,n.half),t=Yu(n.center,n.half);this.toeAnchor={x:0,y:e.y,z:t.z},this.heelAnchor={x:0,y:e.y,z:e.z},this.footLength=t.z-e.z}else this.toeAnchor={x:0,y:-.05,z:.19569},this.heelAnchor={x:0,y:-.05,z:-.06896},this.footLength=.25;this.base=t.pos,this.rot=t.rot,this.solePosWhenLastTouchingGround=this.solePos}get m(){return this.biPed.movement}get fwd(){return vd(this.biPed.baseRotation,ad)}get IsLeft(){return this.name.endsWith(`L`)}get otherFoot(){let e=this.biPed.feet;return e[0]===this?e[1]:e[0]}get defaultRotation(){return md(this.biPed.baseRotation,this.part.initialRotation)}transformPoint(e,t=this.base,n=this.rot){return Yu(t,vd(n,e))}get tippyToePos(){return this.transformPoint(this.toeAnchor)}get heelPos(){return this.transformPoint(this.heelAnchor)}get anklePos(){return Ju(this.base)}get center(){return this.transformPoint(this.part.def.shape.center)}get heelIsLower(){return this.heelPos.y<this.tippyToePos.y}get lowestFootHeight(){return Math.min(this.heelPos.y,this.tippyToePos.y)}get solePos(){return this.soleFor(this.base,this.rot)}soleFor(e,t){let n=this.transformPoint(this.toeAnchor,e,t),r=this.transformPoint(this.heelAnchor,e,t),i=X(this.fwd,this.footLength/2);return r.y<n.y?Yu(r,i):Xu(n,i)}lowestFor(e,t){return Math.min(this.transformPoint(this.toeAnchor,e,t).y,this.transformPoint(this.heelAnchor,e,t).y)}get lowestEnd(){let e=this.heelPos,t=this.tippyToePos;return e.y<=t.y?e:t}get isAttachedToGround(){return this._attached}set isAttachedToGround(e){e!==this._attached&&(this._attached=e,this.lerpToExpectedGroundedPosition=!1,this.attachedToGroundChangedAtTime=this.biPed.time,this.solePosWhenLastTouchingGround=this.solePos,e?this.hasClaimedScoreForLastStep=!1:(this.isLikelyToLandOnCrack=!1,this.shouldLandAtSamePositionAsOtherFoot=!1,this.firstNeededToTouchGroundAtTime=-1,this.hasPlayedHeelSound=!1,this.hasPlayedToeSound=!1))}get expectedToHitGroundInFrames(){return this._attached?0:this.needsToTouchGround?this.expectedLandingFrame-this.frameCount:1e3}MoveForwards(e,t){this.currentMaxSpeed=e,this.currentAcceleration=t}MoveToHeight(e){this.desiredYPos=Math.max(0,e)+Ed}get IsStuckToGround(){return this.stuckToGroundTimer>0}StuckPercentage(){return this.stuckToGroundTimer/33}StickToGround(e,t){this.stuckCrack=e,this.stuckToGroundTimer=t,this.stuckForce=0,this.stuckToGroundAtPos=this.solePos}ResetStuckTime(e){this.stuckToGroundTimer=e}CanUnstick(e){return--this.stuckToGroundTimer,this.stuckToGroundTimer<1?(this.stuckCrack&&this.biPed.steppedOff(this.stuckCrack,this),this.stuckCrack=null,this.stuckToGroundTimer=0,!0):(this.stuckForce+=e,!1)}CalculateStartingFootHeight(){return this.stuckForce>0?cd(.5,0,this.stuckToGroundTimer/33)*this.stuckForce:0}ChangeRotationButKeepAnchoredToGround(e){let t=X(ad,this.footLength/2),n=this.tippyToePos,r=this.heelPos,i=n.y<=r.y?Xu(n,t):Yu(r,t);i.y=Math.max(i.y,0),this.rot=pd(e);let a=this.tippyToePos,o=this.heelPos;this.base=o.y<=a.y?Xu(Xu(i,t),vd(e,this.heelAnchor)):Xu(Yu(i,t),vd(e,this.toeAnchor))}PreUpdateFoot(){this.distanceToOtherFoot=Zu(Xu(this.solePos,this.otherFoot.solePos),this.fwd)}applyPose(){let e=this.part.body;e.isKinematic()&&(e.setNextKinematicTranslation({x:Math.fround(this.base.x),y:Math.fround(this.base.y),z:Math.fround(this.base.z)}),e.setNextKinematicRotation(this.rot))}tiltAmount(e){if(!this._attached)return e;let t=this.m.angleGroundedFootFromStretchepPercentage;return e>t?ld(t,1,e):e>0?0:this.otherFoot._attached?e<=-.5?e*ld(-.5,-1,e):0:e}UpdateFoot(){let e=this.biPed,t=this.m,n=this.fwd,r=this.base.y,i=this.base.z,a=Ju(this.base),o=this.tippyToePos,s=this.heelPos,c=this.solePos,l=t.maxGroundedDistanceBetweenFeet,u=Td*e.currentSpeedMultiplier,d=e.ground,f=e=>Od(e,u);if(e.hasStartedSteppingOrDead||!this._attached){if(this.speedVariance=cd(this.speedVariance,this.desiredSpeedVariance,.03),this.currentAcceleration>0){let e=t.footSpeedVariance**+this.speedVariance,r=Yu(this.vel,X(n,u*this.currentAcceleration*e));r.y=0,r=td(r,e*this.currentMaxSpeed),this.vel.x=r.x,this.vel.z=r.z,this.currentAcceleration=0}if(this._attached)this.vel=X(this.vel,f(t.zFrictionWhenTouchingGround));else{if(this.needsToTouchGround){if(this.firstNeededToTouchGroundAtTime<0){this.solePosWhenLetGoOfFoot=c,this.firstNeededToTouchGroundAtTime=e.time;let t=this.CalculateLanding();this.shouldLandAtSamePositionAsOtherFoot&&t.base.z!==i&&(this.vel.z*=(this.otherFoot.base.z-i)/(t.base.z-i),t=this.CalculateLanding()),this.expectedLandingSolePosition=t.solePos,this.expectedLandingRotation=t.rot,this.expectedLandingFrame=this.frameCount+t.frameCount,d&&d.crackOverlapping(t.solePos.z,this.footLength,e.time)&&(this.isLikelyToLandOnCrack=!0)}this.currentAcceleration=0,this.vel.y-=u*t.downSpeed}this.vel.z*=f(t.zFrictionWhenDroppingFoot),this.vel.x*=f(t.zFrictionWhenDroppingFoot);let n=this.distanceToOtherFoot;if(n>l){this.vel.y*=.65**ld(l,l+.05,n);let e=.5**ld(l,l+.15,n);this.vel.x*=e,this.vel.z*=e}}let p=od(this.distanceToOtherFoot/(e.averageLegLength*t.spreadLengthOfFullAngle),-1,1),m=this.tiltAmount(p),h=md(this.defaultRotation,yd(-m*t.footAngleWhenFullyStretched,rd));if(this.rot=Cd(this.rot,h,Dd(u)),!this._attached)this.base=Yu(a,X(this.vel,u)),this.needsToTouchGround&&this.lowestFootHeight<=Ed&&(this.desiredYPos=Ed,this.vel.y=0,e.hasGivenUpLiftingCurrentFoot?this.vel.z=0:this.vel=X({x:this.vel.x,y:0,z:this.vel.z},t.zFrictionWhenTouchingGround),e.hasFallenOver||(this.isAttachedToGround=!0,this.shouldLandAtSamePositionAsOtherFoot&&(this.base.z+=this.otherFoot.solePos.z-this.solePos.z),this.footStepEffectPosition=this.solePos.z-this.footLength/2,this.touchDownCrack=d?d.furthestCrackBeforePosition(this.solePos.z):null),this.needsToTouchGround=!1),this.desiredYPos>=0&&(this.base.y+=this.desiredYPos-this.lowestFootHeight,this.desiredYPos=-1,this.vel.y=Math.min(0,(this.base.y-r)/u));else{this.vel.y=0;let e=Yu(c,X({x:this.vel.x,y:0,z:this.vel.z},u));if(!this.IsStuckToGround)e.y=Ed;else{let t=this.stuckToGroundAtPos.z>this.otherFoot.solePos.z+.1?qu(0,.8,-.4):qu(0,1,.8),n=Yu(this.stuckToGroundAtPos,X(t,cd(.5,0,this.stuckToGroundTimer/33)*this.stuckForce));e={x:c.x+(n.x-c.x)*.25,y:c.y+(n.y-c.y)*.25,z:c.z+(n.z-c.z)*.25},this.stuckForce*=.85}this.base=Yu(a,Xu(e,this.soleFor(a,this.rot)))}if(this._attached&&d){let t=this.tippyToePos,n=this.heelPos,r=n.y<=t.y?n:t,i=d.crackOverlapping(r.z,0,e.time),a=!1,c=!1;i?c=i.crackType===Mu.WEB:a=s.y<=o.y==t.y<n.y||xd(this.rot,this.defaultRotation)<10,(c||a)&&(i=d.crackOverlapping(this.solePos.z,this.footLength,e.time)),i&&(e.hasGivenUpLiftingCurrentFoot||e.currentFoot!==this?e.steppedOn(i,this):this.IsStuckToGround||(e.slidOverCrack=!0))}this.footStepEffectPosition>=0&&(this.footStepEffectPosition=this.solePos.z-this.footLength/2)}else this.footStepEffectPosition>=0&&(this.footStepEffectPosition=this.solePos.z-this.footLength/2);if(!this.hasClaimedScoreForLastStep&&d&&this._attached&&(e.hasGivenUpLiftingCurrentFoot||e.currentFoot!==this)){this.hasClaimedScoreForLastStep=!0;let t=d.furthestCrackBeforePosition(this.lowestEnd.z),n=t?.nextCrack;n&&n.crackType===Mu.WEB&&n.centerOfCrackHoleZ(e.time)<this.solePos.z&&(t=n),t&&e.steppedInBetween(t,this),this.stuckForce=0}if(this._attached){let t=this.touchDownCrack,n=xd(this.rot,this.defaultRotation),r=this.heelIsLower;!this.hasPlayedHeelSound&&(n<5||r)&&(e.footSound?.(this,`heel`,t),this.hasPlayedHeelSound=!0),!this.hasPlayedToeSound&&(n<5||!r)&&(e.footSound?.(this,`toe`,t),this.hasPlayedToeSound=!0)}this.touchDownCrack=null,this.applyPose(),e.hasStartedSteppingOrDead&&this.frameCount++}CalculateLanding(){let e=this.m,t=this.fwd,n=Td*this.biPed.currentSpeedMultiplier,r=Ju(this.base),i=pd(this.rot),a=Ju(this.vel),o=this.otherFoot.solePos,s=this.defaultRotation,c=this.biPed.averageLegLength*e.spreadLengthOfFullAngle,l=Dd(n),u=0;for(let d=0;d<600;d++){let d=this.soleFor(r,i);if(!nd(d))break;let f=od(Zu(Xu(d,o),t)/c,-1,1);if(a.z*=Od(e.zFrictionWhenDroppingFoot,n),a.y-=n*e.downSpeed,i=Cd(i,md(s,yd(-f*e.footAngleWhenFullyStretched,rd)),l),r=Yu(r,X(a,n)),this.lowestFor(r,i)<=Ed)break;u++}return r.y-=this.lowestFor(r,i),u++,{base:r,rot:i,solePos:this.soleFor(r,i),frameCount:u}}ResurectFoot(){this.isLikelyToLandOnCrack=!1,this.isAttachedToGround=!0,this.needsToTouchGround=!1,this.rotationAtDeath=fd(),this.vel=qu();let e=this.biPed.ground;e&&(this.base=Yu(this.base,X(ad,e.movementNeededToAvoidAnyCracks(this.solePos.z,this.footLength+.1)))),this.firstNeededToTouchGroundAtTime=this.biPed.time-.5}};function Ad(e,t){let n=(e,t)=>e>-500?e:t;return{xRange:n(t.xRange,e.xRange),xMid:n(t.xMid,e.xMid),yRange:n(t.yRange,e.yRange),zRange:n(t.zRange,e.zRange),springiness:n(t.springiness,e.springiness),stiffness:t.stiffness===0?e.stiffness:Math.max(t.stiffness,0)}}function jd(e,t,n){return{xRange:cd(e.xRange,t.xRange,n),xMid:cd(e.xMid,t.xMid,n),yRange:cd(e.yRange,t.yRange,n),zRange:cd(e.zRange,t.zRange,n),springiness:cd(e.springiness,t.springiness,n),stiffness:cd(e.stiffness,t.stiffness,n)}}function Md(e){if(e.kind===`box`)return 8*e.half.x*e.half.y*e.half.z;let t=e.radius;return Math.PI*t*t*(2*e.halfHeight)+4/3*Math.PI*t*t*t}var Nd=class{def;name;body;collider;parent;joint=null;anchor1;initialPosition;initialRotation=fd();isFoot;isPelvis;isHead;isBelly;massScale=1;aDAD=qu();currentJointProps;volume;layer=Uu.Player;lastMass=-1;constructor(e,t,n,r){this.def=e,this.name=e.name,this.body=t,this.collider=n,this.parent=r,this.initialPosition={...e.pos},this.anchor1=r?vd(hd(r.initialRotation),{x:e.pos.x-r.def.pos.x,y:e.pos.y-r.def.pos.y,z:e.pos.z-r.def.pos.z}):qu(),this.isFoot=e.name.startsWith(`Foot`),this.isPelvis=e.name===`Pelvis`,this.isHead=e.name.startsWith(`Head`),this.isBelly=e.name.startsWith(`Belly`),this.currentJointProps={...e.joint},this.volume=Md(e.shape)}get pos(){let e=this.body.translation();return{x:e.x,y:e.y,z:e.z}}get rot(){let e=this.body.rotation();return{x:e.x,y:e.y,z:e.z,w:e.w}}get com(){let e=this.body.worldCom();return{x:e.x,y:e.y,z:e.z}}get localCom(){return{...this.def.shape.center}}get initialCenterOfMass(){return Yu(this.initialPosition,vd(this.initialRotation,this.localCom))}get isKinematic(){return this.body.isKinematic()}get isDynamic(){return this.body.isDynamic()}get velocity(){let e=this.body.linvel();return{x:e.x,y:e.y,z:e.z}}set velocity(e){this.body.setLinvel(e,!0)}get angularVelocity(){let e=this.body.angvel();return{x:e.x,y:e.y,z:e.z}}set angularVelocity(e){this.body.setAngvel(e,!0)}transformPoint(e){return Yu(this.pos,vd(this.rot,e))}handPos(){let e=this.def.shape,t=e.kind===`capsule`?e.halfHeight+e.radius:e.half.y;return this.transformPoint({x:e.center.x,y:e.center.y-t,z:e.center.z})}addAccelerationAtPosition(e,t,n){if(!this.isDynamic)return;let r=this.body.mass()*n;this.body.applyImpulseAtPoint({x:e.x*r,y:e.y*r,z:e.z*r},t,!0)}addForce(e,t){this.isDynamic&&this.body.applyImpulse({x:e.x*t,y:e.y*t,z:e.z*t},!0)}addRelativeTorqueAcceleration(e,t){if(!this.isDynamic)return;let n=Yu(this.angularVelocity,X(vd(this.rot,e),t));this.angularVelocity=n}setMass(e){e!==this.lastMass&&(this.lastMass=e,this.collider.setMass(Math.fround(e)),this.body.recomputeMassPropertiesFromColliders())}};function Pd(e,t){return e[0]*t.x*t.x+e[3]*t.y*t.y+e[5]*t.z*t.z+2*(e[1]*t.x*t.y+e[2]*t.x*t.z+e[4]*t.y*t.z)}var Fd=e=>(e%=360,e>180&&(e-=360),e<=-180&&(e+=360),e),Id=(e,t,n)=>e<t?e-t:e>n?e-n:0,Ld=class{physics;R;parts=[];byName=new Map;tuning;pelvis;belly;head;forearmL;forearmR;basePosition;baseRotation=fd();destroyed=!1;constructor(e,t,n){this.physics=e,this.R=e.R,this.tuning=t,this.basePosition={...n};let r=e.R,i=e.world,a=t.ragdoll;for(let e of t.character.parts){let t=e.parent?this.byName.get(e.parent)??null:null,o=e.name.startsWith(`Foot`),s=Yu(n,e.pos),c=(o?r.RigidBodyDesc.kinematicPositionBased():r.RigidBodyDesc.dynamic()).setTranslation(s.x,s.y,s.z).setLinearDamping(2).setAngularDamping(2).setCanSleep(!1),l=i.createRigidBody(c),u=e.shape,d=u.kind===`box`?r.ColliderDesc.cuboid(u.half.x,u.half.y,u.half.z):r.ColliderDesc.capsule(u.halfHeight,u.radius);d.setTranslation(u.center.x,u.center.y,u.center.z).setFriction(a.friction).setRestitution(a.restitution).setCollisionGroups(Gu(Uu.Player)).setActiveHooks(r.ActiveHooks.FILTER_CONTACT_PAIRS);let f=i.createCollider(d,l);o&&f.setEnabled(!1);let p=new Nd(e,l,f,t);if(this.parts.push(p),this.byName.set(e.name,p),t){let e=r.JointData.spherical(p.anchor1,{x:0,y:0,z:0}),n=i.createImpulseJoint(e,t.body,l,!0);n.setContactsEnabled(!1),p.joint=n}this.applyBodyProperties(p,!1,!1)}for(let t of this.parts)for(let n of this.parts)t!==n&&t.def.disableCollisionWith.some(e=>n.name.startsWith(e))&&e.ignoredPairs.add(t.collider.handle<n.collider.handle?`${t.collider.handle}:${n.collider.handle}`:`${n.collider.handle}:${t.collider.handle}`);this.pelvis=this.byName.get(`Pelvis`),this.belly=this.byName.get(`Belly`)??null,this.head=this.byName.get(`Head`)??null,this.forearmL=this.byName.get(`ForearmL`)??null,this.forearmR=this.byName.get(`ForearmR`)??null}find(e){return this.byName.get(e)??null}setKinematic(e,t,n=!1){let r=this.R;e.collider.setEnabled(!(t&&e.isFoot)),e.isKinematic!==t&&(t?(e.body.setBodyType(r.RigidBodyType.KinematicPositionBased,!0),e.body.setLinvel({x:0,y:0,z:0},!0),e.body.setAngvel({x:0,y:0,z:0},!0)):(e.body.setBodyType(r.RigidBodyType.Dynamic,!0),e.isFoot&&this.applyBodyProperties(e,!1,n)))}applyBodyProperties(e,t,n,r=1/60){let i=e.def;e.currentJointProps=t?jd(Ad(i.joint,i.jointAfterDeath),e.currentJointProps,r*.9*60):{...i.joint};let a=n?.3:i.dragOverride<=0?2:i.dragOverride,o=n?.1:i.angularDragOverride<=0?2:i.angularDragOverride;e.body.linearDamping()!==Math.fround(a)&&e.body.setLinearDamping(a),e.body.angularDamping()!==Math.fround(o)&&e.body.setAngularDamping(o);let s=1.5*Math.sqrt(e.volume*this.tuning.ragdoll.densityPerVolume);s=n?s*.4*od(i.massScale,.25,1.5)*e.massScale:s*Math.max(i.massScale,.001)*e.massScale,e.setMass(s)}setLayer(e){let t=Gu(e);for(let n of this.parts)n.layer=e,n.collider.setCollisionGroups(t)}detach(e){e.joint&&=(this.physics.world.removeImpulseJoint(e.joint,!0),null)}driveJoints(e){let t=this.tuning.ragdoll;for(let n of this.parts){let r=n.parent;if(!r||!n.joint)continue;let i=n.isDynamic,a=r.isDynamic;if(!i&&!a)continue;let o=r.rot,s=gd(md(hd(o),n.rot)),c=n.currentJointProps,l=gd({x:s.x,y:0,z:0,w:s.w});Math.abs(s.x)<1e-9&&Math.abs(s.w)<1e-9&&(l=fd());let u=Fd(2*Math.atan2(l.x,l.w)/Ku),d=wd(md(s,hd(l))),f=d.y/Ku,p=d.z/Ku,m=c.xMid-c.xRange/2,h=c.xMid+c.xRange/2,g=c.xRange>=360?0:m===0&&h===0?u:Id(u,m,h),_=c.yRange>=360?0:c.yRange/2<=0?f:Id(f,-c.yRange/2,c.yRange/2),v=c.zRange>=360?0:c.zRange/2<=0?p:Id(p,-c.zRange/2,c.zRange/2),y=i?n.body.effectiveWorldInvInertia().elements:null,b=a?r.body.effectiveWorldInvInertia().elements:null,x=()=>{let e=n.angularVelocity,t=r.angularVelocity;return{x:e.x-t.x,y:e.y-t.y,z:e.z-t.z}},S=(e,t)=>{i&&n.body.applyTorqueImpulse({x:e.x*t,y:e.y*t,z:e.z*t},!0),a&&r.body.applyTorqueImpulse({x:-e.x*t,y:-e.y*t,z:-e.z*t},!0)},C=e=>{let t=(y?Pd(y,e):0)+(b?Pd(b,e):0);return t>1e-9?1/t:0},w=c.springiness>=.1?c.springiness*t.limitSpringScale:0,T=(n,r)=>{if(r===0)return;let i=vd(o,n),a=C(i);if(a===0)return;let s=r*Ku,c=Zu(x(),i);if(w>0){let t=w,n=.5*t,r=(a*c-e*t*s)/(a+e*n+e*e*t);S(i,a*(r-c))}else{let n=-Math.sign(s)*Math.min(t.hardLimitErp*Math.abs(s)/e,t.hardLimitMaxSpeed);(s>0&&c>n||s<0&&c<n)&&S(i,a*(n-c))}};if(T({x:1,y:0,z:0},g),T({x:0,y:1,z:0},_),T({x:0,y:0,z:1},v),c.stiffness>0){let n=vd(o,wd(s)),r=Qu(n);if(r>1e-6){let i=X(n,1/r),a=C(i);if(a>0){let n=c.stiffness*t.driveScale,o=Zu(x(),i);S(i,a*((a*o-e*n*r)/(a+e*e*n)-o))}}}}}postStep(){let e=this.tuning.ragdoll.maxAngularVelocity;for(let t of this.parts){if(!t.isDynamic)continue;let n=t.angularVelocity,r=Qu(n);r>e&&(t.angularVelocity=X(n,e/r))}}destroy(){if(this.destroyed)return;this.destroyed=!0;let e=this.physics.world;for(let e of this.parts)this.physics.ignoredPairs.forEach(t=>{let[n,r]=t.split(`:`).map(Number);(n===e.collider.handle||r===e.collider.handle)&&this.physics.ignoredPairs.delete(t)});for(let t=this.parts.length-1;t>=0;t--)e.removeRigidBody(this.parts[t].body)}},Rd={NotDead:0,Crack:1,Stretch:2,HitByCar:3,Burned:4,MenuSwap:5,CaughtPlayer:6,ReachedCheckpoint:7,Ice:8,ActivityFail:9},zd=[`NotDead`,`Crack`,`Stretch`,`HitByCar`,`Burned`,`MenuSwap`,`CaughtPlayer`,`ReachedCheckpoint`,`Ice`,`ActivityFail`],Bd=e=>Math.sin(e*Math.PI/2);function Vd(e,t,n){return t+(n-t)*e.nextDouble()}function Hd(e){let t=2*e.nextDouble()-1,n=2*Math.PI*e.nextDouble(),r=Math.sqrt(Math.max(0,1-t*t));return{x:r*Math.cos(n),y:r*Math.sin(n),z:t}}var Ud=class{env;ragdoll;movement;bodySlice;feet=[];_currentFootIndex=0;hasLiftedCurrentFoot=!1;hasGivenUpLiftingCurrentFoot=!1;slidOverCrack=!1;startedLiftingCurrentFootAtFixedFrame=-1;hasStartedStepping=!1;hasHasInputDown=!1;needsToLetGoBeforeAllowingInput=!1;backFootDistanceWhenPickedUp=0;fixedFrameCount=0;startedSteppingAtUnscaledTime=-1;startedSteppingOnFixedFrame=0;deathType=Rd.NotDead;unscaledTimeOfDeath=0;fixedFrameOfDeath=0;footThatCausedDeath=null;killedByCrack=null;wasHitByCarAtPoint=null;lastCrackSteppedOver=null;accelerateForNextNumberOfFrames=0;dampenAllVelocitiesForNextNumberOfFrames=0;currentSpeedMultiplier=1;legStrength=1;totalLegLength=0;averageLegLength=1;groinOffset=qu();pantingTimer=100;breathingTimer=0;currentHeadForwardsOffset=fd();currentDistanceReached=-1;lastRaw=!1;stepsTaken=0;lastValid=new Map;constructor(e,t){this.env=e,this.ragdoll=t,this.movement=e.tuning.movement,this.bodySlice=e.tuning.bodySlice,this.sliceCreated()}sliceCreated(){let e=this.env.rng;this.groinOffset=qu(),this.breathingTimer=e.nextDouble()*100;let t=0;for(let e of this.ragdoll.parts)e.isFoot?(this.ragdoll.setKinematic(e,!0),this.feet.push(new kd(this,e))):e.name.startsWith(`Thigh`)&&(this.groinOffset=Yu(this.groinOffset,e.anchor1),t++);t&&(this.groinOffset=X(this.groinOffset,1/t));let n=this.groinPos;this.totalLegLength=0;for(let e of this.feet)this.totalLegLength+=Qu(Xu(n,e.anklePos));this.averageLegLength=this.totalLegLength/this.feet.length;let r=this.env.tuning.character.spawnKick;this.pelvis.body.applyImpulse({x:0,y:0,z:-r},!0)}get pelvis(){return this.ragdoll.pelvis}get ground(){return this.env.ground}get time(){return this.env.time()}get baseRotation(){return this.ragdoll.baseRotation}get basePosition(){return this.ragdoll.basePosition}get fwd(){return vd(this.baseRotation,ad)}get groinPos(){return this.pelvis.transformPoint(this.groinOffset)}get currentFoot(){return this.feet[this._currentFootIndex%2]}get nextFoot(){return this.feet[(this._currentFootIndex+1)%2]}get hasFallenOver(){return this.deathType!==Rd.NotDead}get hasStartedSteppingOrDead(){return this.hasStartedStepping||this.hasFallenOver}get unscaledTimeSinceDeath(){return this.hasFallenOver?this.env.unscaledTime()-this.unscaledTimeOfDeath:-1}get differenceBetweenSoles(){return Zu(Xu(this.currentFoot.solePos,this.nextFoot.solePos),this.fwd)}get isFootInTheAir(){return this.feet.some(e=>!e.isAttachedToGround)}get hasStoppedLiftingCurrentFoot(){return this.hasLiftedCurrentFoot&&(this.currentFoot.isAttachedToGround||this.currentFoot.needsToTouchGround)}get inFrontFoot(){let e=this.fwd;return Zu(this.feet[1].tippyToePos,e)>Zu(this.feet[0].tippyToePos,e)?this.feet[1]:this.feet[0]}get backFoot(){let e=this.fwd;return Zu(this.feet[1].tippyToePos,e)<Zu(this.feet[0].tippyToePos,e)?this.feet[1]:this.feet[0]}get fixedFramesSinceCurrentFootWasLifted(){return this.hasLiftedCurrentFoot?this.fixedFrameCount-this.startedLiftingCurrentFootAtFixedFrame:-1}get averageFootZ(){return this.averageFootPos.z}get averageFootPos(){return this.hasFallenOver?this.pelvis.pos:X(Yu(this.feet[0].base,this.feet[1].base),.5)}get endangeredFoot(){return this.feet.find(e=>e.isLikelyToLandOnCrack&&!e.isAttachedToGround)??this.inFrontFoot}hasStretchedToFar(e){let t=this.movement.fullySpreadLength;return this.hasLiftedCurrentFoot&&!this.hasGivenUpLiftingCurrentFoot&&this.differenceBetweenSoles>=(t-.001)*this.averageLegLength}get canDropFoot(){let e=this.currentFoot;return Zu(Xu(e.CalculateLanding().solePos,e.solePosWhenLastTouchingGround),this.fwd)>1.5*e.footLength||this.hasStretchedToFar(!1)}predictLanding(){return!this.hasLiftedCurrentFoot||this.currentFoot.isAttachedToGround||this.hasFallenOver?null:this.currentFoot.CalculateLanding()}giveUpLiftingCurrentFoot(){this.currentFoot.isAttachedToGround||(this.currentFoot.needsToTouchGround=!0)}resetCurrentStep(){this.slidOverCrack=!1,this.hasLiftedCurrentFoot=!1,this.hasGivenUpLiftingCurrentFoot=!1,this.startedLiftingCurrentFootAtFixedFrame=-1}startStepping(){if(!this.hasStartedStepping){for(let e of this.ragdoll.parts)e.isFoot||this.ragdoll.setKinematic(e,!1);this.startedSteppingAtUnscaledTime=this.env.unscaledTime(),this.startedSteppingOnFixedFrame=this.fixedFrameCount,this.nextFoot.isAttachedToGround||(this.nextFoot.needsToTouchGround=!0),this.hasStartedStepping=!0}}recordFrame(e){}recordFootStep(){}recordEvent(e,t){}restartRecording(){}fixedUpdate(){this.fixedFrameCount++;let e=!1;for(let t of this.ragdoll.parts){let n=t.pos;nd(n)?this.lastValid.set(t,n):e=!0}if(e){let e=[...this.lastValid.values()],t=X(e.reduce((e,t)=>Yu(e,t),qu()),1/Math.max(1,e.length)),n=Math.min(...e.map(e=>e.y));this.rebaseWholeBody({x:t.x,y:Math.max(n,.0625),z:t.z})}else for(let e of this.ragdoll.parts){if(!e.isDynamic)continue;let t=e.velocity;Qu(t)>250&&(e.velocity=td(t,250),this.dampenAllVelocitiesForNextNumberOfFrames=15)}if(this.dampenAllVelocitiesForNextNumberOfFrames>0){for(let e of this.ragdoll.parts)e.isDynamic&&(e.velocity=X(e.velocity,.9),e.angularVelocity=X(e.angularVelocity,.9));this.dampenAllVelocitiesForNextNumberOfFrames--}this.hasFallenOver||this.updateAlive(),!this.feet[0].isAttachedToGround&&this.differenceBetweenSoles>.7&&!this.hasFallenOver&&(this.pantingTimer=0),this.pantingTimer+=Td,this.hasFallenOver&&this.updateDead()}rebaseWholeBody(e){this.ragdoll.basePosition={...e};for(let t of this.ragdoll.parts){let n=Yu(e,t.initialPosition);t.body.setTranslation(n,!0),t.body.setRotation(fd(),!0),t.isDynamic&&(t.velocity=qu(),t.angularVelocity=qu())}for(let e of this.feet)e.base=e.part.pos,e.rot=fd()}updateAlive(){let e=this.movement,t=this.fwd,n=this.env,r=n.inputHeld();r||(this.needsToLetGoBeforeAllowingInput=!1);let i=r&&!this.needsToLetGoBeforeAllowingInput&&n.isInGameplay();i&&(n.unscaledTimeSinceReset()<n.tuning.game.carryOverPressWindow||this.hasStretchedToFar(!1)&&this.currentFoot!==this.backFoot?(i=!1,this.needsToLetGoBeforeAllowingInput=!0):this.hasStartedStepping||this.startStepping()),this.lastRaw=i,this.hasStartedStepping&&this.recordFrame(i);let a=i;if(a&&(this.hasHasInputDown=!0),this.hasStretchedToFar(!1)&&this.currentFoot!==this.backFoot&&(a=!1),this.hasLiftedCurrentFoot&&!this.hasGivenUpLiftingCurrentFoot&&(this.slidOverCrack||(!i||this.hasStretchedToFar(!1)&&this.currentFoot!==this.backFoot)&&(this.hasGivenUpLiftingCurrentFoot=!0),this.hasGivenUpLiftingCurrentFoot?this.canDropFoot&&this.giveUpLiftingCurrentFoot():this.currentFoot.needsToTouchGround||Zu(Xu(this.currentFoot.CalculateLanding().solePos,this.nextFoot.solePos),t)>this.averageLegLength*e.maxGroundedDistanceBetweenFeet&&this.giveUpLiftingCurrentFoot(),a=!1),this.hasHasInputDown){if(a&&!this.isFootInTheAir){if(this.hasStoppedLiftingCurrentFoot&&(this._currentFootIndex++,this.resetCurrentStep()),!this.hasLiftedCurrentFoot){let e=this.currentFoot,r=ld(0,-.5,Zu(Xu(e.base,this.groinPos),t));if(e.IsStuckToGround&&!e.CanUnstick(cd(.2,.1,r))){let t=Cd(fd(),yd(-70,{x:-1,y:0,z:0}),r);e.ChangeRotationButKeepAnchoredToGround(Cd(e.defaultRotation,t,ld(1,cd(.5,.8,r),e.StuckPercentage())))}else this.recordFootStep(),this.hasLiftedCurrentFoot=!0,e.isAttachedToGround=!1,e.needsToTouchGround=!1,this.backFootDistanceWhenPickedUp=this.differenceBetweenSoles,this.startedLiftingCurrentFootAtFixedFrame=this.fixedFrameCount,n.rules.startedLiftingNextFoot(this.lastCrackSteppedOver),this.restartRecording()}}else this.currentFoot.IsStuckToGround&&this.currentFoot.ResetStuckTime(33)}n.rules.checkComboTimeout(this),this.hasLiftedCurrentFoot&&!this.hasStoppedLiftingCurrentFoot&&this.hasGivenUpLiftingCurrentFoot&&this.canDropFoot&&this.giveUpLiftingCurrentFoot();let o=this.currentFoot;if(!this.hasHasInputDown&&!this.nextFoot.isAttachedToGround&&(this.nextFoot.needsToTouchGround=!0),!o.isAttachedToGround&&!o.needsToTouchGround){let t=this.differenceBetweenSoles-this.backFootDistanceWhenPickedUp,n=cd(0,e.stepTopHeight,Bd(ld(0,.5,t)));n=Math.max(n,o.CalculateStartingFootHeight()),o.MoveForwards(e.footSpeed,e.forwardAcceleration),o.MoveToHeight(n)}else this.hasHasInputDown&&!this.hasGivenUpLiftingCurrentFoot&&o.isAttachedToGround&&!o.IsStuckToGround&&o.MoveForwards(e.groundedFootSpeed,e.groundedForwardAcceleration);this.feet[1].PreUpdateFoot(),this.feet[0].PreUpdateFoot(),this.feet[1].UpdateFoot(),this.feet[0].UpdateFoot(),!this.hasFallenOver&&this.hasStretchedToFar(!1)&&this.hasStretchedToFar(!0)&&this.fallOver(Rd.Stretch,this.inFrontFoot),this.hasFallenOver||this.upperBody(),this.legStrength=this.isFootInTheAir?Math.min(this.legStrength+4*Td,1):ud(this.legStrength,.5+.5*ld(1.5,.5,Math.abs(this.differenceBetweenSoles)),Td)}faceForward(e,t,n){if(!e.isDynamic)return;let r=md(n,md(this.baseRotation,e.initialRotation)),i=wd(md(hd(e.rot),r));e.addRelativeTorqueAcceleration(X(i,t/Ku),Td)}upperBody(){let e=this.movement,t=this.bodySlice,n=this.fwd,r=Td,i=vd(this.baseRotation,rd),a=vd(this.baseRotation,id),o=t.torsoZSway;this.breathingTimer+=r;let s=this.breathingTimer,c=.8**Math.sin(1.5*s)*this.legStrength*t.pelvisPositionFixScale,l=.75**Math.sin(1.8*s+.5)*Ku*this.legStrength*t.pelvisRotationFixScale,u=.66**Math.sin(3.2*s+.6),d=t.torsoFriction,f=this.feet[0],p=this.feet[1],m=this.inFrontFoot,h=this.backFoot,g=Math.abs(Zu(Xu(m.anklePos,h.anklePos),n)),_=this.averageLegLength,v=_*_-g/2*(g/2),y=v>0?Math.sqrt(v):0,b=this.pelvis,x=Yu(b.initialPosition,vd(b.initialRotation,this.groinOffset)),S={x:(f.base.x+p.base.x)/2,y:y+this.basePosition.y,z:(h.anklePos.z+m.anklePos.z)/2};this.hasStartedStepping||(S.y=x.y+this.basePosition.y);let C=this.groinPos;b.addAccelerationAtPosition(X(Xu(S,C),e.pelvicForce*c),C,r),b.isDynamic&&(b.velocity=X(b.velocity,d));let w=bd(0,0,o*(Zu(p.base,n)-Zu(f.base,n)));w=md(bd(t.defaultTorsoXRotation,0,0),w);let T=this.ragdoll.belly;if(T){let t=Yu(S,vd(md(this.baseRotation,w),Xu(T.initialCenterOfMass,x))),n=T.com;T.addAccelerationAtPosition(X(Xu(t,n),e.pelvicForce*c),n,r),T.isDynamic&&(T.velocity=X(T.velocity,d))}this.faceForward(b,l*e.pelvicRotationFixForce,w),T&&this.faceForward(T,l*e.pelvicRotationFixForce,w);let E=this.ragdoll.forearmL,D=this.ragdoll.forearmR;if(this.hasStartedStepping&&this.hasLiftedCurrentFoot&&!this.hasStoppedLiftingCurrentFoot&&E&&D){let e=ld(5,20,this.fixedFramesSinceCurrentFootWasLifted);if(e>0){let o=this._currentFootIndex%2==0,s=o?D:E,c=o?E:D,l=X(Yu(Yu(X(n,-t.handSwayBackwardPush),X(i,t.handSwayOutwardPush*dd(s.initialPosition.x))),X(a,t.handSwayUpwardPush)),e),u=X(Yu(Yu(X(n,t.handSwayForwardPush),X(i,t.handSwayOutwardPush*dd(c.initialPosition.x))),X(a,t.handSwayUpwardPush)),e);s.addAccelerationAtPosition(l,s.handPos(),r),c.addAccelerationAtPosition(u,c.handPos(),r)}}let O=this.ragdoll.head;O&&this.faceForward(O,u*this.legStrength*10*this.env.tuning.headRotationFixScale,this.currentHeadForwardsOffset)}fallOver(e,t){if(this.hasFallenOver||this.movement.isInvincible)return!1;t??=this.currentFoot,this.env.rules.loseCombo(this),this.recordEvent(100+e,t.solePos.z),this.footThatCausedDeath=t,this.deathType=e,this.accelerateForNextNumberOfFrames=50,this.unscaledTimeOfDeath=this.env.unscaledTime(),this.fixedFrameOfDeath=this.fixedFrameCount;let n=this.env.rng,r=this.ragdoll;for(let i of r.parts){i.def.chanceOfDetatchingOnDeath>0&&n.nextDouble()<i.def.chanceOfDetatchingOnDeath&&r.detach(i);let a=e===Rd.Stretch&&i===t.part;(i.isKinematic||i.isPelvis)&&!a&&r.setKinematic(i,!1,!0),i.name.toLowerCase().includes(`arm`)&&(i.massScale=.5)}if(r.belly){let e=Hd(n),i=ed(Yu(X(e,-.5),X(Hd(n),.5)));r.forearmL&&(r.forearmL.aDAD=X(e,Vd(n,5,20))),r.forearmR&&(r.forearmR.aDAD=X(i,Vd(n,4,50)));let a=t.otherFoot,o=Hd(n);a.part.aDAD=X({x:o.x,y:Math.abs(o.y),z:o.z},Vd(n,4,50))}e===Rd.Stretch&&(t.part.massScale=5);for(let e of this.feet)e.isAttachedToGround=!1,e.rotationAtDeath={...e.rot};return r.setLayer(Uu.PlayerCorpse),this.env.onDeath?.(e,t),!0}footTouchedCrack(e,t){t.crackType===Mu.WEB?e.IsStuckToGround||e.StickToGround(t,33):this.fallOver(Rd.Crack,e)&&(this.ragdoll.setKinematic(e.part,!0),e.part.massScale=30,this.killedByCrack=t,t.stepCount=-1)}hitByCar(e,t){let n=!1;if(t&&this.fallOver(Rd.HitByCar,null)&&(this.wasHitByCarAtPoint={...e},n=!0),this.hasFallenOver){for(let e of this.ragdoll.parts)e.isKinematic&&this.ragdoll.setKinematic(e,!1,!0);this.accelerateForNextNumberOfFrames=0}return n}isDoingDeathSlowdown(){return this.hasFallenOver&&this.unscaledTimeSinceDeath<this.env.tuning.game.deathSlowdownLength}updateDead(){let e=this.footThatCausedDeath;if(!e)return;let t=this.ragdoll,n=Td;if(e.part.isKinematic){let r=e.defaultRotation;this.deathType===Rd.Stretch&&(r=md(md(r,yd(-85,rd)),yd(dd(e.base.x)*20,ad)),e.base=Yu(e.base,X(e.vel,n)),e.vel=X(e.vel,.92),e.vel.y-=50*n),e.ChangeRotationButKeepAnchoredToGround(Cd(e.rotationAtDeath,r,ld(0,.8,this.unscaledTimeSinceDeath))),e.applyPose(),this.accelerateForNextNumberOfFrames<35&&t.setKinematic(e.part,!1,!0)}if(this.isDoingDeathSlowdown()||(t.setKinematic(e.part,!1,!0),e.part.massScale=1,this.killedByCrack?.crackType===Mu.EXPLOSIVE&&(this.accelerateForNextNumberOfFrames=0)),this.accelerateForNextNumberOfFrames>0){let r=--this.accelerateForNextNumberOfFrames/50,i=1.1**r,a=i**.4;e.part.massScale>2&&e.part.isDynamic&&(e.part.velocity=X(e.part.velocity,.8),e.part.angularVelocity=X(e.part.angularVelocity,.8));for(let e of t.parts)if(Qu(e.aDAD)>0&&e.addAccelerationAtPosition(X(e.aDAD,r),e.handPos(),n),e.def.canBeAcceleratedAfterDeath&&this.isStillConnectedToRoot(e)&&!e.isKinematic){let t=e.velocity,r=X(t,i),o=r.z<=0?r.z:a*t.z,s=r.y>=0?e.com.y>1.5?t.y*.95:r.y:a*t.y;e.velocity={x:r.x,y:s,z:o},e.angularVelocity=X(e.angularVelocity,i),e.addForce(X(Hd(this.env.rng),60),n)}}}isStillConnectedToRoot(e){for(let t=e;t&&t.parent;t=t.parent)if(!t.joint)return!1;return!0}updateBodyProperties(){let e=this.ragdoll;if(this.hasFallenOver){let t=this.unscaledTimeSinceDeath>.125;for(let n of e.parts)e.applyBodyProperties(n,t,!0)}else for(let t of e.parts)e.setKinematic(t,t.isFoot)}steppedOn(e,t){if(e.crackType===Mu.FILLED){let n=e.prev,r=e.snowType===Nu.NONE||e.snowType===Nu.LEFT!==t.IsLeft,i=!n||n.snowType===Nu.NONE||n.snowType===Nu.LEFT!==t.IsLeft;if(r&&i)return}this.footTouchedCrack(t,e),e.steppedBetweenMeAndPrevious=!0,e.crackType===Mu.EXPLOSIVE&&this.env.specialPavers?.explode(e)}steppedInBetween(e,t){let n=this.env.rules.steppedInBetween(this,e);this.stepsTaken++,n&&this.env.onCheckpointCrossed?.(e,t),this.env.onStep?.(e,t),this.env.specialPavers?.collapse(e)}footSound(e,t,n){this.env.onFootSound?.(e,t,n)}steppedOff(e,t){}},Wd=1/120,Gd=W,Kd=Ot,qd=new Gd(0,1,0),Jd=new Kd,Yd=e=>e<0?0:e>1?1:e,Xd=(e,t,n)=>e===t?0:Yd((n-e)/(t-e)),Zd=(e,t,n)=>e+(t-e)*Yd(n),Qd=e=>new Gd(e.x,e.y,e.z);function $d(e,t=qd){let n=e.clone().normalize();if(n.lengthSq()<1e-12)return new Kd;let r=new Gd().crossVectors(t,n);r.lengthSq()<1e-12&&r.set(1,0,0),r.normalize();let i=new Gd().crossVectors(n,r);return new Kd().setFromRotationMatrix(new Zt().makeBasis(r,i,n))}function ef(e,t,n){let r=e.clone().invert().multiply(t).normalize();r.w<0&&r.set(-r.x,-r.y,-r.z,-r.w);let i=Math.sqrt(Math.max(0,1-r.w*r.w));if(i<1e-6)return n.set(0,0,0);let a=2*Math.acos(Math.min(1,r.w))*180/Math.PI;return n.set(r.x/i,r.y/i,r.z/i).multiplyScalar(a)}var tf=e=>Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.z),nf=e=>Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.z)&&Number.isFinite(e.w)&&e.lengthSq()>1e-8,rf=class{drag=.9;acceleration=1;setToFinalForNextNFrames=10;frameProgress=0;pos=new Gd;rot=new Kd;fov=50;pP=new Gd;cP=new Gd;pR=new Kd;cR=new Kd;pF=50;cF=50;vP=new Gd;vA=new Gd;vF=0;lastP=new Gd;lastR=new Kd;tmp=new Gd;tmpQ=new Kd;target;subSteps=0;constructor(e,t=50){this.target=e,this.fov=this.pF=this.cF=t}get currPosition(){return this.cP}instantUpdate(){this.frameProgress=1,this.setToFinalForNextNFrames+=1,this.update(0,1)}update(e,t){this.frameProgress+=Math.min(Math.max(e,0),.0625)/Wd*t;let n=this.tmp.copy(this.pos).sub(this.lastP),r=this.tmpQ.copy(this.lastR).invert().multiply(this.rot);for(this.cP.add(n),this.pP.add(n),this.cR.multiply(r),this.pR.multiply(r);this.frameProgress>=1;){this.pP.copy(this.cP),this.pR.copy(this.cR),this.pF=this.cF,--this.frameProgress,this.subSteps++;let e=this.target(this),t=e.instant;this.setToFinalForNextNFrames>0&&(this.setToFinalForNextNFrames--,t=!0);let n=tf(e.pos)?e.pos:this.pP,r=nf(e.rot)?e.rot:this.pR;if(!nf(this.pR)||!tf(this.pP)||t){this.pP.copy(n),this.cP.copy(n),this.pR.copy(r),this.cR.copy(r),this.pF=this.cF=e.fov,this.vP.set(0,0,0),this.vA.set(0,0,0),this.vF=0,this.frameProgress=0;break}let i=this.acceleration*.5/120,a=Math.sqrt(Math.max(0,this.drag));this.vP.addScaledVector(this.tmp.copy(n).sub(this.cP),i).multiplyScalar(a),this.cP.add(this.vP),this.vA.addScaledVector(ef(this.cR,r,this.tmp),i).multiplyScalar(a);let o=this.vA.length();o>0&&this.cR.multiply(this.tmpQ.setFromAxisAngle(this.tmp.copy(this.vA).divideScalar(o),o*Math.PI/180)).normalize(),this.vF=(this.vF+(e.fov-this.cF)*i)*a,this.cF+=this.vF}this.pos.lerpVectors(this.pP,this.cP,this.frameProgress),this.rot.slerpQuaternions(this.pR,this.cR,this.frameProgress),this.fov=this.pF+(this.cF-this.pF)*this.frameProgress,this.lastP.copy(this.pos),this.lastR.copy(this.rot)}};function af(e,t){return t<=1?2*Math.atan(Math.tan(e*Math.PI/360)/t)*180/Math.PI:e}var of=class{spring;env;mainMenuCameraZOffset=0;debug={mode:`gameplay`,focus:null,targetFov:50,drag:0,acceleration:0};shakers=[];unshaken=new Gd;shaken=!1;rotOffset0;constructor(e){this.env=e;let t=e.tuning.camera,n=t.gameplayRotationOffset;this.rotOffset0=new Kd().setFromEuler(new cn(n.x*Math.PI/180,n.y*Math.PI/180,n.z*Math.PI/180,`YXZ`)),this.mainMenuCameraZOffset=this.desiredMainMenuCameraZOffset(),this.spring=new rf(()=>this.desired(),t.defaultFieldOfView)}get T(){return this.env.tuning.camera}clamped(e,t){return e[Math.max(0,Math.min(e.length-1,t))]}camPos(e){return Qd(this.clamped(this.T.gameplayCameraPositions,e)).multiplyScalar(this.T.cameraDistanceScale)}camOffset(e){return Qd(this.clamped(this.T.gameplayCameraOffsets,e))}gameplayCameraPosition(e,t){return this.camPos(t).add(e)}gameplayCameraLookat(e,t){return this.camOffset(t).add(e).add(new Gd(0,1,this.env.aspect()>1?.25:0))}cameraIndexForChunk(e){let t=this.env.world.cfg.environments,n=t.length?t[(Math.trunc(e/10)%t.length+t.length)%t.length]:null,r=Math.trunc(e/5),i=(e,t)=>(e%t+t)%t;return n&&n.possibleCameras.length?n.possibleCameras[i(r,n.possibleCameras.length)]:i(r,this.T.gameplayCameraOffsets.length)}presetBlend(e){let t=this.env.forcedPreset;if(t!=null)return[t,t,0];if(!this.T.useCheckpointCameras){let t=this.env.spawn().z+.5;return[0,1,(e.z-t)/Math.max(1e-6,this.T.playerCameraTransitionDist)]}let n=this.env.world.chunkLength,r=this.env.world.distanceForZ(e.z),i=Math.trunc(r/n),a=Xd(.2,.95,(e.z%n+n)%n/n);return[this.cameraIndexForChunk(i),this.cameraIndexForChunk(i+1),a]}currentGameplayCameraPosition(e){let[t,n,r]=this.presetBlend(e);return this.gameplayCameraPosition(e,t).lerp(this.gameplayCameraPosition(e,n),Yd(r))}currentGameplayCameraLookat(e){let[t,n,r]=this.presetBlend(e);return this.gameplayCameraLookat(e,t).lerp(this.gameplayCameraLookat(e,n),Yd(r))}desiredMainMenuCameraZOffset(){let e=this.env.biped(),t=e?(e.ragdoll.belly??e.pelvis).pos.z:this.env.spawn().z;return Math.max(this.env.spawn().z,t-this.T.preGameCameraLookat.z)}mainMenuCameraPosition(){return Qd(this.T.preGameCameraPosition).add(new Gd(0,0,this.mainMenuCameraZOffset))}mainMenuCameraLookat(){return Qd(this.T.preGameCameraLookat).add(new Gd(0,0,this.mainMenuCameraZOffset))}desired(){let e=this.T,t=e.deathCamera,n=this.spring,r=this.env.biped(),i=e.defaultFieldOfView,a=new Kd,o=null,s=0,c=`gameplay`,l=this.env.spawn(),u=Qd(r?r.averageFootPos:l);u.z=Math.max(u.z,l.z-.5);let d=this.currentGameplayCameraPosition(u),f=this.currentGameplayCameraLookat(u),p=!!r&&r.hasFallenOver,m=p?r.unscaledTimeSinceDeath:-1;if(p&&m>t.zoomOutAtTime&&(d=this.mainMenuCameraPosition(),f=this.mainMenuCameraLookat()),n.drag=e.cameraDrag,n.acceleration=e.cameraAcceleration,!r||p){if(!r||m>t.zoomOutAtTime)c=`zoomOut`,n.drag=t.dragWhenZoomingOut,n.acceleration=t.accelerationWhenZoomingOut,d=this.mainMenuCameraPosition(),f=this.mainMenuCameraLookat();else{a=this.rotOffset0.clone();let e=r.deathType;if((e===Rd.Crack||e===Rd.Stretch||e===Rd.Ice)&&r.footThatCausedDeath&&(c=`zoomIn`,i=t.fieldOfView,o=Qd(r.footThatCausedDeath.part.pos),o.y=t.focusHeight,n.drag=t.dragWhenZoomedIn,n.acceleration=t.accelerationWhenZoomedIn,s=t.focusWeight),e===Rd.HitByCar&&r.wasHitByCarAtPoint&&(c=`zoomIn`,o=Qd(r.wasHitByCarAtPoint),this.env.tuning.cars.hitByCarZoom&&(i=t.fieldOfView),n.drag=t.dragWhenZoomedIn,n.acceleration=t.accelerationWhenZoomedIn,s=t.focusWeight),o&&e!==Rd.Stretch){let e=Xd(t.shakeDoneAtTime,0,m);if(e>0){let n=sf();o.x+=n.x*t.shakeSize.x*e,o.y+=n.y*t.shakeSize.y*e,o.z+=n.z*t.shakeSize.z*e}}}}else{let e=r.hasStartedStepping?.5:.1;a=this.rotOffset0.clone();let o=r.ragdoll.head;if(o){let t=o.rot,n=new Kd(t.x,t.y,t.z,t.w);a.multiply(new Kd().slerpQuaternions(Jd,n,e*.02));let i=o.pos,s=r.averageFootPos,c=new Gd(i.x-(o.initialPosition.x+s.x),i.y-(o.initialPosition.y+s.y),i.z-(o.initialPosition.z+s.z));c.clampLength(0,.5),f.addScaledVector(c,e*.5)}r.hasStretchedToFar(!0)&&(a.slerp(Jd,.375),f.lerp(Qd(r.endangeredFoot.center),.375),i=Zd(i,t.fieldOfView,.25)),n.drag**=1-.66*e,n.acceleration*=.65**e}let h=$d(f.clone().sub(d)).multiply(a);if(o&&s>0){let e=new Gd(0,0,1).applyQuaternion(h);if(Math.abs(e.x)>1e-6){let t=(o.x-d.x)/e.x;if(t>0){let n=d.clone().addScaledVector(e,t);d.addScaledVector(o.clone().sub(n),s)}}}let g=d.distanceTo(n.currPosition)>e.teleportDistance,_=this.debug;return _.mode=c,_.focus=o?{x:o.x,y:o.y,z:o.z}:null,_.targetFov=i,_.drag=n.drag,_.acceleration=n.acceleration,{pos:d,rot:h,fov:i,instant:g}}update(e,t=1){let n=this.desiredMainMenuCameraZOffset()-this.mainMenuCameraZOffset;Math.abs(n)>1e-4&&(this.mainMenuCameraZOffset+=n*(1-.9**(e*60))),this.spring.update(e,t)}instantUpdate(){this.mainMenuCameraZOffset=this.desiredMainMenuCameraZOffset(),this.spring.instantUpdate()}addShake(e,t,n,r=0){let i=this.env.now()+r;this.shakers.push({start:i,end:i+n,r0:e,r1:t})}applyTo(e){let t=this.spring,n=new Gd(0,0,1).applyQuaternion(t.rot),r=new Gd(0,1,0).applyQuaternion(t.rot);e.position.set(-t.pos.x,t.pos.y,t.pos.z),e.up.set(-r.x,r.y,r.z),e.lookAt(-t.pos.x-n.x,t.pos.y+n.y,t.pos.z+n.z);let i=af(t.fov*this.T.tabletFovScale,e.aspect);Math.abs(e.fov-i)>1e-6&&(e.fov=i,e.updateProjectionMatrix()),e.updateMatrixWorld();let a=this.env.now(),o=0,s=0;for(let e=this.shakers.length-1;e>=0;e--){let t=this.shakers[e];if(a>t.end){this.shakers.splice(e,1);continue}let n=t.r0+(t.r1-t.r0)*Xd(t.start,t.end,a),[r,i]=cf();o+=r*n,s+=i*n}if(this.unshaken.copy(e.position),this.shaken=o!==0||s!==0,this.shaken){let t=e.matrixWorld.elements;e.position.x+=t[0]*o+t[4]*s,e.position.y+=t[1]*o+t[5]*s,e.position.z+=t[2]*o+t[6]*s,e.updateMatrixWorld()}}restore(e){this.shaken&&=(e.position.copy(this.unshaken),e.updateMatrixWorld(),!1)}};function sf(){let e=Math.random()*2-1,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e*e);return new Gd(n*Math.cos(t),n*Math.sin(t),e)}function cf(){let e=Math.random()*Math.PI*2,t=Math.sqrt(Math.random());return[t*Math.cos(e),t*Math.sin(e)]}function lf(e,t=1){let n=parseInt(e.slice(1),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255,t]}var uf=(e,t,n)=>e.map((e,r)=>e+(t[r]-e)*n),df=(e,t)=>[e[0]*t,e[1]*t,e[2]*t,e[3]],ff=(e,t,n)=>e+(t-e)*n,pf=e=>e<0?0:e>1?1:e,mf=(e,t,n)=>e===t?0:pf((n-e)/(t-e));function hf(e,t,n){let r=Math.hypot(...e),i=Math.hypot(...t);if(r<1e-9||i<1e-9)return[ff(e[0],t[0],n),ff(e[1],t[1],n),ff(e[2],t[2],n)];let a=new W(...e).divideScalar(r),o=new W(...t).divideScalar(i),s=Dt.clamp(a.dot(o),-1,1),c=Math.acos(s),l;if(c<1e-5)l=a.clone().lerp(o,n);else{let e=Math.sin(c);l=a.clone().multiplyScalar(Math.sin((1-n)*c)/e).addScaledVector(o,Math.sin(n*c)/e)}return l.normalize().multiplyScalar(ff(r,i,n)),[l.x,l.y,l.z]}function gf(e,t,n){if(n<=0)return structuredClone(e);if(n>=1)return structuredClone(t);let r={};for(let i of Object.keys(e)){let a=e[i],o=t[i];r[i]=typeof a==`number`?ff(a,o,n):i===`direction`?hf(a,o,n):a.map((e,t)=>ff(e,o[t],n))}return r}function _f(e){e|=0;let t=e^e>>13;return Math.imul(Math.imul(Math.imul(t,t),60493)+19990303|0,t)+1376312589&2147483647}function vf(e,t){if(t<=e[0].t)return e[0].v;for(let n=1;n<e.length;n++)if(t<=e[n].t){let r=e[n-1],i=e[n];return i.t===r.t?i.v:ff(r.v,i.v,(t-r.t)/(i.t-r.t))}return e[e.length-1].v}var yf=()=>Array(10).fill(0);function bf(e){return{lightColour:lf(`#ffffff`),lightStrength:1,secondaryLightColour:lf(`#000000`),secondaryLightStrength:0,skyColor:lf(`#b0c4de`),equatorColor:lf(`#c0c0b8`),groundColor:lf(`#808070`),ambience:1,backgroundTopGradient:lf(`#4a94dc`),backgroundBottomGradient:lf(`#cfe6f4`),backgroundGroundColor:lf(`#d6e8f2`),fogColor:lf(`#d2e6f2`),fogStartDistance:18,fogEndDistance:42,globalColoring:lf(`#ffffff`),darkReduction:0,shadowStrength:.8,distantShadowness:0,windowReflectiveness:.5,roadHeightOffset:0,direction:[0,0,0],nightLightAmount:0,effect:yf(),...e}}var xf=bf({lightColour:lf(`#fff6e6`),lightStrength:.9,skyColor:lf(`#c9def3`),equatorColor:lf(`#e8e2ea`),groundColor:lf(`#b8a7a0`),ambience:1.05,backgroundTopGradient:lf(`#74bdee`),backgroundBottomGradient:lf(`#d6eff9`),backgroundGroundColor:lf(`#d6eff9`),fogColor:lf(`#d6eef8`),fogStartDistance:20,fogEndDistance:44,shadowStrength:.6}),Sf=bf({lightColour:lf(`#ffc88c`),lightStrength:.95,skyColor:lf(`#a4a6d8`),equatorColor:lf(`#e2b690`),groundColor:lf(`#7a6252`),ambience:.95,backgroundTopGradient:lf(`#5671c2`),backgroundBottomGradient:lf(`#f8bf88`),backgroundGroundColor:lf(`#f4c59c`),fogColor:lf(`#f1c49e`),fogStartDistance:16,fogEndDistance:40,globalColoring:lf(`#fff6ec`),shadowStrength:.8,nightLightAmount:.1}),Cf=bf({lightColour:lf(`#a7b8ff`),lightStrength:.42,skyColor:lf(`#46569a`),equatorColor:lf(`#2e3866`),groundColor:lf(`#1c2036`),ambience:.9,backgroundTopGradient:lf(`#060b22`),backgroundBottomGradient:lf(`#23336a`),backgroundGroundColor:lf(`#1d2850`),fogColor:lf(`#1d2850`),fogStartDistance:12,fogEndDistance:36,globalColoring:lf(`#e4e8ff`),shadowStrength:.6,nightLightAmount:1});function wf(e,t){let n=structuredClone(e),r=e.nightLightAmount>.5;if(t===`rain`){let e=lf(r?`#1a2030`:`#9aa3ad`);n.lightColour=uf(n.lightColour,lf(`#d8e0ea`),.6),n.lightStrength*=.45,n.skyColor=uf(n.skyColor,e,.5),n.equatorColor=uf(n.equatorColor,e,.5),n.backgroundTopGradient=uf(n.backgroundTopGradient,lf(r?`#0b0f1a`:`#6c7682`),.8),n.backgroundBottomGradient=uf(n.backgroundBottomGradient,e,.8),n.backgroundGroundColor=uf(n.backgroundGroundColor,e,.8),n.fogColor=uf(n.fogColor,e,.85),n.fogStartDistance=9,n.fogEndDistance=30,n.globalColoring=uf(n.globalColoring,lf(`#e4e9f0`),.5),n.shadowStrength*=.45,n.nightLightAmount=Math.max(n.nightLightAmount,.35),n.effect[0]=1}else{let e=lf(r?`#2c3654`:`#e2e8ef`);n.lightColour=uf(n.lightColour,lf(`#eef4ff`),.6),n.lightStrength*=.7,n.skyColor=uf(n.skyColor,e,.5),n.groundColor=uf(n.groundColor,df(e,.9),.6),n.backgroundTopGradient=uf(n.backgroundTopGradient,lf(r?`#141b30`:`#a9b8c9`),.75),n.backgroundBottomGradient=uf(n.backgroundBottomGradient,e,.85),n.backgroundGroundColor=uf(n.backgroundGroundColor,e,.85),n.fogColor=uf(n.fogColor,e,.85),n.fogStartDistance=10,n.fogEndDistance=32,n.shadowStrength*=.6,n.effect[1]=1}return n}var Tf={clear:{midday:xf,afternoon:Sf,night:Cf},rain:{midday:wf(xf,`rain`),afternoon:wf(Sf,`rain`),night:wf(Cf,`rain`)},snow:{midday:wf(xf,`snow`),afternoon:wf(Sf,`snow`),night:wf(Cf,`snow`)}};function Ef(e,t,n,r){let i=[e.midday,e.afternoon,e.night,e.midday][(t%4+4)%4],a=structuredClone(i);return a.direction[0]===0&&a.direction[1]===0&&a.direction[2]===0&&(a.shadowStrength*=r,a.direction=n),a}function Df(e,t,n,r){let i=Math.floor(t);return gf(Ef(e,i,n,r),Ef(e,i+1,n,r),t-i)}var Of=`steppy.startedPlayingAt`;function kf(){try{let e=localStorage.getItem(Of);e||(e=new Date().toISOString(),localStorage.setItem(Of,e));let t=Date.parse(e);return Number.isFinite(t)?Math.max(0,(Date.now()-t)/1e3):0}catch{return 0}}var Af={midday:.12,morning:.12,day:.12,afternoon:.42,evening:.42,night:.72},jf=class{tuning;weathers;clock;maxWeatherDistance=0;forcedTod=null;forcedWeather=null;current;info={tod:0,phase:0,slot:0,weather:`clear`,nextWeather:`clear`,blend:0};constructor(e,t){this.tuning=e,this.weathers=e.lighting.weathers.map(e=>({name:e.name,chance:e.chance,...Tf[e.name]??Tf.clear})),this.clock=kf();let n=t.get(`time`);if(n!==null){let e=Number(n);this.forcedTod=n in Af?Af[n]:Number.isFinite(e)?(e%1+1)%1:null}let r=t.get(`weather`);r&&(this.forcedWeather=this.weathers.find(e=>e.name===r)??(r===`clear`?this.weathers[0]:null)),this.current=structuredClone(xf)}getWeather(e){let t=this.weathers;if(e<6)return t[0];let n=0;for(let e of t)n+=e.chance*2e3;if(n<=0)return t[0];let r=(_f(e)%n+n)%n;for(let e of t)if(r-=e.chance*2e3,r<0)return e;return t[0]}update(e){let t=this.tuning.lighting;this.forcedTod===null&&(this.clock+=Math.max(0,e.dt));let n=t.minutesPerDay*60,r=t.minutesPerWeatherChange*60,i=this.clock,a=this.forcedTod??(n<=0?0:i%n/n);if(r<=0&&(i=0,r=1e5),t.metersPerWeatherChange>0){let n=r/t.metersPerWeatherChange,a=(e.cameraZ%1+1)%1*n+e.distance*n;this.maxWeatherDistance<=a&&!e.playerHasDiedThisRound&&(this.maxWeatherDistance=a),i=this.maxWeatherDistance+i}let o=Math.floor(i/r),s=this.forcedWeather??this.getWeather(o),c=this.forcedWeather??this.getWeather(o+1),l=vf(t.timeOfDayCycle,a),u=vf(t.sunDirectionCycle,a),d=vf(t.shadowStrengthCycle,a),f=Mf(u,t.lightZRotation),p=mf(0,t.weatherChangeLength,(i-o*r)/r);return this.current=gf(Df(s,l,f,d),Df(c,l,f,d),p),Object.assign(this.info,{tod:a,phase:l,slot:o,weather:s.name,nextWeather:c.name,blend:p}),this.current}};function Mf(e,t){let n=e*Math.PI/180,r=t*Math.PI/180,i=Math.sin(r),a=-Math.cos(r);return[i,a*Math.cos(n),a*Math.sin(n)]}var Nf=(e,t,n=1)=>e.setRGB(t[0],t[1],t[2],Ie).multiplyScalar(n);function Pf(e,t,n){Nf(t.sun.color,e.lightColour),t.sun.intensity=e.lightStrength*t.sunScale,t.sun.shadow.intensity=pf(e.shadowStrength),Nf(Ql.ambSky.value,e.skyColor,e.ambience),Nf(Ql.ambEquator.value,e.equatorColor,e.ambience),Nf(Ql.ambGround.value,e.groundColor,e.ambience),Ql.globalColoring.value.setRGB(e.globalColoring[0],e.globalColoring[1],e.globalColoring[2],Ie);let r=t.scene.fog;Nf(r.color,e.fogColor),r.near=e.fogStartDistance,r.far=e.fogColor[3]>0?e.fogEndDistance:1e6,Nf(t.skyUniforms.top.value,e.backgroundTopGradient),Nf(t.skyUniforms.bottom.value,e.backgroundBottomGradient),Nf(t.skyUniforms.ground.value,e.backgroundGroundColor);let i=e.direction;n.set(-i[0],i[1],i[2]),n.lengthSq()<1e-9&&n.set(0,-1,0),n.normalize()}function Ff(e){let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`),r=n.createRadialGradient(32,32,0,32,32,32);for(let[t,n]of e)r.addColorStop(t,`rgba(255,255,255,${n})`);n.fillStyle=r,n.fillRect(0,0,64,64);let i=new ia(t);return i.colorSpace=Ie,i}var If=`
  uniform float uSize;
  uniform float uScale;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = uSize * uScale / max(0.1, -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`,Lf=`
  uniform sampler2D uTex;
  uniform vec3 uColor;
  uniform float uAmount;
  void main() {
    float a = texture2D(uTex, gl_PointCoord).a * uAmount;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, a);
  }
`,Rf=class{group=new En;glow;pools;lights=[];version=-1;glowMat;poolMat;lamps=[];lightIntensity;pointLightsEnabled=!0;constructor(e,t){this.lightIntensity=t,this.group.name=`nightLights`;let n=Ff([[0,1],[.25,.55],[.6,.12],[1,0]]),r=Ff([[0,1],[.45,.6],[.8,.18],[1,0]]);this.glowMat=new Ca({uniforms:{uTex:{value:n},uColor:{value:new K(`#ffd590`)},uAmount:{value:0},uSize:{value:2.6},uScale:{value:400}},vertexShader:If,fragmentShader:Lf,transparent:!0,depthWrite:!1,blending:2,fog:!1}),this.glow=new ta(new kr,this.glowMat),this.glow.frustumCulled=!1,this.glow.renderOrder=10,this.poolMat=new si({map:r,color:new K(`#ffc874`),transparent:!0,opacity:0,depthWrite:!1,blending:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,fog:!0}),this.pools=new q(new kr,this.poolMat),this.pools.frustumCulled=!1,this.pools.renderOrder=5,this.group.add(this.glow,this.pools);for(let t=0;t<2;t++){let t=new co(`#ffcf85`,0,9,1.6);t.castShadow=!1,this.lights.push(t),e.add(t)}e.add(this.group)}setLamps(e,t){if(t===this.version)return;this.version=t,this.lamps=e;let n=new Float32Array(e.length*3);e.forEach((e,t)=>n.set([e.x,e.y-.08,e.z],t*3)),this.glow.geometry.dispose();let r=new kr;r.setAttribute(`position`,new mr(n,3)),this.glow.geometry=r;let i=2.6,a=[],o=[],s=[];e.forEach((e,t)=>{let n=.066,r=e.x+.8;a.push(r-i,n,e.z-i,r+i,n,e.z-i,r+i,n,e.z+i,r-i,n,e.z+i),o.push(0,0,1,0,1,1,0,1);let c=t*4;s.push(c,c+2,c+1,c,c+3,c+2)}),this.pools.geometry.dispose();let c=new kr;c.setAttribute(`position`,new _r(a,3)),c.setAttribute(`uv`,new _r(o,2)),c.setIndex(s),this.pools.geometry=c}update(e,t,n,r){let i=pf(e);this.group.visible=i>.01,this.glowMat.uniforms.uAmount.value=i,this.glowMat.uniforms.uScale.value=n/(2*Math.tan(r*Math.PI/360)),this.poolMat.opacity=.45*i;let a=this.lamps.map(e=>({l:e,d:Math.abs(e.z-(t+2))})).sort((e,t)=>e.d-t.d).slice(0,this.lights.length);this.lights.forEach((e,t)=>{let n=a[t];e.visible=this.pointLightsEnabled,n?(e.position.set(n.l.x,n.l.y-.3,n.l.z),e.intensity=this.pointLightsEnabled?i*this.lightIntensity:0):e.intensity=0})}},zf=4e3,Bf=2e3,Vf=new W(18,12,26),Hf=`
  uniform float uTime;
  uniform vec3 uOrigin;
  uniform vec3 uSize;
  uniform vec3 uVel;
  attribute vec3 aSeed;
  varying float vFade;
  vec3 wrapPos(vec3 seed, vec3 extra) {
    vec3 w = seed * uSize + uVel * uTime + extra;
    return uOrigin + mod(w - uOrigin, uSize);
  }
  float fadeFor(vec3 p) {
    vec3 c = (p - uOrigin) / uSize;              // 0..1 in the box
    float edge = min(min(c.x, 1.0 - c.x), min(c.z, 1.0 - c.z));
    float d = length(p - cameraPosition);
    return smoothstep(0.0, 0.12, edge) * smoothstep(0.6, 2.0, d) * (1.0 - smoothstep(14.0, 24.0, d));
  }
`,Uf=`
  ${Hf}
  uniform float uLen;
  attribute float aEnd;
  void main() {
    vec3 p = wrapPos(aSeed, vec3(0.0));
    p -= uVel * uLen * aEnd;
    vFade = fadeFor(p) * (1.0 - 0.6 * aEnd);
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }
`,Wf=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;
  void main() {
    float a = uOpacity * vFade;
    if (a < 0.004) discard;
    gl_FragColor = vec4(uColor, a);
    #include <colorspace_fragment>
  }
`,Gf=`
  ${Hf}
  uniform float uPx;
  void main() {
    float ph = aSeed.y * 37.0 + aSeed.x * 11.0;
    vec3 sway = vec3(sin(uTime * 1.1 + ph) * 0.35, 0.0, cos(uTime * 0.8 + ph * 1.7) * 0.25);
    vec3 p = wrapPos(aSeed, sway);
    vFade = fadeFor(p);
    vec4 mv = viewMatrix * vec4(p, 1.0);
    gl_PointSize = (0.06 + 0.05 * aSeed.z) * uPx / max(0.2, -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`,Kf=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;
  void main() {
    vec2 d = gl_PointCoord - 0.5;
    float r = length(d) * 2.0;
    float a = uOpacity * vFade * (1.0 - smoothstep(0.5, 1.0, r));
    if (a < 0.004) discard;
    gl_FragColor = vec4(uColor, a);
    #include <colorspace_fragment>
  }
`;function qf(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Jf(e,t,n){return{uTime:{value:0},uOrigin:{value:new W},uSize:{value:Vf.clone()},uVel:{value:e},uColor:{value:new K(t)},uOpacity:{value:n},uLen:{value:.045},uPx:{value:400}}}var Yf=class{group=new En;rain;snow;rainMat;snowMat;time=0;rainMax=1500;snowMax=800;info={rain:0,snow:0};constructor(e){this.group.name=`weather`;let t=qf(1234567),n=new Float32Array(zf*2*3),r=new Float32Array(zf*2);for(let e=0;e<zf;e++){let i=t(),a=t(),o=t();n.set([i,a,o,i,a,o],e*6),r[e*2+1]=1}let i=new kr;i.setAttribute(`position`,new mr(new Float32Array(zf*2*3),3)),i.setAttribute(`aSeed`,new mr(n,3)),i.setAttribute(`aEnd`,new mr(r,1)),this.rainMat=new Ca({uniforms:Jf(new W(.8,-11,1.2),`#c9d4e0`,.42),vertexShader:Uf,fragmentShader:Wf,transparent:!0,depthWrite:!1}),this.rain=new Yi(i,this.rainMat),this.rain.frustumCulled=!1,this.rain.renderOrder=20;let a=new Float32Array(Bf*3);for(let e=0;e<Bf*3;e++)a[e]=t();let o=new kr;o.setAttribute(`position`,new mr(new Float32Array(Bf*3),3)),o.setAttribute(`aSeed`,new mr(a,3)),this.snowMat=new Ca({uniforms:Jf(new W(.25,-1.1,.15),`#ffffff`,.9),vertexShader:Gf,fragmentShader:Kf,transparent:!0,depthWrite:!1}),this.snow=new ta(o,this.snowMat),this.snow.frustumCulled=!1,this.snow.renderOrder=20,this.group.add(this.rain,this.snow),e.add(this.group)}setTier(e){let t=[750,1500,2600,4e3],n=[400,800,1400,2e3];this.rainMax=t[e]??1500,this.snowMax=n[e]??800}update(e,t,n,r,i,a){this.time=(this.time+e)%1e3;let o=new W;r.getWorldDirection(o),o.y=0,o.lengthSq()<1e-6&&o.set(0,0,1),o.normalize();let s=r.position.x+o.x*7,c=r.position.z+o.z*7,l=new W(s-Vf.x/2,-.5,c-Vf.z/2),u=a/(2*Math.tan(r.fov*Math.PI/360)),d=Math.round(this.rainMax*Math.max(0,Math.min(1,t))),f=Math.round(this.snowMax*Math.max(0,Math.min(1,n)));this.info.rain=d,this.info.snow=f;for(let[e,t]of[[this.rainMat,d],[this.snowMat,f]])e.uniforms.uTime.value=this.time,e.uniforms.uOrigin.value.copy(l),e.uniforms.uPx.value=u,e.visible=t>0;this.rainMat.uniforms.uColor.value.copy(i).lerp(new K(1,1,1),.35),this.snowMat.uniforms.uColor.value.copy(i).lerp(new K(1,1,1),.8),this.rain.geometry.setDrawRange(0,d*2),this.snow.geometry.setDrawRange(0,f),this.rain.visible=d>0,this.snow.visible=f>0}},Xf=[{shadows:!1,mapSize:0,type:0,distance:0,pixelRatio:()=>1,nightPointLights:!1},{shadows:!0,mapSize:512,type:0,distance:10,pixelRatio:e=>Math.min(e,1.5),nightPointLights:!1},{shadows:!0,mapSize:1024,type:1,distance:18,pixelRatio:e=>Math.min(e,2),nightPointLights:!0},{shadows:!0,mapSize:2048,type:1,distance:18,pixelRatio:e=>Math.min(e,3),nightPointLights:!0}],Zf=[`off`,`low`,`medium`,`high`];function Qf(e,t){let n=e.capabilities.isWebGL2,r=navigator.deviceMemory??4,i=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent),a=t.toLowerCase();return n?i||a===`android`||a===`ios`||a===`android_x`?(a.startsWith(`android`)||/Android/i.test(navigator.userAgent))&&r<=4?1:2:3:1}var $f=class{tier;forced;env;tuning;time=0;sinceChange=0;window=[];downgraded=!1;upgraded=!1;avgMs=0;tmp=new W;lightSpace=new Zt;constructor(e,t,n){this.env=e,this.tuning=t;let r=n.get(`tier`),i=r!==null&&/^[0-3]$/.test(r);this.forced=i,this.tier=i?Number(r):Qf(e.renderer,e.platform),this.apply()}get def(){return Xf[this.tier]}pixelRatio(){return this.def.pixelRatio(window.devicePixelRatio||1)}setTier(e){e=Math.max(0,Math.min(3,e)),e!==this.tier&&(this.tier=e,this.apply())}apply(){let{renderer:e,scene:t,sun:n}=this.env,r=this.def;e.shadowMap.enabled=r.shadows,e.shadowMap.type=r.type,n.castShadow=r.shadows,r.shadows&&n.shadow.mapSize.x!==r.mapSize&&(n.shadow.mapSize.set(r.mapSize,r.mapSize),n.shadow.map?.dispose(),n.shadow.map=null),n.shadow.radius=this.tier>=3?2.5:1,t.traverse(e=>{let t=e.material;if(t)for(let e of Array.isArray(t)?t:[t])e.needsUpdate=!0}),this.sinceChange=0,this.window=[],this.env.onChange(this.tier)}measure(e){if(e<=0||e>.25)return;for(this.time+=e,this.sinceChange+=e,this.window.push({t:this.time,dt:e});this.window.length&&this.window[0].t<this.time-5;)this.window.shift();let t=this.window.filter(e=>e.t>=this.time-2);if(this.avgMs=t.length?t.reduce((e,t)=>e+t.dt,0)/t.length*1e3:0,this.forced)return;let n=this.tuning.quality;this.sinceChange<n.warmupSeconds||(this.avgMs>n.offFrameMs&&this.tier>0?(this.downgraded=!0,this.setTier(0)):this.avgMs>n.downgradeFrameMs&&this.tier>0?(this.downgraded=!0,this.setTier(this.tier-1)):!this.downgraded&&!this.upgraded&&this.tier===2&&this.sinceChange>=5&&this.window.reduce((e,t)=>e+t.dt,0)/this.window.length*1e3<n.upgradeFrameMs&&(this.upgraded=!0,this.setTier(3)))}fitShadow(e,t,n=1){let r=this.env.sun,i=this.def.distance*n,a=e.getWorldDirection(this.tmp),o=e.position.clone().addScaledVector(a,i/2);o.y=Math.max(0,o.y*.5);let s=i/2*1.2;if(this.def.shadows){let e=2*s/this.def.mapSize,n=new Zt().lookAt(new W,t,Math.abs(t.y)>.99?new W(0,0,1):new W(0,1,0));this.lightSpace.copy(n).invert();let r=o.clone().applyMatrix4(this.lightSpace);r.x=Math.round(r.x/e)*e,r.y=Math.round(r.y/e)*e,o.copy(r.applyMatrix4(n))}r.target.position.copy(o),r.position.copy(o).addScaledVector(t,-50);let c=r.shadow.camera;c.right!==s&&(c.left=-s,c.right=s,c.top=s,c.bottom=-s,c.near=50-s*1.6,c.far=50+s*1.6,c.updateProjectionMatrix()),r.target.updateMatrixWorld()}},ep=`modulepreload`,tp=function(e,t){return new URL(e,t).href},np={},rp=function(e){return e.pathname.endsWith(`.css`)},ip=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},ap=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=tp(t,n);let r=s(t),i=rp(r);return ip(np,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:ep,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},op=-9.81,sp=(e,t)=>e<t?`${e}:${t}`:`${t}:${e}`,cp=null;function lp(){return cp??=ap(()=>import(`./rapier-qc_B8Wrv.js`).then(async e=>(await e.default.init(),e.default)),[],import.meta.url),cp}async function up(e={}){let t=await lp(),n=new t.World({x:0,y:op,z:0});n.integrationParameters.numSolverIterations=e.solverIterations??8,n.createCollider(t.ColliderDesc.cuboid(400,.5,400).setTranslation(0,Pu-.5,0).setFriction(.5).setCollisionGroups(Gu(Uu.Ground)));let r=new Set,i={filterContactPair:(e,n)=>r.has(sp(e,n))?null:t.SolverFlags.COMPUTE_IMPULSE,filterIntersectionPair:()=>!0};return{R:t,world:n,ignoredPairs:r,step(e){n.timestep=e,r.size?n.step(void 0,i):n.step()}}}var dp={TutorialText:`Нажми и держи`,TutorialTextHold:`Держи — нога поднимется`,TutorialTextHoldNotTooMuch:`Не тяни слишком долго!`,TutorialTextCrack:`Не наступай на трещины!`,TutorialTextRelease:`Отпусти — и шагни`,Start:`Старт`,StartGame:`Играть`,BestScore:`Рекорд: {0}`,BestScoreShort:`Рекорд {0}`,Combo:`Комбо +{0}`,ComboPointsFormat:`+{0}`,ComboLost:`комбо потеряно`,Faster:`Быстрее!`,Checkpoint:`Чекпоинт!`,CheckpointChallengeCheckpointText:`Чекпоинт {0}`,NumberOfCoinsEarned:`+{0}`,HudPaused:`Пауза`,HudResume:`Продолжить`,HudPause:`Пауза`,DistanceMeters:`{0} м`,DistanceKm:`{0} км`,Coins:`Монеты`,NewBest:`Новый рекорд!`,RaceModeFinish:`Финиш!`,DeathPhrase01:`Ой!`,DeathPhrase02:`Шлёп!`,DeathPhrase03:`Бывает!`,DeathPhrase04:`Трещина победила`,DeathPhrase05:`Ноги заплелись`,DeathPhrase06:`Штаны не выдержали`,DeathPhrase07:`Красиво упал!`,DeathPhrase08:`Почти получилось!`,DeathPhrase09:`Асфальт мягкий?`,DeathPhrase10:`Шаг не туда`,DeathPhrase11:`Ещё разок?`,DeathPhrase12:`Мягкой посадки!`,TapToRetry:`Нажми, чтобы сыграть ещё`,EndScore:`Очки`,EndBest:`Рекорд`,EndDistance:`Путь`,EndCoinsThisRun:`+{0|монета|монеты|монет}`,EndNoCoins:`Без монет`,SpecialDelivery:`Особая доставка!`,SpecialDeliveryReadyIn:`Доставка через {0}`,WinAPrize:`Выиграй приз!`,CoinsToGo:`Ещё {0|монета|монеты|монет}`,EarnCoins:`Монеты за рекламу`,ComingSoon:`Скоро!`,BottomCharacters:`Персонажи`,BottomWorlds:`Миры`,BottomLeaderboards:`Рекорды`,BottomAchievements:`Достижения`,Settings:`Настройки`,SettingsMusic:`Музыка`,SettingsSound:`Звуки`,SettingsVibration:`Вибрация`,DisableShadows:`Тени`,On:`Вкл`,Off:`Выкл`,Language:`Язык`,LocaleLanguageName:`Русский`,Credits:`Авторы`,CreditsBody:`Оригинальная игра: Super Entertainment. Ремейк для Telegram: «Шире Шаг».`,Back:`Назад`,Close:`Закрыть`,Loading:`Загрузка…`,LoadingStreet:`Строим улицу…`,LoadingPhysics:`Загружаем физику…`,LoadFailed:`Не удалось запустить: {0}`,Ok:`Ок`,Cancel:`Отмена`,Yes:`Да`,No:`Нет`,GameTitle1:`ШИРЕ`,GameTitle2:`ШАГ`,Buy:`Купить`,SliceTypeCombo_Legs:`ноги`,SliceTypeCombo_Body:`торс`,SliceTypeCombo_Head:`голова`,SliceTypeCombo_BodyLegs:`торс + ноги`,SliceTypeCombo_HeadLegs:`голова + ноги`,SliceTypeCombo_HeadBody:`голова + торс`,SliceTypeCombo_HeadBodyLegs:`весь костюм`,CharacterAmountUnlockedFormating:`Открыто {0}/3`,RarityCommon:`Обычный`,RarityUncommon:`Необычный`,RarityRare:`Редкий`,CharacterLockedPrize:`Выиграй в призовом автомате!`,CharacterGenderMale:`Он`,CharacterGenderFemale:`Она`,SliceLocked:`Закрыто`,Character_SteppyPants_Name:`Степпи`,Character_Chef_Name:`Шеф-повар`,Character_Convict_Name:`Заключённый`,Character_Ninja_Name:`Ниндзя`,Character_Stuntman_Name:`Каскадёр`,Character_Zombie_Name:`Зомби`,Character_Bunny_Name:`Зайка`,Character_Skeleton_Name:`Скелет`,Character_Robot_Name:`Шаготрон`,Character_Astronaut_Name:`Космонавт`,PrizeMachineTitle:`Призовой автомат`,PrizeSign:`ПРИЗЫ`,PrizeSpinCoins:`Крутить за 100`,PrizeSpinAd:`Крутить за рекламу`,PrizeSpinAgain:`Ещё разок за рекламу`,PrizeAdIn:`через {0}`,PrizeAgain:`Ещё раз`,PrizeOpenMachine:`К автомату`,PrizeNoPrizes:`Призы закончились`,NewPieceUnlocked:`Новая часть!`,GotSamePiece:`Уже есть! +{0|монета|монеты|монет}`,GotSamePieceNoCoins:`Уже есть!`,Equip:`Надеть`,AdWatch:`Смотреть рекламу`,AdNotAvailable:`Реклама пока недоступна`,AdNotFinished:`Досмотри до конца, чтобы получить награду`,AdMock:`Реклама (тест)`,AdMockClose:`Закрыть`},fp={TutorialText:`Press and hold`,TutorialTextHold:`Hold to lift a leg`,TutorialTextHoldNotTooMuch:`Don't hold too long!`,TutorialTextCrack:`Don't step on the cracks!`,TutorialTextRelease:`Release to step`,Start:`Start`,StartGame:`Play`,BestScore:`Best: {0}`,BestScoreShort:`Best {0}`,Combo:`Combo +{0}`,ComboPointsFormat:`+{0}`,ComboLost:`combo lost`,Faster:`Faster!`,Checkpoint:`Checkpoint!`,CheckpointChallengeCheckpointText:`Checkpoint {0}`,NumberOfCoinsEarned:`+{0}`,HudPaused:`Paused`,HudResume:`Resume`,HudPause:`Pause`,DistanceMeters:`{0} m`,DistanceKm:`{0} km`,Coins:`Coins`,NewBest:`New best!`,RaceModeFinish:`Finish!`,DeathPhrase01:`Oops!`,DeathPhrase02:`Splat!`,DeathPhrase03:`It happens!`,DeathPhrase04:`The crack wins`,DeathPhrase05:`Tangled legs`,DeathPhrase06:`The pants gave up`,DeathPhrase07:`Nice fall!`,DeathPhrase08:`So close!`,DeathPhrase09:`Is the pavement soft?`,DeathPhrase10:`Wrong step`,DeathPhrase11:`One more time?`,DeathPhrase12:`Soft landing!`,TapToRetry:`Tap to play again`,EndScore:`Score`,EndBest:`Best`,EndDistance:`Distance`,EndCoinsThisRun:`+{0|coin|coins}`,EndNoCoins:`No coins`,SpecialDelivery:`Special delivery!`,SpecialDeliveryReadyIn:`Delivery in {0}`,WinAPrize:`Win a prize!`,CoinsToGo:`{0|coin|coins} to go`,EarnCoins:`Coins for an ad`,ComingSoon:`Coming soon!`,BottomCharacters:`Characters`,BottomWorlds:`Worlds`,BottomLeaderboards:`Leaderboards`,BottomAchievements:`Achievements`,Settings:`Settings`,SettingsMusic:`Music`,SettingsSound:`Sound`,SettingsVibration:`Vibration`,DisableShadows:`Shadows`,On:`On`,Off:`Off`,Language:`Language`,LocaleLanguageName:`English`,Credits:`Credits`,CreditsBody:`Original game: Super Entertainment. Telegram remake: "Shire Shag".`,Back:`Back`,Close:`Close`,Loading:`Loading…`,LoadingStreet:`Building the street…`,LoadingPhysics:`Loading physics…`,LoadFailed:`Could not start: {0}`,Ok:`OK`,Cancel:`Cancel`,Yes:`Yes`,No:`No`,GameTitle1:`ШИРЕ`,GameTitle2:`ШАГ`,Buy:`Buy`,SliceTypeCombo_Legs:`legs`,SliceTypeCombo_Body:`body`,SliceTypeCombo_Head:`head`,SliceTypeCombo_BodyLegs:`body + legs`,SliceTypeCombo_HeadLegs:`head + legs`,SliceTypeCombo_HeadBody:`head + body`,SliceTypeCombo_HeadBodyLegs:`full outfit`,CharacterAmountUnlockedFormating:`{0}/3 unlocked`,RarityCommon:`Common`,RarityUncommon:`Uncommon`,RarityRare:`Rare`,CharacterLockedPrize:`Win it in the prize machine!`,CharacterGenderMale:`He`,CharacterGenderFemale:`She`,SliceLocked:`Locked`,Character_SteppyPants_Name:`Steppy`,Character_Chef_Name:`Chef`,Character_Convict_Name:`Convict`,Character_Ninja_Name:`Ninja`,Character_Stuntman_Name:`Stuntman`,Character_Zombie_Name:`Zombie`,Character_Bunny_Name:`Bunny`,Character_Skeleton_Name:`Skeleton`,Character_Robot_Name:`Steptron`,Character_Astronaut_Name:`Astronaut`,PrizeMachineTitle:`Prize machine`,PrizeSign:`PRIZES`,PrizeSpinCoins:`Spin for 100`,PrizeSpinAd:`Spin: watch ad`,PrizeSpinAgain:`Again: watch ad`,PrizeAdIn:`in {0}`,PrizeAgain:`Again`,PrizeOpenMachine:`To the machine`,PrizeNoPrizes:`No prizes left`,NewPieceUnlocked:`New piece!`,GotSamePiece:`Got it already! +{0|coin|coins}`,GotSamePieceNoCoins:`Got it already!`,Equip:`Wear`,AdWatch:`Watch ad`,AdNotAvailable:`No ad available right now`,AdNotFinished:`Watch to the end to get the reward`,AdMock:`Ad (test)`,AdMockClose:`Close`},pp={12:dp,0:fp},mp={12:`ru`,0:`en`},hp=12,gp=new Set,_p=new Map;function vp(e){return e===0?0:12}function yp(){return hp}function bp(e){if(e!==hp){hp=e,typeof document<`u`&&(document.documentElement.lang=mp[e]);for(let t of gp)t(e)}}function xp(e){return gp.add(e),()=>gp.delete(e)}function Sp(e,t=hp){return e in pp[t]}function Cp(e){return Object.keys(fp).filter(t=>t.startsWith(e))}function wp(e,t,n){let r=mp[e],i=_p.get(r);i||(i=new Intl.PluralRules(r),_p.set(r,i));let a=i.select(t);return n.length>=3?a===`one`?n[0]:a===`few`?n[1]:n[2]:a===`one`?n[0]:n[n.length-1]}var Tp=e=>String(typeof e==`number`?Math.trunc(e)===e?e:+e.toFixed(2):e??``);function Ep(e,t,n=hp){return e.replace(/\{(\d+)(\|[^}]*)?\}/g,(e,r,i)=>{let a=t[Number(r)];if(!i)return Tp(a);let o=typeof a==`number`?a:Number(a);return`${Tp(a)} ${wp(n,Math.abs(o),i.slice(1).split(`|`))}`})}function Z(e,...t){let n=pp[hp][e]??fp[e];return n===void 0?e:Ep(n,t,pp[hp][e]===void 0?0:hp)}function Dp(e){let t=Math.max(0,Math.trunc(e));if(t<1e3)return Z(`DistanceMeters`,t);let n=(t/1e3).toFixed(t%100==0?1:t%10==0?2:3).replace(/0+$/,``).replace(/\.$/,``);return hp===12&&(n=n.replace(`.`,`,`)),Z(`DistanceKm`,n)}var Op={ru:dp,en:fp},kp=`#2a2433`,Ap=`
  #hud, #ui {
    --font-display: "Press Start 2P", "Tiny5", ui-monospace, "Courier New", monospace;
    --font-body: "Tiny5", "Press Start 2P", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --ink: ${kp};
    --outline:
      -3px -3px 0 var(--ink), 0 -3px 0 var(--ink), 3px -3px 0 var(--ink), 3px 0 0 var(--ink),
      3px 3px 0 var(--ink), 0 3px 0 var(--ink), -3px 3px 0 var(--ink), -3px 0 0 var(--ink),
      0 6px 0 rgba(20, 16, 30, 0.35);
    --outline-sm:
      -2px -2px 0 var(--ink), 0 -2px 0 var(--ink), 2px -2px 0 var(--ink), 2px 0 0 var(--ink),
      2px 2px 0 var(--ink), 0 2px 0 var(--ink), -2px 2px 0 var(--ink), -2px 0 0 var(--ink),
      0 4px 0 rgba(20, 16, 30, 0.3);
    -webkit-font-smoothing: none;
    font-smooth: never;
  }
  #hud {
    position: fixed;
    inset: 0;
    pointer-events: none;
    font-family: var(--font-body);
    color: #fff;
    z-index: 10;
  }
  #hud .top {
    position: absolute;
    top: calc(var(--ui-top) + 18px);
    left: 64px;
    right: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: opacity 0.2s;
  }
  #hud .top.gone { opacity: 0; }
  #hud .score {
    font-family: var(--font-display);
    font-size: 56px;
    line-height: 1;
    text-shadow: var(--outline);
    transform-origin: 50% 60%;
    transition: opacity 0.2s;
    min-height: 56px;
  }
  #hud .score.hidden { opacity: 0; }
  #hud .score.pop { animation: hud-pop 0.22s ease-out; }
  #hud .score.bigpop { animation: hud-bigpop 0.45s cubic-bezier(.2, 1.6, .4, 1); }
  @keyframes hud-pop { 0% { transform: scale(1.22); } 100% { transform: scale(1); } }
  @keyframes hud-bigpop { 0% { transform: scale(1.6) rotate(-4deg); } 100% { transform: scale(1) rotate(0); } }
  #hud .sub {
    display: flex;
    gap: 16px;
    font-size: 20px;
    font-weight: 700;
    text-shadow: var(--outline-sm);
    white-space: nowrap;
  }
  #hud .sub .best { color: #ffe066; }
  #hud .newbest {
    position: absolute;
    top: calc(var(--ui-top) + 128px);
    left: 50%;
    font-family: var(--font-display);
    font-size: 20px;
    color: #ffe066;
    text-shadow: var(--outline);
    transform: translateX(-50%) scale(0);
    white-space: nowrap;
  }
  #hud .newbest.show { animation: hud-newbest 2.2s ease-out forwards; }
  @keyframes hud-newbest {
    0% { transform: translateX(-50%) scale(0) rotate(-8deg); opacity: 1; color: #ffe066; }
    12% { transform: translateX(-50%) scale(1.25) rotate(3deg); }
    22% { transform: translateX(-50%) scale(1) rotate(0); color: #ffffff; }
    32% { color: #ffe066; }
    42% { color: #ffffff; }
    52% { color: #ffe066; }
    80% { transform: translateX(-50%) scale(1); opacity: 1; }
    100% { transform: translateX(-50%) scale(0.9) translateY(-20px); opacity: 0; }
  }
  /* coin counter (top right) */
  #hud .coins {
    position: absolute;
    top: calc(var(--ui-top) + 22px);
    right: calc(var(--ui-right) + 14px);
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-display);
    font-size: 20px;
    line-height: 1;
    text-shadow: var(--outline-sm);
    transition: transform 0.5s cubic-bezier(.3, 1.3, .5, 1), opacity 0.3s;
  }
  #hud .coins.away { transform: translateY(calc(-100% - var(--ui-top) - 30px)); opacity: 0; transition-timing-function: ease-in; }
  .coin-ico {
    width: 22px;
    height: 22px;
    flex: none;
    box-sizing: border-box;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 34%, #fff3b0 0 18%, #ffd23a 19% 58%, #e8a10f 59% 100%);
    border: 3px solid ${kp};
    box-shadow: 0 3px 0 rgba(20, 16, 30, 0.35);
    display: inline-block;
  }
  #hud .coins .coin-ico { transition: transform 0.08s; }
  #hud .coins.hop .coin-ico { transform: translateY(-6px); }
  /* pause button (top left) */
  #hud .pause {
    position: absolute;
    top: calc(var(--ui-top) + 12px);
    left: calc(var(--ui-left) + 12px);
    width: 48px;
    height: 48px;
    padding: 0;
    transition: transform 0.2s cubic-bezier(.3, 1.5, .5, 1), opacity 0.15s;
  }
  #hud .pause.gone { transform: scale(0); opacity: 0; pointer-events: none; }
  #hud .pause svg { width: 20px; height: 20px; display: block; margin: auto; }
  #hud .popup {
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap;
    will-change: transform, opacity;
    transform: translate(-50%, -50%);
    font-family: var(--font-display);
  }
  #hud .popup.num { font-size: 20px; animation: hud-num 0.9s ease-out forwards; }
  #hud .popup.coin { font-size: 16px; animation: hud-num 0.9s ease-out forwards; }
  #hud .popup.combo { font-size: 22px; animation: hud-combo 2.5s ease-out forwards; }
  #hud .popup.lose { font-family: var(--font-body); font-weight: 700; font-size: 18px; animation: hud-num 0.9s ease-in forwards; }
  @keyframes hud-num {
    0% { transform: translate(-50%, -50%) scale(0.4); opacity: 0; }
    15% { transform: translate(-50%, -80%) scale(1.15); opacity: 1; }
    70% { opacity: 1; }
    100% { transform: translate(-50%, -190%) scale(1); opacity: 0; }
  }
  @keyframes hud-combo {
    0% { transform: translate(-50%, -50%) scale(0.2) rotate(-10deg); opacity: 0; }
    8% { transform: translate(-50%, -110%) scale(1.3) rotate(4deg); opacity: 1; }
    16% { transform: translate(-50%, -120%) scale(1) rotate(0); }
    80% { transform: translate(-50%, -150%) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -190%) scale(0.85); opacity: 0; }
  }
  /* start screen: logo + tutorial hint */
  #hud .logo {
    position: absolute;
    top: calc(var(--ui-top) + 15%);
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-display);
    font-size: clamp(36px, 13vw, 64px);
    line-height: 1.15;
    letter-spacing: 0.03em;
    text-shadow:
      -4px -4px 0 var(--ink), 0 -4px 0 var(--ink), 4px -4px 0 var(--ink), 4px 0 0 var(--ink),
      4px 4px 0 var(--ink), 0 4px 0 var(--ink), -4px 4px 0 var(--ink), -4px 0 0 var(--ink),
      0 8px 0 rgba(20, 16, 30, 0.35);
    transform: rotate(-3deg);
    transition: transform 0.45s cubic-bezier(.5, -0.4, .8, .6), opacity 0.35s;
  }
  #hud .logo span:last-child { color: #ffcf1f; }
  #hud .logo.gone { transform: translateY(-60vh) rotate(-3deg) scale(0.6); opacity: 0; }
  #hud .hint {
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(var(--ui-bottom) + 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    transition: opacity 0.35s ease, transform 0.35s ease;
  }
  #hud .hint .h1 {
    font-family: var(--font-display);
    font-size: 18px;
    line-height: 1.45;
    text-shadow: var(--outline);
    max-width: 88vw;
    text-wrap: balance;
  }
  #hud .hint .h2 { font-size: 24px; font-weight: 700; text-shadow: var(--outline-sm); animation: hud-pulse 1.4s ease-in-out infinite; }
  #hud .hint.hidden { opacity: 0; transform: translateY(14px); }
  #hud .hint.hidden .h2 { animation: none; }
  @keyframes hud-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
  /* death headline (YouDiedAnimator) */
  #hud .headline {
    position: absolute;
    left: 5vw;
    right: 5vw;
    top: calc(var(--ui-top) + 22%);
    font-family: var(--font-display);
    font-size: 24px;
    line-height: 1.45;
    text-align: center;
    text-shadow: var(--outline);
    transform: rotate(-2deg);
    visibility: hidden;
  }
  #hud .headline.show { visibility: visible; }
  #hud .headline.is-best { color: #ffe066; }
  #hud .headline .ch { display: inline-block; transform: scale(0); }
  #hud .headline.show .ch { animation: hud-letter 0.25s cubic-bezier(.2, 1.7, .4, 1) forwards; }
  @keyframes hud-letter { 0% { transform: translateY(12px) scale(0); } 100% { transform: none; } }
  #hud .debug {
    position: absolute;
    top: calc(var(--ui-top) + 66px);
    left: calc(var(--ui-left) + 8px);
    padding: 4px 8px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.55);
    font: 600 11px/1.35 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    letter-spacing: 0;
    white-space: pre;
    text-shadow: none;
  }
  #hud .perf {
    position: absolute;
    left: calc(var(--ui-left) + 6px);
    bottom: calc(var(--ui-bottom) + 6px);
    padding: 3px 7px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.55);
    font: 600 10px/1.35 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    letter-spacing: 0;
    white-space: pre;
    text-shadow: none;
  }
  @media (max-width: 360px) {
    #hud .score { font-size: 48px; min-height: 48px; }
    #hud .headline { font-size: 20px; }
    #hud .hint .h1 { font-size: 16px; }
  }
  @media (prefers-reduced-motion: reduce) {
    #hud .hint .h2, #hud .score.pop, #hud .score.bigpop { animation: none; }
  }
`;function jp(e,t,n){let r=parseInt(e.slice(1),16),i=parseInt(t.slice(1),16),a=e=>Math.round((r>>e&255)*(1-n)+(i>>e&255)*n);return`#${(1<<24|a(16)<<16|a(8)<<8|a(0)).toString(16).slice(1)}`}function Mp(e,t){return[[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]].map(([n,r])=>`${n*t}px ${r*t}px 0 ${e}`).join(`,`)+`, 0 ${t*2}px 0 rgba(20,16,30,0.35)`}var Np=class{cur=0;vel=0;step(e,t,n=.1,r=15){if(t<=0)return this.cur;let i=2/n,a=i*t,o=1/(1+a+.48*a*a+.235*a*a*a),s=this.cur-e,c=r*n;s=Math.min(Math.max(s,-c),c);let l=this.cur-s,u=(this.vel+i*s)*t;this.vel=(this.vel-i*u)*o;let d=l+(s+u)*o;return e-this.cur>0==d>e&&(d=e,this.vel=0),this.cur=d,d}snap(e){this.cur=e,this.vel=0}};function Pp(e,t){let n=document.createElement(`style`);n.textContent=Ap,document.head.appendChild(n);let r=document.createElement(`div`);r.id=`hud`;let i=(e,t=``,n=r,i=`div`)=>{let a=document.createElement(i);return a.className=e,t&&(a.textContent=t),n.appendChild(a),a},a=i(`logo`),o=i(``,``,a,`span`),s=i(``,``,a,`span`),c=i(`top`),l=i(`score hidden`,`0`,c),u=i(`sub`,``,c),d=i(`best`,``,u),f=i(`dist`,``,u),p=i(`newbest`),m=i(`coins away`);i(`coin-ico`,``,m,`i`);let h=i(`num`,`0`,m,`span`),g=i(`pause b3d blue gone`,``,r,`button`);g.type=`button`,g.innerHTML=`<svg viewBox="0 0 10 10" shape-rendering="crispEdges"><rect x="2" y="1" width="2" height="8" fill="currentColor"/><rect x="6" y="1" width="2" height="8" fill="currentColor"/></svg>`;let _=i(`hint`),v=i(`h1`,``,_),y=i(`h2`,``,_),b=i(`headline`),x=null;t.debug&&(x=i(`debug`));let S=null;t.perf&&(S=i(`perf`)),e.appendChild(r);let C=null;g.addEventListener(`click`,e=>{e.stopPropagation(),g.blur(),C?.()});let w=new Np,T=new Np,E=-1,D=0,O=-1,k=``,A=!1,ee=-1,j=!1,te=!1,M=!1,N=!1,P=new Set,ne=(e,t)=>{e.classList.remove(`pop`,`bigpop`),e.offsetWidth,e.classList.add(t)},F=()=>{o.textContent=Z(`GameTitle1`),s.textContent=Z(`GameTitle2`),v.textContent=Z(`TutorialTextCrack`),y.textContent=Z(`TutorialText`),p.textContent=Z(`NewBest`),g.setAttribute(`aria-label`,Z(`HudPause`)),m.setAttribute(`aria-label`,Z(`Coins`)),O=-1};return F(),{root:r,get popupTexts(){return[...P].map(e=>e.textContent??``)},get shownCoins(){return ee},showHint(e){_.classList.toggle(`hidden`,!e)},showLogo(e){a.classList.toggle(`gone`,!e)},update(e){e.score<D&&w.snap(e.score);let t=e.score-D;D=e.score;let n=Math.max(0,Math.round(w.step(e.score,e.dt)));n!==E&&(E=n,l.textContent=String(n),n>0&&t<=1&&ne(l,`pop`)),t>1&&ne(l,`bigpop`),e.showScore!==A&&(A=e.showScore,l.classList.toggle(`hidden`,!A)),e.best!==O&&(O=e.best,d.textContent=Z(`BestScoreShort`,e.best)),e.distance!==k&&(k=e.distance,f.textContent=e.distance),e.topHidden!==M&&(M=e.topHidden,c.classList.toggle(`gone`,M)),j||=(T.snap(e.coins),!0);let r=T.step(e.coins,e.dt),i=Math.max(0,Math.round(r));i!==ee&&(ee=i,h.textContent=String(i));let a=r-Math.floor(r);m.classList.toggle(`hop`,Math.abs(r-e.coins)>.01&&a>.01&&a<=.5),e.coinsVisible!==te&&(te=e.coinsVisible,m.classList.toggle(`away`,!te)),e.canPause!==N&&(N=e.canPause,g.classList.toggle(`gone`,!N))},flashNewBest(){p.classList.remove(`show`),p.offsetWidth,p.classList.add(`show`)},popup(e,t,n,a,o){let s=i(`popup ${o}`,e);s.style.left=`${n.toFixed(1)}px`,s.style.top=`${a.toFixed(1)}px`,s.style.color=o===`lose`?`#ffffff`:jp(t,`#ffffff`,o===`coin`?.25:.5),s.style.textShadow=Mp(o===`lose`?kp:jp(t,`#000000`,o===`combo`?.55:.6),o===`combo`?3:2);let c=r.clientWidth||window.innerWidth,l=s.offsetWidth/2+10,u=Math.min(Math.max(n,l),Math.max(l,c-l));u!==n&&(s.style.left=`${u.toFixed(1)}px`),P.add(s),setTimeout(()=>{s.remove(),P.delete(s)},(o===`combo`?2500:900)+50)},showHeadline(e,t){b.textContent=``;let n=0;e.split(` `).forEach((e,t)=>{t>0&&b.appendChild(document.createTextNode(` `));let r=document.createElement(`span`);r.style.display=`inline-block`,r.style.whiteSpace=`nowrap`;for(let t of e){let e=document.createElement(`span`);e.className=`ch`,e.textContent=t,e.style.animationDelay=`${(n++*.03).toFixed(2)}s`,r.appendChild(e)}b.appendChild(r)}),b.dataset.text=e,b.classList.toggle(`is-best`,t),b.classList.remove(`show`),b.offsetWidth,b.classList.add(`show`),p.classList.remove(`show`)},hideHeadline(){b.classList.remove(`show`,`is-best`)},onPause(e){C=e},coinTarget(){let e=m.firstElementChild;if(!e)return null;let t=e.getBoundingClientRect(),n=m.classList.contains(`away`)?new DOMMatrixReadOnly(getComputedStyle(m).transform).m42:0;return{x:t.left+t.width/2,y:t.top+t.height/2-n}},relabel:F,setDebug(e){x&&x.textContent!==e&&(x.textContent=e)},setPerf(e){S&&S.textContent!==e&&(S.textContent=e)}}}var Fp={world:{worldType:0,name:`City`,chunkLength:15,checkpointLength:60,everIncreasingCheckpointSize:!1,scoreStartDistance:0,scoreType:0,comboType:1,incrementalSpeeds:[1,1.1,1.2,1.3,1.4],allowCoffee:!0,allowCars:!0,noPaverDrawing:!1,forceNumberOfChunksToLoad:0,disableCheckpointSpawnsBeforeDistance:1,checkpointOffset:{x:0,y:0,z:0},checkpointNormalCoinsAmount:5,checkpointGoldCoinsAmount:10,opponentPlayerOffset:.2,environments:[{name:`City`,possibleCameras:[],chunksRequiredBefore:1,chunksRequiredAfter:1}],difficulties:[{length:5,name:`easy`},{length:10,name:`medium`},{length:1,name:`hard`}]},pavement:{minPavingLength:.875,maxPavingLength:1.75,totalLength:15,width:1,yScale:1,pavementMeshIndex:0,chanceOfCoin:.05,distanceBetweenCracks:.0625,distanceBetweenCracksMax:.0625,chanceOfTimer:0,chanceOfGeyser:0,chanceOfPattern:0,patterns:null,objectSizes:[{length:1,chance:1,pavers:[`slab`,`slab`,`slabWarm`,`slabWorn`]},{length:1.5,chance:.5,pavers:[`slab`,`slabWarm`,`slabDark`]},{length:2,chance:.25,pavers:[`slabDark`,`slabWorn`]}]},timedPavers:[{lengthOfPaver:1.5}],obstacleStatsCount:{Geyser:1,Web:1},level:{unloadOutsideWindowEveryUpdate:!1,distanceReached:0,coinDoublerOwned:!1},hazards:{enabled:!0,easyStages:[`easy`],hazardStages:[`medium`,`hard`],pavement:{chanceOfTimer:.05,chanceOfPattern:.22,patterns:[{startOnPaver:!0,pieces:[{chanceOfTimed:0,chanceOfExplosive:0,chanceOfFireball:0,timeOffset:0,indexOverride:-1},{chanceOfTimed:0,chanceOfExplosive:1,chanceOfFireball:0,timeOffset:0,indexOverride:-1},{chanceOfTimed:0,chanceOfExplosive:0,chanceOfFireball:0,timeOffset:0,indexOverride:-1}]}]},widenTntGap:!0,timedPaverTimeToCollapse:1.2,timedPaverShakeAmount:.02,timedPaverShakeCurve:[{t:0,v:0},{t:1,v:1}],timedPaverFallSpeed:3,timedPaverTimeToOffsetSound:.15,timedPaverPieces:4,tnt:{delay:.5,postpone:.75,forceLocalPlayer:750,radius:6,upwardsModifier:.5}},cars:{enabled:!0,crossing:{enabled:!0,chance:.45,fromChunk:1,localZ:8,halfWidth:2},mainRoadX:3,sideRoadX:-25.5,haltX:-4,turningCircle:2,speedSide:6,speedCross:8,speedMain:13,stopAtCrossingForPlayerForTime:5,guardBehind:16,guardAhead:4,playerBand:2,stuckPatience:3,halfExtents:{x:.85,y:.6,z:1.95},centerY:.68,frontAxleZ:1.3,wheelBase:2.4,maxSteerDeg:50,maxAccel:6,maxBrake:10,topSpeed:20,maxYawRate:3.5,sensorAhead:1.1,sensorHalf:{x:.7,y:.5,z:1.1},hitInflate:.04,mainSpawn:{rate:.22,variance:1.5,behindMin:16,behindMax:32,initialSpeed:12,maxCars:5,clearRadius:9},sideSpawn:{rate:.2,variance:1.5,localZMin:11,localZMax:14.5,maxPerChunk:2,initialSpeed:6},despawnAhead:20,despawnBehind:60,capsizeLimit:5,stuckLimit:10,seed:4242,models:[{id:`taxi`,body:`#f6c21c`,trim:`#26262b`,weight:3},{id:`red`,body:`#e2463f`,trim:`#f1f1f1`,weight:1},{id:`blue`,body:`#3d7bd9`,trim:`#f1f1f1`,weight:1},{id:`van`,body:`#f2f0ea`,trim:`#3d7bd9`,weight:1},{id:`green`,body:`#3ea56b`,trim:`#f1f1f1`,weight:1}],hitByCarZoom:!0,hitShake:{radius:.08,length:.5},hornAfter:1.5},debug:{startZ:4,walkSpeed:1.2},movement:{footSpeed:5.5,forwardAcceleration:35,downSpeed:25,zFrictionWhenDroppingFoot:.95,zFrictionWhenTouchingGround:.85,groundedFootSpeed:.3,groundedForwardAcceleration:2,stepTopHeight:.3,fullySpreadLength:2.5,maxGroundedDistanceBetweenFeet:2,footAngleWhenFullyStretched:75,spreadLengthOfFullAngle:1.9,angleGroundedFootFromStretchepPercentage:.5,pelvicForce:250,pelvicRotationFixForce:4e3,footSpeedVariance:1,isInvincible:!1,delayBeforePlayingDeathVO:.25},bodySlice:{defaultTorsoXRotation:14,torsoZSway:15,handSwayForwardPush:18,handSwayBackwardPush:22,handSwayOutwardPush:5,handSwayUpwardPush:2,pelvisRotationFixScale:1,pelvisPositionFixScale:1,shoulderPositionFixScale:0,torsoFriction:.975},headRotationFixScale:1,character:{parts:[],spawnKick:10,startOffset:{x:0,y:.0625,z:-.5}},ragdoll:{solverIterations:8,maxAngularVelocity:4,friction:.5,restitution:.05,hardLimitErp:.35,hardLimitMaxSpeed:4,driveScale:5,limitSpringScale:1,densityPerVolume:100},game:{restartDelay:2,deathSlowdownLength:.55,carryOverPressWindow:.2,characterSeed:12345,timeSlowdownCurve:[{t:0,v:.15},{t:.35,v:.15},{t:.55,v:1}],crackDeathStopTime:0},score:{comboColorCycle:[`#ffd21f`,`#ff8a1f`,`#ff3b3b`,`#ff4fa3`,`#a65bff`,`#3d7bff`,`#22d3ee`,`#3ddc6a`],comboTextOutAt:2,comboTextDestroyAt:3.5,showComboNumberPopups:!0,deathPanelDelay:1,retryInputDelay:.4,tutorialAutoRestart:!0,deathPhrases:[`You died!`,`Splat!`,`Mind the gap!`,`Oops!`,`Crack attack!`,`Ouch!`,`Not again!`,`So close!`],carDeathPhrases:[`Look both ways!`,`Honk honk!`,`Road kill!`,`Taxi!`,`Beep beep!`],tntDeathPhrases:[`Kaboom!`,`Blast off!`,`Boom!`],saveThrottle:2},camera:{defaultFieldOfView:50,tabletFovScale:1,cameraDrag:.6,cameraAcceleration:2,useCheckpointCameras:!0,playerCameraTransitionDist:1,cameraDistanceScale:1,gameplayCameraPositions:[{x:3.3,y:3,z:-.4},{x:2.6,y:2.7,z:-2.6},{x:3.22,y:1.8,z:.88},{x:3,y:3.2,z:-2.2}],gameplayCameraOffsets:[{x:0,y:-.25,z:.8},{x:0,y:-.3,z:1.4},{x:0,y:-.45,z:1.2},{x:0,y:-.3,z:1.2}],gameplayRotationOffset:{x:0,y:0,z:0},preGameCameraPosition:{x:3.4,y:3.4,z:-2.2},preGameCameraLookat:{x:0,y:.6,z:2.6},deathCamera:{zoomOutAtTime:.83,shakeDoneAtTime:.15,fieldOfView:47,shakeSize:{x:.05,y:.05,z:.05},dragWhenZoomedIn:.6,accelerationWhenZoomedIn:15,dragWhenZoomingOut:.85,accelerationWhenZoomingOut:3,focusWeight:.5,focusHeight:1},deathImpactShake:{radius:.03,length:.12},teleportDistance:100,restartSnapDistance:8},lighting:{minutesPerDay:2,minutesPerWeatherChange:1.5,metersPerWeatherChange:100,weatherChangeLength:.1,lightZRotation:-25,timeOfDayCycle:[{t:0,v:0},{t:.25,v:0},{t:.33,v:1},{t:.5,v:1},{t:.58,v:2},{t:.85,v:2},{t:.93,v:3},{t:1,v:3}],sunDirectionCycle:[{t:0,v:-42},{t:.25,v:-42},{t:.33,v:-62},{t:.5,v:-62},{t:.58,v:-48},{t:.85,v:-48},{t:.93,v:-42},{t:1,v:-42}],shadowStrengthCycle:[{t:0,v:.8},{t:.25,v:.8},{t:.33,v:.75},{t:.5,v:.75},{t:.58,v:.4},{t:.85,v:.4},{t:.93,v:.8},{t:1,v:.8}],weathers:[{name:`clear`,chance:10},{name:`rain`,chance:4},{name:`snow`,chance:2}],nightLightIntensity:6},quality:{downgradeFrameMs:22,offFrameMs:40,upgradeFrameMs:12,warmupSeconds:3}},Ip=(e,t,n,r,i=0,a=0)=>({xRange:e,xMid:t,yRange:n,zRange:r,springiness:a,stiffness:i}),Lp={xRange:-1e3,xMid:-1e3,yRange:-1e3,zRange:-1e3,springiness:-1e3,stiffness:0},Rp=e=>({joint:Ip(50,0,10,0),jointAfterDeath:Lp,massScale:1,dragOverride:0,angularDragOverride:0,chanceOfDetatchingOnDeath:0,canBeAcceleratedAfterDeath:!1,disableCollisionWith:[],...e}),zp=(e,t,n,r,i,a)=>({kind:`box`,center:{x:e,y:t,z:n},half:{x:r,y:i,z:a}}),Bp=(e,t,n)=>({kind:`capsule`,center:{x:0,y:e,z:0},halfHeight:t,radius:n}),Vp=Ip(180,0,40,30),Hp=Ip(120,60,0,0,40),Up=Ip(160,0,30,30),Wp=Ip(40,0,30,30,30),Gp=Ip(40,0,30,30,20),Kp=Ip(140,0,90,60,2),qp=Ip(140,-65,0,0),Jp={...Lp,stiffness:-1},Yp={...Lp,stiffness:6};for(let e of[1,-1]){let t=e>0?`R`:`L`;Fp.character.parts.push(Rp({name:`Thigh${t}`,slice:0,parent:`Pelvis`,pos:{x:.09*e,y:.92,z:0},shape:Bp(-.205,.13,.075),joint:Vp,look:`trousers`}),Rp({name:`Shin${t}`,slice:0,parent:`Thigh${t}`,pos:{x:.09*e,y:.51,z:0},shape:Bp(-.19,.125,.06),joint:Hp,jointAfterDeath:Jp,look:`trousers`}),Rp({name:`Foot${t}`,slice:0,parent:`Shin${t}`,pos:{x:.09*e,y:.1,z:0},shape:zp(0,-.05,.06,.055,.05,.14),joint:Up,look:`shoe`}))}Fp.character.parts.unshift(Rp({name:`Pelvis`,slice:0,parent:null,pos:{x:0,y:.98,z:0},shape:zp(0,0,0,.15,.09,.11),canBeAcceleratedAfterDeath:!0,look:`trousers`})),Fp.character.parts.push(Rp({name:`Belly`,slice:1,parent:`Pelvis`,pos:{x:0,y:1.07,z:0},shape:zp(0,.16,0,.155,.16,.1),joint:Wp,jointAfterDeath:Yp,canBeAcceleratedAfterDeath:!0,look:`shirt`}));for(let e of[1,-1]){let t=e>0?`R`:`L`;Fp.character.parts.push(Rp({name:`Arm${t}`,slice:1,parent:`Belly`,pos:{x:.225*e,y:1.34,z:0},shape:Bp(-.12,.08,.048),joint:Kp,look:`shirt`}),Rp({name:`Forearm${t}`,slice:1,parent:`Arm${t}`,pos:{x:.225*e,y:1.1,z:0},shape:Bp(-.12,.085,.045),joint:qp,look:`skin`}))}Fp.character.parts.push(Rp({name:`Head`,slice:2,parent:`Belly`,pos:{x:0,y:1.39,z:0},shape:zp(0,.13,.01,.12,.13,.115),joint:Gp,jointAfterDeath:Yp,look:`head`}));var Xp={bldBrick:{id:`bldBrick`,kind:`building`,size:{x:6,y:9,z:4.8},color:`#ef8c78`,accent:`#f4f1ec`},bldCream:{id:`bldCream`,kind:`building`,size:{x:6,y:7,z:4.8},color:`#f3d58c`,accent:`#f4f1ec`},bldBlue:{id:`bldBlue`,kind:`building`,size:{x:6,y:12,z:4.8},color:`#93c4da`,accent:`#f4f1ec`},bldTeal:{id:`bldTeal`,kind:`building`,size:{x:6,y:8,z:4.8},color:`#8fd1bf`,accent:`#f4f1ec`},bldGrey:{id:`bldGrey`,kind:`building`,size:{x:6,y:15,z:4.8},color:`#b9aed6`,accent:`#f4f1ec`},bldPink:{id:`bldPink`,kind:`building`,size:{x:6,y:6,z:4.8},color:`#f2a6b8`,accent:`#f4f1ec`},lamp:{id:`lamp`,kind:`lamp`,size:{x:.3,y:3.2,z:.3},color:`#2f4a3c`,accent:`#fff3c4`},tree:{id:`tree`,kind:`tree`,size:{x:1.4,y:2.8,z:1.4},color:`#6b4a32`,accent:`#5f9a4a`},bin:{id:`bin`,kind:`bin`,size:{x:.45,y:.8,z:.45},color:`#2f55c4`,accent:`#5a4c48`},bench:{id:`bench`,kind:`bench`,size:{x:.5,y:.8,z:1.6},color:`#8a5a3a`,accent:`#2c2f33`},hydrant:{id:`hydrant`,kind:`hydrant`,size:{x:.3,y:.6,z:.3},color:`#c8352b`,accent:`#e6e1d6`}},Zp=(e,t,n)=>({x:e,y:t,z:n}),Qp=Zp(0,0,0),$p=Zp(1,1,1),em={laneHalfWidth:.5,sidewalkInnerX:-2.9,kerbX:1.45,kerbWidth:.2,roadFarX:7.6,farSidewalkX:10,roadCenterX:4.6,mainRoadLaneX:3,sidewalkY:.03,roadY:-.16},tm=[{name:`buildingsNear`,position:Zp(em.sidewalkInnerX-3,0,0),slots:[Zp(0,0,2.5),Zp(0,0,7.5),Zp(0,0,12.5)],assets:[{id:`bldBrick`,chance:1},{id:`bldCream`,chance:1},{id:`bldBlue`,chance:.6},{id:`bldTeal`,chance:.7},{id:`bldGrey`,chance:.4},{id:`bldPink`,chance:.5}],chanceOfNothing:.08,forceAtLeastOne:!0,spawnOffsetMin:Zp(-.4,0,0),spawnOffsetMax:Zp(0,0,0),spawnOffsetGridSize:0,uniformScale:!1,scaleVariance:Zp(1,1.5,1),chanceOfSwappingAxis:Qp},{name:`buildingsFar`,position:Zp(em.farSidewalkX+3,0,0),slots:[Zp(0,0,2.5),Zp(0,0,7.5),Zp(0,0,12.5)],assets:[{id:`bldCream`,chance:1},{id:`bldGrey`,chance:.8},{id:`bldBrick`,chance:.8},{id:`bldBlue`,chance:.6},{id:`bldTeal`,chance:.4}],chanceOfNothing:.15,forceAtLeastOne:!0,spawnOffsetMin:Zp(0,0,0),spawnOffsetMax:Zp(.6,0,0),spawnOffsetGridSize:0,uniformScale:!1,scaleVariance:Zp(1,1.6,1),chanceOfSwappingAxis:Qp},{name:`lamps`,position:Zp(em.kerbX-.25,0,0),slots:[Zp(0,0,3.75),Zp(0,0,11.25)],assets:[{id:`lamp`,chance:1}],chanceOfNothing:.35,forceAtLeastOne:!1,spawnOffsetMin:Zp(0,0,-.5),spawnOffsetMax:Zp(0,0,.5),spawnOffsetGridSize:.25,uniformScale:!0,scaleVariance:$p,chanceOfSwappingAxis:Qp},{name:`furniture`,position:Zp(-1.75,0,0),slots:[Zp(0,0,1.5),Zp(0,0,5.5),Zp(0,0,9.5),Zp(0,0,13.5)],assets:[{id:`tree`,chance:1},{id:`bin`,chance:.6},{id:`bench`,chance:.5},{id:`hydrant`,chance:.3}],chanceOfNothing:.55,forceAtLeastOne:!1,spawnOffsetMin:Zp(-.3,0,-.6),spawnOffsetMax:Zp(.2,0,.6),spawnOffsetGridSize:0,uniformScale:!0,scaleVariance:Zp(1.25,1.25,1.25),chanceOfSwappingAxis:Qp}];function nm(e,t){let n=()=>pu(e),r=n(),i=!mu(e,t.chanceOfNothing),a=[n(),n(),n()];t.uniformScale&&(a=[a[0],a[0],a[0]]);let o=[t.scaleVariance.x,t.scaleVariance.y,t.scaleVariance.z],s=[t.chanceOfSwappingAxis.x,t.chanceOfSwappingAxis.y,t.chanceOfSwappingAxis.z],c=[1,1,1];for(let t=0;t<3;t++)c[t]=Math.fround(o[t]**+a[t]),mu(e,s[t])&&(c[t]=-c[t]);let l=[du(t.spawnOffsetMin.x,t.spawnOffsetMax.x,n()),du(t.spawnOffsetMin.y,t.spawnOffsetMax.y,n()),du(t.spawnOffsetMin.z,t.spawnOffsetMax.z,n())],u=t.spawnOffsetGridSize;return u>0&&(l=l.map(e=>fu(e/u)*u)),{assetRandomness:r,spawn:i,scale:Zp(c[0],c[1],c[2]),offset:Zp(l[0],l[1],l[2])}}function rm(e,t){let n=e.filter(e=>e.item!=null&&e.chance>0);if(n.length<1)return null;let r=0;for(let e of n)r=Math.fround(r+e.chance);let i=0;for(let e of n)if(i=Math.fround(i+e.chance),r*t<i)return e.item;return n[n.length-1].item}function im(e,t){return bu(yu(e),t.position.x,t.position.y,t.position.z)}function am(e,t){let n=xu(im(e,t)),r=t.slots.length?t.slots:[Qp],i=r.length,a=n.nextRange(0,i),o=t.forceAtLeastOne?a:-1,s=t.assets.map(e=>({item:Xp[e.id],chance:e.chance})),c=[],l=0,u=null,d=null;for(;l<i;){if(!u&&(d=nm(n,t),u=rm(s,d.assetRandomness),!u||!d.spawn&&o!==l)){l++;continue}let e=d,i=r[l];c.push({asset:u,loader:t.name,slot:l,position:Zp(t.position.x+i.x+e.offset.x,t.position.y+i.y+e.offset.y,t.position.z+i.z+e.offset.z),scale:{...e.scale}}),u=null,l++}return c}function om(e,t=tm){return t.flatMap(t=>am(e,t))}var sm=.125,cm=e=>e.length-sm,lm=e=>e.length+sm,um=(e,t)=>e.crackType===Mu.GEYSER||!!t.widenTntGap&&e.crackType===Mu.EXPLOSIVE;function dm(e,t,n){let r=n.obstacleStatsCount[e]??1;return{name:e,statsIndex:r<2?0:t.nextRange(0,r),parentCrack:null}}function fm(e){let t=e.pieces.length;return t%2==1?1+Math.trunc(t/2):(e.startOnPaver?2:0)+t/2}var pm=class{def;sizes;constructor(e){this.def=e,this.sizes=[...e.objectSizes].sort((e,t)=>e.length-t.length)}newCrack(e,t,n,r,i){let a=Bu.getNew();return a.ground=n,a.localStartPoint=e,a.xPos=t,a.chunk=r,a.length=i,a.width=this.def.width,a.scale={x:this.def.width,y:this.def.yScale*Pu,z:i},a}createCracks(e,t,n,r,i,a){let o=this.def,s=this.sizes,c=a.world,l=s.findIndex(e=>Math.abs(e.length-o.minPavingLength)<=sm);if(l<0)throw Error(`PavementPlacerExtra: no object size within ${sm} of minPavingLength ${o.minPavingLength}`);let u={first:null,last:null,pos:0};this.fillWithPavement(e,t,n,r,i,u,l,a),this.attemptPattern(e,u,n,a)&&this.fillWithPavement(e,t,n,r,i,u,l,a);let d=u.first,f=u.last;if(!d||!f)return null;let p=o.distanceBetweenCracks;Cu(Ou(d.maxPos+o.totalLength,c.cfg.checkpointLength),0,.001)||(p=du(o.distanceBetweenCracks,o.distanceBetweenCracksMax,pu(e))),this.stretchCracksToLengthAndAddToList(t,d,o.totalLength,p,a);let m=c.chunkLength;for(let t=d;t;t=t.nextCrack){let r=Ou(t.maxPos-n.z,m);if(r<o.minPavingLength||r+t.length>m-o.minPavingLength?(t.crackType=Mu.NORMAL,t.timedPaverIndex=-1):t.crackType===Mu.GEYSER&&(t.obstacle=dm(`Geyser`,e,a),t.obstacle.parentCrack=t),t.isTimedPaver){let e=a.timedPavers[t.timedPaverIndex],n=t.length/e.lengthOfPaver;t.scale={x:n,y:n,z:n},t.allowMidgroundCharacters=!1,t.missionTag=`Timed`}else{let n=s.find(e=>Math.abs(t.length-e.length)<=sm),r=n?gu(e,n.pavers)??null:null,i=n?t.length/n.length:1;r&&(t.customObject=r,t.sfxTag=r,t.scale={x:i,y:i,z:i})}if(t===f)break}return{first:d,last:f}}fillWithPavement(e,t,n,r,i,a,o,s){let c=this.def,l=this.sizes,u=l[o].length-sm,d=!1;for(;a.pos===0||u+c.distanceBetweenCracks+a.pos<c.totalLength;){let u=hu(e,c.chanceOfGeyser),f=u?Lu:du(c.distanceBetweenCracks,c.distanceBetweenCracksMax,pu(e)),p=Math.min(c.totalLength-a.pos-f,c.maxPavingLength),m,h,g=-1;if(hu(e,c.chanceOfTimer)){let t=s.timedPavers,n=-1;for(let e=0;e<t.length;e++)Math.abs(t[e].lengthOfPaver-p)<=.125&&(n=e);g=e.nextMax(1+n);let r=t[g].lengthOfPaver;m=r-sm,h=Math.min(r+sm,p),u=!1}else{let t=0;for(let e=o;e<l.length;e++)cm(l[e])<p&&(t+=l[e].chance);let n=t*pu(e),r=o;do n-=l[r].chance,r++;while(n>0&&r<l.length);let i=l[r-1];m=cm(i),h=Math.min(lm(i),p)}m=Math.max(m,c.minPavingLength),h=Math.min(h,c.maxPavingLength);let _=du(m,h,pu(e)),v=this.newCrack(a.pos+r,i,t,n,_);v.hasCoin=hu(e,c.chanceOfCoin),v.crackType=d?Mu.GEYSER:Mu.NORMAL,v.timedPaverIndex=g,a.first?a.last&&(a.last.next=v,v.prev=a.last):a.first=v,a.last=v,a.pos+=f+_,d=u}}attemptPattern(e,t,n,r){let i=this.def,a=i.patterns;if(!a||!hu(e,i.chanceOfPattern))return!1;let o=a[e.nextMax(a.length)];if(!o)return!1;let s=this.placePattern(e,o,t.first,t.last,n,r);if(!s)return!1;let c=r.timedPavers,l=fm(o),u=s.prev,d=0,f=0;for(let n=s;n;n=n.next){if(n.localStartPoint+=d,f<l){if(n.crackType===Mu.GEYSER&&u){let e=u.maxPos+u.length-n.maxPos+Lu;n.localStartPoint+=e,d+=e}else if(r.widenTntGap&&n.crackType===Mu.EXPLOSIVE&&u){let e=u.maxPos+u.length-n.maxPos+Iu;n.localStartPoint+=e,d+=e}if(n.isTimedPaver){let t=c[n.timedPaverIndex].lengthOfPaver,r=du(Math.max(i.minPavingLength,t-sm),Math.min(i.maxPavingLength,t+sm),pu(e));d+=r-n.length,n.length=r}}if(f++,u=n,n===t.last)return t.pos+=d,!0}return!1}placePattern(e,t,n,r,i,a){let o=a.world.chunkLength,s=[];for(let e=n;e&&e!==r;e=e.next){let t=Ou(e.maxPos-i.z,o);if(t>=.25){if(t+e.length>o-.25)break;s.push(e)}}let c=fm(t);if(s.length<=c)return null;let l=e.nextMax(s.length+1-c),u=l,d=t.startOnPaver,f=a.timedPavers;for(let n of t.pieces){if(d){if(hu(e,n.chanceOfTimed)){let e=s[u];e.timedPaverIndex=0;for(let t=0;t<f.length&&!(f[t].lengthOfPaver+.125<e.length);t++)e.timedPaverIndex=t}u++}else{let t=s[u];t.crackType=Mu.NORMAL,hu(e,n.chanceOfExplosive)&&(t.crackType=Mu.EXPLOSIVE),hu(e,n.chanceOfFireball)&&(t.crackType=Mu.GEYSER,t.obstacleTimeOffset=n.timeOffset,t.obstacleIndexOverride=n.indexOverride)}d=!d}return s[l]}stretchCracksToLengthAndAddToList(e,t,n,r,i){let a=this.def,o=this.sizes,s=i.timedPavers,c=i.world,l=t;for(;l.next;)l=l.next;let u=t.maxPos,d=100,f;do{let e=0,c=0;for(let n=t.next;n;n=n.next)n.crackType===Mu.GEYSER?e++:um(n,i)&&c++;let d=a.distanceBetweenCracks+Lu*e+Iu*c;f=l.maxPos+l.length+r-u;let p=0,m=0;for(let e=t;e;e=e.next){let r=(n-d)/(f-d);if(e===t||um(e,i))e.localStartPoint+=p;else{let t=e.maxPos+p-m,n=Du(r*t,a.distanceBetweenCracks,a.distanceBetweenCracksMax);e.localStartPoint=m-e.chunk.z+n;let i=n-t;d+=n,f+=i,p+=i}let c=r*e.length,l,u;if(e.isTimedPaver){let t=0;for(let e=0;e<s.length&&c>s[e].lengthOfPaver-.125;e++)t=e;e.timedPaverIndex=t;let n=s[t].lengthOfPaver;l=Math.max(a.minPavingLength,n-sm),u=Math.min(a.maxPavingLength,n+sm)}else{let e=0;for(let t=0;t<o.length&&o[t].length-.125<c;t++)e=t;l=Math.max(a.minPavingLength,cm(o[e])),u=Math.min(a.maxPavingLength,lm(o[e]))}let h=Du(c,l,u),g=h-e.length;e.length=h,e.scale.z=h,p+=g,f+=g,d+=h,m=e.maxPos+h}}while(!Cu(n,f,.01)&&d--!==0);for(let n=t;n;){let t=n.next;c.distanceForZ(n.minPos())<=i.distanceReached&&(n.hasCoin=!1),c.isCloseToChunkBorder(n.minPos())||c.isCloseToChunkBorder(n.maxPos+n.length)||n.isSpeedupCrack?n.hasCoin=!1:n.hasCoin&&i.coinDoublerOwned&&(n.isCoinBag=i.coinBagRoll(n.chunk)<.2),e.addCrackToListInOrder(n),Vu(n,c,!1),n=t}}},mm={x:-4,y:0,z:8};function hm(e,t){return!t.enabled||e<t.fromChunk||!(_m(bu(yu(e),mm.x,mm.y,mm.z))/4294967296<t.chance)?!1:!hm(e-1,t)}function gm(e,t=.4){return[e.localZ-e.halfWidth-t,e.localZ+e.halfWidth+t]}function _m(e){return e^=e>>>16,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,e>>>0}function vm(e,t){let n={id:`cityStreet`,weight:1,pavement:[{startPos:0,xPos:0,def:e}],loaders:tm};if(!t)return[n];n.difficulties=t.easyStages;let r={...e,...t.pavement};return[n,{id:`cityStreetHazards`,weight:1,difficulties:t.hazardStages,pavement:[{startPos:0,xPos:0,def:r}],loaders:tm}]}var ym=class{chunkIndex;template;z;rand;crackLists=[];props=[];isFullyCreated=!1;isCrossing=!1;view=null;bagRand=null;constructor(e,t,n,r){this.chunkIndex=e,this.z=t,this.template=n,this.rand=r}coinBagRoll(){return this.bagRand??=new cu(this.chunkIndex^1540483477),this.bagRand.nextDouble()}build(e,t,n){for(let n of this.template.pavement)this.placePavers(new pm(n.def),n.startPos,n.xPos,e,t);if(this.props=om(this.chunkIndex,this.template.loaders),this.isCrossing&&n){let[e,t]=gm(n,0);this.props=this.props.filter(n=>{let r=n.asset.size.z*Math.abs(n.scale.z)/2;return!(n.position.z+r>e&&n.position.z-r<t&&n.position.x<2)})}this.isFullyCreated=!0}placePavers(e,t,n,r,i){let a=e.createCracks(this.rand,r,this,t,n,i);if(!a)return;let o=this.crackLists.find(e=>e.ground===r);o||(o={ground:r,first:null,last:null},this.crackLists.push(o));for(let t=a.first;t&&((!o.first||t.crackIndex<o.first.crackIndex)&&(o.first=t),(!o.last||t.crackIndex>o.last.crackIndex)&&(o.last=t),r.allowCoins||(t.hasCoin=t.isCoinBag=!1),t.customObject===null&&!t.isTimedPaver&&(t.customPaverColorIndex=e.def.pavementMeshIndex),t!==a.last);t=t.nextCrack);}*cracks(e){for(let t of this.crackLists)if(!(e&&t.ground!==e)&&t.first&&t.last)for(let e=t.first;e&&(yield e,e!==t.last);e=e.nextCrack);}destroy(){for(let e of this.crackLists){if(e.first&&e.last){let t=[...this.cracks(e.ground)];for(let n of t)e.ground.destroyCrack(n)}e.first=e.last=null}this.crackLists.length=0,this.props=[],this.isFullyCreated=!1}},bm=class{world;ground;chunks=[];templates;ctx;baseIndex=0;tuning;onCreate;onDestroy;constructor(e){this.world=e.world,this.tuning=e.tuning,this.ground=new Hu(e.world,0);let t=e.tuning.hazards;this.templates=e.templates??vm(e.tuning.pavement,t.enabled?{pavement:t.pavement,easyStages:t.easyStages,hazardStages:t.hazardStages}:null),this.onCreate=e.onCreate,this.onDestroy=e.onDestroy,this.ctx={world:e.world,timedPavers:e.tuning.timedPavers,obstacleStatsCount:e.tuning.obstacleStatsCount,distanceReached:e.tuning.level.distanceReached,coinDoublerOwned:e.tuning.level.coinDoublerOwned,coinBagRoll:e=>e.coinBagRoll?e.coinBagRoll():Math.random(),widenTntGap:e.tuning.hazards.enabled&&e.tuning.hazards.widenTntGap}}minChunkToLoad(e){if(this.world.cfg.forceNumberOfChunksToLoad===1)return Math.max(e,0);let t=e=>this.world.environmentForChunk(e),n=Math.max(0,t(e).chunksRequiredBefore,t(e-1).chunksRequiredBefore,t(e+1).chunksRequiredBefore-1);return Math.max(0,e-n)}maxChunkToLoad(e){if(this.world.cfg.forceNumberOfChunksToLoad===1)return Math.max(e,0);let t=e=>this.world.environmentForChunk(e),n=Math.max(0,t(e).chunksRequiredAfter,t(e-1).chunksRequiredAfter-1,t(e+1).chunksRequiredAfter);return Math.max(0,e+n)}window(e){let t=this.world.chunkAtZ(e,this.baseIndex);return[this.minChunkToLoad(t),this.maxChunkToLoad(t)]}getChunkAtIndex(e){return this.chunks.find(t=>t.chunkIndex===e)??null}isChunkCompleteAtPos(e){return!!this.getChunkAtIndex(this.world.chunkAtZ(e,this.baseIndex))?.isFullyCreated}allChunksAreLoaded(e){let[t,n]=this.window(this.world.cfg.forceNumberOfChunksToLoad>0?0:e);for(let e=t;e<=n;e++)if(!this.getChunkAtIndex(e)?.isFullyCreated)return!1;return!0}update(e){let[t,n]=this.window(e);for(let e=t;e<=n;e++)this.getChunkAtIndex(e)||this.createChunk(e);this.tuning.level.unloadOutsideWindowEveryUpdate&&this.destroyOutside(t,n)}createChunk(e){let t=Su(e),n=this.world.difficultyForChunk(e)?.name,r=rm(this.templates.map(e=>({item:e,chance:!e.difficulties||n&&e.difficulties.includes(n)?e.weight:0})),pu(t));if(!r)return null;let i=new ym(e,this.world.chunkZ(e,this.baseIndex),r,t);return i.isCrossing=hm(e,this.tuning.cars.crossing),this.chunks.push(i),i.build(this.ground,this.ctx,this.tuning.cars.crossing),this.onCreate?.(i),i}onCheckpointChange(e){let[t,n]=this.window(e);this.destroyOutside(t,n)}setBaseChunkIndex(e,t){let n=(e-this.baseIndex)*this.world.chunkLength;this.baseIndex=e;let r=this.minChunkToLoad(e),i=this.maxChunkToLoad(e);for(let e=this.chunks.length-1;e>=0;e--){let a=this.chunks[e];a.z-=n,(t||a.chunkIndex<r||a.chunkIndex>i)&&this.destroyAt(e)}}destroyAll(){for(let e=this.chunks.length-1;e>=0;e--)this.destroyAt(e)}destroyOutside(e,t){for(let n=this.chunks.length-1;n>=0;n--){let r=this.chunks[n];(r.chunkIndex<e||r.chunkIndex>t)&&this.destroyAt(n)}}destroyAt(e){let t=this.chunks[e];this.chunks.splice(e,1),t.destroy(),this.onDestroy?.(t)}},xm=new W;function Sm(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;xm.copy(t),xm[r]=0,xm.normalize();let l=.5*o/(o+s),u=1-xm.angleTo(e)/c;return Math.sign(xm[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Cm=class e extends ca{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new W,c=new W,l=new W(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new W,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Sm(m,c,`z`,`y`,i,n),f[a+1]=1-Sm(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Sm(m,c,`z`,`y`,i,n),f[a+1]=1-Sm(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Sm(m,c,`x`,`z`,i,e),f[a+1]=Sm(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Sm(m,c,`x`,`z`,i,e),f[a+1]=1-Sm(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Sm(m,c,`x`,`y`,i,e),f[a+1]=1-Sm(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Sm(m,c,`x`,`y`,i,e),f[a+1]=1-Sm(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function wm(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new kr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Tm(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Tm(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Tm(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new mr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Em=e=>-e,Dm={plain:`#f7f6f2`,slab:`#f8f7f3`,slabWarm:`#f7f1e6`,slabWorn:`#eeedea`,slabDark:`#e6e7ec`,timed:`#e0a96d`},Om={laneBed:`#2a2433`,sidewalk:`#e7b9a0`,brick:[`#d99a7e`,`#cf8c72`,`#e3a98d`,`#c98f86`],sidewalkLilac:`#c9bfd6`,sidewalkFar:`#e2b49c`,kerb:`#f1f1f4`,road:`#4a4c6e`,roadDash:`#f1efe8`},km=[`#c8283a`,`#b5743a`,`#2e6f8e`,`#3f7d4e`],Am=-.05,jm=Pu-Am,Mm=4,Nm=2;function Pm(t){let n=document.createElement(`canvas`);n.width=256,n.height=256;let r=n.getContext(`2d`);r.fillStyle=t,r.fillRect(0,0,256,256),r.fillStyle=`rgba(0,0,0,0.07)`;for(let e=0;e<256;e+=8)r.fillRect(0,e,256,2);for(let e=0;e<Mm;e++)for(let t=0;t<Nm;t++){let n=e*64,i=t*128;for(let[e,t]of Fm)r.fillStyle=`#f6f5f8`,r.fillRect(n+e-3,i+t-5,24,42),r.fillRect(n+e-5,i+t+35,28,4),r.fillStyle=`#1f3c7c`,r.fillRect(n+e,i+t,18,34),r.fillStyle=`#f6f5f8`,r.fillRect(n+e+8,i+t,2,34),r.fillRect(n+e,i+t+16,18,2),r.fillStyle=`rgba(255,255,255,0.22)`,r.fillRect(n+e+2,i+t+2,4,12)}let i=new ia(n);return i.wrapS=i.wrapT=e,i.colorSpace=Ie,i.anisotropy=4,i}var Fm=[[10,22],[36,22],[10,86],[36,86]];function Im(){let t=document.createElement(`canvas`);t.width=256,t.height=256;let n=t.getContext(`2d`);n.fillStyle=`#000000`,n.fillRect(0,0,256,256);let r=977,i=()=>(r=r*16807%2147483647)/2147483647;for(let e=0;e<Mm;e++)for(let t=0;t<Nm;t++)for(let[r,a]of Fm)i()<.42&&(n.fillStyle=i()<.75?`#ffd27a`:`#cfe0ff`,n.fillRect(e*64+r,t*128+a,18,34));let a=new ia(t);return a.wrapS=a.wrapT=e,a.colorSpace=Ie,a}function Lm(e,t=0){let n=e.getAttribute(`position`),r=e.getAttribute(`normal`),i=new Float32Array(n.count*3);for(let e=0;e<n.count;e++){let a=r?r.getY(e):1,o=n.getY(e)-t,s;s=a>.6?1:a<-.6?.55:.74+.26*Dt.smoothstep(o,0,1.2),i[e*3]=i[e*3+1]=i[e*3+2]=s}e.setAttribute(`color`,new mr(i,3))}var Rm=class{box=new ca(1,1,1);cyl=new la(.5,.5,1,10);ico=new fa(.5,1);slab=(()=>{let e=new Cm(1,1,1,2,.04),t=e.getAttribute(`position`),n=e.getAttribute(`normal`),r=new Float32Array(t.count*3);for(let e=0;e<t.count;e++){let i=n.getY(e),a=i>.7?1:i<-.7?.5:.62+.3*(t.getY(e)+.5);r[e*3]=r[e*3+1]=r[e*3+2]=a}return e.setAttribute(`color`,new mr(r,3)),e})();mats=new Map;glowTex=Im();facades=new Map;lampHead=$l(new Ta({color:`#fff3c4`,emissive:new K(`#ffd98f`),emissiveIntensity:.15,vertexColors:!0}));mat(e,t={}){let n=e+(t.emissive??``),r=this.mats.get(n);return r||(r=$l(new Ta({color:e,vertexColors:!0})),t.emissive&&(r.emissive=new K(t.emissive)),this.mats.set(n,r)),r}facade(e){let t=this.facades.get(e);return t||(t=$l(new Ta({color:`#ffffff`,map:Pm(e),emissiveMap:this.glowTex,emissive:new K(`#ffffff`),emissiveIntensity:0,vertexColors:!0})),this.facades.set(e,t)),t}setNightLight(e){this.lampHead.emissiveIntensity=.15+1.8*e;for(let t of this.facades.values())t.emissiveIntensity=.85*e}},zm=class{root=new En;shared=new Rm;ground;pavers;paverVersion=-1;tmpM=new Zt;tmpC=new K;views=new Map;lampsByChunk=new Map;lamps=[];lampVersion=0;crossing;constructor(e,t,n=null){this.ground=t,this.crossing=n,this.root.name=`level`,e.add(this.root),this.pavers=this.makePaverMesh(256),this.root.add(Vm(this.shared))}makePaverMesh(e){let t=new Ai(this.shared.slab,$l(new Ta({color:`#ffffff`,vertexColors:!0})),e);return t.name=`pavers`,t.castShadow=!0,t.receiveShadow=!0,t.count=0,t.frustumCulled=!1,this.root.add(t),t}sync(){if(this.ground.version===this.paverVersion)return;this.paverVersion=this.ground.version;let e=this.ground.count;e>this.pavers.instanceMatrix.count&&(this.root.remove(this.pavers),this.pavers.dispose(),this.pavers=this.makePaverMesh(Math.max(e,this.pavers.instanceMatrix.count*2)));let t=0;for(let e of this.ground)e.isTimedPaver||this.writePaver(t++,e);this.pavers.count=t,this.pavers.instanceMatrix.needsUpdate=!0,this.pavers.instanceColor&&(this.pavers.instanceColor.needsUpdate=!0)}writePaver(e,t){let n=t.customObject?t.scale.x*t.width:t.width;this.tmpM.makeScale(n,jm,t.length),this.tmpM.setPosition(Em(t.xPos),Am+jm/2,t.maxPos+t.length/2),this.pavers.setMatrixAt(e,this.tmpM);let r=t.isTimedPaver?`timed`:t.customObject??`plain`;this.tmpC.set(Dm[r]??Dm.plain);let i=t.crackIndex*2654435761>>>0,a=i%1e3/1e3,o=(i>>>10)%1e3/1e3-.5;this.tmpC.multiplyScalar(.93+.1*a),this.tmpC.r*=1+.025*o,this.tmpC.b*=1-.025*o,this.pavers.setColorAt(e,this.tmpC)}onChunkCreated(e){let t=new Bm(this.shared);Hm(t,e,e.isCrossing&&this.crossing?gm(this.crossing,0):null);for(let n of e.props)Um(t,n);let n=t.finish();n.name=`chunk${e.chunkIndex}`,n.position.z=e.z,this.root.add(n),this.views.set(e,n);let r=[];for(let t of e.props)t.asset.kind===`lamp`&&r.push(new W(Em(t.position.x)-.6,t.position.y+3.08*Math.abs(t.scale.y),e.z+t.position.z));this.lampsByChunk.set(e,r),this.rebuildLamps()}rebuildLamps(){this.lamps=[...this.lampsByChunk.values()].flat(),this.lampVersion++}setNightLight(e){this.shared.setNightLight(e)}onChunkDestroyed(e){let t=this.views.get(e);t&&(this.views.delete(e),this.lampsByChunk.delete(e),this.rebuildLamps(),this.root.remove(t),t.traverse(e=>{e.isMesh&&e.geometry.dispose()}))}syncChunkPositions(){for(let[e,t]of this.views)t.position.z=e.z}get chunkViewCount(){return this.views.size}},Bm=class{buckets=new Map;m=new Zt;q=new Ot;e=new cn;sh;origin=new W;constructor(e){this.sh=e}add(e,t,n,r,i,a,o,s,c,l=!0,u=0){let d=this.buckets.get(e);d||(d={material:t,parts:[],castShadow:l},this.buckets.set(e,d));let f=n.index?n.toNonIndexed():n.clone();this.q.setFromEuler(this.e.set(u,0,0)),this.m.compose(new W(this.origin.x+o,this.origin.y+s,this.origin.z+c),this.q,new W(r,i,a)),f.applyMatrix4(this.m),f.getAttribute(`uv`)||f.setAttribute(`uv`,new _r(new Float32Array(f.getAttribute(`position`).count*2),2)),Lm(f,Math.min(this.origin.y,0)-.08),d.parts.push(f)}color(e,t,n,r,i,a,o,s,c=!0,l=0,u){this.add(`c${e}${u??``}${c?`s`:``}`,this.sh.mat(e,{emissive:u}),t,n,r,i,a,o,s,c,l)}street(e,t,n,r,i,a,o){this.color(e,this.sh.box,n-t,i-r,o-a,Em((t+n)/2),(r+i)/2,(a+o)/2,!1)}finish(){let e=new En;for(let t of this.buckets.values()){let n=wm(t.parts,!1);for(let e of t.parts)e.dispose();if(!n)continue;n.computeBoundingSphere();let r=new q(n,t.material);r.castShadow=t.castShadow,r.receiveShadow=!0,e.add(r)}return e}};function Vm(e){let t=new Bm(e),n=em;t.origin.set(0,0,0),t.street(Om.sidewalk,n.sidewalkInnerX,n.kerbX,-.08,n.sidewalkY,-30,0),t.street(Om.sidewalkLilac,n.sidewalkInnerX,n.sidewalkInnerX+.7,n.sidewalkY,n.sidewalkY+.006,-30,0),t.street(Om.kerb,n.kerbX-.12,n.kerbX+n.kerbWidth,n.roadY-.05,n.sidewalkY+.03,-30,0),t.street(Om.road,n.kerbX+n.kerbWidth,n.roadFarX-n.kerbWidth,n.roadY-.1,n.roadY,-30,0),t.street(Om.kerb,n.roadFarX-n.kerbWidth,n.roadFarX,n.roadY-.05,n.sidewalkY+.03,-30,0),t.street(Om.sidewalkFar,n.roadFarX,n.farSidewalkX,-.08,n.sidewalkY,-30,0),[`bldPink`,`bldBlue`,`bldBrick`,`bldCream`,`bldTeal`,`bldBlue`].forEach((e,r)=>{let i={asset:Xp[e],loader:`approach`,slot:r,position:{x:n.sidewalkInnerX-3,y:0,z:-2.5-r*5},scale:{x:1,y:1,z:1}};Um(t,i)});let r=t.finish();return r.name=`approach`,r}function Hm(e,t,n=null){let r=t.template.pavement[0]?.def.totalLength??15,i=em,a=i.laneHalfWidth+.04;e.origin.set(0,0,0);let o=n?[[0,n[0]],[n[1],r]]:[[0,r]];e.street(Om.laneBed,-a,a,-.08,0,0,r);for(let[t,n]of o)e.street(Om.sidewalk,i.sidewalkInnerX,-a,-.08,i.sidewalkY,t,n),e.street(Om.sidewalk,a,i.kerbX,-.08,i.sidewalkY,t,n),e.street(Om.kerb,i.kerbX-.12,i.kerbX+i.kerbWidth,i.roadY-.05,i.sidewalkY+.03,t,n),e.street(Om.sidewalkLilac,i.sidewalkInnerX,i.sidewalkInnerX+.7,i.sidewalkY,i.sidewalkY+.006,t,n);if(n){let[t,r]=n;e.street(Om.road,-32,i.kerbX+i.kerbWidth,i.roadY-.1,i.roadY,t,r);for(let[n,o]of[[t-.18,t],[r,r+.18]])e.street(Om.kerb,i.sidewalkInnerX-.4,-a,i.roadY-.05,i.sidewalkY+.03,n,o),e.street(Om.kerb,a,i.kerbX+i.kerbWidth,i.roadY-.05,i.sidewalkY+.03,n,o),e.street(Om.kerb,-32,i.sidewalkInnerX-.4,i.roadY-.05,i.sidewalkY+.03,n,o);for(let n=t+.25;n+.42<=r-.15;n+=.8)e.street(Om.roadDash,i.sidewalkInnerX+.3,-a-.12,i.roadY,i.roadY+.008,n,n+.42),e.street(Om.roadDash,a+.12,i.kerbX-.05,i.roadY,i.roadY+.008,n,n+.42);e.street(Om.roadDash,-4.25,-4.05,i.roadY,i.roadY+.008,t+.2,r-.2);for(let n=-30;n<-5;n+=2.5)e.street(Om.roadDash,n,n+1.2,i.roadY,i.roadY+.006,(t+r)/2-.06,(t+r)/2+.06)}e.street(Om.road,i.kerbX+i.kerbWidth,i.roadFarX-i.kerbWidth,i.roadY-.1,i.roadY,0,r);for(let t=1;t<r;t+=3.75)e.street(Om.roadDash,i.roadCenterX-.07,i.roadCenterX+.07,i.roadY,i.roadY+.006,t,t+1.8);e.street(Om.kerb,i.roadFarX-i.kerbWidth,i.roadFarX,i.roadY-.05,i.sidewalkY+.03,0,r),e.street(Om.sidewalkFar,i.roadFarX,i.farSidewalkX,-.08,i.sidewalkY,0,r);let s=t.chunkIndex*2654435761+12345>>>0,c=()=>(s=Math.imul(s^s>>>15,2246822507)+2654435769>>>0,s/4294967296);for(let[t,o,s]of[[i.sidewalkInnerX+.1,-a-.12,26],[a+.12,i.kerbX-.1,16]])for(let a=0;a<s;a++){let a=.22+c()*.12,s=.12+c()*.05,l=t+c()*(o-t-a),u=c()*(r-s),d=Om.brick[Math.floor(c()*Om.brick.length)];n&&u+s>n[0]&&u<n[1]||e.street(d,l,l+a,i.sidewalkY,i.sidewalkY+.004,u,u+s)}}function Um(e,t){let n=t.asset,r=e.sh,i=t.scale;switch(e.origin.set(Em(t.position.x),t.position.y,t.position.z),n.kind){case`building`:{let t=n.size.x*Math.abs(i.x),a=n.size.y*Math.abs(i.y),o=n.size.z*Math.abs(i.z),s=new ca(t,a,o),c=s.getAttribute(`uv`),l=[o,o,t,t,t,t];for(let e=0;e<6;e++){let t=e!==2&&e!==3,n=t?Math.max(1,Math.round(l[e]/1.6))/Mm:1/Mm,r=t?Math.max(1,Math.round(a/3))/Nm:1/Nm;for(let t=0;t<4;t++)c.setXY(e*4+t,c.getX(e*4+t)*n,c.getY(e*4+t)*r)}e.add(`f${n.color}`,r.facade(n.color),s,1,1,1,0,a/2,0),s.dispose(),e.color(n.accent,r.box,t+.3,.22,o+.12,0,a+.11,0),e.color(n.accent,r.box,t+.14,.3,o+.04,0,a-.15,0),e.color(`#cdc4d9`,r.box,t+.06,.8,o+.06,0,.4,0);let u=e.origin.x>0?-1:1,d=u*t/2,f=-o/2+1.1;e.color(`#f4f1ec`,r.box,.08,2.3,1.2,d+u*.03,1.95,f),e.color(km[Math.abs(Math.round(e.origin.z*7+a))%km.length],r.box,.1,2,.9,d+u*.05,1.85,f),e.color(`#bdb3c9`,r.box,1.1,.85,1.5,d+u*.55,.42,f);for(let t of[-.7,.7]){e.color(`#4a3326`,r.box,1.1,.06,.06,d+u*.55,1.75,f+t);for(let n=0;n<4;n++)e.color(`#4a3326`,r.box,.04,.9,.04,d+u*(.12+n*.3),1.3,f+t)}break}case`lamp`:{let t=Math.abs(i.y);e.color(n.color,r.cyl,.12,3.2*t,.12,0,1.6*t,0),e.color(n.color,r.box,.7,.07,.07,-.3,3.15*t,0),e.add(`lampHead`,r.lampHead,r.box,.34,.1,.22,-.6,3.08*t,0),e.color(n.color,r.cyl,.22,.2,.22,0,.1,0);break}case`tree`:{let t=Math.abs(i.y);e.color(n.color,r.cyl,.16*t,1.5*t,.16*t,0,.75*t,0),e.color(n.accent,r.ico,1.5*t,1.6*t,1.5*t,0,2*t,0),e.color(`#6f5a46`,r.box,.9,.04,.9,0,.05,0,!1);break}case`bin`:{let t=Math.abs(i.y);e.color(n.color,r.box,.48*t,.8*t,.48*t,0,.4*t,0),e.color(n.accent,r.box,.54*t,.1,.54*t,0,.72*t,0),e.color(n.color,r.box,.5*t,.06,.5*t,0,.8*t,0);break}case`bench`:e.color(n.color,r.box,.45,.06,1.6,0,.45,0),e.color(n.color,r.box,.06,.4,1.6,.22,.7,0),e.color(n.accent,r.box,.4,.45,.06,0,.22,-.7),e.color(n.accent,r.box,.4,.45,.06,0,.22,.7);break;case`hydrant`:e.color(n.color,r.cyl,.24,.55,.24,0,.3,0),e.color(n.color,r.ico,.26,.2,.26,0,.6,0),e.color(n.accent,r.cyl,.1,.36,.1,0,.38,0,!0,Math.PI/2)}}var Wm={PAVER:0,COLLECTED:1,TIMED:2,COLLECTEDTIME:3},Gm={OFF:0,NORMAL:1,UNTIMED:2,SPEEDUP:3},Km=(e,t,n)=>e+(t-e)*n,qm=e=>e<0?0:e>1?1:e,Jm=(e,t,n)=>e===t?0:qm((n-e)/(t-e));function Ym(e){let t=e.comboCountOnStep,n=e.prevCrack;return t===0&&n&&n.stepCount>0&&(t=n.comboCountOnStep+1),t>=3?t-2:0}function Xm(e){let t=Ym(e);return t>0&&t%3==0?Math.min(6,Math.trunc(t/3)+1):1}function Zm(e){return e.cashInAtTime>0?1:Km(.7,.4,Jm(4,10,e.comboCountOnStep))}function Qm(e,t){return e.length?e[Math.min(Math.max(t-1,0),e.length-1)]:`#ffffff`}function $m(e,t){let n=e.cashInAtTime;if(n>0&&t-n>.25){if(t-n>1)return 1;let e=(t-n)*3;if(e-Math.floor(e)>.5)return 1}if(Ym(e)===0||e.willBeHitByFoot)return 1;let r=e.nextCrack,i;return i=e.stepCount<1?1:Km(0,-1,Jm(.1,0,(r&&r.stepCount>0?r.firstSteppedOnAtTime:t)-e.firstSteppedOnAtTime)),r&&r.stepCount>0&&r.comboIndexOnStep===e.comboIndexOnStep&&(i=Km(i,0,Jm(0,.1,t-r.firstSteppedOnAtTime))),e.loseComboAtTime>0&&(i=Km(i,1,Jm(e.loseComboAtTime,e.loseComboAtTime+.1,n>0?n:t))),n>0&&(i=Km(i,0,Jm(n,n+.1,t))),i}var eh=class{world;mScore=0;best=0;bestWasZero=!0;isNewBest=!1;events=[];tick=0;constructor(e,t=0){this.world=e,this.best=t,this.bestWasZero=t===0}get score(){return this.mScore}set score(e){e!==this.mScore&&(this.mScore=e,this.world.cfg.scoreType!==Wm.TIMED&&e>this.best&&(this.best=e,!this.bestWasZero&&!this.isNewBest&&(this.isNewBest=!0,this.events.push({kind:`newBest`,tick:this.tick,score:e}))))}addStep(e){this.score+=e}giveCombo(e,t,n){e>0&&this.events.push({kind:`combo`,tick:this.tick,bonus:e,comboNumber:t,score:this.mScore+e,z:n}),this.score+=e}resetScore(){this.mScore=0,this.isNewBest=!1,this.bestWasZero=this.best===0}},th=class{world;score;time;lastLevelRank=0;checkpointsCleared=0;coinsCollected=0;currentGoldCheckpointsInARow=0;bestGoldCheckpointsInARow=0;constructor(e,t,n){this.world=e,this.score=t,this.time=n}distanceReached(e,t){if(e.currentDistanceReached>=0)return e.currentDistanceReached;let n=t.furthestCrackBeforePosition(e.averageFootZ);return n?n.distanceReached(this.world):this.world.distanceForZ(e.averageFootZ+.5)}steppedInBetween(e,t){let n=this.world,r=n.cfg,i=this.time(),a=t.ground;t.lastSteppedOnAtTime=i;let o=n.lastCheckpointAt(this.distanceReached(e,a));t.nextCrack&&(e.currentDistanceReached=Math.max(e.currentDistanceReached,t.distanceReached(n)));let s=n.lastCheckpointAt(this.distanceReached(e,a));if(t.stepCount===0){t.firstSteppedOnAtTime=i;let o=e.lastCrackSteppedOver;o&&(t.indexOfTheNextSteppedOnCrack=o.crackIndex,o.firstSteppedOnNextCrackAtTime=i),t.comboCountOnStep=1;let s=t.willBeHitByFoot||(t.nextCrack?.willBeHitByFoot??!1)||e.hasFallenOver,c=t.prevCrack;if(c&&!s&&c.stepCount===1&&c.loseComboAtTime<=0&&(t.comboCountOnStep=c.comboCountOnStep+1),t.comboCountOnStep===1&&(this.loseCombo(e),a.comboIndex++),t.comboIndexOnStep=a.comboIndex,(r.scoreType===Wm.PAVER||r.scoreType===Wm.TIMED)&&!s&&t.nextCrack&&r.scoreStartDistance<t.distanceReached(n)){let n=Xm(t),a=Ym(t);if(n>1){for(let e=t;e&&e.crackIndex>=0&&e.comboIndexOnStep===t.comboIndexOnStep&&e.cashInAtTime===0;e=e.prev)e.cashInAtTime=i;r.comboType===Gm.SPEEDUP?(e.currentSpeedMultiplier=1.07**Math.max(Math.trunc(a/3),0),this.score.events.push({kind:`speedup`,tick:this.score.tick,comboNumber:a,multiplier:e.currentSpeedMultiplier,z:t.maxPos+t.length})):this.score.giveCombo(n-1,a,t.maxPos+t.length)}this.score.addStep(1),this.score.events.push({kind:`step`,tick:this.score.tick,crackIndex:t.crackIndex,comboNumber:a,pointsValue:n,score:this.score.score,z:t.maxPos+t.length/2})}}return t.stepCount===0&&this.collectCoin(t),e.lastCrackSteppedOver=t,t.stepCount++,(t.stepCount>1||r.comboType===Gm.OFF)&&this.loseCombo(e),s!==o&&(this.checkpointCrossed(t,s),!0)}loseCombo(e){let t=e.lastCrackSteppedOver;if(t){let e=t.comboIndexOnStep,n=this.time(),r=.1,i=!1,a=0;for(let o=t;o&&o.crackIndex>=0&&o.comboIndexOnStep===e;o=o.prev){let e=o.loseComboAtTime>0?Math.min(o.loseComboAtTime,n):n;o.loseComboAtTime<=0&&(i=!0),o.loseComboAtTime=e,n+=r,r*=.75,a++}i&&t.stepCount>0&&this.score.events.push({kind:`loseCombo`,tick:this.score.tick,length:a,comboNumber:Ym(t)})}this.world.cfg.comboType===Gm.SPEEDUP&&(e.currentSpeedMultiplier=1)}checkComboTimeout(e){let t=this.world.cfg.comboType;if(t!==Gm.NORMAL&&t!==Gm.SPEEDUP)return;let n=e.lastCrackSteppedOver;n&&n.stepCount===1&&n.firstStartedLiftedNextFootAtTime<=0&&this.time()-n.firstSteppedOnAtTime>Zm(n)&&this.loseCombo(e)}startedLiftingNextFoot(e){e&&e.firstStartedLiftedNextFootAtTime<=0&&(e.firstStartedLiftedNextFootAtTime=this.time())}checkpointCrossed(e,t){e.comboIndexOnStep>1&&(this.lastLevelRank=1,this.currentGoldCheckpointsInARow++,this.bestGoldCheckpointsInARow=Math.max(this.bestGoldCheckpointsInARow,this.currentGoldCheckpointsInARow)),this.checkpointsCleared++,this.score.events.push({kind:`checkpoint`,tick:this.score.tick,distance:t,gold:this.lastLevelRank>0})}collectCoin(e){if(!e.hasCoin)return;let t=e.isCoinBag?6:1;e.hasCoin=!1,this.addCoins(t,e.isCoinBag?`bag`:`paver`,e.xPos,nh,e.maxPos+e.length/2)}addCoins(e,t,n,r,i){e<=0||(this.coinsCollected+=e,this.score.events.push({kind:`coin`,tick:this.score.tick,amount:e,source:t,x:n,y:r,z:i}))}resetRun(){this.score.resetScore(),this.checkpointsCleared=0,this.coinsCollected=0}},nh=.0875,rh=180/Math.PI,ih=(e,t,n)=>e<t?t:e>n?n:e,ah=(e,t,n)=>e===t?0:ih((n-e)/(t-e),0,1);function oh(e,t){let n=(t-e)%360;return n>180&&(n-=360),n<=-180&&(n+=360),n}var sh=(e,t)=>t**(2*pu(e)-1),ch=(e,t)=>Math.atan2(e,t)*rh;function lh(e,t){let n=e.reduce((e,t)=>e|1<<t,0),r=t.reduce((e,t)=>e|1<<t,0);return(n&65535)<<16|r&65535}var uh=lh([Uu.Car],[Uu.Player,Uu.PlayerCorpse]),dh=lh([Uu.Car],[Uu.Car,Uu.PlayerCorpse]),fh=lh([Uu.Car],[Uu.Player,Uu.PlayerCorpse,Uu.Car,Uu.PlayerChaser]),ph=class{id;model;body;collider;pos;yaw;speed;isOnMainRoad;hasDecidedToCrossCrossing=!1;hasStoppedAtCrossingForPlayerForTime=0;stuckBehindCar=null;isBehindPlayerCorpse=!1;timeStuckAtLowSpeed=0;timeStuckBehindCar=0;capsizedTime=0;didHitPlayer=!1;crossZOverride=null;frozen=!1;spawnChunk=-1;phase=`main`;throttle=0;heldByPlayer=0;touching=new Set;hitTick=-1;prevPos;prevYaw;constructor(e,t,n,r,i,a,o){this.id=e,this.model=t,this.body=n,this.collider=r,this.pos={...i},this.yaw=a,this.speed=o,this.isOnMainRoad=i.x>.5,this.prevPos={...i},this.prevYaw=a}get fwd(){let e=this.yaw/rh;return{x:Math.sin(e),y:0,z:Math.cos(e)}}frontAxle(e){let t=this.fwd;return{x:this.pos.x+t.x*e.frontAxleZ,y:this.pos.y,z:this.pos.z+t.z*e.frontAxleZ}}rotation(){let e=this.yaw/rh/2;return{x:0,y:Math.sin(e),z:0,w:Math.cos(e)}}},mh=class{env;def;cars=[];nextId=1;spawners=new Map;byCollider=new Map;spawned=0;despawned=0;constructor(e){this.env=e,this.def=e.tuning.cars}spawner(e,t){let n=this.spawners.get(e);if(!n){let r=new cu(this.def.seed*7919+t*104729|0);n={key:e,rng:r,timer:.75+.25*pu(r),variance:1},this.spawners.set(e,n)}return n}due(e,t,n,r){return e.timer+=t*Math.min(r,.05)*e.variance,e.timer>=1&&(--e.timer,e.variance=sh(e.rng,n),!0)}pickModel(e){return rm(this.def.models.map((e,t)=>({item:t,chance:e.weight})),pu(e))??0}spawn(e){let{R:t,world:n}=this.env.physics,r=this.def,i={x:e.x,y:r.centerY+.0625,z:e.z},a=n.createRigidBody(t.RigidBodyDesc.kinematicPositionBased().setTranslation(i.x,i.y,i.z)),o=r.halfExtents,s=n.createCollider(t.ColliderDesc.cuboid(o.x,o.y,o.z).setCollisionGroups(fh).setFriction(.8).setRestitution(.1),a),c=new ph(this.nextId++,e.model??0,a,s,i,e.yaw,e.speed);return a.setRotation(c.rotation(),!0),c.crossZOverride=e.crossZ??null,e.decided&&(c.hasDecidedToCrossCrossing=!0),this.cars.push(c),this.byCollider.set(s.handle,c),this.spawned++,this.env.onEvent?.({kind:`spawn`,car:c}),c}remove(e){let t=this.cars.indexOf(e);if(!(t<0)){this.cars.splice(t,1),this.byCollider.delete(e.collider.handle);for(let t of this.cars)t.stuckBehindCar===e&&(t.stuckBehindCar=null);this.env.physics.world.removeRigidBody(e.body),this.despawned++}}removeAll(){for(let e=this.cars.length-1;e>=0;e--)this.remove(this.cars[e])}updateSpawners(e){let t=this.def,n=this.env.biped().averageFootPos.z,r=t.mainSpawn,i=this.spawner(`main`,1);if(this.due(i,r.rate,r.variance,e)){let e=n-(r.behindMin+(r.behindMax-r.behindMin)*pu(i.rng)),a=this.pickModel(i.rng),o=this.cars.filter(e=>e.isOnMainRoad).length,s=this.cars.every(n=>Math.hypot(n.pos.x-t.mainRoadX,n.pos.z-e)>r.clearRadius);o<r.maxCars&&s?this.spawn({x:t.mainRoadX,z:e,yaw:0,speed:r.initialSpeed,model:a}):i.timer=1}if(this.env.playerHasDiedThisRound())return;let a=t.sideSpawn,o=this.env.world.chunkLength;for(let r of this.env.crossingChunks()){if(n>r.z+this.env.tuning.cars.crossing.localZ+2)continue;let i=this.spawner(`side${r.index}`,1e3+r.index);if(!this.due(i,a.rate,a.variance,e))continue;let s=r.z+a.localZMin+(a.localZMax-a.localZMin)*pu(i.rng),c=this.pickModel(i.rng),l=this.cars.filter(e=>e.pos.x<.5&&Math.floor(e.pos.z/o)===Math.floor(s/o)).length,u=this.cars.every(e=>Math.hypot(e.pos.x-t.sideRoadX,e.pos.z-s)>5);if(l<a.maxPerChunk&&u){let e=this.spawn({x:t.sideRoadX,z:s,yaw:180,speed:a.initialSpeed,model:c});e.spawnChunk=r.index}else i.timer=1}}fixedUpdate(){let e=Td;if(this.def.enabled){this.updateSpawners(e);for(let t of[...this.cars])this.carTick(t,e)}}choosePath(e,t){let n=this.def,r=this.env.world.chunkLength,i=e.frontAxle(n),a={x:i.x,y:0,z:i.z},o={x:0,y:0,z:1},s=0;if(e.phase=`main`,!e.isOnMainRoad){let c=e.crossZOverride??Math.trunc(i.z/r)*r+this.env.tuning.cars.crossing.localZ,l=n.turningCircle,u={x:1,z:c+2},d={x:n.sideRoadX+l,z:c+2};if(s=n.speedCross,o={x:1,y:0,z:0},a={x:i.x,y:0,z:c},e.phase=`approach`,i.x<d.x){if(i.z<d.z){let t=gh(i.x-d.x,i.z-d.z);a={x:d.x+l*t.x,y:0,z:d.z+l*t.z},o=_h(t),e.phase=`turnIn`}else a={x:n.sideRoadX,y:0,z:i.z},o={x:0,y:0,z:-1},s=n.speedSide,e.phase=`side`}else if(i.x>=n.haltX){if(!e.hasDecidedToCrossCrossing)this.decideAtHaltLine(e,c,t),s=0,e.phase=`halt`;else if(i.x>u.x){if(i.z<=u.z){let t=gh(i.x-u.x,i.z-u.z);a={x:u.x+l*t.x,y:0,z:u.z+l*t.z},o=_h(t),e.phase=`turnOut`}else e.isOnMainRoad=!0}else e.phase=`crossing`}}return e.isOnMainRoad&&(o={x:0,y:0,z:1},s=n.speedMain,a={x:n.mainRoadX,y:0,z:i.z},e.phase=`main`),{T:a,D:o,S:s}}decideAtHaltLine(e,t,n){let r=this.def;e.speed*=.98**(n*120);let i=!1;for(let t of this.cars){if(t===e||t.pos.x<=.5)continue;let n=t.pos.z-e.pos.z;n>-r.guardBehind&&n<r.guardAhead&&(i=!0)}let a=this.env.biped(),o=r.playerBand;if(hh(a,t-o,t+o)?(e.hasStoppedAtCrossingForPlayerForTime+=n,e.heldByPlayer+=n,e.hasStoppedAtCrossingForPlayerForTime<r.stopAtCrossingForPlayerForTime&&(i=!0)):e.heldByPlayer=0,e.heldByPlayer>0){let t=e.hasStoppedAtCrossingForPlayerForTime;for(let i of[r.hornAfter,r.stopAtCrossingForPlayerForTime-.4])t>=i&&t-n<i&&this.env.onEvent?.({kind:`horn`,car:e})}i||(e.hasDecidedToCrossCrossing=!0)}carTick(e,t){let n=this.def;if(e.prevPos={...e.pos},e.prevYaw=e.yaw,e.frozen)return;this.env.playerHasDiedThisRound()||(e.didHitPlayer=!1),e.capsizedTime=0,e.stuckBehindCar&&e.stuckBehindCar.stuckBehindCar===e&&(e.stuckBehindCar.stuckBehindCar=null),e.timeStuckBehindCar=e.stuckBehindCar?e.timeStuckBehindCar+t:0;let{T:r,D:i,S:a}=this.choosePath(e,t),o=e.frontAxle(n),s={x:i.z,z:-i.x},c=s.x*(o.x-r.x)+s.z*(o.z-r.z),l=ch(i.x,i.z),u=e.yaw,d=ih(oh(u,l-ih(c*8,-20,20))/25,-1,1),f=0,p=0,m=1;if(!e.isBehindPlayerCorpse&&a>0&&(!e.stuckBehindCar||e.timeStuckBehindCar>=n.stuckPatience)){let e=ah(50,5,Math.abs(oh(l,u)));f=.5+.5*e,p=a*(.6+.4*e),m=0}let h=Math.abs(e.speed),g=f*(p-h)*.3,_=!1;p>2&&h<.2?(e.timeStuckAtLowSpeed+=t,e.timeStuckAtLowSpeed%4>2&&(g=1,_=!0)):e.timeStuckAtLowSpeed=0,e.throttle=ih(g,-1,1);let v=g>0?Math.min(g,1)*n.maxAccel:Math.max(g,-1)*n.maxBrake;m>0&&(v=-Math.min(e.speed/t,n.maxBrake*1.5)),_&&(v+=100/1200),e.speed=ih(e.speed+v*t,0,n.topSpeed);let y=ih(e.speed/n.wheelBase*Math.tan(d*n.maxSteerDeg/rh),-n.maxYawRate,n.maxYawRate);e.yaw+=y*t*rh,e.yaw>180&&(e.yaw-=360),e.yaw<=-180&&(e.yaw+=360);let b=e.fwd;e.pos={x:e.pos.x+b.x*e.speed*t,y:e.pos.y,z:e.pos.z+b.z*e.speed*t},e.body.setNextKinematicTranslation(e.pos),e.body.setNextKinematicRotation(e.rotation());let x=this.env.biped().averageFootPos.z,S=e.isOnMainRoad?e.pos.z>x+n.despawnAhead||e.pos.y<-1||e.capsizedTime>n.capsizeLimit||e.timeStuckAtLowSpeed>n.stuckLimit||e.pos.z<x-n.despawnBehind:x>e.pos.z+n.despawnBehind;e.stuckBehindCar=null,e.isBehindPlayerCorpse=!1,S&&this.remove(e)}postStep(){if(!this.cars.length)return;let{R:e,world:t}=this.env.physics,n=this.def,r=n.halfExtents,i=this.env.ragdoll(),a=new Map;for(let e of i.parts)a.set(e.collider.handle,e);let o=new e.Cuboid(r.x+n.hitInflate,r.y+n.hitInflate,r.z+n.hitInflate),s=n.sensorHalf,c=new e.Cuboid(s.x,s.y,s.z);for(let e of[...this.cars]){let i=e.rotation(),s=e.fwd,l=r.z+n.sensorAhead,u={x:e.pos.x+s.x*l,y:e.pos.y,z:e.pos.z+s.z*l};t.intersectionsWithShape(u,i,c,t=>{let n=this.byCollider.get(t.handle);return n&&n!==e?e.stuckBehindCar=n:a.has(t.handle)&&(e.isBehindPlayerCorpse=!0),!0},void 0,dh,e.collider);let d=new Set,f=!1,p=0,m={x:0,y:0,z:0};if(t.intersectionsWithShape(e.pos,i,o,t=>{let n=a.get(t.handle);if(!n)return!0;if(d.add(t.handle),!e.touching.has(t.handle)){let e=n.pos;m.x+=e.x,m.y+=e.y,m.z+=e.z,p++,n.def.slice===0&&(f=!0)}return!0},void 0,uh),e.touching=d,p>0){e.didHitPlayer=!0;let t={x:m.x/p,y:m.y/p,z:m.z/p},n=this.env.biped().hitByCar(t,f);n&&(e.hitTick=this.env.tick()),this.env.onEvent?.({kind:`hit`,car:e,point:t,killed:n})}}}get waiting(){return this.cars.filter(e=>e.phase===`halt`)}};function hh(e,t,n){let r=e.inFrontFoot,i=e.backFoot;return r.tippyToePos.z>t&&i.heelPos.z<=n}function gh(e,t){let n=Math.hypot(e,t)||1;return{x:e/n,y:0,z:t/n}}function _h(e){return{x:-e.z,y:0,z:e.x}}var vh=class{env;events=[];collapsed=0;explosions=0;constructor(e){this.env=e}push(e){this.events.length<64&&this.events.push(e)}collapse(e){e.isTimedPaver&&!e.isSafePaver&&e.collapsePaverAtTime===0&&(this.env.collectCoin?.(e),e.collapsePaverAtTime=this.env.time()+this.env.tuning.hazards.timedPaverTimeToCollapse,this.push({kind:`timedWobble`,crack:e,z:e.maxPos+e.length/2}))}explode(e){e.explosionStartedAtTime>=0||(e.explosionStartedAtTime=this.env.unscaledTime(),e.crackType===Mu.EXPLOSIVE&&this.push({kind:`tntArmed`,crack:e,z:(e.minPos(this.env.time())+e.maxPos)/2}))}tickStart(){let e=this.env.unscaledTime(),t=this.env.tuning.hazards.tnt;for(let n of this.env.ground()){if(n.crackType!==Mu.EXPLOSIVE||n.explosionStartedAtTime<0||n.hasSpawnedExplosionParticle||e-n.explosionStartedAtTime<t.delay)continue;if(this.env.isDoingDeathSlowdown()){n.explosionStartedAtTime=e-t.postpone;continue}n.hasSpawnedExplosionParticle=!0;let r={x:n.xPos,y:Pu,z:(n.minPos(this.env.time())+n.maxPos)/2};this.blast(r),this.explosions++,this.push({kind:`tntExplode`,crack:n,z:r.z,centre:r})}}blast(e){let t=this.env.tuning.hazards.tnt,n=this.env.biped(),r=n.ragdoll,i={x:e.x,y:e.y-t.upwardsModifier,z:e.z};for(let n of r.parts){n.isKinematic&&r.setKinematic(n,!1,!0);let a=n.com,o=Math.hypot(a.x-e.x,a.y-e.y,a.z-e.z);if(o>=t.radius)continue;let s=a.x-i.x,c=a.y-i.y,l=a.z-i.z,u=Math.hypot(s,c,l)||1;s/=u,c/=u,l/=u;let d=n.body.mass(),f=t.forceLocalPlayer*d**.9*(1-o/t.radius)*Td;n.body.applyImpulse({x:s*f,y:c*f,z:l*f},!0)}n.accelerateForNextNumberOfFrames=0}tickEnd(){let e=this.env.time(),t=this.env.tuning.hazards.timedPaverTimeToOffsetSound;for(let n of this.env.ground())!n.isTimedPaver||n.collapsePaverAtTime<=0||(!n.timePaverSoundPlayed&&e+t>n.collapsePaverAtTime&&(n.timePaverSoundPlayed=!0,this.push({kind:`timedCollapseSound`,crack:n,z:n.maxPos+n.length/2})),e>=n.collapsePaverAtTime&&e-.016666666666666666<n.collapsePaverAtTime&&(this.collapsed++,this.push({kind:`timedCollapsed`,crack:n,z:n.maxPos+n.length/2})))}},yh=class{physics;tuning;placer;world;autoRestart;tick=0;time=0;unscaledTime=0;resetAt=0;input=!1;controller=null;ragdoll;biped;runs=0;deaths=[];bestDistance=0;score;rules;timeScale=1;speedupIndex=0;slowdownStart=-1;paversThisRun=0;totalPavers=0;spawnOverrideZ=null;traffic;trafficEvents=[];specials;lastCheckpoint=0;rewardedCheckpoint=0;opts;heldThisTick=!1;constructor(e){this.opts=e,this.physics=e.physics,this.tuning=e.tuning,this.placer=e.placer,this.world=e.placer.world,this.autoRestart=e.autoRestart??!0,this.bestDistance=Math.max(0,e.bestDistance??0),this.score=new eh(this.world,Math.max(0,e.bestScore??0)),this.rules=new th(this.world,this.score,()=>this.time),this.specials=new vh({tuning:this.tuning,ground:()=>this.placer.ground,biped:()=>this.biped,time:()=>this.time,unscaledTime:()=>this.unscaledTime,isDoingDeathSlowdown:()=>this.isDoingDeathSlowdown,collectCoin:e=>this.rules.collectCoin(e)}),this.traffic=new mh({physics:this.physics,tuning:this.tuning,world:this.world,biped:()=>this.biped,ragdoll:()=>this.ragdoll,crossingChunks:()=>this.placer.chunks.filter(e=>e.isCrossing&&e.isFullyCreated).map(e=>({index:e.chunkIndex,z:e.z})),playerHasDiedThisRound:()=>this.biped.hasFallenOver,tick:()=>this.tick,onEvent:e=>{this.trafficEvents.length<64&&this.trafficEvents.push(e)}}),this.applyLateCoinRules(),this.spawn()}applyLateCoinRules(){if(this.syncCoinDistance(),this.opts.coinDoubler?.()&&!this.placer.ctx.coinDoublerOwned){this.placer.ctx.coinDoublerOwned=!0;for(let e of this.placer.chunks)for(let t of e.cracks(this.placer.ground))t.hasCoin&&!t.isCoinBag&&(t.isCoinBag=e.coinBagRoll()<.2)}}get ground(){return this.placer.ground}spawnPosition(){let e=this.tuning.character.startOffset;if(this.spawnOverrideZ!==null)return{x:e.x,y:e.y,z:this.spawnOverrideZ};let t=this.world.lastCheckpointAt(Math.max(0,this.bestDistance));return{x:e.x,y:e.y,z:e.z+this.world.zForDistance(t)}}syncCoinDistance(){let e=Math.max(0,this.bestDistance);if(!(this.placer.ctx.distanceReached>=e)){this.placer.ctx.distanceReached=e;for(let t of this.placer.ground)t.hasCoin&&this.world.distanceForZ(t.minPos())<=e&&(t.hasCoin=!1)}}spawn(){let e=this.spawnPosition();this.syncCoinDistance(),this.placer.update(e.z),this.lastCheckpoint=this.world.lastCheckpointAt(this.world.distanceForZ(e.z)),this.rewardedCheckpoint=Math.max(this.lastCheckpoint,this.world.lastCheckpointAt(Math.max(0,this.bestDistance)));let t=new cu(this.tuning.game.characterSeed+this.runs*7919|0);this.ragdoll=new Ld(this.physics,this.tuning,e),this.paversThisRun=0,this.resetAt=this.unscaledTime,this.biped=new Ud({tuning:this.tuning,world:this.world,ground:this.placer.ground,rng:t,inputHeld:()=>this.heldThisTick,isInGameplay:()=>!0,unscaledTimeSinceReset:()=>this.unscaledTime-this.resetAt,time:()=>this.time,unscaledTime:()=>this.unscaledTime,rules:this.rules,specialPavers:this.specials,onFootSound:(e,t,n)=>this.opts.onFootSound?.(e,t,n),onCheckpointCrossed:()=>this.checkpointReached(),onStep:(e,t)=>{e.stepCount===1&&(this.paversThisRun++,this.totalPavers++),this.bestDistance=Math.max(this.bestDistance,this.biped.currentDistanceReached),this.opts.onStep?.(e,t)},onDeath:(e,t)=>{this.deaths.push({type:e,name:zd[e],tick:this.tick,soleZ:t.solePos.z,steps:this.paversThisRun,crackIndex:-1})}},this.ragdoll)}checkpointReached(){let e=this.world,t=e.lastCheckpointAt(this.rules.distanceReached(this.biped,this.placer.ground));if(t<=this.rewardedCheckpoint)return;this.rewardedCheckpoint=t;let n=e.cfg,r=this.rules.lastLevelRank>0?n.checkpointGoldCoinsAmount:n.checkpointNormalCoinsAmount;n.everIncreasingCheckpointSize&&(r=Math.min(Math.max(Math.trunc(t/n.checkpointLength/3)+1,1),10)),this.opts.coinDoubler?.()&&(r*=2),this.rules.addCoins(r,`checkpoint`,this.tuning.character.startOffset.x,.5,e.zForDistance(t)+.5)}restart(){this.ragdoll.destroy(),this.traffic.removeAll();for(let e of this.placer.ground)Vu(e,this.world);this.runs++,this.rules.resetRun(),this.spawn(),this.opts.onRestart?.()}get dead(){return this.biped.hasFallenOver}get hasPassedTutorial(){return this.world.cfg.worldType!==0||this.bestDistance>=this.world.chunkLength}get isDoingDeathSlowdown(){let e=this.biped;return e.hasFallenOver&&e.unscaledTimeSinceDeath<xh(this.tuning.game.timeSlowdownCurve)}desiredTimeScale(){let e=this.biped,t=this.world.cfg.incrementalSpeeds,n=e.hasStartedStepping&&!e.hasFallenOver&&t.length?t[Math.min(Math.max(this.speedupIndex,0),t.length-1)]:1;return e.hasFallenOver&&e.deathType!==Rd.Stretch&&(this.slowdownStart=Math.max(this.slowdownStart,e.unscaledTimeOfDeath)),n*(this.slowdownStart>=0?bh(this.tuning.game.timeSlowdownCurve,this.unscaledTime-this.slowdownStart):1)}step(){let e=Td;this.tick++,this.score.tick=this.tick,this.time+=e,this.unscaledTime+=e/Math.max(this.timeScale,.001);let t=this.biped,n=t.averageFootPos.z;this.placer.ctx.distanceReached=Math.max(this.placer.ctx.distanceReached,this.bestDistance),this.placer.update(n);let r=this.world.lastCheckpointAt(this.world.distanceForZ(n));r!==this.lastCheckpoint&&(this.lastCheckpoint=r,this.placer.onCheckpointChange(n)),this.specials.tickStart(),this.heldThisTick=this.controller?this.controller(this):this.input,t.fixedUpdate(),this.specials.tickEnd(),t.killedByCrack&&this.deaths.length&&this.deaths[this.deaths.length-1].crackIndex<0&&(this.deaths[this.deaths.length-1].crackIndex=t.killedByCrack.crackIndex),t.updateBodyProperties(),this.ragdoll.driveJoints(e),this.traffic.fixedUpdate(),this.physics.step(e),this.ragdoll.postStep(),this.traffic.postStep(),this.autoRestart&&t.hasFallenOver&&t.unscaledTimeSinceDeath>=this.tuning.game.restartDelay&&this.restart(),this.timeScale=this.desiredTimeScale()}};function bh(e,t){if(!e.length)return 1;if(t<=e[0].t)return e[0].v;for(let n=1;n<e.length;n++){let r=e[n-1],i=e[n];if(t<=i.t){let e=i.t>r.t?(t-r.t)/(i.t-r.t):1;return r.v+(i.v-r.v)*e*e*(3-2*e)}}return e[e.length-1].v}var xh=e=>e.length?e[e.length-1].t:0,Sh=[0,1,2],Ch=[`Legs`,`Body`,`Head`],wh=[`SelectedLegs`,`SelectedBody`,`SelectedHead`],Th=[{id:`steppypants`,name:`SteppyPants`,order:0,rarity:0,unlock:{kind:`default`}},{id:`chef`,name:`Chef`,order:1,rarity:1,unlock:{kind:`slices`}},{id:`convict`,name:`Convict`,order:2,rarity:1,unlock:{kind:`slices`}},{id:`ninja`,name:`Ninja`,order:3,rarity:1,unlock:{kind:`slices`}},{id:`stuntman`,name:`Stuntman`,order:4,rarity:1,unlock:{kind:`slices`}},{id:`zombie`,name:`Zombie`,order:5,rarity:2,unlock:{kind:`slices`}},{id:`bunny`,name:`Bunny`,order:6,rarity:2,unlock:{kind:`slices`}},{id:`skeleton`,name:`Skeleton`,order:7,rarity:3,unlock:{kind:`slices`}},{id:`robot`,name:`Robot`,order:8,rarity:3,unlock:{kind:`slices`}},{id:`astronaut`,name:`Astronaut`,order:9,rarity:3,unlock:{kind:`slices`}}];function Eh(e,t=Th){return t.find(t=>t.order===e)??null}var Dh=e=>`character.${e.id}`;function Oh(e){if(e&=7,!e)return null;let t=`SliceTypeCombo_`;return e&4&&(t+=`Head`),e&2&&(t+=`Body`),e&1&&(t+=`Legs`),t}var kh=e=>`Character_${e.name}_Name`,Ah=(e,t)=>`${Dh(e)}.${Ch[t]}`,jh=e=>(e&1)+(e>>1&1)+(e>>2&1),Mh=e=>e.rarity===0&&e.unlock.kind!==`premium`,Nh={unlockAll:!1},Ph=class{inv;catalog;constructor(e,t=Th){this.inv=e,this.catalog=t}get count(){return this.catalog.length}byIndex(e){return Eh(e,this.catalog)}hasBeenPurchased(e){return e.unlock.kind===`premium`&&this.inv.item(e.unlock.productId,0).value!==0}unlockedValue(e,t){return this.inv.item(Ah(e,t),0).value}isSliceUnlocked(e,t){return!e||t<0||t>2?!1:Nh.unlockAll?!0:this.isSliceOwned(e,t)}isSliceOwned(e,t){return Mh(e)||this.hasBeenPurchased(e)||this.unlockedValue(e,t)!==0}wasPurchased(e,t){return this.unlockedValue(e,t)===-1}unlockedCombinationIndex(e){let t=0;for(let n of Sh)this.isSliceUnlocked(e,n)&&(t|=1<<n);return t}lockedCombinationIndex(e){return~this.unlockedCombinationIndex(e)&7}numSlicesUnlocked(e){return jh(this.unlockedCombinationIndex(e))}firstLockedSlice(e){for(let t of Sh)if(!this.isSliceUnlocked(e,t))return t;return-1}isFullyUnlocked(e){return this.unlockedCombinationIndex(e)===7}isFullyLocked(e){return this.unlockedCombinationIndex(e)===0}unlock(e,t,n=Math.random){let r=this.inv.item(`CharacterUnlockCount`);r.setMax(0),r.value+=1,this.inv.item(`RandomValueForNextCharacterUnlock`).value=Math.floor(n()*2147483647);let i=this.isSliceOwned(e,t);return i&&(this.inv.item(`LastGotRepeatAtUnlockCount`).value=r.value),this.inv.item(Ah(e,t)).value=r.value,!i}grantPurchase(e,t){for(let n of Sh)t&1<<n&&(this.inv.item(Ah(e,n)).value=-1)}showInList(e){return!e.dontShowIfFullyLocked||this.numSlicesUnlocked(e)>0}characterOrder(){let e=this.catalog.filter(e=>this.showInList(e));return e.sort((e,t)=>{let n=this.unlockedCombinationIndex(e),r=this.unlockedCombinationIndex(t);return n===r?e.rarity===t.rarity?e.order-t.order:e.rarity-t.rarity:r-n}),e.map(e=>e.order)}unlockCounter(){let e=0,t=0;for(let n of this.catalog)this.showInList(n)&&(t++,e+=this.numSlicesUnlocked(n));return{unlocked:e,total:t*3}}selection(){let e=e=>{let t=this.inv.item(wh[e],0).value,n=this.byIndex(t);return n&&this.isSliceUnlocked(n,e)?t:0};return{legs:e(0),body:e(1),head:e(2),female:this.inv.item(`BeFemale`,0).value!==0}}saveSelection(e){let t=[e.legs,e.body,e.head];for(let e of Sh)if(!this.isSliceUnlocked(this.byIndex(t[e]),e))return!1;for(let e of Sh)this.inv.item(wh[e],0).value=t[e];return this.inv.item(`BeFemale`,0).value=+!!e.female,!0}resolve(e){let t=this.catalog[0];return[this.byIndex(e.legs)??t,this.byIndex(e.body)??t,this.byIndex(e.head)??t]}rarityCollection(e){return[...this.catalog].sort((e,t)=>e.order-t.order).filter(t=>t.rarity===e)}};function Fh(e,t=3){let n=[],r=0;for(let i=0;i<t;i++){let t=e.rarityCollection(i+1),a=r;r+=t.length*3+1,n.push({index:i,rarity:i+1,characters:t,firstTile:a,onePastLastTile:r})}return n}function Ih(e,t){if(t<0)return null;for(let n=e.length-1;n>=0;n--)if(t>=e[n].firstTile)return e[n];return null}function Lh(e,t){let n=Ih(e,t);if(!n||t>=n.onePastLastTile)return null;let r=Math.floor((t-n.firstTile)/3);return r>=n.characters.length?null:{character:n.characters[r],slice:(t-n.firstTile)%3}}var Rh=(e,...t)=>({rows:t,legend:e}),zh=(e,t,n,r=`a`)=>Rh({a:e,b:t},...Array.from({length:n},(e,t)=>t%2==0==(r===`a`)?`a`:`b`)),Bh=(e,...t)=>t.map(t=>({face:t,art:e})),Vh=e=>Bh(e,`front`,`back`,`left`,`right`),Hh={x:.12,y:.13,z:.115},Uh={x:.155,y:.16,z:.1},Wh={x:.15,y:.09,z:.11},Gh={x:.055,y:.05,z:.14};function Kh(e,t={}){let n=Hh.z,r=t.y??0,i=[{name:`eye`,attach:`Head`,shape:`box`,size:[.04,.045,.02],at:[.048,.035+r,n+.002],colour:t.eye??`#ffffff`,mirror:!0,shadow:!1},{name:`pupil`,attach:`Head`,shape:`box`,size:[.018,.022,.01],at:[.048,.032+r,n+.012],colour:t.pupil??`#1a1a1a`,mirror:!0,shadow:!1},{name:`mouth`,attach:`Head`,shape:`box`,size:[.07,.02,.01],at:[0,-.06+r,n+.003],colour:t.mouth??`#ffffff`,shadow:!1}];return t.cheek!==null&&i.push({name:`cheek`,attach:`Head`,shape:`box`,size:[.04,.018,.01],at:[.08,-.015+r,n+.002],colour:t.cheek??`#f08aa6`,mirror:!0,shadow:!1}),t.nose!==!1&&i.push({name:`nose`,attach:`Head`,shape:`box`,size:[.045,.06,.05],at:[0,-.02+r,n+.01],colour:e,shadow:!1}),i}var qh=(e=`#1a1a1a`,t=0)=>({name:`lash`,attach:`Head`,shape:`box`,size:[.05,.012,.012],at:[.05,.064+t,Hh.z+.008],rot:[0,0,8],colour:e,mirror:!0,shadow:!1}),Jh=(e,t=.02)=>({name:`ponytail`,attach:`Head`,shape:`rbox`,size:[.08,.16,.07],at:[0,t,-Hh.z-.05],rot:[-18,0,0],colour:e}),Yh=e=>[{name:`longHair`,attach:`Head`,shape:`rbox`,size:[.26,.3,.05],at:[0,-.03,-Hh.z-.012],colour:e},{name:`sideLock`,attach:`Head`,shape:`rbox`,size:[.035,.22,.12],at:[.128,-.04,-.03],colour:e,mirror:!0}],Xh=(e,t)=>[{name:`bow`,attach:`Head`,shape:`box`,size:[.06,.05,.03],at:[t[0]+.03,t[1],t[2]],rot:[0,0,-20],colour:e},{name:`bow2`,attach:`Head`,shape:`box`,size:[.06,.05,.03],at:[t[0]-.03,t[1],t[2]],rot:[0,0,20],colour:e}],Zh=(e,t,n)=>({colour:e,sole:t,...n?{scale:n}:{}}),Qh={shirt:`#f3dd72`,tie:`#d8344a`,trousers:`#a86b4c`,shoe:`#2f2622`,sole:`#d9d2c4`,skin:`#4f9fe6`,hair:`#6a3d22`},$h={steppypants:[{parts:{Pelvis:{colour:Qh.trousers},Thigh:{colour:Qh.trousers},Shin:{colour:Qh.trousers},Foot:Zh(Qh.shoe,Qh.sole)}},{parts:{Belly:{colour:Qh.shirt},Arm:{colour:Qh.shirt},Forearm:{colour:Qh.shirt},Hand:{colour:Qh.skin}},extras:[{name:`brace`,attach:`Belly`,shape:`box`,size:[.035,Uh.y*2.02,Uh.z*2.06],at:[.075,0,0],colour:Qh.tie,mirror:!0},{name:`belt`,attach:`Belly`,shape:`box`,size:[Uh.x*2.04,.04,Uh.z*2.04],at:[0,-Uh.y+.02,0],colour:Qh.shoe}]},{parts:{Head:{colour:Qh.skin}},extras:[{name:`hair`,attach:`Head`,shape:`rbox`,size:[Hh.x*2.08,.08,Hh.z*2.08],at:[0,Hh.y-.025,-.005],colour:Qh.hair},{name:`hairBack`,attach:`Head`,shape:`rbox`,size:[Hh.x*2.06,Hh.y*1.1,.04],at:[0,Hh.y*.4,-Hh.z+.012],colour:Qh.hair},...Kh(Qh.skin)],female:{extras:[...Yh(Qh.hair),qh(),...Xh(`#ff6fa8`,[.07,Hh.y+.01,.02])]}}],chef:(()=>{let e=`#f1c27d`,t=`#f7f5ee`,n=Rh({k:`#26262b`},`k.k.`,`.k.k`,`k.k.`,`.k.k`,`k.k.`,`.k.k`,`k.k.`,`.k.k`);return[{parts:{Pelvis:{colour:t,decals:Vh(n)},Thigh:{colour:t,decals:Vh(n)},Shin:{colour:t,decals:Vh(n)},Foot:Zh(`#1d1d1f`,`#555560`)}},{parts:{Belly:{colour:t,decals:[{face:`front`,art:Rh({b:`#b9b4a6`,g:`#8c8778`},`..........`,`...b..b...`,`..........`,`...g..g...`,`..........`,`...g..g...`,`..........`,`...g..g...`,`..........`,`..........`)}]},Arm:{colour:t},Forearm:{colour:t},Hand:{colour:e}},extras:[{name:`neckerchief`,attach:`Belly`,shape:`box`,size:[.17,.05,.05],at:[0,Uh.y-.02,Uh.z-.01],colour:`#d8344a`}]},{parts:{Head:{colour:e}},extras:[{name:`hatBand`,attach:`Head`,shape:`cyl`,size:[.25,.05,.25],at:[0,Hh.y+.02,0],colour:t},{name:`toque`,attach:`Head`,shape:`cyl`,size:[.21,.16,.21],at:[0,Hh.y+.12,0],colour:t},{name:`toquePuff`,attach:`Head`,shape:`sphere`,size:[.3,.14,.3],at:[0,Hh.y+.22,0],colour:t},{name:`moustache`,attach:`Head`,shape:`box`,size:[.13,.03,.03],at:[0,-.04,Hh.z+.02],colour:`#4a2e1a`,shadow:!1},...Kh(e,{mouth:`#c0504a`,cheek:`#f29a8a`})],female:{extras:[Jh(`#4a2e1a`),qh()],remove:[`moustache`]}}]})(),convict:(()=>{let e=`#e8b48a`,t=`#f2f2f2`,n=`#1c1c1f`,r=zh(t,n,9),i=zh(t,n,7);return[{parts:{Pelvis:{colour:t,decals:Vh(zh(t,n,3))},Thigh:{colour:t,decals:Vh(i)},Shin:{colour:t,decals:Vh(i)},Foot:Zh(`#1c1c1f`,`#6a6a70`)},extras:[{name:`shackle`,attach:`Shin`,side:`L`,shape:`cyl`,size:[.135,.035,.135],at:[0,-.16,0],colour:`#7c7f86`},{name:`ball`,attach:`Foot`,side:`L`,shape:`sphere`,size:[.11,.11,.11],at:[.02,-0,-Gh.z-.07],colour:`#2b2b30`}]},{parts:{Belly:{colour:t,decals:[...Bh(r,`back`,`left`,`right`),{face:`front`,art:Rh({a:t,b:n,p:`#ffffff`,n:`#1c1c1f`},`aaaaaaaaaa`,`bbbbbbbbbb`,`aaaaaaaaaa`,`bbpppppbbb`,`aapnpnpaaa`,`bbpnpnpbbb`,`aapppppaaa`,`bbbbbbbbbb`,`aaaaaaaaaa`,`bbbbbbbbbb`)}]},Arm:{colour:t,decals:Vh(i)},Forearm:{colour:t,decals:Vh(i)},Hand:{colour:e}}},{parts:{Head:{colour:e}},extras:[{name:`cap`,attach:`Head`,shape:`rbox`,size:[.255,.075,.245],at:[0,Hh.y+.02,0],colour:t,decals:Vh(zh(t,n,3,`b`))},{name:`brow`,attach:`Head`,shape:`box`,size:[.05,.016,.012],at:[.048,.075,Hh.z+.006],rot:[0,0,-12],colour:`#3a2a20`,mirror:!0,shadow:!1},{name:`stubble`,attach:`Head`,shape:`box`,size:[.15,.06,.006],at:[0,-.07,Hh.z+.001],colour:`#c49474`,shadow:!1},...Kh(e,{cheek:null,mouth:`#7a3c30`})],female:{extras:[Jh(`#5a3a22`,0),qh()],remove:[`stubble`,`brow`]}}]})(),ninja:(()=>{let e=`#1b1b22`,t=`#3a3a46`,n=`#d8344a`,r=zh(e,t,7);return[{parts:{Pelvis:{colour:e},Thigh:{colour:e},Shin:{colour:e,decals:Vh(r)},Foot:Zh(`#2a2a33`,`#121216`)}},{parts:{Belly:{colour:e,decals:[{face:`front`,art:Rh({g:t},`g........g`,`.g......g.`,`..g....g..`,`...g..g...`,`....gg....`,`....gg....`,`..........`,`..........`,`..........`,`..........`)}]},Arm:{colour:e},Forearm:{colour:e,decals:Vh(r)},Hand:{colour:e}},extras:[{name:`sash`,attach:`Belly`,shape:`box`,size:[Uh.x*2.06,.055,Uh.z*2.08],at:[0,-Uh.y+.04,0],colour:t}]},{parts:{Head:{colour:e,decals:[{face:`front`,art:Rh({s:`#e8b48a`,e:`#ffffff`,p:`#111111`},`........`,`........`,`........`,`ssssssss`,`sepssspe`,`ssssssss`,`........`,`........`)}]}},extras:[{name:`headband`,attach:`Head`,shape:`box`,size:[.255,.04,.245],at:[0,.075,0],colour:n},{name:`bandTail`,attach:`Head`,shape:`box`,size:[.035,.14,.02],at:[.03,.02,-Hh.z-.03],rot:[-25,0,14],colour:n},{name:`bandTail2`,attach:`Head`,shape:`box`,size:[.035,.12,.02],at:[-.03,.03,-Hh.z-.025],rot:[-30,0,-18],colour:n}],female:{extras:[Jh(e,.06)]}}]})(),stuntman:(()=>{let e=`#f6f6f6`,t=`#e2262e`,n=`#1e4fbf`,r=Rh({r:t,b:n},`.rb.`,`.rb.`,`.rb.`,`.rb.`);return[{parts:{Pelvis:{colour:e},Thigh:{colour:e,decals:Bh(r,`left`,`right`)},Shin:{colour:e,decals:Bh(r,`left`,`right`)},Foot:Zh(t,e)}},{parts:{Belly:{colour:e,decals:[{face:`front`,art:Rh({r:t,b:n},`r........r`,`r....b...r`,`r...bbb..r`,`r.bbbbbbbr`,`r..bbbbb.r`,`r...bbb..r`,`r..bb.bb.r`,`r.b.....br`,`r........r`,`r........r`)},...Bh(Rh({r:t},`.r.`,`.r.`),`left`,`right`)]},Arm:{colour:e,decals:Bh(r,`left`,`right`)},Forearm:{colour:e},Hand:{colour:e}},extras:[{name:`collar`,attach:`Belly`,shape:`box`,size:[.2,.04,.16],at:[0,Uh.y-.01,0],colour:t}]},{parts:{Head:{colour:e,scale:[1.1,1.06,1.1],decals:[{face:`front`,art:Rh({v:`#22303f`,h:`#5c7ea8`,r:t},`...rr...`,`...rr...`,`.vvvvvv.`,`.vhvvvv.`,`.vvvvvv.`,`........`,`........`,`........`)},...Bh(Rh({b:n,r:t},`...b...`,`..bbb..`,`.bbbbb.`,`..b.b..`,`.......`,`rrrrrrr`,`.......`),`left`,`right`)]}},extras:[{name:`helmetStripe`,attach:`Head`,shape:`box`,size:[.06,.02,.27],at:[0,Hh.y*1.06+.005,0],colour:t}],female:{extras:[Jh(`#c9862e`,-.06)]}}]})(),zombie:(()=>{let e=`#8cbf5a`,t=`#6f8fa8`,n=`#6b5a8a`,r=Rh({g:e},`........`,`........`,`........`,`........`,`........`,`........`,`g..g...g`,`gggggggg`);return[{parts:{Pelvis:{colour:n},Thigh:{colour:n},Shin:{colour:n,decals:Vh(r)},ShinL:{colour:e},Foot:Zh(e,`#5c8a3a`)}},{parts:{Belly:{colour:t,decals:[{face:`front`,art:Rh({g:e,r:`#e8e4d0`,d:`#4a6a2c`},`..........`,`...ggg....`,`..grrrg...`,`..gddgg...`,`..grrrg...`,`..gddg....`,`...rrr....`,`....g.....`,`g...gg..g.`,`gg.gggg.gg`)},...Bh(Rh({g:e},`....`,`....`,`....`,`....`,`.g..`,`gggg`),`back`,`left`,`right`)]},Arm:{colour:t,decals:Vh(Rh({g:e},`....`,`....`,`....`,`g..g`,`gggg`))},Forearm:{colour:e},Hand:{colour:e}}},{parts:{Head:{colour:e,decals:[{face:`front`,art:Rh({w:`#ffffff`,p:`#111111`,r:`#d23a3a`,m:`#3a2a2a`,s:`#e8e4d0`,d:`#5c8a3a`},`........`,`.ww.....`,`.wpw.rr.`,`.ww..rr.`,`..d.....`,`........`,`.msmsmm.`,`........`)}]}},extras:[{name:`hair`,attach:`Head`,shape:`rbox`,size:[.2,.06,.18],at:[-.02,Hh.y+.01,-.01],rot:[0,0,6],colour:`#2b2b2b`},{name:`tuft`,attach:`Head`,shape:`cone`,size:[.07,.09,.07],at:[.05,Hh.y+.06,0],rot:[0,0,-25],colour:`#2b2b2b`}],female:{extras:Yh(`#2b2b2b`)}}]})(),bunny:(()=>{let e=`#f4f1ec`,t=`#ff9cc0`;return[{parts:{Pelvis:{colour:e},Thigh:{colour:e},Shin:{colour:e},Foot:{colour:e,sole:t,scale:[1.1,1,1.22]}},extras:[{name:`tail`,attach:`Pelvis`,shape:`sphere`,size:[.13,.13,.13],at:[0,.01,-Wh.z-.04],colour:`#ffffff`}]},{parts:{Belly:{colour:e,decals:[{face:`front`,art:Rh({p:`#ffd9e8`},`........`,`..pppp..`,`.pppppp.`,`.pppppp.`,`.pppppp.`,`..pppp..`,`........`)}]},Arm:{colour:e},Forearm:{colour:e},Hand:{colour:e}}},{parts:{Head:{colour:e}},extras:[{name:`ear`,attach:`Head`,shape:`rbox`,size:[.065,.26,.04],at:[.06,Hh.y+.12,-.02],rot:[0,0,-8],colour:e,mirror:!0,decals:[{face:`front`,art:Rh({p:t},`...`,`.p.`,`.p.`,`.p.`,`.p.`,`...`)}]},{name:`noseTip`,attach:`Head`,shape:`box`,size:[.05,.035,.03],at:[0,-.01,Hh.z+.012],colour:t,shadow:!1},{name:`teeth`,attach:`Head`,shape:`box`,size:[.045,.035,.012],at:[0,-.06,Hh.z+.006],colour:`#ffffff`,shadow:!1},{name:`whisker`,attach:`Head`,shape:`box`,size:[.07,.006,.006],at:[.075,-.025,Hh.z+.004],colour:`#9a9a9a`,mirror:!0,shadow:!1},...Kh(e,{eye:`#1a1a1a`,pupil:`#ffffff`,mouth:`#ff9cc0`,nose:!1,cheek:`#ffc4d8`}).filter(e=>e.name!==`mouth`)],female:{extras:[qh(),...Xh(`#ff4f8a`,[.07,Hh.y+.03,.02])]}}]})(),skeleton:(()=>{let e=`#1a1a1f`,t=`#f1eedf`,n=Rh({b:t},`.b.`,`.b.`,`.b.`,`.b.`,`bbb`);return[{parts:{Pelvis:{colour:e,decals:[{face:`front`,art:Rh({b:t},`.bbbbbb.`,`bb.bb.bb`,`.b....b.`)}]},Thigh:{colour:e,decals:Bh(n,`front`,`back`)},Shin:{colour:e,decals:Bh(n,`front`,`back`)},Foot:Zh(e,t)}},{parts:{Belly:{colour:e,decals:[{face:`front`,art:Rh({b:t},`....bb....`,`.bbbbbbbb.`,`....bb....`,`.bbbbbbbb.`,`....bb....`,`..bbbbbb..`,`....bb....`,`...bbbb...`,`....bb....`,`..........`)},{face:`back`,art:Rh({b:t},`....b....`,`....b....`,`...bbb...`,`....b....`,`...bbb...`,`....b....`,`...bbb...`,`....b....`)}]},Arm:{colour:e,decals:Bh(n,`front`,`back`)},Forearm:{colour:e,decals:Bh(n,`front`,`back`)},Hand:{colour:t}}},{parts:{Head:{colour:t,decals:[{face:`front`,art:Rh({k:`#16161a`,g:`#b9b5a4`},`........`,`........`,`.kk..kk.`,`.kk..kk.`,`...kk...`,`........`,`.kgkgkk.`,`..kkkk..`)}]}},extras:[{name:`jaw`,attach:`Head`,shape:`rbox`,size:[.19,.05,.19],at:[0,-Hh.y-.005,.01],colour:t}],female:{extras:Xh(`#ff4f8a`,[.075,Hh.y+.01,.03])}}]})(),robot:(()=>{let e=`#a9b4c0`,t=`#5d6875`,n=`#4ef0ff`;return[{parts:{Pelvis:{colour:t},Thigh:{colour:e,decals:Bh(Rh({d:t},`....`,`.dd.`,`....`,`....`,`....`,`.dd.`,`....`),`front`,`left`,`right`)},Shin:{colour:e},Foot:Zh(t,`#2f353d`,[1.15,1.05,1.08])},extras:[{name:`knee`,attach:`Shin`,shape:`cyl`,size:[.14,.045,.14],at:[0,.17,0],colour:t}]},{parts:{Belly:{colour:e,decals:[{face:`front`,art:Rh({d:`#3a424c`,c:n,r:`#ff4040`,y:`#ffd23a`,g:`#7bff6a`},`..........`,`.dddddddd.`,`.dcdrdydd.`,`.dddddddd.`,`.dgggdddd.`,`.dddddddd.`,`..........`,`.d.d.d.d..`,`..........`,`..........`)}]},Arm:{colour:t},Forearm:{colour:e},Hand:{colour:t}},extras:[{name:`shoulderBolt`,attach:`Belly`,shape:`cyl`,size:[.06,.03,.06],at:[.16,.11,0],rot:[0,0,90],colour:t,mirror:!0}]},{parts:{Head:{colour:e,scale:[1.1,1.02,1.08],decals:[{face:`front`,art:Rh({c:n,k:`#2a3038`},`........`,`........`,`.cc..cc.`,`.cc..cc.`,`........`,`.kkkkkk.`,`.k.k.k..`,`........`)}]}},extras:[{name:`antenna`,attach:`Head`,shape:`cyl`,size:[.02,.12,.02],at:[0,Hh.y+.07,0],colour:t},{name:`antennaLight`,attach:`Head`,shape:`sphere`,size:[.055,.055,.055],at:[0,Hh.y+.14,0],colour:`#ff4040`},{name:`ear`,attach:`Head`,shape:`cyl`,size:[.08,.035,.08],at:[Hh.x*1.1+.012,.01,0],rot:[0,0,90],colour:t,mirror:!0}],female:{parts:{Head:{colour:e,scale:[1.1,1.02,1.08],decals:[{face:`front`,art:Rh({c:`#ff7fd0`,k:`#2a3038`},`........`,`.k...k..`,`.cc..cc.`,`.cc..cc.`,`........`,`..kkkk..`,`........`,`........`)}]}},extras:[{name:`antennaLight`,attach:`Head`,shape:`sphere`,size:[.06,.06,.06],at:[0,Hh.y+.14,0],colour:`#ff7fd0`}],remove:[`antennaLight`]}}]})(),astronaut:(()=>{let e=`#f2f2f2`,t=`#a9afb8`;return[{parts:{Pelvis:{colour:e},Thigh:{colour:e,scale:[1.08,1,1.08]},Shin:{colour:e,scale:[1.1,1,1.1]},Foot:Zh(t,`#4a4f58`,[1.18,1.15,1.08])},extras:[{name:`kneePad`,attach:`Shin`,shape:`rbox`,size:[.1,.08,.04],at:[0,.14,.065],colour:t}]},{parts:{Belly:{colour:e,scale:[1.05,1,1.12],decals:[{face:`front`,art:Rh({g:`#8a9099`,r:`#d33a3a`,b:`#2f5fb8`,y:`#ffd23a`},`..........`,`.bb.......`,`.bb.......`,`..........`,`..gggggg..`,`..grgbgy..`,`..gggggg..`,`..........`,`..........`,`..........`)}]},Arm:{colour:e,scale:[1.12,1,1.12]},Forearm:{colour:e,scale:[1.12,1,1.12],decals:Vh(Rh({g:t},`....`,`....`,`....`,`....`,`gggg`))},Hand:{colour:t}},extras:[{name:`backpack`,attach:`Belly`,shape:`rbox`,size:[.27,.3,.12],at:[0,.02,-Uh.z*1.12-.055],colour:`#d9dce1`}]},{parts:{Head:{colour:e,hidden:!0}},extras:[{name:`helmet`,attach:`Head`,shape:`sphere`,size:[.36,.34,.34],at:[0,.01,0],colour:e},{name:`visor`,attach:`Head`,shape:`rbox`,size:[.24,.15,.08],at:[0,.02,.135],colour:`#d9a520`},{name:`visorShine`,attach:`Head`,shape:`box`,size:[.05,.03,.01],at:[-.06,.06,.177],colour:`#fff4c2`,shadow:!1},{name:`neckRing`,attach:`Head`,shape:`cyl`,size:[.24,.04,.24],at:[0,-Hh.y-0,0],colour:t}],female:{extras:[{name:`visorRim`,attach:`Head`,shape:`box`,size:[.26,.02,.06],at:[0,.105,.13],colour:`#ff7fb0`}]}}]})()};function eg(e){let t=/^(Thigh|Shin|Foot|Arm|Forearm)([LR])$/.exec(e);return t?[t[1],t[2]]:[e,null]}function tg(e,t,n){let r=($h[e.id]??$h.steppypants)[t];if(!n||!r.female)return r;let i=new Set(r.female.remove??[]);return{parts:{...r.parts,...r.female.parts??{}},extras:[...(r.extras??[]).filter(e=>!i.has(e.name)),...r.female.extras??[]]}}var ng={Thigh:[.88,1,.9],Shin:[.86,1,.88],Arm:[.86,1,.86],Forearm:[.86,1,.86],Belly:[.92,1,.96],Pelvis:[1.04,1,1]},rg=(e,t)=>t?[e[0]*t[0],e[1]*t[1],e[2]*t[2]]:e;function ig(e,t,n){let r=tg(t,e.slice,n),[i,a]=eg(e.name),o=(a?r.parts[`${i}${a}`]:void 0)??r.parts[i]??{colour:`#cccccc`},s=e.shape,c,l;s.kind===`box`?(c=[-s.center.x,s.center.y,s.center.z],l=[s.half.x*2,s.half.y*2,s.half.z*2]):(c=[-s.center.x,s.center.y,s.center.z],l=[s.radius*1.9,s.halfHeight*2+s.radius*2,s.radius*1.9]);let u=n?ng[i]:void 0,d=rg(o.scale??[1,1,1],u),f=rg(l,d),p=[];if(o.hidden||p.push({shape:`rbox`,size:f,pos:c,colour:o.colour,...o.decals?{decals:o.decals}:{},owner:t.id,name:e.name,shadow:!0}),i===`Foot`&&o.sole&&p.push({shape:`rbox`,size:[f[0]*1.04,.018,f[2]*1.04],pos:[c[0],c[1]-f[1]/2+.009,c[2]],colour:o.sole,owner:t.id,name:`${e.name}.sole`,shadow:!0}),i===`Forearm`&&s.kind===`capsule`){let e=(a?r.parts[`Hand${a}`]:void 0)??r.parts.Hand??{colour:o.colour},n=s.radius*(u?u[0]:1);p.push({shape:`rbox`,size:[n*2.2,n*2.4,n*2.2],pos:[c[0],s.center.y-s.halfHeight-s.radius*.9,c[2]],colour:e.colour,...e.decals?{decals:e.decals}:{},owner:t.id,name:`Hand${a??``}`,shadow:!0})}for(let e of r.extras??[]){if(e.attach!==i||e.side&&a&&e.side!==a)continue;let n=n=>({shape:e.shape,size:e.size,pos:[c[0]+e.at[0]*n*(u?u[0]:1),c[1]+e.at[1],c[2]+e.at[2]*(u?u[2]:1)],...e.rot?{rot:n<0?[e.rot[0],-e.rot[1],-e.rot[2]]:e.rot}:{},colour:e.colour,...e.decals?{decals:e.decals}:{},owner:t.id,name:e.name,shadow:e.shadow??Math.min(...e.size)>.03});p.push(n(1)),e.mirror&&p.push(n(-1))}return p}function ag(e){let t=new K(e),n=.299*t.r+.587*t.g+.114*t.b;return t.lerp(new K(n,n,n),.85).multiplyScalar(.72)}var og=null,sg=()=>og??=$l(new Ta({vertexColors:!0}),{rim:!0}),cg=new Map;function lg(e,t){let n=`${t?`g`:`c`}|${e.rows.join(`/`)}|${Object.entries(e.legend).join(`,`)}`,i=cg.get(n);if(i)return i;let a=Math.max(...e.rows.map(e=>e.length)),o=e.rows.length,s=document.createElement(`canvas`);s.width=a,s.height=o;let c=s.getContext(`2d`);for(let n=0;n<o;n++)for(let r=0;r<e.rows[n].length;r++){let i=e.legend[e.rows[n][r]];i&&(c.fillStyle=t?`#`+ag(i).getHexString(Ie):i,c.fillRect(r,n,1,1))}let l=new ia(s);return l.magFilter=r,l.minFilter=r,l.generateMipmaps=!1,l.colorSpace=Ie,i=$l(new Ta({map:l,alphaTest:.5,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),{rim:!0}),cg.set(n,i),i}var ug=Math.PI/180,dg=new Zt,fg=new Ot,pg=new cn,mg=new W,hg=new W(1,1,1);function gg(e){let[t,n,r]=e.size;switch(e.shape){case`rbox`:return new Cm(t,n,r,2,Math.min(t,n,r)*.22);case`box`:return new ca(t,n,r);case`cyl`:return new la(.5,.5,1,10).scale(t,n,r);case`cone`:return new ua(.5,1,8).scale(t,n,r);case`sphere`:return new fa(.5,1).scale(t,n,r)}}function _g(e){return e.rot?fg.setFromEuler(pg.set(e.rot[0]*ug,e.rot[1]*ug,e.rot[2]*ug)):fg.identity(),dg.compose(mg.set(e.pos[0],e.pos[1],e.pos[2]),fg,hg)}function vg(e,t){let[n,r,i]=e.size,a=.0025,o=Math.min(n,r,i)*.22*.6;switch(t.face){case`front`:return new pa(n-o,r-o).translate(0,0,i/2+a);case`back`:return new pa(n-o,r-o).rotateY(Math.PI).translate(0,0,-i/2-a);case`left`:return new pa(i-o,r-o).rotateY(Math.PI/2).translate(n/2+a,0,0);case`right`:return new pa(i-o,r-o).rotateY(-Math.PI/2).translate(-n/2-a,0,0);case`top`:return new pa(n-o,i-o).rotateX(-Math.PI/2).translate(0,r/2+a,0)}}function yg(e,t,n,r=!0){let i=new En;i.name=`char_${t}`;let a=[],o=new Map;for(let t of e){let e=_g(t),r=gg(t);if(r.index){let e=r.toNonIndexed();r.dispose(),r=e}r.applyMatrix4(e);let i=n?ag(t.colour):new K(t.colour),s=r.getAttribute(`position`).count,c=new Float32Array(s*3);for(let e=0;e<s;e++)c[e*3]=i.r,c[e*3+1]=i.g,c[e*3+2]=i.b;r.setAttribute(`color`,new mr(c,3)),a.push(r);for(let n of t.decals??[]){let r=vg(t,n);if(r.index){let e=r.toNonIndexed();r.dispose(),r=e}r.applyMatrix4(e);let i=o.get(n.art)??[];i.push(r),o.set(n.art,i)}}if(a.length){let e=wm(a,!1);for(let e of a)e.dispose();if(e){let t=new q(e,sg());t.castShadow=r,i.add(t)}}for(let[e,t]of o){let r=wm(t,!1);for(let e of t)e.dispose();if(!r)continue;let a=new q(r,lg(e,n));a.castShadow=!1,i.add(a)}return i}function bg(e){e.traverse(e=>{e.isMesh&&e.geometry.dispose()})}var xg={owners:[Th[0],Th[0],Th[0]],female:!1};function Sg(e,t,n,r,i){let a=new En;a.name=`slice_${t.id}_${n}${r?`F`:``}${i?`G`:``}`;for(let o of e){if(o.slice!==n)continue;let e=yg(ig(o,t,r),o.name,i,!1);e.position.set(-o.pos.x,o.pos.y,o.pos.z),a.add(e)}return a}function Cg(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(0,0,0,0.55)`),n.addColorStop(.6,`rgba(0,0,0,0.3)`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new ia(e)}var wg=class{root=new En;blob;views=[];ragdoll=null;pelvisView=null;look=xg;constructor(e){this.root.name=`character`,e.add(this.root),this.blob=new q(new pa(.9,1.1).rotateX(-Math.PI/2),new si({map:Cg(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})),this.blob.name=`blobShadow`,this.blob.visible=!1,this.blob.renderOrder=2,e.add(this.blob)}get currentLook(){return this.look}setLook(e){if(this.look=e,this.ragdoll)for(let t of this.views){let n=yg(ig(t.part.def,e.owners[t.part.def.slice],e.female),t.part.name,!1);n.position.copy(t.group.position),n.quaternion.copy(t.group.quaternion),this.root.remove(t.group),bg(t.group),this.root.add(n),t.group=n}}bind(e){for(let e of this.views)bg(e.group);this.root.clear(),this.views=[],this.ragdoll=e;for(let t of e.parts){let e=yg(ig(t.def,this.look.owners[t.def.slice],this.look.female),t.name,!1);this.root.add(e);let n={part:t,group:e,prevP:new W,currP:new W,prevQ:new Ot,currQ:new Ot};this.views.push(n),t.isPelvis&&(this.pelvisView=n)}this.snapshot(),this.snapshot(),this.apply(1)}get bound(){return this.ragdoll}snapshot(){for(let e of this.views){let t=e.part.body.translation(),n=e.part.body.rotation();e.prevP.copy(e.currP),e.prevQ.copy(e.currQ),e.currP.set(-t.x,t.y,t.z),e.currQ.set(n.x,-n.y,-n.z,n.w)}}apply(e){for(let t of this.views)t.group.position.lerpVectors(t.prevP,t.currP,e),t.group.quaternion.slerpQuaternions(t.prevQ,t.currQ,e);if(this.blob.visible&&this.pelvisView){let e=this.pelvisView.group.position;this.blob.position.set(e.x,.068,e.z+.05);let t=Dt.clamp(1.25-e.y*.35,.6,1.2);this.blob.scale.set(t,1,t)}}},Tg=.012,Eg=Pu+Tg/2+.002,Dg=512,Og=class{mesh;m=new Zt;col=new K;q=new Ot;s=new W;p=new W;n=0;flags=new Map;flagVersion=-1;scene;ground;world;palette;lineTex;poleMat=new Ta({color:`#f2f2f4`});redMat=new Ta({color:`#e8383d`,side:2});goldMat=new Ta({color:`#ffc21a`,side:2});info={bars:0,flash:!1,flags:0,flagsUp:0};constructor(e,t,n,r){this.scene=e,this.ground=t,this.world=n,this.palette=r;let i=new si({color:`#ffffff`,toneMapped:!1});this.mesh=new Ai(new ca(1,1,1),i,Dg),this.mesh.instanceMatrix.setUsage(Ve),this.mesh.setColorAt(0,this.col.set(`#ffffff`)),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,e.add(this.mesh),this.lineTex=Ag()}box(e,t,n,r,i,a,o){this.n>=Dg||r<=0||i<=0||a<=0||(this.p.set(Em(e),t,n),this.s.set(r,i,a),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(this.n,this.m),this.mesh.setColorAt(this.n,this.col.set(o)),this.n++)}update(e){this.n=0;let t=0,n=!1;for(let r=this.ground.head;r;r=r.nextCrack)if(!(r.maxPos+r.length<e.z0)){if(r.maxPos>e.z1)break;if(r.stepCount<0&&e.timeSinceDeath>=0&&e.timeSinceDeath<.75&&e.timeSinceDeath%.25<.125){let t=r.minPos(e.time),i=r.prevCrack,a=((i?i.width:r.width)+r.width)/2;this.box(r.xPos,Pu/2+.004,(t+r.maxPos)/2,a,Pu,Math.max(r.maxPos-t,.02),`#ff2020`),n=!0}t+=this.outline(r,e.time)}this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.info.bars=t,this.info.flash=n,this.updateFlags(e)}outline(e,t){let n=Ym(e);if(n<=0)return 0;let r=$m(e,t);if(r<=-1||r>=1)return 0;let i=Qm(this.palette,n),a=(n-1)%3==0,o=Xm(e)>1,s=e.length,c=e.width,l=e.cashInAtTime,u=.125;l>0&&(u=.125+(c*.5-.125)*Jm(l,l+.1,t));let d=e.xPos,f=e.maxPos,p=this.n;if(r>=0){let e=Jm(1,0,r),t=u*e;this.box(d+(c/2-t/2),Eg,f+s/2,t,Tg,s,i),this.box(d-(c/2-t/2),Eg,f+s/2,t,Tg,s,i);let n=Math.min(s/2,u)*e;a&&this.box(d,Eg,f+n/2,c-2*n,Tg,n,i),o&&this.box(d,Eg,f+s-n/2,c-2*n,Tg,n,i)}else{let e=Math.min(Math.max(r+1,0),1),t=s*e;this.box(d+(c/2-u/2),Eg,f+t/2,u,Tg,t,i),this.box(d-(c/2-u/2),Eg,f+t/2,u,Tg,t,i);let n=Math.min(s/2,u);a&&this.box(d,Eg,f+n/2,(c-2*n)*e,Tg,n,i),o&&e>=1&&this.box(d,Eg,f+s-n/2,c-2*n,Tg,n,i)}return this.n-p}updateFlags(e){if(this.flagVersion!==this.ground.version){this.flagVersion=this.ground.version;let t=new Set;for(let n of this.ground){if(!n.isFirstCrackOfCheckpoint)continue;let r=this.world.distanceForZ(n.maxPos+.01);r<this.world.cfg.disableCheckpointSpawnsBeforeDistance||(t.add(n),this.flags.has(n)||this.flags.set(n,this.makeFlag(n,r,e.bestDistance)))}for(let[e,n]of this.flags)t.has(e)||(this.scene.remove(n.group),n.group.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose();let n=t.material;n&&n.map&&n.map!==this.lineTex&&n.map.dispose(),n&&n!==this.poleMat&&n!==this.redMat&&n!==this.goldMat&&n.dispose()}),this.flags.delete(e))}let t=0;for(let n of this.flags.values()){n.group.position.z=n.crack.maxPos,n.up<0&&n.distance<=e.bestDistance&&(n.up=0,n.gold=e.gold,n.cloth.material=n.gold?this.goldMat:this.redMat),n.up>=0&&n.up<1&&(n.up=Math.min(1,n.up+e.realDt/.6));let r=n.up<0?0:kg(n.up);n.pole.rotation.z=-(1-r)*(Math.PI/2-.08),n.up>=1&&t++}this.info.flags=this.flags.size,this.info.flagsUp=t}makeFlag(e,t,n){let r=new En;r.position.set(0,0,e.maxPos);let i=new q(new pa(e.width*1.02,.16),new Ta({map:this.lineTex,transparent:!1}));i.rotation.x=-Math.PI/2,i.position.set(Em(e.xPos),Pu+.003,.09),i.receiveShadow=!0,r.add(i);let a=new En;a.position.set(Em(e.xPos-e.width/2-.22),Pu,.05);let o=new q(new ca(.045,1.7,.045),this.poleMat);o.position.y=.85,o.castShadow=!0,a.add(o);let s=new q(new ca(.08,.08,.08),this.goldMat);s.position.y=1.72,a.add(s);let c=this.world.chunkLength?Math.trunc(t/this.world.chunkLength):0,l=c===(this.world.chunkLength?Math.trunc(this.world.cfg.scoreStartDistance/this.world.chunkLength):0)?Z(`Start`):Dp(this.world.chunkLength*c).replace(` `,``),u=t<=n,d=new q(new pa(.62,.36),u?this.goldMat:this.redMat);d.position.set(0,1.48,.33),d.rotation.y=Math.PI/2,d.castShadow=!0,a.add(d);let f=new q(new pa(.58,.29),new si({map:jg(l),transparent:!0}));f.position.set(.004,1.48,.33),f.rotation.y=Math.PI/2,a.add(f);let p=f.clone();return p.position.x=-.004,p.rotation.y=-Math.PI/2,a.add(p),r.add(a),this.scene.add(r),{crack:e,distance:t,group:r,pole:a,cloth:d,up:u?1:-1,gold:u}}get instanceCount(){return this.n}};function kg(e){return 1+2.70158*(e-1)**3+1.70158*(e-1)**2}function Ag(){let e=document.createElement(`canvas`);e.width=128,e.height=16;let t=e.getContext(`2d`);for(let e=0;e<16;e++)for(let n=0;n<2;n++)t.fillStyle=(e+n)%2?`#1d1b26`:`#f7f6f2`,t.fillRect(e*8,n*8,8,8);let n=new ia(e);return n.magFilter=r,n.colorSpace=Ie,n}function jg(e){let t=document.createElement(`canvas`);t.width=128,t.height=64;let n=t.getContext(`2d`),r=Math.min(24,Math.floor(116/Math.max(1,e.length)));n.font=`${r}px "Press Start 2P", "Tiny5", ui-monospace, monospace`,n.textAlign=`center`,n.textBaseline=`middle`,n.lineJoin=`round`,n.lineWidth=Math.max(4,Math.round(r/3)),n.strokeStyle=`#2a2433`,n.strokeText(e,64,34),n.fillStyle=`#ffffff`,n.fillText(e,64,34);let i=new ia(t);return i.colorSpace=Ie,i}var Mg=`steppy.save`,Ng=`steppy.save.bak`,Pg=`steppy.`,Fg={CoinsToAwardNextGift:100,MusicVolume:100,SFXVolume:100,RandomValueForNextCharacterUnlock:-1,CurrentLanguage:-1,DisableShadows:1,doubleCoinsChance:3};function Ig(e){return/^(BestScore|BestScoreWithoutRevive|DistanceReached|MissionDistance)/.test(e)||e===`Games`||e===`GoldCheckpointsTotal`||e===`BestGoldCheckpointsInARow`||e===`AdsWatched`||e===`GiftsOpened`||e===`CharacterUnlockCount`||e===`WinAPrizePurchaseCount`}var Lg=()=>({v:2,seq:0,ints:{},dates:{},strings:{}}),Rg=e=>typeof e==`object`&&!!e&&!Array.isArray(e),zg=2147483647;function Bg(e){if(e==null||e===``)return null;let t;try{t=JSON.parse(e)}catch{return null}if(!Rg(t))return null;let n=0,r=Lg();if(typeof t.v==`number`&&Number.isFinite(t.v)?r.v=Math.trunc(t.v):n++,typeof t.seq==`number`&&Number.isFinite(t.seq)&&t.seq>=0?r.seq=Math.trunc(t.seq):n++,Rg(t.ints))for(let[e,i]of Object.entries(t.ints))typeof i==`number`&&Number.isFinite(i)&&Math.abs(i)<=zg?r.ints[e]=Math.trunc(i):n++;else t.ints!==void 0&&n++;if(Rg(t.dates))for(let[e,i]of Object.entries(t.dates))i===null?r.dates[e]=null:typeof i==`string`&&Number.isFinite(Date.parse(i))?r.dates[e]=new Date(Date.parse(i)).toISOString():n++;else t.dates!==void 0&&n++;if(Rg(t.strings))for(let[e,i]of Object.entries(t.strings))typeof i==`string`?r.strings[e]=i:n++;else t.strings!==void 0&&n++;return{blob:r,dropped:n}}var Vg=e=>({v:e.v,seq:e.seq,ints:{...e.ints},dates:{...e.dates},strings:{...e.strings}});function Hg(e,t){if(!e&&!t)return Lg();if(!e)return Vg(t);if(!t)return Vg(e);let[n,r]=t.seq>e.seq?[t,e]:[e,t],i=Vg(n);for(let[e,t]of Object.entries(r.ints))Ig(e)?i.ints[e]=Math.max(i.ints[e]??0,t):e in i.ints||(i.ints[e]=t);for(let[e,t]of Object.entries(r.dates))e in i.dates||(i.dates[e]=t);for(let[e,t]of Object.entries(r.strings))e in i.strings||(i.strings[e]=t);return i.seq=Math.max(e.seq,t.seq),i.v=2,i}var Ug=class{inv;name;defaultValue;constructor(e,t,n){this.inv=e,this.name=t,this.defaultValue=n}get value(){let e=this.inv.blob.ints[this.name];return e===void 0?this.defaultValue:e}set value(e){e=Math.max(-2147483647,Math.min(zg,Math.trunc(Number.isFinite(e)?e:0))),this.inv.blob.ints[this.name]!==e&&(this.inv.blob.ints[this.name]=e,this.inv.markDirty())}get bool(){return this.value!==0}set bool(e){this.value=+!!e}setMax(e){return this.value<Math.trunc(e)&&(this.value=e),this.value}add(e){return this.value+=e,this.value}},Wg=class{inv;name;constructor(e,t){this.inv=e,this.name=t}get value(){let e=this.inv.blob.dates[this.name];return e?new Date(e):null}set value(e){let t=e?e.toISOString():null;this.name in this.inv.blob.dates&&this.inv.blob.dates[this.name]===t||(this.inv.blob.dates[this.name]=t,this.inv.markDirty())}get hasBeenSet(){return this.value!==null}setToNow(){this.value=new Date(this.inv.now())}get timeUntil(){let e=this.value;return e?e.getTime()-this.inv.now():NaN}set timeUntil(e){this.value=new Date(this.inv.now()+e)}get timeSince(){let e=this.value;return e?this.inv.now()-e.getTime():NaN}set timeSince(e){this.value=new Date(this.inv.now()-e)}get hasBeenPassed(){return this.hasBeenSet&&this.timeUntil<0}},Gg=class{inv;name;defaultValue;constructor(e,t,n){this.inv=e,this.name=t,this.defaultValue=n}get value(){return this.inv.blob.strings[this.name]??this.defaultValue}set value(e){this.inv.blob.strings[this.name]!==e&&(this.inv.blob.strings[this.name]=String(e),this.inv.markDirty())}};function Kg(e=Yg()){return e?{name:`local`,async read(t){try{return e.getItem(t)}catch{return null}},write(t,n){try{e.setItem(t,n)}catch{}}}:null}function qg(e,t=1500){let n=!1;return{name:`device`,read(n){return new Promise(r=>{let i=setTimeout(()=>r(null),t);try{e.getItem(n,(e,t)=>{clearTimeout(i),r(e?null:t||null)})}catch{clearTimeout(i),r(null)}})},write(t,r){if(!n)try{e.setItem(t,r,e=>{e&&console.warn(`[save] DeviceStorage.setItem failed`,e)})}catch(e){console.warn(`[save] DeviceStorage unavailable, using localStorage`,e),n=!0}}}}function Jg(e=new Map){return{name:`memory`,store:e,async read(t){return e.get(t)??null},write(t,n){e.set(t,n)}}}function Yg(){try{if(typeof localStorage>`u`)return null;let e=`${Pg}__probe`;return localStorage.setItem(e,`1`),localStorage.removeItem(e),localStorage}catch{return null}}var Xg=class{blob=Lg();backends;now;previousVersion=0;loadInfo={sources:[],corrupt:[],dropped:0,migratedLegacy:!1};writes=0;dirty=!1;timer=null;flushDelayMs;random;items=new Map;dateItems=new Map;stringItems=new Map;constructor(e){this.backends=e.backends,this.flushDelayMs=e.flushDelayMs??1e3,this.now=e.now??(()=>Date.now()),this.random=e.random??Math.random}get kind(){let e=this.backends.map(e=>e.name);return e.includes(`device`)&&e.includes(`local`)?`device+local`:e[0]??`memory`}item(e,t){let n=this.items.get(e);return n||(n=new Ug(this,e,t??Fg[e]??0),this.items.set(e,n)),n}date(e){let t=this.dateItems.get(e);return t||(t=new Wg(this,e),this.dateItems.set(e,t)),t}str(e,t=``){let n=this.stringItems.get(e);return n||(n=new Gg(this,e,t),this.stringItems.set(e,n)),n}get Coins(){return this.item(`Coins`)}get Games(){return this.item(`Games`)}get BestScore(){return this.item(`BestScore`)}get DistanceReached(){return this.item(`DistanceReached`)}get MusicVolume(){return this.item(`MusicVolume`)}get SFXVolume(){return this.item(`SFXVolume`)}get CurrentLanguage(){return this.item(`CurrentLanguage`)}get MoneybagsOwned(){return this.item(`character.moneybags`)}markDirty(){this.dirty=!0,this.flushDelayMs>0&&!this.timer&&(this.timer=setTimeout(()=>{this.timer=null,this.flush()},this.flushDelayMs))}get isDirty(){return this.dirty}flush(e=!1){if(this.timer&&=(clearTimeout(this.timer),null),!this.dirty&&!e)return;this.dirty=!1,this.blob.seq++,this.blob.v=2;let t=JSON.stringify(this.blob);for(let e of this.backends)e.write(Mg,t);this.writes++}async load(){let e=await Promise.all(this.backends.map(e=>e.read(Mg))),t=null,n=!1;e.forEach((e,r)=>{let i=this.backends[r];if(e==null||e===``){n=!0;return}let a=Bg(e);a?(a.dropped&&(n=!0),this.loadInfo.sources.push(i.name),this.loadInfo.dropped+=a.dropped,this.previousVersion=Math.max(this.previousVersion,a.blob.ints.Version??0),t&&t.seq!==a.blob.seq&&(n=!0),t=t?Hg(t,a.blob):a.blob):(n=!0,this.loadInfo.corrupt.push(i.name),console.warn(`[save] the ${i.name} save is corrupt and was ignored`),this.backends.find(e=>e.name===`local`)?.write(Ng,e.slice(0,65536)))}),this.blob=t??Lg(),this.dirty=!1,await this.migrateLegacy(),this.reload(),(n||this.dirty)&&this.flush(!0)}async migrateLegacy(){if(this.blob.ints.__legacyMigrated)return;for(let e of[`BestScore`,`DistanceReached`]){let t=await Promise.all(this.backends.map(t=>t.read(Pg+e)));for(let n of t){let t=n==null?NaN:parseInt(n,10);Number.isFinite(t)&&t>this.item(e).value&&(this.item(e).value=t,this.loadInfo.migratedLegacy=!0)}}let e=this.backends.find(e=>e.name===`local`);e&&await e.read(`${Pg}Muted`)===`1`&&!(`SFXVolume`in this.blob.ints)&&(this.SFXVolume.value=0,this.MusicVolume.value=0,this.loadInfo.migratedLegacy=!0),this.item(`__legacyMigrated`).value=1}reload(){this.item(`Version`).value=2;let e=this.date(`StartedPlayingAtTime`);e.hasBeenSet||e.setToNow();let t=this.item(`RandomValueForNextCharacterUnlock`);t.value<0&&(t.value=Math.floor(this.random()*zg));let n=this.item(`GamesTotalWhenReachedLastCheckpoint`);n.value===0&&this.Games.value!==0&&(n.value=this.Games.value)}};async function Zg(e,t={}){let n=[],r=Kg();r&&n.push(r),e&&n.push(qg(e)),n.length||n.push(Jg());let i=new Xg({...t,backends:n});return await i.load(),i}var Q={Gameplay:0,CharacterSelect:1,Settings:2,LauncherSelect:3,Paused:4,WorldSelect:5,StickerEditor:6,BadgeSelector:7,HolidayMenu:8,Yodo1ShowScene:9,ChallengePrepare:10,CharityUpsell:11,Yodo1Halloween:12},Qg={Main:0,Language:1,Credits:2},$g=[Q.CharacterSelect,Q.Settings,Q.LauncherSelect,Q.WorldSelect,Q.HolidayMenu,Q.Yodo1ShowScene,Q.ChallengePrepare,Q.CharityUpsell,Q.Yodo1Halloween],e_=class{state=Q.Gameplay;previous=Q.Gameplay;previousPrevious=Q.Gameplay;settingsSubState=Qg.Main;amounts=new Map($g.map(e=>[e,0]));languageAmount=0;creditsAmount=0;lastPausedAt=-1;env;listeners=new Set;now=0;constructor(e){this.env=e}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}amount(e){return this.amounts.get(e)??+(this.state===e)}get isPaused(){return this.state===Q.Paused}get isInSettings(){return this.state===Q.Settings}get isInGameplay(){if(this.state!==Q.Gameplay)return!1;for(let e of this.amounts.values())if(e!==0)return!1;return!0}get canPause(){return this.state!==Q.Paused&&this.isInGameplay&&this.env.playerAlive()}setMenuState(e,t=!1){if(e===Q.Paused&&!this.canPause&&!t||e===this.state)return!1;let n=this.state;n===Q.LauncherSelect&&this.previous!==Q.Yodo1ShowScene&&(this.previousPrevious=this.previous),this.previous=n,this.state=e,e===Q.Settings&&(this.settingsSubState=Qg.Main,this.languageAmount=this.creditsAmount=0),(n===Q.Paused||e===Q.Paused)&&(this.lastPausedAt=this.now);for(let t of this.listeners)t(n,e);return!0}setIsInState(e,t){if(this.state===e===t)return!1;let n,r=!1;return t?n=e:e===Q.StickerEditor||e===Q.BadgeSelector?n=Q.CharacterSelect:e===Q.Settings&&this.previous===Q.Paused?(n=Q.Paused,r=!0):n=this.previous===Q.WorldSelect?Q.WorldSelect:e===Q.LauncherSelect?this.previousPrevious:Q.Gameplay,this.setMenuState(n,r)}setSettingsSub(e){this.state===Q.Settings&&(this.settingsSubState=e)}exitSettings(){return this.state===Q.Settings?this.settingsSubState===Qg.Main?this.amount(Q.Settings)<1?!1:this.setIsInState(Q.Settings,!1):(this.settingsSubState=Qg.Main,!0):!1}onBack(){return this.env.blockInput?.()?`ignored`:this.isPaused?(this.setIsInState(Q.Paused,!1),`unpause`):this.canPause?(this.setIsInState(Q.Paused,!0),`pause`):this.state===Q.Settings?this.exitSettings()?`exitSettings`:`ignored`:this.state===Q.CharacterSelect?`backoutCharacterSelect`:this.state===Q.LauncherSelect?`backoutLauncher`:this.state===Q.Gameplay?`ignored`:(this.setIsInState(this.state,!1),`closeMenu`)}get backButtonVisible(){return this.env.blockInput?.()?!1:this.state!==Q.Gameplay||this.canPause||this.isPaused}forceUnpause(){this.isPaused&&this.setMenuState(Q.Gameplay,!0)}update(e,t){this.now=t;let n=2*Math.max(0,e);for(let[e,t]of this.amounts){let r=+(this.state===e);this.amounts.set(e,t<r?Math.min(r,t+n):Math.max(r,t-n))}let r=(e,t)=>e<t?Math.min(t,e+n):Math.max(t,e-n),i=this.state===Q.Settings;this.languageAmount=r(this.languageAmount,i&&this.settingsSubState===Qg.Language?1:0),this.creditsAmount=r(this.creditsAmount,i&&this.settingsSubState===Qg.Credits?1:0)}},t_=`
  #ui {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 20;
    color: #fff;
    font-family: var(--font-body);
  }
  #ui button, #hud button { font: inherit; }
  .b3d {
    --main: #ffcf1f;
    --border: #2a2433;
    --dark: #e59a12;
    --hi: #ffe98a;
    --fg: #ffffff;
    --depth: 6px;
    position: relative;
    pointer-events: auto;
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    color: var(--fg);
    background: var(--main);
    border: 3px solid var(--border);
    border-radius: 8px;
    box-shadow: inset 0 calc(-1 * var(--depth)) 0 var(--dark), inset 0 4px 0 var(--hi), 0 var(--depth) 0 rgba(20, 16, 30, 0.45);
    text-shadow: var(--outline-sm);
    transform: translateY(0);
    transition: transform 0.05s linear, box-shadow 0.05s linear, filter 0.15s;
    font-family: var(--font-body);
    font-weight: 700;
    line-height: 1.1;
  }
  .b3d.pressed {
    transform: translateY(calc(var(--depth) * 0.6));
    box-shadow: inset 0 calc(-0.4 * var(--depth)) 0 var(--dark), inset 0 3px 0 var(--hi), 0 calc(var(--depth) * 0.4) 0 rgba(20, 16, 30, 0.45);
  }
  .b3d.blue { --main: #3d8be0; --dark: #2a63a8; --hi: #7bb6f2; }
  .b3d.red { --main: #e8443d; --dark: #b02a2a; --hi: #ff8a7a; }
  .b3d.pink { --main: #ff7fb0; --dark: #d4568a; --hi: #ffb5d2; }
  .b3d.purple { --main: #8d5bd8; --dark: #6338a8; --hi: #b893f0; }
  .b3d.green { --main: #45c46a; --dark: #2c8e4a; --hi: #8be3a3; }
  .b3d.off, .b3d.dim { filter: saturate(0.25) brightness(0.82); }
  .b3d:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
  /* dim backdrop behind modal screens */
  #ui .scrim {
    position: absolute;
    inset: 0;
    background: rgba(26, 20, 40, 0.5);
    opacity: 0;
    transition: opacity 0.25s;
  }
  #ui .scrim.show { opacity: 1; pointer-events: auto; }
  /* centred card (pause, settings) */
  #ui .card {
    position: absolute;
    left: 50%;
    top: 50%;
    width: min(86vw, 360px);
    box-sizing: border-box;
    padding: 22px 18px 20px;
    background: #4a3f63;
    border: 4px solid #2a2433;
    border-radius: 14px;
    box-shadow: inset 0 -8px 0 #3a3150, inset 0 4px 0 #6a5d88, 0 10px 0 rgba(20, 16, 30, 0.45);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s cubic-bezier(.3, 1.45, .5, 1);
    pointer-events: none;
  }
  #ui .card.show { transform: translate(-50%, -50%) scale(1); pointer-events: auto; }
  #ui .card .title {
    font-family: var(--font-display);
    font-size: 22px;
    line-height: 1.3;
    text-align: center;
    text-shadow: var(--outline);
    margin: 2px 0 8px;
  }
  #ui .card .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    font-size: 22px;
    font-weight: 700;
    text-shadow: var(--outline-sm);
  }
  #ui .card .row .b3d { min-width: 112px; min-height: 48px; font-size: 20px; padding: 6px 12px 10px; }
  #ui .card .big { min-height: 60px; font-family: var(--font-display); font-size: 18px; padding: 10px 12px 14px; }
  #ui .card .wide { min-height: 50px; font-size: 22px; padding: 6px 12px 10px; }
  #ui .card .body { font-size: 20px; line-height: 1.35; text-align: center; text-shadow: var(--outline-sm); }
  #ui .card .sel::after { content: " ✓"; }
  /* end screen */
  #ui .end { position: absolute; inset: 0; pointer-events: none; }
  #ui .end .score-box {
    position: absolute;
    top: calc(var(--ui-top) + 16px);
    left: calc(var(--ui-left) + 16px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: translateX(-140%);
    transition: transform 0.35s cubic-bezier(.3, 1.3, .5, 1);
  }
  #ui .end.in .score-box { transform: none; }
  #ui .end .score-box .v { font-family: var(--font-display); font-size: 40px; line-height: 1; text-shadow: var(--outline); }
  #ui .end .score-box .k { font-size: 20px; font-weight: 700; color: #ffe066; text-shadow: var(--outline-sm); }
  #ui .end .score-box .d { font-size: 18px; font-weight: 700; text-shadow: var(--outline-sm); }
  #ui .end .special {
    position: absolute;
    left: calc(var(--ui-left) + 14px);
    top: calc(var(--ui-top) + 40%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
  #ui .end .special > * { transform: translateX(calc(-100% - 40px)); transition: transform 0.125s ease-in; }
  #ui .end.in .special > * { transform: none; transition: transform 0.25s cubic-bezier(.3, 1.4, .5, 1); }
  #ui .end.in .special > :nth-child(2) { transition-delay: 0.06s; }
  #ui .end.in .special > :nth-child(3) { transition-delay: 0.12s; }
  #ui .end .earned {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-display);
    font-size: 18px;
    color: #ffe066;
    text-shadow: var(--outline-sm);
    padding: 4px 0;
  }
  #ui .end .earned.none { color: #fff; opacity: 0.85; }
  #ui .end .pill { min-height: 50px; padding: 6px 18px 11px; font-size: 21px; border-radius: 26px; max-width: 78vw; text-align: left; }
  #ui .end .tap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(var(--ui-bottom) + 126px);
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    text-shadow: var(--outline-sm);
    opacity: 0;
  }
  #ui .end.in .tap { animation: ui-blink 1s steps(1) infinite 0.4s; }
  @keyframes ui-blink { 0% { opacity: 1; } 50% { opacity: 0.25; } }
  #ui .end .bottom {
    position: absolute;
    left: 50%;
    bottom: calc(var(--ui-bottom) + 18px);
    transform: translateX(-50%);
    width: min(94vw, 420px);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  #ui .end .bottom .cell { display: flex; flex-direction: column; align-items: center; gap: 6px; width: 20%; transform: translateY(calc(var(--ui-bottom) + 160px)); transition: transform 0.125s ease-in; }
  #ui .end.in .bottom .cell { transform: none; transition: transform 0.25s cubic-bezier(.3, 1.3, .5, 1); }
  #ui .end.in .bottom .cell.k1 { transition-delay: 0.05s; }
  #ui .end.in .bottom .cell.k2 { transition-delay: 0.1s; }
  #ui .end .bottom .b3d { width: 56px; height: 56px; padding: 0; display: grid; place-items: center; }
  #ui .end .bottom .b3d svg { width: 26px; height: 26px; }
  #ui .end .bottom .cell.play .b3d { width: 74px; height: 74px; --depth: 8px; }
  #ui .end .bottom .cell.play .b3d svg { width: 34px; height: 34px; }
  #ui .end .bottom .lbl { font-size: 12px; font-weight: 700; text-shadow: var(--outline-sm); white-space: nowrap; letter-spacing: -0.02em; }
  #ui .end:not(.in) button { pointer-events: none; }
  #ui .toast {
    position: absolute;
    left: 50%;
    bottom: calc(var(--ui-bottom) + 200px);
    transform: translate(-50%, 20px);
    opacity: 0;
    padding: 10px 18px 12px;
    background: #2a2433;
    border-radius: 10px;
    font-size: 22px;
    font-weight: 700;
    white-space: nowrap;
    transition: opacity 0.2s, transform 0.2s;
  }
  #ui .toast.show { opacity: 1; transform: translate(-50%, 0); }
  #ui .toast { z-index: 40; } /* above the menu overlays (their touch layers), so the toast button is tappable */
  #ui .toast.act { display: flex; align-items: center; gap: 12px; white-space: normal; width: max-content; max-width: 92vw; box-sizing: border-box; }
  #ui .toast .go { min-height: 44px; padding: 4px 12px 9px; font-size: 18px; white-space: nowrap; flex: none; }
  #ui .toast .go.gone { display: none; }
  #ui .toast:not(.show) .go { pointer-events: none; }
  #ui .end .pill .coin-ico { display: inline-block; vertical-align: -3px; margin-left: 8px; width: 20px; height: 20px; }
  #ui .ad-ico { display: inline-block; width: 18px; height: 14px; border: 2px solid currentColor; border-radius: 3px; position: relative; box-sizing: border-box; vertical-align: -1px; flex: none; }
  #ui .ad-ico::after { content: ""; position: absolute; left: 5px; top: 2px; border-left: 5px solid currentColor; border-top: 3px solid transparent; border-bottom: 3px solid transparent; }
  #ui .end .pill .ad-ico { margin-left: 10px; }
  @media (max-width: 360px) {
    #ui .end .score-box .v { font-size: 32px; }
    #ui .end .pill { font-size: 19px; }
  }
`,n_={gear:`<svg viewBox="0 0 12 12" shape-rendering="crispEdges"><path fill="currentColor" d="M5 0h2v2h1v1h1V2h1v2H9v1h3v2H9v1h1v2H9V9H8v1H7v2H5v-2H4V9H3v1H2V8h1V7H0V5h3V4H2V2h1v1h1V2h1zM5 4v1H4v2h1v1h2V7h1V5H7V4z"/></svg>`,star:`<svg viewBox="0 0 12 12" shape-rendering="crispEdges"><path fill="currentColor" d="M5 0h2v3h5v2h-1v1h-1v1H9v1h1v4H8v-1H7v-1H5v1H4v1H2V8h1V7H2V6H1V5H0V3h5z"/></svg>`,play:`<svg viewBox="0 0 12 12" shape-rendering="crispEdges"><path fill="currentColor" d="M3 1h2v1h1v1h1v1h1v1h1v2H8v1H7v1H6v1H5v1H3z"/></svg>`,podium:`<svg viewBox="0 0 12 12" shape-rendering="crispEdges"><path fill="currentColor" d="M4 1h4v11H4zM0 5h3v7H0zM9 7h3v5H9z"/></svg>`,shirt:`<svg viewBox="0 0 12 12" shape-rendering="crispEdges"><path fill="currentColor" d="M3 1h2v1h2V1h2v1h2v1h1v3h-2v6H2V6H0V3h1V2h2z"/></svg>`};function r_(e){let t=Math.max(0,Math.ceil(e/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=e=>String(e).padStart(2,`0`);return n>0?`${n}:${a(r)}:${a(i)}`:`${a(r)}:${a(i)}`}function i_(e,t){let n=document.createElement(`style`);n.textContent=t_,document.head.appendChild(n);let r=document.createElement(`div`);r.id=`ui`;let i=(e,t=r,n)=>{let i=document.createElement(n??`div`);return i.className=e,t.appendChild(i),i},a=(e,n,r,a=``)=>{let o=i(`b3d ${e}`,n,`button`);o.type=`button`,a&&(o.innerHTML=a);let s=0;o.addEventListener(`pointerdown`,()=>{s=performance.now(),o.classList.add(`pressed`),t.feedback(`down`)});let c=()=>{if(!o.classList.contains(`pressed`))return;let e=Math.max(0,100-(performance.now()-s));setTimeout(()=>o.classList.remove(`pressed`),e),t.feedback(`up`)};return o.addEventListener(`pointerup`,c),o.addEventListener(`pointerleave`,c),o.addEventListener(`pointercancel`,c),o.addEventListener(`click`,e=>{e.stopPropagation(),o.blur(),r()}),o},o=i(`end`);o.style.display=`none`;let s=i(`score-box`,o),c=i(`v`,s),l=i(`k`,s),u=i(`d`,s),d=i(`special`,o),f=i(`earned`,d);i(`coin-ico`,f,`i`);let p=i(``,f,`span`),m=a(`pill red`,d,()=>t.endButton(`gift`)),h=a(`pill purple`,d,()=>t.endButton(`prize`)),g=i(`tap`,o),_=i(`bottom`,o),v=(e,n,r,o)=>{let s=i(`cell ${e}`,_);return{b:a(o,s,()=>t.endButton(n),r),lbl:i(`lbl`,s)}},y=v(`k2`,`settings`,n_.gear,`blue`),b=v(`k1`,`achievements`,n_.star,`blue`),x=v(`play`,`retry`,n_.play,`green`),S=v(`k1`,`leaderboards`,n_.podium,`blue`),C=v(`k2`,`characters`,n_.shirt,`blue`),w=i(`scrim`),T=i(`card pause`),E=i(`title`,T),D=a(`big`,T,()=>t.resume()),O=i(`row sound`,T),k=i(``,O,`span`),A=a(`blue`,O,()=>{t.feedback(`toggle`),t.toggleSound()}),ee=i(`row music`,T),j=i(``,ee,`span`),te=a(`blue`,ee,()=>{t.feedback(`toggle`),t.toggleMusic()}),M=a(`blue wide`,T,()=>t.openSettings()),N=i(`card settings`),P=i(`title`,N),ne=i(`page`,N);ne.style.display=`contents`;let F=i(`row sound`,ne),I=i(``,F,`span`),re=a(`blue`,F,()=>{t.feedback(`toggle`),t.toggleSound()}),ie=i(`row music`,ne),ae=i(``,ie,`span`),oe=a(`blue`,ie,()=>{t.feedback(`toggle`),t.toggleMusic()}),L=i(`row`,ne),se=i(``,L,`span`),ce=a(`blue`,L,()=>t.openLanguage()),le=a(`blue wide`,ne,()=>t.openCredits()),ue=i(`page lang`,N);ue.style.display=`none`,ue.style.flexDirection=`column`,ue.style.gap=`12px`;let de=a(`blue wide`,ue,()=>t.setLanguage(12)),fe=a(`blue wide`,ue,()=>t.setLanguage(0)),pe=i(`page`,N);pe.style.display=`none`;let me=i(`body`,pe),he=a(`wide`,N,()=>t.back()),ge=i(`toast`),_e=i(`msg`,ge,`span`),ve=null,ye=a(`go blue gone`,ge,()=>{let e=ve;ge.classList.remove(`show`),ve=null,e?.()}),be=null;e.appendChild(r);let xe=!1,Se=null,Ce=null,we={sfxOn:!0,musicOn:!0},Te=(e,t)=>{e.textContent=Z(t?`On`:`Off`),e.classList.toggle(`off`,!t),e.setAttribute(`aria-pressed`,t?`true`:`false`)},Ee=()=>{let e=Ce;if(!e)return;c.textContent=String(e.score),l.textContent=Z(`BestScoreShort`,e.best),u.textContent=e.distance,p.textContent=e.coinsThisRun>0?Z(`EndCoinsThisRun`,e.coinsThisRun):Z(`EndNoCoins`),f.classList.toggle(`none`,e.coinsThisRun<=0);let t=!(e.giftInMs>0);m.innerHTML=``,m.textContent=t?Z(`SpecialDelivery`):Z(`SpecialDeliveryReadyIn`,r_(e.giftInMs)),m.classList.toggle(`red`,t),m.classList.toggle(`pink`,!t);let n=e.coins>=100;if(h.textContent=n?Z(`WinAPrize`):Z(`CoinsToGo`,100-e.coins),n||e.prizeAd){let e=document.createElement(`i`);e.className=n?`coin-ico`:`ad-ico`,h.appendChild(e)}h.classList.toggle(`dim`,!n&&!e.prizeAd)},De=()=>{E.textContent=Z(`HudPaused`),D.textContent=Z(`HudResume`),k.textContent=Z(`SettingsSound`),j.textContent=Z(`SettingsMusic`),M.textContent=Z(`Settings`),I.textContent=Z(`SettingsSound`),ae.textContent=Z(`SettingsMusic`),se.textContent=Z(`Language`),ce.textContent=Z(`LocaleLanguageName`),le.textContent=Z(`Credits`),me.textContent=Z(`CreditsBody`),de.textContent=`Русский`,fe.textContent=`English`;let e=yp();de.classList.toggle(`sel`,e===12),fe.classList.toggle(`sel`,e===0),he.textContent=Z(`Back`),P.textContent=Z(Se===`language`?`Language`:Se===`credits`?`Credits`:`Settings`),g.textContent=Z(`TapToRetry`),y.lbl.textContent=Z(`Settings`),b.lbl.textContent=Z(`BottomAchievements`),x.lbl.textContent=Z(`StartGame`),S.lbl.textContent=Z(`BottomLeaderboards`),C.lbl.textContent=Z(`BottomCharacters`),y.b.setAttribute(`aria-label`,Z(`Settings`)),b.b.setAttribute(`aria-label`,Z(`BottomAchievements`)),x.b.setAttribute(`aria-label`,Z(`StartGame`)),S.b.setAttribute(`aria-label`,Z(`BottomLeaderboards`)),C.b.setAttribute(`aria-label`,Z(`BottomCharacters`)),Te(A,we.sfxOn),Te(te,we.musicOn),Te(re,we.sfxOn),Te(oe,we.musicOn),Ee()},Oe=()=>{w.classList.toggle(`show`,xe||Se!==null)};return De(),{root:r,get shown(){let e=[];return xe&&e.push(`pause`),Se&&e.push(`settings:${Se}`),Ce&&e.push(o.classList.contains(`in`)?`end:in`:`end`),e},showPause(e){xe=e,T.classList.toggle(`show`,e&&Se===null),Oe()},showSettings(e){Se=e,N.classList.toggle(`show`,e!==null),ne.style.display=e===`main`?`contents`:`none`,ue.style.display=e===`language`?`flex`:`none`,pe.style.display=e===`credits`?`block`:`none`,T.classList.toggle(`show`,xe&&e===null),De(),Oe()},showEnd(e){Ce=e,e?(o.style.display=``,Ee()):(o.classList.remove(`in`),o.style.display=`none`)},setEndIn(e){Ce&&e!==o.classList.contains(`in`)&&(e&&o.offsetWidth,o.classList.toggle(`in`,e))},sync(e){(e.sfxOn!==we.sfxOn||e.musicOn!==we.musicOn)&&(we={...e},Te(A,e.sfxOn),Te(te,e.musicOn),Te(re,e.sfxOn),Te(oe,e.musicOn))},toast(e,t){_e.textContent=e,ve=t?.fn??null,ye.textContent=t?.label??``,ye.classList.toggle(`gone`,!t),ge.classList.toggle(`act`,!!t),ge.classList.add(`show`),be&&clearTimeout(be),be=setTimeout(()=>{ge.classList.remove(`show`),ve=null},t?3200:1400)},relabel:De}}var a_=160,o_=24,s_=.11,c_=.03,l_=new W,u_=new Ot,d_=new W,f_=new Zt,p_=new W(0,1,0),m_=new W(1,0,0),h_=new W,g_=class{coins;bags;flyers=[];ground;onLaunch=null;onArrive=null;info={onPavers:0,bagsOnPavers:0,flying:0,launched:0,arrived:0};constructor(e,t){this.ground=t;let n=new la(s_,s_,c_,18,1),r=new Ta({color:`#ffc21a`,emissive:`#7a4a00`,emissiveIntensity:.55});this.coins=new Ai(n,r,a_),this.coins.frustumCulled=!1,this.coins.castShadow=!0,this.coins.count=0,e.add(this.coins);let i=new ma(.12,12,8);i.scale(1,1.05,1),i.translate(0,.12,0);let a=new la(.04,.06,.07,10);a.translate(0,.25,0);let o=y_([i,a]),s=new Ta({color:`#c98b2b`,emissive:`#4a2a00`,emissiveIntensity:.4});this.bags=new Ai(o,s,o_),this.bags.frustumCulled=!1,this.bags.castShadow=!0,this.bags.count=0,e.add(this.bags)}get transient(){return this.flyers.length}spawn(e,t,n={}){let r=n.delay??.05;for(let i=0;i<t&&this.flyers.length<159;i++){let t=v_();n.upOnly&&(t.y=Math.max(Math.abs(t.y),.3)),n.forwardsOnly&&(t.z=Math.max(Math.abs(t.z),.3));let a=new W(-t.x,t.y,t.z).normalize().multiplyScalar(.25*.8**(Math.random()*2-1));this.flyers.push({pos:new W(Em(e.x),e.y,e.z),vel:a,rot:new Ot,angVel:new W,spin:0,t:-i*r,bag:!1,launched:!1})}}update(e){let t=0,n=0;for(let r of this.ground){if(!r.hasCoin)continue;let i=r.maxPos+r.length/2;if(!(i<e.z0||i>e.z1)){if(r.isCoinBag){if(n>=o_)continue;f_.makeTranslation(Em(r.xPos),nh-.02,i),this.bags.setMatrixAt(n++,f_)}else{if(t>=a_)continue;f_.makeTranslation(Em(r.xPos),nh,i),this.coins.setMatrixAt(t++,f_)}}}this.info.onPavers=t,this.info.bagsOnPavers=n;let r=Math.min(e.dt,.1),i=r*60,a=null;if(e.target&&e.target.w>0&&e.target.h>0){l_.set(e.target.x/e.target.w*2-1,-(e.target.y/e.target.h*2-1),.5).unproject(e.camera);let t=e.camera.position;a=l_.sub(t).normalize().multiplyScalar(1.5).add(t).clone().multiplyScalar(2).sub(t)}for(let e=this.flyers.length-1;e>=0;e--){let t=this.flyers[e];if(t.t+=r,t.t<=0)continue;t.launched||(t.launched=!0,this.info.launched++,this.onLaunch?.());let n=__(1,100,100**__(.6,1,t.t));if((n>=1||!a)&&n>=1){this.flyers.splice(e,1),this.info.arrived++,this.onArrive?.();continue}t.vel.multiplyScalar(.9**i);let o=d_.copy(t.pos).addScaledVector(t.vel,.5*i);a&&o.lerp(a,1-(1-n)**i),o.y<.1&&(o.y=.1,t.vel.y*=-.95);let s=o.clone().sub(t.pos);s.lengthSq()>1e-6&&t.angVel.add(p_.clone().applyQuaternion(t.rot).cross(s.normalize()).multiplyScalar(5.5)),t.spin+=Math.min(.05,Math.max(t.angVel.length(),r)),t.angVel.multiplyScalar(.8**i),t.pos.copy(o);let c=t.angVel.length();c>.001&&t.rot.premultiply(u_.setFromAxisAngle(t.angVel.clone().divideScalar(c),i*c)).normalize()}let o=t;for(let e of this.flyers){if(e.t<=0||o>=a_)continue;let t=__(.95,.5,__(1,100,100**__(.6,1,e.t)))**2;u_.copy(e.rot).multiply(new Ot().setFromAxisAngle(m_,e.spin*Math.PI*2)),f_.compose(e.pos,u_,h_.set(t,t,t)),this.coins.setMatrixAt(o++,f_)}this.coins.count=o,this.bags.count=n,this.coins.instanceMatrix.needsUpdate=!0,this.bags.instanceMatrix.needsUpdate=!0,this.info.flying=this.flyers.length}clearFlying(){let e=this.flyers.length;this.flyers.length=0,this.info.arrived+=e}};function __(e,t,n){if(e===t)return 0;let r=(n-e)/(t-e);return r<0?0:r>1?1:r}function v_(){let e=Math.random()*2-1,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e*e);return new W(n*Math.cos(t),e,n*Math.sin(t))}function y_(e){let t=[],n=[],r=[],i=0;for(let a of e){let e=a.getAttribute(`position`),o=a.getAttribute(`normal`);for(let r=0;r<e.count;r++)t.push(e.getX(r),e.getY(r),e.getZ(r)),n.push(o.getX(r),o.getY(r),o.getZ(r));let s=a.getIndex();if(s)for(let e=0;e<s.count;e++)r.push(s.getX(e)+i);else for(let t=0;t<e.count;t++)r.push(t+i);i+=e.count}let a=new kr;return a.setAttribute(`position`,new _r(t,3)),a.setAttribute(`normal`,new _r(n,3)),a.setIndex(r),a}var b_=-.16;function x_(e,t,n,r,i,a,o,s){let c=new ca(n,r,i).toNonIndexed();c.translate(a,o,s);let l=new K(t),u=c.getAttribute(`position`).count,d=c.getAttribute(`normal`),f=new Float32Array(u*3);for(let e=0;e<u;e++){let t=d.getY(e),n=t>.5?1:t<-.5?.45:.86;f[e*3]=l.r*n,f[e*3+1]=l.g*n,f[e*3+2]=l.b*n}c.setAttribute(`color`,new mr(f,3)),c.deleteAttribute(`uv`),e.push(c)}function S_(e,t){let n=[],r=t.x*2,i=t.z*2,a=`#26406e`,o=e.id===`van`;for(let e of[-1,1])for(let t of[-1,1])x_(n,`#232326`,.26,.56,.56,e*(r/2-.1),.28,t*(i/2-.62)),x_(n,`#b9bcc4`,.27,.2,.2,e*(r/2-.1),.28,t*(i/2-.62));x_(n,`#2b2b30`,r-.16,.12,i-.3,0,.3,0),x_(n,e.body,r,.58,i,0,.62,0),x_(n,e.trim===`#26262b`?`#3a3a40`:`#d9d9de`,r+.04,.14,.12,0,.42,i/2),x_(n,e.trim===`#26262b`?`#3a3a40`:`#d9d9de`,r+.04,.14,.12,0,.42,-i/2);for(let e of[-1,1])x_(n,`#fff6c8`,.34,.14,.06,e*(r/2-.28),.7,i/2+.02),x_(n,`#d63a3a`,.3,.12,.06,e*(r/2-.26),.7,-i/2-.02);if(x_(n,`#3a3a40`,r*.42,.16,.05,0,.62,i/2+.02),o){x_(n,e.body,r-.06,.95,i-.45,0,1.38,-.12),x_(n,a,r-.1,.42,.06,0,1.5,i/2-.55);for(let e of[-1,1])x_(n,a,.06,.38,.75,e*(r/2-.04),1.5,i/2-1.05);for(let t of[-1,1])x_(n,e.trim,.04,.16,i-1.4,t*(r/2-.01),1.05,-.4)}else{let t=-.18,o=i*.5;x_(n,e.body,r-.2,.18,o,0,.99,t),x_(n,a,r-.22,.34,o-.06,0,1.25,t),x_(n,e.body,r-.26,.1,o-.1,0,1.47,t);for(let i of[-1,1])x_(n,e.body,.08,.36,.1,i*(r/2-.13),1.25,t);if(e.id===`taxi`){for(let e of[-1,1])for(let t=0;t<10;t++){let a=-i/2+.3+t*((i-.6)/10);x_(n,t%2?`#f2f2f2`:`#1e1e22`,.04,.1,(i-.6)/10,e*(r/2+.005),.76,a+(i-.6)/20)}x_(n,`#f2f2f2`,.62,.2,.3,0,1.62,t),x_(n,`#e24b3c`,.5,.06,.32,0,1.66,t)}else for(let t of[-1,1])x_(n,e.trim,.04,.08,i-.8,t*(r/2+.005),.8,0)}let s=wm(n,!1);for(let e of n)e.dispose();return s.computeBoundingSphere(),s}var C_=class{root=new En;models;material;meshes=new Map;traffic;constructor(e,t,n){this.traffic=t,this.root.name=`cars`,e.add(this.root),this.models=n.cars.models.map(e=>S_(e,n.cars.halfExtents)),this.material=$l(new Ta({color:`#ffffff`,vertexColors:!0}))}apply(e){let t=new Set;for(let n of this.traffic.cars){t.add(n.id);let r=this.meshes.get(n.id);r||(r=new q(this.models[n.model%this.models.length],this.material),r.castShadow=!0,r.receiveShadow=!0,r.name=`car${n.id}`,this.root.add(r),this.meshes.set(n.id,r)),w_(r,n,e)}for(let[e,n]of this.meshes)t.has(e)||(this.root.remove(n),this.meshes.delete(e))}get count(){return this.meshes.size}};function w_(e,t,n){let r=t.prevPos.x+(t.pos.x-t.prevPos.x)*n,i=t.prevPos.z+(t.pos.z-t.prevPos.z)*n,a=t.prevYaw+oh(t.prevYaw,t.yaw)*n,o=t.pos.y-.7425;e.position.set(-r,b_+Math.max(0,o),i),e.rotation.set(0,-a*Math.PI/180,0)}var T_=256,E_=new K(.9,.5,0),D_=new K(`#f2b860`),O_=new K(`#c98c45`),k_=new K(`#e2463f`);function A_(e,t){if(t<=e[0].t)return e[0].v;for(let n=1;n<e.length;n++)if(t<=e[n].t){let r=e[n-1],i=e[n];return r.v+(i.v-r.v)*(t-r.t)/(i.t-r.t)}return e[e.length-1].v}var j_=class{root=new En;pieces;ground;tuning;m=new Zt;c=new K;tnts=[];tntGeo=new ca(1,1,1);blasts=[];fireMat=new si({color:`#ff8a1f`,transparent:!0,blending:2,depthWrite:!1});flashMat=new si({color:`#fff4c8`,transparent:!0,blending:2,depthWrite:!1});smokeMat=new Ta({color:`#8d8488`,transparent:!0,depthWrite:!1});sphere=new fa(1,1);info={timedVisible:0,tntVisible:0,blasts:0};constructor(e,t,n){this.ground=t,this.tuning=n,this.root.name=`specialPavers`,e.add(this.root);let r=new Cm(1,1,1,2,.03),i=r.getAttribute(`position`),a=r.getAttribute(`normal`),o=new Float32Array(i.count*3);for(let e=0;e<i.count;e++){let t=a.getY(e),n=t>.7?1:t<-.7?.5:.7;o[e*3]=o[e*3+1]=o[e*3+2]=n}r.setAttribute(`color`,new mr(o,3)),this.pieces=new Ai(r,$l(new Ta({color:`#ffffff`,vertexColors:!0})),T_),this.pieces.castShadow=!0,this.pieces.receiveShadow=!0,this.pieces.frustumCulled=!1,this.pieces.count=0,this.root.add(this.pieces)}update(e){let t=this.tuning.hazards,n=t.timedPaverTimeToCollapse,r=Math.max(1,t.timedPaverPieces),i=0,a=0,o=0;for(let t of this.ground)t.maxPos+t.length<e.z0||t.maxPos>e.z1||(t.isTimedPaver&&(a++,i=this.drawTimed(t,e,n,r,i)),t.crackType===Mu.EXPLOSIVE&&this.drawTnt(t,e,o++));this.pieces.count=i,this.pieces.instanceMatrix.needsUpdate=!0,this.pieces.instanceColor&&(this.pieces.instanceColor.needsUpdate=!0);for(let e=o;e<this.tnts.length;e++)this.tnts[e].mesh.visible=!1;this.info.timedVisible=a,this.info.tntVisible=o,this.updateBlasts(e.realDt)}drawTimed(e,t,n,r,i){let a=this.tuning.hazards,o=e.collapsePaverAtTime>0,s=t.time,c=o?e.collapsePaverAtTime-s:n,l=0,u=0;if(o&&c>0){let e=A_(a.timedPaverShakeCurve,1-c/n)*a.timedPaverShakeAmount,t=Math.random()*Math.PI*2,r=Math.cbrt(Math.random());l=Math.cos(t)*r*e,u=Math.sin(t)*r*e}let d=o?Dt.clamp(1-c/n,0,1):0,f=o?.5+.5*Math.sin(s*(8+26*d)):0,p=e.length,m=e.width*.98,h=Em(e.xPos);for(let t=0;t<2;t++){let c=t===0?r:1;for(let g=0;g<c;g++){let c=0;if(o&&(c=t===0?Math.max(0,s-e.collapsePaverAtTime+(1-.8*g/r)*n):Math.max(0,s-e.collapsePaverAtTime),c*=a.timedPaverFallSpeed),c>3||i>=T_)continue;let _=t===0?p*(g+.5)/r:p/2,v=t===0?p/r-.03:p-.02,y=t===0?.04:.07,b=t===0?Pu-y/2:Pu-.04-y/2,x=t===0?l:-l,S=g%2==0?u:-u;this.m.makeScale(t===0?m:m*.96,y,v),this.m.setPosition(h+x,b-c,e.maxPos+_+S),this.pieces.setMatrixAt(i,this.m),t===0?this.c.copy(D_).lerp(E_,d*.6).lerp(k_,d*d*f*.9):this.c.copy(O_).lerp(k_,d*.5),t===0&&g%2==1&&this.c.multiplyScalar(.94),this.pieces.setColorAt(i,this.c),i++}}return i}tntView(e){let t=this.tnts[e];if(!t){let n=document.createElement(`canvas`);n.width=256,n.height=128;let r=new ia(n);r.colorSpace=Ie,r.anisotropy=4;let i=$l(new Ta({map:r,emissive:new K(`#ffffff`),emissiveMap:r,emissiveIntensity:.25})),a=$l(new Ta({color:`#9b1f1a`})),o=new q(this.tntGeo,[a,a,i,a,a,a]);o.castShadow=!1,o.receiveShadow=!0,this.root.add(o),t={mesh:o,tex:r,canvas:n,key:``,crack:null},this.tnts[e]=t}return t}drawTnt(e,t,n){let r=this.tntView(n),i=e.minPos(t.time),a=Math.max(.05,e.maxPos-i),o=e.width;r.mesh.visible=!0,r.mesh.scale.set(o*.98,.06,a-.02),r.mesh.position.set(Em(e.xPos),Pu-.03-.004,(i+e.maxPos)/2),r.tex.rotation=-Math.PI/2,r.tex.center.set(.5,.5);let s,c=this.tuning.hazards.tnt.delay;if(e.hasSpawnedExplosionParticle)s=`burnt`;else if(e.explosionStartedAtTime>=0){let n=t.unscaledTime-e.explosionStartedAtTime;s=`armed${+((n+.251)%.25>.125)}:${Math.max(0,c-n).toFixed(1)}`}else s=`idle:${c.toFixed(1)}`;(s!==r.key||r.crack!==e)&&(r.key=s,r.crack=e,M_(r.canvas,s),r.tex.needsUpdate=!0)}explode(e){let t=new En;t.position.set(Em(e.x),e.y+.2,e.z);let n=new q(this.sphere,this.fireMat.clone()),r=new q(this.sphere,this.flashMat.clone());t.add(n,r);let i=[];for(let e=0;e<9;e++){let n=new q(this.sphere,this.smokeMat.clone()),r=e/9*Math.PI*2,a=new W(Math.cos(r)*2.2,1.2+Math.random()*1.8,Math.sin(r)*2.2);n.position.set(0,.2,0),n.scale.setScalar(.2),t.add(n),i.push({m:n,v:a})}this.root.add(t),this.blasts.push({group:t,ball:n,flash:r,puffs:i,t:0}),this.info.blasts++}updateBlasts(e){for(let t=this.blasts.length-1;t>=0;t--){let n=this.blasts[t];n.t+=e;let r=n.t,i=.25+1.1*(1-Math.exp(-r*10));n.ball.scale.setScalar(i),n.ball.material.opacity=Math.max(0,.95-r/.5),n.flash.scale.setScalar(.4+Math.min(r,.12)*12),n.flash.material.opacity=Math.max(0,.7-r/.12);for(let t of n.puffs)t.m.position.addScaledVector(t.v,e),t.v.multiplyScalar(Math.exp(-e*2.2)),t.m.scale.setScalar(Math.min(.55,.15+r*.6)),t.m.material.opacity=Math.max(0,.85-r/1.6);if(r>1.7){this.root.remove(n.group);for(let e of n.group.children)e.material.dispose();this.blasts.splice(t,1)}}}};function M_(e,t){let n=e.getContext(`2d`),r=e.width,i=e.height;if(t===`burnt`){n.fillStyle=`#2b2326`,n.fillRect(0,0,r,i),n.fillStyle=`rgba(0,0,0,0.5)`;for(let e=0;e<14;e++)n.fillRect(e*37%r,e*53%i,22,12);return}let a=t.startsWith(`armed`),o=t.startsWith(`armed1`),s=t.split(`:`)[1]??``,c=o?`#ffd21f`:`#d8322a`,l=o?`#d8322a`:`#ffd21f`;n.fillStyle=c,n.fillRect(0,0,r,i);for(let e of[0,i-18]){n.save(),n.beginPath(),n.rect(0,e,r,18),n.clip(),n.fillStyle=`#1d1b1e`,n.fillRect(0,e,r,18),n.fillStyle=l;for(let t=-20;t<r+20;t+=28)n.beginPath(),n.moveTo(t,e+18),n.lineTo(t+14,e+18),n.lineTo(t+28,e),n.lineTo(t+14,e),n.closePath(),n.fill();n.restore()}n.fillStyle=l,n.font=`40px "Press Start 2P", "Courier New", monospace`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`TNT`,r*.36,i/2+2),n.fillStyle=`#1d1b1e`,n.beginPath(),n.arc(r*.84,i/2,28,0,Math.PI*2),n.fill(),n.fillStyle=a?`#ffffff`:l,n.font=`18px "Press Start 2P", "Courier New", monospace`,n.fillText(s,r*.84,i/2+1)}var N_=e=>e<=-80?0:10**(e/20),P_=class{ctx;master;sfxBus;musicBus;groups;last={music:-1,sfx:-1,master:-1};constructor(e,t={}){this.ctx=e;let n=()=>e.createGain(),r=e.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.knee.value=0,r.attack.value=.003,r.release.value=.1,this.master=n(),this.sfxBus=n(),this.musicBus=n(),this.master.connect(r).connect(e.destination),this.sfxBus.connect(this.master),this.musicBus.connect(this.master),this.groups={ui:n(),foley:n(),vo:n(),vehicle:n(),music:n()};for(let e of[`ui`,`foley`,`vo`,`vehicle`])this.groups[e].connect(this.sfxBus);this.groups.music.connect(this.musicBus);for(let[e,n]of Object.entries(t))this.groups[e].gain.value=N_(n)}updateMixerVolumes(e,t,n,r=0){let i=e?0:N_(r),a=t||n?0:1,o=this.ctx.currentTime;i!==this.last.music&&(this.musicBus.gain.setTargetAtTime(i,o,.015),this.last.music=i),a!==this.last.sfx&&(this.sfxBus.gain.setTargetAtTime(a,o,.015),this.last.sfx=a)}};function F_(e){let t=!1,n=()=>{if(e.state!==`running`&&!document.hidden&&e.resume().catch(()=>{}),!t){let n=e.createBuffer(1,1,e.sampleRate),r=e.createBufferSource();r.buffer=n,r.connect(e.destination),r.start(0),t=!0}};for(let e of[`pointerdown`,`pointerup`,`touchend`,`click`,`keydown`])window.addEventListener(e,n,{capture:!0,passive:!0})}var I_=class{live={ui:[],foley:[],vo:[],vehicle:[],music:[]};core;caps;constructor(e,t={ui:8,foley:16,vo:2,vehicle:16,music:4}){this.core=e,this.caps=t}play(e,t,n=1,r=0,i=1,a=0){if(!e||n<=0)return null;let o=this.core.ctx,s=o.createBufferSource();s.buffer=e,s.playbackRate.value=i;let c=this.core.groups[t];if(a!==0&&typeof o.createStereoPanner==`function`){let e=o.createStereoPanner();e.pan.value=Math.max(-1,Math.min(1,a)),e.connect(c),c=e}if(n!==1){let e=o.createGain();e.gain.value=n,e.connect(c),c=e}s.connect(c),s.start(Math.max(r,o.currentTime));let l=this.live[t];if(l.push(s),s.onended=()=>{let e=l.indexOf(s);e>=0&&l.splice(e,1),s.disconnect()},l.length>this.caps[t])try{l.shift().stop()}catch{}return s}},L_=class{q;n=0;last=-100;p;rnd;constructor(e,t=Math.random){this.rnd=t,this.p={chanceRegrowth:[.01,.1,.5],minTimeBetweenPlays:0,volume:1,forceFirstAsIndex:0,...e},this.q=Array(this.p.chanceRegrowth.length).fill(0)}chance(e){let t=1,n=this.q.length;for(let r=0;r<n;r++)this.q[r]===e&&(t*=this.p.chanceRegrowth[n-1-r]);return t}pick(){this.n++;let e=this.p.clips.length;if(e<1)return 0;let t=0;for(let n=1;n<=e;n++)t+=this.chance(n);let n=this.rnd(),r=0;if(this.n===1&&this.p.forceFirstAsIndex>=1&&this.p.forceFirstAsIndex<=e)r=this.p.forceFirstAsIndex;else{let i=0;for(let a=1;a<=e;a++)if(i+=this.chance(a),t*n<i){r=a;break}}let i=this.q.shift();return this.q.push(r),i}prefill(){for(;this.n<this.p.chanceRegrowth.length;)this.pick()}next(){this.prefill();let e=this.pick();return e>=1&&e<=this.p.clips.length?this.p.clips[e-1]:void 0}playNext(e,t,n,r,i=0,a=1){return this.prefill(),r-this.last<this.p.minTimeBetweenPlays?!1:(this.last=r,!!e.play(this.next(),t,this.p.volume*n,i,a))}},R_=.1,z_=(e,t)=>(e%t+t)%t,B_=(e,t)=>e%t,V_=e=>{let t=Math.round(e);return Math.abs(e%1)===.5&&t%2!=0?t-1:t},H_=(e,t,n)=>Math.abs(t-e)<=n?t:e+Math.sign(t-e)*n,U_=class{node=null;t0=0;pos0=0;paused=!0;ac;buf;length;out;constructor(e,t,n,r){this.ac=e,this.buf=t,this.length=n,this.out=r}time(e){return this.paused?this.pos0:z_(this.pos0+(e-this.t0),this.length)}get isPlaying(){return!this.paused}setTime(e,t){e=Math.min(Math.max(e,0),this.length),this.paused?this.pos0=e:this.startAt(t,e)}unpause(e){this.paused&&(this.paused=!1,this.startAt(e,this.pos0))}pause(e){this.paused||(this.pos0=this.time(e),this.paused=!0,this.node?.stop(e),this.node=null)}startAt(e,t){this.node?.stop(e);let n=this.ac.createBufferSource();n.buffer=this.buf,n.loop=!0,n.loopStart=0,n.loopEnd=this.length,n.connect(this.out),n.start(e,z_(t,this.length)),this.node=n,this.t0=e,this.pos0=z_(t,this.length)}},W_=class{vol=0;shouldContinue=!1;playIntro=!1;beatsPlayed=0;prevFrameBeat=0;lastStartedInBar=-1;timesRepeated=-1;lick=null;voice;gain;duck;lickGain;parent=null;ac;name;cfg;licks;constructor(e,t,n,r,i,a){this.ac=e,this.name=t,this.cfg=n,this.licks=a,this.gain=e.createGain(),this.gain.gain.value=0,this.gain.connect(i),this.duck=e.createGain(),this.duck.connect(this.gain),this.lickGain=e.createGain(),this.lickGain.gain.value=0,this.lickGain.connect(i),this.voice=new U_(e,r,n.loopLengthSec??r.duration,this.duck)}get spb(){return 60/this.cfg.bpm}get bpb(){return this.cfg.beatsPerBar}get numBeats(){return this.voice.length/this.spb-this.cfg.introOffsetInBeats}beat(e){return this.voice.time(e)/this.spb-this.cfg.introOffsetInBeats}setBeat(e,t){let n=(this.cfg.introOffsetInBeats+e)*this.spb;if(n>=this.voice.length){let t=V_(this.numBeats);e=Math.min(B_(e,this.bpb),t),n=(e+this.cfg.introOffsetInBeats)*this.spb}this.voice.setTime(Math.min(Math.max(n,0),this.voice.length),t)}lickPlaying(e){return this.lick!==null&&e<this.lick.end}isPlaying(e){return this.voice.isPlaying||this.lickPlaying(e)}setVolume(e,t){this.vol=e,this.setPlaying(e>0,t),this.gain.gain.linearRampToValueAtTime(this.cfg.volume*e,t),this.lickPlaying(t)&&this.lickGain.gain.linearRampToValueAtTime(this.cfg.introVolume*e,t)}setPlaying(e,t){if(this.isPlaying(t)!==e){if(this.beatsPlayed=0,e){let e=this.parent.loudest();if(this.matchBarPercentage(e.beat(t)/e.bpb,t),this.voice.unpause(t),this.playIntro&&this.licks){let e=this.licks.next();e&&this.startLick(e,t),this.playIntro=!1}}else this.voice.pause(t),this.lick&&=(this.lick.node.stop(t),null),this.duck.gain.cancelScheduledValues(t),this.duck.gain.setValueAtTime(1,t),this.lickGain.gain.cancelScheduledValues(t),this.lickGain.gain.setValueAtTime(0,t);this.prevFrameBeat=this.beat(t)}}startLick(e,t){let n=this.ac.createBufferSource();n.buffer=e,n.connect(this.lickGain),n.start(t);let r=t+e.duration,i=this.cfg.introOffsetInBeats;this.lick={node:n,start:t,end:r};let a=this.duck.gain,o=t+(3.875+i)*this.spb,s=t+(4.125+i)*this.spb;a.cancelScheduledValues(t),a.setValueAtTime(0,t),r<=o?a.setValueAtTime(1,r):(a.setValueAtTime(0,o),r<s?(a.linearRampToValueAtTime((r-o)/(s-o),r),a.setValueAtTime(1,r)):a.linearRampToValueAtTime(1,s)),this.lickGain.gain.setValueAtTime(this.cfg.introVolume*this.vol,t)}matchBarPercentage(e,t){let n=B_(e,1),r=this.beat(t),i=Math.floor(r/this.bpb),a=B_(r/this.bpb,1),o=this.numBeats/this.bpb,s;Math.abs(o-1)<=.001?s=0:(s=i+ +(a>.75),n>.5&&(n+=o-1));let c=V_(o),l=e=>c===0?e:e-Math.trunc(e/c)*c;s=l(s),s===this.lastStartedInBar&&this.timesRepeated>1&&(s=l(s+1)),s===this.lastStartedInBar?this.timesRepeated++:(this.lastStartedInBar=s,this.timesRepeated=0),this.setBeat(B_(n+s,o)*this.bpb,t),this.prevFrameBeat=this.beat(t)}updateBeatCounter(e){if(this.isPlaying(e)){let t=this.beat(e);Math.floor(this.prevFrameBeat)!==Math.floor(t)&&this.beatsPlayed++,this.prevFrameBeat=t}}canChangeThisFrame(e){let t=this.cfg.beatOffsetForBarChange,n=Math.floor(this.beat(e)+t),r=Math.floor(this.prevFrameBeat+t);if(!this.voice.isPlaying)return!0;if(n===r)return!1;let i=this.cfg.allowChangeOnBeats;return i===0?n===0:n-Math.trunc(n/i)*i===0}},G_=class{menu;intro;solo;tracks;main;playMenuTrack=!0;T=0;ac;cfg;constructor(e,t,n,r=!1){this.ac=e,this.cfg=t,this.menu=n.menu,this.intro=n.intro,this.solo=n.solo,this.tracks=[this.menu,this.intro,this.solo];for(let e of this.tracks)e.parent=this;this.T=e.currentTime+R_,this.main=r?null:this.intro,this.intro.setBeat(this.intro.bpb-.01,this.T)}loudest(){let e=this.tracks[0];for(let t of this.tracks)t.vol>e.vol&&(e=t);return e}get logicTime(){return this.T}update(e){let t=this.T=Math.max(this.T,this.ac.currentTime+R_),{menu:n,intro:r,solo:i}=this,a=!0;(e.numGamesSinceStartup===0&&!e.playerHasDiedThisRound||e.isInGameplay&&!(e.timeSincePlayerLastDied>=this.cfg.keepRockingForTimeAfterDeath&&e.playerHasDiedThisRound))&&(a=!1),this.playMenuTrack=a;for(let e of this.tracks)e.shouldContinue=!1;let o=this.main;if(e.shouldMuteSoundForAd)this.main=null;else if(a)o!==n&&(o===null||o.canChangeThisFrame(t))&&(this.main=n);else{if(o===null)e.hasPlayerStartedStepping&&(this.main=r,r.playIntro=!0,r.setBeat(r.bpb-4,t));else if(o===n)n.canChangeThisFrame(t)&&(n.isPlaying(t)||r.setBeat(r.bpb-4,t),this.main=r,r.playIntro=!0);else if((o===r?.5:1.5)*o.bpb<o.beatsPlayed){let e=o===i?r:i;B_(o.beat(t),o.bpb)>=o.bpb-e.cfg.fadeToInBeats*.5&&(this.main=e)}if(this.main===r){let e=n.beat(t);n.shouldContinue=n.isPlaying(t)&&e>=8&&e<n.bpb-.5}}for(let n of this.tracks){let r=this.main??n,i=e.unscaledDeltaTime/(60/r.cfg.bpm*r.cfg.fadeToInBeats),a=n===this.main||n.shouldContinue?1:0;n.setVolume(H_(n.vol,a,i),t),n.updateBeatCounter(t)}}},K_=22050,q_=60/96;32*q_;var J_=[`PAVEMENT`,`CLOTH`,`METAL`,`WOOD`,`DIRT`];function Y_(e){let t=e>>>0||1;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}var X_=e=>440*2**((e-69)/12);async function Z_(e,t){let n=new OfflineAudioContext(1,Math.max(1,Math.ceil(e*K_)),K_),r=n.createGain();return r.connect(n.destination),t(n,r),n.startRendering()}var Q_=new WeakMap;function $_(e){let t=Q_.get(e);if(!t){t=e.createBuffer(1,K_*2,K_);let n=t.getChannelData(0),r=Y_(12345);for(let e=0;e<n.length;e++)n[e]=r()*2-1;Q_.set(e,t)}return t}function $(e,t,n,r,i,a={}){let o=e.createOscillator();if(o.type=a.type??`sine`,o.frequency.setValueAtTime(n,r),a.end&&o.frequency.exponentialRampToValueAtTime(Math.max(1,a.end),r+(a.glide??.1)),a.vibrato){let t=e.createOscillator(),i=e.createGain();t.frequency.value=5.5,i.gain.value=n*a.vibrato,t.connect(i).connect(o.frequency),t.start(r),t.stop(r+(a.hold??0)+(a.d??.2)*1.5+.05)}let s=e.createGain(),c=a.a??.003,l=a.d??.2,u=a.hold??0;s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(i,r+c),s.gain.setValueAtTime(i,r+c+u),s.gain.setTargetAtTime(0,r+c+u,l/4);let d=o;if(a.lp){let t=e.createBiquadFilter();t.type=`lowpass`,t.frequency.value=a.lp,o.connect(t),d=t}d.connect(s).connect(t),o.start(r),o.stop(r+c+u+l*1.5+.02)}function ev(e,t,n,r,i={}){let a=e.createBufferSource();a.buffer=$_(e),a.loop=!0;let o=e.createBiquadFilter();o.type=i.type??`bandpass`,o.frequency.setValueAtTime(i.f??1e3,n),o.Q.value=i.q??1;let s=i.d??.1,c=i.hold??0;i.fEnd&&o.frequency.exponentialRampToValueAtTime(i.fEnd,n+c+s);let l=e.createGain(),u=i.a??.002;l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(r,n+u),l.gain.setValueAtTime(r,n+u+c),l.gain.setTargetAtTime(0,n+u+c,s/4);let d=l;if(i.am){let t=e.createGain();t.gain.value=.5;let r=e.createOscillator(),a=e.createGain();r.frequency.value=i.am,a.gain.value=.5,r.connect(a).connect(t.gain),r.start(n),r.stop(n+u+c+s*1.5+.02),l.connect(t),d=t}a.connect(o).connect(l),d.connect(t),a.start(n,n*7.3%1.5),a.stop(n+u+c+s*1.5+.02)}var tv={CHAR:(e,t,n,r)=>{ev(e,t,0,r?.35:.5,{f:(r?1400:900)*n,q:.9,d:r?.045:.07}),r||$(e,t,120*n,0,.5,{end:55,glide:.06,d:.08})},PAVEMENT:(e,t,n,r)=>{ev(e,t,0,r?.45:.6,{type:`highpass`,f:(r?3200:2200)*n,q:.7,d:r?.03:.045}),ev(e,t,.004,.3,{f:1100*n,q:2,d:.04}),r||$(e,t,150*n,0,.45,{end:70,glide:.05,d:.06})},CLOTH:(e,t,n,r)=>{ev(e,t,0,r?.4:.55,{type:`lowpass`,f:(r?700:450)*n,q:.5,d:r?.06:.09,a:.008}),r||$(e,t,90*n,0,.35,{end:50,glide:.08,d:.07})},METAL:(e,t,n,r)=>{(r?[890,2210,3470]:[520,1340,2210,3170]).forEach((i,a)=>$(e,t,i*n,0,(r?.12:.16)/(1+a*.6),{d:.28-a*.04})),ev(e,t,0,.35,{type:`highpass`,f:4200,d:.02})},WOOD:(e,t,n,r)=>{$(e,t,(r?320:210)*n,0,.55,{type:`triangle`,end:(r?280:180)*n,glide:.08,d:.11}),$(e,t,(r?640:430)*n,0,.18,{d:.05}),ev(e,t,0,.3,{f:1500*n,q:3,d:.03})},DIRT:(e,t,n,r,i)=>{let a=r?3:5;for(let o=0;o<a;o++)ev(e,t,o*.012+i()*.006,(r?.35:.45)*(1-o/(a+1)),{type:`lowpass`,f:(1600+i()*900)*n,q:.8,d:.03});r||$(e,t,85*n,0,.4,{end:45,glide:.07,d:.07})}};async function nv(){let e={},t=1;for(let n of[`CHAR`,...J_]){let r=[],i=[];for(let e=0;e<4;e++)for(let e of[!1,!0]){let a=Y_(t++*7919),o=.92+.16*a(),s=await Z_(.3,(t,r)=>tv[n](t,r,o,e,a));(e?i:r).push(s)}e[n]={heel:r,toe:i}}return e}var rv=[{root:48,arp:[60,64,67,72]},{root:45,arp:[57,60,64,69]},{root:41,arp:[53,57,60,65]},{root:43,arp:[55,59,62,67]}],iv=e=>rv[e%4],av=[[[0,76,1],[1,79,.5],[1.5,81,.5],[2,79,1],[3,76,.5],[3.5,74,.5]],[[0,72,1],[1,76,.5],[1.5,74,.5],[2,72,1.5],[3.5,69,.5]],[[0,72,.5],[.5,74,.5],[1,77,1],[2,76,.5],[2.5,74,.5],[3,72,1]],[[0,74,1.5],[1.5,71,.5],[2,74,.5],[2.5,79,1.5]],[[0,84,.5],[.5,81,.5],[1,79,1],[2,76,.5],[2.5,79,.5],[3,81,1]],[[0,79,.5],[.5,76,.5],[1,72,1],[2,74,.5],[2.5,76,.5],[3,72,1]],[[0,77,1],[1,81,1],[2,79,.5],[2.5,77,.5],[3,76,1]],[[0,74,1],[1,71,.5],[1.5,74,.5],[2,79,2]]],ov=(e,t,n,r=.9)=>$(e,t,140,n,r,{end:42,glide:.09,d:.22}),sv=(e,t,n,r=.45)=>{ev(e,t,n,r,{f:1900,q:.8,d:.14}),$(e,t,200,n,r*.5,{type:`triangle`,end:150,glide:.05,d:.07})},cv=(e,t,n,r=.12)=>ev(e,t,n,r,{type:`highpass`,f:7500,d:.035}),lv=(e,t,n,r=.35)=>ev(e,t,n,r,{type:`highpass`,f:4500,q:.5,d:1.4});function uv(e,t,n){let r=e=>e*q_;for(let i=0;i<8;i++){let a=iv(i),o=i*4;if(n===`menu`){for(let n of[0,2])$(e,t,X_(a.root),r(o+n),.32,{type:`triangle`,d:.9,hold:.2,lp:900});for(let n=0;n<8;n++)$(e,t,X_(a.arp[n*3%4]+0),r(o+n*.5),.11,{type:`triangle`,d:.35});for(let n=0;n<4;n++)cv(e,t,r(o+n+.5),.05);for(let n of a.arp.slice(0,3))$(e,t,X_(n),r(o),.035,{type:`sine`,a:.3,hold:r(3),d:.6})}else{ov(e,t,r(o)),ov(e,t,r(o+2)),i%2==1&&ov(e,t,r(o+2.5),.6),sv(e,t,r(o+1)),sv(e,t,r(o+3));for(let n=0;n<8;n++)cv(e,t,r(o+n*.5),n%2?.07:.11);for(let n=0;n<8;n++)$(e,t,X_(a.root+(n%2?12:0)),r(o+n*.5),.2,{type:`square`,d:.22,lp:700});for(let i=0;i<8;i++)$(e,t,X_(a.arp[i%4]+12),r(o+i*.5),n===`solo`?.045:.07,{type:`triangle`,d:.18});if(n===`solo`){for(let[n,a,s]of av[i])$(e,t,X_(a),r(o+n),.1,{type:`square`,lp:2600,hold:r(s)*.7,d:.12,vibrato:.006});if(i%4==3)for(let n=0;n<4;n++)sv(e,t,r(o+3+n*.25),.18+n*.05)}i%4==0&&lv(e,t,r(o),.18)}}}async function dv(e){let t=await Z_(22,(t,n)=>{let r=t.createGain();r.gain.value=.8,r.connect(n),uv(t,r,e)}),n=Math.round(20*K_),r=new AudioBuffer({length:n,sampleRate:K_,numberOfChannels:1}),i=t.getChannelData(0),a=r.getChannelData(0);a.set(i.subarray(0,n));for(let e=n;e<i.length;e++)a[e-n]+=i[e];return r}async function fv(){let e=e=>e*q_;return[await Z_(e(6),(t,n)=>{[72,76,79,84].forEach((r,i)=>$(t,n,X_(r),e(i),.12,{type:`square`,lp:2400,hold:e(.6),d:.1}));for(let r=0;r<8;r++)sv(t,n,e(2+r*.25),.12+r*.04);ov(t,n,e(0),.7),ov(t,n,e(4)),lv(t,n,e(4),.4)}),await Z_(e(6),(t,n)=>{[220,196,165,147,131,110].forEach((r,i)=>$(t,n,r,e(1+i*.5),.5,{end:r*.6,glide:.12,d:.18})),cv(t,n,e(0),.1),cv(t,n,e(.5),.08),ov(t,n,e(4)),lv(t,n,e(4),.4),$(t,n,X_(72),e(4),.1,{type:`square`,lp:2400,hold:e(.5),d:.2})})]}async function pv(){let e={};return e.stinger=await Z_(1.3,(e,t)=>{[67,66,65].forEach((n,r)=>$(e,t,X_(n),r*.2,.16,{type:`square`,lp:1800,hold:.12,d:.08,vibrato:.01})),$(e,t,X_(64),.6,.16,{type:`square`,lp:1600,hold:.35,d:.25,end:X_(52),glide:.6,vibrato:.02}),$(e,t,80,0,.4,{end:40,glide:.2,d:.2})}),e.crunch=await Z_(.4,(e,t)=>{ev(e,t,0,.6,{f:700,q:.8,d:.22,fEnd:300}),ev(e,t,.02,.3,{type:`highpass`,f:2500,d:.08}),$(e,t,110,0,.5,{end:45,glide:.12,d:.15})}),e.blip=await Z_(.15,(e,t)=>$(e,t,880,0,.18,{type:`square`,lp:4e3,hold:.03,d:.05})),e.cashIn=await Z_(.6,(e,t)=>{[84,88,91,96].forEach((n,r)=>{$(e,t,X_(n),r*.06,.13,{type:`square`,lp:5e3,hold:.03,d:.12}),$(e,t,X_(n),r*.06,.1,{type:`triangle`,d:.25})})}),e.tntBuzz=await Z_(.7,(e,t)=>{ev(e,t,0,.2,{type:`highpass`,f:3500,hold:.45,d:.1,am:24}),$(e,t,110,0,.12,{type:`sawtooth`,lp:1200,hold:.45,d:.1})}),e.explosion=await Z_(2,(e,t)=>{ev(e,t,0,.9,{type:`lowpass`,f:4e3,fEnd:150,q:.5,d:1.4}),$(e,t,90,0,.9,{end:28,glide:.5,d:.7}),ev(e,t,.05,.3,{type:`highpass`,f:3e3,d:.5})}),e.wobble=await Z_(.8,(e,t)=>{ev(e,t,0,.35,{f:450,q:2,hold:.45,d:.15,am:17}),$(e,t,140,0,.12,{type:`triangle`,hold:.45,d:.15,vibrato:.08})}),e.collapse=await Z_(.9,(e,t)=>{for(let n=0;n<5;n++)ev(e,t,n*.05,.4-n*.05,{type:`lowpass`,f:900-n*100,d:.25});$(e,t,95,.12,.45,{end:40,glide:.2,d:.25})}),e.horn=await Z_(.6,(e,t)=>{for(let n of[392,494])$(e,t,n,0,.14,{type:`square`,lp:1800,a:.015,hold:.36,d:.08})}),e.crash=await Z_(.7,(e,t)=>{$(e,t,85,0,.8,{end:38,glide:.15,d:.25}),ev(e,t,0,.6,{f:1500,q:.6,d:.3,fEnd:600}),ev(e,t,.03,.25,{type:`highpass`,f:5e3,d:.3})}),e.coin=await Z_(.35,(e,t)=>{$(e,t,X_(88),0,.12,{type:`square`,lp:6e3,hold:.04,d:.05}),$(e,t,X_(95),.06,.12,{type:`square`,lp:6e3,hold:.05,d:.18}),$(e,t,X_(95),.06,.08,{type:`triangle`,d:.25})}),e.coinReached=await Z_(.12,(e,t)=>$(e,t,X_(100),0,.09,{type:`square`,lp:7e3,hold:.01,d:.05})),e.buttonDown=await Z_(.08,(e,t)=>{$(e,t,300,0,.18,{type:`square`,lp:2200,hold:.005,d:.03,end:180,glide:.03}),ev(e,t,0,.12,{type:`highpass`,f:3e3,d:.015})}),e.buttonUp=await Z_(.08,(e,t)=>$(e,t,520,0,.12,{type:`square`,lp:3e3,hold:.005,d:.03,end:700,glide:.02})),e.spinTick=await Z_(.05,(e,t)=>$(e,t,1500,0,.16,{type:`square`,lp:5e3,hold:.004,d:.02})),e.spinFinal=await Z_(.35,(e,t)=>{$(e,t,X_(84),0,.16,{type:`square`,lp:5e3,hold:.05,d:.2}),$(e,t,X_(91),.05,.12,{type:`triangle`,hold:.05,d:.2})}),e.clawMove=await Z_(.9,(e,t)=>{$(e,t,70,0,.18,{type:`sawtooth`,lp:700,a:.05,hold:.7,d:.1,vibrato:.03}),ev(e,t,0,.08,{f:900,q:1.5,a:.05,hold:.7,d:.1,am:30})}),e.clawStop=await Z_(.3,(e,t)=>{ev(e,t,0,.35,{type:`highpass`,f:2200,d:.05}),$(e,t,420,0,.18,{type:`square`,lp:2500,hold:.01,d:.06,end:260,glide:.05}),$(e,t,140,.02,.3,{end:80,glide:.1,d:.12})}),e.lever=await Z_(.3,(e,t)=>{ev(e,t,0,.25,{f:1200,q:2,d:.06}),$(e,t,200,.04,.25,{type:`square`,lp:1500,hold:.02,d:.08,end:120,glide:.08})}),e.launch=await Z_(.9,(e,t)=>{$(e,t,95,0,.9,{end:40,glide:.18,d:.25}),ev(e,t,0,.5,{f:900,q:.7,d:.12}),ev(e,t,.05,.25,{type:`bandpass`,f:600,fEnd:2600,q:1.2,a:.1,hold:.25,d:.35}),$(e,t,X_(72),.06,.1,{type:`square`,lp:3e3,hold:.05,d:.3,end:X_(84),glide:.3})}),e.land=await Z_(.5,(e,t)=>{$(e,t,110,0,.7,{end:45,glide:.12,d:.2}),ev(e,t,0,.45,{type:`lowpass`,f:1200,fEnd:300,d:.18})}),e.prizeNew=await Z_(1.4,(e,t)=>{ev(e,t,0,.3,{type:`highpass`,f:3e3,d:.12}),[72,76,79,84,88,91,96].forEach((n,r)=>{$(e,t,X_(n),.08+r*.07,.12,{type:`square`,lp:6e3,hold:.04,d:.18}),$(e,t,X_(n),.08+r*.07,.09,{type:`triangle`,d:.4})}),$(e,t,X_(96),.6,.1,{type:`triangle`,hold:.25,d:.5,vibrato:.01})}),e.prizeOld=await Z_(.7,(e,t)=>{ev(e,t,0,.25,{type:`highpass`,f:2500,d:.1}),[79,84].forEach((n,r)=>$(e,t,X_(n),.08+r*.1,.12,{type:`square`,lp:5e3,hold:.04,d:.2}))}),e.engineLow=await Z_(1,(e,t)=>{$(e,t,50,0,.35,{type:`sawtooth`,a:.001,hold:1,d:.001,lp:500}),$(e,t,25,0,.25,{type:`square`,a:.001,hold:1,d:.001,lp:300})}),e.engineHigh=await Z_(1,(e,t)=>{$(e,t,100,0,.22,{type:`square`,a:.001,hold:1,d:.001,lp:1400}),$(e,t,150,0,.12,{type:`sawtooth`,a:.001,hold:1,d:.001,lp:1400})}),e}async function mv(){let e=await nv(),[t,n,r]=await Promise.all([dv(`menu`),dv(`intro`),dv(`solo`)]),i=await fv(),a=await pv();return{steps:e,stems:{menu:t,intro:n,solo:r},licks:i,sfx:a}}async function hv(){let[e,t,n]=await Promise.all([dv(`menu`),dv(`intro`),dv(`solo`)]);return{stems:{menu:e,intro:t,solo:n},licks:await fv()}}var gv={slab:`PAVEMENT`,slabWarm:`WOOD`,slabWorn:`DIRT`,slabDark:`METAL`,mat:`CLOTH`},_v=e=>({bpm:96,beatsPerBar:16,introOffsetInBeats:0,fadeToInBeats:1,volume:e,introVolume:1,allowChangeOnBeats:1,beatOffsetForBarChange:0,loopLengthSec:20});function vv(e,t,n){let r=new L_({clips:n.licks});return new G_(e,{keepRockingForTimeAfterDeath:5},{menu:new W_(e,`menu`,_v(.75),n.stems.menu,t.groups.music),intro:new W_(e,`intro`,_v(.85),n.stems.intro,t.groups.music,r),solo:new W_(e,`solo`,_v(.85),n.stems.solo,t.groups.music)},!0)}var yv=e=>e<0?0:e>1?1:e,bv=(e,t,n)=>yv((n-e)/(t-e)),xv=class e{ctx;core;shots;bank=null;director=null;sfxOn=!0;musicOn=!0;pools=new Map;engines=new Map;ticksThisFrame=0;now=0;error=null;info={footsteps:0,styled:0,sfx:0,engines:0,horns:0};constructor(e){this.ctx=e,this.core=new P_(e,{ui:0,foley:-2,vo:0,vehicle:-4,music:0}),this.shots=new I_(this.core),F_(e);let t=navigator.audioSession;t&&`type`in t&&(t.type=`ambient`)}static create(){let t=window.AudioContext??window.webkitAudioContext;if(!t||typeof OfflineAudioContext>`u`)return null;let n;try{n=new t({latencyHint:`interactive`})}catch{return null}let r=new e(n);return mv().then(e=>{r.bank=e;for(let[t,n]of Object.entries(e.steps))r.pools.set(`${t}.heel`,new L_({clips:n.heel,volume:.6,minTimeBetweenPlays:.05})),r.pools.set(`${t}.toe`,new L_({clips:n.toe,volume:.45,minTimeBetweenPlays:.05}));r.director=vv(n,r.core,e)}).catch(e=>{r.error=String(e),console.warn(`[audio] sound bank failed`,e)}),r}get ready(){return!!this.bank&&!!this.director}get muted(){return!this.sfxOn&&!this.musicOn}setVolumes(e,t){this.sfxOn=e,this.musicOn=t,this.core.updateMixerVolumes(!t,!e,!1,-3)}setBackgrounded(e){e?this.ctx.suspend().catch(()=>{}):this.ctx.resume().catch(()=>{})}footstep(e,t){if(!this.ready)return;let n=t?gv[t]:void 0,r=this.pools.get(`${t?n??`none`:`CHAR`}.${e}`),i=this.ctx.currentTime+.02+this.ticksThisFrame/60;r?.playNext(this.shots,`foley`,1,this.now,i)&&(this.info.footsteps++,n&&this.info.styled++)}tick(){this.ticksThisFrame++}play(e,t=`ui`,n=1,r=1,i=0){let a=this.bank?.sfx[e];a&&(this.shots.play(a,t,n,0,r,i),this.info.sfx++)}spatial(e,t){return{g:yv(1-(Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z)-1)/59)**2,pan:Math.max(-1,Math.min(1,(e.z-t.z)/14))}}playAt(e,t,n,r=1,i=`foley`){let a=this.spatial(t,n);a.g>.001&&this.play(e,i,r*a.g,1,a.pan)}horn(e,t){this.playAt(`horn`,e,t,.9,`vehicle`),this.info.horns++}update(e){this.now=e.now,this.ticksThisFrame=0,this.core.updateMixerVolumes(!this.musicOn,!this.sfxOn,e.paused,-3),this.ready&&(this.director.update({numGamesSinceStartup:e.runs,playerHasDiedThisRound:e.dead,isInGameplay:!0,timeSincePlayerLastDied:e.dead?e.timeSinceDeath:0,shouldMuteSoundForAd:!1,hasPlayerStartedStepping:e.started,unscaledDeltaTime:e.realDt}),this.updateEngines(e))}updateEngines(e){let t=new Set,n=this.ctx,r=n.currentTime;for(let i of e.cars){let a=this.spatial(i.pos,e.listener);if(a.g<=.002||e.paused)continue;t.add(i.id);let o=this.engines.get(i.id);if(!o){let e=n.createGain();e.gain.value=0;let t=null;typeof n.createStereoPanner==`function`?(t=n.createStereoPanner(),e.connect(t).connect(this.core.groups.vehicle)):e.connect(this.core.groups.vehicle);let a=t=>{let i=n.createBufferSource();i.buffer=t,i.loop=!0;let a=n.createGain();return a.gain.value=0,i.connect(a).connect(e),i.start(r,Math.random()*t.duration),[i,a]},[s,c]=a(this.bank.sfx.engineLow),[l,u]=a(this.bank.sfx.engineHigh);o={low:s,high:l,gLow:c,gHigh:u,out:e,pan:t},this.engines.set(i.id,o)}let s=yv(i.speed%5/5*.75+Math.min(i.speed/20,1)*.25),c=Math.min(6,6*s+1*(1-s))*e.slowdown,l=bv(.1,50,i.speed),u=bv(.2,.8,s),d=1-(1-l)**2,f=1-l*l,p=1-u*u,m=1-(1-u)**2;o.low.playbackRate.setTargetAtTime(Math.max(.3,c*.55),r,.03),o.high.playbackRate.setTargetAtTime(Math.max(.3,c*.5),r,.03),o.gLow.gain.setTargetAtTime((d+f)*.5*p,r,.03),o.gHigh.gain.setTargetAtTime((d+f)*.5*m,r,.03),o.out.gain.setTargetAtTime(.55*a.g,r,.05),o.pan?.pan.setTargetAtTime(a.pan,r,.05)}for(let[e,n]of this.engines)t.has(e)||(n.out.gain.setTargetAtTime(0,r,.03),n.low.stop(r+.2),n.high.stop(r+.2),this.engines.delete(e));this.info.engines=this.engines.size}};async function Sv(e=3.5){let t=performance.now(),n=await hv(),r=performance.now()-t,i=new OfflineAudioContext(1,Math.ceil(e*K_),K_),a=new P_(i,{ui:0,foley:-2,vo:0,vehicle:-4,music:0});a.updateMixerVolumes(!1,!1,!1,-3);let o=vv(i,a,n),s={numGamesSinceStartup:0,playerHasDiedThisRound:!1,isInGameplay:!0,timeSincePlayerLastDied:0,shouldMuteSoundForAd:!1,unscaledDeltaTime:1/60};for(let e=0;e<3;e++)o.update({...s,hasPlayerStartedStepping:!1});for(let e=0;e<90;e++)o.update({...s,hasPlayerStartedStepping:!0});let c=new I_(a),l=i.createBuffer(1,400,K_);l.getChannelData(0).forEach((e,t,n)=>n[t]=Math.exp(-t/60)*(t%2?.5:-.5)),c.play(l,`foley`,1,.05);let u=(await i.startRendering()).getChannelData(0),d=(e,t)=>{let n=0,r=Math.floor(e*K_),i=Math.min(u.length,Math.floor(t*K_));for(let e=r;e<i;e++)n+=u[e]*u[e];return Math.sqrt(n/Math.max(1,i-r))},f=0,p=!1;for(let e of u)Number.isFinite(e)?f=Math.max(f,Math.abs(e)):p=!0;return{rms:d(0,e),peak:f,rmsFirst2s:d(0,2),rmsAfterDuck:d(2.9,e),nan:p,main:o.main?.name??null,introVol:o.intro.vol,bankMs:r}}var Cv={stage(){},done(){},fail(){}},wv=()=>window.__boot??Cv,Tv=Math.log(.9),Ev=class{type;count=1;pos=0;velocity=0;target=null;held=!1;lastMoveWasFromDrag=!1;dragStartPos=0;samples=[];constructor(e){this.type=e}get maxScrollIndex(){return this.count-1}get selectedIndex(){return Math.max(0,Math.min(this.maxScrollIndex,Math.round(this.pos)))}get listPosition(){return this.pos-this.selectedIndex}get willLandAtIndex(){return this.target??this.selectedIndex}get isSettled(){return!this.held&&this.target===null&&Math.abs(this.velocity)<.01&&Math.abs(this.listPosition)<.01}setCount(e){this.count=Math.max(1,e),this.pos=Math.max(0,Math.min(this.maxScrollIndex,this.pos))}snapTo(e){this.pos=Math.max(0,Math.min(this.maxScrollIndex,Math.round(e))),this.velocity=0,this.target=null}scrollToSelectionIndex(e){let t=Math.max(0,Math.min(this.maxScrollIndex,Math.round(e)));this.held=!1,this.target=t,this.velocity=(this.pos-t)*Tv,this.lastMoveWasFromDrag=!1}dragStart(){this.held=!0,this.target=null,this.velocity=0,this.samples=[],this.dragStartPos=this.pos}dragTo(e,t){if(!this.held)return;let n=this.pos,r=this.dragStartPos+e;r<0?r*=.3:r>this.maxScrollIndex&&(r=this.maxScrollIndex+(r-this.maxScrollIndex)*.3),this.pos=r;let i=Math.max(.001,t*60);this.samples.unshift((r-n)/i),this.samples.length>4&&(this.samples.length=4),this.velocity=this.samples.reduce((e,t)=>e+t,0)/this.samples.length}dragEnd(){if(!this.held)return;this.held=!1,this.lastMoveWasFromDrag=!0;let e=Math.round(this.pos-this.velocity/Tv),t=Math.round(this.dragStartPos);e===t&&Math.abs(this.velocity)>.012&&(e=t+Math.sign(this.velocity)),this.scrollToSelectionIndex(e),this.lastMoveWasFromDrag=!0}update(e){if(this.held)return 0;let t=this.selectedIndex,n=60*Math.max(0,e),r=Tv;if(this.target!==null){let e=Math.exp(n*r);this.pos+=this.velocity*(e/r-1/r),this.velocity*=e,Math.abs(this.pos-this.target)<.005&&Math.abs(this.velocity)<.005&&(this.pos=this.target,this.velocity=0,this.target=null)}else(Math.abs(this.listPosition)>1e-4||this.pos<0||this.pos>this.maxScrollIndex)&&this.scrollToSelectionIndex(this.selectedIndex);return Math.abs(this.selectedIndex-t)}},Dv=class{chars;columns=[new Ev(0),new Ev(1),new Ev(2)];order=[];female=!1;focus=2;exiting=!1;flashLockedFrom=-100;constructor(e){this.chars=e}enter(){this.order=this.chars.characterOrder();let e=this.chars.selection(),t=[e.legs,e.body,e.head];this.female=e.female;for(let e of Sh){let n=this.columns[e];n.setCount(this.order.length);let r=this.order.indexOf(t[e]);n.snapTo(r<0?0:r)}this.exiting=!1,this.focus=2,this.flashLockedFrom=-100}characterAt(e){return this.chars.byIndex(this.order[e]??-1)}selectedCharacter(e){return this.characterAt(this.columns[e].willLandAtIndex)}isSelectedUnlocked(e){return this.chars.isSliceUnlocked(this.selectedCharacter(e),e)}get selection(){let e=e=>this.order[this.columns[e].willLandAtIndex]??0;return{legs:e(0),body:e(1),head:e(2),female:this.female}}get canConfirmSelection(){return Sh.every(e=>this.isSelectedUnlocked(e))}get suggestedPurchasableSelectionIndex(){let e=this.columns[this.focus];if(this.isSelectedUnlocked(this.focus)){for(let e of[2,1,0])if(!this.isSelectedUnlocked(e))return this.columns[e].willLandAtIndex;return-1}return e.willLandAtIndex}get lockedCombinationIndexOfSuggestedPurchase(){let e=this.suggestedPurchasableSelectionIndex;if(e<0)return 0;let t=0;for(let n of Sh)this.columns[n].willLandAtIndex===e&&!this.isSelectedUnlocked(n)&&(t|=1<<n);return t}get suggestion(){let e=this.suggestedPurchasableSelectionIndex,t=this.lockedCombinationIndexOfSuggestedPurchase,n=this.characterAt(e);return e>=0&&t>0&&n?{character:n,mask:t}:null}confirm(e){if(this.exiting)return{kind:`none`};let t=this.suggestion;return t?(this.flashLockedFrom=e,{kind:`locked`,character:t.character,mask:t.mask,prizeMachine:t.character.rarity>0}):this.canConfirmSelection?{kind:`accept`,selection:this.selection}:(this.flashLockedFrom=e,{kind:`none`})}step(e,t){let n=this.columns[e];this.focus=e,n.scrollToSelectionIndex(n.willLandAtIndex+t)}backout(){let e=this.chars.selection(),t=[e.legs,e.body,e.head],n=!0;for(let e of Sh){let r=Math.max(0,this.order.indexOf(t[e]));this.columns[e].willLandAtIndex===r&&this.columns[e].isSettled||(n=!1,this.columns[e].scrollToSelectionIndex(r))}return this.female=e.female,n?!0:(this.exiting=!0,!1)}update(e){let t=0;for(let n of this.columns){n.update(e);let r=n.selectedIndex;t+=Math.abs(r-(this.lastIdx.get(n)??r)),this.lastIdx.set(n,r)}let n=!1;return this.exiting&&this.columns.every(e=>e.isSettled)&&(this.exiting=!1,n=!0),{ticks:t,exitNow:n}}lastIdx=new Map},Ov=`
  #ui .cs { position: absolute; inset: 0; display: none; pointer-events: none; }
  #ui .cs.open { display: block; }
  #ui .cs .cs-touch { position: absolute; inset: 0; pointer-events: auto; touch-action: none; }
  #ui .cs .cs-fade { position: absolute; inset: 0; background: #1d1830; pointer-events: none; opacity: 0; }
  #ui .cs .cs-top {
    position: absolute; left: calc(var(--ui-left) + 12px); right: calc(var(--ui-right) + 12px); top: calc(var(--ui-top) + 12px);
    display: flex; align-items: center; justify-content: space-between; gap: 10px; pointer-events: none;
  }
  #ui .cs .cs-back { min-height: 44px; padding: 4px 12px 9px; font-size: 18px; }
  #ui .cs .cs-title { font-family: var(--font-display); font-size: 16px; text-shadow: var(--outline); white-space: nowrap; }
  #ui .cs .cs-count { font-family: var(--font-display); font-size: 13px; color: #ffe066; text-shadow: var(--outline-sm); min-width: 64px; text-align: right; }
  #ui .cs .cs-info {
    position: absolute; left: 0; right: 0; top: calc(var(--ui-top) + 70px); text-align: center; pointer-events: none;
  }
  #ui .cs .cs-name { font-family: var(--font-display); font-size: 18px; line-height: 1.35; text-shadow: var(--outline); }
  #ui .cs .cs-sub { font-size: 18px; font-weight: 700; text-shadow: var(--outline-sm); margin-top: 4px; }
  #ui .cs .cs-sub .r1 { color: #c9f0a8; } #ui .cs .cs-sub .r2 { color: #8fd0ff; } #ui .cs .cs-sub .r3 { color: #ffb2f0; }
  #ui .cs .cs-sub .lock { color: #ffb0a0; }
  #ui .cs .cs-arrow {
    position: absolute; width: 44px; height: 44px; padding: 0; display: grid; place-items: center; --depth: 4px;
    transform: translateY(-50%); transition: opacity 0.15s;
  }
  #ui .cs .cs-arrow svg { width: 20px; height: 20px; }
  #ui .cs .cs-arrow.l { left: calc(var(--ui-left) + 8px); }
  #ui .cs .cs-arrow.r { right: calc(var(--ui-right) + 8px); }
  #ui .cs .cs-arrow.hide { opacity: 0; pointer-events: none; }
  #ui .cs .cs-arrow.focus { outline: 3px solid #ffe066; outline-offset: 2px; }
  #ui .cs .cs-bottom {
    position: absolute; left: 50%; bottom: calc(var(--ui-bottom) + 18px); transform: translateX(-50%);
    width: min(92vw, 420px); display: flex; align-items: stretch; gap: 12px; pointer-events: none;
  }
  #ui .cs .cs-gender { width: 72px; min-height: 64px; font-size: 20px; padding: 4px 4px 9px; }
  #ui .cs .cs-play { flex: 1; min-height: 64px; font-family: var(--font-display); font-size: 18px; padding: 8px 10px 13px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; }
  #ui .cs .cs-play small { font-family: var(--font-body); font-size: 17px; font-weight: 700; }
  #ui .cs .cs-play.flash { animation: cs-flash 0.5s steps(1) 2; }
  @keyframes cs-flash { 0% { filter: brightness(1.4) saturate(1.4); } 50% { filter: none; } }
  @media (max-height: 680px) {
    #ui .cs .cs-info { top: calc(var(--ui-top) + 60px); }
    #ui .cs .cs-name { font-size: 15px; }
    #ui .cs .cs-sub { font-size: 16px; }
    #ui .cs .cs-play, #ui .cs .cs-gender { min-height: 56px; }
  }
`,kv={l:`<svg viewBox="0 0 8 8" shape-rendering="crispEdges"><path fill="currentColor" d="M5 0h2v1H6v1H5v1H4v2h1v1h1v1h1v1H5V7H4V6H3V5H2V3h1V2h1V1h1z"/></svg>`,r:`<svg viewBox="0 0 8 8" shape-rendering="crispEdges"><path fill="currentColor" d="M1 0h2v1h1v1h1v1h1v2H5v1H4v1H3v1H1V7h1V6h1V5h1V3H3V2H2V1H1z"/></svg>`},Av=[1.03,1.39],jv=[[-.02,1.03],[1.05,1.39],[1.41,1.74]];function Mv(){let e=[`....kkkk....`,`...kwwwwk...`,`..kwk..kwk..`,`..kwk..kwk..`,`..kwk..kwk..`,`.kkkkkkkkkk.`,`kyyyyyyyyyyk`,`kyyyykkyyyyk`,`kyyyykkyyyyk`,`kyyyyykyyyyk`,`kyyyyyyyyyyk`,`kooooooooook`,`.kkkkkkkkkk.`],t={k:`#2a2433`,w:`#d8d8e0`,y:`#ffcf1f`,o:`#e59a12`},n=document.createElement(`canvas`);n.width=12,n.height=e.length;let i=n.getContext(`2d`);e.forEach((e,n)=>[...e].forEach((e,r)=>{t[e]&&(i.fillStyle=t[e],i.fillRect(r,n,1,1))}));let a=new ia(n);return a.magFilter=a.minFilter=r,a.generateMipmaps=!1,a.colorSpace=Ie,a}var Nv=class{tt;scene=new Fn;camera=new oo(30,1,.1,60);isOpen=!1;chars;parts;cb;items=new Map;lockMat;disc;bars=[];barMats=[];spin=0;spacing=.7;viewW=390;viewH=844;rowY=[0,0,0];now=0;genderPop=0;el;fade;title;count;name;sub;arrows=[];backBtn;genderBtn;playBtn;lastLabel=``;drag=null;constructor(e,t,n,r){this.chars=t,this.parts=n,this.cb=r,this.tt=new Dv(t),this.scene.name=`characterSelect`,this.scene.background=new K(`#3b3256`),this.scene.fog=new Pn(`#3b3256`,30,60);let i=new fo(`#ffffff`,2.1);i.position.set(1.5,3,4);let a=new fo(`#c8b8ff`,.5);a.position.set(-3,1,-2),this.scene.add(i,a),this.lockMat=new Br({map:Mv(),depthTest:!1,transparent:!0}),this.disc=new q(new la(.46,.5,.07,24),[new Ta({color:`#c99a2e`}),new Ta({color:`#f2c94c`}),new Ta({color:`#c99a2e`})]),this.disc.position.set(0,-.035,.35);let o=new q(new ca(.12,.012,.3),new Ta({color:`#e07a2e`}));o.position.set(0,.04,.24),this.disc.add(o),this.scene.add(this.disc);for(let e=0;e<3;e++){let e=new si({color:`#4a3f63`}),t=new q(new pa(1,1),e);this.bars.push(t),this.barMats.push(e),this.scene.add(t)}let s=document.createElement(`style`);s.textContent=Ov,document.head.appendChild(s);let c=(e,t,n=`div`)=>{let r=document.createElement(n);return r.className=e,t.appendChild(r),r};this.el=c(`cs`,e);let l=c(`cs-touch`,this.el);this.fade=c(`cs-fade`,this.el);let u=c(`cs-top`,this.el);this.backBtn=this.button(`cs-back blue`,u,()=>this.back()),this.title=c(`cs-title`,u),this.count=c(`cs-count`,u);let d=c(`cs-info`,this.el);this.name=c(`cs-name`,d),this.sub=c(`cs-sub`,d);for(let e of Sh){let t=this.button(`cs-arrow l blue`,this.el,()=>this.step(e,-1),kv.l),n=this.button(`cs-arrow r blue`,this.el,()=>this.step(e,1),kv.r);t.dataset.row=n.dataset.row=String(e),t.setAttribute(`aria-label`,`<`),n.setAttribute(`aria-label`,`>`),this.arrows.push({l:t,r:n})}let f=c(`cs-bottom`,this.el);this.genderBtn=this.button(`cs-gender purple`,f,()=>this.toggleGender()),this.playBtn=this.button(`cs-play green`,f,()=>this.confirm()),l.addEventListener(`pointerdown`,e=>this.onDown(e)),l.addEventListener(`pointermove`,e=>this.onMove(e)),l.addEventListener(`pointerup`,e=>this.onUp(e,!1)),l.addEventListener(`pointercancel`,e=>this.onUp(e,!0)),l.addEventListener(`wheel`,e=>{let t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:0;Math.abs(t)>4&&this.step(this.tt.focus,t>0?1:-1),e.preventDefault()},{passive:!1}),window.addEventListener(`keydown`,e=>{if(!this.isOpen)return;let t=this.tt.focus;if(e.key===`ArrowLeft`)this.step(t,-1);else if(e.key===`ArrowRight`)this.step(t,1);else if(e.key===`ArrowUp`)this.tt.focus=Math.min(2,t+1);else if(e.key===`ArrowDown`)this.tt.focus=Math.max(0,t-1);else if(e.key===`Enter`)this.confirm();else return;e.preventDefault()}),this.relabel()}button(e,t,n,r=``){let i=document.createElement(`button`);i.type=`button`,i.className=`b3d ${e}`,r&&(i.innerHTML=r),t.appendChild(i);let a=0;i.addEventListener(`pointerdown`,e=>{e.stopPropagation(),a=performance.now(),i.classList.add(`pressed`),this.cb.feedback(`down`)});let o=()=>{i.classList.contains(`pressed`)&&(setTimeout(()=>i.classList.remove(`pressed`),Math.max(0,100-(performance.now()-a))),this.cb.feedback(`up`))};return i.addEventListener(`pointerup`,o),i.addEventListener(`pointerleave`,o),i.addEventListener(`pointercancel`,o),i.addEventListener(`click`,e=>{e.stopPropagation(),i.blur(),n()}),i}open(){this.tt.enter(),this.isOpen=!0,this.el.classList.add(`open`),this.lastLabel=``,this.relabel(),this.resize(this.viewW,this.viewH)}hide(){this.isOpen=!1,this.el.classList.remove(`open`),this.drag=null;for(let e of this.tt.columns)e.held=!1}back(){this.isOpen&&!this.tt.exiting&&this.tt.backout()&&this.cb.close()}confirm(){if(!this.isOpen)return;let e=this.tt.confirm(this.now);e.kind===`accept`?this.cb.accept(e.selection):e.kind===`locked`?(this.cb.feedback(`error`),this.cb.toast(e.prizeMachine?Z(`CharacterLockedPrize`):Z(`ComingSoon`),e.prizeMachine),this.playBtn.classList.remove(`flash`),this.playBtn.offsetWidth,this.playBtn.classList.add(`flash`)):this.cb.feedback(`error`)}step(e,t){this.isOpen&&!this.tt.exiting&&this.tt.step(e,t)}toggleGender(){this.isOpen&&!this.tt.exiting&&(this.tt.female=!this.tt.female,this.genderPop=1,this.cb.feedback(`toggle`),this.relabel())}setAmount(e){this.fade.style.opacity=String(Math.max(0,1-Math.abs(2*e-1)*1.6));let t=e>=.5;for(let e of[this.el.querySelector(`.cs-top`),this.el.querySelector(`.cs-info`),this.el.querySelector(`.cs-bottom`)])e.style.opacity=t?`1`:`0`;for(let e of this.arrows)e.l.style.visibility=e.r.style.visibility=t?``:`hidden`}resize(e,t){this.viewW=Math.max(1,e),this.viewH=Math.max(1,t);let n=this.viewW/this.viewH;this.camera.aspect=n;let r=this.el.querySelector(`.cs-info`).getBoundingClientRect(),i=this.el.querySelector(`.cs-bottom`).getBoundingClientRect(),a=(r.height>0?r.bottom+10:this.viewH*.2)/this.viewH,o=(i.height>0?i.top-8:this.viewH*.86)/this.viewH,s=Math.max(.3,o-a),c=Math.max(3.2,2/s),l=this.camera.fov,u=c/2/Math.tan(l*Math.PI/360),d=1.8399999999999999/2-(.5-(a+o)/2)*c;this.camera.position.set(0,d+.12,u),this.camera.lookAt(0,d,0),this.camera.updateProjectionMatrix();let f=c*n;this.spacing=Math.max(.8,Math.min(1.2,f*.48));for(let e=0;e<3;e++){let[t,n]=jv[e];this.bars[e].scale.set(f*1.6+2,n-t,1),this.bars[e].position.set(0,(t+n)/2,-.7)}this.camera.updateMatrixWorld();let p=new W,m=e=>(p.set(0,e,0).project(this.camera),(1-p.y)/2*this.viewH);this.rowY=jv.map(([e,t])=>m((e+t)/2)),this.splitY=Av.map(m);for(let e of Sh)this.arrows[e].l.style.top=this.arrows[e].r.style.top=`${this.rowY[e]}px`}splitY=[0,0];rowAt(e){return e<this.splitY[1]?2:+(e<this.splitY[0])}onDown(e){if(!this.isOpen||this.drag||this.tt.exiting)return;let t=e.target.getBoundingClientRect(),n=e.clientY-t.top,r=this.rowAt(n);this.drag={id:e.pointerId,x0:e.clientX,y0:e.clientY,row:r,dragging:!1,lastT:performance.now()},this.tt.focus=r;try{e.target.setPointerCapture(e.pointerId)}catch{}}onMove(e){let t=this.drag;if(!t||e.pointerId!==t.id)return;let n=e.clientX-t.x0,r=this.tt.columns[t.row];if(!t.dragging&&Math.abs(n)>.03125*this.viewW&&(t.dragging=!0,r.dragStart()),t.dragging){let e=performance.now();r.dragTo(-n/this.spacingPx(),(e-t.lastT)/1e3),t.lastT=e}}onUp(e,t){let n=this.drag;if(!n||e.pointerId!==n.id)return;this.drag=null;let r=this.tt.columns[n.row];if(n.dragging)r.dragEnd();else if(!t){let t=e.clientX/this.viewW;t<.25?this.step(n.row,-1):t>.75&&this.step(n.row,1)}}spacingPx(){let e=new W(this.spacing,1,0).project(this.camera),t=new W(0,1,0).project(this.camera);return Math.max(20,Math.abs(e.x-t.x)/2*this.viewW)}update(e,t){if(this.now=t,!this.isOpen)return;let n=this.tt.update(e);n.ticks>0&&this.cb.feedback(`tick`),n.exitNow&&this.cb.close(),this.spin+=e*.7,this.genderPop=Math.max(0,this.genderPop-e*3),this.place(),this.relabel()}item(e,t,n,r){let i=`${e}|${t}|${+!!n}|${+!!r}`,a=this.items.get(i);if(a)return a;let o=this.chars.byIndex(e),s=Sg(this.parts,o,t,n,r),c=null;return r&&(c=new ei(this.lockMat),c.scale.set(.13,.14,1),c.renderOrder=5,c.visible=!1,this.scene.add(c)),s.visible=!1,this.scene.add(s),a={group:s,lock:c},this.items.set(i,a),a}place(){for(let e of this.items.values())e.group.visible=!1,e.lock&&(e.lock.visible=!1);let e=(this.spin+Math.PI)%(2*Math.PI)-Math.PI,t=this.now-this.tt.flashLockedFrom<1&&(this.now-this.tt.flashLockedFrom)%.5<.25;for(let n of Sh){let r=this.tt.columns[n],i=r.selectedIndex;for(let t=Math.max(0,i-2);t<=Math.min(r.maxScrollIndex,i+2);t++){let i=this.tt.characterAt(t);if(!i)continue;let a=!this.chars.isSliceUnlocked(i,n),o=this.item(i.order,n,this.tt.female,a),s=t-r.pos,c=Math.max(0,1-Math.abs(s)),l=o.group;l.visible=!0,l.position.set(s*this.spacing,0,.35*c-.15*(1-c)),l.rotation.y=c*e+(1-c)*Math.sign(s)*-.35;let u=.86+.14*c,d=1-.18*Math.sin(this.genderPop*Math.PI);if(l.scale.set(u,u*d,u),o.lock){let[e,t]=jv[n];o.lock.visible=!0,o.lock.position.set(l.position.x+.25*u,(e+t)/2+(n===0?.2:0),l.position.z+.3)}}let a=this.tt.isSelectedUnlocked(n);this.barMats[n].color.set(a?`#5b4d86`:t?`#d8344a`:`#3a3346`)}this.disc.rotation.y=e}relabel(){let e=this.tt,t=e.selectedCharacter(e.focus),n=this.chars.unlockCounter(),r=e.canConfirmSelection,i=e.suggestion,a=[Z(`BottomCharacters`),`${n.unlocked}/${n.total}`,t?Z(kh(t)):``,t?this.rarityHtml(t):``,r?`play`:`buy|${i?i.character.id+i.mask:``}`,e.female?`f`:`m`,e.focus].join(`#`);for(let t of Sh){let n=e.columns[t];this.arrows[t].l.classList.toggle(`hide`,n.willLandAtIndex<=0),this.arrows[t].r.classList.toggle(`hide`,n.willLandAtIndex>=n.maxScrollIndex),this.arrows[t].l.classList.toggle(`focus`,t===e.focus),this.arrows[t].r.classList.toggle(`focus`,t===e.focus)}if(a!==this.lastLabel){if(this.lastLabel=a,this.title.textContent=Z(`BottomCharacters`),this.count.textContent=`${n.unlocked}/${n.total}`,this.name.textContent=t?Z(kh(t)):``,this.sub.innerHTML=t?this.rarityHtml(t):``,this.backBtn.textContent=Z(`Back`),this.genderBtn.textContent=e.female?Z(`CharacterGenderFemale`):Z(`CharacterGenderMale`),this.genderBtn.setAttribute(`aria-pressed`,e.female?`true`:`false`),r)this.playBtn.textContent=Z(`StartGame`),this.playBtn.classList.add(`green`),this.playBtn.classList.remove(`purple`);else{if(this.playBtn.innerHTML=``,this.playBtn.append(Z(`Buy`)),i){let e=document.createElement(`small`);e.textContent=`${Z(kh(i.character))}: ${Z(Oh(i.mask)??``)}`,this.playBtn.append(e)}this.playBtn.classList.remove(`green`),this.playBtn.classList.add(`purple`)}}}rarityHtml(e){let t=e=>e.replace(/[&<>]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`})[e]),n=[];e.rarity>0&&n.push(`<span class="r${e.rarity}">${t(Z([``,`RarityCommon`,`RarityUncommon`,`RarityRare`][e.rarity]))}</span>`);let r=this.chars.numSlicesUnlocked(e);return n.push(`<span class="${this.chars.isSliceUnlocked(e,this.tt.focus)?``:`lock`}">${t(Z(`CharacterAmountUnlockedFormating`,r))}</span>`),n.join(` · `)}render(e){Iv(e,this.scene,this.camera)}clearCache(){for(let e of this.items.values())this.scene.remove(e.group),e.lock&&this.scene.remove(e.lock),bg(e.group);this.items.clear()}info(){let e=this.tt;return{open:this.isOpen,order:e.order,columns:e.columns.map(t=>({index:t.willLandAtIndex,character:e.characterAt(t.willLandAtIndex)?.id??null,unlocked:this.chars.isSliceUnlocked(e.characterAt(t.willLandAtIndex),t.type),settled:t.isSettled})),focus:e.focus,female:e.female,canConfirm:e.canConfirmSelection,suggestion:e.suggestion?{id:e.suggestion.character.id,mask:e.suggestion.mask}:null,button:this.playBtn.textContent,name:this.name.textContent,sub:this.sub.textContent,count:this.count.textContent,exiting:e.exiting,rowY:this.rowY.map(e=>Math.round(e)),items:[...this.items.values()].filter(e=>e.group.visible).length}}},Pv=class{scene=new Fn;camera=new oo(24,1,.1,80);labels=[];groups=[];n;gap=.82;angle=-.42;constructor(e,t,n,r){this.scene.background=new K(`#3b3256`),this.scene.fog=new Pn(`#3b3256`,40,80);let i=new fo(`#ffffff`,2.1);i.position.set(2,3,4);let a=new fo(`#c8b8ff`,.5);a.position.set(-3,1,-2),this.scene.add(i,a);let o=[...t.catalog].sort((e,t)=>e.order-t.order);this.n=o.length;let s=document.createElement(`div`);s.className=`lineup`,s.style.cssText=`position:absolute;inset:0;pointer-events:none`,e.appendChild(s),o.forEach((e,t)=>{let i=(t-(this.n-1)/2)*this.gap,a=new En;for(let t of Sh)a.add(Sg(n,e,t,r,!1));a.position.x=i,a.rotation.y=this.angle,this.scene.add(a),this.groups.push(a);let o=document.createElement(`div`);o.textContent=Z(kh(e)),o.style.cssText=`position:absolute;transform:translateX(-50%);font-family:var(--font-body);font-weight:700;font-size:15px;text-shadow:var(--outline-sm);white-space:nowrap;color:#fff`,s.appendChild(o),this.labels.push({el:o,x:i})});let c=new q(new ca(this.n*this.gap+1,.06,1.2),new Ta({color:`#5b4d86`}));c.position.y=-.03,this.scene.add(c)}resize(e,t){let n=e/Math.max(1,t);this.camera.aspect=n;let r=this.n*this.gap+.4,i=Math.max(2.3,r/n)/2/Math.tan(this.camera.fov*Math.PI/360);this.camera.position.set(0,1,i),this.camera.lookAt(0,.92,0),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld();let a=new W;for(let n of this.labels)a.set(n.x,-.12,.4).project(this.camera),n.el.style.left=`${(a.x+1)/2*e}px`,n.el.style.top=`${(1-a.y)/2*t}px`}render(e){Iv(e,this.scene,this.camera)}},Fv=[[.62,.6,.78],[.5,.47,.6],[.32,.28,.4]];function Iv(e,t,n,r=Fv){let i=[Ql.ambSky.value.clone(),Ql.ambEquator.value.clone(),Ql.ambGround.value.clone(),Ql.globalColoring.value.clone()];Ql.ambSky.value.setRGB(...r[0]),Ql.ambEquator.value.setRGB(...r[1]),Ql.ambGround.value.setRGB(...r[2]),Ql.globalColoring.value.setRGB(1,1,1);let a=e.shadowMap.enabled;e.shadowMap.enabled=!1,e.render(t,n),e.shadowMap.enabled=a,Ql.ambSky.value.copy(i[0]),Ql.ambEquator.value.copy(i[1]),Ql.ambGround.value.copy(i[2]),Ql.globalColoring.value.copy(i[3])}var Lv=[{name:`Common`,rarityKey:`RarityCommon`,color:`#27b36a`,coinsToAward:20,airFlyLength:3,chanceOfLandingOnTile:100},{name:`Uncommon`,rarityKey:`RarityUncommon`,color:`#2f86e0`,coinsToAward:20,airFlyLength:3,chanceOfLandingOnTile:100},{name:`Rare`,rarityKey:`RarityRare`,color:`#9a52e0`,coinsToAward:20,airFlyLength:3,chanceOfLandingOnTile:100}],Rv=216e5,zv=`GachaAdButtonTime`,Bv={launchVelocity:.5,friction:.97,settleLerp:.8,wedgeDegrees:60,firstTileOffset:12,distancePerTile:3,tileWidth:2},Vv=e=>e>99,Hv=(e,t)=>Math.trunc(e/t),Uv=(e,t)=>(e%t+t)%t,Wv=(e,t=Lv.length)=>Uv(Math.round(e),t);function Gv(e,t,n,r=Fh(e,Lv.length)){let i=r[r.length-1].onePastLastTile,a=t.item(`CharacterUnlockCount`).value,o=null,s=[];for(let t=0;t<i;t++){let n=Lh(r,t);if(!n)continue;let i=e.unlockedValue(n.character,n.slice);i>0&&(!o||i>o.v)&&(o={tile:t,slice:n.slice,v:i}),s.push(t)}if(!s.length)return null;let c=t.item(`LastGotRepeatAtUnlockCount`).value,l=c===0?-1:a-c,u=n.overrideSelection>=0?n.overrideSelection:a===0?0:-1,d=0,f=[],p=[];for(let t of s){let i=Lh(r,t),s=Ih(r,t),c=Lv[s.index].chanceOfLandingOnTile,m=e.unlockedValue(i.character,i.slice),h;h=o&&o.tile===t||m===-1?0:m<1?c*n.newModifier*(l===1?18:l===0?60:6):Math.min(5,Math.max(0,a-2-m))*c*(l>5?2:1),u>=0&&s.index!==u&&(h=0),a===0&&i.slice!==0&&(h=0),o&&o.slice===i.slice||(h*=3),h=Math.trunc(h),p.push(h),d+=h,f.push(d)}if(d===0){for(let e=0;e<s.length;e++)f[e]=e+1;d=s.length}let m=t.item(`RandomValueForNextCharacterUnlock`).value,h=d?Uv(m,d):m,g=f.findIndex(e=>h<e),_=s[g>=0?g:s.length-1],v=Lh(r,_);return{tile:_,typeIndex:Ih(r,_).index,character:v.character,slice:v.slice,candidates:s,weights:p,sum:d,r:h}}var Kv=class{chars;inv;types;random;hasStartedLaunch=!1;rotatedToIndex=0;velocity=0;willLandOnSelection=0;landedOnSelectedAtTime=-1;overrideSelection=-1;newModifier=1;suppressInitialUI=!1;isYodo1PurchaseLaunch=!1;result=null;retryOffered=!1;lastWedge=0;constructor(e,t,n={}){this.chars=e,this.inv=t,this.random=n.random??Math.random,this.types=Fh(e,Lv.length)}get coins(){return this.inv.Coins.value}get canAfford(){return Vv(this.coins)}get onePastLastTile(){return this.types[this.types.length-1].onePastLastTile}adCooldownMs(){let e=this.inv.date(zv);return e.hasBeenSet?e.timeUntil:-1}get adCooldownOver(){return this.adCooldownMs()<0}preLaunch(){return!this.hasStartedLaunch&&(this.hasStartedLaunch=!0,this.inv.item(`WinAPrizePurchaseCount`).add(1),this.inv.item(`WinAPrizeSeenCountSinceAvaiable`).value=0,this.retryOffered=!1,!0)}purchaseLaunch(){return this.hasStartedLaunch||!this.canAfford?null:(this.preLaunch(),this.inv.Coins.add(-100),this.isYodo1PurchaseLaunch=!1,this.startLaunch(`coins`))}yodo1PurchaseLaunch(e){return this.hasStartedLaunch?null:(e===`gacha`&&(this.inv.date(zv).timeUntil=Rv),this.inv.item(`AdsWatched`).add(1),this.inv.date(`TimeOfLastAdWatch`).setToNow(),this.inv.item(`WatchAdSeenCountSinceAvailable`).value=0,this.preLaunch(),this.isYodo1PurchaseLaunch=!0,this.startLaunch(e===`gacha`?`ad`:`retry`))}launchWithoutSpin(e=-1,t=1,n=0){if(this.hasStartedLaunch)return null;this.overrideSelection=e,this.newModifier=t,this.suppressInitialUI=!0,this.preLaunch(),this.isYodo1PurchaseLaunch=!1;let r=this.startLaunch(`free`);return this.velocity=0,r&&(this.rotatedToIndex=this.willLandOnSelection,this.lastWedge=Math.round(this.rotatedToIndex),this.landedOnSelectedAtTime=n),r}startLaunch(e){let t=Lv.length;this.velocity=Bv.launchVelocity;let n=Math.log(Bv.friction),r=this.rotatedToIndex-this.velocity/n,i=Math.round(r)+Math.floor(this.random()*t),a=Gv(this.chars,this.inv,{overrideSelection:this.overrideSelection,newModifier:this.newModifier},this.types);if(this.overrideSelection=-1,this.newModifier=1,!a)return e===`coins`&&this.inv.Coins.add(100),this.hasStartedLaunch=!1,this.velocity=0,null;i=a.typeIndex+Hv(i,t)*t,this.willLandOnSelection=i,this.landedOnSelectedAtTime=-1;let o=r-this.rotatedToIndex;this.velocity*=o===0?0:(i-this.rotatedToIndex)/o,this.lastWedge=Math.round(this.rotatedToIndex);let s=this.chars.unlock(a.character,a.slice,this.random),c=!s&&e!==`ad`&&e!==`retry`?Lv[a.typeIndex].coinsToAward:0;return c&&this.inv.Coins.add(c),this.retryOffered=!s&&e!==`retry`,this.inv.flush(),this.result={kind:e,tile:a.tile,typeIndex:a.typeIndex,character:a.character,slice:a.slice,gotNewPiece:s,coinsAwarded:c,willLandOnSelection:i,unlockCount:this.inv.item(`CharacterUnlockCount`).value,ownedAfter:this.chars.numSlicesUnlocked(a.character)},this.result}launchFinished(){this.hasStartedLaunch=!1,this.velocity=0,this.landedOnSelectedAtTime=-1}consumeRetry(){this.retryOffered=!1}get spinning(){return this.hasStartedLaunch&&this.landedOnSelectedAtTime<0}get wedgeType(){return Wv(this.rotatedToIndex)}updateWheel(e,t){let n=this.rotatedToIndex,r=!1;if(this.hasStartedLaunch&&Math.round(this.rotatedToIndex)===this.willLandOnSelection)this.velocity=0,this.rotatedToIndex=this.willLandOnSelection+(this.rotatedToIndex-this.willLandOnSelection)*Bv.settleLerp**(60*e),this.landedOnSelectedAtTime<0&&(this.landedOnSelectedAtTime=t,r=!0);else if(this.velocity!==0){let t=Math.log(Bv.friction),n=Math.exp(60*e*t);this.rotatedToIndex+=this.velocity*(n/t-1/t),this.velocity*=n}let i=Math.round(this.rotatedToIndex),a=i!==this.lastWedge;return this.lastWedge=i,{tick:a,final:a&&i===this.willLandOnSelection,settled:r,speed:e>0?Math.abs(this.rotatedToIndex-n)/e:0}}static tileZ(e){return Bv.firstTileOffset+Bv.distancePerTile*e}static tileForZ(e){return Math.round((e-Bv.firstTileOffset)/Bv.distancePerTile)}tileProps(e){return Lh(this.types,e)}tileType(e){return Ih(this.types,e)}},qv=1/60,Jv={x:0,y:2.05,z:0},Yv={x:0,y:.3,z:0},Xv={x:1.35,z:.25},Zv=1.75,Qv=.62,$v={x:0,y:1,z:0,w:0},ey=(e,t,n,r=new W)=>r.set(-e,t,n),ty=e=>e<=0?0:e>=1?1:e*e*(3-2*e),ny=e=>e<0?0:e>1?1:e,ry=(e,t,n)=>ny((n-e)/(t-e)),iy=e=>1-(1-e)**1.6,ay=e=>Math.sin(Math.PI*e**.85);function oy(e,t){let n=Math.max(...e.map(e=>e.length)),i=document.createElement(`canvas`);i.width=n,i.height=e.length;let a=i.getContext(`2d`);e.forEach((e,n)=>[...e].forEach((e,r)=>{t[e]&&(a.fillStyle=t[e],a.fillRect(r,n,1,1))}));let o=new ia(i);return o.magFilter=o.minFilter=r,o.generateMipmaps=!1,o.colorSpace=Ie,o}function sy(e){let t=document.createElement(`canvas`);t.width=40,t.height=20;let n=t.getContext(`2d`);n.fillStyle=Lv[e].color,n.fillRect(0,0,40,20),n.fillStyle=`rgba(255,255,255,0.25)`,n.fillRect(0,0,40,2),n.fillStyle=`rgba(0,0,0,0.25)`,n.fillRect(0,18,40,2);let i=[`..k..`,`.kyk.`,`kyyyk`,`.kyk.`,`k.k.k`],a=e+1;for(let e=0;e<a;e++){let t=20-a*7/2+e*7+1;i.forEach((e,r)=>[...e].forEach((e,i)=>{e!==`.`&&(n.fillStyle=e===`k`?`#2a2433`:`#fff3b0`,n.fillRect(t+i,7+r,1,1))}))}let o=new ia(t);return o.magFilter=o.minFilter=r,o.generateMipmaps=!1,o.colorSpace=Ie,o}function cy(e){let t=document.createElement(`canvas`);t.width=256,t.height=64;let n=t.getContext(`2d`);n.fillStyle=`#2a2433`,n.fillRect(0,0,256,64),n.fillStyle=`#ffcf1f`,n.fillRect(4,4,248,56),n.fillStyle=`#e8443d`,n.fillRect(8,8,240,48),n.font=`28px "Press Start 2P", monospace`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=`#2a2433`,n.fillText(e,130,36),n.fillStyle=`#ffffff`,n.fillText(e,128,34);let r=new ia(t);return r.colorSpace=Ie,r}var ly=[[`.kkkkkk.`,`.kwwwwk.`,`.kwkkwk.`,`.kwk.kwk`,`.kwk.kwk`,`.kwk.kwk`,`kkwk.kwk`,`kkkk.kkk`],[`..kkkk..`,`kkwwwwkk`,`kwwwwwwk`,`kkwwwwkk`,`.kwwwwk.`,`.kwwwwk.`,`.kwwwwk.`,`.kkkkkk.`],[`.kkkkkk.`,`kwwwwwwk`,`kwkwwkwk`,`kwwwwwwk`,`kwkwwkwk`,`kwwkkwwk`,`kwwwwwwk`,`.kkkkkk.`]];function uy(){let e=e=>e.rotateY(Math.PI/8),t=new la(.42,.42,.16,8).translate(0,.11,0),n=new la(.26,.42,.16,8).translate(0,.27,0),r=new la(.42,.42,.16,8).translate(0,-.11,0),i=new la(.42,.26,.16,8).translate(0,-.27,0),a=new la(.44,.44,.06,8),o=(e,t)=>{let n=e.toNonIndexed(),r=t.toNonIndexed(),i=new Float32Array(n.getAttribute(`position`).count*3+r.getAttribute(`position`).count*3);i.set(n.getAttribute(`position`).array,0),i.set(r.getAttribute(`position`).array,n.getAttribute(`position`).count*3);let a=new kr;return a.setAttribute(`position`,new mr(i,3)),a.computeVertexNormals(),a};return{top:e(o(t,n)),bottom:e(o(r,i)),band:e(a.toNonIndexed())}}var dy=class{scene=new Fn;camera=new oo(50,1,.1,400);physics;ragdoll;cv;phase=`enter`;time=0;physTime=0;events=[];counterTarget=null;pendingCoins=0;tuning;chars;acc=0;phaseAt=0;result=null;female=!1;head;belly;headHeld=!1;holdFrom=null;holdT=0;hitAt=-1;landedAt=-1;startBelly={x:0,y:1,z:0};randomRotation=new W(0,1,0);flightTarget={x:0,y:0,z:0};cabinet=new En;drum=new En;frameMat=new si({color:`#ffcf1f`});lever=new En;leverPulledAt=-10;claw;glove=new En;gloveT=0;tiles;capTop;capBottom;capBand;capGeo=uy();prize=new En;prizeTop;prizeBottom;prizeBand;prizeTopMat;prizeIcon;iconMats;coinIconMat;preview=null;previewRot=0;openAmount=0;revealedAt=-1;confetti;confettoes=[];coinMesh;coins=[];amtAnim=0;amtLauncher=0;amtGrounded=0;amtFinal=0;camPos=new W;camLook=new W;camInit=!1;viewW=390;viewH=844;shake=0;tmp=new W;tmp2=new W;mtx=new Zt;constructor(e,t,n,r){this.physics=e,this.tuning=t,this.chars=n;let i=e.R,a=Kv.tileZ(40);e.world.createCollider(i.ColliderDesc.cuboid(Bv.tileWidth/2,.0625,a/2).setTranslation(0,.125,a/2+Bv.firstTileOffset-Bv.distancePerTile/2).setFriction(.6).setCollisionGroups(Gu(Uu.Ground))),this.ragdoll=new Ld(e,t,{x:0,y:0,z:0});for(let e of this.ragdoll.parts)e.isFoot&&this.ragdoll.setKinematic(e,!1,!0);this.ragdoll.setLayer(Uu.PlayerCorpse),this.head=this.ragdoll.head,this.belly=this.ragdoll.belly,this.cv=new wg(this.scene),this.cv.blob.visible=!0,this.cv.bind(this.ragdoll);let o=`#7d86ea`;this.scene.background=new K(o),this.scene.fog=new Pn(o,30,70);let s=new fo(`#ffffff`,2);s.position.set(-3,6,-4);let c=new fo(`#c8c8ff`,.6);c.position.set(4,2,3),this.scene.add(s,c);let l=new q(new pa(400,400).rotateX(-Math.PI/2),new Ta({color:`#6c74dc`}));l.position.set(0,.0625,150),this.scene.add(l);let u=e=>new Ta({color:e}),d=(e,t,n,r,i,a,o,s=this.cabinet)=>{let c=new q(new ca(e,t,n),r);return c.position.set(i,a,o),s.add(c),c},f=u(`#cfd3de`),p=u(`#4a4f63`),m=u(`#e8443d`);d(1.06,1.15,.8,f,0,.62,0),d(1.12,.12,.86,p,0,.06,0),d(1,.9,.5,f,0,1.62,.21),d(.84,.6,.04,p,0,1.62,0),d(1,.16,.42,f,0,2,-.2),d(1,.16,.42,f,0,1.24,-.2),d(1.12,.08,.9,m,0,1.13,.02),d(1.12,.08,.9,m,0,2.1,.02),d(.12,.9,.9,m,.53,1.62,.02),d(.12,.9,.9,m,-.53,1.62,.02);let h=(e,t,n,r)=>void d(e,t,.05,this.frameMat,n,r,-.43);h(.86,.06,0,1.92),h(.86,.06,0,1.32),h(.06,.6,.43,1.62),h(.06,.6,-.43,1.62);let g=.42*Math.tan(Math.PI/6),_=[0,1,2].map(e=>new Ta({map:sy(e)}));for(let e=0;e<6;e++){let t=new q(new pa(.66,g*.98),_[e%3]),n=e*Math.PI/3,r=new En;r.rotation.x=n,t.position.set(0,0,-.21),t.rotation.y=Math.PI,r.add(t),this.drum.add(r)}this.drum.position.set(0,1.62,-.2),this.cabinet.add(this.drum);let v=oy([`....kk....`,`...kyyk...`,`..kyyyyk..`,`.kyyyyyyk.`,`kkkkyykkkk`,`...kyyk...`,`...kyyk...`,`..........`,`..kkkkkk..`,`.kyyyyyyk.`,`kyyykkyyyk`,`kyykyyyyyk`,`kyykyyyyyk`,`kyyykkyyyk`,`.kyyyyyyk.`,`..kkkkkk..`],{k:`#2a2433`,y:`#ffcf1f`}),y=new q(new pa(.3,.48),new Ta({map:v,transparent:!0,alphaTest:.5}));y.rotation.y=Math.PI,y.position.set(0,.72,-.405),this.cabinet.add(y);let b=new q(new pa(1.1,.275),new si({map:cy(r)}));b.rotation.y=Math.PI,b.position.set(0,2.32,-.12),this.cabinet.add(b),d(.06,.2,.06,p,.45,2.2,-.1),d(.06,.2,.06,p,-.45,2.2,-.1);let x=new q(new ca(.06,.5,.06),p);x.position.y=.25;let S=new q(new fa(.09,1),m);S.position.y=.52,this.lever.add(x,S),this.lever.position.set(-.6,1.55,.05),this.cabinet.add(this.lever),d(.08,.16,.16,p,-.58,1.55,.05),this.cabinet.rotation.y=0,this.cabinet.position.copy(ey(Xv.x,0,Xv.z)),this.scene.add(this.cabinet);let C=new q(new pa(1.4,1.1).rotateX(-Math.PI/2),new si({color:`#000`,transparent:!0,opacity:.18,depthWrite:!1}));C.position.copy(ey(Xv.x,.066,Xv.z)),this.scene.add(C);let w=u(`#b9bdca`),T=new En,E=new q(new ca(.05,12,.05),p);E.position.y=6.1;let D=new q(new la(.16,.2,.18,8),u(`#7c8196`));D.position.y=.09,T.add(E,D);let O=[];for(let e=0;e<3;e++){let t=new En;t.rotation.y=e*2*Math.PI/3+Math.PI/6;let n=new En;n.position.set(0,0,.14);let r=new q(new ca(.06,.28,.05),w);r.position.set(0,-.12,.05),r.rotation.x=.35;let i=new q(new ca(.06,.18,.05),w);i.position.set(0,-.3,.06),i.rotation.x=-.45,n.add(r,i),t.add(n),T.add(t),O.push(n)}this.scene.add(T),this.claw={root:T,arms:O,pos:{x:0,y:12,z:0},open:1};let k=new Ta({color:`#f4f4f8`,emissive:`#5a5a66`}),A=new q(new ca(.62,.52,.5),k),ee=new q(new ca(.2,.2,.34),k);ee.position.set(.32,.12,-.05);let j=new q(new ca(.66,.56,.24),u(`#f08a24`));j.position.z=-.36;let te=new q(new ca(.16,.16,6),u(`#8a8fa3`));te.position.z=-3.4,this.glove.add(A,ee,j,te),this.glove.visible=!1,this.scene.add(this.glove),this.tiles=new Ai(new ca(Bv.tileWidth,.125,Bv.distancePerTile-.0625),u(`#ffffff`),40),this.capTop=new Ai(this.capGeo.top,u(`#ffffff`),40),this.capBottom=new Ai(this.capGeo.bottom,u(`#f2f2f6`),40),this.capBand=new Ai(this.capGeo.band,u(`#ffffff`),40);for(let e of[this.tiles,this.capTop,this.capBottom,this.capBand])e.count=0,e.frustumCulled=!1,this.scene.add(e);this.prizeTopMat=u(`#ffffff`),this.prizeTop=new q(this.capGeo.top,this.prizeTopMat);let M=new q(this.capGeo.bottom,u(`#f2f2f6`)),N=new q(this.capGeo.band,u(`#e6e6ee`));this.prizeBottom=M,this.prizeBand=N,this.iconMats=ly.map(e=>new si({map:oy(e,{k:`#2a2433`,w:`#ffffff`}),transparent:!0,alphaTest:.5})),this.coinIconMat=new si({map:oy([`..kkkk..`,`.kyyyyk.`,`kyykkyyk`,`kykyyyyk`,`kykyyyyk`,`kyykkyyk`,`.kyyyyk.`,`..kkkk..`],{k:`#2a2433`,y:`#ffcf1f`}),transparent:!0,alphaTest:.5}),this.prizeIcon=new q(new pa(.24,.24),this.iconMats[0]),this.prizeIcon.rotation.y=Math.PI,this.prizeIcon.position.set(0,0,-.46),this.prize.add(this.prizeTop,M,N,this.prizeIcon),this.prize.visible=!1,this.scene.add(this.prize),this.confetti=new Ai(new pa(.07,.045),new si({side:2}),160),this.confetti.count=0,this.confetti.frustumCulled=!1;let P=[`#e8443d`,`#ffcf1f`,`#3d8be0`,`#45c46a`,`#ff7fb0`,`#ffffff`,`#8d5bd8`],ne=new K;for(let e=0;e<160;e++)this.confetti.setColorAt(e,ne.set(P[e%P.length]));this.scene.add(this.confetti),this.coinMesh=new Ai(new la(.1,.1,.03,12).rotateX(Math.PI/2),u(`#ffc21a`),40),this.coinMesh.count=0,this.coinMesh.frustumCulled=!1,this.scene.add(this.coinMesh)}open(e){this.female=e.female,this.cv.setLook(e),this.time=0,this.physTime=0,this.acc=0,this.events.length=0,this.result=null,this.clearPrize(),this.amtAnim=this.amtLauncher=this.amtGrounded=this.amtFinal=0,this.hitAt=this.landedAt=-1,this.gloveT=0,this.glove.visible=!1,this.poseRagdoll({x:0,y:.02,z:-.15},!0);for(let e=0;e<80;e++)this.stepPhysics();this.cv.snapshot(),this.cv.snapshot(),this.headHeld=!1,this.holdFrom=null,this.holdT=0,this.claw.open=1,this.claw.pos={...this.headGrabWorld(),y:this.headGrabWorld().y+5},this.setPhase(`enter`),this.refreshRunway(),this.camInit=!1,this.randomRotation.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize()}setLook(e){this.female=e.female,this.cv.setLook(e)}refreshRunway(e=-1){let t=Fh(this.chars,Lv.length),n=t[t.length-1].onePastLastTile,r=new K,i=new K(`#ffffff`),a=new W(0,0,0),o=this.result,s=0;for(let c=0;c<n;c++){let n=Ih(t,c),l=Lh(t,c),u=Kv.tileZ(c);if(this.mtx.makeTranslation(0,.125,u),this.tiles.setMatrixAt(c,this.mtx),this.tiles.setColorAt(c,l?r.set(Lv[n.index].color).lerp(i,.18):r.set(`#9aa0b4`)),!l)continue;let d=!!o&&o.gotNewPiece&&o.tile===c&&this.revealedAt<0,f=this.chars.isSliceOwned(l.character,l.slice)&&!d;this.mtx.makeTranslation(-1.75,Qv,u),c===e&&this.mtx.scale(a),this.capTop.setMatrixAt(s,this.mtx),this.capBottom.setMatrixAt(s,this.mtx),this.capBand.setMatrixAt(s,this.mtx),this.capTop.setColorAt(s,f?r.set(`#f2b81c`):r.set(Lv[n.index].color)),this.capBand.setColorAt(s,f?r.set(`#fff3b0`):r.set(`#e6e6ee`)),s++}this.tiles.count=n,this.capTop.count=this.capBottom.count=this.capBand.count=s;for(let e of[this.tiles,this.capTop,this.capBottom,this.capBand])e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}startPull(e,t){this.phase===`idle`&&this.headHeld||this.rebaseUnderClaw(),this.result=e,this.clearPrize(),this.hitAt=this.landedAt=-1,this.amtGrounded=0,this.amtFinal=0,this.leverPulledAt=this.time,this.events.push({kind:`lever`}),this.setPhase(t?`spin`:`selected`),t||this.events.push({kind:`selected`,good:e.typeIndex>=Lv.length-1})}get busy(){return this.phase===`spin`||this.phase===`selected`||this.phase===`windup`||this.phase===`flight`||this.phase===`landed`}get ready(){return this.phase===`idle`||this.phase===`shown`}get revealed(){return this.phase===`shown`}setPhase(e){this.phase=e,this.phaseAt=this.time}poseRagdoll(e,t){for(let t of this.ragdoll.parts){let n=t.def.pos;t.body.setTranslation({x:e.x-n.x,y:e.y+n.y,z:e.z-n.z},!0),t.body.setRotation($v,!0),t.isDynamic&&(t.body.setLinvel({x:0,y:0,z:0},!0),t.body.setAngvel({x:0,y:0,z:0},!0)),t.body.setGravityScale(1,!0)}t&&this.head.isKinematic&&this.ragdoll.setKinematic(this.head,!1,!0)}rebaseUnderClaw(){let e=this.head.def.pos,t={x:Jv.x,y:Jv.y-e.y-Yv.y,z:Jv.z};this.head.isKinematic||this.ragdoll.setKinematic(this.head,!0),this.poseRagdoll(t,!1),this.head.body.setNextKinematicTranslation(this.head.pos),this.head.body.setNextKinematicRotation($v),this.headHeld=!0,this.holdFrom=null,this.holdT=1,this.claw.pos={x:Jv.x,y:Jv.y+.05,z:Jv.z},this.claw.open=0,this.cv.snapshot(),this.cv.snapshot()}headGrabWorld(){return this.head.transformPoint(Yv)}stepPhysics(){let e=qv;for(let t of this.ragdoll.parts)this.ragdoll.applyBodyProperties(t,!0,!0,e);this.applyMachineForces(e),this.ragdoll.driveJoints(e),this.physics.step(e),this.ragdoll.postStep(),this.physTime+=e}applyMachineForces(e){let t=this.head;if(this.headHeld&&t.isKinematic){let e=this.phase===`idle`||this.phase===`shown`?Math.sin(this.time*1.3)*.03:0,n={x:Jv.x+e,y:Jv.y,z:Jv.z},r=$v,i=n;if(this.holdFrom&&this.holdT<1){let e=ty(this.holdT);i={x:this.holdFrom.p.x+(n.x-this.holdFrom.p.x)*e,y:this.holdFrom.p.y+(n.y-this.holdFrom.p.y)*e,z:this.holdFrom.p.z+(n.z-this.holdFrom.p.z)*e},r=Cd(this.holdFrom.q,$v,e)}let a=new W(Yv.x,Yv.y,Yv.z).applyQuaternion(new Ot(r.x,r.y,r.z,r.w));t.body.setNextKinematicTranslation({x:i.x-a.x,y:i.y-a.y,z:i.z-a.z}),t.body.setNextKinematicRotation(r)}if(this.hitAt>=0&&this.landedAt<0&&this.result){let t=ny((this.physTime-this.hitAt)/Lv[this.result.typeIndex].airFlyLength),n=this.flightTarget,r=this.startBelly,i=iy(t),a={x:r.x+(n.x-r.x)*i,y:r.y+(n.y-r.y)*i+5*ay(t),z:r.z+(n.z-r.z)*i},o=.5+.5*ny(t*20),s=this.belly.com,c={x:(a.x-s.x)*.05,y:(a.y-s.y)*.05,z:(a.z-s.z)*.05};for(let t of this.ragdoll.parts){if(!t.isDynamic)continue;let n=t.velocity,r=200*(t.isBelly?1:o),i=n.x*.65+c.x*r,a=n.y*.65+c.y*r,l=n.z*.65+c.z*r;if(t.isHead||t.isFoot||t.name.startsWith(`Forearm`)){let n=t.com;i+=(n.x-s.x)*50*e,a+=(n.y-s.y)*50*e,l+=(n.z-s.z)*50*e}if(t.velocity={x:i,y:a,z:l},t.isBelly||t.isHead||t.isPelvis){let e=this.tuning.ragdoll.maxAngularVelocity;t.angularVelocity={x:this.randomRotation.x*e,y:this.randomRotation.y*e,z:this.randomRotation.z*e}}}t>=1&&this.land()}else if(this.landedAt>=0)for(let e of this.ragdoll.parts){if(!e.isDynamic)continue;let t=e.velocity;e.velocity={x:t.x*.985,y:t.y*.985,z:t.z*.985};let n=e.angularVelocity;e.angularVelocity={x:n.x*.985,y:n.y*.985,z:n.z*.985}}}hit(){if(!this.result)return;this.hitAt=this.physTime,this.startBelly=this.belly.com;let e=Kv.tileZ(this.result.tile);this.flightTarget={x:0,y:.1875,z:e+Bv.distancePerTile*.25},this.head.isKinematic&&this.ragdoll.setKinematic(this.head,!1,!0),this.headHeld=!1;for(let e of this.ragdoll.parts)e.body.setGravityScale(0,!0);this.randomRotation.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),this.shake=.5,this.events.push({kind:`launch`}),this.setPhase(`flight`)}land(){this.landedAt=this.time;for(let e of this.ragdoll.parts)e.body.setGravityScale(1,!0);let e=this.belly.com,t=this.flightTarget,n=t.x-e.x,r=t.z-e.z;if(Math.hypot(n,r)>1.5)for(let e of this.ragdoll.parts){let t=e.body.translation();e.body.setTranslation({x:t.x+n,y:t.y,z:t.z+r},!0)}this.events.push({kind:`land`}),this.setPhase(`landed`)}clearPrize(){this.preview&&=(this.scene.remove(this.preview),bg(this.preview),null),this.prize.visible=!1;for(let e of[this.prizeTop,this.prizeBottom,this.prizeBand])e.position.set(0,0,0),e.rotation.set(0,0,0),e.scale.setScalar(1);this.prizeIcon.visible=!0,this.openAmount=0,this.revealedAt=-1,this.confettoes.length=0,this.confetti.count=0,this.coins.length=0,this.coinMesh.count=0,this.pendingCoins=0,this.refreshRunway()}reveal(){let e=this.result;this.revealedAt=this.time,this.events.push({kind:`open`,isNew:e.gotNewPiece});let t=Sg(this.tuning.character.parts,e.character,e.slice,this.female,!1);if(this.preview=t,this.previewRot=0,this.scene.add(t),e.gotNewPiece?this.burst(70):this.burst(24),e.coinsAwarded>0){this.pendingCoins=e.coinsAwarded;let t=this.prize.position.clone();for(let n=0;n<e.coinsAwarded;n++){let e=Math.random()*Math.PI*2;this.coins.push({at:this.time+.25+n*.05,p:t.clone(),v:new W(Math.cos(e)*.9,2.6+Math.random()*1.2,Math.sin(e)*.5-.6),from:new W,homing:-1,done:!1})}}this.setPhase(`shown`)}burst(e){let t=this.prize.position;for(let n=0;n<e;n++){let e=Math.random()*Math.PI*2,n=2+Math.random()*2.5;this.confettoes.push({p:new W(t.x,t.y+.3,t.z),v:new W(Math.cos(e)*(.8+Math.random()*1.6),n,Math.sin(e)*(.6+Math.random())-.4),r:new cn(Math.random()*6,Math.random()*6,Math.random()*6),w:new W(Math.random()*10-5,Math.random()*10-5,Math.random()*10-5),life:2.2+Math.random()*.8})}}update(e,t){e=Math.min(e,.1),this.time+=e;let n=this.time,r=n-this.phaseAt,i=this.result;switch(this.phase){case`enter`:if(this.headHeld)this.holdT=Math.min(1,this.holdT+e/.8),this.claw.open=Math.max(0,this.claw.open-e*3),this.holdT>=1&&this.setPhase(`idle`);else{let e=this.headGrabWorld(),t=ty(ry(0,.65,r));r<.02&&this.events.push({kind:`clawMove`}),this.claw.pos={x:e.x,y:e.y+.05+5*(1-t),z:e.z},this.claw.open=1-.3*t,t>=1&&(this.events.push({kind:`clawStop`}),this.ragdoll.setKinematic(this.head,!0),this.holdFrom={p:e,q:this.head.rot},this.holdT=0,this.headHeld=!0)}break;case`spin`:{let r=t.updateWheel(e,n);r.tick&&this.events.push(r.final?{kind:`finalTick`}:{kind:`tick`,vol:.3+.5*ny(r.speed/30),rate:2**ry(.01,30,r.speed)}),(r.settled||t.landedOnSelectedAtTime>=0)&&(this.events.push({kind:`selected`,good:(i?.typeIndex??0)>=Lv.length-1}),this.setPhase(`selected`));break}case`selected`:t.updateWheel(e,n),r>.9&&this.setPhase(`windup`);break;case`windup`:t.updateWheel(e,n),this.glove.visible=!0,this.gloveT=ty(ry(0,.35,r))*.75+(r>.45?.25*ry(.45,.55,r):0),r>=.55&&this.hit();break;case`flight`:break;case`landed`:r>1.6&&this.reveal();break;case`shown`:case`idle`:t.updateWheel(e,n)}(this.phase===`flight`||this.phase===`landed`||this.phase===`shown`)&&(this.gloveT=Math.max(0,this.gloveT-e*2.5),this.gloveT<=0&&(this.glove.visible=!1)),this.acc+=e;let a=0;for(;this.acc>=qv&&a<4;)this.stepPhysics(),this.cv.snapshot(),this.acc-=qv,a++;if(a===4&&(this.acc=Math.min(this.acc,qv)),this.headHeld&&this.phase!==`enter`){let e=this.headGrabWorld();this.claw.pos={x:e.x,y:e.y+.05,z:e.z}}else if(this.phase===`enter`&&this.headHeld){let e=this.headGrabWorld();this.claw.pos={x:e.x,y:e.y+.05,z:e.z}}else this.hitAt>=0&&(this.claw.open=Math.min(1,this.claw.open+e*5),this.claw.pos={...this.claw.pos,y:Math.min(Jv.y+6,this.claw.pos.y+e*4)});let o=(t,n,r)=>t<n?Math.min(n,t+r*e):Math.max(n,t-r*e),s=this.phase===`spin`||this.phase===`selected`||this.phase===`windup`;this.amtAnim=o(this.amtAnim,+!!s,2.2),this.amtLauncher=o(this.amtLauncher,+(this.phase===`windup`||this.phase===`flight`&&r<.18),6),this.amtGrounded=o(this.amtGrounded,+(this.phase===`flight`||this.phase===`landed`||this.phase===`shown`),this.phase===`flight`?4:2),this.amtFinal=o(this.amtFinal,+(this.phase===`landed`&&r>.85||this.phase===`shown`),1.6),this.shake=Math.max(0,this.shake-e*2),this.updateObjects(e,t),this.updateCamera(e),this.updateEffects(e)}updateObjects(e,t){let n=this.time,r=1-ty(ry(0,.45,n)),i=n<.6?Math.sin(ry(.45,.6,n)*Math.PI)*.06:0;if(this.cabinet.position.y=r*6+i,this.drum.rotation.x=-t.rotatedToIndex*(Math.PI/3),(this.phase===`selected`||this.phase===`windup`)&&this.result){let e=Math.floor((n-this.phaseAt)*(this.result.typeIndex===2?10:6))%2==0;this.frameMat.color.set(e?Lv[this.result.typeIndex].color:`#ffffff`)}else this.frameMat.color.set(this.phase===`spin`?Math.floor(n*8)%2?`#ffcf1f`:`#fff3b0`:`#ffcf1f`);let a=n-this.leverPulledAt;this.lever.rotation.x=a<.5?-Math.sin(ny(a/.5)*Math.PI)*.9:0;let o=this.claw;this.claw.root.position.copy(ey(o.pos.x,o.pos.y,o.pos.z));for(let e of o.arms)e.rotation.x=.15+o.open*.55;if(this.glove.visible){let e=-6+this.gloveT*5.5;this.glove.position.copy(ey(0,1.1,e))}let s=this.result;if(s&&(this.phase===`landed`||this.phase===`shown`)){let t=Kv.tileZ(s.tile);if(!this.prize.visible){this.prize.visible=!0;let e=!s.gotNewPiece;this.prizeTopMat.color.set(e?`#f2b81c`:Lv[s.typeIndex].color),this.prizeIcon.material=e?this.coinIconMat:this.iconMats[s.slice],this.refreshRunway(s.tile)}let r=ty(this.amtFinal),i=this.finalCapsulePos(t);this.prize.position.copy(ey(Zv,Qv,t)).lerp(i,r),this.prize.rotation.y=r*.3*Math.sin(n*1.5),this.phase===`shown`&&(this.openAmount=Math.min(1,this.openAmount+e*2.2));let a=ty(this.openAmount),o=Math.max(0,1-ty(ry(.45,1,this.openAmount)));this.prizeTop.position.set(0,a*.7,a*.35),this.prizeTop.rotation.x=-a*1.1,this.prizeBottom.position.set(0,-a*.55,a*.2),this.prizeBand.position.set(0,-a*.3,a*.2),this.prizeIcon.visible=a<.2;for(let e of[this.prizeTop,this.prizeBottom,this.prizeBand])e.scale.setScalar(Math.max(.001,o));if(this.preview){this.previewRot+=.5*e;let t=s.slice===0?1:s.slice===1?1.75:2.1,r=s.slice===0?.5:s.slice===1?1.22:1.57,i=.2+.8*ty(ry(.05,.5,n-this.revealedAt)),a=Math.sin((n-this.revealedAt)*2.2)*.03,o=this.prize.position;this.preview.scale.setScalar(t*i),this.preview.position.set(o.x,o.y+a-r*t*i,o.z),this.preview.rotation.y=this.previewRot*Math.PI+Math.PI}}}finalCapsulePos(e){return ey(Zv,1.25,e-.6,this.tmp2.clone())}updateCamera(e){let t=this.result,n=this.belly.com,r=Number.isFinite(n.z)?n.z:0;t&&this.landedAt>=0&&(r+=(Kv.tileZ(t.tile)-r)*ty(ry(this.landedAt,this.landedAt+.75,this.time)));let i=new W,a=new W,o=(e,t,n)=>{i.lerp(t,e),a.lerp(n,e)};ey(.62,1.5,-3.55,i),ey(.68,1.2,0,a),o(ty(this.amtAnim),ey(1.05,1.55,-2.35),ey(.95,1.38,0)),o(ty(this.amtLauncher),ey(-3.3,1.45,-1.2),ey(0,1.2,-.9));let s=1+Math.max(0,(Number.isFinite(n.y)?n.y:1)-1.5)*.6;if(o(ty(this.amtGrounded),ey(-3.4,2.6,r-4.6),ey(.3,s,r+1)),t){let e=Kv.tileZ(t.tile),n=this.finalCapsulePos(e);o(ty(this.amtFinal),new W(n.x,n.y+.12,n.z-2.05),new W(n.x,n.y+.12,n.z))}let c=this.hitAt>=0&&this.landedAt<0;if(!this.camInit||c||this.camPos.distanceTo(i)>30)this.camPos.copy(i),this.camLook.copy(a),this.camInit=!0;else{let t=1-Math.exp(-7*e);this.camPos.lerp(i,t),this.camLook.lerp(a,t)}this.camera.position.copy(this.camPos),this.shake>0&&this.camera.position.add(this.tmp.set((Math.random()-.5)*this.shake*.3,(Math.random()-.5)*this.shake*.3,0)),this.camera.up.set(0,1,0),this.camera.lookAt(this.camLook);let l=af(this.tuning.camera.defaultFieldOfView,this.camera.aspect);this.camera.fov!==l&&(this.camera.fov=l,this.camera.updateProjectionMatrix()),this.camera.updateMatrixWorld()}updateEffects(e){let t=0,n=new Ot,r=new W(1,1,1);for(let i of this.confettoes)if(i.life-=e,!(i.life<=0)){if(i.v.y-=3.2*e,i.v.multiplyScalar(.4**e),i.p.addScaledVector(i.v,e),i.r.x+=i.w.x*e,i.r.y+=i.w.y*e,i.r.z+=i.w.z*e,t>=160)break;n.setFromEuler(i.r),this.mtx.compose(i.p,n,r),this.confetti.setMatrixAt(t++,this.mtx)}this.confetti.count=t,this.confetti.instanceMatrix.needsUpdate=!0;let i=0;for(let t of this.coins){if(t.done||this.time<t.at)continue;let a=this.time-t.at;if(t.homing<0)a<e*1.5&&this.events.push({kind:`coin`}),t.v.y-=7*e,t.p.addScaledVector(t.v,e),a>.5&&(t.homing=0,t.from.copy(t.p));else{t.homing=Math.min(1,t.homing+e/.35);let n=this.counterWorld();if(t.p.lerpVectors(t.from,n,t.homing*t.homing),t.homing>=1){t.done=!0,this.pendingCoins=Math.max(0,this.pendingCoins-1),this.events.push({kind:`coinArrive`});continue}}n.setFromAxisAngle(this.tmp.set(0,1,0),a*9),this.mtx.compose(t.p,n,r),this.coinMesh.setMatrixAt(i++,this.mtx)}this.coinMesh.count=i,this.coinMesh.instanceMatrix.needsUpdate=!0}counterWorld(){let e=this.counterTarget??{x:this.viewW-40,y:40},t=new W(e.x/this.viewW*2-1,1-e.y/this.viewH*2,.5).unproject(this.camera).sub(this.camera.position).normalize();return this.camera.position.clone().addScaledVector(t,1.5)}resize(e,t){this.viewW=Math.max(1,e),this.viewH=Math.max(1,t),this.camera.aspect=this.viewW/this.viewH,this.camera.fov=af(this.tuning.camera.defaultFieldOfView,this.camera.aspect),this.camera.updateProjectionMatrix()}prepareRender(){this.cv.apply(this.acc/qv)}screenOf(e){let t=e.clone().project(this.camera);return{x:(t.x+1)/2*this.viewW,y:(1-t.y)/2*this.viewH,onScreen:t.z<1&&Math.abs(t.x)<=1&&Math.abs(t.y)<=1}}info(){let e=this.head.pos,t=this.belly.com,n=ey(this.claw.pos.x,this.claw.pos.y,this.claw.pos.z);return{phase:this.phase,time:+this.time.toFixed(2),headHeld:this.headHeld,head:{x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2)},belly:{x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2)},claw:{y:+this.claw.pos.y.toFixed(2),open:+this.claw.open.toFixed(2),screen:this.screenOf(n)},ragdollScreen:this.screenOf(ey(t.x,t.y,t.z)),headScreen:this.screenOf(ey(e.x,e.y,e.z)),landedTile:this.landedAt>=0&&this.result?Kv.tileForZ(t.z):null,targetTile:this.result?.tile??null,amounts:[this.amtAnim,this.amtLauncher,this.amtGrounded,this.amtFinal].map(e=>+e.toFixed(2)),prizeVisible:this.prize.visible,preview:!!this.preview,confetti:this.confetti.count,coinsFlying:this.coinMesh.count,pendingCoins:this.pendingCoins,wedge:Uv(Math.round(-this.drum.rotation.x/(Math.PI/3)),3)}}},fy=`
  #ui .pm { position: absolute; inset: 0; display: none; pointer-events: none; }
  #ui .pm.open { display: block; }
  #ui .pm .pm-fade { position: absolute; inset: 0; background: #1d1830; opacity: 0; pointer-events: none; }
  #ui .pm .pm-top {
    position: absolute; left: calc(var(--ui-left) + 12px); right: calc(var(--ui-right) + 12px); top: calc(var(--ui-top) + 12px);
    display: flex; align-items: center; justify-content: space-between; gap: 10px;
  }
  #ui .pm .pm-back { min-height: 44px; padding: 4px 12px 9px; font-size: 18px; }
  #ui .pm .pm-back.gone { visibility: hidden; }
  #ui .pm .pm-title { flex: 1; text-align: center; font-family: var(--font-display); font-size: 14px; line-height: 1.4; text-shadow: var(--outline); }
  #ui .pm .pm-coins { display: flex; align-items: center; gap: 8px; font-family: var(--font-display); font-size: 18px; text-shadow: var(--outline-sm); min-width: 64px; justify-content: flex-end; }
  #ui .pm .pm-coins.hop .coin-ico { transform: translateY(-5px); }
  #ui .pm .pm-coins .coin-ico { transition: transform 0.08s; }
  #ui .pm .pm-result {
    position: absolute; left: 0; right: 0; top: calc(var(--ui-top) + 78px); text-align: center; pointer-events: none;
    opacity: 0; transform: scale(0.6); transition: opacity 0.2s, transform 0.3s cubic-bezier(.3, 1.5, .5, 1);
  }
  #ui .pm .pm-result.show { opacity: 1; transform: none; }
  #ui .pm .pm-new { font-family: var(--font-display); font-size: 15px; color: #ffe066; text-shadow: var(--outline); }
  #ui .pm .pm-name { font-family: var(--font-display); font-size: 21px; line-height: 1.35; margin-top: 8px; text-shadow: var(--outline); padding: 0 12px; }
  #ui .pm .pm-rarity { font-size: 22px; font-weight: 700; margin-top: 6px; text-shadow: var(--outline-sm); }
  #ui .pm .pm-count { font-size: 20px; font-weight: 700; margin-top: 4px; text-shadow: var(--outline-sm); }
  #ui .pm .pm-bottom {
    position: absolute; left: 50%; bottom: calc(var(--ui-bottom) + 16px); transform: translateX(-50%);
    width: min(94vw, 420px); display: flex; flex-direction: column; gap: 12px; transition: opacity 0.2s, transform 0.25s;
  }
  #ui .pm .pm-bottom.away { opacity: 0; transform: translate(-50%, 40px); pointer-events: none; }
  #ui .pm .pm-bottom.away button { pointer-events: none; }
  #ui .pm .pm-row { display: flex; gap: 10px; }
  #ui .pm .pm-row > button { flex: 1; min-height: 58px; font-size: 19px; padding: 6px 8px 11px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; }
  #ui .pm .pm-row > button.gone { display: none; }
  #ui .pm .pm-row > button.big { min-height: 66px; font-family: var(--font-display); font-size: 15px; line-height: 1.35; }
  #ui .pm .pm-row > button small { font-family: var(--font-body); font-size: 16px; font-weight: 700; }
  #ui .pm .pm-row > button .lbl { display: inline-flex; align-items: center; gap: 8px; }
  #ui .pm .pm-row > button .coin-ico { width: 18px; height: 18px; border-width: 2px; }
  #ui .pm .pm-row > button.cool { filter: saturate(0.35) brightness(0.85); }
  @media (max-width: 360px) {
    #ui .pm .pm-row > button { font-size: 17px; }
    #ui .pm .pm-row > button.big { font-size: 13px; }
    #ui .pm .pm-name { font-size: 18px; }
    #ui .pm .pm-title { font-size: 12px; }
  }
`,py=[`#9ff0b4`,`#a9dcff`,`#f0bcff`],my=[[.78,.8,1],[.62,.64,.86],[.42,.44,.66]],hy=class{machine;view;isOpen=!1;inv;ads;cb;el;fade;backBtn;title;coinsEl;coinsNum;resultEl;rNew;rName;rRarity;rCount;bottom;spinBtn;adBtn;equipBtn;againBtn;retryBtn;rowIdle;rowResult;rowMore;lastLabel=``;shownCoins=-1;revealHandled=!1;lastTickAt=-1;adBusy=!1;stats={pulls:0,adPulls:0,retries:0,free:0,refusedBack:0};constructor(e,t,n,r,i,a,o){this.inv=i,this.ads=a,this.cb=o,this.machine=new Kv(r,i),this.view=new dy(t,n,r,Z(`PrizeSign`));let s=document.createElement(`style`);s.textContent=fy,document.head.appendChild(s);let c=(e,t,n=`div`)=>{let r=document.createElement(n);return r.className=e,t.appendChild(r),r};this.el=c(`pm`,e),this.fade=c(`pm-fade`,this.el);let l=c(`pm-top`,this.el);this.backBtn=this.button(`pm-back blue`,l,()=>this.back()),this.title=c(`pm-title`,l),this.coinsEl=c(`pm-coins`,l),c(`coin-ico`,this.coinsEl,`i`),this.coinsNum=c(`num`,this.coinsEl,`span`),this.resultEl=c(`pm-result`,this.el),this.rNew=c(`pm-new`,this.resultEl),this.rName=c(`pm-name`,this.resultEl),this.rRarity=c(`pm-rarity`,this.resultEl),this.rCount=c(`pm-count`,this.resultEl),this.bottom=c(`pm-bottom`,this.el),this.rowResult=c(`pm-row result`,this.bottom),this.equipBtn=this.button(`green big pm-equip`,this.rowResult,()=>this.equip()),this.rowMore=c(`pm-row more`,this.bottom),this.againBtn=this.button(`purple pm-again`,this.rowMore,()=>this.pullCoins()),this.retryBtn=this.button(`red pm-retry`,this.rowMore,()=>void this.pullAd(`gachaRetry`)),this.rowIdle=c(`pm-row idle`,this.bottom),this.adBtn=this.button(`red pm-ad`,this.rowIdle,()=>void this.pullAd(`gacha`)),this.spinBtn=this.button(`green big pm-spin`,this.rowIdle,()=>this.pullCoins()),this.bottom.classList.add(`away`)}button(e,t,n){let r=document.createElement(`button`);r.type=`button`,r.className=`b3d ${e}`,t.appendChild(r);let i=0;r.addEventListener(`pointerdown`,e=>{e.stopPropagation(),i=performance.now(),r.classList.add(`pressed`),this.cb.feedback(`down`)});let a=()=>{r.classList.contains(`pressed`)&&(setTimeout(()=>r.classList.remove(`pressed`),Math.max(0,100-(performance.now()-i))),this.cb.feedback(`up`))};return r.addEventListener(`pointerup`,a),r.addEventListener(`pointerleave`,a),r.addEventListener(`pointercancel`,a),r.addEventListener(`click`,e=>{e.stopPropagation(),r.blur(),n()}),r}open(e){this.isOpen=!0,this.el.classList.add(`open`),this.machine.launchFinished(),this.machine.result=null,this.machine.retryOffered=!1,this.machine.suppressInitialUI=!1,this.revealHandled=!1,this.view.open(e),this.resultEl.classList.remove(`show`),this.lastLabel=``,this.shownCoins=-1,this.paint()}hide(){this.isOpen=!1,this.el.classList.remove(`open`)}setLook(e){this.view.setLook(e)}setAmount(e){this.fade.style.opacity=String(Math.max(0,1-Math.abs(2*e-1)*1.6));let t=e>=.5;for(let e of[this.el.querySelector(`.pm-top`),this.bottom,this.resultEl])e.style.visibility=t?``:`hidden`}get pullRunning(){return this.machine.hasStartedLaunch||this.view.busy||this.adBusy||!!this.ads?.showing}back(){this.isOpen&&(this.pullRunning||this.view.phase===`enter`?this.stats.refusedBack++:this.cb.close())}start(e,t){return e?(this.revealHandled=!1,this.resultEl.classList.remove(`show`),this.view.startPull(e,t),this.stats.pulls++,this.paint(),!0):(this.cb.toast(Z(`PrizeNoPrizes`)),this.cb.feedback(`error`),!1)}pullCoins(){return!this.isOpen||this.pullRunning||!this.view.ready?!1:this.machine.canAfford?this.start(this.machine.purchaseLaunch(),!0):(this.cb.toast(Z(`CoinsToGo`,100-this.inv.Coins.value)),this.cb.feedback(`error`),!1)}async pullAd(e){if(!this.isOpen||!this.ads||this.pullRunning||!this.view.ready||e===`gacha`&&!this.machine.adCooldownOver||e===`gachaRetry`&&!this.machine.retryOffered)return!1;if(!this.ads.isAvailable())return this.cb.toast(Z(`AdNotAvailable`)),!1;this.adBusy=!0,this.paint();let t=await this.ads.show(e);return this.adBusy=!1,t===`complete`?(e===`gachaRetry`?(this.machine.consumeRetry(),this.stats.retries++):this.stats.adPulls++,this.start(this.machine.yodo1PurchaseLaunch(e===`gacha`?`gacha`:`retry`),!0)):(this.cb.toast(Z(t===`skipped`?`AdNotFinished`:`AdNotAvailable`)),this.paint(),!1)}freePull(e=-1,t=1){return!this.isOpen||this.pullRunning?!1:(this.stats.free++,this.start(this.machine.launchWithoutSpin(e,t,this.view.time),!1))}equip(){let e=this.machine.result;e&&this.view.revealed&&(this.cb.feedback(`impact`),this.cb.equip(e.character,e.slice))}update(e){if(this.isOpen){this.view.update(e,this.machine);for(let e of this.view.events)this.cb.sound(e),e.kind===`tick`?(this.view.time-this.lastTickAt>.1&&this.cb.feedback(`tick`),this.lastTickAt=this.view.time):e.kind===`launch`?this.cb.feedback(`heavy`):e.kind===`land`?this.cb.feedback(`impact`):e.kind===`coinArrive`&&this.hopCoins();if(this.view.events.length=0,this.view.revealed&&!this.revealHandled&&this.machine.result){this.revealHandled=!0,this.machine.launchFinished();let e=this.machine.result;e.gotNewPiece&&(this.cb.feedback(`success`),this.cb.unlocked(e)),this.showResult(e)}this.paint()}}hopCoins(){this.coinsEl.classList.add(`hop`),setTimeout(()=>this.coinsEl.classList.remove(`hop`),80)}get displayedCoins(){let e=this.machine.result,t=e&&!this.view.revealed?e.coinsAwarded:this.view.pendingCoins;return this.inv.Coins.value-t}showResult(e){let t=Lv[e.typeIndex];this.rNew.textContent=e.gotNewPiece?Z(`NewPieceUnlocked`):e.coinsAwarded>0?Z(`GotSamePiece`,e.coinsAwarded):Z(`GotSamePieceNoCoins`),this.rName.textContent=Z(kh(e.character)),this.rRarity.textContent=Z(t.rarityKey),this.rRarity.style.color=py[e.typeIndex],this.rCount.textContent=Z(`CharacterAmountUnlockedFormating`,e.ownedAfter),this.rRarity.style.display=e.gotNewPiece?``:`none`,this.rCount.style.display=e.gotNewPiece?``:`none`,this.resultEl.classList.add(`show`)}paint(){let e=this.machine,t=this.displayedCoins;t!==this.shownCoins&&(this.shownCoins=t,this.coinsNum.textContent=String(t));let n=this.pullRunning||this.view.phase===`enter`,r=this.view.revealed&&!n,i=!!this.ads,a=e.adCooldownMs(),o=a>0,s=[n?`busy`:r?`res`:`idle`,+!!e.canAfford,+!!i,o?r_(a):``,+!!e.retryOffered,this.inv.Coins.value,Z(`PrizeMachineTitle`)].join(`|`);if(s===this.lastLabel)return;this.lastLabel=s,this.title.textContent=Z(`PrizeMachineTitle`),this.backBtn.textContent=Z(`Back`),this.backBtn.classList.toggle(`gone`,n),this.bottom.classList.toggle(`away`,n),this.rowIdle.style.display=r?`none`:``,this.rowResult.style.display=r?``:`none`,this.rowMore.style.display=r?``:`none`,this.spinBtn.innerHTML=``;let c=document.createElement(`span`);c.className=`lbl`,c.append(Z(`PrizeSpinCoins`));let l=document.createElement(`i`);if(l.className=`coin-ico`,c.append(l),this.spinBtn.append(c),!e.canAfford){let e=document.createElement(`small`);e.textContent=Z(`CoinsToGo`,100-this.inv.Coins.value),this.spinBtn.append(e)}this.spinBtn.classList.toggle(`dim`,!e.canAfford),this.spinBtn.setAttribute(`aria-disabled`,e.canAfford?`false`:`true`),this.adBtn.classList.toggle(`gone`,!i),this.adBtn.innerHTML=``;let u=document.createElement(`span`);u.className=`lbl`;let d=document.createElement(`i`);if(d.className=`ad-ico`,u.append(d,Z(`PrizeSpinAd`)),this.adBtn.append(u),o){let e=document.createElement(`small`);e.textContent=Z(`PrizeAdIn`,r_(a)),this.adBtn.append(e)}this.adBtn.classList.toggle(`cool`,o),this.adBtn.disabled=o,this.equipBtn.textContent=Z(`Equip`),this.againBtn.innerHTML=``;let f=document.createElement(`span`);f.className=`lbl`;let p=document.createElement(`i`);p.className=`coin-ico`,f.append(Z(`PrizeAgain`),` `,`100`,p),this.againBtn.append(f),this.againBtn.classList.toggle(`gone`,!e.canAfford),this.retryBtn.innerHTML=``;let m=document.createElement(`span`);m.className=`lbl`;let h=document.createElement(`i`);h.className=`ad-ico`,m.append(h,Z(`PrizeSpinAgain`)),this.retryBtn.append(m),this.retryBtn.classList.toggle(`gone`,!(i&&e.retryOffered)),this.rowMore.style.display=r&&(e.canAfford||i&&e.retryOffered)?``:`none`}relabel(){this.lastLabel=``,this.machine.result&&this.view.revealed&&this.showResult(this.machine.result),this.paint()}resize(e,t){this.view.resize(e,t)}render(e){let t=this.coinsEl.querySelector(`.coin-ico`)?.getBoundingClientRect();t&&t.width>0&&(this.view.counterTarget={x:t.left+t.width/2,y:t.top+t.height/2}),this.view.prepareRender(),Iv(e,this.view.scene,this.view.camera,my)}info(){let e=this.machine,t=e.result,n=e=>!e.classList.contains(`gone`)&&e.offsetParent!==null&&!this.bottom.classList.contains(`away`);return{open:this.isOpen,phase:this.view.phase,busy:this.pullRunning,coins:this.inv.Coins.value,shownCoins:Number(this.coinsNum.textContent),canAfford:e.canAfford,hasStartedLaunch:e.hasStartedLaunch,wedge:e.wedgeType,result:t?{kind:t.kind,tile:t.tile,type:t.typeIndex,character:t.character.id,slice:t.slice,gotNewPiece:t.gotNewPiece,coinsAwarded:t.coinsAwarded,ownedAfter:t.ownedAfter}:null,retryOffered:e.retryOffered,adCooldownMs:Math.round(e.adCooldownMs()),buttons:{back:!this.backBtn.classList.contains(`gone`),spin:n(this.spinBtn),spinText:this.spinBtn.textContent,ad:n(this.adBtn),adText:this.adBtn.textContent,adDisabled:this.adBtn.disabled,equip:n(this.equipBtn),again:n(this.againBtn),retry:n(this.retryBtn)},text:{title:this.title.textContent,new:this.rNew.textContent,name:this.rName.textContent,rarity:this.rRarity.style.display===`none`?``:this.rRarity.textContent,count:this.rCount.style.display===`none`?``:this.rCount.textContent,shown:this.resultEl.classList.contains(`show`)},stats:{...this.stats},view:this.view.info()}}},gy=`
  #ui .admock { position: absolute; inset: 0; z-index: 50; display: none; pointer-events: auto; background: #120e1c;
    flex-direction: column; align-items: center; justify-content: center; gap: 22px; touch-action: none; }
  #ui .admock.show { display: flex; }
  #ui .admock .t { font-family: var(--font-display); font-size: 20px; line-height: 1.4; text-shadow: var(--outline); text-align: center; padding: 0 16px; }
  #ui .admock .n { font-family: var(--font-display); font-size: 64px; color: #ffe066; text-shadow: var(--outline); }
  #ui .admock .p { width: min(70vw, 280px); height: 14px; border: 3px solid #2a2433; border-radius: 8px; background: #3a3150; overflow: hidden; }
  #ui .admock .p i { display: block; height: 100%; width: 0; background: #ffcf1f; }
  #ui .admock .x { position: absolute; top: calc(var(--ui-top) + 14px); right: calc(var(--ui-right) + 14px); min-height: 44px; padding: 4px 14px 9px; font-size: 20px; }
`,_y=class{name=`mock`;seconds;el;title;num;bar;close;pending=null;timer=null;startedAt=0;info={shown:0,complete:0,skipped:0,last:``};onShowChange=null;constructor(e,t=5){this.seconds=t;let n=document.createElement(`style`);n.textContent=gy,document.head.appendChild(n),this.el=document.createElement(`div`),this.el.className=`admock`,this.title=document.createElement(`div`),this.title.className=`t`,this.num=document.createElement(`div`),this.num.className=`n`;let r=document.createElement(`div`);r.className=`p`,this.bar=document.createElement(`i`),r.appendChild(this.bar),this.close=document.createElement(`button`),this.close.type=`button`,this.close.className=`b3d x`,this.close.addEventListener(`click`,e=>{e.stopPropagation(),this.finish(`skipped`)}),this.el.append(this.title,this.num,r,this.close);for(let e of[`pointerdown`,`pointerup`,`click`])this.el.addEventListener(e,e=>e.stopPropagation());e.appendChild(this.el)}isAvailable(){return!0}get showing(){return this.pending!==null}show(e){return this.pending?Promise.resolve(`failed`):(this.info.shown++,this.info.last=e,this.title.textContent=Z(`AdMock`),this.close.textContent=Z(`AdMockClose`),this.startedAt=performance.now(),this.el.classList.add(`show`),this.paint(),this.timer=setInterval(()=>this.paint(),100),this.onShowChange?.(!0),new Promise(e=>this.pending=e))}paint(){let e=(performance.now()-this.startedAt)/1e3,t=Math.max(0,this.seconds-e);this.num.textContent=String(Math.ceil(t)),this.bar.style.width=`${Math.min(100,e/this.seconds*100)}%`,t<=0&&this.finish(`complete`)}finish(e){let t=this.pending;t&&(this.pending=null,this.timer&&clearInterval(this.timer),this.timer=null,this.el.classList.remove(`show`),e===`complete`?this.info.complete++:this.info.skipped++,this.onShowChange?.(!1),t(e))}};function vy(e,t){return e===`off`?null:new _y(t)}var yy=new URLSearchParams(location.search).has(`debug`),by=new URLSearchParams(location.search).has(`perf`);async function xy(){new URLSearchParams(location.search).get(`lang`)===`en`&&bp(0),wv().stage(.3,.42,Z(`LoadingStreet`));let e=Gl(),t=document.getElementById(`game`),n=document.getElementById(`app`),r={ready:!1,inTelegram:e.inTelegram,platform:e.platform,version:e.version,fps:0,frameMs:0,tick:0,paused:!1,inputsDown:0,level:null,biped:null,runs:0,totalPavers:0,deaths:[],camera:null,lighting:null,quality:null,score:null,m6:null,ui:null,chars:null,machine:null,ads:null,audio:null,perf:null,error:null};window.__steppy=r,window.__steppyStrings=Op;let i=new URLSearchParams(location.search),a=tu(t),o=au(),s=Pp(n,{debug:yy,perf:by}),c=new jf(Fp,i),l=new Rf(o.scene,Fp.lighting.nightLightIntensity),u=new Yf(o.scene),d=new W(0,-1,0),f=1,p=null,m=null,h=null,g=()=>{let e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight;a.setPixelRatio(h?h.pixelRatio():Math.min(window.devicePixelRatio||1,2)),a.setSize(e,n,!1),o.resize(e,n),f=n*a.getPixelRatio(),p?.instantUpdate()};h=new $f({renderer:a,scene:o.scene,sun:o.sun,platform:e.platform,onChange(e){u.setTier(e),l.pointLightsEnabled=!!h&&h.def.nightPointLights,m&&(m.blob.visible=e===0),g()}},Fp,i),l.pointLightsEnabled=h.def.nightPointLights,g(),window.addEventListener(`resize`,g),e.events.on(`viewport`,g);let _=new ju(Fp.world),v=new bm({world:_,tuning:Fp,onCreate:e=>y.onChunkCreated(e),onDestroy:e=>y.onChunkDestroyed(e)}),y=new zm(o.scene,v.ground,Fp.cars.crossing),b=null,x=0;p=new of({tuning:Fp,world:_,biped:()=>b?.biped??null,spawn:()=>b?b.spawnPosition():Fp.character.startOffset,aspect:()=>o.camera.aspect,now:()=>x,forcedPreset:i.has(`preset`)?Number(i.get(`preset`)):null});let S=i.get(`cam`)===`side`,C=Fp.character.startOffset.z,w=(e,t)=>{let n=p.spring.pos.z,r=b?.biped,i=c.update({dt:e,cameraZ:n,distance:_.distanceForZ(n),playerHasDiedThisRound:!!r?.hasFallenOver});Pf(i,{scene:o.scene,sun:o.sun,skyUniforms:o.sky.material.uniforms,sunScale:2.6},d),y.setNightLight(i.nightLightAmount),y.sync(),l.setLamps(y.lamps,y.lampVersion);let a=r?r.averageFootPos.z:n;l.update(i.nightLightAmount,a,f,o.camera.fov),u.update(t,i.effect[0],i.effect[1],o.camera,o.scene.fog.color,f),o.followCamera(i.roadHeightOffset),h.fitShadow(o.camera,d)},T=()=>{if(S){let e=C;o.camera.position.set(-3.2,1.1,e+.3),o.camera.up.set(0,1,0),o.camera.lookAt(0,.75,e+.3);let t=af(Fp.camera.defaultFieldOfView,o.camera.aspect);o.camera.fov!==t&&(o.camera.fov=t,o.camera.updateProjectionMatrix()),o.camera.updateMatrixWorld()}else p.applyTo(o.camera)};v.update(Fp.character.startOffset.z),y.sync(),p.update(0),T(),w(0,0),a.render(o.scene,o.camera);let E=xv.create();wv().stage(.42,.93,Z(`LoadingPhysics`)),await new Promise(e=>setTimeout(e,0));let[D,O]=await Promise.all([up({solverIterations:Fp.ragdoll.solverIterations}),Zg(e.deviceStorage),Promise.race([Promise.all([document.fonts.load(`16px "Press Start 2P"`,`ШАГ 0`),document.fonts.load(`700 16px "Tiny5"`,`Шаг 0`)]),new Promise(e=>setTimeout(e,2500))]).catch(()=>null)]),k=i.get(`lang`);bp(k===`en`?0:k===`ru`?12:vp(O.CurrentLanguage.value)),s.relabel(),E?.setVolumes(O.SFXVolume.value!==0,O.MusicVolume.value!==0);let A=O.MoneybagsOwned.bool||i.has(`doubler`),ee=i.get(`coins`);ee!==null&&/^\d{1,7}$/.test(ee)&&(O.Coins.value=Number(ee)),v.ctx.coinDoublerOwned=!1,Nh.unlockAll=i.has(`unlockall`);let j=new Ph(O),te=e=>({owners:j.resolve(e),female:e.female});m=new wg(o.scene),m.blob.visible=h.tier===0;let M=m;M.setLook(te(j.selection()));let N=new yh({physics:D,tuning:Fp,placer:v,autoRestart:!1,bestDistance:O.DistanceReached.value,bestScore:O.BestScore.value,coinDoubler:()=>A,onStep:t=>{t.stepCount===1&&e.haptics.impact(`light`)},onFootSound:(e,t,n)=>E?.footstep(t,n?.sfxTag??null),onRestart:()=>{M.bind(N.ragdoll);let e=N.spawnPosition();Math.abs(p.spring.pos.z-e.z)>Fp.camera.restartSnapDistance&&p.instantUpdate(),s.showHint(!0),s.hideHeadline(),oe.showEnd(null),ye.clearFlying(),Te=null,We.releaseAll(),We.blockInputUntil(Ue.unscaledTime+.15)}});b=N,m.bind(N.ragdoll),p.spring.setToFinalForNextNFrames=10;let P=!1,ne=!i.has(`noRestart`),F=vy(i.get(`ads`),n),I=new e_({playerAlive:()=>!N.dead,blockInput:()=>!!F?.showing}),re=()=>I.isInSettings?I.settingsSubState===Qg.Language?`language`:I.settingsSubState===Qg.Credits?`credits`:`main`:null,ie=e=>{e.value=+(e.value===0),E?.setVolumes(O.SFXVolume.value!==0,O.MusicVolume.value!==0),oe.sync({sfxOn:O.SFXVolume.value!==0,musicOn:O.MusicVolume.value!==0}),O.flush()},ae=()=>{oe.toast(Z(`ComingSoon`)),e.haptics.notify(`warning`)},oe=i_(n,{resume:()=>I.setIsInState(Q.Paused,!1),openSettings:()=>I.setIsInState(Q.Settings,!0),back:()=>{I.isInSettings&&I.exitSettings()},toggleSound:()=>ie(O.SFXVolume),toggleMusic:()=>ie(O.MusicVolume),openLanguage:()=>I.setSettingsSub(Qg.Language),openCredits:()=>I.setSettingsSub(Qg.Credits),setLanguage:e=>{O.CurrentLanguage.value=e,O.flush(),bp(e),I.setSettingsSub(Qg.Main)},endButton:e=>{Te?.panelShown&&(e===`retry`?R():e===`settings`?I.setIsInState(Q.Settings,!0):e===`characters`?I.setIsInState(Q.CharacterSelect,!0):e===`prize`?ue():ae())},feedback:t=>{t===`down`?(E?.play(`buttonDown`,`ui`,.5),e.haptics.impact(`light`)):t===`up`?E?.play(`buttonUp`,`ui`,.5):e.haptics.selection()}});oe.sync({sfxOn:O.SFXVolume.value!==0,musicOn:O.MusicVolume.value!==0});let L=new Nv(oe.root,j,Fp.character.parts,{accept:t=>{j.saveSelection(t),O.flush(),M.setLook(te(j.selection())),e.haptics.impact(`light`),I.setIsInState(Q.CharacterSelect,!1),N.dead&&R()},close:()=>I.setIsInState(Q.CharacterSelect,!1),feedback:t=>{t===`tick`?(E?.play(`buttonUp`,`ui`,.25,1.4),e.haptics.selection()):t===`error`?e.haptics.notify(`error`):t===`toggle`?e.haptics.selection():t===`down`?(E?.play(`buttonDown`,`ui`,.5),e.haptics.impact(`light`)):E?.play(`buttonUp`,`ui`,.5)},toast:(e,t)=>oe.toast(e,t?{label:Z(`PrizeOpenMachine`),fn:()=>ue()}:void 0)}),se=await up({solverIterations:Fp.ragdoll.solverIterations}),ce=Q.Gameplay,le=new hy(oe.root,se,Fp,j,O,F,{close:()=>{ce===Q.CharacterSelect?I.setMenuState(Q.CharacterSelect):I.setIsInState(Q.LauncherSelect,!1)},equip:(t,n)=>{O.item(wh[n],0).value=t.order,O.flush();let r=te(j.selection());M.setLook(r),le.setLook(r),L.clearCache(),e.haptics.impact(`light`),I.setMenuState(Q.Gameplay),N.dead&&R()},unlocked:()=>L.clearCache(),sound:e=>{switch(e.kind){case`tick`:E?.play(`spinTick`,`ui`,e.vol,e.rate);break;case`finalTick`:E?.play(`spinFinal`,`ui`,.8);break;case`clawMove`:E?.play(`clawMove`,`ui`,.5);break;case`clawStop`:E?.play(`clawStop`,`ui`,.7);break;case`lever`:E?.play(`lever`,`ui`,.7);break;case`selected`:E?.play(`cashIn`,`ui`,e.good?.9:.6,e.good?1.25:1);break;case`launch`:E?.play(`launch`,`ui`,1);break;case`land`:E?.play(`land`,`foley`,.9);break;case`open`:E?.play(e.isNew?`prizeNew`:`prizeOld`,`ui`,1);break;case`coin`:E?.play(`coin`,`ui`,.35,.94+Math.random()*.12);break;case`coinArrive`:E?.play(`coinReached`,`ui`,.3,.95+Math.random()*.1)}},feedback:t=>{t===`down`?(E?.play(`buttonDown`,`ui`,.5),e.haptics.impact(`light`)):t===`up`?E?.play(`buttonUp`,`ui`,.5):t===`tick`?e.haptics.selection():t===`success`?e.haptics.notify(`success`):t===`error`?e.haptics.notify(`error`):t===`heavy`?e.haptics.impact(`heavy`):e.haptics.impact(`medium`)},toast:e=>oe.toast(e)});F&&`onShowChange`in F&&(F.onShowChange=e=>{E?.setVolumes(!e&&O.SFXVolume.value!==0,!e&&O.MusicVolume.value!==0),We.releaseAll()});let ue=()=>{I.setIsInState(Q.LauncherSelect,!0)},de=i.has(`wardrobe`)?new Pv(oe.root,j,Fp.character.parts,i.get(`wardrobe`)===`female`):null;de&&(s.root.style.display=`none`);let fe=()=>{let e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight;L.resize(e,n),le.resize(e,n),de?.resize(e,n)};fe(),window.addEventListener(`resize`,fe),e.events.on(`viewport`,fe),xp(()=>{s.relabel(),oe.relabel(),le.relabel(),Te&&s.showHeadline(N.score.isNewBest?Z(`NewBest`):Z(Ee),N.score.isNewBest),Te?.panelShown&&oe.showEnd(B())}),s.onPause(()=>I.setIsInState(Q.Paused,!0));let pe=()=>{let t=I.isPaused||e.paused;t!==Ue.paused&&(t||(ke=Ue.unscaledTime,We.blockInputUntil(Ue.unscaledTime+.2)),We.releaseAll(),Ue.setPaused(t))};I.onChange((e,t)=>{(t===Q.Paused||e===Q.Paused)&&(t===Q.Paused&&je(!0),pe()),t!==Q.Gameplay&&We.releaseAll(),t===Q.CharacterSelect&&(N.biped.hasStartedStepping&&!N.dead&&N.biped.fallOver(Rd.MenuSwap,null),e!==Q.BadgeSelector&&L.open()),t===Q.LauncherSelect&&(N.biped.hasStartedStepping&&!N.dead&&N.biped.fallOver(Rd.MenuSwap,null),ce=e,le.open(te(j.selection()))),e===Q.LauncherSelect&&Te?.panelShown&&oe.showEnd(B()),oe.showPause(I.isPaused)});let me=!1,he=!1,ge=null,_e=()=>{let t=re();t!==ge&&(ge=t,oe.showSettings(t)),oe.setEndIn(!!Te?.panelShown&&I.state===Q.Gameplay&&I.amount(Q.Settings)<.5&&I.amount(Q.CharacterSelect)<.5&&I.amount(Q.LauncherSelect)<.5);let n=I.amount(Q.CharacterSelect);L.setAmount(n),n===0&&L.isOpen&&I.state!==Q.CharacterSelect&&L.hide();let r=I.amount(Q.LauncherSelect);le.setAmount(r),r===0&&le.isOpen&&I.state!==Q.LauncherSelect&&le.hide();let i=n>=.5||r>=.5||!!de;i!==he&&(he=i,s.root.style.opacity=i?`0`:``,s.root.style.pointerEvents=i?`none`:``);let a=I.backButtonVisible&&!(I.state===Q.LauncherSelect&&le.pullRunning);a!==me&&(me=a,e.setBackButtonVisible(a))},ve=new Og(o.scene,v.ground,_,Fp.score.comboColorCycle),ye=new g_(o.scene,v.ground),be=-1;ye.onLaunch=()=>{let e=Ue.unscaledTime;e-be>.04&&E?.play(`coin`,`ui`,.45,.94+Math.random()*.12),be=e},ye.onArrive=()=>E?.play(`coinReached`,`ui`,.3,.95+Math.random()*.1);let xe=-1e3,Se=new C_(o.scene,N.traffic,Fp),Ce=new j_(o.scene,v.ground,Fp),we=()=>{let t=p.spring.pos,n=e=>({x:0,y:.1,z:e});for(let r of N.specials.events)r.kind===`tntExplode`?(Ce.explode(r.centre),p.addShake(.12,0,.6),e.haptics.impact(`heavy`),E?.play(`explosion`,`foley`,1)):r.kind===`tntArmed`?E?.play(`tntBuzz`,`ui`,.7):r.kind===`timedWobble`?E?.playAt(`wobble`,n(r.z),t,.5):r.kind===`timedCollapseSound`&&E?.playAt(`collapse`,n(r.z),t,.5);N.specials.events.length=0;for(let e of N.trafficEvents)if(e.kind===`hit`&&e.killed){let n=Fp.cars.hitShake;p.addShake(n.radius,0,n.length),E?.play(`crash`,`foley`,1),E?.horn(e.car.pos,t)}else e.kind===`horn`&&E?.horn(e.car.pos,t);N.trafficEvents.length=0},Te=null,Ee=``,De=-1,Oe=!1,ke=-1,Ae={cashIns:0,maxCombo:0,lost:0,checkpoints:0,popups:0},je=e=>{O.BestScore.setMax(N.score.best),O.DistanceReached.setMax(N.bestDistance),e&&O.flush()},R=()=>{N.dead&&(je(!0),Ae.cashIns=Ae.maxCombo=Ae.lost=Ae.checkpoints=0,N.restart())},Me=()=>{if(N.score.isNewBest)return Z(`NewBest`);let e=Cp(`DeathPhrase`).filter(e=>e!==Ee&&Sp(e));return Ee=e.length?e[Math.floor(Math.random()*e.length)]:`DeathPhrase01`,Z(Ee)},Ne=new W,Pe=e=>{let n=N.biped.pelvis.pos;Ne.set(-n.x,n.y+e,n.z).project(o.camera);let r=t.clientWidth||window.innerWidth,i=t.clientHeight||window.innerHeight;return{x:(Ne.x+1)/2*r,y:(1-Ne.y)/2*i}},z=(e,n,r)=>{if(Ne.set(-e,n,r).project(o.camera),Ne.z>1)return null;let i=t.clientWidth||window.innerWidth,a=t.clientHeight||window.innerHeight;return{x:(Ne.x+1)/2*i,y:(1-Ne.y)/2*a}},Fe=t=>{let n=Fp.score.comboColorCycle;switch(t.kind){case`step`:if(Ae.maxCombo=Math.max(Ae.maxCombo,t.comboNumber),t.comboNumber>0&&t.pointsValue<=1&&E?.play(`blip`,`ui`,.35,2**((Math.min(t.comboNumber,15)-1)/12)),Fp.score.showComboNumberPopups&&t.comboNumber>0&&t.pointsValue<=1){let e=Pe(1);s.popup(`×${t.comboNumber}`,Qm(n,t.comboNumber),e.x+34,e.y,`num`),Ae.popups++}break;case`combo`:{Ae.cashIns++;let r=Pe(1.25);s.popup(Z(`Combo`,t.bonus),Qm(n,t.comboNumber),r.x,r.y,`combo`),Ae.popups++,E?.play(`cashIn`,`ui`,.75),e.haptics.notify(`success`);break}case`speedup`:{let e=Pe(1.25);s.popup(Z(`Faster`),Qm(n,t.comboNumber),e.x,e.y,`combo`),Ae.popups++;break}case`loseCombo`:if(Ae.lost++,t.comboNumber>0&&!N.dead){let e=Pe(1);s.popup(Z(`ComboLost`),`#ffffff`,e.x,e.y,`lose`),Ae.popups++}break;case`newBest`:s.flashNewBest(),E?.play(`cashIn`,`ui`,.6,1.5),e.haptics.notify(`success`);break;case`checkpoint`:Ae.checkpoints++,je(!0);break;case`coin`:{O.Coins.add(t.amount),ye.spawn({x:t.x,y:t.y,z:t.z},t.amount,{delay:(t.source,.05),upOnly:!0,forwardsOnly:!0}),xe=Ue.unscaledTime;let e=z(t.x,t.y+.35,t.z);e&&s.popup(Z(`NumberOfCoinsEarned`,t.amount),`#ffc21a`,e.x,e.y,`coin`),t.source===`checkpoint`&&je(!0);break}}},Ie=t=>{let n=N.biped;if(n.hasFallenOver&&!Te){let r=Fp.score.tutorialAutoRestart&&!N.hasPassedTutorial,i=Me();Te={at:t,tutorial:r,panelAt:t+Fp.score.deathPanelDelay,panelShown:!1,headline:i},s.showHeadline(i,N.score.isNewBest),s.showHint(!1),I.forceUnpause(),e.haptics.impact(`heavy`),e.haptics.notify(`error`),(n.deathType===Rd.Crack||n.deathType===Rd.Ice)&&E?.play(`crunch`,`foley`,1),E?.play(`stinger`,`ui`,1),n.deathType===Rd.Crack&&Fp.game.crackDeathStopTime>0&&(De=Math.max(De,t+Fp.game.crackDeathStopTime)),je(!0)}if(!Te)return;if(Te.tutorial){ne&&t-Te.at>Fp.camera.deathCamera.zoomOutAtTime&&R();return}let r=n.killedByCrack;r&&r.crackType===2&&!r.hasSpawnedExplosionParticle&&r.explosionStartedAtTime>=0&&(Te.panelAt=Math.max(Te.panelAt,t+1)),!Te.panelShown&&t>=Te.panelAt&&(Te.panelShown=!0,O.Games.add(1),O.item(`BestScoreWithoutRevive`).setMax(N.score.score),n.deathType===Rd.HitByCar&&O.item(`DeathByCarCount`).add(1),je(!0),O.Coins.value>99&&O.item(`WinAPrizeSeenCountSinceAvaiable`).add(1),oe.showEnd(B()))},B=()=>({score:N.score.score,best:N.score.best,newBest:N.score.isNewBest,distance:Dp(Math.max(0,N.rules.distanceReached(N.biped,v.ground))),coinsThisRun:N.rules.coinsCollected,coins:O.Coins.value,giftInMs:O.date(`TimeOfNextFreeGift`).timeUntil,prizeAd:O.Coins.value<100&&!!F&&le.machine.adCooldownOver}),Le=e=>{v.update(e);let t=v.ground.furthestCrackBeforePosition(e);if(!t)return NaN;t.length<.8&&t.nextCrack&&(t=t.nextCrack);let n=t.maxPos+t.length/2;return N.spawnOverrideZ=n,N.bestDistance=Math.max(N.bestDistance,_.distanceForZ(n)),N.restart(),p.instantUpdate(),n},Re={t:0,frames:0,ticks:0,simSum:0,simMax:0,renderSum:0},ze=performance.memory,Be=e=>{if(Re.t+=e,Re.frames++,Re.t<1)return;let n=a.info,i=1/1048576,o={fps:+(Re.frames/Re.t).toFixed(1),frameMs:+(Re.t/Re.frames*1e3).toFixed(2),simMs:Re.ticks?+(Re.simSum/Re.ticks).toFixed(3):0,simMsMax:+Re.simMax.toFixed(3),ticksPerFrame:+(Re.ticks/Re.frames).toFixed(2),renderMs:+(Re.renderSum/Re.frames).toFixed(3),drawCalls:n.render.calls,triangles:n.render.triangles,geometries:n.memory.geometries,textures:n.memory.textures,programs:n.programs?.length??0,heapMB:ze?+(ze.usedJSHeapSize*i).toFixed(1):null,heapLimitMB:ze?Math.round(ze.jsHeapSizeLimit*i):null,tier:h.tier,pixelRatio:a.getPixelRatio(),canvas:`${t.width}x${t.height}`};r.perf=o,Re.t=Re.frames=Re.ticks=Re.simSum=Re.simMax=Re.renderSum=0,by&&s.setPerf(`${o.fps.toFixed(0)} fps  ${o.frameMs.toFixed(1)} ms  tier ${o.tier} ×${o.pixelRatio}\nsim ${o.simMs.toFixed(2)} ms/tick (max ${o.simMsMax.toFixed(1)})  ${o.ticksPerFrame} t/f\nrender cpu ${o.renderMs.toFixed(2)} ms  ${o.canvas}\ndc ${o.drawCalls}  tri ${(o.triangles/1e3).toFixed(1)}k  geo ${o.geometries} tex ${o.textures} prg ${o.programs}\nheap ${o.heapMB??`–`} / ${o.heapLimitMB??`–`} MB`)};window.__steppyDebug={sim:N,rig:p,lighting:c,quality:h,camera:o.camera,scene:o.scene,setController(e){N.controller=e},restart(){N.restart()},setAutoRestart(e){ne=e},retry(){R()},audioSelfTest(){return Sv()},audio:E,crossings(e){let t=[];for(let n=0;t.length<e&&n<1e3;n++)hm(n,Fp.cars.crossing)&&t.push(_.chunkZ(n,v.baseIndex)+Fp.cars.crossing.localZ);return t},spawnAt:Le,freeze(e){e?Ue.stop():Ue.start()},advance(e){Ue.advance(e)},openCharacters(){I.setIsInState(Q.CharacterSelect,!0)},setLook(e){M.setLook(te(e))},characterSelect:L,openMachine(){ue()},freePull(e=-1,t=1){return I.state!==Q.LauncherSelect&&ue(),le.freePull(e,t)},prizeMachine:le,ads:F};let Ve=e=>({x:+e.x.toFixed(4),y:+e.y.toFixed(4),z:+e.z.toFixed(4)}),He=()=>{let e=N.biped,t=e.predictLanding(),n=e.currentFoot.footLength;r.biped={alive:!e.hasFallenOver,deathType:e.deathType,deathName:zd[e.deathType],started:e.hasStartedStepping,pelvis:Ve(e.pelvis.pos),head:Ve(N.ragdoll.head?.pos??e.pelvis.pos),feet:e.feet.map(e=>({base:Ve(e.base),sole:Ve(e.solePos),attached:e.isAttachedToGround})),currentFoot:e._currentFootIndex%2,lifted:e.hasLiftedCurrentFoot,givenUp:e.hasGivenUpLiftingCurrentFoot,differenceBetweenSoles:e.differenceBetweenSoles,averageLegLength:e.averageLegLength,footLength:n,predictedLanding:t?{soleZ:t.solePos.z,frames:t.frameCount,safe:!v.ground.crackOverlapping(t.solePos.z,n,N.time),canDrop:e.canDropFoot}:null,steps:e.stepsTaken,pavers:N.paversThisRun},r.runs=N.runs,r.totalPavers=N.totalPavers,r.deaths=N.deaths.slice(-20)},Ue=new Yl({fixed(){let e=performance.now();N.input=We.held&&I.isInGameplay,N.step(),E?.tick(),m.snapshot();let t=performance.now()-e;Re.ticks++,Re.simSum+=t,t>Re.simMax&&(Re.simMax=t)},update(t){r.tick=Ue.tick,r.fps=Ue.fps,r.frameMs=Ue.frameMs,r.paused=Ue.paused,r.inputsDown=We.inputsDown,y.sync(),x=t.unscaledTime,we(),E?.update({realDt:t.realDt,now:t.unscaledTime,paused:Ue.paused,runs:N.runs,dead:N.dead,timeSinceDeath:Te?t.unscaledTime-Te.at:0,started:N.biped.hasStartedStepping,listener:p.spring.pos,cars:N.traffic.cars,slowdown:N.timeScale});for(let e of N.score.events)Fe(e);N.score.events.length=0,Ie(t.unscaledTime),I.update(t.realDt,t.unscaledTime),L.update(t.realDt,t.unscaledTime),e.paused||le.update(t.realDt),_e(),N.biped.hasStartedStepping&&s.showHint(!1);let n=!N.biped.hasStartedStepping&&!N.dead&&(N.runs===0||!N.hasPassedTutorial)&&I.state===Q.Gameplay;s.showLogo(n),ye.transient>0&&(xe=t.unscaledTime);let i=N.biped.hasStartedStepping&&!N.dead;i!==Oe&&(Oe=i,e.setClosingConfirmation(i)),je(!1);let o=!!Te?.panelShown,l=N.biped.hasStartedStepping&&!N.dead;s.update({score:N.score.score,best:N.score.best,distance:Dp(Math.max(0,N.rules.distanceReached(N.biped,v.ground))),showScore:N.biped.hasStartedStepping&&N.score.score>0,topHidden:o,coins:O.Coins.value-ye.transient,coinsVisible:!l||I.state!==Q.Gameplay||t.unscaledTime-xe<1.5,canPause:I.canPause,dt:t.realDt});let d=N.biped.hasFallenOver;if(d&&!P){let e=N.biped.deathType,t=Fp.camera.deathImpactShake;(e===Rd.Crack||e===Rd.Stretch)&&t.radius>0&&p.addShake(t.radius,0,t.length)}P=d,p.update(t.realDt,1),C+=(N.biped.averageFootPos.z-C)*(1-Math.exp(-3.5*t.realDt)),h.measure(t.realDt);let f=N.biped.averageFootPos.z,m=[];for(let e=v.ground.closestCrackAfterPosition(f);e&&m.length<3;e=e.nextCrack)m.push({minPos:e.minPos(),maxPos:e.maxPos});r.level={playerZ:f,distance:_.distanceForZ(f),chunks:v.chunks.map(e=>e.chunkIndex).sort((e,t)=>e-t),window:v.window(f),cracks:v.ground.count,paverChunkViews:y.chunkViewCount,gapsAhead:m},He(),r.score={score:N.score.score,best:N.score.best,isNewBest:N.score.isNewBest,distance:N.biped.currentDistanceReached,bestDistance:N.bestDistance,cashIns:Ae.cashIns,maxComboNumber:Ae.maxCombo,lostCombos:Ae.lost,checkpoints:Ae.checkpoints,timeScale:+Ue.timeScale.toFixed(3),simTimeScale:+N.timeScale.toFixed(3),tutorial:!N.hasPassedTutorial,save:O.kind,popups:s.popupTexts,popupsShown:Ae.popups,outlineBars:ve.info.bars,flags:ve.info.flags,flagsUp:ve.info.flagsUp,death:Te?Te.panelShown?`panel`:`headline`:`none`,headline:Te?Te.headline:``},r.ui={menu:I.state,settingsSub:I.settingsSubState,canPause:I.canPause,paused:Ue.paused,screens:oe.shown,backButton:me,lang:yp()===0?`en`:`ru`,logo:n,coins:O.Coins.value,coinsShown:s.shownCoins,coinsThisRun:N.rules.coinsCollected,transient:ye.transient,coinsOnPavers:ye.info.onPavers,bagsOnPavers:ye.info.bagsOnPavers,coinsLaunched:ye.info.launched,coinsArrived:ye.info.arrived,games:O.Games.value,save:{kind:O.kind,writes:O.writes,corrupt:O.loadInfo.corrupt,migrated:O.loadInfo.migratedLegacy}},r.machine=le.isOpen||I.state===Q.LauncherSelect?le.info():{open:!1,coins:O.Coins.value,adCooldownMs:Math.round(le.machine.adCooldownMs())},r.ads={provider:F?.name??null,showing:!!F?.showing,info:F&&`info`in F?F.info:null},r.chars={selection:j.selection(),look:M.currentLook.owners.map(e=>e.id),unlockAll:Nh.unlockAll,counter:j.unlockCounter(),select:L.info()};let g=N.biped.wasHitByCarAtPoint;r.m6={cars:N.traffic.cars.map(e=>({id:e.id,x:+e.pos.x.toFixed(3),z:+e.pos.z.toFixed(3),yaw:+e.yaw.toFixed(1),speed:+e.speed.toFixed(2),phase:e.phase,main:e.isOnMainRoad})),spawned:N.traffic.spawned,carViews:Se.count,crossings:v.chunks.filter(e=>e.isCrossing).map(e=>e.chunkIndex),timedVisible:Ce.info.timedVisible,tntVisible:Ce.info.tntVisible,collapsed:N.specials.collapsed,explosions:N.specials.explosions,hitPoint:g?Ve(g):null},r.audio={available:!!E,state:E?E.ctx.state:`none`,ready:!!E?.ready,muted:!!E?.muted,music:E?.director?.main?.name??null,vols:E?.director?E.director.tracks.map(e=>+e.vol.toFixed(2)):[],footsteps:E?.info.footsteps??0,styled:E?.info.styled??0,sfx:E?.info.sfx??0,engines:E?.info.engines??0,horns:E?.info.horns??0,error:E?.error??null};let b=p.debug,S=p.spring;r.camera={mode:b.mode,pos:Ve(S.pos),fov:+S.fov.toFixed(3),targetFov:b.targetFov,focus:b.focus?Ve(b.focus):null,subSteps:S.subSteps,preset:p.cameraIndexForChunk(Math.trunc(_.distanceForZ(N.biped.averageFootPos.z)/_.chunkLength))};let w=c.current;if(r.lighting={tod:+c.info.tod.toFixed(4),phase:+c.info.phase.toFixed(3),slot:c.info.slot,weather:c.info.weather,night:+w.nightLightAmount.toFixed(3),rain:u.info.rain,snow:u.info.snow},r.quality={tier:h.tier,name:Zf[h.tier],forced:h.forced,avgMs:+h.avgMs.toFixed(1),pixelRatio:a.getPixelRatio(),drawCalls:a.info.render.calls,triangles:a.info.render.triangles},yy){let t=r.biped;s.setDebug(`${Ue.fps.toFixed(0)} fps  ${Ue.frameMs.toFixed(1)} ms\ntick ${Ue.tick}  ×${Ue.timeScale.toFixed(2)}${Ue.paused?`  PAUSED`:``}\ninputs ${We.inputsDown}  z ${f.toFixed(2)}  d ${_.distanceForZ(f)}\npavers ${t.pavers}  run ${N.runs}  ${t.alive?``:t.deathName.toUpperCase()}\nstride ${t.differenceBetweenSoles.toFixed(2)} / ${(t.averageLegLength*Fp.movement.fullySpreadLength).toFixed(2)}${t.predictedLanding?`  land ${t.predictedLanding.soleZ.toFixed(2)}${t.predictedLanding.safe?``:` CRACK`}`:``}\ncam ${b.mode} fov ${S.fov.toFixed(1)}  ${c.info.weather} ph ${c.info.phase.toFixed(2)}\ntier ${h.tier} ${Zf[h.tier]}  ${h.avgMs.toFixed(0)} ms  dc ${a.info.render.calls}\n${e.inTelegram?`tg ${e.platform} ${e.version}`:`browser`}`)}},timeScale:()=>{let e=Ue.unscaledTime,t=ke<=0?1:Jm(ke+.1,ke+.5,e);return e<De&&(t=0),t*N.timeScale},render(e){let n=performance.now();M.apply(e.alpha),Se.apply(e.alpha),T();let r=N.biped.averageFootPos.z;ve.update({time:N.time,z0:r-10,z1:r+25,timeSinceDeath:N.dead?N.biped.unscaledTimeSinceDeath:-1,bestDistance:N.bestDistance,gold:N.rules.lastLevelRank>0,realDt:e.realDt}),Ce.update({time:N.time,unscaledTime:N.unscaledTime,realDt:e.realDt,z0:r-12,z1:r+30});let i=ye.transient>0?s.coinTarget():null;ye.update({dt:e.realDt,z0:r-10,z1:r+30,camera:o.camera,target:i?{x:i.x,y:i.y,w:t.clientWidth||window.innerWidth,h:t.clientHeight||window.innerHeight}:null}),w(e.realDt*e.timeScale,e.realDt),de?de.render(a):I.amount(Q.CharacterSelect)>=.5?L.render(a):I.amount(Q.LauncherSelect)>=.5?le.render(a):a.render(o.scene,o.camera),p.restore(o.camera),Re.renderSum+=performance.now()-n,Be(e.realDt)}}),We=new Zl(t,()=>Ue.unscaledTime);We.events.on(`down`,()=>{Te&&Te.panelShown&&I.isInGameplay&&Ue.unscaledTime>=Te.panelAt+Fp.score.retryInputDelay&&R()}),e.events.on(`pause`,e=>{(e===`document-hidden`||e===`telegram-deactivated`||document.hidden)&&E?.setBackgrounded(!0),N.biped.hasStartedStepping&&I.canPause&&I.setIsInState(Q.Paused,!0),je(!0),pe()}),e.events.on(`resume`,()=>{E?.setBackgrounded(!1),pe()}),e.events.on(`escape`,()=>{let e=I.onBack();e===`backoutCharacterSelect`?L.back():e===`backoutLauncher`&&le.back()}),pe();let Ge=i.get(`z`);Ge!==null&&Ge!==``&&Number.isFinite(Number(Ge))&&Le(Number(Ge)),Ue.start(),He(),r.ready=!0,wv().done()}xy().catch(e=>{console.error(`[boot] failed`,e),window.__steppy&&(window.__steppy.error=String(e)),wv().fail(`COULD NOT START: ${e instanceof Error?e.message:String(e)}`.slice(0,160))});