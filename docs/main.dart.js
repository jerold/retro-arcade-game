(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.kd(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.ke(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.fm(b)
return new s(c,this)}:function(){if(s===null)s=A.fm(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.fm(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={f5:function f5(){},
fQ(a){return new A.cH(a)},
fV(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dp(a,b,c){if(a==null)throw A.a(new A.bK(b,c.h("bK<0>")))
return a},
iE(a,b,c){var s="takeCount"
A.eY(b,s,t.S)
A.cG(b,s)
if(t.R.b(a))return new A.br(a,b,c.h("br<0>"))
return new A.aO(a,b,c.h("aO<0>"))},
iD(a,b,c){var s="count"
if(t.R.b(a)){A.eY(b,s,t.S)
A.cG(b,s)
return new A.bq(a,b,c.h("bq<0>"))}A.eY(b,s,t.S)
A.cG(b,s)
return new A.aN(a,b,c.h("aN<0>"))},
dL(){return new A.as("No element")},
im(){return new A.as("Too many elements")},
cC:function cC(a){this.a=a},
cH:function cH(a){this.a=a},
bK:function bK(a,b){this.a=a
this.$ti=b},
n:function n(){},
aq:function aq(){},
aL:function aL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.$ti=c},
bH:function bH(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ac:function ac(a,b,c){this.a=a
this.b=b
this.$ti=c},
af:function af(a,b,c){this.a=a
this.b=b
this.$ti=c},
bT:function bT(a,b,c){this.a=a
this.b=b
this.$ti=c},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
br:function br(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(a,b,c){this.a=a
this.b=b
this.$ti=c},
bt:function bt(a){this.$ti=a},
ij(a){if(typeof a=="number")return B.e.gB(a)
if(t.dd.b(a))return A.b0(a)
return A.hx(a)},
ik(a){return new A.dK(a)},
hF(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
k1(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
k(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aj(a)
if(typeof s!="string")throw A.a(A.cl(a,"object","toString method returned 'null'"))
return s},
b0(a){var s,r=$.fO
if(r==null)r=$.fO=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dT(a){return A.ix(a)},
ix(a){var s,r,q,p
if(a instanceof A.m)return A.P(A.U(a),null)
s=J.bg(a)
if(s===B.Q||s===B.S||t.ak.b(a)){r=B.t(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.P(A.U(a),null)},
S(a){throw A.a(A.hn(a))},
f(a,b){if(a==null)J.a6(a)
throw A.a(A.bf(a,b))},
bf(a,b){var s,r,q="index"
if(!A.fj(b))return new A.a2(!0,b,q,null)
s=A.aT(J.a6(a))
if(!(b<0)){if(typeof s!=="number")return A.S(s)
r=b>=s}else r=!0
if(r)return A.aY(b,a,q,null,s)
return A.fP(b,q)},
hn(a){return new A.a2(!0,a,null,null)},
a(a){var s,r
if(a==null)a=new A.cD()
s=new Error()
s.dartException=a
r=A.kf
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
kf(){return J.aj(this.dartException)},
aC(a){throw A.a(a)},
eV(a){throw A.a(A.aF(a))},
ae(a){var s,r,q,p,o,n
a=A.ka(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dY(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dZ(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
fX(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
f6(a,b){var s=b==null,r=s?null:b.method
return new A.cB(a,r,s?null:b.receiver)},
ai(a){if(a==null)return new A.dR(a)
if(a instanceof A.bu)return A.aB(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.aB(a,a.dartException)
return A.jB(a)},
aB(a,b){if(t.U.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.cv(r,16)&8191)===10)switch(q){case 438:return A.aB(a,A.f6(A.k(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.k(s)
return A.aB(a,new A.bL(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.hK()
n=$.hL()
m=$.hM()
l=$.hN()
k=$.hQ()
j=$.hR()
i=$.hP()
$.hO()
h=$.hT()
g=$.hS()
f=o.E(s)
if(f!=null)return A.aB(a,A.f6(A.I(s),f))
else{f=n.E(s)
if(f!=null){f.method="call"
return A.aB(a,A.f6(A.I(s),f))}else{f=m.E(s)
if(f==null){f=l.E(s)
if(f==null){f=k.E(s)
if(f==null){f=j.E(s)
if(f==null){f=i.E(s)
if(f==null){f=l.E(s)
if(f==null){f=h.E(s)
if(f==null){f=g.E(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.I(s)
return A.aB(a,new A.bL(s,f==null?e:f.method))}}}return A.aB(a,new A.cQ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bO()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.aB(a,new A.a2(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bO()
return a},
az(a){var s
if(a instanceof A.bu)return a.b
if(a==null)return new A.c9(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.c9(a)},
hx(a){if(a==null||typeof a!="object")return J.eW(a)
else return A.b0(a)},
jO(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.t(0,a[s],a[r])}return b},
k0(a,b,c,d,e,f){t.Y.a(a)
switch(A.aT(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(A.fH("Unsupported number of arguments for wrapped closure"))},
dq(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.k0)
a.$identity=s
return s},
ic(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
A.R(h)
s=h?Object.create(new A.cK().constructor.prototype):Object.create(new A.aW(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.fE(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.i8(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.fE(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
i8(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(A.R(b))throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.i6)}throw A.a("Error in functionType of tearoff")},
i9(a,b,c,d){var s=A.fD
switch(A.R(b)?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
fE(a,b,c,d){var s,r
if(A.R(c))return A.ib(a,b,d)
s=b.length
r=A.i9(s,d,a,b)
return r},
ia(a,b,c,d){var s=A.fD,r=A.i7
switch(A.R(b)?-1:a){case 0:throw A.a(new A.cI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
ib(a,b,c){var s,r
if($.fB==null)$.fB=A.fA("interceptor")
if($.fC==null)$.fC=A.fA("receiver")
s=b.length
r=A.ia(s,c,a,b)
return r},
fm(a){return A.ic(a)},
i6(a,b){return A.ev(v.typeUniverse,A.U(a.a),b)},
fD(a){return a.a},
i7(a){return a.b},
fA(a){var s,r,q,p=new A.aW("receiver","interceptor"),o=J.f4(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.a(A.bj("Field name "+a+" not found.",null))},
R(a){if(a==null)A.jD("boolean expression must not be null")
return a},
jD(a){throw A.a(new A.cS(a))},
kd(a){throw A.a(new A.cr(a))},
jT(a){return v.getIsolateTag(a)},
kY(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
k3(a){var s,r,q,p,o,n=A.I($.hr.$1(a)),m=$.eJ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eO[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.hd($.hm.$2(a,n))
if(q!=null){m=$.eJ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eO[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.eQ(s)
$.eJ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.eO[n]=s
return s}if(p==="-"){o=A.eQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hy(a,s)
if(p==="*")throw A.a(A.fY(n))
if(v.leafTags[n]===true){o=A.eQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hy(a,s)},
hy(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fq(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
eQ(a){return J.fq(a,!1,null,!!a.$iao)},
k6(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.eQ(s)
else return J.fq(s,c,null,null)},
jZ(){if(!0===$.fp)return
$.fp=!0
A.k_()},
k_(){var s,r,q,p,o,n,m,l
$.eJ=Object.create(null)
$.eO=Object.create(null)
A.jY()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hA.$1(o)
if(n!=null){m=A.k6(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jY(){var s,r,q,p,o,n,m=B.E()
m=A.be(B.F,A.be(B.G,A.be(B.u,A.be(B.u,A.be(B.H,A.be(B.I,A.be(B.J(B.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hr=new A.eL(p)
$.hm=new A.eM(o)
$.hA=new A.eN(n)},
be(a,b){return a(b)||b},
is(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.a(new A.dG("Illegal RegExp pattern ("+String(n)+")",a))},
ka(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bm:function bm(){},
aJ:function aJ(a,b){this.a=a
this.$ti=b},
dK:function dK(a){this.a=a},
dY:function dY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bL:function bL(a,b){this.a=a
this.b=b},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a){this.a=a},
dR:function dR(a){this.a=a},
bu:function bu(a,b){this.a=a
this.b=b},
c9:function c9(a){this.a=a
this.b=null},
aE:function aE(){},
cn:function cn(){},
co:function co(){},
cO:function cO(){},
cK:function cK(){},
aW:function aW(a,b){this.a=a
this.b=b},
cI:function cI(a){this.a=a},
cS:function cS(a){this.a=a},
ap:function ap(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dN:function dN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bA:function bA(a,b){this.a=a
this.$ti=b},
bB:function bB(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
eN:function eN(a){this.a=a},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iC(a,b){var s=b.c
return s==null?b.c=A.fg(a,b.y,!0):s},
fR(a,b){var s=b.c
return s==null?b.c=A.cc(a,"al",[b.y]):s},
fS(a){var s=a.x
if(s===6||s===7||s===8)return A.fS(a.y)
return s===11||s===12},
iB(a){return a.at},
fn(a){return A.eu(v.typeUniverse,a,!1)},
ay(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.ay(a,s,a0,a1)
if(r===s)return b
return A.h9(a,r,!0)
case 7:s=b.y
r=A.ay(a,s,a0,a1)
if(r===s)return b
return A.fg(a,r,!0)
case 8:s=b.y
r=A.ay(a,s,a0,a1)
if(r===s)return b
return A.h8(a,r,!0)
case 9:q=b.z
p=A.cj(a,q,a0,a1)
if(p===q)return b
return A.cc(a,b.y,p)
case 10:o=b.y
n=A.ay(a,o,a0,a1)
m=b.z
l=A.cj(a,m,a0,a1)
if(n===o&&l===m)return b
return A.fe(a,n,l)
case 11:k=b.y
j=A.ay(a,k,a0,a1)
i=b.z
h=A.jy(a,i,a0,a1)
if(j===k&&h===i)return b
return A.h7(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.cj(a,g,a0,a1)
o=b.y
n=A.ay(a,o,a0,a1)
if(f===g&&n===o)return b
return A.ff(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.a(A.du("Attempted to substitute unexpected RTI kind "+c))}},
cj(a,b,c,d){var s,r,q,p,o=b.length,n=A.ew(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ay(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jz(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ew(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ay(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jy(a,b,c,d){var s,r=b.a,q=A.cj(a,r,c,d),p=b.b,o=A.cj(a,p,c,d),n=b.c,m=A.jz(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.d2()
s.a=q
s.b=o
s.c=m
return s},
d(a,b){a[v.arrayRti]=b
return a},
jK(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jV(s)
return a.$S()}return null},
hv(a,b){var s
if(A.fS(b))if(a instanceof A.aE){s=A.jK(a)
if(s!=null)return s}return A.U(a)},
U(a){var s
if(a instanceof A.m){s=a.$ti
return s!=null?s:A.fh(a)}if(Array.isArray(a))return A.L(a)
return A.fh(J.bg(a))},
L(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
r(a){var s=a.$ti
return s!=null?s:A.fh(a)},
fh(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.jf(a,s)},
jf(a,b){var s=a instanceof A.aE?a.__proto__.__proto__.constructor:b,r=A.j4(v.typeUniverse,s.name)
b.$ccache=r
return r},
jV(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.eu(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jM(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.ca(a)
q=A.eu(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.ca(q):p},
je(a){var s,r,q,p=this,o=t.K
if(p===o)return A.bc(p,a,A.jj)
if(!A.ah(p))if(!(p===t.c))o=p===o
else o=!0
else o=!0
if(o)return A.bc(p,a,A.jm)
o=p.x
s=o===6?p.y:p
if(s===t.S)r=A.fj
else if(s===t.gR||s===t.di)r=A.ji
else if(s===t.N)r=A.jk
else r=s===t.v?A.hh:null
if(r!=null)return A.bc(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.k2)){p.r="$i"+q
if(q==="p")return A.bc(p,a,A.jh)
return A.bc(p,a,A.jl)}}else if(o===7)return A.bc(p,a,A.jc)
return A.bc(p,a,A.ja)},
bc(a,b,c){a.b=c
return a.b(b)},
jd(a){var s,r,q=this
if(!A.ah(q))if(!(q===t.c))s=q===t.K
else s=!0
else s=!0
if(s)r=A.j7
else if(q===t.K)r=A.j6
else r=A.jb
q.a=r
return q.a(a)},
eE(a){var s,r=a.x
if(!A.ah(a))if(!(a===t.c))if(!(a===t.k))if(r!==7)s=r===8&&A.eE(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ja(a){var s=this
if(a==null)return A.eE(s)
return A.E(v.typeUniverse,A.hv(a,s),null,s,null)},
jc(a){if(a==null)return!0
return this.y.b(a)},
jl(a){var s,r=this
if(a==null)return A.eE(r)
s=r.r
if(a instanceof A.m)return!!a[s]
return!!J.bg(a)[s]},
jh(a){var s,r=this
if(a==null)return A.eE(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.m)return!!a[s]
return!!J.bg(a)[s]},
kW(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.hf(a,s)},
jb(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.hf(a,s)},
hf(a,b){throw A.a(A.iV(A.h0(a,A.hv(a,b),A.P(b,null))))},
h0(a,b,c){var s=A.ct(a)
return s+": type '"+A.k(A.P(b==null?A.U(a):b,null))+"' is not a subtype of type '"+A.k(c)+"'"},
iV(a){return new A.cb("TypeError: "+a)},
K(a,b){return new A.cb("TypeError: "+A.h0(a,null,b))},
jj(a){return a!=null},
j6(a){return a},
jm(a){return!0},
j7(a){return a},
hh(a){return!0===a||!1===a},
kL(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a(A.K(a,"bool"))},
hc(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.K(a,"bool"))},
kM(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.K(a,"bool?"))},
kN(a){if(typeof a=="number")return a
throw A.a(A.K(a,"double"))},
kP(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.K(a,"double"))},
kO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.K(a,"double?"))},
fj(a){return typeof a=="number"&&Math.floor(a)===a},
kQ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a(A.K(a,"int"))},
aT(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.K(a,"int"))},
kR(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.K(a,"int?"))},
ji(a){return typeof a=="number"},
kS(a){if(typeof a=="number")return a
throw A.a(A.K(a,"num"))},
kU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.K(a,"num"))},
kT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.K(a,"num?"))},
jk(a){return typeof a=="string"},
kV(a){if(typeof a=="string")return a
throw A.a(A.K(a,"String"))},
I(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.K(a,"String"))},
hd(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.K(a,"String?"))},
ju(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=B.c.m(r,A.P(a[q],b))
return s},
hg(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=A.d([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)B.a.j(a6,"T"+(q+p))
for(o=t.X,n=t.c,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){j=a6.length
i=j-1-p
if(!(i>=0))return A.f(a6,i)
l=B.c.m(l+k,a6[i])
h=a7[p]
g=h.x
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=B.c.m(" extends ",A.P(h,a6))}l+=">"}else{l=""
r=null}o=a5.y
f=a5.z
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=A.P(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=B.c.m(a3,A.P(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=B.c.m(a3,A.P(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.fv(A.P(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+A.k(a1)},
P(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.P(a.y,b)
return s}if(l===7){r=a.y
s=A.P(r,b)
q=r.x
return J.fv(q===11||q===12?B.c.m("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+A.k(A.P(a.y,b))+">"
if(l===9){p=A.jA(a.y)
o=a.z
return o.length>0?p+("<"+A.ju(o,b)+">"):p}if(l===11)return A.hg(a,b,null)
if(l===12)return A.hg(a.y,b,a.z)
if(l===13){b.toString
n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
jA(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
j5(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
j4(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.eu(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cd(a,5,"#")
q=A.ew(s)
for(p=0;p<s;++p)q[p]=r
o=A.cc(a,b,q)
n[b]=o
return o}else return m},
j2(a,b){return A.ha(a.tR,b)},
j1(a,b){return A.ha(a.eT,b)},
eu(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.h4(A.h2(a,null,b,c))
r.set(b,s)
return s},
ev(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.h4(A.h2(a,b,c,!0))
q.set(c,r)
return r},
j3(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.fe(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
aw(a,b){b.a=A.jd
b.b=A.je
return b},
cd(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.Z(null,null)
s.x=b
s.at=c
r=A.aw(a,s)
a.eC.set(c,r)
return r},
h9(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.j_(a,b,r,c)
a.eC.set(r,s)
return s},
j_(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.ah(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.Z(null,null)
q.x=6
q.y=b
q.at=c
return A.aw(a,q)},
fg(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.iZ(a,b,r,c)
a.eC.set(r,s)
return s},
iZ(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.ah(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.eP(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.k)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.eP(q.y))return q
else return A.iC(a,b)}}p=new A.Z(null,null)
p.x=7
p.y=b
p.at=c
return A.aw(a,p)},
h8(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.iX(a,b,r,c)
a.eC.set(r,s)
return s},
iX(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.ah(b))if(!(b===t.c))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.cc(a,"al",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.Z(null,null)
q.x=8
q.y=b
q.at=c
return A.aw(a,q)},
j0(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.Z(null,null)
s.x=13
s.y=b
s.at=q
r=A.aw(a,s)
a.eC.set(q,r)
return r},
di(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
iW(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
cc(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.di(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.Z(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.aw(a,r)
a.eC.set(p,q)
return q},
fe(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.di(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.Z(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.aw(a,o)
a.eC.set(q,n)
return n},
h7(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.di(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.di(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.iW(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.Z(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.aw(a,p)
a.eC.set(r,o)
return o},
ff(a,b,c,d){var s,r=b.at+("<"+A.di(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.iY(a,b,c,r,d)
a.eC.set(r,s)
return s},
iY(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ew(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.ay(a,b,r,0)
m=A.cj(a,c,r,0)
return A.ff(a,n,m,c!==m)}}l=new A.Z(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.aw(a,l)},
h2(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
h4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=A.iQ(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.h3(a,r,g,f,!1)
else if(q===46)r=A.h3(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(A.av(a.u,a.e,f.pop()))
break
case 94:f.push(A.j0(a.u,f.pop()))
break
case 35:f.push(A.cd(a.u,5,"#"))
break
case 64:f.push(A.cd(a.u,2,"@"))
break
case 126:f.push(A.cd(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
A.fd(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(A.cc(p,n,o))
else{m=A.av(p,a.e,n)
switch(m.x){case 11:f.push(A.ff(p,m,o,a.n))
break
default:f.push(A.fe(p,m,o))
break}}break
case 38:A.iR(a,f)
break
case 42:l=a.u
f.push(A.h9(l,A.av(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(A.fg(l,A.av(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(A.h8(l,A.av(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new A.d2()
j=p.sEA
i=p.sEA
n=f.pop()
if(typeof n=="number")switch(n){case-1:j=f.pop()
break
case-2:i=f.pop()
break
default:f.push(n)
break}else f.push(n)
o=f.splice(a.p)
A.fd(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(A.h7(p,A.av(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
A.fd(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
A.iT(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return A.av(a.u,a.e,h)},
iQ(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
h3(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.j5(s,o.y)[p]
if(n==null)A.aC('No "'+p+'" in "'+A.iB(o)+'"')
d.push(A.ev(s,o,n))}else d.push(p)
return m},
iR(a,b){var s=b.pop()
if(0===s){b.push(A.cd(a.u,1,"0&"))
return}if(1===s){b.push(A.cd(a.u,4,"1&"))
return}throw A.a(A.du("Unexpected extended operation "+A.k(s)))},
av(a,b,c){if(typeof c=="string")return A.cc(a,c,a.sEA)
else if(typeof c=="number")return A.iS(a,b,c)
else return c},
fd(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.av(a,b,c[s])},
iT(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.av(a,b,c[s])},
iS(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.a(A.du("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.a(A.du("Bad index "+c+" for "+b.i(0)))},
E(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.ah(d))if(!(d===t.c))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.ah(b))return!1
if(b.x!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(A.E(a,c[b.y],c,d,e))return!0
p=d.x
if(r===6)return A.E(a,b.y,c,d,e)
if(p===6){s=d.y
return A.E(a,b,c,s,e)}if(r===8){if(!A.E(a,b.y,c,d,e))return!1
return A.E(a,A.fR(a,b),c,d,e)}if(r===7){s=A.E(a,b.y,c,d,e)
return s}if(p===8){if(A.E(a,b,c,d.y,e))return!0
return A.E(a,b,c,A.fR(a,d),e)}if(p===7){s=A.E(a,b,c,d.y,e)
return s}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
if(p===12){if(b===t.W)return!0
if(r!==12)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.E(a,k,c,j,e)||!A.E(a,j,e,k,c))return!1}return A.hi(a,b.y,c,d.y,e)}if(p===11){if(b===t.W)return!0
if(s)return!1
return A.hi(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.jg(a,b,c,d,e)}return!1},
hi(a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.E(a2,a3.y,a4,a5.y,a6))return!1
s=a3.z
r=a5.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.E(a2,p[h],a6,g,a4))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.E(a2,p[o+h],a6,g,a4))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.E(a2,k[h],a6,g,a4))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
if(a1<a0)continue
g=f[b-1]
if(!A.E(a2,e[a+2],a6,g,a4))return!1
break}}return!0},
jg(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ev(a,b,r[o])
return A.hb(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.hb(a,n,null,c,m,e)},
hb(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.E(a,r,d,q,f))return!1}return!0},
eP(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.ah(a))if(r!==7)if(!(r===6&&A.eP(a.y)))s=r===8&&A.eP(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
k2(a){var s
if(!A.ah(a))if(!(a===t.c))s=a===t.K
else s=!0
else s=!0
return s},
ah(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
ha(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ew(a){return a>0?new Array(a):v.typeUniverse.sEA},
Z:function Z(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
d2:function d2(){this.c=this.b=this.a=null},
ca:function ca(a){this.a=a},
d1:function d1(){},
cb:function cb(a){this.a=a},
iH(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.jE()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.dq(new A.e2(q),1)).observe(s,{childList:true})
return new A.e1(q,s,r)}else if(self.setImmediate!=null)return A.jF()
return A.jG()},
iI(a){self.scheduleImmediate(A.dq(new A.e3(t.M.a(a)),0))},
iJ(a){self.setImmediate(A.dq(new A.e4(t.M.a(a)),0))},
iK(a){A.fa(B.O,t.M.a(a))},
fa(a,b){var s=B.d.a3(a.a,1000)
return A.iU(s<0?0:s,b)},
iU(a,b){var s=new A.df()
s.bL(a,b)
return s},
eD(a){return new A.cT(new A.z($.v,a.h("z<0>")),a.h("cT<0>"))},
eA(a,b){a.$2(0,null)
b.b=!0
return b.a},
he(a,b){A.j8(a,b)},
ez(a,b){var s,r
b.toString
s=b.$ti
s.h("1/?").a(a)
if(!b.b)b.a.bQ(a)
else{r=b.a
if(s.h("al<1>").b(a))r.aX(a)
else r.af(s.c.a(a))}},
ey(a,b){var s,r=A.ai(a),q=A.az(a)
b.toString
if(q==null)q=A.fz(r)
s=b.a
if(b.b)s.O(r,q)
else s.bR(r,q)},
j8(a,b){var s,r,q=new A.eB(b),p=new A.eC(b)
if(a instanceof A.z)a.be(q,p,t.z)
else{s=t.z
if(t.f.b(a))a.aL(q,p,s)
else{r=new A.z($.v,t.d)
r.a=8
r.c=a
r.be(q,p,s)}}},
eG(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.v.aJ(new A.eH(s),t.H,t.S,t.z)},
dv(a,b){var s=A.dp(a,"error",t.K)
return new A.bl(s,b==null?A.fz(a):b)},
fz(a){var s
if(t.U.b(a)){s=a.gZ()
if(s!=null)return s}return B.M},
fI(a,b){var s=new A.z($.v,b.h("z<0>"))
A.f9(a,new A.dH(null,s,b))
return s},
fb(a,b){var s,r,q
for(s=t.d;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.a0()
b.ad(a)
A.ba(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.b9(q)}},
ba(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.f;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.dl(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.ba(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.dl(i.a,i.b)
return}f=$.v
if(f!==g)$.v=g
else f=null
b=b.c
if((b&15)===8)new A.ei(p,c,m).$0()
else if(n){if((b&1)!==0)new A.eh(p,i).$0()}else if((b&2)!==0)new A.eg(c,p).$0()
if(f!=null)$.v=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.h("al<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if(b instanceof A.z)if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.a1(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.fb(b,e)
else e.aW(b)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.a1(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
js(a,b){var s
if(t.C.b(a))return b.aJ(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.a(A.cl(a,"onError",u.c))},
jp(){var s,r
for(s=$.bd;s!=null;s=$.bd){$.ci=null
r=s.b
$.bd=r
if(r==null)$.ch=null
s.a.$0()}},
jx(){$.fi=!0
try{A.jp()}finally{$.ci=null
$.fi=!1
if($.bd!=null)$.ft().$1(A.hp())}},
hl(a){var s=new A.cU(a),r=$.ch
if(r==null){$.bd=$.ch=s
if(!$.fi)$.ft().$1(A.hp())}else $.ch=r.b=s},
jw(a){var s,r,q,p=$.bd
if(p==null){A.hl(a)
$.ci=$.ch
return}s=new A.cU(a)
r=$.ci
if(r==null){s.b=p
$.bd=$.ci=s}else{q=r.b
s.b=q
$.ci=r.b=s
if(q==null)$.ch=s}},
hC(a){var s,r=null,q=$.v
if(B.b===q){A.ax(r,r,B.b,a)
return}s=!1
if(s){A.ax(r,r,q,t.M.a(a))
return}A.ax(r,r,q,t.M.a(q.aC(a)))},
kv(a,b){A.dp(a,"stream",t.K)
return new A.db(b.h("db<0>"))},
jv(a){return},
iL(a,b){if(b==null)b=A.jI()
if(t.da.b(b))return a.aJ(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.y.a(b)
throw A.a(A.bj("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
jr(a,b){A.dl(a,b)},
jq(){},
f9(a,b){var s=$.v
if(s===B.b)return A.fa(a,t.M.a(b))
return A.fa(a,t.M.a(s.aC(b)))},
dl(a,b){A.jw(new A.eF(a,b))},
hj(a,b,c,d,e){var s,r=$.v
if(r===c)return d.$0()
$.v=c
s=r
try{r=d.$0()
return r}finally{$.v=s}},
hk(a,b,c,d,e,f,g){var s,r=$.v
if(r===c)return d.$1(e)
$.v=c
s=r
try{r=d.$1(e)
return r}finally{$.v=s}},
jt(a,b,c,d,e,f,g,h,i){var s,r=$.v
if(r===c)return d.$2(e,f)
$.v=c
s=r
try{r=d.$2(e,f)
return r}finally{$.v=s}},
ax(a,b,c,d){t.M.a(d)
if(B.b!==c)d=c.aC(d)
A.hl(d)},
e2:function e2(a){this.a=a},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a){this.a=a},
e4:function e4(a){this.a=a},
df:function df(){this.b=null},
et:function et(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=!1
this.$ti=b},
eB:function eB(a){this.a=a},
eC:function eC(a){this.a=a},
eH:function eH(a){this.a=a},
bl:function bl(a,b){this.a=a
this.b=b},
bU:function bU(a,b){this.a=a
this.$ti=b},
ag:function ag(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
bV:function bV(){},
b5:function b5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
z:function z(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
e8:function e8(a,b){this.a=a
this.b=b},
ef:function ef(a,b){this.a=a
this.b=b},
eb:function eb(a){this.a=a},
ec:function ec(a){this.a=a},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(a,b){this.a=a
this.b=b},
ee:function ee(a,b){this.a=a
this.b=b},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(a){this.a=a},
eh:function eh(a,b){this.a=a
this.b=b},
eg:function eg(a,b){this.a=a
this.b=b},
cU:function cU(a){this.a=a
this.b=null},
at:function at(){},
dW:function dW(a,b){this.a=a
this.b=b},
dX:function dX(a,b){this.a=a
this.b=b},
T:function T(){},
b8:function b8(){},
bW:function bW(){},
b7:function b7(){},
bb:function bb(){},
cZ:function cZ(){},
bX:function bX(a,b){this.b=a
this.a=null
this.$ti=b},
c5:function c5(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
en:function en(a,b){this.a=a
this.b=b},
b9:function b9(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
db:function db(a){this.$ti=a},
cf:function cf(){},
eF:function eF(a,b){this.a=a
this.b=b},
d9:function d9(){},
eo:function eo(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
it(a,b,c,d){return A.iO(A.jL(),a,b,c,d)},
iu(a,b){return new A.ap(a.h("@<0>").v(b).h("ap<1,2>"))},
iO(a,b,c,d,e){var s=c!=null?c:new A.em(d)
return new A.c1(a,b,s,d.h("@<0>").v(e).h("c1<1,2>"))},
bC(a){return new A.c2(a.h("c2<0>"))},
fc(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
iP(a,b,c){var s=new A.aS(a,b,c.h("aS<0>"))
s.c=a.e
return s},
j9(a,b){return J.F(a,b)},
il(a,b,c){var s,r
if(A.fk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.d([],t.s)
B.a.j($.Q,a)
try{A.jn(a,s)}finally{if(0>=$.Q.length)return A.f($.Q,-1)
$.Q.pop()}r=A.fU(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
f2(a,b,c){var s,r
if(A.fk(a))return b+"..."+c
s=new A.cL(b)
B.a.j($.Q,a)
try{r=s
r.a=A.fU(r.a,a,", ")}finally{if(0>=$.Q.length)return A.f($.Q,-1)
$.Q.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fk(a){var s,r
for(s=$.Q.length,r=0;r<s;++r)if(a===$.Q[r])return!0
return!1},
jn(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.l())return
s=A.k(l.gn())
B.a.j(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.f(b,-1)
r=b.pop()
if(0>=b.length)return A.f(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.l()){if(j<=4){B.a.j(b,A.k(p))
return}r=A.k(p)
if(0>=b.length)return A.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.l();p=o,o=n){n=l.gn();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.k(p)
r=A.k(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
fL(a,b){var s,r,q=A.bC(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.eV)(a),++r)q.j(0,b.a(a[r]))
return q},
f8(a){var s,r={}
if(A.fk(a))return"{...}"
s=new A.cL("")
try{B.a.j($.Q,a)
s.a+="{"
r.a=!0
a.L(0,new A.dO(r,s))
s.a+="}"}finally{if(0>=$.Q.length)return A.f($.Q,-1)
$.Q.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
c1:function c1(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
em:function em(a){this.a=a},
c2:function c2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d6:function d6(a){this.a=a
this.c=this.b=null},
aS:function aS(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bD:function bD(){},
q:function q(){},
bF:function bF(){},
dO:function dO(a,b){this.a=a
this.b=b},
C:function C(){},
J:function J(){},
bM:function bM(){},
c6:function c6(){},
c3:function c3(){},
c7:function c7(){},
cg:function cg(){},
ie(a){if(a instanceof A.aE)return a.i(0)
return"Instance of '"+A.k(A.dT(a))+"'"},
ig(a,b){a=A.a(a)
a.stack=J.aj(b)
throw a
throw A.a("unreachable")},
aM(a,b,c,d){var s,r=c?J.f3(a,d):J.io(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
fM(a,b,c){var s,r=A.d([],c.h("u<0>"))
for(s=a.gu(a);s.l();)B.a.j(r,c.a(s.gn()))
if(b)return r
return J.f4(r,c)},
f7(a,b,c){var s=A.iv(a,c)
return s},
iv(a,b){var s,r
if(Array.isArray(a))return A.d(a.slice(0),b.h("u<0>"))
s=A.d([],b.h("u<0>"))
for(r=J.a5(a);r.l();)B.a.j(s,r.gn())
return s},
fN(a,b,c){var s,r=J.f3(a,c)
for(s=0;s<a;++s)B.a.t(r,s,b.$1(s))
return r},
iA(a){return new A.cA(a,A.is(a,!1,!0,!1,!1,!1))},
fU(a,b,c){var s=J.a5(b)
if(!s.l())return a
if(c.length===0){do a+=A.k(s.gn())
while(s.l())}else{a+=A.k(s.gn())
for(;s.l();)a=a+c+A.k(s.gn())}return a},
dB(a){return new A.bp(1000*a)},
ct(a){if(typeof a=="number"||A.hh(a)||a==null)return J.aj(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ie(a)},
ih(a,b){A.dp(a,"error",t.K)
A.dp(b,"stackTrace",t.l)
A.ig(a,b)
A.fQ(u.g)},
du(a){return new A.bk(a)},
bj(a,b){return new A.a2(!1,null,b,a)},
cl(a,b,c){return new A.a2(!0,a,b,c)},
eY(a,b,c){return a},
iy(a){var s=null
return new A.b1(s,s,!1,s,s,a)},
fP(a,b){return new A.b1(null,null,!0,a,b,"Value not in range")},
dU(a,b,c,d,e){return new A.b1(b,c,!0,a,d,"Invalid value")},
iz(a,b,c){if(0>a||a>c)throw A.a(A.dU(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.dU(b,a,c,"end",null))
return b}return c},
cG(a,b){if(a<0)throw A.a(A.dU(a,0,null,b,null))
return a},
aY(a,b,c,d,e){var s=A.aT(e==null?J.a6(b):e)
return new A.cx(s,!0,a,c,"Index out of range")},
A(a){return new A.cR(a)},
fY(a){return new A.cP(a)},
dV(a){return new A.as(a)},
aF(a){return new A.cp(a)},
fH(a){return new A.e7(a)},
eT(a){A.k9(a)},
bp:function bp(a){this.a=a},
e5:function e5(){},
t:function t(){},
bk:function bk(a){this.a=a},
a4:function a4(){},
cD:function cD(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cx:function cx(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cR:function cR(a){this.a=a},
cP:function cP(a){this.a=a},
as:function as(a){this.a=a},
cp:function cp(a){this.a=a},
cE:function cE(){},
bO:function bO(){},
cr:function cr(a){this.a=a},
e7:function e7(a){this.a=a},
dG:function dG(a,b){this.a=a
this.b=b},
i:function i(){},
y:function y(){},
D:function D(){},
m:function m(){},
dc:function dc(){},
cL:function cL(a){this.a=a},
id(a,b,c){var s,r=document.body
r.toString
s=B.r.D(r,a,b,c)
s.toString
r=t.ac
r=new A.af(new A.H(s),r.h("w(q.E)").a(new A.dC()),r.h("af<q.E>"))
return t.h.a(r.gN(r))},
bs(a){var s,r,q="element tag unavailable"
try{s=J.a1(a)
if(typeof s.gbw(a)=="string")q=s.gbw(a)}catch(r){}return q},
c0(a,b,c,d,e){var s=A.jC(new A.e6(c),t.B),r=s!=null
if(r&&!0){t.o.a(s)
if(r)J.hY(a,b,s,!1)}return new A.c_(a,b,s,!1,e.h("c_<0>"))},
h1(a){var s=document.createElement("a"),r=new A.da(s,window.location)
r=new A.aR(r)
r.bJ(a)
return r},
iM(a,b,c,d){t.h.a(a)
A.I(b)
A.I(c)
t.G.a(d)
return!0},
iN(a,b,c,d){var s,r,q
t.h.a(a)
A.I(b)
A.I(c)
s=t.G.a(d).a
r=s.a
B.C.scM(r,c)
q=r.hostname
s=s.b
if(!(q==s.hostname&&r.port==s.port&&r.protocol==s.protocol))if(q==="")if(r.port===""){s=r.protocol
s=s===":"||s===""}else s=!1
else s=!1
else s=!0
return s},
h6(){var s=t.N,r=A.fL(B.y,s),q=A.d(["TEMPLATE"],t.s),p=t.d0.a(new A.es())
s=new A.de(r,A.bC(s),A.bC(s),A.bC(s),null)
s.bK(null,new A.ac(B.y,p,t.fj),q,null)
return s},
jC(a,b){var s=$.v
if(s===B.b)return a
return s.cG(a,b)},
e:function e(){},
aU:function aU(){},
ck:function ck(){},
aV:function aV(){},
aD:function aD(){},
a3:function a3(){},
bn:function bn(){},
dx:function dx(){},
aG:function aG(){},
dz:function dz(){},
cs:function cs(){},
dA:function dA(){},
cW:function cW(a,b){this.a=a
this.b=b},
l:function l(){},
dC:function dC(){},
b:function b(){},
x:function x(){},
cv:function cv(){},
am:function am(){},
bw:function bw(){},
aa:function aa(){},
bE:function bE(){},
H:function H(a){this.a=a},
h:function h(){},
bI:function bI(){},
cJ:function cJ(){},
bP:function bP(){},
cM:function cM(){},
cN:function cN(){},
b3:function b3(){},
N:function N(){},
ad:function ad(){},
bR:function bR(){},
O:function O(){},
b6:function b6(){},
c4:function c4(){},
cV:function cV(){},
d_:function d_(a){this.a=a},
d0:function d0(a){this.a=a},
f0:function f0(a,b){this.a=a
this.$ti=b},
bZ:function bZ(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c_:function c_(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
e6:function e6(a){this.a=a},
aR:function aR(a){this.a=a},
B:function B(){},
bJ:function bJ(a){this.a=a},
dQ:function dQ(a){this.a=a},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(){},
eq:function eq(){},
er:function er(){},
de:function de(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
es:function es(){},
dd:function dd(){},
aH:function aH(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
da:function da(a,b){this.a=a
this.b=b},
ce:function ce(a){this.a=a
this.b=0},
ex:function ex(a){this.a=a},
cX:function cX(){},
d4:function d4(){},
d5:function d5(){},
d7:function d7(){},
d8:function d8(){},
dg:function dg(){},
dh:function dh(){},
dj:function dj(){},
dk:function dk(){},
cq:function cq(){},
dw:function dw(a){this.a=a},
cu:function cu(a,b){this.a=a
this.b=b},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
ek:function ek(){},
ar:function ar(a,b,c){this.a=a
this.b=b
this.$ti=c},
b2:function b2(){},
cm:function cm(a){this.a=a},
c:function c(){},
a8:function a8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=c
_.w=_.r=_.f=null},
dy:function dy(){},
f1(a,b){var s,r=new A.cw(A.dr(),A.fN(4,A.hG(),t.e),A.d([],t.i))
r.as=a
s=a.a
new A.bU(s,A.r(s).h("bU<1>")).cQ(r.gc0())
r.Q=b
b.aF(r.c)
return r},
cw:function cw(a,b,c){var _=this
_.a=!1
_.b=400
_.c=a
_.d=b
_.e=c
_.w=_.r=_.f=0
_.at=_.as=_.Q=_.z=_.y=_.x=null},
aX:function aX(){},
b_:function b_(){},
bo:function bo(){},
cY:function cY(){},
dI:function dI(){var _=this
_.e=_.c=_.b=_.a=null},
dJ:function dJ(){},
hD(a){switch(a){case 1:return 40
case 2:return 100
case 3:return 300
case 4:return 1200}return 0},
hB(a){return $.fu().bs(7)},
eR(a,b,c,d,e){var s,r
if(typeof b!=="number")return b.m()
s=0
for(;r=b+s,A.V(a,r+1,c,d,e);)++s
return r},
hs(a){var s,r,q
for(s=0,r=0;r<24;++r){for(q=0;q<10;++q){if(!(r<a.length))return A.f(a,r)
if(!J.F(J.W(a[r],q),0))return s}++s}return s},
hH(a){var s,r,q,p=A.aM(10,!0,!1,t.b)
for(s=0,r=0;r<24;++r)for(q=0;q<10;++q){if(!(r<a.length))return A.f(a,r)
if(J.F(J.W(a[r],q),0)){if(!p[q])++s}else B.a.t(p,q,!1)}return s},
V(a,b,c,d,e){var s,r,q,p,o,n=A.eU(c,d)
for(s=0;s<n.length;++s){r=0
while(!0){if(!(s<n.length))return A.f(n,s)
q=n[s]
if(!(r<q.length))break
if(typeof a!=="number")return A.S(a)
p=r+a
if(typeof b!=="number")return A.S(b)
o=s+b
if(!J.F(q[r],0)){if(p>=0&&p<10)q=!(o>=0&&o<24)
else q=!0
if(q)return!1
else{if(!(o>=0&&o<e.length))return A.f(e,o)
if(!J.F(J.W(e[o],p),0))return!1}}++r}}return!0},
hw(a){var s,r,q,p=A.d([],t.i)
for(s=0;s<24;++s){for(r=!0,q=0;q<10;++q){if(!(s<a.length))return A.f(a,s)
if(J.F(J.W(a[s],q),0))r=!1}if(r)B.a.j(p,s)}return p},
fl(a,b){var s,r,q,p,o,n,m=A.dm(a,null)
for(s=b.length-1;s>=0;--s){if(!(s<b.length))return A.f(b,s)
B.a.bt(m,b[s])}for(r=b.length,q=t.e,p=A.L(m).c,o=0;o<b.length;b.length===r||(0,A.eV)(b),++o){n=p.a(A.aM(10,0,!1,q))
if(!!m.fixed$length)A.aC(A.A("insert"))
m.splice(0,0,n)}return m},
fr(a,b){var s,r,q,p,o,n=A.d([],t._)
for(s=t.i,r=0;r<24;++r){B.a.j(n,A.d([],s))
for(q=0;q<10;++q){if(!(r<n.length))return A.f(n,r)
p=n[r]
if(!(r<b.length))return A.f(b,r)
if(!J.F(J.W(b[r],q),0)){if(!(r<b.length))return A.f(b,r)
o=J.W(b[r],q)}else{if(!(r<a.length))return A.f(a,r)
o=J.W(a[r],q)}B.a.j(p,o)}}return n},
kc(a,b){var s,r
if(a.length!==b.length)return!1
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.f(b,s)
if(!J.F(r,b[s]))return!1}return!0},
dn(a,b,c,d,e){var s,r,q,p,o,n,m=A.dm(e,null),l=A.eU(c,d)
for(s=0;s<l.length;++s){r=0
while(!0){if(!(s<l.length))return A.f(l,s)
q=l[s]
if(!(r<q.length))break
if(typeof b!=="number")return A.S(b)
p=s+b
if(typeof a!=="number")return A.S(a)
o=r+a
if(!J.F(q[r],0))q=o>=0&&o<10&&p>=0&&p<24
else q=!1
if(q){if(!(p>=0&&p<m.length))return A.f(m,p)
q=m[p]
if(!(s<l.length))return A.f(l,s)
n=l[s]
if(!(r<n.length))return A.f(n,r)
J.hX(q,o,n[r])}++r}}return m},
dr(){var s,r,q=A.d([],t._)
for(s=t.e,r=0;r<24;++r)B.a.j(q,A.aM(10,0,!1,s))
return q},
dm(a,b){var s,r,q,p,o,n,m=A.d([],t._)
for(s=b==null,r=t.i,q=0;q<24;++q){B.a.j(m,A.d([],r))
for(p=0;p<10;++p){if(!(q<a.length))return A.f(a,q)
o=J.F(J.W(a[q],p),0)
n=m.length
if(o){if(!(q<n))return A.f(m,q)
J.fw(m[q],0)}else{if(!(q<n))return A.f(m,q)
o=m[q]
if(s){if(!(q<a.length))return A.f(a,q)
n=J.W(a[q],p)}else n=b
J.fw(o,n)}}}return m},
kg(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=$.hW()
h=(h&&B.a).p(h,c)
if(!(b<h.length))return A.f(h,b)
s=h[b]
h=$.hV()
h=(h&&B.a).p(h,c)
if(!(b<h.length))return A.f(h,b)
r=h[b]
for(h=s.length,q=r.length,p=d.length,o=0,c=0;c<h;++c){if(typeof a!=="number")return a.m()
n=a+c
if(n>=0&&n<10){if(!(c<q))return A.f(r,c)
m=A.R(r[c])}else m=!1
if(m){if(!(n>=0&&n<p))return A.f(d,n)
m=d[n]
l=s[c]
if(typeof l!=="number")return A.S(l)
k=m-l
if(k>o)o=k}}for(j=0,c=0;c<h;++c){if(typeof a!=="number")return a.m()
n=a+c
if(n>=0&&n<10){if(!(c<q))return A.f(r,c)
m=A.R(r[c])}else m=!1
if(m){m=s[c]
if(typeof m!=="number")return m.m()
if(!(n>=0&&n<p))return A.f(d,n)
i=Math.abs(m+o-d[n])}else i=0
j+=i}return j},
jJ(a){var s,r,q,p,o,n=A.d([],t.i)
for(s=0,r=0;r<10;++r){q=0
while(!0){p=q+1
if(p<24){if(!(p<a.length))return A.f(a,p)
o=J.F(J.W(a[p],r),0)}else o=!1
if(!o)break
q=p}if(q>s)s=q
B.a.j(n,q)}for(r=0;r<10;++r){if(!(r<n.length))return A.f(n,r)
B.a.t(n,r,s-n[r])}return n},
eU(a,b){var s,r=B.a.p($.hz,b)
if(typeof a!=="number")return A.S(a)
s=0
for(;s<a;++s)r=A.kb(r)
return r},
kb(a){var s,r,q,p,o,n,m=a.length,l=A.d([],t._)
for(s=m-1,r=t.i,q=0;q<m;++q){B.a.j(l,A.d([],r))
for(p=0;p<m;++p){if(!(q<l.length))return A.f(l,q)
o=l[q]
n=s-p
if(!(n>=0&&n<a.length))return A.f(a,n)
n=a[n]
if(!(q<n.length))return A.f(n,q)
B.a.j(o,n[q])}}return l},
ht(a){switch(a){case 0:return 4
default:return 3}},
hu(a){switch(a){case 1:case 2:case 3:case 6:return-1
default:return 0}},
jR(){var s,r,q,p,o=A.d([],t.I)
for(s=t._,r=0;r<7;++r){B.a.j(o,A.d([],s))
for(q=0;q<$.eS[r];++q){p=A.eU(q,r)
if(!(r<o.length))return A.f(o,r)
B.a.j(o[r],A.jP(p))}}return o},
jP(a){var s,r,q,p,o=A.aM(a.length,0,!1,t.e),n=a.length,m=A.aM(n,!1,!1,t.b)
for(s=a.length-1,r=null;s>=0;--s)for(q=0;p=a.length,q<p;++q){if(!(s<p))return A.f(a,s)
p=a[s]
if(!(q<p.length))return A.f(p,q)
if(!J.F(p[q],0)){if(!(q<n))return A.f(m,q)
p=!m[q]}else p=!1
if(p){if(r==null)r=s
B.a.t(o,q,r-s)
B.a.t(m,q,!0)}}return o},
jQ(){var s,r,q,p,o=A.d([],t.ch)
for(s=t.bB,r=0;r<7;++r){B.a.j(o,A.d([],s))
for(q=0;q<$.eS[r];++q){p=A.eU(q,r)
if(!(r<o.length))return A.f(o,r)
B.a.j(o[r],A.jU(p))}}return o},
jU(a){var s,r,q,p=A.aM(a.length,!1,!1,t.b)
for(s=0;s<a.length;++s)for(r=0;q=a.length,r<q;++r){if(!(s<q))return A.f(a,s)
q=a[s]
if(!(r<q.length))return A.f(q,r)
if(!J.F(q[r],0))B.a.t(p,r,!0)}return p},
G:function G(a){this.b=a},
k4(){var s,r,q,p,o,n=null
A.hE()
s=t.i
A.f1(A.fZ(B.X),new A.b4("#game-1",A.d([],s))).a9(0)
A.f1(A.fZ(B.z),new A.b4("#game-2",A.d([],s))).a9(0)
r=new A.bi(n,n,n,new A.b5(n,n,t.m))
r.f=2
q=document.body
q.toString
p=t.j
o=p.h("~(1)?").a(r.gao())
t.Z.a(null)
A.c0(q,"keydown",o,!1,p.c)
A.f1(r,new A.b4("#game-3",A.d([],s))).a9(0)},
hE(){var s,r="#game-1",q="none",p="#game-2",o="flex",n="#game-3",m=document,l=m.baseURI.split("/#/")
switch(B.a.gcP(l)){case"p1":s=m.querySelector(r).style
s.display=q
s=m.querySelector(p).style
s.display=o
m=m.querySelector(n).style
m.display=q
break
case"c1":s=m.querySelector(r).style
s.display=q
s=m.querySelector(p).style
s.display=q
m=m.querySelector(n).style
m.display=o
break
case"pvp":s=m.querySelector(r).style
s.display=o
s=m.querySelector(p).style
s.display=o
m=m.querySelector(n).style
m.display=q
break
case"pvc":s=m.querySelector(r).style
s.display=q
s=m.querySelector(p).style
s.display=o
m=m.querySelector(n).style
m.display=o
break
default:m=window.location;(m&&B.W).cD(m,A.k(B.a.gq(l))+"#/p1")
A.hE()
break}},
fZ(a){var s,r,q=new A.bS(a,new A.b5(null,null,t.m)),p=document,o=p.body
o.toString
s=t.j
r=s.h("~(1)?").a(q.gao())
t.Z.a(null)
A.c0(o,"keydown",r,!1,s.c)
if(a===B.z){o=p.body
o.toString
s=t.b1
r=s.h("~(1)?")
s=s.c
A.c0(o,"touchstart",r.a(q.gcc()),!1,s)
o=p.body
o.toString
A.c0(o,"touchmove",r.a(q.gca()),!1,s)
p=p.body
p.toString
A.c0(p,"touchend",r.a(q.gc8()),!1,s)}return q},
ho(a){var s=A.L(a)
return new A.X(a,s.h("i<j*>(1)").a(new A.eI()),s.h("X<1,j*>")).cO(0)},
k8(a){return'<div class="pixel '+A.fs(A.aT(a),!1)+'"></div>'},
k7(a){switch(a){case 2:return"x2"
case 4:return"x4"
default:return"x3"}},
fs(a,b){switch(a){case 0:return b?"q-empty":"empty"
case-1:return"shadow"
case-2:return"predict"
default:return"piece-"+A.k(a)}},
bS:function bS(a,b){var _=this
_.d=a
_.f=_.e=null
_.a=b
_.b=!1
_.c=320},
bi:function bi(a,b,c,d){var _=this
_.r=_.f=_.e=_.d=null
_.w=!1
_.a$=a
_.b$=b
_.c$=c
_.a=d
_.b=!1
_.c=320},
b4:function b4(a,b){this.a=a
this.b=b},
e0:function e0(){},
e_:function e_(){},
eI:function eI(){},
k9(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
ke(a){return A.aC(new A.cC("Field '"+A.k(a)+"' has been assigned during initialization."))}},J={
fq(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eK(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.fp==null){A.jZ()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.a(A.fY("Return interceptor for "+A.k(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.el
if(o==null)o=$.el=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.k3(a)
if(p!=null)return p
if(typeof a=="function")return B.R
s=Object.getPrototypeOf(a)
if(s==null)return B.A
if(s===Object.prototype)return B.A
if(typeof q=="function"){o=$.el
if(o==null)o=$.el=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.q,enumerable:false,writable:true,configurable:true})
return B.q}return B.q},
io(a,b){if(a<0||a>4294967295)throw A.a(A.dU(a,0,4294967295,"length",null))
return J.ip(new Array(a),b)},
f3(a,b){if(a<0)throw A.a(A.bj("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.h("u<0>"))},
fJ(a,b){return A.d(new Array(a),b.h("u<0>"))},
ip(a,b){return J.f4(A.d(a,b.h("u<0>")),b)},
f4(a,b){a.fixed$length=Array
return a},
fK(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
iq(a,b){var s,r
for(s=a.length;b<s;){r=B.c.aZ(a,b)
if(r!==32&&r!==13&&!J.fK(r))break;++b}return b},
ir(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.c.bj(a,s)
if(r!==32&&r!==13&&!J.fK(r))break}return b},
bg(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.by.prototype
return J.cz.prototype}if(typeof a=="string")return J.an.prototype
if(a==null)return J.bz.prototype
if(typeof a=="boolean")return J.cy.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof A.m)return a
return J.eK(a)},
fo(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof A.m)return a
return J.eK(a)},
ds(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof A.m)return a
return J.eK(a)},
jS(a){if(typeof a=="number")return J.aZ.prototype
if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(!(a instanceof A.m))return J.aP.prototype
return a},
hq(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(!(a instanceof A.m))return J.aP.prototype
return a},
a1(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof A.m)return a
return J.eK(a)},
fv(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jS(a).m(a,b)},
F(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bg(a).K(a,b)},
W(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.k1(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fo(a).p(a,b)},
hX(a,b,c){return J.ds(a).t(a,b,c)},
hY(a,b,c,d){return J.a1(a).bO(a,b,c,d)},
hZ(a){return J.a1(a).bV(a)},
i_(a,b,c){return J.a1(a).cn(a,b,c)},
fw(a,b){return J.ds(a).j(a,b)},
dt(a,b){return J.ds(a).C(a,b)},
i0(a){return J.a1(a).gcE(a)},
i1(a){return J.a1(a).gaD(a)},
bh(a){return J.a1(a).gbh(a)},
eW(a){return J.bg(a).gB(a)},
a5(a){return J.ds(a).gu(a)},
a6(a){return J.fo(a).gk(a)},
i2(a,b,c){return J.ds(a).br(a,b,c)},
eX(a){return J.a1(a).cW(a)},
i3(a,b){return J.a1(a).cY(a,b)},
i4(a,b){return J.a1(a).sc3(a,b)},
fx(a,b){return J.a1(a).saG(a,b)},
i5(a){return J.hq(a).d3(a)},
aj(a){return J.bg(a).i(a)},
fy(a){return J.hq(a).d4(a)},
bx:function bx(){},
cy:function cy(){},
bz:function bz(){},
M:function M(){},
aK:function aK(){},
cF:function cF(){},
aP:function aP(){},
a9:function a9(){},
u:function u(a){this.$ti=a},
dM:function dM(a){this.$ti=a},
a7:function a7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aZ:function aZ(){},
by:function by(){},
cz:function cz(){},
an:function an(){}},B={}
var w=[A,J,B]
var $={}
A.f5.prototype={}
J.bx.prototype={
K(a,b){return a===b},
gB(a){return A.b0(a)},
i(a){return"Instance of '"+A.k(A.dT(a))+"'"}}
J.cy.prototype={
i(a){return String(a)},
gB(a){return a?519018:218159},
$iw:1}
J.bz.prototype={
K(a,b){return null==b},
i(a){return"null"},
gB(a){return 0},
$iD:1}
J.M.prototype={}
J.aK.prototype={
gB(a){return 0},
i(a){return String(a)}}
J.cF.prototype={}
J.aP.prototype={}
J.a9.prototype={
i(a){var s=a[$.hJ()]
if(s==null)return this.bG(a)
return"JavaScript function for "+A.k(J.aj(s))},
$iaI:1}
J.u.prototype={
j(a,b){A.L(a).c.a(b)
if(!!a.fixed$length)A.aC(A.A("add"))
a.push(b)},
bt(a,b){var s
if(!!a.fixed$length)A.aC(A.A("removeAt"))
s=a.length
if(b>=s)throw A.a(A.fP(b,null))
return a.splice(b,1)[0]},
bi(a){if(!!a.fixed$length)A.aC(A.A("clear"))
a.length=0},
L(a,b){var s,r
A.L(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.a(A.aF(a))}},
br(a,b,c){var s=A.L(a)
return new A.ac(a,s.v(c).h("1(2)").a(b),s.h("@<1>").v(c).h("ac<1,2>"))},
I(a,b){var s,r=A.aM(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.t(r,s,A.k(a[s]))
return r.join(b)},
cK(a,b,c,d){var s,r,q
d.a(b)
A.L(a).v(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.a(A.aF(a))}return r},
C(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
gq(a){if(a.length>0)return a[0]
throw A.a(A.dL())},
gcP(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.dL())},
bg(a,b){var s,r
A.L(a).h("w(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.R(b.$1(a[r])))return!0
if(a.length!==s)throw A.a(A.aF(a))}return!1},
A(a,b){var s
for(s=0;s<a.length;++s)if(J.F(a[s],b))return!0
return!1},
i(a){return A.f2(a,"[","]")},
gu(a){return new J.a7(a,a.length,A.L(a).h("a7<1>"))},
gB(a){return A.b0(a)},
gk(a){return a.length},
p(a,b){if(!A.fj(b))throw A.a(A.bf(a,b))
if(!(b>=0&&b<a.length))throw A.a(A.bf(a,b))
return a[b]},
t(a,b,c){A.L(a).c.a(c)
if(!!a.immutable$list)A.aC(A.A("indexed set"))
if(!(b>=0&&b<a.length))throw A.a(A.bf(a,b))
a[b]=c},
$in:1,
$ii:1,
$ip:1}
J.dM.prototype={}
J.a7.prototype={
gn(){return this.d},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.a(A.eV(q))
s=r.c
if(s>=p){r.sb3(null)
return!1}r.sb3(q[s]);++r.c
return!0},
sb3(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
J.aZ.prototype={
U(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.A(""+a+".round()"))},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
aN(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
a3(a,b){return(a|0)===a?a/b|0:this.cz(a,b)},
cz(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.A("Result of truncating division is "+A.k(s)+": "+A.k(a)+" ~/ "+b))},
cv(a,b){var s
if(a>0)s=this.cu(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cu(a,b){return b>31?0:a>>>b},
$iaA:1}
J.by.prototype={$io:1}
J.cz.prototype={}
J.an.prototype={
bj(a,b){if(b<0)throw A.a(A.bf(a,b))
if(b>=a.length)A.aC(A.bf(a,b))
return a.charCodeAt(b)},
aZ(a,b){if(b>=a.length)throw A.a(A.bf(a,b))
return a.charCodeAt(b)},
m(a,b){if(typeof b!="string")throw A.a(A.cl(b,null,null))
return a+b},
bz(a,b){var s=a.length,r=b.length
if(r>s)return!1
return b===a.substring(0,r)},
bA(a,b,c){return a.substring(b,A.iz(b,c,a.length))},
d3(a){return a.toLowerCase()},
d4(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.aZ(p,0)===133){s=J.iq(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.bj(p,r)===133?J.ir(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
by(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.K)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cT(a,b,c){var s=b-a.length
if(s<=0)return a
return this.by(c,s)+a},
i(a){return a},
gB(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gk(a){return a.length},
$idS:1,
$ij:1}
A.cC.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.cH.prototype={
i(a){return"ReachabilityError: "+this.a}}
A.bK.prototype={
i(a){return"Null is not a valid value for '"+this.a+"' of type '"+A.jM(this.$ti.c).i(0)+"'"},
$ia4:1}
A.n.prototype={}
A.aq.prototype={
gu(a){var s=this
return new A.aL(s,s.gk(s),A.r(s).h("aL<aq.E>"))},
a7(a,b){return this.bC(0,A.r(this).h("w(aq.E)").a(b))}}
A.aL.prototype={
gn(){return this.d},
l(){var s,r=this,q=r.a,p=J.fo(q),o=p.gk(q)
if(r.b!==o)throw A.a(A.aF(q))
s=r.c
if(s>=o){r.sF(null)
return!1}r.sF(p.C(q,s));++r.c
return!0},
sF(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
A.bG.prototype={
gu(a){var s=A.r(this)
return new A.bH(J.a5(this.a),this.b,s.h("@<1>").v(s.z[1]).h("bH<1,2>"))},
gk(a){return J.a6(this.a)},
C(a,b){return this.b.$1(J.dt(this.a,b))}}
A.bH.prototype={
l(){var s=this,r=s.b
if(r.l()){s.sF(s.c.$1(r.gn()))
return!0}s.sF(null)
return!1},
gn(){return this.a},
sF(a){this.a=this.$ti.h("2?").a(a)}}
A.ac.prototype={
gk(a){return J.a6(this.a)},
C(a,b){return this.b.$1(J.dt(this.a,b))}}
A.af.prototype={
gu(a){return new A.bT(J.a5(this.a),this.b,this.$ti.h("bT<1>"))}}
A.bT.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(A.R(r.$1(s.gn())))return!0
return!1},
gn(){return this.a.gn()}}
A.X.prototype={
gu(a){var s=this.$ti
return new A.bv(J.a5(this.a),this.b,B.D,s.h("@<1>").v(s.z[1]).h("bv<1,2>"))}}
A.bv.prototype={
gn(){return this.d},
l(){var s,r,q=this
if(q.c==null)return!1
for(s=q.a,r=q.b;!q.c.l();){q.sF(null)
if(s.l()){q.sb4(null)
q.sb4(J.a5(r.$1(s.gn())))}else return!1}q.sF(q.c.gn())
return!0},
sb4(a){this.c=this.$ti.h("y<2>?").a(a)},
sF(a){this.d=this.$ti.h("2?").a(a)},
$iy:1}
A.aO.prototype={
gu(a){return new A.bQ(J.a5(this.a),this.b,A.r(this).h("bQ<1>"))}}
A.br.prototype={
gk(a){var s=J.a6(this.a),r=this.b
if(s>r)return r
return s},
$in:1}
A.bQ.prototype={
l(){if(--this.b>=0)return this.a.l()
this.b=-1
return!1},
gn(){if(this.b<0)return null
return this.a.gn()}}
A.aN.prototype={
gu(a){return new A.bN(J.a5(this.a),this.b,A.r(this).h("bN<1>"))}}
A.bq.prototype={
gk(a){var s=J.a6(this.a)-this.b
if(s>=0)return s
return 0},
$in:1}
A.bN.prototype={
l(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.l()
this.b=0
return s.l()},
gn(){return this.a.gn()}}
A.bt.prototype={
l(){return!1},
gn(){throw A.a(A.dL())},
$iy:1}
A.bm.prototype={
i(a){return A.f8(this)},
$iab:1}
A.aJ.prototype={
a_(){var s,r,q=this,p=q.$map
if(p==null){s=q.$ti
r=A.ik(s.h("1?"))
p=A.it(A.jo(),r,s.c,s.z[1])
A.jO(q.a,p)
q.$map=p}return p},
S(a){return this.a_().S(a)},
p(a,b){return this.a_().p(0,b)},
L(a,b){this.$ti.h("~(1,2)").a(b)
this.a_().L(0,b)},
gk(a){return this.a_().a}}
A.dK.prototype={
$1(a){return this.a.b(a)},
$S:18}
A.dY.prototype={
E(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.bL.prototype={
i(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+A.k(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.cB.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+A.k(r.a)
s=r.c
if(s==null)return q+p+"' ("+A.k(r.a)+")"
return q+p+"' on '"+s+"' ("+A.k(r.a)+")"}}
A.cQ.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.dR.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bu.prototype={}
A.c9.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia0:1}
A.aE.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.hF(r==null?"unknown":r)+"'"},
$iaI:1,
gd6(){return this},
$C:"$1",
$R:1,
$D:null}
A.cn.prototype={$C:"$0",$R:0}
A.co.prototype={$C:"$2",$R:2}
A.cO.prototype={}
A.cK.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.hF(s)+"'"}}
A.aW.prototype={
K(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aW))return!1
return this.$_target===b.$_target&&this.a===b.a},
gB(a){return(A.hx(this.a)^A.b0(this.$_target))>>>0},
i(a){return"Closure '"+A.k(this.$_name)+"' of "+("Instance of '"+A.k(A.dT(this.a))+"'")}}
A.cI.prototype={
i(a){return"RuntimeError: "+this.a}}
A.cS.prototype={
i(a){return"Assertion failed: "+A.ct(this.a)}}
A.ap.prototype={
gk(a){return this.a},
gM(){return new A.bA(this,A.r(this).h("bA<1>"))},
S(a){var s
if(typeof a=="number"&&(a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.bn(a)},
bn(a){var s=this.d
if(s==null)return!1
return this.a6(s[this.a5(a)],a)>=0},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bo(b)},
bo(a){var s,r,q=this.d
if(q==null)return null
s=q[this.a5(a)]
r=this.a6(s,a)
if(r<0)return null
return s[r].b},
t(a,b,c){var s,r,q=this,p=A.r(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.aT(s==null?q.b=q.al():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.aT(r==null?q.c=q.al():r,b,c)}else q.bp(b,c)},
bp(a,b){var s,r,q,p,o=this,n=A.r(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.al()
r=o.a5(a)
q=s[r]
if(q==null)s[r]=[o.am(a,b)]
else{p=o.a6(q,a)
if(p>=0)q[p].b=b
else q.push(o.am(a,b))}},
L(a,b){var s,r,q=this
A.r(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.a(A.aF(q))
s=s.c}},
aT(a,b,c){var s,r=A.r(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.am(b,c)
else s.b=c},
c7(){this.r=this.r+1&1073741823},
am(a,b){var s=this,r=A.r(s),q=new A.dN(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.c7()
return q},
a5(a){return J.eW(a)&0x3fffffff},
a6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.F(a[r].a,b))return r
return-1},
i(a){return A.f8(this)},
al(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.dN.prototype={}
A.bA.prototype={
gk(a){return this.a.a},
gu(a){var s=this.a,r=new A.bB(s,s.r,this.$ti.h("bB<1>"))
r.c=s.e
return r}}
A.bB.prototype={
gn(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.aF(q))
s=r.c
if(s==null){r.saS(null)
return!1}else{r.saS(s.a)
r.c=s.c
return!0}},
saS(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
A.eL.prototype={
$1(a){return this.a(a)},
$S:31}
A.eM.prototype={
$2(a,b){return this.a(a,b)},
$S:26}
A.eN.prototype={
$1(a){return this.a(A.I(a))},
$S:28}
A.cA.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
$idS:1}
A.Z.prototype={
h(a){return A.ev(v.typeUniverse,this,a)},
v(a){return A.j3(v.typeUniverse,this,a)}}
A.d2.prototype={}
A.ca.prototype={
i(a){return A.P(this.a,null)},
$ifW:1}
A.d1.prototype={
i(a){return this.a}}
A.cb.prototype={$ia4:1}
A.e2.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:7}
A.e1.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:33}
A.e3.prototype={
$0(){this.a.$0()},
$S:5}
A.e4.prototype={
$0(){this.a.$0()},
$S:5}
A.df.prototype={
bL(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.dq(new A.et(this,b),0),a)
else throw A.a(A.A("`setTimeout()` not found."))},
a4(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
self.clearTimeout(s)
this.b=null}else throw A.a(A.A("Canceling a timer."))},
$iiF:1}
A.et.prototype={
$0(){this.a.b=null
this.b.$0()},
$S:0}
A.cT.prototype={}
A.eB.prototype={
$1(a){return this.a.$2(0,a)},
$S:6}
A.eC.prototype={
$2(a,b){this.a.$2(1,new A.bu(a,t.l.a(b)))},
$S:27}
A.eH.prototype={
$2(a,b){this.a(A.aT(a),b)},
$S:19}
A.bl.prototype={
i(a){return A.k(this.a)},
$it:1,
gZ(){return this.b}}
A.bU.prototype={}
A.ag.prototype={
aq(){},
ar(){},
san(a){this.ch=this.$ti.h("ag<1>?").a(a)},
sba(a){this.CW=this.$ti.h("ag<1>?").a(a)}}
A.bV.prototype={
gc6(){return this.c<4},
cw(a,b,c,d){var s,r,q,p,o,n=this,m=A.r(n)
m.h("~(1)?").a(a)
t.Z.a(c)
if((n.c&4)!==0){m=new A.b9($.v,c,m.h("b9<1>"))
m.cq()
return m}s=$.v
r=d?1:0
t.E.v(m.c).h("1(2)").a(a)
A.iL(s,b)
q=c==null?A.jH():c
t.M.a(q)
m=m.h("ag<1>")
p=new A.ag(n,a,s,r,m)
p.sba(p)
p.san(p)
m.a(p)
p.ay=n.c&1
o=n.e
n.sc4(p)
p.san(null)
p.sba(o)
if(o==null)n.sbZ(p)
else o.san(p)
if(n.d==n.e)A.jv(n.a)
return p},
bN(){if((this.c&4)!==0)return new A.as("Cannot add new events after calling close")
return new A.as("Cannot add new events while doing an addStream")},
j(a,b){var s=this
A.r(s).c.a(b)
if(!s.gc6())throw A.a(s.bN())
s.aA(b)},
sbZ(a){this.d=A.r(this).h("ag<1>?").a(a)},
sc4(a){this.e=A.r(this).h("ag<1>?").a(a)},
$ifT:1,
$ih5:1,
$iau:1}
A.b5.prototype={
aA(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("bX<1>");s!=null;s=s.ch)s.bP(new A.bX(a,r))}}
A.dH.prototype={
$0(){this.b.b2(null)},
$S:0}
A.aQ.prototype={
cR(a){if((this.c&15)!==6)return!0
return this.b.b.aK(t.al.a(this.d),a.a,t.v,t.K)},
cL(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=r.b.b
if(t.C.b(q))p=m.d_(q,a.a,a.b,o,n,t.l)
else p=m.aK(t.y.a(q),a.a,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.ai(s))){if((r.c&1)!==0)throw A.a(A.bj("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.a(A.bj("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.z.prototype={
aL(a,b,c){var s,r,q,p=this.$ti
p.v(c).h("1/(2)").a(a)
s=$.v
if(s===B.b){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.a(A.cl(b,"onError",u.c))}else{c.h("@<0/>").v(p.c).h("1(2)").a(a)
if(b!=null)b=A.js(b,s)}r=new A.z(s,c.h("z<0>"))
q=b==null?1:3
this.ab(new A.aQ(r,q,a,b,p.h("@<1>").v(c).h("aQ<1,2>")))
return r},
d0(a,b){return this.aL(a,null,b)},
be(a,b,c){var s,r=this.$ti
r.v(c).h("1/(2)").a(a)
s=new A.z($.v,c.h("z<0>"))
this.ab(new A.aQ(s,3,a,b,r.h("@<1>").v(c).h("aQ<1,2>")))
return s},
ct(a){this.a=this.a&1|16
this.c=a},
ad(a){this.a=a.a&30|this.a&1
this.c=a.c},
ab(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.ab(a)
return}r.ad(s)}A.ax(null,null,r.b,t.M.a(new A.e8(r,a)))}},
b9(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.d.a(m.c)
if((n.a&24)===0){n.b9(a)
return}m.ad(n)}l.a=m.a1(a)
A.ax(null,null,m.b,t.M.a(new A.ef(l,m)))}},
a0(){var s=t.F.a(this.c)
this.c=null
return this.a1(s)},
a1(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aW(a){var s,r,q,p=this
p.a^=2
try{a.aL(new A.eb(p),new A.ec(p),t.P)}catch(q){s=A.ai(q)
r=A.az(q)
A.hC(new A.ed(p,s,r))}},
b2(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
s=r.a0()
q.c.a(a)
r.a=8
r.c=a
A.ba(r,s)},
af(a){var s,r=this
r.$ti.c.a(a)
s=r.a0()
r.a=8
r.c=a
A.ba(r,s)},
O(a,b){var s
t.l.a(b)
s=this.a0()
this.ct(A.dv(a,b))
A.ba(this,s)},
bQ(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("al<1>").b(a)){this.aX(a)
return}this.bS(s.c.a(a))},
bS(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.ax(null,null,s.b,t.M.a(new A.ea(s,a)))},
aX(a){var s=this,r=s.$ti
r.h("al<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.ax(null,null,s.b,t.M.a(new A.ee(s,a)))}else A.fb(a,s)
return}s.aW(a)},
bR(a,b){this.a^=2
A.ax(null,null,this.b,t.M.a(new A.e9(this,a,b)))},
$ial:1}
A.e8.prototype={
$0(){A.ba(this.a,this.b)},
$S:0}
A.ef.prototype={
$0(){A.ba(this.b,this.a.a)},
$S:0}
A.eb.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.af(p.$ti.c.a(a))}catch(q){s=A.ai(q)
r=A.az(q)
p.O(s,r)}},
$S:7}
A.ec.prototype={
$2(a,b){this.a.O(a,t.l.a(b))},
$S:16}
A.ed.prototype={
$0(){this.a.O(this.b,this.c)},
$S:0}
A.ea.prototype={
$0(){this.a.af(this.b)},
$S:0}
A.ee.prototype={
$0(){A.fb(this.b,this.a)},
$S:0}
A.e9.prototype={
$0(){this.a.O(this.b,this.c)},
$S:0}
A.ei.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.cZ(t.fO.a(q.d),t.z)}catch(p){s=A.ai(p)
r=A.az(p)
if(m.c){q=t.n.a(m.b.a.c).a
o=s
o=q==null?o==null:q===o
q=o}else q=!1
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.dv(s,r)
o.b=!0
return}if(l instanceof A.z&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.f.b(l)){n=m.b.a
q=m.a
q.c=l.d0(new A.ej(n),t.z)
q.b=!1}},
$S:0}
A.ej.prototype={
$1(a){return this.a},
$S:13}
A.eh.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.aK(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.ai(l)
r=A.az(l)
q=this.a
q.c=A.dv(s,r)
q.b=!0}},
$S:0}
A.eg.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this
try{s=t.n.a(k.a.a.c)
p=k.b
if(A.R(p.a.cR(s))&&p.a.e!=null){p.c=p.a.cL(s)
p.b=!1}}catch(o){r=A.ai(o)
q=A.az(o)
p=t.n.a(k.a.a.c)
n=p.a
m=r
l=k.b
if(n==null?m==null:n===m)l.c=p
else l.c=A.dv(r,q)
l.b=!0}},
$S:0}
A.cU.prototype={}
A.at.prototype={
gk(a){var s={},r=new A.z($.v,t.fJ)
s.a=0
this.aH(new A.dW(s,this),!0,new A.dX(s,r),r.gbW())
return r}}
A.dW.prototype={
$1(a){A.r(this.b).c.a(a);++this.a.a},
$S(){return A.r(this.b).h("~(1)")}}
A.dX.prototype={
$0(){this.b.b2(this.a.a)},
$S:0}
A.T.prototype={}
A.b8.prototype={
gB(a){return(A.b0(this.a)^892482866)>>>0},
K(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b8&&b.a===this.a}}
A.bW.prototype={
aq(){A.r(this.w).h("T<1>").a(this)},
ar(){A.r(this.w).h("T<1>").a(this)}}
A.b7.prototype={
aq(){},
ar(){},
bP(a){var s,r,q=this,p=q.r
if(p==null){p=new A.c5(A.r(q).h("c5<1>"))
q.sb8(p)}s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.aP(q)}},
aA(a){var s,r=this,q=A.r(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bv(r.a,a,q)
r.e&=4294967263
r.bU((s&4)!==0)},
bU(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sb8(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.aq()
else q.ar()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aP(q)},
sb8(a){this.r=A.r(this).h("c5<1>?").a(a)},
$iT:1,
$iau:1}
A.bb.prototype={
aH(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Z.a(c)
return this.a.cw(s.h("~(1)?").a(a),d,c,b===!0)},
cQ(a){return this.aH(a,null,null,null)}}
A.cZ.prototype={}
A.bX.prototype={}
A.c5.prototype={
aP(a){var s,r=this
r.$ti.h("au<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.hC(new A.en(r,a))
r.a=1}}
A.en.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("au<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.r(r).h("au<1>").a(s).aA(r.b)},
$S:0}
A.b9.prototype={
cq(){var s=this
if((s.b&2)!==0)return
A.ax(null,null,s.a,t.M.a(s.gcr()))
s.b|=2},
cs(){var s,r=this,q=r.b&=4294967293
if(q>=4)return
r.b=q|1
s=r.c
if(s!=null)r.a.bu(s)},
$iT:1}
A.db.prototype={}
A.cf.prototype={$ih_:1}
A.eF.prototype={
$0(){A.ih(this.a,this.b)
A.fQ(u.g)},
$S:0}
A.d9.prototype={
bu(a){var s,r,q
t.M.a(a)
try{if(B.b===$.v){a.$0()
return}A.hj(null,null,this,a,t.H)}catch(q){s=A.ai(q)
r=A.az(q)
A.dl(s,t.l.a(r))}},
bv(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.b===$.v){a.$1(b)
return}A.hk(null,null,this,a,b,t.H,c)}catch(q){s=A.ai(q)
r=A.az(q)
A.dl(s,t.l.a(r))}},
aC(a){return new A.eo(this,t.M.a(a))},
cG(a,b){return new A.ep(this,b.h("~(0)").a(a),b)},
cZ(a,b){b.h("0()").a(a)
if($.v===B.b)return a.$0()
return A.hj(null,null,this,a,b)},
aK(a,b,c,d){c.h("@<0>").v(d).h("1(2)").a(a)
d.a(b)
if($.v===B.b)return a.$1(b)
return A.hk(null,null,this,a,b,c,d)},
d_(a,b,c,d,e,f){d.h("@<0>").v(e).v(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.v===B.b)return a.$2(b,c)
return A.jt(null,null,this,a,b,c,d,e,f)},
aJ(a,b,c,d){return b.h("@<0>").v(c).v(d).h("1(2,3)").a(a)}}
A.eo.prototype={
$0(){return this.a.bu(this.b)},
$S:0}
A.ep.prototype={
$1(a){var s=this.c
return this.a.bv(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.c1.prototype={
p(a,b){if(!A.R(this.y.$1(b)))return null
return this.bE(b)},
t(a,b,c){var s=this.$ti
this.bF(s.c.a(b),s.z[1].a(c))},
S(a){if(!A.R(this.y.$1(a)))return!1
return this.bD(a)},
a5(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
a6(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(A.R(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.em.prototype={
$1(a){return this.a.b(a)},
$S:14}
A.c2.prototype={
gu(a){var s=this,r=new A.aS(s,s.r,A.r(s).h("aS<1>"))
r.c=s.e
return r},
gk(a){return this.a},
A(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else{r=this.bX(b)
return r}},
bX(a){var s=this.d
if(s==null)return!1
return this.aj(s[this.ag(a)],a)>=0},
j(a,b){var s,r,q=this
A.r(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.b_(s==null?q.b=A.fc():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.b_(r==null?q.c=A.fc():r,b)}else return q.bM(b)},
bM(a){var s,r,q,p=this
A.r(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.fc()
r=p.ag(a)
q=s[r]
if(q==null)s[r]=[p.ae(a)]
else{if(p.aj(q,a)>=0)return!1
q.push(p.ae(a))}return!0},
Y(a,b){var s
if(b!=="__proto__")return this.cm(this.b,b)
else{s=this.cl(b)
return s}},
cl(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.ag(a)
r=n[s]
q=o.aj(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.bf(p)
return!0},
b_(a,b){A.r(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.ae(b)
return!0},
cm(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.bf(s)
delete a[b]
return!0},
b1(){this.r=this.r+1&1073741823},
ae(a){var s,r=this,q=new A.d6(A.r(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.b1()
return q},
bf(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.b1()},
ag(a){return J.eW(a)&1073741823},
aj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.F(a[r].a,b))return r
return-1}}
A.d6.prototype={}
A.aS.prototype={
gn(){return this.d},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.aF(q))
else if(r==null){s.sb0(null)
return!1}else{s.sb0(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sb0(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
A.bD.prototype={$in:1,$ii:1,$ip:1}
A.q.prototype={
gu(a){return new A.aL(a,this.gk(a),A.U(a).h("aL<q.E>"))},
C(a,b){return this.p(a,b)},
gbq(a){return this.gk(a)===0},
br(a,b,c){var s=A.U(a)
return new A.ac(a,s.v(c).h("1(q.E)").a(b),s.h("@<q.E>").v(c).h("ac<1,2>"))},
d2(a,b){var s,r,q,p,o=this
if(o.gbq(a)){s=J.f3(0,A.U(a).h("q.E"))
return s}r=o.p(a,0)
q=A.aM(o.gk(a),r,!0,A.U(a).h("q.E"))
for(p=1;p<o.gk(a);++p)B.a.t(q,p,o.p(a,p))
return q},
d1(a){return this.d2(a,!0)},
j(a,b){var s
A.U(a).h("q.E").a(b)
s=this.gk(a)
this.sk(a,s+1)
this.t(a,s,b)},
i(a){return A.f2(a,"[","]")}}
A.bF.prototype={}
A.dO.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.k(a)
r.a=s+": "
r.a+=A.k(b)},
$S:15}
A.C.prototype={
L(a,b){var s,r
A.r(this).h("~(C.K,C.V)").a(b)
for(s=J.a5(this.gM());s.l();){r=s.gn()
b.$2(r,this.p(0,r))}},
gk(a){return J.a6(this.gM())},
i(a){return A.f8(this)},
$iab:1}
A.J.prototype={
G(a,b){var s
for(s=J.a5(A.r(this).h("i<J.E>").a(b));s.l();)this.j(0,s.gn())},
i(a){return A.f2(this,"{","}")},
I(a,b){var s,r=this.gu(this)
if(!r.l())return""
if(b===""){s=""
do s+=A.k(r.d)
while(r.l())}else{s=A.k(r.d)
for(;r.l();)s=s+b+A.k(r.d)}return s.charCodeAt(0)==0?s:s},
C(a,b){var s,r,q,p="index"
A.dp(b,p,t.S)
A.cG(b,p)
for(s=this.gu(this),r=0;s.l();){q=s.d
if(b===r)return q;++r}throw A.a(A.aY(b,this,p,null,r))}}
A.bM.prototype={$in:1,$ii:1,$ia_:1}
A.c6.prototype={$in:1,$ii:1,$ia_:1}
A.c3.prototype={}
A.c7.prototype={}
A.cg.prototype={}
A.bp.prototype={
K(a,b){if(b==null)return!1
return b instanceof A.bp&&this.a===b.a},
gB(a){return B.d.gB(this.a)},
i(a){var s,r,q,p,o=this.a,n=o<0?"-":"",m=B.d.a3(o,36e8)
o%=36e8
if(o<0)o=-o
s=B.d.a3(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.d.a3(o,1e6)
p=q<10?"0":""
return n+Math.abs(m)+":"+r+s+":"+p+q+"."+B.c.cT(B.d.i(o%1e6),6,"0")}}
A.e5.prototype={}
A.t.prototype={
gZ(){return A.az(this.$thrownJsError)}}
A.bk.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ct(s)
return"Assertion failed"}}
A.a4.prototype={}
A.cD.prototype={
i(a){return"Throw of null."}}
A.a2.prototype={
gai(){return"Invalid argument"+(!this.a?"(s)":"")},
gah(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gai()+q+o
if(!s.a)return n
return n+s.gah()+": "+A.ct(s.b)}}
A.b1.prototype={
gai(){return"RangeError"},
gah(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.k(q):""
else if(q==null)s=": Not greater than or equal to "+A.k(r)
else if(q>r)s=": Not in inclusive range "+A.k(r)+".."+A.k(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.k(r)
return s}}
A.cx.prototype={
gai(){return"RangeError"},
gah(){var s,r=A.aT(this.b)
if(typeof r!=="number")return r.d8()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+A.k(s)},
gk(a){return this.f}}
A.cR.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.cP.prototype={
i(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.as.prototype={
i(a){return"Bad state: "+this.a}}
A.cp.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ct(s)+"."}}
A.cE.prototype={
i(a){return"Out of Memory"},
gZ(){return null},
$it:1}
A.bO.prototype={
i(a){return"Stack Overflow"},
gZ(){return null},
$it:1}
A.cr.prototype={
i(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
A.e7.prototype={
i(a){return"Exception: "+this.a}}
A.dG.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.c.bA(q,0,75)+"..."
return r+"\n"+q}}
A.i.prototype={
a7(a,b){var s=A.r(this)
return new A.af(this,s.h("w(i.E)").a(b),s.h("af<i.E>"))},
I(a,b){var s,r=this.gu(this)
if(!r.l())return""
if(b===""){s=""
do s+=A.k(J.aj(r.gn()))
while(r.l())}else{s=A.k(J.aj(r.gn()))
for(;r.l();)s=s+b+A.k(J.aj(r.gn()))}return s.charCodeAt(0)==0?s:s},
cO(a){return this.I(a,"")},
gk(a){var s,r=this.gu(this)
for(s=0;r.l();)++s
return s},
gN(a){var s,r=this.gu(this)
if(!r.l())throw A.a(A.dL())
s=r.gn()
if(r.l())throw A.a(A.im())
return s},
C(a,b){var s,r,q
A.cG(b,"index")
for(s=this.gu(this),r=0;s.l();){q=s.gn()
if(b===r)return q;++r}throw A.a(A.aY(b,this,"index",null,r))},
i(a){return A.il(this,"(",")")}}
A.y.prototype={}
A.D.prototype={
gB(a){return A.m.prototype.gB.call(this,this)},
i(a){return"null"}}
A.m.prototype={$im:1,
K(a,b){return this===b},
gB(a){return A.b0(this)},
i(a){return"Instance of '"+A.k(A.dT(this))+"'"},
toString(){return this.i(this)}}
A.dc.prototype={
i(a){return""},
$ia0:1}
A.cL.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.e.prototype={}
A.aU.prototype={
scM(a,b){a.href=b},
i(a){return String(a)},
$iaU:1}
A.ck.prototype={
i(a){return String(a)}}
A.aV.prototype={$iaV:1}
A.aD.prototype={$iaD:1}
A.a3.prototype={
gk(a){return a.length}}
A.bn.prototype={
gk(a){return a.length}}
A.dx.prototype={}
A.aG.prototype={}
A.dz.prototype={
i(a){return String(a)}}
A.cs.prototype={
cJ(a,b){return a.createHTMLDocument(b)}}
A.dA.prototype={
gk(a){return a.length}}
A.cW.prototype={
gbq(a){return this.a.firstElementChild==null},
gk(a){return this.b.length},
p(a,b){var s=this.b
if(!(b>=0&&b<s.length))return A.f(s,b)
return t.h.a(s[b])},
t(a,b,c){var s
t.h.a(c)
s=this.b
if(!(b>=0&&b<s.length))return A.f(s,b)
this.a.replaceChild(c,s[b])},
sk(a,b){throw A.a(A.A("Cannot resize element lists"))},
j(a,b){t.h.a(b)
this.a.appendChild(b)
return b},
gu(a){var s=this.d1(this)
return new J.a7(s,s.length,A.L(s).h("a7<1>"))}}
A.l.prototype={
gcE(a){return new A.d_(a)},
gaD(a){return new A.cW(a,a.children)},
gbh(a){return new A.d0(a)},
i(a){return a.localName},
D(a,b,c,d){var s,r,q,p
if(c==null){s=$.fG
if(s==null){s=A.d([],t.Q)
r=new A.bJ(s)
B.a.j(s,A.h1(null))
B.a.j(s,A.h6())
$.fG=r
d=r}else d=s
s=$.fF
if(s==null){d.toString
s=new A.ce(d)
$.fF=s
c=s}else{d.toString
s.a=d
c=s}}if($.ak==null){s=document
r=s.implementation
r.toString
r=B.N.cJ(r,"")
$.ak=r
$.f_=r.createRange()
r=$.ak.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.ak.head.appendChild(r)}s=$.ak
if(s.body==null){r=s.createElement("body")
B.P.scH(s,t.t.a(r))}s=$.ak
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.ak.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!B.a.A(B.U,a.tagName)){$.f_.selectNodeContents(q)
s=$.f_
p=s.createContextualFragment(b)}else{J.i4(q,b)
p=$.ak.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.ak.body)J.eX(q)
c.aO(p)
document.adoptNode(p)
return p},
cI(a,b,c){return this.D(a,b,c,null)},
saG(a,b){this.a8(a,b)},
a8(a,b){this.sbx(a,null)
a.appendChild(this.D(a,b,null,null))},
sc3(a,b){a.innerHTML=b},
gbw(a){return a.tagName},
$il:1}
A.dC.prototype={
$1(a){return t.h.b(t.A.a(a))},
$S:12}
A.b.prototype={$ib:1}
A.x.prototype={
bO(a,b,c,d){return a.addEventListener(b,A.dq(t.o.a(c),1),!1)},
$ix:1}
A.cv.prototype={
gk(a){return a.length}}
A.am.prototype={
gk(a){return a.length},
p(a,b){if(b>>>0!==b||b>=a.length)throw A.a(A.aY(b,a,null,null,null))
return a[b]},
t(a,b,c){t.A.a(c)
throw A.a(A.A("Cannot assign element of immutable List."))},
sk(a,b){throw A.a(A.A("Cannot resize immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
$in:1,
$iao:1,
$ii:1,
$ip:1,
$iam:1}
A.bw.prototype={
scH(a,b){a.body=b}}
A.aa.prototype={$iaa:1}
A.bE.prototype={
cD(a,b){return a.assign(b)},
i(a){return String(a)},
$ibE:1}
A.H.prototype={
gN(a){var s=this.a,r=s.childNodes.length
if(r===0)throw A.a(A.dV("No elements"))
if(r>1)throw A.a(A.dV("More than one element"))
s=s.firstChild
s.toString
return s},
j(a,b){this.a.appendChild(t.A.a(b))},
G(a,b){var s,r,q,p,o
t.eh.a(b)
s=b.a
r=this.a
if(s!==r)for(q=s.childNodes.length,p=0;p<q;++p){o=s.firstChild
o.toString
r.appendChild(o)}return},
t(a,b,c){var s,r
t.A.a(c)
s=this.a
r=s.childNodes
if(!(b>=0&&b<r.length))return A.f(r,b)
s.replaceChild(c,r[b])},
gu(a){var s=this.a.childNodes
return new A.aH(s,s.length,A.U(s).h("aH<B.E>"))},
gk(a){return this.a.childNodes.length},
sk(a,b){throw A.a(A.A("Cannot set length on immutable List."))},
p(a,b){var s=this.a.childNodes
if(!(b>=0&&b<s.length))return A.f(s,b)
return s[b]}}
A.h.prototype={
cW(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
cY(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.i_(s,b,a)}catch(q){}return a},
bV(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s)},
i(a){var s=a.nodeValue
return s==null?this.bB(a):s},
sbx(a,b){a.textContent=b},
cn(a,b,c){return a.replaceChild(b,c)},
$ih:1}
A.bI.prototype={
gk(a){return a.length},
p(a,b){if(b>>>0!==b||b>=a.length)throw A.a(A.aY(b,a,null,null,null))
return a[b]},
t(a,b,c){t.A.a(c)
throw A.a(A.A("Cannot assign element of immutable List."))},
sk(a,b){throw A.a(A.A("Cannot resize immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
$in:1,
$iao:1,
$ii:1,
$ip:1}
A.cJ.prototype={
gk(a){return a.length}}
A.bP.prototype={
D(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aa(a,b,c,d)
s=A.id("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new A.H(r).G(0,new A.H(s))
return r}}
A.cM.prototype={
D(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.aa(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=B.B.D(s.createElement("table"),b,c,d)
s.toString
s=new A.H(s)
q=s.gN(s)
q.toString
s=new A.H(q)
p=s.gN(s)
r.toString
p.toString
new A.H(r).G(0,new A.H(p))
return r}}
A.cN.prototype={
D(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aa(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=B.B.D(s.createElement("table"),b,c,d)
s.toString
s=new A.H(s)
q=s.gN(s)
r.toString
q.toString
new A.H(r).G(0,new A.H(q))
return r}}
A.b3.prototype={
a8(a,b){var s,r
this.sbx(a,null)
s=a.content
s.toString
J.hZ(s)
r=this.D(a,b,null,null)
a.content.appendChild(r)},
$ib3:1}
A.N.prototype={$iN:1}
A.ad.prototype={$iad:1}
A.bR.prototype={
gk(a){return a.length},
p(a,b){if(b>>>0!==b||b>=a.length)throw A.a(A.aY(b,a,null,null,null))
return a[b]},
t(a,b,c){t.fY.a(c)
throw A.a(A.A("Cannot assign element of immutable List."))},
sk(a,b){throw A.a(A.A("Cannot resize immutable List."))},
gq(a){if(a.length>0)return a[0]
throw A.a(A.dV("No elements"))},
C(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
$in:1,
$iao:1,
$ii:1,
$ip:1}
A.O.prototype={}
A.b6.prototype={$ib6:1}
A.c4.prototype={
gk(a){return a.length},
p(a,b){if(b>>>0!==b||b>=a.length)throw A.a(A.aY(b,a,null,null,null))
return a[b]},
t(a,b,c){t.A.a(c)
throw A.a(A.A("Cannot assign element of immutable List."))},
sk(a,b){throw A.a(A.A("Cannot resize immutable List."))},
C(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
$in:1,
$iao:1,
$ii:1,
$ip:1}
A.cV.prototype={
L(a,b){var s,r,q,p,o
t.eA.a(b)
for(s=this.gM(),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.eV)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gM(){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=A.d([],t.s)
for(r=m.length,q=t.x,p=0;p<r;++p){if(!(p<m.length))return A.f(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
B.a.j(s,n)}}return s}}
A.d_.prototype={
p(a,b){return this.a.getAttribute(A.I(b))},
gk(a){return this.gM().length}}
A.d0.prototype={
J(){var s,r,q,p,o=A.bC(t.N)
for(s=this.a.className.split(" "),r=s.length,q=0;q<r;++q){p=J.fy(s[q])
if(p.length!==0)o.j(0,p)}return o},
aM(a){this.a.className=t.a.a(a).I(0," ")},
gk(a){return this.a.classList.length},
A(a,b){var s=this.a.classList.contains(b)
return s},
j(a,b){var s,r
A.I(b)
s=this.a.classList
r=s.contains(b)
s.add(b)
return!r},
Y(a,b){var s=this.a.classList,r=s.contains(b)
s.remove(b)
return r}}
A.f0.prototype={}
A.bZ.prototype={
aH(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Z.a(c)
return A.c0(this.a,this.b,a,!1,s.c)}}
A.bY.prototype={}
A.c_.prototype={}
A.e6.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:17}
A.aR.prototype={
bJ(a){var s
if($.d3.a===0){for(s=0;s<262;++s)$.d3.t(0,B.T[s],A.jW())
for(s=0;s<12;++s)$.d3.t(0,B.o[s],A.jX())}},
R(a){return $.hU().A(0,A.bs(a))},
H(a,b,c){var s=$.d3.p(0,A.k(A.bs(a))+"::"+b)
if(s==null)s=$.d3.p(0,"*::"+b)
if(s==null)return!1
return A.hc(s.$4(a,b,c,this))},
$iY:1}
A.B.prototype={
gu(a){return new A.aH(a,this.gk(a),A.U(a).h("aH<B.E>"))},
j(a,b){A.U(a).h("B.E").a(b)
throw A.a(A.A("Cannot add to immutable List."))}}
A.bJ.prototype={
R(a){return B.a.bg(this.a,new A.dQ(a))},
H(a,b,c){return B.a.bg(this.a,new A.dP(a,b,c))},
$iY:1}
A.dQ.prototype={
$1(a){return t.D.a(a).R(this.a)},
$S:11}
A.dP.prototype={
$1(a){return t.D.a(a).H(this.a,this.b,this.c)},
$S:11}
A.c8.prototype={
bK(a,b,c,d){var s,r,q
this.a.G(0,c)
s=b.a7(0,new A.eq())
r=b.a7(0,new A.er())
this.b.G(0,s)
q=this.c
q.G(0,B.V)
q.G(0,r)},
R(a){return this.a.A(0,A.bs(a))},
H(a,b,c){var s,r=this,q=r.c,p=A.k(A.bs(a)),o=p+"::"+b
if(q.A(0,o))return r.d.cC(c)
else{s="*::"+b
if(q.A(0,s))return r.d.cC(c)
else{q=r.b
if(q.A(0,o))return!0
else if(q.A(0,s))return!0
else if(q.A(0,p+"::*"))return!0
else if(q.A(0,"*::*"))return!0}}return!1},
$iY:1}
A.eq.prototype={
$1(a){return!B.a.A(B.o,A.I(a))},
$S:10}
A.er.prototype={
$1(a){return B.a.A(B.o,A.I(a))},
$S:10}
A.de.prototype={
H(a,b,c){if(this.bH(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
A.es.prototype={
$1(a){return"TEMPLATE::"+A.k(A.I(a))},
$S:20}
A.dd.prototype={
R(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&A.bs(a)==="foreignObject")return!1
if(s)return!0
return!1},
H(a,b,c){if(b==="is"||B.c.bz(b,"on"))return!1
return this.R(a)},
$iY:1}
A.aH.prototype={
l(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sb7(J.W(s.a,r))
s.c=r
return!0}s.sb7(null)
s.c=q
return!1},
gn(){return this.d},
sb7(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
A.da.prototype={$iiG:1}
A.ce.prototype={
aO(a){var s,r=new A.ex(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
X(a,b){++this.b
if(b==null||b!==a.parentNode)J.eX(a)
else b.removeChild(a)},
cp(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.i0(a)
l=m.a.getAttribute("is")
t.h.a(a)
s=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=="lastChild"||c.name=="lastChild"||c.id=="previousSibling"||c.name=="previousSibling"||c.id=="children"||c.name=="children")return true
var k=c.childNodes
if(c.lastChild&&c.lastChild!==k[k.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var j=0
if(c.children)j=c.children.length
for(var i=0;i<j;i++){var h=c.children[i]
if(h.id=="attributes"||h.name=="attributes"||h.id=="lastChild"||h.name=="lastChild"||h.id=="previousSibling"||h.name=="previousSibling"||h.id=="children"||h.name=="children")return true}return false}(a)
n=A.R(s)?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){}r="element unprintable"
try{r=J.aj(a)}catch(p){}try{q=A.bs(a)
this.co(a,b,n,r,q,t.eO.a(m),A.hd(l))}catch(p){if(A.ai(p) instanceof A.a2)throw p
else{this.X(a,b)
window
o=A.k(r)
if(typeof console!="undefined")window.console.warn("Removing corrupted element "+o)}}},
co(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=this
if(c){l.X(a,b)
window
if(typeof console!="undefined")window.console.warn("Removing element due to corrupted attributes on <"+d+">")
return}if(!l.a.R(a)){l.X(a,b)
window
s=A.k(b)
if(typeof console!="undefined")window.console.warn("Removing disallowed element <"+A.k(e)+"> from "+s)
return}if(g!=null)if(!l.a.H(a,"is",g)){l.X(a,b)
window
if(typeof console!="undefined")window.console.warn("Removing disallowed type extension <"+A.k(e)+' is="'+g+'">')
return}s=f.gM()
r=A.d(s.slice(0),A.L(s))
for(q=f.gM().length-1,s=f.a,p="Removing disallowed attribute <"+A.k(e)+" ";q>=0;--q){if(!(q<r.length))return A.f(r,q)
o=r[q]
n=l.a
m=J.i5(o)
A.I(o)
if(!n.H(a,m,s.getAttribute(o))){window
n=s.getAttribute(o)
if(typeof console!="undefined")window.console.warn(p+o+'="'+A.k(n)+'">')
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
l.aO(s)}},
$iiw:1}
A.ex.prototype={
$2(a,b){var s,r,q,p,o,n,m=this.a
switch(a.nodeType){case 1:m.cp(a,b)
break
case 8:case 11:case 3:case 4:break
default:m.X(a,b)}s=a.lastChild
for(q=t.A;s!=null;){r=null
try{r=s.previousSibling
if(r!=null){p=r.nextSibling
o=s
o=p==null?o!=null:p!==o
p=o}else p=!1
if(p){p=A.dV("Corrupt HTML")
throw A.a(p)}}catch(n){p=q.a(s);++m.b
o=p.parentNode
if(a==null?o!=null:a!==o){if(o!=null)o.removeChild(p)}else a.removeChild(p)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:21}
A.cX.prototype={}
A.d4.prototype={}
A.d5.prototype={}
A.d7.prototype={}
A.d8.prototype={}
A.dg.prototype={}
A.dh.prototype={}
A.dj.prototype={}
A.dk.prototype={}
A.cq.prototype={
aB(a){var s=$.hI().b
if(typeof a!="string")A.aC(A.hn(a))
if(s.test(a))return a
throw A.a(A.cl(a,"value","Not a valid class token"))},
i(a){return this.J().I(0," ")},
gu(a){var s=this.J()
return A.iP(s,s.r,A.r(s).c)},
gk(a){return this.J().a},
A(a,b){this.aB(b)
return this.J().A(0,b)},
j(a,b){var s
A.I(b)
this.aB(b)
s=this.cS(new A.dw(b))
return A.hc(s==null?!1:s)},
Y(a,b){var s,r
this.aB(b)
s=this.J()
r=s.Y(0,b)
this.aM(s)
return r},
C(a,b){return this.J().C(0,b)},
cS(a){var s,r
t.bU.a(a)
s=this.J()
r=a.$1(s)
this.aM(s)
return r}}
A.dw.prototype={
$1(a){return t.a.a(a).j(0,this.a)},
$S:22}
A.cu.prototype={
gP(){var s=this.b,r=A.r(s)
return new A.bG(new A.af(s,r.h("w(q.E)").a(new A.dD()),r.h("af<q.E>")),r.h("l(q.E)").a(new A.dE()),r.h("bG<q.E,l>"))},
t(a,b,c){var s
t.h.a(c)
s=this.gP()
J.i3(s.b.$1(J.dt(s.a,b)),c)},
sk(a,b){var s=J.a6(this.gP().a)
if(b>=s)return
else if(b<0)throw A.a(A.bj("Invalid list length",null))
this.cX(0,b,s)},
j(a,b){this.b.a.appendChild(t.h.a(b))},
cX(a,b,c){var s=this.gP()
s=A.iD(s,b,s.$ti.h("i.E"))
B.a.L(A.fM(A.iE(s,c-b,A.r(s).h("i.E")),!0,t.z),new A.dF())},
gk(a){return J.a6(this.gP().a)},
p(a,b){var s=this.gP()
return s.b.$1(J.dt(s.a,b))},
gu(a){var s=A.fM(this.gP(),!1,t.h)
return new J.a7(s,s.length,A.L(s).h("a7<1>"))}}
A.dD.prototype={
$1(a){return t.h.b(t.A.a(a))},
$S:12}
A.dE.prototype={
$1(a){return t.h.a(t.A.a(a))},
$S:35}
A.dF.prototype={
$1(a){return J.eX(a)},
$S:6}
A.ek.prototype={
bs(a){if(a<=0||a>4294967296)throw A.a(A.iy("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.ar.prototype={
i(a){return"Point("+this.a+", "+this.b+")"},
K(a,b){if(b==null)return!1
return b instanceof A.ar&&this.a===b.a&&this.b===b.b},
gB(a){var s=B.d.gB(this.a),r=B.d.gB(this.b),q=A.fV(A.fV(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911},
bk(a){var s,r
this.$ti.a(a)
s=this.a-a.a
r=this.b-a.b
return Math.sqrt(s*s+r*r)}}
A.b2.prototype={$ib2:1}
A.cm.prototype={
J(){var s,r,q,p,o=this.a.getAttribute("class"),n=A.bC(t.N)
if(o==null)return n
for(s=o.split(" "),r=s.length,q=0;q<r;++q){p=J.fy(s[q])
if(p.length!==0)n.j(0,p)}return n},
aM(a){this.a.setAttribute("class",a.I(0," "))}}
A.c.prototype={
gbh(a){return new A.cm(a)},
gaD(a){return new A.cu(a,new A.H(a))},
saG(a,b){this.a8(a,b)},
D(a,b,c,d){var s,r,q,p,o=A.d([],t.Q)
B.a.j(o,A.h1(null))
B.a.j(o,A.h6())
B.a.j(o,new A.dd())
c=new A.ce(new A.bJ(o))
o=document
s=o.body
s.toString
r=B.r.cI(s,'<svg version="1.1">'+b+"</svg>",c)
q=o.createDocumentFragment()
r.toString
o=new A.H(r)
p=o.gN(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
$ic:1}
A.a8.prototype={
gaU(){return B.a.cK(this.e,0,new A.dy(),t.e)},
gaQ(){var s,r,q,p,o=this
if(o.d){s=o.f
r=o.gaU()
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return A.S(r)
q=o.r
if(typeof q!=="number")return A.S(q)
p=o.w
if(typeof p!=="number")return A.S(p)
p=s+r+q-p
s=p}else s=0
return s},
bI(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
$.eZ=0
e.saz(a)
e.f=0
e.r=A.hs(e.c)
e.w=A.hH(e.c)
s=b.length
if(s!==0){if(0>=s)return A.f(b,0)
r=b[0]
for(s=e.e,q=t.J,p=0;p<B.a.p($.eS,r);++p)for(o=0;o<11;++o){n=B.x[o]
if(s.length<10||A.kg(n,p,r,A.jJ(a))===0){m=e.c
l=new A.a8(n,p,A.d([],q))
l.aR(n,p,b,0,c,m)
if(l.d)B.a.j(s,l)}}}s=e.e
q=s.length
m=q!==0
e.d=m
if(m){if(0>=q)return A.f(s,0)
k=s[0].gaQ()
for(j=0,r=0;q=s.length,r<q;++r){q=s[r]
if(q.d){m=q.f
i=q.gaU()
if(typeof m!=="number")return m.m()
if(typeof i!=="number")return A.S(i)
h=q.r
if(typeof h!=="number")return A.S(h)
q=q.w
if(typeof q!=="number")return A.S(q)
g=m+i+h-q}else g=0
if(g>k){k=g
j=r}}if(!(j>=0&&j<q))return A.f(s,j)
f=s[j]
e.b=f.b
e.a=f.a}},
aR(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h=this
$.eZ=$.eZ+1
s=c.length
if(s!==0&&d<s&&A.V(h.a,0,h.b,c[d],f)){if(!(d<c.length))return A.f(c,d)
r=c[d]
h.d=!0
q=A.eR(h.a,0,h.b,r,f)
h.saz(A.dn(h.a,q,h.b,r,f))
p=A.hw(h.c)
h.f=A.hD(p.length)
h.saz(A.fl(h.c,p))
h.r=A.hs(h.c)
h.w=A.hH(h.c)
s=d+1
if(c.length>s&&s<e)for(o=t.J,n=h.e,m=0;m<B.a.p($.eS,r);++m)for(l=0;l<11;++l){k=B.x[l]
j=h.c
i=new A.a8(k,m,A.d([],o))
i.aR(k,m,c,s,e,j)
if(i.d)B.a.j(n,i)}}else h.d=!1},
saz(a){this.c=t.O.a(a)}}
A.dy.prototype={
$2(a,b){var s
A.aT(a)
s=t.d7.a(b).gaQ()
if(typeof a!=="number")return a.m()
return a+s},
$S:24}
A.cw.prototype={
a9(a){var s=this
s.aw()
s.as.bl()
if(!s.a)s.a2()},
bb(){var s=this
s.z=0
s.y=A.ht(B.a.gq(s.d))
s.x=A.hu(B.a.gq(s.d))},
aw(){var s,r,q,p=this;++p.w
p.sc2(Math.max(p.f,p.r))
p.f=0
p.sac(A.dr())
p.sci(A.fN(4,A.hG(),t.e))
B.a.bi(p.e)
p.bb()
s=p.as
r=p.c
q=p.d
s.aE(t.O.a(r),t.w.a(q))
p.au()
p.a2()},
au(){var s=this
return s.Q.aI(s.y,s.x,s.z,B.a.gq(s.d),s.c,s.d,s.e,s.f,s.r,s.as)},
a2(){var s,r=this
if(!r.a){s=r.at
if(s!=null)s.a4()
r.at=A.f9(A.dB(Math.max(20,r.b)),r.gc_())}},
b6(){var s,r,q=this,p=q.at
if(p!=null)p.a4()
q.bc()
p=q.y
s=q.x
if(typeof s!=="number")return s.m()
s=A.V(p,s+1,q.z,B.a.gq(q.d),q.c)
p=q.x
if(s){if(typeof p!=="number")return p.m()
q.x=p+1}else{q.sac(A.dn(q.y,p,q.z,B.a.gq(q.d),q.c))
q.sc5(A.hw(q.c))
p=q.e.length
if(p!==0)q.f=q.f+A.hD(p)
B.a.bt(q.d,0)
B.a.j(q.d,$.fu().bs(7))
q.bb()
p=q.as
s=A.fl(q.c,q.e)
r=q.d
p.aE(t.O.a(s),t.w.a(r))
if(!A.V(q.y,q.x,q.z,B.a.gq(q.d),q.c)){A.eT("Game Ended! Final Score:"+q.f)
q.aw()
return}}q.au()
q.a2()},
bc(){var s=this,r=s.e
if(r.length!==0){s.sac(A.fl(s.c,r))
B.a.bi(s.e)}},
c1(a){var s,r,q,p=this
switch(t.db.a(a)){case B.v:p.aw()
break
case B.f:p.bY()
break
case B.h:s=p.y
r=p.x
q=p.z
if(typeof q!=="number")return q.m()
if(A.V(s,r,q+1,B.a.gq(p.d),p.c)){s=p.z
if(typeof s!=="number")return s.m()
p.z=s+1}else{s=p.y
r=p.x
if(typeof r!=="number")return r.m()
q=p.z
if(typeof q!=="number")return q.m()
if(A.V(s,r+1,q+1,B.a.gq(p.d),p.c)){s=p.z
if(typeof s!=="number")return s.m()
p.z=s+1
s=p.x
if(typeof s!=="number")return s.m()
p.x=s+1}else{s=p.y
if(typeof s!=="number")return s.V()
r=p.x
q=p.z
if(typeof q!=="number")return q.m()
if(A.V(s-1,r,q+1,B.a.gq(p.d),p.c)){s=p.z
if(typeof s!=="number")return s.m()
p.z=s+1
s=p.y
if(typeof s!=="number")return s.V()
p.y=s-1}else{s=p.y
if(typeof s!=="number")return s.m()
r=p.x
q=p.z
if(typeof q!=="number")return q.m()
if(A.V(s+1,r,q+1,B.a.gq(p.d),p.c)){s=p.z
if(typeof s!=="number")return s.m()
p.z=s+1
s=p.y
if(typeof s!=="number")return s.m()
p.y=s+1}else{s=p.y
if(typeof s!=="number")return s.V()
r=p.x
q=p.z
if(typeof q!=="number")return q.m()
if(A.V(s-2,r,q+1,B.a.gq(p.d),p.c)){s=p.z
if(typeof s!=="number")return s.m()
p.z=s+1
s=p.y
if(typeof s!=="number")return s.V()
p.y=s-2}else{s=p.y
if(typeof s!=="number")return s.m()
r=p.x
q=p.z
if(typeof q!=="number")return q.m()
if(A.V(s+2,r,q+1,B.a.gq(p.d),p.c)){s=p.z
if(typeof s!=="number")return s.m()
p.z=s+1
s=p.y
if(typeof s!=="number")return s.m()
p.y=s+2}}}}}}p.as.T(p.y,p.x,p.z)
break
case B.i:s=p.y
if(typeof s!=="number")return s.V()
if(A.V(s-1,p.x,p.z,B.a.gq(p.d),p.c)){s=p.y
if(typeof s!=="number")return s.V();--s
p.y=s
p.as.T(s,p.x,p.z)}break
case B.j:s=p.y
if(typeof s!=="number")return s.m()
if(A.V(s+1,p.x,p.z,B.a.gq(p.d),p.c)){s=p.y
if(typeof s!=="number")return s.m();++s
p.y=s
p.as.T(s,p.x,p.z)}break
case B.l:s=p.y
r=p.x
if(typeof r!=="number")return r.m()
if(A.V(s,r+1,p.z,B.a.gq(p.d),p.c)){s=p.x
if(typeof s!=="number")return s.m();++s
p.x=s
p.as.T(p.y,s,p.z)}break
case B.w:s=!p.a
p.a=s
if(s){s=p.at
if(s!=null)s.a4()}else p.a2()
s=p.as
r=p.a
s.b=r
s.bm(r)
A.eT(p.a?"Paused":"Unpaused")
break
case B.m:p.aY(-50)
break
case B.n:p.aY(50)
break}p.au()},
aY(a){var s,r="Speed set to tick:"
this.b+=a
s=this.as.c+=a
A.eT(r+s+"ms")
A.eT(r+this.b+"ms")},
bY(){var s,r=this
r.bc()
s=A.eR(r.y,r.x,r.z,B.a.gq(r.d),r.c)
r.x=s
r.as.T(r.y,s,r.z)
r.b6()},
sac(a){this.c=t.O.a(a)},
sci(a){this.d=t.w.a(a)},
sc5(a){this.e=t.w.a(a)},
sc2(a){this.r=A.aT(a)}}
A.aX.prototype={
bm(a){},
aE(a,b){t.O.a(a)
t.w.a(b)},
T(a,b,c){},
bl(){}}
A.b_.prototype={}
A.bo.prototype={
bm(a){this.w=a
if(a)this.aV()
else this.ak()},
aE(a,b){var s,r
t.O.a(a)
t.w.a(b)
s=new A.dI()
s.sbT(a)
s.scj(b)
s.c=A.ht(B.a.gq(s.b))
A.hu(B.a.gq(s.b))
s.e=0
this.d=s
s=this.f
r=new A.a8(null,null,A.d([],t.J))
r.bI(a,b,s)
this.e=r},
T(a,b,c){var s=this.d
s.c=a
s.e=c},
bl(){this.ak()},
ak(){var s=this
if(!s.w){s.aV()
s.r=A.f9(A.dB(Math.max(20,s.c)),s.gcA())}},
aV(){var s=this.r
if(s!=null)s.a4()},
cB(){var s,r,q,p=this
if(!p.b){s=p.e
s=s!=null&&s.d}else s=!1
if(s){s=p.d
r=s.e
if(typeof r!=="number")return r.aN()
r=B.d.aN(r,4)
q=p.e
if(r!==q.b)p.a.j(0,B.h)
else{s=s.c
q=q.a
if(typeof s!=="number")return s.d7()
if(typeof q!=="number")return A.S(q)
if(s>q)p.a.j(0,B.i)
else{r=p.a
if(s<q)r.j(0,B.j)
else r.j(0,B.f)}}}p.ak()}}
A.cY.prototype={}
A.dI.prototype={
i(a){var s=this,r=new A.X(A.d([s.gcV(),s.gd5()],t._),t.eU.a(new A.dJ()),t.ex).I(0,", "),q=B.a.I(s.gcF(),", ")
return"["+A.k(B.a.gq(s.b))+", "+r+", "+q+"],"},
gcV(){var s,r,q=J.fJ(4,t.e)
for(s=this.e,r=0;r<4;++r)q[r]=s===r?1:0
return q},
gd5(){var s,r,q=J.fJ(11,t.e)
for(s=this.c,r=0;r<11;++r)q[r]=s===r?1:0
return q},
gcF(){var s,r,q,p,o,n,m,l=A.d([],t.gs)
for(s=24,r=0;r<10;++r){p=0
while(!0){if(!(p<24)){q=!1
break}o=this.a
if(!(p<o.length))return A.f(o,p)
if(!J.F(J.W(o[p],r),0)){n=24-p
m=Math.min(s,n)
B.a.j(l,n)
s=m
q=!0
break}++p}if(!q){B.a.j(l,0)
s=0}}for(r=0;r<10;++r){if(!(r<l.length))return A.f(l,r)
B.a.t(l,r,l[r]-s)
if(!(r<l.length))return A.f(l,r)
l[r]=l[r]}return l},
sbT(a){this.a=t.O.a(a)},
scj(a){this.b=t.w.a(a)}}
A.dJ.prototype={
$1(a){return t.w.a(a)},
$S:2}
A.G.prototype={
i(a){return"GameInput."+this.b}}
A.bS.prototype={
ap(a){var s
t.q.a(a)
s=this.d
if(s.S(a.keyCode))this.a.j(0,s.p(0,a.keyCode))
else if(B.k.S(a.keyCode))this.a.j(0,B.k.p(0,a.keyCode))},
cd(a){var s,r
t.r.a(a)
s=a.touches
s=(s&&B.p).gq(s)
r=t.p
this.sbd(new A.ar(B.e.U(s.clientX),B.e.U(s.clientY),r))
s=a.touches
s=(s&&B.p).gq(s)
this.sb5(new A.ar(B.e.U(s.clientX),B.e.U(s.clientY),r))},
cb(a){var s,r,q,p,o,n=this,m=t.r.a(a).touches
m=(m&&B.p).gq(m)
n.sb5(new A.ar(B.e.U(m.clientX),B.e.U(m.clientY),t.p))
if(n.e.bk(n.f)>40){m=n.f
s=m.b
r=n.e
q=s-r.b
p=m.a-r.a
if(Math.abs(q)>Math.abs(p))if(q<0){n.a.j(0,B.h)
o=!0}else o=!1
else{m=n.a
if(p>0)m.j(0,B.j)
else m.j(0,B.i)
o=!0}if(o)n.sbd(n.f)}},
c9(a){var s,r,q,p,o=this
t.r.a(a)
if(o.e.bk(o.f)>40){s=o.f
r=s.b
q=o.e
p=r-q.b
if(Math.abs(p)>Math.abs(s.a-q.a))if(p>0)o.a.j(0,B.f)}},
sbd(a){this.e=t.u.a(a)},
sb5(a){this.f=t.u.a(a)}}
A.bi.prototype={
ap(a){t.q.a(a)
if(B.k.S(a.keyCode))this.a.j(0,B.k.p(0,a.keyCode))}}
A.b4.prototype={
gck(){var s=this.a,r=document
return A.d([r.querySelector(s).querySelector("#q1"),r.querySelector(s).querySelector("#q2"),r.querySelector(s).querySelector("#q3")],t.dp)},
aF(a){return this.cN(t.O.a(a))},
cN(a){var s=0,r=A.eD(t.z),q=this,p,o
var $async$aF=A.eG(function(b,c){if(b===1)return A.ey(c,r)
while(true)switch(s){case 0:p=q.a
o=document
if(o.querySelector(p)==null)throw A.a(A.fH('Unable to find component to mount Game into "'+p+'"'))
J.fx(o.querySelector(p),'<div id="board"></div>\n<div id="score"></div>\n<div id="high-score"></div>\n<div class="queue">\n    <div id="q1"></div>\n    <div id="q2"></div>\n    <div id="q3"></div>\n</div>')
J.fx(o.querySelector(p).querySelector("#board"),A.ho(a))
return A.ez(null,r)}})
return A.eA($async$aF,r)},
aI(a,b,c,d,e,f,g,h,i,j){var s=t.w
return this.cU(a,b,c,d,t.O.a(e),s.a(f),s.a(g),h,i,j)},
cU(a,b,c,d,e,f,a0,a1,a2,a3){var s=0,r=A.eD(t.z),q,p=this,o,n,m,l,k,j,i,h,g
var $async$aI=A.eG(function(a4,a5){if(a4===1)return A.ey(a5,r)
while(true)$async$outer:switch(s){case 0:i=A.dm(e,null)
h=A.f7(f,!0,t.e)
g=t.dE
if(g.b(a3)&&a3.e.d){g.a(a3)
g=a3.e
o=A.eR(g.a,b,g.b,d,e)
g=a3.e
i=A.fr(i,A.dm(A.dn(g.a,o,g.b,d,A.dr()),-2))}i=A.fr(A.fr(i,A.dm(A.dn(a,A.eR(a,b,c,d,e),c,d,A.dr()),-1)),A.dn(a,b,c,d,A.dr()))
g=A.L(i)
n=g.h("X<1,o*>")
m=A.f7(new A.X(i,g.h("i<o*>(1)").a(new A.e0()),n),!0,n.h("i.E"))
l=J.i1(document.querySelector(p.a).querySelector("#board"))
k=A.d([],t.ff)
for(b=0;b<24;++b)for(a=0;a<10;++a)B.a.j(k,B.a.A(a0,b))
for(d=0;d<l.gk(l);++d){g=l.p(0,d)
if(!(d<m.length)){q=A.f(m,d)
s=1
break $async$outer}n=A.fs(m[d],!1)
if(!(d<k.length)){q=A.f(k,d)
s=1
break $async$outer}j=k[d]?"remove":""
g.className="pixel "+n+" "+j}p.W(a1,a2)
p.av(h)
case 1:return A.ez(q,r)}})
return A.eA($async$aI,r)},
W(a,b){var s=0,r=A.eD(t.z),q=this,p,o,n,m,l
var $async$W=A.eG(function(c,d){if(c===1)return A.ey(d,r)
while(true)switch(s){case 0:n="Score: "+a
m=q.a
l=document
s=l.querySelector(m).querySelector("#score").innerText!==n?2:3
break
case 2:l.querySelector(m).querySelector("#score").innerText=n
s=a!==0&&!J.bh(l.querySelector(m).querySelector("#score")).A(0,"bounce-score")?4:5
break
case 4:J.bh(l.querySelector(m).querySelector("#score")).j(0,"bounce-score")
s=6
return A.he(A.fI(A.dB(400),t.z),$async$W)
case 6:J.bh(l.querySelector(m).querySelector("#score")).Y(0,"bounce-score")
case 5:case 3:p="Highest: "+b
o=b!==0
s=o&&l.querySelector(m).querySelector("#high-score").innerText!==p?7:8
break
case 7:l.querySelector(m).querySelector("#high-score").innerText=p
s=o&&!J.bh(l.querySelector(m).querySelector("#high-score")).A(0,"bounce-score")?9:10
break
case 9:J.bh(l.querySelector(m).querySelector("#high-score")).j(0,"bounce-score")
s=11
return A.he(A.fI(A.dB(400),t.z),$async$W)
case 11:J.bh(l.querySelector(m).querySelector("#high-score")).Y(0,"bounce-score")
case 10:case 8:return A.ez(null,r)}})
return A.eA($async$W,r)},
av(a){return this.ce(t.w.a(a))},
ce(a){var s=0,r=A.eD(t.z),q=this,p,o,n
var $async$av=A.eG(function(b,c){if(b===1)return A.ey(c,r)
while(true)switch(s){case 0:if(!A.kc(a,q.b))for(p=q.a,o=document,n=0;o.querySelector(p).querySelector("#q1"),o.querySelector(p).querySelector("#q2"),o.querySelector(p).querySelector("#q3"),n<3;++n)q.cf(n,a)
q.scg(a)
return A.ez(null,r)}})
return A.eA($async$av,r)},
cf(a,b){var s,r,q,p,o,n,m
t.w.a(b)
s=this.gck()
if(!(a<3))return A.f(s,a)
r=s[a]
s=a+1
if(!(s<b.length))return A.f(b,s)
q=B.a.p($.hz,b[s])
r.className="on-deck "+A.k7(q.length)
s=J.a1(r)
s.saG(r,A.ho(q))
p=A.L(q)
o=p.h("X<1,o*>")
n=A.f7(new A.X(q,p.h("i<o*>(1)").a(new A.e_()),o),!0,o.h("i.E"))
m=s.gaD(r)
for(a=0;a<m.gk(m);++a){s=m.p(0,a)
if(!(a<n.length))return A.f(n,a)
s.className="pixel "+A.fs(n[a],!0)}},
scg(a){this.b=t.w.a(a)},
$iii:1}
A.e0.prototype={
$1(a){return t.w.a(a)},
$S:2}
A.e_.prototype={
$1(a){return t.w.a(a)},
$S:2}
A.eI.prototype={
$1(a){return J.i2(t.w.a(a),A.k5(),t.dV)},
$S:29};(function aliases(){var s=J.bx.prototype
s.bB=s.i
s=J.aK.prototype
s.bG=s.i
s=A.ap.prototype
s.bD=s.bn
s.bE=s.bo
s.bF=s.bp
s=A.i.prototype
s.bC=s.a7
s=A.l.prototype
s.aa=s.D
s=A.c8.prototype
s.bH=s.H})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._instance_1u
s(A,"jo","ij",30)
s(A,"jE","iI",1)
s(A,"jF","iJ",1)
s(A,"jG","iK",1)
r(A,"hp","jx",0)
q(A,"jI","jr",4)
r(A,"jH","jq",0)
p(A.z.prototype,"gbW","O",4)
o(A.b9.prototype,"gcr","cs",0)
q(A,"jL","j9",32)
n(A,"jW",4,null,["$4"],["iM"],8,0)
n(A,"jX",4,null,["$4"],["iN"],8,0)
var l
o(l=A.cw.prototype,"gc_","b6",0)
m(l,"gc0","c1",25)
o(A.bo.prototype,"gcA","cB",0)
n(A,"hG",0,null,["$1","$0"],["hB",function(){return A.hB(null)}],34,0)
s(A,"k5","k8",23)
m(l=A.bS.prototype,"gao","ap",9)
m(l,"gcc","cd",3)
m(l,"gca","cb",3)
m(l,"gc8","c9",3)
m(A.bi.prototype,"gao","ap",9)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.m,null)
q(A.m,[A.f5,J.bx,J.a7,A.t,A.i,A.aL,A.y,A.bv,A.bt,A.bm,A.aE,A.dY,A.dR,A.bu,A.c9,A.C,A.dN,A.bB,A.cA,A.Z,A.d2,A.ca,A.df,A.cT,A.bl,A.at,A.b7,A.bV,A.aQ,A.z,A.cU,A.T,A.cZ,A.c5,A.b9,A.db,A.cf,A.cg,A.d6,A.aS,A.c3,A.q,A.J,A.c7,A.bp,A.e5,A.cE,A.bO,A.e7,A.dG,A.D,A.dc,A.cL,A.dx,A.f0,A.aR,A.B,A.bJ,A.c8,A.dd,A.aH,A.da,A.ce,A.ek,A.ar,A.a8,A.cw,A.aX,A.b_,A.dI,A.b4])
q(J.bx,[J.cy,J.bz,J.M,J.u,J.aZ,J.an])
q(J.M,[J.aK,A.x,A.cX,A.dz,A.cs,A.dA,A.b,A.d4,A.bE,A.d7,A.N,A.dg,A.dj])
q(J.aK,[J.cF,J.aP,J.a9])
r(J.dM,J.u)
q(J.aZ,[J.by,J.cz])
q(A.t,[A.cC,A.cH,A.bK,A.a4,A.cB,A.cQ,A.cI,A.bk,A.d1,A.cD,A.a2,A.cR,A.cP,A.as,A.cp,A.cr])
q(A.i,[A.n,A.bG,A.af,A.X,A.aO,A.aN])
q(A.n,[A.aq,A.bA])
q(A.y,[A.bH,A.bT,A.bQ,A.bN])
r(A.ac,A.aq)
r(A.br,A.aO)
r(A.bq,A.aN)
r(A.aJ,A.bm)
q(A.aE,[A.dK,A.cn,A.co,A.cO,A.eL,A.eN,A.e2,A.e1,A.eB,A.eb,A.ej,A.dW,A.ep,A.em,A.dC,A.e6,A.dQ,A.dP,A.eq,A.er,A.es,A.dw,A.dD,A.dE,A.dF,A.dJ,A.e0,A.e_,A.eI])
r(A.bL,A.a4)
q(A.cO,[A.cK,A.aW])
r(A.cS,A.bk)
r(A.bF,A.C)
q(A.bF,[A.ap,A.cV])
q(A.co,[A.eM,A.eC,A.eH,A.ec,A.dO,A.ex,A.dy])
r(A.cb,A.d1)
q(A.cn,[A.e3,A.e4,A.et,A.dH,A.e8,A.ef,A.ed,A.ea,A.ee,A.e9,A.ei,A.eh,A.eg,A.dX,A.en,A.eF,A.eo])
q(A.at,[A.bb,A.bZ])
r(A.b8,A.bb)
r(A.bU,A.b8)
r(A.bW,A.b7)
r(A.ag,A.bW)
r(A.b5,A.bV)
r(A.bX,A.cZ)
r(A.d9,A.cf)
r(A.c1,A.ap)
r(A.c6,A.cg)
r(A.c2,A.c6)
r(A.bD,A.c3)
r(A.bM,A.c7)
q(A.a2,[A.b1,A.cx])
r(A.h,A.x)
q(A.h,[A.l,A.a3,A.aG,A.b6])
q(A.l,[A.e,A.c])
q(A.e,[A.aU,A.ck,A.aV,A.aD,A.cv,A.cJ,A.bP,A.cM,A.cN,A.b3])
r(A.bn,A.cX)
q(A.bD,[A.cW,A.H,A.cu])
r(A.d5,A.d4)
r(A.am,A.d5)
r(A.bw,A.aG)
r(A.O,A.b)
q(A.O,[A.aa,A.ad])
r(A.d8,A.d7)
r(A.bI,A.d8)
r(A.dh,A.dg)
r(A.bR,A.dh)
r(A.dk,A.dj)
r(A.c4,A.dk)
r(A.d_,A.cV)
r(A.cq,A.bM)
q(A.cq,[A.d0,A.cm])
r(A.bY,A.bZ)
r(A.c_,A.T)
r(A.de,A.c8)
r(A.b2,A.c)
q(A.aX,[A.cY,A.bS])
r(A.bo,A.cY)
r(A.G,A.e5)
r(A.bi,A.bo)
s(A.c3,A.q)
s(A.c7,A.J)
s(A.cg,A.J)
s(A.cX,A.dx)
s(A.d4,A.q)
s(A.d5,A.B)
s(A.d7,A.q)
s(A.d8,A.B)
s(A.dg,A.q)
s(A.dh,A.B)
s(A.dj,A.q)
s(A.dk,A.B)
s(A.cY,A.b_)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",jN:"double",aA:"num",j:"String",w:"bool",D:"Null",p:"List"},mangledNames:{},types:["~()","~(~())","p<o*>*(p<o*>*)","~(ad*)","~(m,a0)","D()","~(@)","D(@)","w(l,j,j,aR)","~(aa*)","w(j)","w(Y)","w(h)","z<@>(@)","w(@)","~(m?,m?)","D(m,a0)","~(b)","w(m?)","~(o,@)","j(j)","~(h,h?)","w(a_<j>)","j*(o*)","o*(o*,a8*)","~(G*)","@(@,j)","D(@,a0)","@(j)","i<j*>*(p<o*>*)","o(m?)","@(@)","w(m?,m?)","D(~())","o*([@])","l(h)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.j2(v.typeUniverse,JSON.parse('{"cF":"aK","aP":"aK","a9":"aK","ki":"b","kp":"b","kh":"c","kq":"c","kj":"e","kt":"e","ku":"h","ko":"h","kI":"aG","kH":"x","kl":"O","kk":"a3","kw":"a3","ks":"l","kr":"am","cy":{"w":[]},"bz":{"D":[]},"u":{"p":["1"],"n":["1"],"i":["1"]},"dM":{"u":["1"],"p":["1"],"n":["1"],"i":["1"]},"a7":{"y":["1"]},"aZ":{"aA":[]},"by":{"o":[],"aA":[]},"cz":{"aA":[]},"an":{"j":[],"dS":[]},"cC":{"t":[]},"cH":{"t":[]},"bK":{"a4":[],"t":[]},"n":{"i":["1"]},"aq":{"n":["1"],"i":["1"]},"aL":{"y":["1"]},"bG":{"i":["2"],"i.E":"2"},"bH":{"y":["2"]},"ac":{"aq":["2"],"n":["2"],"i":["2"],"i.E":"2","aq.E":"2"},"af":{"i":["1"],"i.E":"1"},"bT":{"y":["1"]},"X":{"i":["2"],"i.E":"2"},"bv":{"y":["2"]},"aO":{"i":["1"],"i.E":"1"},"br":{"aO":["1"],"n":["1"],"i":["1"],"i.E":"1"},"bQ":{"y":["1"]},"aN":{"i":["1"],"i.E":"1"},"bq":{"aN":["1"],"n":["1"],"i":["1"],"i.E":"1"},"bN":{"y":["1"]},"bt":{"y":["1"]},"bm":{"ab":["1","2"]},"aJ":{"bm":["1","2"],"ab":["1","2"]},"bL":{"a4":[],"t":[]},"cB":{"t":[]},"cQ":{"t":[]},"c9":{"a0":[]},"aE":{"aI":[]},"cn":{"aI":[]},"co":{"aI":[]},"cO":{"aI":[]},"cK":{"aI":[]},"aW":{"aI":[]},"cI":{"t":[]},"cS":{"t":[]},"ap":{"C":["1","2"],"ab":["1","2"],"C.K":"1","C.V":"2"},"bA":{"n":["1"],"i":["1"],"i.E":"1"},"bB":{"y":["1"]},"cA":{"dS":[]},"ca":{"fW":[]},"d1":{"t":[]},"cb":{"a4":[],"t":[]},"z":{"al":["1"]},"df":{"iF":[]},"bl":{"t":[]},"bU":{"b8":["1"],"bb":["1"],"at":["1"]},"ag":{"bW":["1"],"b7":["1"],"T":["1"],"au":["1"]},"bV":{"fT":["1"],"h5":["1"],"au":["1"]},"b5":{"bV":["1"],"fT":["1"],"h5":["1"],"au":["1"]},"b8":{"bb":["1"],"at":["1"]},"bW":{"b7":["1"],"T":["1"],"au":["1"]},"b7":{"T":["1"],"au":["1"]},"bb":{"at":["1"]},"bX":{"cZ":["1"]},"b9":{"T":["1"]},"cf":{"h_":[]},"d9":{"cf":[],"h_":[]},"c1":{"ap":["1","2"],"C":["1","2"],"ab":["1","2"],"C.K":"1","C.V":"2"},"c2":{"J":["1"],"a_":["1"],"n":["1"],"i":["1"],"J.E":"1"},"aS":{"y":["1"]},"bD":{"q":["1"],"p":["1"],"n":["1"],"i":["1"]},"bF":{"C":["1","2"],"ab":["1","2"]},"C":{"ab":["1","2"]},"bM":{"J":["1"],"a_":["1"],"n":["1"],"i":["1"]},"c6":{"J":["1"],"a_":["1"],"n":["1"],"i":["1"]},"o":{"aA":[]},"p":{"n":["1"],"i":["1"]},"a_":{"n":["1"],"i":["1"]},"j":{"dS":[]},"bk":{"t":[]},"a4":{"t":[]},"cD":{"t":[]},"a2":{"t":[]},"b1":{"t":[]},"cx":{"t":[]},"cR":{"t":[]},"cP":{"t":[]},"as":{"t":[]},"cp":{"t":[]},"cE":{"t":[]},"bO":{"t":[]},"cr":{"t":[]},"dc":{"a0":[]},"l":{"h":[],"x":[]},"aa":{"b":[]},"h":{"x":[]},"ad":{"b":[]},"aR":{"Y":[]},"e":{"l":[],"h":[],"x":[]},"aU":{"l":[],"h":[],"x":[]},"ck":{"l":[],"h":[],"x":[]},"aV":{"l":[],"h":[],"x":[]},"aD":{"l":[],"h":[],"x":[]},"a3":{"h":[],"x":[]},"aG":{"h":[],"x":[]},"cW":{"q":["l"],"p":["l"],"n":["l"],"i":["l"],"q.E":"l"},"cv":{"l":[],"h":[],"x":[]},"am":{"q":["h"],"B":["h"],"p":["h"],"ao":["h"],"n":["h"],"i":["h"],"q.E":"h","B.E":"h"},"bw":{"h":[],"x":[]},"H":{"q":["h"],"p":["h"],"n":["h"],"i":["h"],"q.E":"h"},"bI":{"q":["h"],"B":["h"],"p":["h"],"ao":["h"],"n":["h"],"i":["h"],"q.E":"h","B.E":"h"},"cJ":{"l":[],"h":[],"x":[]},"bP":{"l":[],"h":[],"x":[]},"cM":{"l":[],"h":[],"x":[]},"cN":{"l":[],"h":[],"x":[]},"b3":{"l":[],"h":[],"x":[]},"bR":{"q":["N"],"B":["N"],"p":["N"],"ao":["N"],"n":["N"],"i":["N"],"q.E":"N","B.E":"N"},"O":{"b":[]},"b6":{"h":[],"x":[]},"c4":{"q":["h"],"B":["h"],"p":["h"],"ao":["h"],"n":["h"],"i":["h"],"q.E":"h","B.E":"h"},"cV":{"C":["j","j"],"ab":["j","j"]},"d_":{"C":["j","j"],"ab":["j","j"],"C.K":"j","C.V":"j"},"d0":{"J":["j"],"a_":["j"],"n":["j"],"i":["j"],"J.E":"j"},"bZ":{"at":["1"]},"bY":{"bZ":["1"],"at":["1"]},"c_":{"T":["1"]},"bJ":{"Y":[]},"c8":{"Y":[]},"de":{"Y":[]},"dd":{"Y":[]},"aH":{"y":["1"]},"da":{"iG":[]},"ce":{"iw":[]},"cq":{"J":["j"],"a_":["j"],"n":["j"],"i":["j"]},"cu":{"q":["l"],"p":["l"],"n":["l"],"i":["l"],"q.E":"l"},"b2":{"c":[],"l":[],"h":[],"x":[]},"cm":{"J":["j"],"a_":["j"],"n":["j"],"i":["j"],"J.E":"j"},"c":{"l":[],"h":[],"x":[]},"bo":{"aX":[],"b_":[]},"bS":{"aX":[]},"bi":{"aX":[],"b_":[]},"b4":{"ii":[]}}'))
A.j1(v.typeUniverse,JSON.parse('{"n":1,"bD":1,"bF":2,"bM":1,"c6":1,"c3":1,"c7":1,"cg":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",g:"`null` encountered as the result from expression with type `Never`."}
var t=(function rtii(){var s=A.fn
return{E:s("@<~>"),n:s("bl"),cR:s("aV"),t:s("aD"),R:s("n<@>"),h:s("l"),U:s("t"),B:s("b"),ex:s("X<p<o*>*,o*>"),Y:s("aI"),f:s("al<@>"),L:s("aJ<o*,G*>"),eh:s("i<h>"),hf:s("i<@>"),eU:s("i<o*>(p<o*>*)"),Q:s("u<Y>"),s:s("u<j>"),gn:s("u<@>"),J:s("u<a8*>"),dp:s("u<l*>"),ch:s("u<p<p<w*>*>*>"),I:s("u<p<p<o*>*>*>"),bB:s("u<p<w*>*>"),_:s("u<p<o*>*>"),V:s("u<j*>"),ff:s("u<w*>"),i:s("u<o*>"),gs:s("u<aA*>"),T:s("bz"),W:s("a9"),aU:s("ao<@>"),eO:s("ab<@,@>"),fj:s("ac<j*,j>"),A:s("h"),D:s("Y"),P:s("D"),K:s("m"),p:s("ar<aA>"),ew:s("b2"),a:s("a_<j>"),l:s("a0"),N:s("j"),d0:s("j(j*)"),g7:s("c"),aW:s("b3"),fY:s("N"),dd:s("fW"),eK:s("a4"),ak:s("aP"),m:s("b5<G*>"),x:s("b6"),ac:s("H"),j:s("bY<aa*>"),b1:s("bY<ad*>"),d:s("z<@>"),fJ:s("z<o>"),G:s("aR"),v:s("w"),al:s("w(m)"),gR:s("jN"),z:s("@"),fO:s("@()"),y:s("@(m)"),C:s("@(m,a0)"),bU:s("@(a_<j>)"),S:s("o"),d7:s("a8*"),db:s("G*"),q:s("aa*"),O:s("p<p<o*>*>*"),w:s("p<o*>*"),k:s("0&*"),c:s("m*"),dE:s("b_*"),u:s("ar<aA>*"),dV:s("j*"),r:s("ad*"),b:s("w*"),e:s("o*"),eH:s("al<D>?"),X:s("m?"),F:s("aQ<@,@>?"),g:s("d6?"),o:s("@(b)?"),Z:s("~()?"),di:s("aA"),H:s("~"),M:s("~()"),d5:s("~(m)"),da:s("~(m,a0)"),eA:s("~(j,j)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.C=A.aU.prototype
B.r=A.aD.prototype
B.N=A.cs.prototype
B.P=A.bw.prototype
B.Q=J.bx.prototype
B.a=J.u.prototype
B.d=J.by.prototype
B.e=J.aZ.prototype
B.c=J.an.prototype
B.R=J.a9.prototype
B.S=J.M.prototype
B.W=A.bE.prototype
B.A=J.cF.prototype
B.B=A.bP.prototype
B.p=A.bR.prototype
B.q=J.aP.prototype
B.D=new A.bt(A.fn("bt<0&*>"))
B.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.E=function() {
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
B.J=function(getTagFallback) {
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
B.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.G=function(hooks) {
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
B.I=function(hooks) {
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
B.H=function(hooks) {
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
B.u=function(hooks) { return hooks; }

B.K=new A.cE()
B.L=new A.ek()
B.b=new A.d9()
B.M=new A.dc()
B.O=new A.bp(0)
B.v=new A.G("reset")
B.f=new A.G("dropPiece")
B.h=new A.G("rotatePiece")
B.i=new A.G("movePieceLeft")
B.j=new A.G("movePieceRight")
B.l=new A.G("movePieceDown")
B.w=new A.G("togglePause")
B.m=new A.G("increaseSpeed")
B.n=new A.G("decreaseSpeed")
B.T=A.d(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.V)
B.x=A.d(s([-2,-1,0,1,2,3,4,5,6,7,8]),t.i)
B.U=A.d(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.V)
B.V=A.d(s([]),t.V)
B.y=A.d(s(["bind","if","ref","repeat","syntax"]),t.V)
B.o=A.d(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.V)
B.k=new A.aJ([27,B.v,80,B.w,107,B.m,187,B.m,109,B.n,189,B.n],t.L)
B.z=new A.aJ([13,B.f,38,B.h,37,B.i,39,B.j,40,B.l],t.L)
B.X=new A.aJ([32,B.f,87,B.h,65,B.i,68,B.j,83,B.l],t.L)})();(function staticFields(){$.el=null
$.fO=null
$.fC=null
$.fB=null
$.hr=null
$.hm=null
$.hA=null
$.eJ=null
$.eO=null
$.fp=null
$.bd=null
$.ch=null
$.ci=null
$.fi=!1
$.v=B.b
$.Q=A.d([],A.fn("u<m>"))
$.ak=null
$.f_=null
$.fG=null
$.fF=null
$.d3=A.iu(t.N,t.Y)
$.eZ=0
$.eS=A.d([1,2,2,2,4,4,4],t.i)
$.hz=function(){var s=t.i,r=t._
return A.d([A.d([A.d([1,1],s),A.d([1,1],s)],r),A.d([A.d([0,0,0,0],s),A.d([2,2,2,2],s),A.d([0,0,0,0],s),A.d([0,0,0,0],s)],r),A.d([A.d([0,0,0],s),A.d([0,3,3],s),A.d([3,3,0],s)],r),A.d([A.d([0,0,0],s),A.d([4,4,0],s),A.d([0,4,4],s)],r),A.d([A.d([0,5,0],s),A.d([0,5,0],s),A.d([0,5,5],s)],r),A.d([A.d([0,6,0],s),A.d([0,6,0],s),A.d([6,6,0],s)],r),A.d([A.d([0,0,0],s),A.d([7,7,7],s),A.d([0,7,0],s)],r)],t.I)}()})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazyOld
s($,"kn","hJ",()=>A.jT("_$dart_dartClosure"))
s($,"kx","hK",()=>A.ae(A.dZ({
toString:function(){return"$receiver$"}})))
s($,"ky","hL",()=>A.ae(A.dZ({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"kz","hM",()=>A.ae(A.dZ(null)))
s($,"kA","hN",()=>A.ae(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"kD","hQ",()=>A.ae(A.dZ(void 0)))
s($,"kE","hR",()=>A.ae(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"kC","hP",()=>A.ae(A.fX(null)))
s($,"kB","hO",()=>A.ae(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"kG","hT",()=>A.ae(A.fX(void 0)))
s($,"kF","hS",()=>A.ae(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"kJ","ft",()=>A.iH())
s($,"kK","hU",()=>A.fL(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N))
s($,"km","hI",()=>A.iA("^\\S+$"))
r($,"kX","fu",()=>B.L)
r($,"l_","hW",()=>A.jR())
r($,"kZ","hV",()=>A.jQ())})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.M,MediaError:J.M,Navigator:J.M,NavigatorConcurrentHardware:J.M,NavigatorUserMediaError:J.M,OverconstrainedError:J.M,PositionError:J.M,GeolocationPositionError:J.M,Range:J.M,HTMLAudioElement:A.e,HTMLBRElement:A.e,HTMLButtonElement:A.e,HTMLCanvasElement:A.e,HTMLContentElement:A.e,HTMLDListElement:A.e,HTMLDataElement:A.e,HTMLDataListElement:A.e,HTMLDetailsElement:A.e,HTMLDialogElement:A.e,HTMLDivElement:A.e,HTMLEmbedElement:A.e,HTMLFieldSetElement:A.e,HTMLHRElement:A.e,HTMLHeadElement:A.e,HTMLHeadingElement:A.e,HTMLHtmlElement:A.e,HTMLIFrameElement:A.e,HTMLImageElement:A.e,HTMLInputElement:A.e,HTMLLIElement:A.e,HTMLLabelElement:A.e,HTMLLegendElement:A.e,HTMLLinkElement:A.e,HTMLMapElement:A.e,HTMLMediaElement:A.e,HTMLMenuElement:A.e,HTMLMetaElement:A.e,HTMLMeterElement:A.e,HTMLModElement:A.e,HTMLOListElement:A.e,HTMLObjectElement:A.e,HTMLOptGroupElement:A.e,HTMLOptionElement:A.e,HTMLOutputElement:A.e,HTMLParagraphElement:A.e,HTMLParamElement:A.e,HTMLPictureElement:A.e,HTMLPreElement:A.e,HTMLProgressElement:A.e,HTMLQuoteElement:A.e,HTMLScriptElement:A.e,HTMLShadowElement:A.e,HTMLSlotElement:A.e,HTMLSourceElement:A.e,HTMLSpanElement:A.e,HTMLStyleElement:A.e,HTMLTableCaptionElement:A.e,HTMLTableCellElement:A.e,HTMLTableDataCellElement:A.e,HTMLTableHeaderCellElement:A.e,HTMLTableColElement:A.e,HTMLTextAreaElement:A.e,HTMLTimeElement:A.e,HTMLTitleElement:A.e,HTMLTrackElement:A.e,HTMLUListElement:A.e,HTMLUnknownElement:A.e,HTMLVideoElement:A.e,HTMLDirectoryElement:A.e,HTMLFontElement:A.e,HTMLFrameElement:A.e,HTMLFrameSetElement:A.e,HTMLMarqueeElement:A.e,HTMLElement:A.e,HTMLAnchorElement:A.aU,HTMLAreaElement:A.ck,HTMLBaseElement:A.aV,HTMLBodyElement:A.aD,CDATASection:A.a3,CharacterData:A.a3,Comment:A.a3,ProcessingInstruction:A.a3,Text:A.a3,CSSStyleDeclaration:A.bn,MSStyleCSSProperties:A.bn,CSS2Properties:A.bn,XMLDocument:A.aG,Document:A.aG,DOMException:A.dz,DOMImplementation:A.cs,DOMTokenList:A.dA,MathMLElement:A.l,Element:A.l,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,CustomEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,Window:A.x,DOMWindow:A.x,EventTarget:A.x,HTMLFormElement:A.cv,HTMLCollection:A.am,HTMLFormControlsCollection:A.am,HTMLOptionsCollection:A.am,HTMLDocument:A.bw,KeyboardEvent:A.aa,Location:A.bE,DocumentFragment:A.h,ShadowRoot:A.h,DocumentType:A.h,Node:A.h,NodeList:A.bI,RadioNodeList:A.bI,HTMLSelectElement:A.cJ,HTMLTableElement:A.bP,HTMLTableRowElement:A.cM,HTMLTableSectionElement:A.cN,HTMLTemplateElement:A.b3,Touch:A.N,TouchEvent:A.ad,TouchList:A.bR,CompositionEvent:A.O,FocusEvent:A.O,MouseEvent:A.O,DragEvent:A.O,PointerEvent:A.O,TextEvent:A.O,WheelEvent:A.O,UIEvent:A.O,Attr:A.b6,NamedNodeMap:A.c4,MozNamedAttrMap:A.c4,SVGScriptElement:A.b2,SVGAElement:A.c,SVGAnimateElement:A.c,SVGAnimateMotionElement:A.c,SVGAnimateTransformElement:A.c,SVGAnimationElement:A.c,SVGCircleElement:A.c,SVGClipPathElement:A.c,SVGDefsElement:A.c,SVGDescElement:A.c,SVGDiscardElement:A.c,SVGEllipseElement:A.c,SVGFEBlendElement:A.c,SVGFEColorMatrixElement:A.c,SVGFEComponentTransferElement:A.c,SVGFECompositeElement:A.c,SVGFEConvolveMatrixElement:A.c,SVGFEDiffuseLightingElement:A.c,SVGFEDisplacementMapElement:A.c,SVGFEDistantLightElement:A.c,SVGFEFloodElement:A.c,SVGFEFuncAElement:A.c,SVGFEFuncBElement:A.c,SVGFEFuncGElement:A.c,SVGFEFuncRElement:A.c,SVGFEGaussianBlurElement:A.c,SVGFEImageElement:A.c,SVGFEMergeElement:A.c,SVGFEMergeNodeElement:A.c,SVGFEMorphologyElement:A.c,SVGFEOffsetElement:A.c,SVGFEPointLightElement:A.c,SVGFESpecularLightingElement:A.c,SVGFESpotLightElement:A.c,SVGFETileElement:A.c,SVGFETurbulenceElement:A.c,SVGFilterElement:A.c,SVGForeignObjectElement:A.c,SVGGElement:A.c,SVGGeometryElement:A.c,SVGGraphicsElement:A.c,SVGImageElement:A.c,SVGLineElement:A.c,SVGLinearGradientElement:A.c,SVGMarkerElement:A.c,SVGMaskElement:A.c,SVGMetadataElement:A.c,SVGPathElement:A.c,SVGPatternElement:A.c,SVGPolygonElement:A.c,SVGPolylineElement:A.c,SVGRadialGradientElement:A.c,SVGRectElement:A.c,SVGSetElement:A.c,SVGStopElement:A.c,SVGStyleElement:A.c,SVGSVGElement:A.c,SVGSwitchElement:A.c,SVGSymbolElement:A.c,SVGTSpanElement:A.c,SVGTextContentElement:A.c,SVGTextElement:A.c,SVGTextPathElement:A.c,SVGTextPositioningElement:A.c,SVGTitleElement:A.c,SVGUseElement:A.c,SVGViewElement:A.c,SVGGradientElement:A.c,SVGComponentTransferFunctionElement:A.c,SVGFEDropShadowElement:A.c,SVGMPathElement:A.c,SVGElement:A.c})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,Range:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMTokenList:true,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,WheelEvent:true,UIEvent:false,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.k4
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
