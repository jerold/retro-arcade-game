(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.jg(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.eR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.eR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.eR(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={ey:function ey(){},
ev:function(){return new P.ah("No element")},
hJ:function(){return new P.ah("Too many elements")},
bf:function bf(){},
af:function af(){},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.$ti=c},
bu:function bu(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c},
a5:function a5(a,b,c){this.a=a
this.b=b
this.$ti=c},
bD:function bD(a,b,c){this.a=a
this.b=b
this.$ti=c},
a0:function a0(a,b,c){this.a=a
this.b=b
this.$ti=c},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bh:function bh(a){this.$ti=a},
hc:function(a){var t,s=H.hb(a)
if(s!=null)return s
t="minified:"+a
return t},
j7:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.da.b(a)},
f:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aF(a)
if(typeof t!="string")throw H.c(H.fT(a))
return t},
aQ:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dy:function(a){return H.hS(a)},
hS:function(a){var t,s,r
if(a instanceof P.o)return H.M(H.U(a),null)
if(J.c3(a)===C.L||u.cr.b(a)){t=C.q(a)
if(H.fi(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.fi(r))return r}}return H.M(H.U(a),null)},
fi:function(a){var t=a!=="Object"&&a!==""
return t},
N:function(a){throw H.c(H.fT(a))},
k:function(a,b){if(a==null)J.aE(a)
throw H.c(H.b9(a,b))},
b9:function(a,b){var t,s,r="index"
if(!H.eO(b))return new P.P(!0,b,r,null)
t=H.am(J.aE(a))
if(!(b<0)){if(typeof t!=="number")return H.N(t)
s=b>=t}else s=!0
if(s)return P.aN(b,a,r,null,t)
return P.cp(b,r)},
fT:function(a){return new P.P(!0,a,null,null)},
c:function(a){var t,s
if(a==null)a=new P.cn()
t=new Error()
t.dartException=a
s=H.jh
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
jh:function(){return J.aF(this.dartException)},
ap:function(a){throw H.c(a)},
en:function(a){throw H.c(P.aJ(a))},
a4:function(a){var t,s,r,q,p,o
a=H.je(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.h([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.dB(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
dC:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
fo:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
fh:function(a,b){return new H.cm(a,b==null?null:b.method)},
ez:function(a,b){var t=b==null,s=t?null:b.method
return new H.ck(a,s,t?null:b.receiver)},
V:function(a){if(a==null)return new H.dw(a)
if(a instanceof H.bi)return H.ao(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return H.ao(a,a.dartException)
return H.iQ(a)},
ao:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iQ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.c5(s,16)&8191)===10)switch(r){case 438:return H.ao(a,H.ez(H.f(t)+" (Error "+r+")",f))
case 445:case 5007:return H.ao(a,H.fh(H.f(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.hg()
p=$.hh()
o=$.hi()
n=$.hj()
m=$.hm()
l=$.hn()
k=$.hl()
$.hk()
j=$.hp()
i=$.ho()
h=q.D(t)
if(h!=null)return H.ao(a,H.ez(H.I(t),h))
else{h=p.D(t)
if(h!=null){h.method="call"
return H.ao(a,H.ez(H.I(t),h))}else{h=o.D(t)
if(h==null){h=n.D(t)
if(h==null){h=m.D(t)
if(h==null){h=l.D(t)
if(h==null){h=k.D(t)
if(h==null){h=n.D(t)
if(h==null){h=j.D(t)
if(h==null){h=i.D(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.ao(a,H.fh(H.I(t),h))}}return H.ao(a,new H.cy(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.bz()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.ao(a,new P.P(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.bz()
return a},
aC:function(a){var t
if(a instanceof H.bi)return a.b
if(a==null)return new H.bS(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bS(a)},
iZ:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.F(0,a[t],a[s])}return b},
j6:function(a,b,c,d,e,f){u.Y.a(a)
switch(H.am(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.fb("Unsupported number of arguments for wrapped closure"))},
c1:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.j6)
a.$identity=t
return t},
hF:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.cs().constructor.prototype):Object.create(new H.aI(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.a_
if(typeof s!=="number")return s.k()
$.a_=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.f8(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.hB(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.f8(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
hB:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.fZ,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
t=c?H.hz:H.hy
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.c("Error in functionType of tearoff")},
hC:function(a,b,c,d){var t=H.f7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
f8:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.hE(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.hC(s,!q,t,b)
if(s===0){q=$.a_
if(typeof q!=="number")return q.k()
$.a_=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.f(H.er())+";return "+o+"."+H.f(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.a_
if(typeof q!=="number")return q.k()
$.a_=q+1
n+=q
return new Function("return function("+n+"){return this."+H.f(H.er())+"."+H.f(t)+"("+n+");}")()},
hD:function(a,b,c,d){var t=H.f7,s=H.hA
switch(b?-1:a){case 0:throw H.c(new H.cq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
hE:function(a,b){var t,s,r,q,p,o,n=H.er(),m=$.f5
if(m==null)m=$.f5=H.f4("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.hD(s,!q,t,b)
if(s===1){q="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+m+");"
p=$.a_
if(typeof p!=="number")return p.k()
$.a_=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+m+", "+o+");"
p=$.a_
if(typeof p!=="number")return p.k()
$.a_=p+1
return new Function(q+p+"}")()},
eR:function(a,b,c,d,e,f,g){return H.hF(a,b,c,d,!!e,!!f,g)},
hy:function(a,b){return H.d_(v.typeUniverse,H.U(a.a),b)},
hz:function(a,b){return H.d_(v.typeUniverse,H.U(a.c),b)},
f7:function(a){return a.a},
hA:function(a){return a.c},
er:function(){var t=$.f6
return t==null?$.f6=H.f4("self"):t},
f4:function(a){var t,s,r,q=new H.aI("self","target","receiver","name"),p=J.ex(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.c(P.ep("Field name "+a+" not found."))},
eb:function(a){if(a==null)H.iR("boolean expression must not be null")
return a},
iR:function(a){throw H.c(new H.cA(a))},
jg:function(a){throw H.c(new P.c9(a))},
j0:function(a){return v.getIsolateTag(a)},
jX:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
j9:function(a){var t,s,r,q,p,o=H.I($.fY.$1(a)),n=$.ec[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ei[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.fI($.fS.$2(a,o))
if(r!=null){n=$.ec[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ei[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.ek(t)
$.ec[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.ei[o]=t
return t}if(q==="-"){p=H.ek(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.h5(a,t)
if(q==="*")throw H.c(P.fp(o))
if(v.leafTags[o]===true){p=H.ek(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.h5(a,t)},
h5:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.eV(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ek:function(a){return J.eV(a,!1,null,!!a.$iaP)},
ja:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.ek(t)
else return J.eV(t,c,null,null)},
j4:function(){if(!0===$.eU)return
$.eU=!0
H.j5()},
j5:function(){var t,s,r,q,p,o,n,m
$.ec=Object.create(null)
$.ei=Object.create(null)
H.j3()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.h7.$1(p)
if(o!=null){n=H.ja(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
j3:function(){var t,s,r,q,p,o,n=C.A()
n=H.b8(C.B,H.b8(C.C,H.b8(C.r,H.b8(C.r,H.b8(C.D,H.b8(C.E,H.b8(C.F(C.q),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.fY=new H.ef(q)
$.fS=new H.eg(p)
$.h7=new H.eh(o)},
b8:function(a,b){return a(b)||b},
hO:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.c(new P.dj("Illegal RegExp pattern ("+String(o)+")",a))},
je:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
be:function be(){},
aM:function aM(a,b){this.a=a
this.$ti=b},
dB:function dB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cm:function cm(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.a=a},
dw:function dw(a){this.a=a},
bi:function bi(a,b){this.a=a
this.b=b},
bS:function bS(a){this.a=a
this.b=null},
as:function as(){},
cv:function cv(){},
cs:function cs(){},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cq:function cq(a){this.a=a},
cA:function cA(a){this.a=a},
av:function av(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dr:function dr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bo:function bo(a,b){this.a=a
this.$ti=b},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ef:function ef(a){this.a=a},
eg:function eg(a){this.a=a},
eh:function eh(a){this.a=a},
cj:function cj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hW:function(a,b){var t=b.c
return t==null?b.c=H.eK(a,b.z,!0):t},
fk:function(a,b){var t=b.c
return t==null?b.c=H.bU(a,"ab",[b.z]):t},
fl:function(a){var t=a.y
if(t===6||t===7||t===8)return H.fl(a.z)
return t===11||t===12},
hV:function(a){return a.cy},
ed:function(a){return H.eL(v.typeUniverse,a,!1)},
an:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.an(a,t,c,a0)
if(s===t)return b
return H.fE(a,s,!0)
case 7:t=b.z
s=H.an(a,t,c,a0)
if(s===t)return b
return H.eK(a,s,!0)
case 8:t=b.z
s=H.an(a,t,c,a0)
if(s===t)return b
return H.fD(a,s,!0)
case 9:r=b.Q
q=H.c0(a,r,c,a0)
if(q===r)return b
return H.bU(a,b.z,q)
case 10:p=b.z
o=H.an(a,p,c,a0)
n=b.Q
m=H.c0(a,n,c,a0)
if(o===p&&m===n)return b
return H.eI(a,o,m)
case 11:l=b.z
k=H.an(a,l,c,a0)
j=b.Q
i=H.iN(a,j,c,a0)
if(k===l&&i===j)return b
return H.fC(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.c0(a,h,c,a0)
p=b.z
o=H.an(a,p,c,a0)
if(g===h&&o===p)return b
return H.eJ(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.c(P.d7("Attempted to substitute unexpected RTI kind "+d))}},
c0:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.an(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
iO:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.an(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
iN:function(a,b,c,d){var t,s=b.a,r=H.c0(a,s,c,d),q=b.b,p=H.c0(a,q,c,d),o=b.c,n=H.iO(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.cL()
t.a=r
t.b=p
t.c=n
return t},
h:function(a,b){a[v.arrayRti]=b
return a},
iX:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.fZ(t)
return a.$S()}return null},
h2:function(a,b){var t
if(H.fl(b))if(a instanceof H.as){t=H.iX(a)
if(t!=null)return t}return H.U(a)},
U:function(a){var t
if(a instanceof P.o){t=a.$ti
return t!=null?t:H.eM(a)}if(Array.isArray(a))return H.G(a)
return H.eM(J.c3(a))},
G:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
n:function(a){var t=a.$ti
return t!=null?t:H.eM(a)},
eM:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.iv(a,t)},
iv:function(a,b){var t=a instanceof H.as?a.__proto__.__proto__.constructor:b,s=H.il(v.typeUniverse,t.name)
b.$ccache=s
return s},
fZ:function(a){var t,s,r
H.am(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.eL(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
iu:function(a){var t,s,r=this,q=u.K
if(r===q)return H.bY(r,a,H.iy)
if(!H.a8(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.bY(r,a,H.iB)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.eO
else if(t===u.cb||t===u.p)s=H.ix
else if(t===u.N)s=H.iz
else s=t===u.v?H.fM:null
if(s!=null)return H.bY(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.j8)){r.r="$i"+q
return H.bY(r,a,H.iA)}}else if(q===7)return H.bY(r,a,H.is)
return H.bY(r,a,H.iq)},
bY:function(a,b,c){a.b=c
return a.b(b)},
it:function(a){var t,s,r=this
if(!H.a8(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.io
else if(r===u.K)s=H.im
else s=H.ir
r.a=s
return r.a(a)},
iG:function(a){var t,s=a.y
if(!H.a8(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.I||s===7||a===u.P||a===u.T},
iq:function(a){var t=this
if(a==null)return H.iG(t)
return H.A(v.typeUniverse,H.h2(a,t),null,t,null)},
is:function(a){if(a==null)return!0
return this.z.b(a)},
iA:function(a){var t=this,s=t.r
if(a instanceof P.o)return!!a[s]
return!!J.c3(a)[s]},
jW:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.fK(a,t)},
ir:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.fK(a,t)},
fK:function(a,b){throw H.c(H.ia(H.fs(a,H.h2(a,b),H.M(b,null))))},
fs:function(a,b,c){var t=P.cc(a),s=H.M(b==null?H.U(a):b,null)
return t+": type '"+H.f(s)+"' is not a subtype of type '"+H.f(c)+"'"},
ia:function(a){return new H.bT("TypeError: "+a)},
F:function(a,b){return new H.bT("TypeError: "+H.fs(a,null,b))},
iy:function(a){return a!=null},
im:function(a){return a},
iB:function(a){return!0},
io:function(a){return a},
fM:function(a){return!0===a||!1===a},
jL:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.F(a,"bool"))},
fH:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.F(a,"bool"))},
jM:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.F(a,"bool?"))},
jN:function(a){if(typeof a=="number")return a
throw H.c(H.F(a,"double"))},
jP:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.F(a,"double"))},
jO:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.F(a,"double?"))},
eO:function(a){return typeof a=="number"&&Math.floor(a)===a},
jQ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.F(a,"int"))},
am:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.F(a,"int"))},
jR:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.F(a,"int?"))},
ix:function(a){return typeof a=="number"},
jS:function(a){if(typeof a=="number")return a
throw H.c(H.F(a,"num"))},
jU:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.F(a,"num"))},
jT:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.F(a,"num?"))},
iz:function(a){return typeof a=="string"},
jV:function(a){if(typeof a=="string")return a
throw H.c(H.F(a,"String"))},
I:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.F(a,"String"))},
fI:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.F(a,"String?"))},
iJ:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.c.k(s,H.M(a[r],b))
return t},
fL:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.h([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.a.j(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.k(a5,j)
m=C.c.k(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.c.k(" extends ",H.M(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.M(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.c.k(a2,H.M(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.c.k(a2,H.M(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.f_(H.M(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.f(a0)},
M:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.M(a.z,b)
return t}if(m===7){s=a.z
t=H.M(s,b)
r=s.y
return J.f_(r===11||r===12?C.c.k("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.f(H.M(a.z,b))+">"
if(m===9){q=H.iP(a.z)
p=a.Q
return p.length!==0?q+("<"+H.iJ(p,b)+">"):q}if(m===11)return H.fL(a,b,null)
if(m===12)return H.fL(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.k(b,o)
return b[o]}return"?"},
iP:function(a){var t,s=H.hb(a)
if(s!=null)return s
t="minified:"+a
return t},
fF:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
il:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.eL(a,b,!1)
else if(typeof n=="number"){t=n
s=H.bV(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.bU(a,b,r)
o[b]=p
return p}else return n},
ij:function(a,b){return H.fG(a.tR,b)},
ii:function(a,b){return H.fG(a.eT,b)},
eL:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.fz(H.fx(a,null,b,c))
s.set(b,t)
return t},
d_:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.fz(H.fx(a,b,c,!0))
r.set(c,s)
return s},
ik:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.eI(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
al:function(a,b){b.a=H.it
b.b=H.iu
return b},
bV:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.R(null,null)
t.y=b
t.cy=c
s=H.al(a,t)
a.eC.set(c,s)
return s},
fE:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.ig(a,b,s,c)
a.eC.set(s,t)
return t},
ig:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.a8(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.R(null,null)
r.y=6
r.z=b
r.cy=c
return H.al(a,r)},
eK:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.ie(a,b,s,c)
a.eC.set(s,t)
return t},
ie:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.a8(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.ej(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.I)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.ej(r.z))return r
else return H.hW(a,b)}}q=new H.R(null,null)
q.y=7
q.z=b
q.cy=c
return H.al(a,q)},
fD:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.ic(a,b,s,c)
a.eC.set(s,t)
return t},
ic:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.a8(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.bU(a,"ab",[b])
else if(b===u.P||b===u.T)return u.bc}r=new H.R(null,null)
r.y=8
r.z=b
r.cy=c
return H.al(a,r)},
ih:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.R(null,null)
t.y=13
t.z=b
t.cy=r
s=H.al(a,t)
a.eC.set(r,s)
return s},
cZ:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
ib:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
bU:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.cZ(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.R(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.al(a,s)
a.eC.set(q,r)
return r},
eI:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.cZ(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.R(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.al(a,p)
a.eC.set(r,o)
return o},
fC:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.cZ(n)
if(k>0){t=m>0?",":""
s=H.cZ(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.ib(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.R(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.al(a,p)
a.eC.set(r,s)
return s},
eJ:function(a,b,c,d){var t,s=b.cy+("<"+H.cZ(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.id(a,b,c,s,d)
a.eC.set(s,t)
return t},
id:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.an(a,b,s,0)
n=H.c0(a,c,s,0)
return H.eJ(a,o,n,c!==n)}}m=new H.R(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.al(a,m)},
fx:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fz:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.i5(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.fy(a,s,h,g,!1)
else if(r===46)s=H.fy(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.ak(a.u,a.e,g.pop()))
break
case 94:g.push(H.ih(a.u,g.pop()))
break
case 35:g.push(H.bV(a.u,5,"#"))
break
case 64:g.push(H.bV(a.u,2,"@"))
break
case 126:g.push(H.bV(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.eH(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.bU(q,o,p))
else{n=H.ak(q,a.e,o)
switch(n.y){case 11:g.push(H.eJ(q,n,p,a.n))
break
default:g.push(H.eI(q,n,p))
break}}break
case 38:H.i6(a,g)
break
case 42:m=a.u
g.push(H.fE(m,H.ak(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.eK(m,H.ak(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.fD(m,H.ak(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.cL()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.eH(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.fC(q,H.ak(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.eH(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.i8(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.ak(a.u,a.e,i)},
i5:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
fy:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.fF(t,p.z)[q]
if(o==null)H.ap('No "'+q+'" in "'+H.hV(p)+'"')
d.push(H.d_(t,p,o))}else d.push(q)
return n},
i6:function(a,b){var t=b.pop()
if(0===t){b.push(H.bV(a.u,1,"0&"))
return}if(1===t){b.push(H.bV(a.u,4,"1&"))
return}throw H.c(P.d7("Unexpected extended operation "+H.f(t)))},
ak:function(a,b,c){if(typeof c=="string")return H.bU(a,c,a.sEA)
else if(typeof c=="number")return H.i7(a,b,c)
else return c},
eH:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.ak(a,b,c[t])},
i8:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.ak(a,b,c[t])},
i7:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.c(P.d7("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.c(P.d7("Bad index "+c+" for "+b.i(0)))},
A:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.a8(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.a8(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.A(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.A(a,b.z,c,d,e)
if(q===6){t=d.z
return H.A(a,b,c,t,e)}if(s===8){if(!H.A(a,b.z,c,d,e))return!1
return H.A(a,H.fk(a,b),c,d,e)}if(s===7){t=H.A(a,b.z,c,d,e)
return t}if(q===8){if(H.A(a,b,c,d.z,e))return!0
return H.A(a,b,c,H.fk(a,d),e)}if(q===7){t=H.A(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Y)return!0
if(q===12){if(b===u.R)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.A(a,l,c,k,e)||!H.A(a,k,e,l,c))return!1}return H.fN(a,b.z,c,d.z,e)}if(q===11){if(b===u.R)return!0
if(t)return!1
return H.fN(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.iw(a,b,c,d,e)}return!1},
fN:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.A(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.A(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.A(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.A(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.A(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
iw:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.A(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.fF(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.A(a,H.d_(a,b,m[q]),c,s[q],e))return!1
return!0},
ej:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.a8(a))if(s!==7)if(!(s===6&&H.ej(a.z)))t=s===8&&H.ej(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
j8:function(a){var t
if(!H.a8(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
a8:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
fG:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
R:function R(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
cL:function cL(){this.c=this.b=this.a=null},
cK:function cK(){},
bT:function bT(a){this.a=a},
hb:function(a){return v.mangledGlobalNames[a]},
jd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
eV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d5:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.eU==null){H.j4()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.c(P.fp("Return interceptor for "+H.f(t(a,p))))}r=a.constructor
q=r==null?null:r[J.ff()]
if(q!=null)return q
q=H.j9(a)
if(q!=null)return q
if(typeof a=="function")return C.N
t=Object.getPrototypeOf(a)
if(t==null)return C.w
if(t===Object.prototype)return C.w
if(typeof r=="function"){Object.defineProperty(r,J.ff(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
ff:function(){var t=$.fw
return t==null?$.fw=v.getIsolateTag("_$dart_js"):t},
hK:function(a,b){if(a<0||a>4294967295)throw H.c(P.fj(a,0,4294967295,"length",null))
return J.hL(new Array(a),b)},
ew:function(a,b){if(a<0)throw H.c(P.ep("Length must be a non-negative integer: "+a))
return H.h(new Array(a),b.h("v<0>"))},
hL:function(a,b){return J.ex(H.h(a,b.h("v<0>")),b)},
ex:function(a,b){a.fixed$length=Array
return a},
fe:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hM:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.aP(a,b)
if(s!==32&&s!==13&&!J.fe(s))break;++b}return b},
hN:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.b6(a,t)
if(s!==32&&s!==13&&!J.fe(s))break}return b},
c3:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bm.prototype
return J.ci.prototype}if(typeof a=="string")return J.ad.prototype
if(a==null)return J.aO.prototype
if(typeof a=="boolean")return J.ch.prototype
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
return a}if(a instanceof P.o)return a
return J.d5(a)},
j_:function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.ad.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
return a}if(a instanceof P.o)return a
return J.d5(a)},
eS:function(a){if(typeof a=="string")return J.ad.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
return a}if(a instanceof P.o)return a
return J.d5(a)},
eT:function(a){if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
return a}if(a instanceof P.o)return a
return J.d5(a)},
fX:function(a){if(typeof a=="string")return J.ad.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aU.prototype
return a},
a7:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
return a}if(a instanceof P.o)return a
return J.d5(a)},
f_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.j_(a).k(a,b)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.c3(a).J(a,b)},
aD:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.j7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.eS(a).p(a,b)},
hr:function(a,b,c,d){return J.a7(a).bu(a,b,c,d)},
hs:function(a){return J.a7(a).bB(a)},
eo:function(a,b){return J.eT(a).A(a,b)},
ht:function(a){return J.a7(a).gca(a)},
hu:function(a){return J.a7(a).gav(a)},
bb:function(a){return J.a7(a).gb5(a)},
c4:function(a){return J.c3(a).gw(a)},
aq:function(a){return J.eT(a).gv(a)},
aE:function(a){return J.eS(a).gl(a)},
hv:function(a,b,c){return J.eT(a).b9(a,b,c)},
f0:function(a){return J.a7(a).cq(a)},
hw:function(a,b){return J.a7(a).sbL(a,b)},
f1:function(a,b){return J.a7(a).sax(a,b)},
hx:function(a){return J.fX(a).cv(a)},
aF:function(a){return J.c3(a).i(a)},
f2:function(a){return J.fX(a).cw(a)},
K:function K(){},
ch:function ch(){},
aO:function aO(){},
ae:function ae(){},
co:function co(){},
aU:function aU(){},
X:function X(){},
v:function v(a){this.$ti=a},
dq:function dq(a){this.$ti=a},
Z:function Z(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bn:function bn(){},
bm:function bm(){},
ci:function ci(){},
ad:function ad(){}},P={
hZ:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.iS()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.c1(new P.dE(r),1)).observe(t,{childList:true})
return new P.dD(r,t,s)}else if(self.setImmediate!=null)return P.iT()
return P.iU()},
i_:function(a){self.scheduleImmediate(H.c1(new P.dF(u.M.a(a)),0))},
i0:function(a){self.setImmediate(H.c1(new P.dG(u.M.a(a)),0))},
i1:function(a){P.eF(C.J,u.M.a(a))},
eF:function(a,b){var t=C.d.a1(a.a,1000)
return P.i9(t<0?0:t,b)},
i9:function(a,b){var t=new P.cY()
t.br(a,b)
return t},
b5:function(a){return new P.cB(new P.y($.q,a.h("y<0>")),a.h("cB<0>"))},
b4:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
fJ:function(a,b){P.ip(a,b)},
b3:function(a,b){var t,s
b.toString
t=b.$ti
t.h("1/?").a(a)
if(!b.b)b.a.bw(a)
else{s=b.a
if(t.h("ab<1>").b(a))s.aN(a)
else s.aT(t.c.a(a))}},
b2:function(a,b){var t,s=H.V(a),r=H.aC(a)
b.toString
if(r==null)r=P.f3(s)
t=b.a
if(b.b)t.O(s,r)
else t.bx(s,r)},
ip:function(a,b){var t,s,r=new P.e6(b),q=new P.e7(b)
if(a instanceof P.y)a.b2(r,q,u.z)
else{t=u.z
if(u.f.b(a))a.aD(r,q,t)
else{s=new P.y($.q,u.d)
s.a=4
s.c=a
s.b2(r,q,t)}}},
b7:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
return $.q.aB(new P.e9(t),u.H,u.S,u.z)},
fc:function(a,b){var t=new P.y($.q,b.h("y<0>"))
P.eE(a,new P.dk(null,t,b))
return t},
fu:function(a,b){var t,s,r
b.a=1
try{a.aD(new P.dN(b),new P.dO(b),u.P)}catch(r){t=H.V(r)
s=H.aC(r)
P.h9(new P.dP(b,t,s))}},
dM:function(a,b){var t,s,r
for(t=u.d;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.a_()
b.a=a.a
b.c=a.c
P.b_(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.b_(r)}},
b_:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.f;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.d2(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.b_(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.d2(d,d,l.b,k.a,k.b)
return}g=$.q
if(g!==h)$.q=h
else g=d
b=b.c
if((b&15)===8)new P.dU(q,c,p).$0()
else if(j){if((b&1)!==0)new P.dT(q,k).$0()}else if((b&2)!==0)new P.dS(c,q).$0()
if(g!=null)$.q=g
b=q.c
if(r.b(b)){f=q.a.b
if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.a0(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.dM(b,f)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.a0(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
iH:function(a,b){var t
if(u.W.b(a))return b.aB(a,u.z,u.K,u.l)
t=u.y
if(t.b(a))return t.a(a)
throw H.c(P.eq(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
iD:function(){var t,s
for(t=$.b6;t!=null;t=$.b6){$.c_=null
s=t.b
$.b6=s
if(s==null)$.bZ=null
t.a.$0()}},
iM:function(){$.eN=!0
try{P.iD()}finally{$.c_=null
$.eN=!1
if($.b6!=null)$.eY().$1(P.fV())}},
fQ:function(a){var t=new P.cC(a),s=$.bZ
if(s==null){$.b6=$.bZ=t
if(!$.eN)$.eY().$1(P.fV())}else $.bZ=s.b=t},
iL:function(a){var t,s,r,q=$.b6
if(q==null){P.fQ(a)
$.c_=$.bZ
return}t=new P.cC(a)
s=$.c_
if(s==null){t.b=q
$.b6=$.c_=t}else{r=s.b
t.b=r
$.c_=s.b=t
if(r==null)$.bZ=t}},
h9:function(a){var t=null,s=$.q
if(C.b===s){P.aB(t,t,C.b,a)
return}P.aB(t,t,s,u.M.a(s.at(a)))},
jw:function(a,b){P.d6(a,"stream",b.h("a3<0>"))
return new P.cU(b.h("cU<0>"))},
iK:function(a){return},
i2:function(a,b){if(b==null)b=P.iW()
if(u.k.b(b))return a.aB(b,u.z,u.K,u.l)
if(u.bo.b(b))return u.y.a(b)
throw H.c(P.ep("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))},
iF:function(a,b){P.d2(null,null,$.q,a,b)},
iE:function(){},
eE:function(a,b){var t=$.q
if(t===C.b)return P.eF(a,u.M.a(b))
return P.eF(a,u.M.a(t.at(b)))},
d8:function(a,b){var t=b==null?P.f3(a):b
P.d6(a,"error",u.K)
return new P.bd(a,t)},
f3:function(a){var t
if(u.C.b(a)){t=a.ga6()
if(t!=null)return t}return C.H},
d2:function(a,b,c,d,e){P.iL(new P.e8(d,e))},
fO:function(a,b,c,d,e){var t,s=$.q
if(s===c)return d.$0()
$.q=c
t=s
try{s=d.$0()
return s}finally{$.q=t}},
fP:function(a,b,c,d,e,f,g){var t,s=$.q
if(s===c)return d.$1(e)
$.q=c
t=s
try{s=d.$1(e)
return s}finally{$.q=t}},
iI:function(a,b,c,d,e,f,g,h,i){var t,s=$.q
if(s===c)return d.$2(e,f)
$.q=c
t=s
try{s=d.$2(e,f)
return s}finally{$.q=t}},
aB:function(a,b,c,d){var t
u.M.a(d)
t=C.b!==c
if(t)d=!(!t||!1)?c.at(d):c.cb(d,u.H)
P.fQ(d)},
dE:function dE(a){this.a=a},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a){this.a=a},
dG:function dG(a){this.a=a},
cY:function cY(){this.b=null},
e4:function e4(a,b){this.a=a
this.b=b},
cB:function cB(a,b){this.a=a
this.b=!1
this.$ti=b},
e6:function e6(a){this.a=a},
e7:function e7(a){this.a=a},
e9:function e9(a){this.a=a},
bF:function bF(a,b){this.a=a
this.$ti=b},
a6:function a6(a,b,c,d,e){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
bG:function bG(){},
bE:function bE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
y:function y(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
dJ:function dJ(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
dN:function dN(a){this.a=a},
dO:function dO(a){this.a=a},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
dL:function dL(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a){this.a=a},
dT:function dT(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
cC:function cC(a){this.a=a
this.b=null},
a3:function a3(){},
dz:function dz(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
L:function L(){},
aY:function aY(){},
bH:function bH(){},
aX:function aX(){},
b0:function b0(){},
cG:function cG(){},
bI:function bI(a,b){this.b=a
this.a=null
this.$ti=b},
bO:function bO(){},
dY:function dY(a,b){this.a=a
this.b=b},
b1:function b1(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
aZ:function aZ(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
cU:function cU(a){this.$ti=a},
bd:function bd(a,b){this.a=a
this.b=b},
bX:function bX(){},
e8:function e8(a,b){this.a=a
this.b=b},
cS:function cS(){},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a,b){this.a=a
this.b=b},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function(a,b){return new H.av(a.h("@<0>").t(b).h("av<1,2>"))},
bq:function(a){return new P.bL(a.h("bL<0>"))},
eG:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
dX:function(a,b,c){var t=new P.aA(a,b,c.h("aA<0>"))
t.c=a.e
return t},
hI:function(a,b,c){var t,s
if(P.eP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.h([],u.s)
C.a.j($.J,a)
try{P.iC(a,t)}finally{if(0>=$.J.length)return H.k($.J,-1)
$.J.pop()}s=P.fn(b,u.r.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
dp:function(a,b,c){var t,s
if(P.eP(a))return b+"..."+c
t=new P.bA(b)
C.a.j($.J,a)
try{s=t
s.a=P.fn(s.a,a,", ")}finally{if(0>=$.J.length)return H.k($.J,-1)
$.J.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
eP:function(a){var t,s
for(t=$.J.length,s=0;s<t;++s)if(a===$.J[s])return!0
return!1},
iC:function(a,b){var t,s,r,q,p,o,n,m=a.gv(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.m())return
t=H.f(m.gn())
C.a.j(b,t)
l+=t.length+2;++k}if(!m.m()){if(k<=5)return
if(0>=b.length)return H.k(b,-1)
s=b.pop()
if(0>=b.length)return H.k(b,-1)
r=b.pop()}else{q=m.gn();++k
if(!m.m()){if(k<=4){C.a.j(b,H.f(q))
return}s=H.f(q)
if(0>=b.length)return H.k(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gn();++k
for(;m.m();q=p,p=o){o=m.gn();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.k(b,-1)
l-=b.pop().length+2;--k}C.a.j(b,"...")
return}}r=H.f(q)
s=H.f(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.j(b,n)
C.a.j(b,r)
C.a.j(b,s)},
fg:function(a,b){var t,s,r=P.bq(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.en)(a),++s)r.j(0,b.a(a[s]))
return r},
eB:function(a){var t,s={}
if(P.eP(a))return"{...}"
t=new P.bA("")
try{C.a.j($.J,a)
t.a+="{"
s.a=!0
a.U(0,new P.dt(s,t))
t.a+="}"}finally{if(0>=$.J.length)return H.k($.J,-1)
$.J.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
bL:function bL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cP:function cP(a){this.a=a
this.c=this.b=null},
aA:function aA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
br:function br(){},
p:function p(){},
bs:function bs(){},
dt:function dt(a,b){this.a=a
this.b=b},
D:function D(){},
ax:function ax(){},
by:function by(){},
bP:function bP(){},
bM:function bM(){},
bQ:function bQ(){},
hH:function(a){if(a instanceof H.as)return a.i(0)
return"Instance of '"+H.f(H.dy(a))+"'"},
ds:function(a,b,c,d){var t,s=c?J.ew(a,d):J.hK(a,d)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
eA:function(a,b,c){var t,s=H.h([],c.h("v<0>"))
for(t=J.aq(a);t.m();)C.a.j(s,c.a(t.gn()))
if(b)return s
return J.ex(s,c)},
hQ:function(a,b,c){var t,s=J.ew(a,c)
for(t=0;t<a;++t)C.a.F(s,t,b.$1(t))
return s},
hU:function(a){return new H.cj(a,H.hO(a,!1,!0,!1,!1,!1))},
fn:function(a,b,c){var t=J.aq(b)
if(!t.m())return a
if(c.length===0){do a+=H.f(t.gn())
while(t.m())}else{a+=H.f(t.gn())
for(;t.m();)a=a+c+H.f(t.gn())}return a},
dd:function(a){return new P.aK(1000*a)},
cc:function(a){if(typeof a=="number"||H.fM(a)||null==a)return J.aF(a)
if(typeof a=="string")return JSON.stringify(a)
return P.hH(a)},
d7:function(a){return new P.bc(a)},
ep:function(a){return new P.P(!1,null,null,a)},
eq:function(a,b,c){return new P.P(!0,a,b,c)},
d6:function(a,b,c){if(a==null)throw H.c(new P.P(!1,null,b,"Must not be null"))
return a},
hT:function(a){var t=null
return new P.aR(t,t,!1,t,t,a)},
cp:function(a,b){return new P.aR(null,null,!0,a,b,"Value not in range")},
fj:function(a,b,c,d,e){return new P.aR(b,c,!0,a,d,"Invalid value")},
eC:function(a,b){if(a<0)throw H.c(P.fj(a,0,null,b,null))
return a},
aN:function(a,b,c,d,e){var t=H.am(e==null?J.aE(b):e)
return new P.cg(t,!0,a,c,"Index out of range")},
ai:function(a){return new P.cz(a)},
fp:function(a){return new P.cx(a)},
eD:function(a){return new P.ah(a)},
aJ:function(a){return new P.c7(a)},
fb:function(a){return new P.dI(a)},
em:function(a){H.jd(a)},
aK:function aK(a){this.a=a},
de:function de(){},
df:function df(){},
r:function r(){},
bc:function bc(a){this.a=a},
cw:function cw(){},
cn:function cn(){},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cg:function cg(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cz:function cz(a){this.a=a},
cx:function cx(a){this.a=a},
ah:function ah(a){this.a=a},
c7:function c7(a){this.a=a},
bz:function bz(){},
c9:function c9(a){this.a=a},
dI:function dI(a){this.a=a},
dj:function dj(a,b){this.a=a
this.b=b},
j:function j(){},
x:function x(){},
w:function w(){},
o:function o(){},
cV:function cV(){},
bA:function bA(a){this.a=a},
c8:function c8(){},
d9:function d9(a){this.a=a},
cd:function cd(a,b){this.a=a
this.b=b},
dh:function dh(){},
di:function di(){},
dW:function dW(){},
aS:function aS(){},
c6:function c6(a){this.a=a},
b:function b(){}},W={
hG:function(a,b,c){var t,s=document.body
s.toString
t=C.p.B(s,a,b,c)
t.toString
s=u.ba
s=new H.a5(new W.C(t),s.h("z(p.E)").a(new W.dg()),s.h("a5<p.E>"))
return u.h.a(s.gK(s))},
bg:function(a){var t,s,r="element tag unavailable"
try{t=J.a7(a)
if(typeof t.gbf(a)=="string")r=t.gbf(a)}catch(s){H.V(s)}return r},
ft:function(a,b,c,d,e){var t=W.fR(new W.dH(c),u.B),s=t!=null
if(s&&!0){u.o.a(t)
if(s)J.hr(a,b,t,!1)}return new W.bK(a,b,t,!1,e.h("bK<0>"))},
fv:function(a){var t=document.createElement("a"),s=new W.cT(t,window.location)
s=new W.az(s)
s.bp(a)
return s},
i3:function(a,b,c,d){u.h.a(a)
H.I(b)
H.I(c)
u.G.a(d)
return!0},
i4:function(a,b,c,d){var t,s,r
u.h.a(a)
H.I(b)
H.I(c)
t=u.G.a(d).a
s=t.a
C.y.scj(s,c)
r=s.hostname
t=t.b
if(!(r==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(r==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
fB:function(){var t=u.N,s=P.fg(C.v,t),r=u.u.a(new W.e3()),q=H.h(["TEMPLATE"],u.s)
t=new W.cX(s,P.bq(t),P.bq(t),P.bq(t),null)
t.bq(null,new H.a2(C.v,r,u.c4),q,null)
return t},
fR:function(a,b){var t=$.q
if(t===C.b)return a
return t.cc(a,b)},
d:function d(){},
aG:function aG(){},
c5:function c5(){},
aH:function aH(){},
ar:function ar(){},
W:function W(){},
at:function at(){},
db:function db(){},
cb:function cb(){},
dc:function dc(){},
cE:function cE(a,b){this.a=a
this.b=b},
l:function l(){},
dg:function dg(){},
a:function a(){},
u:function u(){},
ce:function ce(){},
ac:function ac(){},
bl:function bl(){},
a1:function a1(){},
cl:function cl(){},
C:function C(a){this.a=a},
e:function e(){},
bv:function bv(){},
cr:function cr(){},
bB:function bB(){},
ct:function ct(){},
cu:function cu(){},
aT:function aT(){},
E:function E(){},
aV:function aV(){},
aW:function aW(){},
bN:function bN(){},
cD:function cD(){},
cH:function cH(a){this.a=a},
cI:function cI(a){this.a=a},
eu:function eu(a){this.$ti=a},
bJ:function bJ(){},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bK:function bK(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
dH:function dH(a){this.a=a},
az:function az(a){this.a=a},
H:function H(){},
bw:function bw(a){this.a=a},
dv:function dv(a){this.a=a},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(){},
e1:function e1(){},
e2:function e2(){},
cX:function cX(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
e3:function e3(){},
cW:function cW(){},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
cT:function cT(a,b){this.a=a
this.b=b},
bW:function bW(a){this.a=a
this.b=!1},
e5:function e5(a){this.a=a},
cN:function cN(){},
cO:function cO(){},
cQ:function cQ(){},
cR:function cR(){},
d0:function d0(){},
d1:function d1(){}},N={a9:function a9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=c
_.x=_.r=_.f=null},da:function da(){}},D={
fd:function(a,b){var t,s=V.c2(),r=V.fW(),q=H.h([],u.i),p=u.a9,o=H.h([],p)
q=new D.cf(s,r,q,o)
q.dx=b
s=b.a
new P.bF(s,H.n(s).h("bF<1>")).cn(q.gbI())
t=document.querySelector(a)
if(t==null)H.ap(P.fb('Unable to find component to mount Game into "'+a+'"'))
J.f1(t,'<div id="board"></div>\n<div id="score"></div>\n<div id="high-score"></div>\n<div class="queue">\n    <div id="q1"></div>\n    <div id="q2"></div>\n    <div id="q3"></div>\n</div>')
q.ch=t.querySelector("#score")
q.cx=t.querySelector("#high-score")
q.Q=t.querySelector("#board")
C.a.C(o,H.h([t.querySelector("#q1"),t.querySelector("#q2"),t.querySelector("#q3")],p))
J.f1(q.Q,V.fU(V.c2()))
return q},
cf:function cf(a,b,c,d){var _=this
_.a=!1
_.b=400
_.c=a
_.d=b
_.e=c
_.r=_.f=0
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.cy=d
_.db=!0
_.dy=_.dx=null},
dn:function dn(){},
dm:function dm(){}},U={
fq:function(a){var t,s,r=new U.bC(a,new P.bE(null,null,u.aP)),q=document.body
q.toString
t=u.cM
s=t.h("~(1)?").a(r.gbS())
u.Z.a(null)
W.ft(q,"keydown",s,!1,t.c)
return r},
bk:function bk(){},
bC:function bC(a,b){var _=this
_.d=a
_.a=b
_.b=!1
_.c=150},
bx:function bx(){},
ca:function ca(a,b,c){var _=this
_.r=_.f=_.e=_.d=null
_.a$=a
_.b$=b
_.a=c
_.b=!1
_.c=150},
cF:function cF(){}},K={dl:function dl(){this.e=this.c=this.b=null}},V={
fU:function(a){var t=H.G(a)
return new H.a0(a,t.h("j<i*>(1)").a(new V.ea()),t.h("a0<1,i*>")).cm(0)},
jc:function(a){return'<div class="pixel '+V.eX(H.am(a),!1)+'"></div>'},
jb:function(a){switch(a){case 2:return"x2"
case 4:return"x4"
default:return"x3"}},
eX:function(a,b){switch(a){case 0:return b?"q-empty":"empty"
case-1:return"shadow"
case-2:return"predict"
default:return"piece-"+H.f(a)}},
ha:function(a){switch(a){case 1:return 40
case 2:return 100
case 3:return 300
case 4:return 1200}return 0},
fW:function(){return P.hQ(4,new V.ee(),u.e)},
el:function(a,b,c,d,e){var t,s
if(typeof b!=="number")return b.k()
t=0
for(;s=b+t,V.O(a,s+1,c,d,e);)++t
return s},
h_:function(a){var t,s,r
for(t=0,s=0;s<24;++s){for(r=0;r<10;++r){if(s>=a.length)return H.k(a,s)
if(!J.Y(J.aD(a[s],r),0))return t}++t}return t},
hd:function(a){var t,s,r,q=P.ds(10,!0,!1,u.c5)
for(t=0,s=0;s<24;++s)for(r=0;r<10;++r){if(s>=a.length)return H.k(a,s)
if(J.Y(J.aD(a[s],r),0)){if(r>=q.length)return H.k(q,r)
if(!q[r])++t}else C.a.F(q,r,!1)}return t},
O:function(a,b,c,d,e){var t,s,r,q,p,o=V.h8(c,d)
for(t=0;t<o.length;++t){s=0
while(!0){if(t>=o.length)return H.k(o,t)
r=o[t]
if(!(s<r.length))break
if(typeof a!=="number")return H.N(a)
q=s+a
if(typeof b!=="number")return H.N(b)
p=t+b
if(!J.Y(r[s],0)){if(q>=0&&q<10)r=!(p>=0&&p<24)
else r=!0
if(r)return!1
else{if(p<0||p>=e.length)return H.k(e,p)
if(!J.Y(J.aD(e[p],q),0))return!1}}++s}}return!0},
h3:function(a){var t,s,r,q=H.h([],u.i)
for(t=0;t<24;++t){for(s=!0,r=0;r<10;++r){if(t>=a.length)return H.k(a,t)
if(J.Y(J.aD(a[t],r),0))s=!1}if(s)C.a.j(q,t)}return q},
eQ:function(a,b){var t,s,r,q,p,o,n=V.d3(a,null)
for(t=b.length-1;t>=0;--t){if(t>=b.length)return H.k(b,t)
C.a.bb(n,b[t])}for(s=b.length,r=u.e,q=H.G(n).c,p=0;p<b.length;b.length===s||(0,H.en)(b),++p){o=q.a(P.ds(10,0,!1,r))
if(!!n.fixed$length)H.ap(P.ai("insert"))
n.splice(0,0,o)}return n},
eW:function(a,b){var t,s,r,q,p,o=H.h([],u.c)
for(t=u.i,s=0;s<24;++s){C.a.j(o,H.h([],t))
for(r=0;r<10;++r){if(s>=o.length)return H.k(o,s)
q=o[s]
if(s>=b.length)return H.k(b,s)
p=b[s]
if(r>=p.length)return H.k(p,r)
p=p[r]
if(!(p!==0)){if(s>=a.length)return H.k(a,s)
p=a[s]
if(r>=p.length)return H.k(p,r)
p=p[r]}C.a.j(q,p)}}return o},
d4:function(a,b,c,d,e){var t,s,r,q,p,o,n=V.d3(e,null),m=V.h8(c,d)
for(t=0;t<m.length;++t){s=0
while(!0){if(t>=m.length)return H.k(m,t)
r=m[t]
if(!(s<r.length))break
if(typeof b!=="number")return H.N(b)
q=t+b
if(typeof a!=="number")return H.N(a)
p=s+a
if(!J.Y(r[s],0))r=p>=0&&p<10&&q>=0&&q<24
else r=!1
if(r){if(q<0||q>=n.length)return H.k(n,q)
r=n[q]
if(t>=m.length)return H.k(m,t)
o=m[t]
if(s>=o.length)return H.k(o,s)
C.a.F(r,p,o[s])}++s}}return n},
c2:function(){var t,s,r=H.h([],u.c)
for(t=u.e,s=0;s<24;++s)C.a.j(r,P.ds(10,0,!1,t))
return r},
d3:function(a,b){var t,s,r,q,p,o,n=H.h([],u.c)
for(t=b==null,s=u.i,r=0;r<24;++r){C.a.j(n,H.h([],s))
for(q=0;q<10;++q){if(r>=a.length)return H.k(a,r)
p=J.Y(J.aD(a[r],q),0)
o=n.length
if(p){if(r>=o)return H.k(n,r)
C.a.j(n[r],0)}else{if(r>=o)return H.k(n,r)
p=n[r]
if(t){if(r>=a.length)return H.k(a,r)
o=J.aD(a[r],q)}else o=b
C.a.j(p,o)}}}return n},
h8:function(a,b){var t=C.a.p($.h6,b)
if(typeof a!=="number")return H.N(a)
b=0
for(;b<a;++b)t=V.jf(t)
return t},
jf:function(a){var t,s,r,q,p,o,n=a.length,m=H.h([],u.c)
for(t=n-1,s=u.i,r=0;r<n;++r){C.a.j(m,H.h([],s))
for(q=0;q<n;++q){if(r>=m.length)return H.k(m,r)
p=m[r]
o=t-q
if(o<0||o>=a.length)return H.k(a,o)
o=a[o]
if(r>=o.length)return H.k(o,r)
C.a.j(p,o[r])}}return m},
h0:function(a){switch(a){case 0:return 4
default:return 3}},
h1:function(a){switch(a){case 1:case 2:case 3:case 6:return-1
default:return 0}},
B:function B(a){this.b=a},
ea:function ea(){},
ee:function ee(){}},F={
h4:function(){D.fd("#game-1",U.fq(C.T)).W(0)
D.fd("#game-2",U.fq(C.U)).W(0)}}
var w=[C,H,J,P,W,N,D,U,K,V,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ey.prototype={}
J.K.prototype={
J:function(a,b){return a===b},
gw:function(a){return H.aQ(a)},
i:function(a){return"Instance of '"+H.f(H.dy(a))+"'"}}
J.ch.prototype={
i:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$iz:1}
J.aO.prototype={
J:function(a,b){return null==b},
i:function(a){return"null"},
gw:function(a){return 0},
$iw:1}
J.ae.prototype={
gw:function(a){return 0},
i:function(a){return String(a)}}
J.co.prototype={}
J.aU.prototype={}
J.X.prototype={
i:function(a){var t=a[$.hf()]
if(t==null)return this.bl(a)
return"JavaScript function for "+H.f(J.aF(t))},
$iaL:1}
J.v.prototype={
j:function(a,b){H.G(a).c.a(b)
if(!!a.fixed$length)H.ap(P.ai("add"))
a.push(b)},
bb:function(a,b){var t
if(!!a.fixed$length)H.ap(P.ai("removeAt"))
t=a.length
if(b>=t)throw H.c(P.cp(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var t
H.G(a).h("j<1>").a(b)
if(!!a.fixed$length)H.ap(P.ai("addAll"))
for(t=0;t<3;++t)a.push(b[t])},
b9:function(a,b,c){var t=H.G(a)
return new H.a2(a,t.t(c).h("1(2)").a(b),t.h("@<1>").t(c).h("a2<1,2>"))},
cg:function(a,b,c,d){var t,s,r
d.a(b)
H.G(a).t(d).h("1(1,2)").a(c)
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.c(P.aJ(a))}return s},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
gq:function(a){if(a.length>0)return a[0]
throw H.c(H.ev())},
b4:function(a,b){var t,s
H.G(a).h("z(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(H.eb(b.$1(a[s])))return!0
if(a.length!==t)throw H.c(P.aJ(a))}return!1},
u:function(a,b){var t
for(t=0;t<a.length;++t)if(J.Y(a[t],b))return!0
return!1},
i:function(a){return P.dp(a,"[","]")},
gv:function(a){return new J.Z(a,a.length,H.G(a).h("Z<1>"))},
gw:function(a){return H.aQ(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.ap(P.ai("set length"))
a.length=b},
p:function(a,b){if(!H.eO(b))throw H.c(H.b9(a,b))
if(b>=a.length||b<0)throw H.c(H.b9(a,b))
return a[b]},
F:function(a,b,c){H.G(a).c.a(c)
if(!!a.immutable$list)H.ap(P.ai("indexed set"))
if(b>=a.length||b<0)throw H.c(H.b9(a,b))
a[b]=c},
$ij:1,
$it:1}
J.dq.prototype={}
J.Z.prototype={
gn:function(){return this.d},
m:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.c(H.en(r))
t=s.c
if(t>=q){s.saU(null)
return!1}s.saU(r[t]);++s.c
return!0},
saU:function(a){this.d=this.$ti.h("1?").a(a)},
$ix:1}
J.bn.prototype={
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){var t,s,r,q,p=a|0
if(a===p)return 536870911&p
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
aF:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
a1:function(a,b){return(a|0)===a?a/b|0:this.c7(a,b)},
c7:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.ai("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
c5:function(a,b){var t
if(a>0)t=this.c4(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
c4:function(a,b){return b>31?0:a>>>b},
$iba:1}
J.bm.prototype={$im:1}
J.ci.prototype={}
J.ad.prototype={
b6:function(a,b){if(b<0)throw H.c(H.b9(a,b))
if(b>=a.length)H.ap(H.b9(a,b))
return a.charCodeAt(b)},
aP:function(a,b){if(b>=a.length)throw H.c(H.b9(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(typeof b!="string")throw H.c(P.eq(b,null,null))
return a+b},
bh:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
bi:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cp(b,null))
if(b>c)throw H.c(P.cp(b,null))
if(c>a.length)throw H.c(P.cp(c,null))
return a.substring(b,c)},
cv:function(a){return a.toLowerCase()},
cw:function(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(this.aP(q,0)===133){t=J.hM(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.b6(q,s)===133?J.hN(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
i:function(a){return a},
gw:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gl:function(a){return a.length},
$idx:1,
$ii:1}
H.bf.prototype={}
H.af.prototype={
gv:function(a){var t=this
return new H.aw(t,t.gl(t),H.n(t).h("aw<af.E>"))},
a4:function(a,b){return this.bk(0,H.n(this).h("z(af.E)").a(b))}}
H.aw.prototype={
gn:function(){var t=this.d
return t},
m:function(){var t,s=this,r=s.a,q=J.eS(r),p=q.gl(r)
if(s.b!==p)throw H.c(P.aJ(r))
t=s.c
if(t>=p){s.sG(null)
return!1}s.sG(q.A(r,t));++s.c
return!0},
sG:function(a){this.d=this.$ti.h("1?").a(a)},
$ix:1}
H.bt.prototype={
gv:function(a){var t=H.n(this)
return new H.bu(J.aq(this.a),this.b,t.h("@<1>").t(t.Q[1]).h("bu<1,2>"))},
gl:function(a){return J.aE(this.a)},
A:function(a,b){return this.b.$1(J.eo(this.a,b))}}
H.bu.prototype={
m:function(){var t=this,s=t.b
if(s.m()){t.sG(t.c.$1(s.gn()))
return!0}t.sG(null)
return!1},
gn:function(){var t=this.a
return t},
sG:function(a){this.a=this.$ti.h("2?").a(a)}}
H.a2.prototype={
gl:function(a){return J.aE(this.a)},
A:function(a,b){return this.b.$1(J.eo(this.a,b))}}
H.a5.prototype={
gv:function(a){return new H.bD(J.aq(this.a),this.b,this.$ti.h("bD<1>"))}}
H.bD.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(H.eb(s.$1(t.gn())))return!0
return!1},
gn:function(){return this.a.gn()}}
H.a0.prototype={
gv:function(a){var t=this.$ti
return new H.bj(J.aq(this.a),this.b,C.z,t.h("@<1>").t(t.Q[1]).h("bj<1,2>"))}}
H.bj.prototype={
gn:function(){var t=this.d
return t},
m:function(){var t,s,r=this
if(r.c==null)return!1
for(t=r.a,s=r.b;!r.c.m();){r.sG(null)
if(t.m()){r.saV(null)
r.saV(J.aq(s.$1(t.gn())))}else return!1}r.sG(r.c.gn())
return!0},
saV:function(a){this.c=this.$ti.h("x<2>?").a(a)},
sG:function(a){this.d=this.$ti.h("2?").a(a)},
$ix:1}
H.bh.prototype={
m:function(){return!1},
gn:function(){throw H.c(H.ev())},
$ix:1}
H.be.prototype={
i:function(a){return P.eB(this)},
$iag:1}
H.aM.prototype={
Y:function(){var t,s=this,r=s.$map
if(r==null){t=s.$ti
r=new H.av(t.h("@<1>").t(t.Q[1]).h("av<1,2>"))
H.iZ(s.a,r)
s.$map=r}return r},
aw:function(a){return this.Y().aw(a)},
p:function(a,b){return this.Y().p(0,b)},
U:function(a,b){this.$ti.h("~(1,2)").a(b)
this.Y().U(0,b)},
gl:function(a){return this.Y().a}}
H.dB.prototype={
D:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.cm.prototype={
i:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.ck.prototype={
i:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.f(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.f(s.a)+")"
return r+q+"' on '"+t+"' ("+H.f(s.a)+")"}}
H.cy.prototype={
i:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.dw.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bi.prototype={}
H.bS.prototype={
i:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iT:1}
H.as.prototype={
i:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.hc(s==null?"unknown":s)+"'"},
$iaL:1,
gcz:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cv.prototype={}
H.cs.prototype={
i:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.hc(t)+"'"}}
H.aI.prototype={
J:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.aI))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gw:function(a){var t,s=this.c
if(s==null)t=H.aQ(this.a)
else t=typeof s!=="object"?J.c4(s):H.aQ(s)
return(t^H.aQ(this.b))>>>0},
i:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.dy(t))+"'")}}
H.cq.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.cA.prototype={
i:function(a){return"Assertion failed: "+P.cc(this.a)}}
H.av.prototype={
gl:function(a){return this.a},
gI:function(){return new H.bo(this,H.n(this).h("bo<1>"))},
aw:function(a){var t
if(typeof a=="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.bE(t,a)}else return this.ck(a)},
ck:function(a){var t=this.d
if(t==null)return!1
return this.ay(this.ag(t,J.c4(a)&0x3ffffff),a)>=0},
p:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.Z(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.Z(q,b)
r=s==null?o:s.b
return r}else return p.cl(b)},
cl:function(a){var t,s,r=this.d
if(r==null)return null
t=this.ag(r,J.c4(a)&0x3ffffff)
s=this.ay(t,a)
if(s<0)return null
return t[s].b},
F:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.n(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.aK(t==null?n.b=n.ai():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.aK(s==null?n.c=n.ai():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.ai()
q=J.c4(b)&0x3ffffff
p=n.ag(r,q)
if(p==null)n.ar(r,q,[n.aj(b,c)])
else{o=n.ay(p,b)
if(o>=0)p[o].b=c
else p.push(n.aj(b,c))}}},
U:function(a,b){var t,s,r=this
H.n(r).h("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.c(P.aJ(r))
t=t.c}},
aK:function(a,b,c){var t,s=this,r=H.n(s)
r.c.a(b)
r.Q[1].a(c)
t=s.Z(a,b)
if(t==null)s.ar(a,b,s.aj(b,c))
else t.b=c},
bP:function(){this.r=this.r+1&67108863},
aj:function(a,b){var t=this,s=H.n(t),r=new H.dr(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else{s=t.f
s.toString
r.d=s
t.f=s.c=r}++t.a
t.bP()
return r},
ay:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.Y(a[s].a,b))return s
return-1},
i:function(a){return P.eB(this)},
Z:function(a,b){return a[b]},
ag:function(a,b){return a[b]},
ar:function(a,b,c){a[b]=c},
bF:function(a,b){delete a[b]},
bE:function(a,b){return this.Z(a,b)!=null},
ai:function(){var t="<non-identifier-key>",s=Object.create(null)
this.ar(s,t,s)
this.bF(s,t)
return s}}
H.dr.prototype={}
H.bo.prototype={
gl:function(a){return this.a.a},
gv:function(a){var t=this.a,s=new H.bp(t,t.r,this.$ti.h("bp<1>"))
s.c=t.e
return s}}
H.bp.prototype={
gn:function(){return this.d},
m:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.c(P.aJ(r))
t=s.c
if(t==null){s.saJ(null)
return!1}else{s.saJ(t.a)
s.c=t.c
return!0}},
saJ:function(a){this.d=this.$ti.h("1?").a(a)},
$ix:1}
H.ef.prototype={
$1:function(a){return this.a(a)},
$S:12}
H.eg.prototype={
$2:function(a,b){return this.a(a,b)},
$S:13}
H.eh.prototype={
$1:function(a){return this.a(H.I(a))},
$S:14}
H.cj.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$idx:1}
H.R.prototype={
h:function(a){return H.d_(v.typeUniverse,this,a)},
t:function(a){return H.ik(v.typeUniverse,this,a)}}
H.cL.prototype={}
H.cK.prototype={
i:function(a){return this.a}}
H.bT.prototype={}
P.dE.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:3}
P.dD.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:15}
P.dF.prototype={
$0:function(){this.a.$0()},
$S:0}
P.dG.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cY.prototype={
br:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c1(new P.e4(this,b),0),a)
else throw H.c(P.ai("`setTimeout()` not found."))},
a3:function(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
self.clearTimeout(t)
this.b=null}else throw H.c(P.ai("Canceling a timer."))},
$ihX:1}
P.e4.prototype={
$0:function(){this.a.b=null
this.b.$0()},
$S:1}
P.cB.prototype={}
P.e6.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:4}
P.e7.prototype={
$2:function(a,b){this.a.$2(1,new H.bi(a,u.l.a(b)))},
$S:16}
P.e9.prototype={
$2:function(a,b){this.a(H.am(a),b)},
$S:17}
P.bF.prototype={}
P.a6.prototype={
al:function(){},
am:function(){},
sak:function(a){this.dy=this.$ti.h("a6<1>?").a(a)},
sb0:function(a){this.fr=this.$ti.h("a6<1>?").a(a)}}
P.bG.prototype={
gbO:function(){return this.c<4},
c6:function(a,b,c,d){var t,s,r,q,p,o=this,n=H.n(o)
n.h("~(1)?").a(a)
u.Z.a(c)
if((o.c&4)!==0){n=new P.aZ($.q,c,n.h("aZ<1>"))
n.c1()
return n}t=$.q
s=d?1:0
u.j.t(n.c).h("1(2)").a(a)
P.i2(t,b)
r=c==null?P.iV():c
u.M.a(r)
n=n.h("a6<1>")
q=new P.a6(o,a,t,s,n)
q.sb0(q)
q.sak(q)
n.a(q)
q.dx=o.c&1
p=o.e
o.sbM(q)
q.sak(null)
q.sb0(p)
if(p==null)o.sbG(q)
else p.sak(q)
if(o.d==o.e)P.iK(o.a)
return q},
bt:function(){if((this.c&4)!==0)return new P.ah("Cannot add new events after calling close")
return new P.ah("Cannot add new events while doing an addStream")},
j:function(a,b){var t=this
H.n(t).c.a(b)
if(!t.gbO())throw H.c(t.bt())
t.aq(b)},
sbG:function(a){this.d=H.n(this).h("a6<1>?").a(a)},
sbM:function(a){this.e=H.n(this).h("a6<1>?").a(a)},
$ifm:1,
$ifA:1,
$iaj:1}
P.bE.prototype={
aq:function(a){var t,s=this.$ti
s.c.a(a)
for(t=this.d,s=s.h("bI<1>");t!=null;t=t.dy)t.bv(new P.bI(a,s))}}
P.dk.prototype={
$0:function(){this.b.ab(null)},
$S:0}
P.ay.prototype={
co:function(a){if((this.c&15)!==6)return!0
return this.b.b.aC(u.m.a(this.d),a.a,u.v,u.K)},
ci:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.h("2/"),p=this.b.b
if(u.W.b(t))return q.a(p.cr(t,a.a,a.b,s,r,u.l))
else return q.a(p.aC(u.y.a(t),a.a,s,r))}}
P.y.prototype={
aD:function(a,b,c){var t,s,r,q=this.$ti
q.t(c).h("1/(2)").a(a)
t=$.q
if(t!==C.b){c.h("@<0/>").t(q.c).h("1(2)").a(a)
if(b!=null)b=P.iH(b,t)}s=new P.y($.q,c.h("y<0>"))
r=b==null?1:3
this.a8(new P.ay(s,r,a,b,q.h("@<1>").t(c).h("ay<1,2>")))
return s},
cs:function(a,b){return this.aD(a,null,b)},
b2:function(a,b,c){var t,s=this.$ti
s.t(c).h("1/(2)").a(a)
t=new P.y($.q,c.h("y<0>"))
this.a8(new P.ay(t,19,a,b,s.h("@<1>").t(c).h("ay<1,2>")))
return t},
a8:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.d.a(s.c)
r=t.a
if(r<4){t.a8(a)
return}s.a=r
s.c=t.c}P.aB(null,null,s.b,u.M.a(new P.dJ(s,a)))}},
b_:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.d.a(n.c)
t=o.a
if(t<4){o.b_(a)
return}n.a=t
n.c=o.c}m.a=n.a0(a)
P.aB(null,null,n.b,u.M.a(new P.dR(m,n)))}},
a_:function(){var t=u.F.a(this.c)
this.c=null
return this.a0(t)},
a0:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ab:function(a){var t,s=this,r=s.$ti
r.h("1/").a(a)
if(r.h("ab<1>").b(a))if(r.b(a))P.dM(a,s)
else P.fu(a,s)
else{t=s.a_()
r.c.a(a)
s.a=4
s.c=a
P.b_(s,t)}},
aT:function(a){var t,s=this
s.$ti.c.a(a)
t=s.a_()
s.a=4
s.c=a
P.b_(s,t)},
O:function(a,b){var t,s,r=this
u.l.a(b)
t=r.a_()
s=P.d8(a,b)
r.a=8
r.c=s
P.b_(r,t)},
bw:function(a){var t=this.$ti
t.h("1/").a(a)
if(t.h("ab<1>").b(a)){this.aN(a)
return}this.by(t.c.a(a))},
by:function(a){var t=this
t.$ti.c.a(a)
t.a=1
P.aB(null,null,t.b,u.M.a(new P.dL(t,a)))},
aN:function(a){var t=this,s=t.$ti
s.h("ab<1>").a(a)
if(s.b(a)){if(a.a===8){t.a=1
P.aB(null,null,t.b,u.M.a(new P.dQ(t,a)))}else P.dM(a,t)
return}P.fu(a,t)},
bx:function(a,b){this.a=1
P.aB(null,null,this.b,u.M.a(new P.dK(this,a,b)))},
$iab:1}
P.dJ.prototype={
$0:function(){P.b_(this.a,this.b)},
$S:0}
P.dR.prototype={
$0:function(){P.b_(this.b,this.a.a)},
$S:0}
P.dN.prototype={
$1:function(a){var t=this.a
t.a=0
t.ab(a)},
$S:3}
P.dO.prototype={
$2:function(a,b){this.a.O(a,u.l.a(b))},
$S:18}
P.dP.prototype={
$0:function(){this.a.O(this.b,this.c)},
$S:0}
P.dL.prototype={
$0:function(){this.a.aT(this.b)},
$S:0}
P.dQ.prototype={
$0:function(){P.dM(this.b,this.a)},
$S:0}
P.dK.prototype={
$0:function(){this.a.O(this.b,this.c)},
$S:0}
P.dU.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.bc(u.bd.a(r.d),u.z)}catch(q){t=H.V(q)
s=H.aC(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.d8(t,s)
p.b=!0
return}if(m instanceof P.y&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.f.b(m)){o=n.b.a
r=n.a
r.c=m.cs(new P.dV(o),u.z)
r.b=!1}},
$S:1}
P.dV.prototype={
$1:function(a){return this.a},
$S:19}
P.dT.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.aC(p.h("2/(1)").a(q.d),n,p.h("2/"),o)}catch(m){t=H.V(m)
s=H.aC(m)
r=this.a
r.c=P.d8(t,s)
r.b=!0}},
$S:1}
P.dS.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.eb(q.a.co(t))&&q.a.e!=null){q.c=q.a.ci(t)
q.b=!1}}catch(p){s=H.V(p)
r=H.aC(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.d8(s,r)
m.b=!0}},
$S:1}
P.cC.prototype={}
P.a3.prototype={
gl:function(a){var t={},s=new P.y($.q,u.aQ)
t.a=0
this.aA(new P.dz(t,this),!0,new P.dA(t,s),s.gbC())
return s}}
P.dz.prototype={
$1:function(a){H.n(this.b).c.a(a);++this.a.a},
$S:function(){return H.n(this.b).h("w(1)")}}
P.dA.prototype={
$0:function(){this.b.ab(this.a.a)},
$S:0}
P.L.prototype={}
P.aY.prototype={
gw:function(a){return(H.aQ(this.a)^892482866)>>>0},
J:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.aY&&b.a===this.a}}
P.bH.prototype={
al:function(){H.n(this.x).h("L<1>").a(this)},
am:function(){H.n(this.x).h("L<1>").a(this)}}
P.aX.prototype={
al:function(){},
am:function(){},
bv:function(a){var t,s=this,r=H.n(s),q=r.h("b1<1>?").a(s.r)
if(q==null)q=new P.b1(r.h("b1<1>"))
s.saZ(q)
t=q.c
if(t==null)q.b=q.c=a
else q.c=t.a=a
r=s.e
if((r&64)===0){r|=64
s.e=r
if(r<128)q.aH(s)}},
aq:function(a){var t,s=this,r=H.n(s).c
r.a(a)
t=s.e
s.e=t|32
s.d.be(s.a,a,r)
s.e&=4294967263
s.bA((t&4)!==0)},
bA:function(a){var t,s,r=this,q=r.e
if((q&64)!==0&&r.r.c==null){q=r.e=q&4294967231
if((q&4)!==0)if(q<128){t=r.r
t=t==null?null:t.c==null
t=t!==!1}else t=!1
else t=!1
if(t){q&=4294967291
r.e=q}}for(;!0;a=s){if((q&8)!==0){r.saZ(null)
return}s=(q&4)!==0
if(a===s)break
r.e=q^32
if(s)r.al()
else r.am()
q=r.e&=4294967263}if((q&64)!==0&&q<128)r.r.aH(r)},
saZ:function(a){this.r=H.n(this).h("bO<1>?").a(a)},
$iL:1,
$iaj:1}
P.b0.prototype={
aA:function(a,b,c,d){var t=this.$ti
t.h("~(1)?").a(a)
u.Z.a(c)
return this.a.c6(t.h("~(1)?").a(a),d,c,b===!0)},
cn:function(a){return this.aA(a,null,null,null)}}
P.cG.prototype={}
P.bI.prototype={}
P.bO.prototype={
aH:function(a){var t,s=this
s.$ti.h("aj<1>").a(a)
t=s.a
if(t===1)return
if(t>=1){s.a=1
return}P.h9(new P.dY(s,a))
s.a=1}}
P.dY.prototype={
$0:function(){var t,s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
t=q.$ti.h("aj<1>").a(this.b)
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
H.n(s).h("aj<1>").a(t).aq(s.b)},
$S:0}
P.b1.prototype={}
P.aZ.prototype={
c1:function(){var t=this
if((t.b&2)!==0)return
P.aB(null,null,t.a,u.M.a(t.gc2()))
t.b|=2},
c3:function(){var t,s=this,r=s.b&=4294967293
if(r>=4)return
s.b=r|1
t=s.c
if(t!=null)s.a.bd(t)},
$iL:1}
P.cU.prototype={}
P.bd.prototype={
i:function(a){return H.f(this.a)},
$ir:1,
ga6:function(){return this.b}}
P.bX.prototype={$ifr:1}
P.e8.prototype={
$0:function(){var t=H.c(this.a)
t.stack=J.aF(this.b)
throw t},
$S:0}
P.cS.prototype={
bd:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.b===$.q){a.$0()
return}P.fO(q,q,this,a,u.H)}catch(r){t=H.V(r)
s=H.aC(r)
P.d2(q,q,this,t,u.l.a(s))}},
be:function(a,b,c){var t,s,r,q=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.b===$.q){a.$1(b)
return}P.fP(q,q,this,a,b,u.H,c)}catch(r){t=H.V(r)
s=H.aC(r)
P.d2(q,q,this,t,u.l.a(s))}},
cb:function(a,b){return new P.e_(this,b.h("0()").a(a),b)},
at:function(a){return new P.dZ(this,u.M.a(a))},
cc:function(a,b){return new P.e0(this,b.h("~(0)").a(a),b)},
bc:function(a,b){b.h("0()").a(a)
if($.q===C.b)return a.$0()
return P.fO(null,null,this,a,b)},
aC:function(a,b,c,d){c.h("@<0>").t(d).h("1(2)").a(a)
d.a(b)
if($.q===C.b)return a.$1(b)
return P.fP(null,null,this,a,b,c,d)},
cr:function(a,b,c,d,e,f){d.h("@<0>").t(e).t(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.q===C.b)return a.$2(b,c)
return P.iI(null,null,this,a,b,c,d,e,f)},
aB:function(a,b,c,d){return b.h("@<0>").t(c).t(d).h("1(2,3)").a(a)}}
P.e_.prototype={
$0:function(){return this.a.bc(this.b,this.c)},
$S:function(){return this.c.h("0()")}}
P.dZ.prototype={
$0:function(){return this.a.bd(this.b)},
$S:1}
P.e0.prototype={
$1:function(a){var t=this.c
return this.a.be(this.b,t.a(a),t)},
$S:function(){return this.c.h("~(0)")}}
P.bL.prototype={
gv:function(a){var t=this,s=new P.aA(t,t.r,H.n(t).h("aA<1>"))
s.c=t.e
return s},
gl:function(a){return this.a},
u:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.g.a(t[b])!=null}else{s=this.bD(b)
return s}},
bD:function(a){var t=this.d
if(t==null)return!1
return this.af(t[this.ac(a)],a)>=0},
j:function(a,b){var t,s,r=this
H.n(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.aQ(t==null?r.b=P.eG():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.aQ(s==null?r.c=P.eG():s,b)}else return r.bs(b)},
bs:function(a){var t,s,r,q=this
H.n(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.eG()
s=q.ac(a)
r=t[s]
if(r==null)t[s]=[q.aa(a)]
else{if(q.af(r,a)>=0)return!1
r.push(q.aa(a))}return!0},
V:function(a,b){var t
if(b!=="__proto__")return this.bY(this.b,b)
else{t=this.bX(b)
return t}},
bX:function(a){var t,s,r,q,p=this,o=p.d
if(o==null)return!1
t=p.ac(a)
s=o[t]
r=p.af(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete o[t]
p.b3(q)
return!0},
aQ:function(a,b){H.n(this).c.a(b)
if(u.g.a(a[b])!=null)return!1
a[b]=this.aa(b)
return!0},
bY:function(a,b){var t
if(a==null)return!1
t=u.g.a(a[b])
if(t==null)return!1
this.b3(t)
delete a[b]
return!0},
aS:function(){this.r=1073741823&this.r+1},
aa:function(a){var t,s=this,r=new P.cP(H.n(s).c.a(a))
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.aS()
return r},
b3:function(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.aS()},
ac:function(a){return J.c4(a)&1073741823},
af:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.Y(a[s].a,b))return s
return-1}}
P.cP.prototype={}
P.aA.prototype={
gn:function(){return this.d},
m:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.c(P.aJ(r))
else if(s==null){t.saR(null)
return!1}else{t.saR(t.$ti.h("1?").a(s.a))
t.c=s.b
return!0}},
saR:function(a){this.d=this.$ti.h("1?").a(a)},
$ix:1}
P.br.prototype={$ij:1,$it:1}
P.p.prototype={
gv:function(a){return new H.aw(a,this.gl(a),H.U(a).h("aw<p.E>"))},
A:function(a,b){return this.p(a,b)},
gb8:function(a){return this.gl(a)===0},
b9:function(a,b,c){var t=H.U(a)
return new H.a2(a,t.t(c).h("1(p.E)").a(b),t.h("@<p.E>").t(c).h("a2<1,2>"))},
cu:function(a,b){var t,s,r,q,p=this
if(p.gb8(a)){t=J.ew(0,H.U(a).h("p.E"))
return t}s=p.p(a,0)
r=P.ds(p.gl(a),s,!0,H.U(a).h("p.E"))
for(q=1;q<p.gl(a);++q)C.a.F(r,q,p.p(a,q))
return r},
ct:function(a){return this.cu(a,!0)},
i:function(a){return P.dp(a,"[","]")}}
P.bs.prototype={}
P.dt.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.f(a)
s.a=t+": "
s.a+=H.f(b)},
$S:20}
P.D.prototype={
U:function(a,b){var t,s
H.n(this).h("~(D.K,D.V)").a(b)
for(t=J.aq(this.gI());t.m();){s=t.gn()
b.$2(s,this.p(0,s))}},
gl:function(a){return J.aE(this.gI())},
i:function(a){return P.eB(this)},
$iag:1}
P.ax.prototype={
i:function(a){return P.dp(this,"{","}")},
A:function(a,b){var t,s,r,q="index"
P.d6(b,q,u.S)
P.eC(b,q)
for(t=this.E(),t=P.dX(t,t.r,H.n(t).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.c(P.aN(b,this,q,null,s))}}
P.by.prototype={$ij:1,$iS:1}
P.bP.prototype={
C:function(a,b){var t
for(t=J.aq(H.n(this).h("j<1>").a(b));t.m();)this.j(0,t.gn())},
i:function(a){return P.dp(this,"{","}")},
az:function(a,b){var t,s=P.dX(this,this.r,H.n(this).c)
if(!s.m())return""
if(b===""){t=""
do t+=H.f(s.d)
while(s.m())}else{t=H.f(s.d)
for(;s.m();)t=t+b+H.f(s.d)}return t.charCodeAt(0)==0?t:t},
A:function(a,b){var t,s,r,q=this,p="index"
P.d6(b,p,u.S)
P.eC(b,p)
for(t=P.dX(q,q.r,H.n(q).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.c(P.aN(b,q,p,null,s))},
$ij:1,
$iS:1}
P.bM.prototype={}
P.bQ.prototype={}
P.aK.prototype={
J:function(a,b){if(b==null)return!1
return b instanceof P.aK&&this.a===b.a},
gw:function(a){return C.d.gw(this.a)},
i:function(a){var t,s,r,q=new P.df(),p=this.a
if(p<0)return"-"+new P.aK(0-p).i(0)
t=q.$1(C.d.a1(p,6e7)%60)
s=q.$1(C.d.a1(p,1e6)%60)
r=new P.de().$1(p%1e6)
return""+C.d.a1(p,36e8)+":"+H.f(t)+":"+H.f(s)+"."+H.f(r)}}
P.de.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:6}
P.df.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:6}
P.r.prototype={
ga6:function(){return H.aC(this.$thrownJsError)}}
P.bc.prototype={
i:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.cc(t)
return"Assertion failed"}}
P.cw.prototype={}
P.cn.prototype={
i:function(a){return"Throw of null."}}
P.P.prototype={
gae:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gad:function(){return""},
i:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gae()+p+n
if(!r.a)return m
t=r.gad()
s=P.cc(r.b)
return m+t+": "+s}}
P.aR.prototype={
gae:function(){return"RangeError"},
gad:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.f(r):""
else if(r==null)t=": Not greater than or equal to "+H.f(s)
else if(r>s)t=": Not in inclusive range "+H.f(s)+".."+H.f(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.f(s)
return t}}
P.cg.prototype={
gae:function(){return"RangeError"},
gad:function(){var t,s=H.am(this.b)
if(typeof s!=="number")return s.cB()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gl:function(a){return this.f}}
P.cz.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.cx.prototype={
i:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ah.prototype={
i:function(a){return"Bad state: "+this.a}}
P.c7.prototype={
i:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cc(t)+"."}}
P.bz.prototype={
i:function(a){return"Stack Overflow"},
ga6:function(){return null},
$ir:1}
P.c9.prototype={
i:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.dI.prototype={
i:function(a){return"Exception: "+this.a}}
P.dj.prototype={
i:function(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(r.length>78)r=C.c.bi(r,0,75)+"..."
return s+"\n"+r}}
P.j.prototype={
a4:function(a,b){var t=H.n(this)
return new H.a5(this,t.h("z(j.E)").a(b),t.h("a5<j.E>"))},
cm:function(a){var t,s,r=this.gv(this)
if(!r.m())return""
t=new P.bA("")
s=""
do{s+=H.f(J.aF(r.gn()))
t.a=s}while(r.m())
s=t.a
return s.charCodeAt(0)==0?s:s},
gl:function(a){var t,s=this.gv(this)
for(t=0;s.m();)++t
return t},
gK:function(a){var t,s=this.gv(this)
if(!s.m())throw H.c(H.ev())
t=s.gn()
if(s.m())throw H.c(H.hJ())
return t},
A:function(a,b){var t,s,r
P.eC(b,"index")
for(t=this.gv(this),s=0;t.m();){r=t.gn()
if(b===s)return r;++s}throw H.c(P.aN(b,this,"index",null,s))},
i:function(a){return P.hI(this,"(",")")}}
P.x.prototype={}
P.w.prototype={
gw:function(a){return P.o.prototype.gw.call(C.M,this)},
i:function(a){return"null"}}
P.o.prototype={constructor:P.o,$io:1,
J:function(a,b){return this===b},
gw:function(a){return H.aQ(this)},
i:function(a){return"Instance of '"+H.f(H.dy(this))+"'"},
toString:function(){return this.i(this)}}
P.cV.prototype={
i:function(a){return""},
$iT:1}
P.bA.prototype={
gl:function(a){return this.a.length},
i:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.d.prototype={}
W.aG.prototype={
scj:function(a,b){a.href=b},
i:function(a){return String(a)},
$iaG:1}
W.c5.prototype={
i:function(a){return String(a)}}
W.aH.prototype={$iaH:1}
W.ar.prototype={$iar:1}
W.W.prototype={
gl:function(a){return a.length}}
W.at.prototype={}
W.db.prototype={
i:function(a){return String(a)}}
W.cb.prototype={
cf:function(a,b){return a.createHTMLDocument(b)}}
W.dc.prototype={
gl:function(a){return a.length}}
W.cE.prototype={
gb8:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
p:function(a,b){var t=this.b
if(b<0||b>=t.length)return H.k(t,b)
return u.h.a(t[b])},
gv:function(a){var t=this.ct(this)
return new J.Z(t,t.length,H.G(t).h("Z<1>"))}}
W.l.prototype={
gca:function(a){return new W.cH(a)},
gav:function(a){return new W.cE(a,a.children)},
gb5:function(a){return new W.cI(a)},
i:function(a){return a.localName},
B:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.fa
if(t==null){t=H.h([],u.Q)
s=new W.bw(t)
C.a.j(t,W.fv(null))
C.a.j(t,W.fB())
$.fa=s
d=s}else d=t
t=$.f9
if(t==null){t=new W.bW(d)
$.f9=t
c=t}else{t.a=d
c=t}}if($.aa==null){t=document
s=t.implementation
s.toString
s=C.I.cf(s,"")
$.aa=s
$.et=s.createRange()
s=$.aa.createElement("base")
u.E.a(s)
t=t.baseURI
t.toString
s.href=t
$.aa.head.appendChild(s)}t=$.aa
if(t.body==null){s=t.createElement("body")
C.K.scd(t,u.t.a(s))}t=$.aa
if(u.t.b(a)){t=t.body
t.toString
r=t}else{t.toString
r=t.createElement(a.tagName)
$.aa.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.R,a.tagName)){$.et.selectNodeContents(r)
t=$.et
q=t.createContextualFragment(b)}else{J.hw(r,b)
q=$.aa.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}if(r!==$.aa.body)J.f0(r)
c.aG(q)
document.adoptNode(q)
return q},
ce:function(a,b,c){return this.B(a,b,c,null)},
sax:function(a,b){this.a5(a,b)},
a5:function(a,b){this.sbg(a,null)
a.appendChild(this.B(a,b,null,null))},
sbL:function(a,b){a.innerHTML=b},
gbf:function(a){return a.tagName},
$il:1}
W.dg.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:7}
W.a.prototype={$ia:1}
W.u.prototype={
bu:function(a,b,c,d){return a.addEventListener(b,H.c1(u.o.a(c),1),!1)},
$iu:1}
W.ce.prototype={
gl:function(a){return a.length}}
W.ac.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.aN(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iaP:1,
$ij:1,
$it:1,
$iac:1}
W.bl.prototype={
scd:function(a,b){a.body=b}}
W.a1.prototype={$ia1:1}
W.cl.prototype={
i:function(a){return String(a)},
$icl:1}
W.C.prototype={
gK:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.c(P.eD("No elements"))
if(s>1)throw H.c(P.eD("More than one element"))
t=t.firstChild
t.toString
return t},
C:function(a,b){var t,s,r,q,p
u.q.a(b)
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q){p=t.firstChild
p.toString
s.appendChild(p)}return},
gv:function(a){var t=this.a.childNodes
return new W.au(t,t.length,H.U(t).h("au<H.E>"))},
gl:function(a){return this.a.childNodes.length},
p:function(a,b){var t=this.a.childNodes
if(b<0||b>=t.length)return H.k(t,b)
return t[b]}}
W.e.prototype={
cq:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
bB:function(a){var t
for(;t=a.firstChild,t!=null;)a.removeChild(t)},
i:function(a){var t=a.nodeValue
return t==null?this.bj(a):t},
sbg:function(a,b){a.textContent=b},
$ie:1}
W.bv.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.aN(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iaP:1,
$ij:1,
$it:1}
W.cr.prototype={
gl:function(a){return a.length}}
W.bB.prototype={
B:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.a7(a,b,c,d)
t=W.hG("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.C(s).C(0,new W.C(t))
return s}}
W.ct.prototype={
B:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.a7(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.x.B(t.createElement("table"),b,c,d)
t.toString
t=new W.C(t)
r=t.gK(t)
r.toString
t=new W.C(r)
q=t.gK(t)
s.toString
q.toString
new W.C(s).C(0,new W.C(q))
return s}}
W.cu.prototype={
B:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.a7(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.x.B(t.createElement("table"),b,c,d)
t.toString
t=new W.C(t)
r=t.gK(t)
s.toString
r.toString
new W.C(s).C(0,new W.C(r))
return s}}
W.aT.prototype={
a5:function(a,b){var t,s
this.sbg(a,null)
t=a.content
t.toString
J.hs(t)
s=this.B(a,b,null,null)
a.content.appendChild(s)},
$iaT:1}
W.E.prototype={}
W.aV.prototype={
bZ:function(a,b){return a.requestAnimationFrame(H.c1(u.a.a(b),1))},
aW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.aW.prototype={$iaW:1}
W.bN.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.aN(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iaP:1,
$ij:1,
$it:1}
W.cD.prototype={
U:function(a,b){var t,s,r,q,p
u.aa.a(b)
for(t=this.gI(),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.en)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gI:function(){var t,s,r,q,p,o,n=this.a.attributes
n.toString
t=H.h([],u.s)
for(s=n.length,r=u.x,q=0;q<s;++q){if(q>=n.length)return H.k(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
C.a.j(t,o)}}return t}}
W.cH.prototype={
p:function(a,b){return this.a.getAttribute(H.I(b))},
gl:function(a){return this.gI().length}}
W.cI.prototype={
E:function(){var t,s,r,q,p=P.bq(u.N)
for(t=this.a.className.split(" "),s=t.length,r=0;r<s;++r){q=J.f2(t[r])
if(q.length!==0)p.j(0,q)}return p},
aE:function(a){this.a.className=u.U.a(a).az(0," ")},
gl:function(a){return this.a.classList.length},
u:function(a,b){var t=this.a.classList.contains(b)
return t},
j:function(a,b){var t=this.a.classList,s=t.contains(b)
t.add(b)
return!s},
V:function(a,b){var t=this.a.classList,s=t.contains(b)
t.remove(b)
return s}}
W.eu.prototype={}
W.bJ.prototype={
aA:function(a,b,c,d){var t=this.$ti
t.h("~(1)?").a(a)
u.Z.a(c)
return W.ft(this.a,this.b,a,!1,t.c)}}
W.cJ.prototype={}
W.bK.prototype={}
W.dH.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:21}
W.az.prototype={
bp:function(a){var t
if($.cM.a===0){for(t=0;t<262;++t)$.cM.F(0,C.P[t],W.j1())
for(t=0;t<12;++t)$.cM.F(0,C.m[t],W.j2())}},
L:function(a){return $.hq().u(0,W.bg(a))},
H:function(a,b,c){var t=$.cM.p(0,H.f(W.bg(a))+"::"+b)
if(t==null)t=$.cM.p(0,"*::"+b)
if(t==null)return!1
return H.fH(t.$4(a,b,c,this))},
$iQ:1}
W.H.prototype={
gv:function(a){return new W.au(a,this.gl(a),H.U(a).h("au<H.E>"))}}
W.bw.prototype={
L:function(a){return C.a.b4(this.a,new W.dv(a))},
H:function(a,b,c){return C.a.b4(this.a,new W.du(a,b,c))},
$iQ:1}
W.dv.prototype={
$1:function(a){return u.D.a(a).L(this.a)},
$S:8}
W.du.prototype={
$1:function(a){return u.D.a(a).H(this.a,this.b,this.c)},
$S:8}
W.bR.prototype={
bq:function(a,b,c,d){var t,s,r
this.a.C(0,c)
t=b.a4(0,new W.e1())
s=b.a4(0,new W.e2())
this.b.C(0,t)
r=this.c
r.C(0,C.S)
r.C(0,s)},
L:function(a){return this.a.u(0,W.bg(a))},
H:function(a,b,c){var t=this,s=W.bg(a),r=t.c
if(r.u(0,H.f(s)+"::"+b))return t.d.c9(c)
else if(r.u(0,"*::"+b))return t.d.c9(c)
else{r=t.b
if(r.u(0,H.f(s)+"::"+b))return!0
else if(r.u(0,"*::"+b))return!0
else if(r.u(0,H.f(s)+"::*"))return!0
else if(r.u(0,"*::*"))return!0}return!1},
$iQ:1}
W.e1.prototype={
$1:function(a){return!C.a.u(C.m,H.I(a))},
$S:9}
W.e2.prototype={
$1:function(a){return C.a.u(C.m,H.I(a))},
$S:9}
W.cX.prototype={
H:function(a,b,c){if(this.bm(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.u(0,b)
return!1}}
W.e3.prototype={
$1:function(a){return"TEMPLATE::"+H.f(H.I(a))},
$S:22}
W.cW.prototype={
L:function(a){var t
if(u.ck.b(a))return!1
t=u.bM.b(a)
if(t&&W.bg(a)==="foreignObject")return!1
if(t)return!0
return!1},
H:function(a,b,c){if(b==="is"||C.c.bh(b,"on"))return!1
return this.L(a)},
$iQ:1}
W.au.prototype={
m:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.saY(J.aD(t.a,s))
t.c=s
return!0}t.saY(null)
t.c=r
return!1},
gn:function(){return this.d},
saY:function(a){this.d=this.$ti.h("1?").a(a)},
$ix:1}
W.cT.prototype={$ihY:1}
W.bW.prototype={
aG:function(a){var t=this,s=new W.e5(t)
t.b=!1
s.$2(a,null)
for(;t.b;){t.b=!1
s.$2(a,null)}},
S:function(a,b){var t=this.b=!0
if(b!=null?b!==a.parentNode:t)J.f0(a)
else b.removeChild(a)},
c0:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
try{n=J.ht(a)
m=n.a.getAttribute("is")
u.h.a(a)
t=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='previousSibling'||i.name=='previousSibling'||i.id=='children'||i.name=='children')return true}return false}(a)
o=H.eb(t)?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.V(q)}s="element unprintable"
try{s=J.aF(a)}catch(q){H.V(q)}try{r=W.bg(a)
this.c_(u.h.a(a),b,o,s,r,u.bC.a(n),H.fI(m))}catch(q){if(H.V(q) instanceof P.P)throw q
else{this.S(a,b)
window
p="Removing corrupted element "+H.f(s)
if(typeof console!="undefined")window.console.warn(p)}}},
c_:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
if(c){n.S(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!n.a.L(a)){n.S(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!n.a.H(a,"is",g)){n.S(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gI()
s=H.h(t.slice(0),H.G(t).h("v<1>"))
for(r=f.gI().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.k(s,r)
q=s[r]
p=n.a
o=J.hx(q)
H.I(q)
if(!p.H(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.f(e)+" "+q+'="'+H.f(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.bg.b(a)){t=a.content
t.toString
n.aG(t)}},
$ihR:1}
W.e5.prototype={
$2:function(a,b){var t,s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.c0(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.S(a,b)}t=a.lastChild
for(r=u.A;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){q=s.nextSibling
p=t
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.eD("Corrupt HTML")
throw H.c(q)}}catch(o){H.V(o)
q=r.a(t)
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:23}
W.cN.prototype={}
W.cO.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.d0.prototype={}
W.d1.prototype={}
P.c8.prototype={
as:function(a){var t=$.he().b
if(t.test(a))return a
throw H.c(P.eq(a,"value","Not a valid class token"))},
i:function(a){return this.E().az(0," ")},
gv:function(a){var t=this.E()
return P.dX(t,t.r,H.n(t).c)},
gl:function(a){return this.E().a},
u:function(a,b){this.as(b)
return this.E().u(0,b)},
j:function(a,b){var t
this.as(b)
t=this.cp(new P.d9(b))
return H.fH(t==null?!1:t)},
V:function(a,b){var t,s
this.as(b)
t=this.E()
s=t.V(0,b)
this.aE(t)
return s},
A:function(a,b){return this.E().A(0,b)},
cp:function(a){var t,s
u.b4.a(a)
t=this.E()
s=a.$1(t)
this.aE(t)
return s}}
P.d9.prototype={
$1:function(a){return u.U.a(a).j(0,this.a)},
$S:24}
P.cd.prototype={
gah:function(){var t=this.b,s=H.n(t)
return new H.bt(new H.a5(t,s.h("z(p.E)").a(new P.dh()),s.h("a5<p.E>")),s.h("l(p.E)").a(new P.di()),s.h("bt<p.E,l>"))},
gl:function(a){return J.aE(this.gah().a)},
p:function(a,b){var t=this.gah()
return t.b.$1(J.eo(t.a,b))},
gv:function(a){var t=P.eA(this.gah(),!1,u.h)
return new J.Z(t,t.length,H.G(t).h("Z<1>"))}}
P.dh.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:7}
P.di.prototype={
$1:function(a){return u.h.a(u.A.a(a))},
$S:25}
P.dW.prototype={
ba:function(a){if(a<=0||a>4294967296)throw H.c(P.hT("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.aS.prototype={$iaS:1}
P.c6.prototype={
E:function(){var t,s,r,q,p=this.a.getAttribute("class"),o=P.bq(u.N)
if(p==null)return o
for(t=p.split(" "),s=t.length,r=0;r<s;++r){q=J.f2(t[r])
if(q.length!==0)o.j(0,q)}return o},
aE:function(a){this.a.setAttribute("class",a.az(0," "))}}
P.b.prototype={
gb5:function(a){return new P.c6(a)},
gav:function(a){return new P.cd(a,new W.C(a))},
sax:function(a,b){this.a5(a,b)},
B:function(a,b,c,d){var t,s,r,q,p,o=H.h([],u.Q)
C.a.j(o,W.fv(null))
C.a.j(o,W.fB())
C.a.j(o,new W.cW())
c=new W.bW(new W.bw(o))
t='<svg version="1.1">'+b+"</svg>"
o=document
s=o.body
s.toString
r=C.p.ce(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.C(r)
p=o.gK(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
$ib:1}
N.a9.prototype={
gaL:function(){return C.a.cg(this.e,0,new N.da(),u.e)},
gaI:function(){var t,s,r,q,p=this
if(p.d){t=p.f
s=p.gaL()
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.N(s)
r=p.r
if(typeof r!=="number")return H.N(r)
q=p.x
if(typeof q!=="number")return H.N(q)
q=t+s+r-q
t=q}else t=0
return t},
bo:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
$.es=0
f.sap(a)
f.f=0
f.r=V.h_(f.c)
f.x=V.hd(f.c)
if(b.length!==0)for(t=u.J,s=f.e,r=0;r<4;++r){q=C.O[r]
for(p=0;p<11;++p){o=C.Q[p]
n=f.c
a=new N.a9(o,q,H.h([],t))
a.bn(o,q,b,0,n)
if(a.d)C.a.j(s,a)}}t=f.e
s=t.length
n=s!==0
f.d=n
if(n){if(0>=s)return H.k(t,0)
m=t[0].gaI()
for(l=0,k=0;s=t.length,k<s;++k){s=t[k]
if(s.d){n=s.f
j=s.gaL()
if(typeof n!=="number")return n.k()
if(typeof j!=="number")return H.N(j)
i=s.r
if(typeof i!=="number")return H.N(i)
s=s.x
if(typeof s!=="number")return H.N(s)
h=n+j+i-s}else h=0
if(h>m){m=h
l=k}}if(l<0||l>=s)return H.k(t,l)
g=t[l]
f.b=g.b
f.a=g.a}},
bn:function(a,b,c,d,e){var t,s,r,q,p=this
$.es=$.es+1
t=c.length
if(t!==0&&d<t&&V.O(p.a,0,p.b,c[d],e)){if(d>=c.length)return H.k(c,d)
s=c[d]
p.d=!0
r=V.el(p.a,0,p.b,s,e)
p.sap(V.d4(p.a,r,p.b,s,e))
q=V.h3(p.c)
p.f=V.ha(q.length)
p.sap(V.eQ(p.c,q))
p.r=V.h_(p.c)
p.x=V.hd(p.c)
t=d+1}else p.d=!1},
sap:function(a){this.c=u.O.a(a)}}
N.da.prototype={
$2:function(a,b){var t
H.am(a)
t=u.b1.a(b).gaI()
if(typeof a!=="number")return a.k()
return a+t},
$S:26}
D.cf.prototype={
W:function(a){var t=0,s=P.b5(u.z),r=this
var $async$W=P.b7(function(b,c){if(b===1)return P.b2(c,s)
while(true)switch(t){case 0:r.ao()
if(!r.a)r.T()
return P.b3(null,s)}})
return P.b4($async$W,s)},
P:function(){var t=0,s=P.b5(u.z),r,q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$P=P.b7(function(a,b){if(a===1)return P.b2(b,s)
while(true)$async$outer:switch(t){case 0:g=V.d3(q.c,null)
f=q.dx
if(u.bP.b(f)){p=f.e
o=V.el(p.a,q.x,p.b,C.a.gq(q.d),q.c)
f=f.e
g=V.eW(g,V.d3(V.d4(f.a,o,f.b,C.a.gq(q.d),V.c2()),-2))}n=V.el(q.y,q.x,q.z,C.a.gq(q.d),q.c)
g=V.eW(V.eW(g,V.d3(V.d4(q.y,n,q.z,C.a.gq(q.d),V.c2()),-1)),V.d4(q.y,q.x,q.z,C.a.gq(q.d),V.c2()))
f=H.G(g)
p=f.h("a0<1,m*>")
m=P.eA(new H.a0(g,f.h("j<m*>(1)").a(new D.dn()),p),!0,p.h("j.E"))
l=J.hu(q.Q)
k=H.h([],u.a1)
for(j=0;j<24;++j)for(i=0;i<10;++i)C.a.j(k,C.a.u(q.e,j))
for(h=0;h<l.gl(l);++h){f=l.p(0,h)
if(h>=m.length){r=H.k(m,h)
t=1
break $async$outer}p="pixel "+V.eX(m[h],!1)+" "
if(h>=k.length){r=H.k(k,h)
t=1
break $async$outer}f.className=p+(k[h]?"remove":"")}q.R()
q.an()
case 1:return P.b3(r,s)}})
return P.b4($async$P,s)},
R:function(){var t=0,s=P.b5(u.z),r=this,q,p,o
var $async$R=P.b7(function(a,b){if(a===1)return P.b2(b,s)
while(true)switch(t){case 0:p="Score: "+r.f
o=r.ch
t=o.innerText!==p?2:3
break
case 2:o.innerText=p
t=r.f!==0&&!J.bb(r.ch).u(0,"bounce-score")?4:5
break
case 4:J.bb(r.ch).j(0,"bounce-score")
t=6
return P.fJ(P.fc(P.dd(400),u.z),$async$R)
case 6:J.bb(r.ch).V(0,"bounce-score")
case 5:case 3:q="Highest: "+r.r
t=r.r!==0&&r.cx.innerText!==q?7:8
break
case 7:r.cx.innerText=q
t=r.r!==0&&!J.bb(r.cx).u(0,"bounce-score")?9:10
break
case 9:J.bb(r.cx).j(0,"bounce-score")
t=11
return P.fJ(P.fc(P.dd(400),u.z),$async$R)
case 11:J.bb(r.cx).V(0,"bounce-score")
case 10:case 8:return P.b3(null,s)}})
return P.b4($async$R,s)},
an:function(){var t=0,s=P.b5(u.z),r=this,q,p
var $async$an=P.b7(function(a,b){if(a===1)return P.b2(b,s)
while(true)switch(t){case 0:if(r.db){r.db=!1
for(q=r.cy,p=0;p<q.length;++p)r.bU(p)}return P.b3(null,s)}})
return P.b4($async$an,s)},
bU:function(a){var t,s,r,q,p,o,n=this.cy
if(a>=n.length)return H.k(n,a)
t=n[a]
n=this.d
s=a+1
if(s>=n.length)return H.k(n,s)
r=C.a.p($.h6,n[s])
t.className="on-deck "+V.jb(r.length)
s=J.a7(t)
s.sax(t,V.fU(r))
n=H.G(r)
q=n.h("a0<1,m*>")
p=P.eA(new H.a0(r,n.h("j<m*>(1)").a(new D.dm()),q),!0,q.h("j.E"))
o=s.gav(t)
for(a=0;a<o.gl(o);++a){n=o.p(0,a)
if(a>=p.length)return H.k(p,a)
n.className="pixel "+V.eX(p[a],!0)}},
b1:function(){var t=this
t.z=0
t.y=V.h0(C.a.gq(t.d))
t.x=V.h1(C.a.gq(t.d))},
ao:function(){var t=this,s=t.f
if(s>0)t.sbK(Math.max(s,t.r))
t.f=0
t.sa9(V.c2())
t.db=!0
t.sbV(V.fW())
C.a.sl(t.e,0)
t.b1()
t.dx.au(t.c,t.d,0)
t.P()},
T:function(){var t=0,s=P.b5(u.z),r=this,q
var $async$T=P.b7(function(a,b){if(a===1)return P.b2(b,s)
while(true)switch(t){case 0:q=r.dy
if(q!=null)q.a3()
r.dy=P.eE(P.dd(Math.max(20,r.b)),r.gc8())
return P.b3(null,s)}})
return P.b4($async$T,s)},
a2:function(){var t=0,s=P.b5(u.z),r,q=this,p,o
var $async$a2=P.b7(function(a,b){if(a===1)return P.b2(b,s)
while(true)switch(t){case 0:o=q.dy
if(o!=null)o.a3()
o=q.e
if(o.length!==0){q.sa9(V.eQ(q.c,o))
C.a.sl(q.e,0)}o=q.y
p=q.x
if(typeof p!=="number"){r=p.k()
t=1
break}p=V.O(o,p+1,q.z,C.a.gq(q.d),q.c)
o=q.x
if(p){if(typeof o!=="number"){r=o.k()
t=1
break}q.x=o+1}else{q.sa9(V.d4(q.y,o,q.z,C.a.gq(q.d),q.c))
q.sbN(V.h3(q.c))
o=q.e.length
if(o!==0)q.f=q.f+V.ha(o)
C.a.bb(q.d,0)
q.db=!0
C.a.j(q.d,$.eZ().ba(7))
q.db=!0
q.b1()
q.dx.au(V.eQ(q.c,q.e),q.d,q.e.length)
if(!V.O(q.y,q.x,q.z,C.a.gq(q.d),q.c)){P.em("Game Over")
q.ao()}}q.P()
q.T()
case 1:return P.b3(r,s)}})
return P.b4($async$a2,s)},
bJ:function(a){var t,s,r,q=this
switch(u.bs.a(a)){case C.t:q.ao()
break
case C.e:t=V.el(q.y,q.x,q.z,C.a.gq(q.d),q.c)
q.x=t
q.dx.M(q.y,t,q.z)
q.a2()
break
case C.f:t=q.y
s=q.x
r=q.z
if(typeof r!=="number")return r.k()
if(V.O(t,s,r+1,C.a.gq(q.d),q.c)){t=q.z
if(typeof t!=="number")return t.k()
q.z=t+1}else{t=q.y
s=q.x
if(typeof s!=="number")return s.k()
r=q.z
if(typeof r!=="number")return r.k()
if(V.O(t,s+1,r+1,C.a.gq(q.d),q.c)){t=q.z
if(typeof t!=="number")return t.k()
q.z=t+1
t=q.x
if(typeof t!=="number")return t.k()
q.x=t+1}else{t=q.y
if(typeof t!=="number")return t.N()
s=q.x
r=q.z
if(typeof r!=="number")return r.k()
if(V.O(t-1,s,r+1,C.a.gq(q.d),q.c)){t=q.z
if(typeof t!=="number")return t.k()
q.z=t+1
t=q.y
if(typeof t!=="number")return t.N()
q.y=t-1}else{t=q.y
if(typeof t!=="number")return t.k()
s=q.x
r=q.z
if(typeof r!=="number")return r.k()
if(V.O(t+1,s,r+1,C.a.gq(q.d),q.c)){t=q.z
if(typeof t!=="number")return t.k()
q.z=t+1
t=q.y
if(typeof t!=="number")return t.k()
q.y=t+1}else{t=q.y
if(typeof t!=="number")return t.N()
s=q.x
r=q.z
if(typeof r!=="number")return r.k()
if(V.O(t-2,s,r+1,C.a.gq(q.d),q.c)){t=q.z
if(typeof t!=="number")return t.k()
q.z=t+1
t=q.y
if(typeof t!=="number")return t.N()
q.y=t-2}else{t=q.y
if(typeof t!=="number")return t.k()
s=q.x
r=q.z
if(typeof r!=="number")return r.k()
if(V.O(t+2,s,r+1,C.a.gq(q.d),q.c)){t=q.z
if(typeof t!=="number")return t.k()
q.z=t+1
t=q.y
if(typeof t!=="number")return t.k()
q.y=t+2}}}}}}q.dx.M(q.y,q.x,q.z)
break
case C.h:t=q.y
if(typeof t!=="number")return t.N()
if(V.O(t-1,q.x,q.z,C.a.gq(q.d),q.c)){t=q.y
if(typeof t!=="number")return t.N();--t
q.y=t
q.dx.M(t,q.x,q.z)}break
case C.i:t=q.y
if(typeof t!=="number")return t.k()
if(V.O(t+1,q.x,q.z,C.a.gq(q.d),q.c)){t=q.y
if(typeof t!=="number")return t.k();++t
q.y=t
q.dx.M(t,q.x,q.z)}break
case C.j:t=q.y
s=q.x
if(typeof s!=="number")return s.k()
if(V.O(t,s+1,q.z,C.a.gq(q.d),q.c)){t=q.x
if(typeof t!=="number")return t.k();++t
q.x=t
q.dx.M(q.y,t,q.z)}break
case C.u:t=!q.a
q.a=t
if(t){t=q.dy
if(t!=null)t.a3()}else q.T()
t=q.dx
s=q.a
t.b=s
t.b7(s)
P.em(q.a?"Paused":"Unpaused")
break
case C.k:q.aO(-50)
break
case C.l:q.aO(50)
break}q.P()},
aO:function(a){var t,s="Speed set to tick:"
this.b+=a
t=this.dx.c+=a
P.em(s+t+"ms")
P.em(s+this.b+"ms")},
sa9:function(a){this.c=u.O.a(a)},
sbV:function(a){this.d=u.w.a(a)},
sbN:function(a){this.e=u.w.a(a)},
sbK:function(a){this.r=H.am(a)}}
D.dn.prototype={
$1:function(a){return u.w.a(a)},
$S:10}
D.dm.prototype={
$1:function(a){return u.w.a(a)},
$S:10}
U.bk.prototype={
b7:function(a){},
au:function(a,b,c){u.O.a(a)
u.w.a(b)},
M:function(a,b,c){}}
U.bC.prototype={
bT:function(a){var t
u.c9.a(a)
t=this.d
if(t.aw(a.keyCode))this.a.j(0,t.p(0,a.keyCode))}}
U.bx.prototype={}
U.ca.prototype={
b7:function(a){if(a)this.aM()
else this.X()},
au:function(a,b,c){var t
u.O.a(a)
u.w.a(b)
t=new K.dl()
t.sbz(a)
t.sbW(b)
t.c=V.h0(C.a.gq(t.b))
V.h1(C.a.gq(t.b))
t.e=0
this.d=t
t=new N.a9(null,null,H.h([],u.J))
t.bo(a,b)
this.e=t},
M:function(a,b,c){var t=this.d
t.c=a
t.e=c},
X:function(){var t=0,s=P.b5(u.z),r=this,q,p
var $async$X=P.b7(function(a,b){if(a===1)return P.b2(b,s)
while(true)switch(t){case 0:r.aM()
q=r.c
if(q<20){q=window
p=u.a.a(r.gbQ())
C.o.aW(q)
p=W.fR(p,u.p)
p.toString
r.r=C.o.bZ(q,p)}else r.f=P.eE(P.dd(q),r.gbH())
return P.b3(null,s)}})
return P.b4($async$X,s)},
aM:function(){var t=window,s=this.r
C.o.aW(t)
t.cancelAnimationFrame(s)
s=this.f
if(s!=null)s.a3()},
bR:function(a){return this.aX()},
aX:function(){var t,s,r,q=this
if(!q.b){t=q.e
t=t!=null&&t.d}else t=!1
if(t){t=q.d
s=t.e
if(typeof s!=="number")return s.aF()
s=C.d.aF(s,4)
r=q.e
if(s!==r.b)q.a.j(0,C.f)
else{t=t.c
r=r.a
if(typeof t!=="number")return t.cA()
if(typeof r!=="number")return H.N(r)
if(t>r)q.a.j(0,C.h)
else{s=q.a
if(t<r)s.j(0,C.i)
else s.j(0,C.e)}}}q.X()}}
U.cF.prototype={}
K.dl.prototype={
sbz:function(a){u.O.a(a)},
sbW:function(a){this.b=u.w.a(a)}}
V.B.prototype={
i:function(a){return this.b}}
V.ea.prototype={
$1:function(a){return J.hv(u.w.a(a),V.ji(),u.bw)},
$S:29}
V.ee.prototype={
$1:function(a){return $.eZ().ba(7)},
$S:30};(function aliases(){var t=J.K.prototype
t.bj=t.i
t=J.ae.prototype
t.bl=t.i
t=P.j.prototype
t.bk=t.a4
t=W.l.prototype
t.a7=t.B
t=W.bR.prototype
t.bm=t.H})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._static_2,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers.installStaticTearOff,n=hunkHelpers._instance_1u
t(P,"iS","i_",2)
t(P,"iT","i0",2)
t(P,"iU","i1",2)
s(P,"fV","iM",1)
r(P,"iW","iF",5)
s(P,"iV","iE",1)
q(P.y.prototype,"gbC","O",5)
p(P.aZ.prototype,"gc2","c3",1)
o(W,"j1",4,null,["$4"],["i3"],11,0)
o(W,"j2",4,null,["$4"],["i4"],11,0)
var m
p(m=D.cf.prototype,"gc8","a2",1)
n(m,"gbI","bJ",27)
n(U.bC.prototype,"gbS","bT",28)
n(m=U.ca.prototype,"gbQ","bR",4)
p(m,"gbH","aX",1)
t(V,"ji","jc",31)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.o,null)
r(P.o,[H.ey,J.K,J.Z,P.j,H.aw,P.x,H.bj,H.bh,H.be,H.dB,P.r,H.dw,H.bi,H.bS,H.as,P.D,H.dr,H.bp,H.cj,H.R,H.cL,P.cY,P.cB,P.a3,P.aX,P.bG,P.ay,P.y,P.cC,P.L,P.cG,P.bO,P.aZ,P.cU,P.bd,P.bX,P.bP,P.cP,P.aA,P.bM,P.p,P.ax,P.bQ,P.aK,P.bz,P.dI,P.dj,P.w,P.cV,P.bA,W.eu,W.az,W.H,W.bw,W.bR,W.cW,W.au,W.cT,W.bW,P.dW,N.a9,D.cf,U.bk,U.bx,K.dl,V.B])
r(J.K,[J.ch,J.aO,J.ae,J.v,J.bn,J.ad,W.u,W.db,W.cb,W.dc,W.a,W.cN,W.cl,W.cQ,W.d0])
r(J.ae,[J.co,J.aU,J.X])
s(J.dq,J.v)
r(J.bn,[J.bm,J.ci])
r(P.j,[H.bf,H.bt,H.a5,H.a0])
r(H.bf,[H.af,H.bo])
r(P.x,[H.bu,H.bD])
s(H.a2,H.af)
s(H.aM,H.be)
r(P.r,[P.cw,H.ck,H.cy,H.cq,P.bc,H.cK,P.cn,P.P,P.cz,P.cx,P.ah,P.c7,P.c9])
s(H.cm,P.cw)
r(H.as,[H.cv,H.ef,H.eg,H.eh,P.dE,P.dD,P.dF,P.dG,P.e4,P.e6,P.e7,P.e9,P.dk,P.dJ,P.dR,P.dN,P.dO,P.dP,P.dL,P.dQ,P.dK,P.dU,P.dV,P.dT,P.dS,P.dz,P.dA,P.dY,P.e8,P.e_,P.dZ,P.e0,P.dt,P.de,P.df,W.dg,W.dH,W.dv,W.du,W.e1,W.e2,W.e3,W.e5,P.d9,P.dh,P.di,N.da,D.dn,D.dm,V.ea,V.ee])
r(H.cv,[H.cs,H.aI])
s(H.cA,P.bc)
s(P.bs,P.D)
r(P.bs,[H.av,W.cD])
s(H.bT,H.cK)
r(P.a3,[P.b0,W.bJ])
s(P.aY,P.b0)
s(P.bF,P.aY)
s(P.bH,P.aX)
s(P.a6,P.bH)
s(P.bE,P.bG)
s(P.bI,P.cG)
s(P.b1,P.bO)
s(P.cS,P.bX)
s(P.bL,P.bP)
s(P.br,P.bM)
s(P.by,P.bQ)
r(P.P,[P.aR,P.cg])
r(W.u,[W.e,W.aV])
r(W.e,[W.l,W.W,W.at,W.aW])
r(W.l,[W.d,P.b])
r(W.d,[W.aG,W.c5,W.aH,W.ar,W.ce,W.cr,W.bB,W.ct,W.cu,W.aT])
r(P.br,[W.cE,W.C,P.cd])
s(W.cO,W.cN)
s(W.ac,W.cO)
s(W.bl,W.at)
s(W.E,W.a)
s(W.a1,W.E)
s(W.cR,W.cQ)
s(W.bv,W.cR)
s(W.d1,W.d0)
s(W.bN,W.d1)
s(W.cH,W.cD)
s(P.c8,P.by)
r(P.c8,[W.cI,P.c6])
s(W.cJ,W.bJ)
s(W.bK,P.L)
s(W.cX,W.bR)
s(P.aS,P.b)
r(U.bk,[U.bC,U.cF])
s(U.ca,U.cF)
t(P.bM,P.p)
t(P.bQ,P.ax)
t(W.cN,P.p)
t(W.cO,W.H)
t(W.cQ,P.p)
t(W.cR,W.H)
t(W.d0,P.p)
t(W.d1,W.H)
t(U.cF,U.bx)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{m:"int",iY:"double",ba:"num",i:"String",z:"bool",w:"Null",t:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["w()","~()","~(~())","w(@)","~(@)","~(o,T)","i(m)","z(e)","z(Q)","z(i)","t<m*>*(t<m*>*)","z(l,i,i,az)","@(@)","@(@,i)","@(i)","w(~())","w(@,T)","w(m,@)","w(o,T)","y<@>(@)","w(o?,o?)","@(a)","i(i)","~(e,e?)","z(S<i>)","l(e)","m*(m*,a9*)","~(B*)","~(a1*)","j<i*>*(t<m*>*)","m*(m*)","i*(m*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.ij(v.typeUniverse,JSON.parse('{"X":"ae","co":"ae","aU":"ae","jk":"a","jr":"a","jj":"b","js":"b","jl":"d","ju":"d","jv":"e","jq":"e","jI":"at","jn":"E","jm":"W","jx":"W","jt":"ac","ch":{"z":[]},"aO":{"w":[]},"ae":{"aL":[]},"v":{"t":["1"],"j":["1"]},"dq":{"v":["1"],"t":["1"],"j":["1"]},"Z":{"x":["1"]},"bn":{"ba":[]},"bm":{"m":[],"ba":[]},"ci":{"ba":[]},"ad":{"i":[],"dx":[]},"bf":{"j":["1"]},"af":{"j":["1"]},"aw":{"x":["1"]},"bt":{"j":["2"],"j.E":"2"},"bu":{"x":["2"]},"a2":{"af":["2"],"j":["2"],"j.E":"2","af.E":"2"},"a5":{"j":["1"],"j.E":"1"},"bD":{"x":["1"]},"a0":{"j":["2"],"j.E":"2"},"bj":{"x":["2"]},"bh":{"x":["1"]},"be":{"ag":["1","2"]},"aM":{"be":["1","2"],"ag":["1","2"]},"cm":{"r":[]},"ck":{"r":[]},"cy":{"r":[]},"bS":{"T":[]},"as":{"aL":[]},"cv":{"aL":[]},"cs":{"aL":[]},"aI":{"aL":[]},"cq":{"r":[]},"cA":{"r":[]},"av":{"D":["1","2"],"ag":["1","2"],"D.K":"1","D.V":"2"},"bo":{"j":["1"],"j.E":"1"},"bp":{"x":["1"]},"cj":{"dx":[]},"cK":{"r":[]},"bT":{"r":[]},"cY":{"hX":[]},"bF":{"aY":["1"],"b0":["1"],"a3":["1"]},"a6":{"bH":["1"],"aX":["1"],"L":["1"],"aj":["1"]},"bG":{"fm":["1"],"fA":["1"],"aj":["1"]},"bE":{"bG":["1"],"fm":["1"],"fA":["1"],"aj":["1"]},"y":{"ab":["1"]},"aY":{"b0":["1"],"a3":["1"]},"bH":{"aX":["1"],"L":["1"],"aj":["1"]},"aX":{"L":["1"],"aj":["1"]},"b0":{"a3":["1"]},"bI":{"cG":["1"]},"b1":{"bO":["1"]},"aZ":{"L":["1"]},"bd":{"r":[]},"bX":{"fr":[]},"cS":{"bX":[],"fr":[]},"bL":{"bP":["1"],"S":["1"],"j":["1"]},"aA":{"x":["1"]},"br":{"p":["1"],"t":["1"],"j":["1"]},"bs":{"D":["1","2"],"ag":["1","2"]},"D":{"ag":["1","2"]},"by":{"ax":["1"],"S":["1"],"j":["1"]},"bP":{"S":["1"],"j":["1"]},"m":{"ba":[]},"t":{"j":["1"]},"S":{"j":["1"]},"i":{"dx":[]},"bc":{"r":[]},"cw":{"r":[]},"cn":{"r":[]},"P":{"r":[]},"aR":{"r":[]},"cg":{"r":[]},"cz":{"r":[]},"cx":{"r":[]},"ah":{"r":[]},"c7":{"r":[]},"bz":{"r":[]},"c9":{"r":[]},"cV":{"T":[]},"d":{"l":[],"e":[],"u":[]},"aG":{"l":[],"e":[],"u":[]},"c5":{"l":[],"e":[],"u":[]},"aH":{"l":[],"e":[],"u":[]},"ar":{"l":[],"e":[],"u":[]},"W":{"e":[],"u":[]},"at":{"e":[],"u":[]},"cE":{"p":["l"],"t":["l"],"j":["l"],"p.E":"l"},"l":{"e":[],"u":[]},"ce":{"l":[],"e":[],"u":[]},"ac":{"p":["e"],"H":["e"],"t":["e"],"aP":["e"],"j":["e"],"p.E":"e","H.E":"e"},"bl":{"e":[],"u":[]},"a1":{"a":[]},"C":{"p":["e"],"t":["e"],"j":["e"],"p.E":"e"},"e":{"u":[]},"bv":{"p":["e"],"H":["e"],"t":["e"],"aP":["e"],"j":["e"],"p.E":"e","H.E":"e"},"cr":{"l":[],"e":[],"u":[]},"bB":{"l":[],"e":[],"u":[]},"ct":{"l":[],"e":[],"u":[]},"cu":{"l":[],"e":[],"u":[]},"aT":{"l":[],"e":[],"u":[]},"E":{"a":[]},"aV":{"u":[]},"aW":{"e":[],"u":[]},"bN":{"p":["e"],"H":["e"],"t":["e"],"aP":["e"],"j":["e"],"p.E":"e","H.E":"e"},"cD":{"D":["i","i"],"ag":["i","i"]},"cH":{"D":["i","i"],"ag":["i","i"],"D.K":"i","D.V":"i"},"cI":{"ax":["i"],"S":["i"],"j":["i"]},"bJ":{"a3":["1"]},"cJ":{"bJ":["1"],"a3":["1"]},"bK":{"L":["1"]},"az":{"Q":[]},"bw":{"Q":[]},"bR":{"Q":[]},"cX":{"Q":[]},"cW":{"Q":[]},"au":{"x":["1"]},"cT":{"hY":[]},"bW":{"hR":[]},"c8":{"ax":["i"],"S":["i"],"j":["i"]},"cd":{"p":["l"],"t":["l"],"j":["l"],"p.E":"l"},"aS":{"b":[],"l":[],"e":[],"u":[]},"c6":{"ax":["i"],"S":["i"],"j":["i"]},"b":{"l":[],"e":[],"u":[]},"bC":{"bk":[]},"ca":{"bk":[],"bx":[]}}'))
H.ii(v.typeUniverse,JSON.parse('{"bf":1,"br":1,"bs":2,"by":1,"bM":1,"bQ":1}'))
0
var u=(function rtii(){var t=H.ed
return{j:t("@<~>"),n:t("bd"),E:t("aH"),t:t("ar"),h:t("l"),C:t("r"),B:t("a"),Y:t("aL"),f:t("ab<@>"),L:t("aM<m*,B*>"),q:t("j<e>"),r:t("j<@>"),Q:t("v<Q>"),s:t("v<i>"),b:t("v<@>"),J:t("v<a9*>"),a9:t("v<l*>"),c:t("v<t<m*>*>"),V:t("v<i*>"),a1:t("v<z*>"),i:t("v<m*>"),T:t("aO"),R:t("X"),da:t("aP<@>"),bC:t("ag<@,@>"),c4:t("a2<i*,i>"),A:t("e"),D:t("Q"),P:t("w"),K:t("o"),ck:t("aS"),U:t("S<i>"),l:t("T"),N:t("i"),u:t("i(i*)"),bM:t("b"),bg:t("aT"),cr:t("aU"),aP:t("bE<B*>"),x:t("aW"),ba:t("C"),cM:t("cJ<a1*>"),d:t("y<@>"),aQ:t("y<m>"),G:t("az"),v:t("z"),m:t("z(o)"),cb:t("iY"),z:t("@"),bd:t("@()"),y:t("@(o)"),W:t("@(o,T)"),b4:t("@(S<i>)"),S:t("m"),b1:t("a9*"),bs:t("B*"),c9:t("a1*"),O:t("t<t<m*>*>*"),w:t("t<m*>*"),I:t("0&*"),_:t("o*"),bP:t("bx*"),bw:t("i*"),c5:t("z*"),e:t("m*"),bc:t("ab<w>?"),X:t("o?"),F:t("ay<@,@>?"),g:t("cP?"),o:t("@(a)?"),Z:t("~()?"),p:t("ba"),H:t("~"),M:t("~()"),bo:t("~(o)"),k:t("~(o,T)"),aa:t("~(i,i)"),a:t("~(ba)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.y=W.aG.prototype
C.p=W.ar.prototype
C.I=W.cb.prototype
C.K=W.bl.prototype
C.L=J.K.prototype
C.a=J.v.prototype
C.d=J.bm.prototype
C.M=J.aO.prototype
C.c=J.ad.prototype
C.N=J.X.prototype
C.w=J.co.prototype
C.x=W.bB.prototype
C.n=J.aU.prototype
C.o=W.aV.prototype
C.z=new H.bh(H.ed("bh<w>"))
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.F=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.E=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.D=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.r=function(hooks) { return hooks; }

C.G=new P.dW()
C.b=new P.cS()
C.H=new P.cV()
C.J=new P.aK(0)
C.t=new V.B("GameInput.reset")
C.e=new V.B("GameInput.dropPiece")
C.f=new V.B("GameInput.rotatePiece")
C.h=new V.B("GameInput.movePieceLeft")
C.i=new V.B("GameInput.movePieceRight")
C.j=new V.B("GameInput.movePieceDown")
C.u=new V.B("GameInput.togglePause")
C.k=new V.B("GameInput.increaseSpeed")
C.l=new V.B("GameInput.decreaseSpeed")
C.O=H.h(t([0,1,2,3]),u.i)
C.P=H.h(t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),u.V)
C.Q=H.h(t([-2,-1,0,1,2,3,4,5,6,7,8]),u.i)
C.R=H.h(t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),u.V)
C.S=H.h(t([]),u.V)
C.v=H.h(t(["bind","if","ref","repeat","syntax"]),u.V)
C.m=H.h(t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),u.V)
C.T=new H.aM([27,C.t,80,C.u,107,C.k,187,C.k,109,C.l,189,C.l,32,C.e,87,C.f,65,C.h,68,C.i,83,C.j],u.L)
C.U=new H.aM([13,C.e,38,C.f,37,C.h,39,C.i,40,C.j],u.L)})();(function staticFields(){$.fw=null
$.a_=0
$.f6=null
$.f5=null
$.fY=null
$.fS=null
$.h7=null
$.ec=null
$.ei=null
$.eU=null
$.b6=null
$.bZ=null
$.c_=null
$.eN=!1
$.q=C.b
$.J=H.h([],H.ed("v<o>"))
$.aa=null
$.et=null
$.fa=null
$.f9=null
$.cM=P.hP(u.N,u.Y)
$.es=0
$.h6=function(){var t=u.i,s=u.c
return H.h([H.h([H.h([1,1],t),H.h([1,1],t)],s),H.h([H.h([0,0,0,0],t),H.h([2,2,2,2],t),H.h([0,0,0,0],t),H.h([0,0,0,0],t)],s),H.h([H.h([0,0,0],t),H.h([0,3,3],t),H.h([3,3,0],t)],s),H.h([H.h([0,0,0],t),H.h([4,4,0],t),H.h([0,4,4],t)],s),H.h([H.h([0,5,0],t),H.h([0,5,0],t),H.h([0,5,5],t)],s),H.h([H.h([0,6,0],t),H.h([0,6,0],t),H.h([6,6,0],t)],s),H.h([H.h([0,0,0],t),H.h([7,7,7],t),H.h([0,7,0],t)],s)],H.ed("v<t<t<m*>*>*>"))}()})();(function lazyInitializers(){var t=hunkHelpers.lazy,s=hunkHelpers.lazyOld
t($,"jp","hf",function(){return H.j0("_$dart_dartClosure")})
t($,"jy","hg",function(){return H.a4(H.dC({
toString:function(){return"$receiver$"}}))})
t($,"jz","hh",function(){return H.a4(H.dC({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"jA","hi",function(){return H.a4(H.dC(null))})
t($,"jB","hj",function(){return H.a4(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"jE","hm",function(){return H.a4(H.dC(void 0))})
t($,"jF","hn",function(){return H.a4(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"jD","hl",function(){return H.a4(H.fo(null))})
t($,"jC","hk",function(){return H.a4(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"jH","hp",function(){return H.a4(H.fo(void 0))})
t($,"jG","ho",function(){return H.a4(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"jJ","eY",function(){return P.hZ()})
t($,"jK","hq",function(){return P.fg(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
t($,"jo","he",function(){return P.hU("^\\S+$")})
s($,"jY","eZ",function(){return C.G})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.K,MediaError:J.K,NavigatorUserMediaError:J.K,OverconstrainedError:J.K,PositionError:J.K,Range:J.K,SQLError:J.K,HTMLAudioElement:W.d,HTMLBRElement:W.d,HTMLButtonElement:W.d,HTMLCanvasElement:W.d,HTMLContentElement:W.d,HTMLDListElement:W.d,HTMLDataElement:W.d,HTMLDataListElement:W.d,HTMLDetailsElement:W.d,HTMLDialogElement:W.d,HTMLDivElement:W.d,HTMLEmbedElement:W.d,HTMLFieldSetElement:W.d,HTMLHRElement:W.d,HTMLHeadElement:W.d,HTMLHeadingElement:W.d,HTMLHtmlElement:W.d,HTMLIFrameElement:W.d,HTMLImageElement:W.d,HTMLInputElement:W.d,HTMLLIElement:W.d,HTMLLabelElement:W.d,HTMLLegendElement:W.d,HTMLLinkElement:W.d,HTMLMapElement:W.d,HTMLMediaElement:W.d,HTMLMenuElement:W.d,HTMLMetaElement:W.d,HTMLMeterElement:W.d,HTMLModElement:W.d,HTMLOListElement:W.d,HTMLObjectElement:W.d,HTMLOptGroupElement:W.d,HTMLOptionElement:W.d,HTMLOutputElement:W.d,HTMLParagraphElement:W.d,HTMLParamElement:W.d,HTMLPictureElement:W.d,HTMLPreElement:W.d,HTMLProgressElement:W.d,HTMLQuoteElement:W.d,HTMLScriptElement:W.d,HTMLShadowElement:W.d,HTMLSlotElement:W.d,HTMLSourceElement:W.d,HTMLSpanElement:W.d,HTMLStyleElement:W.d,HTMLTableCaptionElement:W.d,HTMLTableCellElement:W.d,HTMLTableDataCellElement:W.d,HTMLTableHeaderCellElement:W.d,HTMLTableColElement:W.d,HTMLTextAreaElement:W.d,HTMLTimeElement:W.d,HTMLTitleElement:W.d,HTMLTrackElement:W.d,HTMLUListElement:W.d,HTMLUnknownElement:W.d,HTMLVideoElement:W.d,HTMLDirectoryElement:W.d,HTMLFontElement:W.d,HTMLFrameElement:W.d,HTMLFrameSetElement:W.d,HTMLMarqueeElement:W.d,HTMLElement:W.d,HTMLAnchorElement:W.aG,HTMLAreaElement:W.c5,HTMLBaseElement:W.aH,HTMLBodyElement:W.ar,CDATASection:W.W,CharacterData:W.W,Comment:W.W,ProcessingInstruction:W.W,Text:W.W,XMLDocument:W.at,Document:W.at,DOMException:W.db,DOMImplementation:W.cb,DOMTokenList:W.dc,Element:W.l,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,EventTarget:W.u,HTMLFormElement:W.ce,HTMLCollection:W.ac,HTMLFormControlsCollection:W.ac,HTMLOptionsCollection:W.ac,HTMLDocument:W.bl,KeyboardEvent:W.a1,Location:W.cl,DocumentFragment:W.e,ShadowRoot:W.e,DocumentType:W.e,Node:W.e,NodeList:W.bv,RadioNodeList:W.bv,HTMLSelectElement:W.cr,HTMLTableElement:W.bB,HTMLTableRowElement:W.ct,HTMLTableSectionElement:W.cu,HTMLTemplateElement:W.aT,CompositionEvent:W.E,FocusEvent:W.E,MouseEvent:W.E,DragEvent:W.E,PointerEvent:W.E,TextEvent:W.E,TouchEvent:W.E,WheelEvent:W.E,UIEvent:W.E,Window:W.aV,DOMWindow:W.aV,Attr:W.aW,NamedNodeMap:W.bN,MozNamedAttrMap:W.bN,SVGScriptElement:P.aS,SVGAElement:P.b,SVGAnimateElement:P.b,SVGAnimateMotionElement:P.b,SVGAnimateTransformElement:P.b,SVGAnimationElement:P.b,SVGCircleElement:P.b,SVGClipPathElement:P.b,SVGDefsElement:P.b,SVGDescElement:P.b,SVGDiscardElement:P.b,SVGEllipseElement:P.b,SVGFEBlendElement:P.b,SVGFEColorMatrixElement:P.b,SVGFEComponentTransferElement:P.b,SVGFECompositeElement:P.b,SVGFEConvolveMatrixElement:P.b,SVGFEDiffuseLightingElement:P.b,SVGFEDisplacementMapElement:P.b,SVGFEDistantLightElement:P.b,SVGFEFloodElement:P.b,SVGFEFuncAElement:P.b,SVGFEFuncBElement:P.b,SVGFEFuncGElement:P.b,SVGFEFuncRElement:P.b,SVGFEGaussianBlurElement:P.b,SVGFEImageElement:P.b,SVGFEMergeElement:P.b,SVGFEMergeNodeElement:P.b,SVGFEMorphologyElement:P.b,SVGFEOffsetElement:P.b,SVGFEPointLightElement:P.b,SVGFESpecularLightingElement:P.b,SVGFESpotLightElement:P.b,SVGFETileElement:P.b,SVGFETurbulenceElement:P.b,SVGFilterElement:P.b,SVGForeignObjectElement:P.b,SVGGElement:P.b,SVGGeometryElement:P.b,SVGGraphicsElement:P.b,SVGImageElement:P.b,SVGLineElement:P.b,SVGLinearGradientElement:P.b,SVGMarkerElement:P.b,SVGMaskElement:P.b,SVGMetadataElement:P.b,SVGPathElement:P.b,SVGPatternElement:P.b,SVGPolygonElement:P.b,SVGPolylineElement:P.b,SVGRadialGradientElement:P.b,SVGRectElement:P.b,SVGSetElement:P.b,SVGStopElement:P.b,SVGStyleElement:P.b,SVGSVGElement:P.b,SVGSwitchElement:P.b,SVGSymbolElement:P.b,SVGTSpanElement:P.b,SVGTextContentElement:P.b,SVGTextElement:P.b,SVGTextPathElement:P.b,SVGTextPositioningElement:P.b,SVGTitleElement:P.b,SVGUseElement:P.b,SVGViewElement:P.b,SVGGradientElement:P.b,SVGComponentTransferFunctionElement:P.b,SVGFEDropShadowElement:P.b,SVGMPathElement:P.b,SVGElement:P.b})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,TouchEvent:true,WheelEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.h4,[])
else F.h4([])})})()
//# sourceMappingURL=main.dart.js.map
