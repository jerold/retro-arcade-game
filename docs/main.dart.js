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
a[c]=function(){a[c]=function(){A.kg(b)}
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
if(a[b]!==s)A.kh(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.fq(b)
return new s(c,this)}:function(){if(s===null)s=A.fq(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.fq(a).prototype
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
a(hunkHelpers,v,w,$)}var A={f8:function f8(){},
fU(a){return new A.cI(a)},
fZ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dq(a,b,c){if(a==null)throw A.a(new A.bK(b,c.h("bK<0>")))
return a},
iJ(a,b,c){var s="takeCount"
A.f0(b,s,t.S)
A.cH(b,s)
if(t.U.b(a))return new A.br(a,b,c.h("br<0>"))
return new A.aS(a,b,c.h("aS<0>"))},
iI(a,b,c){var s="count"
if(t.U.b(a)){A.f0(b,s,t.S)
A.cH(b,s)
return new A.bq(a,b,c.h("bq<0>"))}A.f0(b,s,t.S)
A.cH(b,s)
return new A.aR(a,b,c.h("aR<0>"))},
dN(){return new A.ax("No element")},
is(){return new A.ax("Too many elements")},
cD:function cD(a){this.a=a},
cI:function cI(a){this.a=a},
bK:function bK(a,b){this.a=a
this.$ti=b},
n:function n(){},
av:function av(){},
aP:function aP(a,b,c){var _=this
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
ad:function ad(a,b,c){this.a=a
this.b=b
this.$ti=c},
ag:function ag(a,b,c){this.a=a
this.b=b
this.$ti=c},
bU:function bU(a,b,c){this.a=a
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
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
br:function br(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(a,b,c){this.a=a
this.b=b
this.$ti=c},
aR:function aR(a,b,c){this.a=a
this.b=b
this.$ti=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.$ti=c},
bO:function bO(a,b,c){this.a=a
this.b=b
this.$ti=c},
bt:function bt(a){this.$ti=a},
ip(a){if(typeof a=="number")return B.e.gB(a)
if(t.dd.b(a))return A.b2(a)
return A.hC(a)},
iq(a){return new A.dM(a)},
hJ(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
k4(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
k(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.al(a)
if(typeof s!="string")throw A.a(A.cn(a,"object","toString method returned 'null'"))
return s},
b2(a){var s,r=$.fS
if(r==null)r=$.fS=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dV(a){return A.iC(a)},
iC(a){var s,r,q,p
if(a instanceof A.m)return A.Q(A.T(a),null)
s=J.bh(a)
if(s===B.Q||s===B.S||t.ak.b(a)){r=B.u(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.Q(A.T(a),null)},
M(a){throw A.a(A.hq(a))},
f(a,b){if(a==null)J.a7(a)
throw A.a(A.bg(a,b))},
bg(a,b){var s,r,q="index"
if(!A.fn(b))return new A.a3(!0,b,q,null)
s=A.aX(J.a7(a))
if(!(b<0)){if(typeof s!=="number")return A.M(s)
r=b>=s}else r=!0
if(r)return A.b0(b,a,q,null,s)
return A.fT(b,q)},
hq(a){return new A.a3(!0,a,null,null)},
a(a){var s,r
if(a==null)a=new A.cE()
s=new Error()
s.dartException=a
r=A.ki
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
ki(){return J.al(this.dartException)},
aj(a){throw A.a(a)},
eY(a){throw A.a(A.an(a))},
af(a){var s,r,q,p,o,n
a=A.kd(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.e_(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
e0(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
h0(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
f9(a,b){var s=b==null,r=s?null:b.method
return new A.cC(a,r,s?null:b.receiver)},
ak(a){if(a==null)return new A.dT(a)
if(a instanceof A.bu)return A.aG(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.aG(a,a.dartException)
return A.jG(a)},
aG(a,b){if(t.W.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.cv(r,16)&8191)===10)switch(q){case 438:return A.aG(a,A.f9(A.k(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.k(s)
return A.aG(a,new A.bL(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.hO()
n=$.hP()
m=$.hQ()
l=$.hR()
k=$.hU()
j=$.hV()
i=$.hT()
$.hS()
h=$.hX()
g=$.hW()
f=o.F(s)
if(f!=null)return A.aG(a,A.f9(A.J(s),f))
else{f=n.F(s)
if(f!=null){f.method="call"
return A.aG(a,A.f9(A.J(s),f))}else{f=m.F(s)
if(f==null){f=l.F(s)
if(f==null){f=k.F(s)
if(f==null){f=j.F(s)
if(f==null){f=i.F(s)
if(f==null){f=l.F(s)
if(f==null){f=h.F(s)
if(f==null){f=g.F(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.J(s)
return A.aG(a,new A.bL(s,f==null?e:f.method))}}}return A.aG(a,new A.cR(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bP()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.aG(a,new A.a3(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bP()
return a},
aE(a){var s
if(a instanceof A.bu)return a.b
if(a==null)return new A.ca(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.ca(a)},
hC(a){if(a==null||typeof a!="object")return J.eZ(a)
else return A.b2(a)},
jR(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.t(0,a[s],a[r])}return b},
k3(a,b,c,d,e,f){t.Y.a(a)
switch(A.aX(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(A.fM("Unsupported number of arguments for wrapped closure"))},
dr(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.k3)
a.$identity=s
return s},
ii(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
A.S(h)
s=h?Object.create(new A.cL().constructor.prototype):Object.create(new A.b_(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.fJ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.id(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.fJ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
id(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(A.S(b))throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ib)}throw A.a("Error in functionType of tearoff")},
ie(a,b,c,d){var s=A.fI
switch(A.S(b)?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
fJ(a,b,c,d){var s,r
if(A.S(c))return A.ih(a,b,d)
s=b.length
r=A.ie(s,d,a,b)
return r},
ig(a,b,c,d){var s=A.fI,r=A.ic
switch(A.S(b)?-1:a){case 0:throw A.a(new A.cJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
ih(a,b,c){var s,r
if($.fG==null)$.fG=A.fF("interceptor")
if($.fH==null)$.fH=A.fF("receiver")
s=b.length
r=A.ig(s,c,a,b)
return r},
fq(a){return A.ii(a)},
ib(a,b){return A.ey(v.typeUniverse,A.T(a.a),b)},
fI(a){return a.a},
ic(a){return a.b},
fF(a){var s,r,q,p=new A.b_("receiver","interceptor"),o=J.f7(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.a(A.bk("Field name "+a+" not found.",null))},
S(a){if(a==null)A.jI("boolean expression must not be null")
return a},
jI(a){throw A.a(new A.cU(a))},
kg(a){throw A.a(new A.ct(a))},
jW(a){return v.getIsolateTag(a)},
l0(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
k6(a){var s,r,q,p,o,n=A.J($.hw.$1(a)),m=$.eM[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eR[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.hg($.hp.$2(a,n))
if(q!=null){m=$.eM[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eR[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.eT(s)
$.eM[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.eR[n]=s
return s}if(p==="-"){o=A.eT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hD(a,s)
if(p==="*")throw A.a(A.h1(n))
if(v.leafTags[n]===true){o=A.eT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hD(a,s)},
hD(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fu(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
eT(a){return J.fu(a,!1,null,!!a.$iat)},
k9(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.eT(s)
else return J.fu(s,c,null,null)},
k1(){if(!0===$.ft)return
$.ft=!0
A.k2()},
k2(){var s,r,q,p,o,n,m,l
$.eM=Object.create(null)
$.eR=Object.create(null)
A.k0()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hF.$1(o)
if(n!=null){m=A.k9(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
k0(){var s,r,q,p,o,n,m=B.E()
m=A.bf(B.F,A.bf(B.G,A.bf(B.v,A.bf(B.v,A.bf(B.H,A.bf(B.I,A.bf(B.J(B.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hw=new A.eO(p)
$.hp=new A.eP(o)
$.hF=new A.eQ(n)},
bf(a,b){return a(b)||b},
ix(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.a(new A.dI("Illegal RegExp pattern ("+String(n)+")",a))},
kd(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bn:function bn(){},
aN:function aN(a,b){this.a=a
this.$ti=b},
dM:function dM(a){this.a=a},
e_:function e_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bL:function bL(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.a=a},
dT:function dT(a){this.a=a},
bu:function bu(a,b){this.a=a
this.b=b},
ca:function ca(a){this.a=a
this.b=null},
am:function am(){},
cp:function cp(){},
cq:function cq(){},
cP:function cP(){},
cL:function cL(){},
b_:function b_(a,b){this.a=a
this.b=b},
cJ:function cJ(a){this.a=a},
cU:function cU(a){this.a=a},
au:function au(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dP:function dP(a,b){var _=this
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
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
eQ:function eQ(a){this.a=a},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iH(a,b){var s=b.c
return s==null?b.c=A.fj(a,b.y,!0):s},
fV(a,b){var s=b.c
return s==null?b.c=A.cd(a,"ap",[b.y]):s},
fW(a){var s=a.x
if(s===6||s===7||s===8)return A.fW(a.y)
return s===11||s===12},
iG(a){return a.at},
fr(a){return A.ex(v.typeUniverse,a,!1)},
aD(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.aD(a,s,a0,a1)
if(r===s)return b
return A.hc(a,r,!0)
case 7:s=b.y
r=A.aD(a,s,a0,a1)
if(r===s)return b
return A.fj(a,r,!0)
case 8:s=b.y
r=A.aD(a,s,a0,a1)
if(r===s)return b
return A.hb(a,r,!0)
case 9:q=b.z
p=A.cl(a,q,a0,a1)
if(p===q)return b
return A.cd(a,b.y,p)
case 10:o=b.y
n=A.aD(a,o,a0,a1)
m=b.z
l=A.cl(a,m,a0,a1)
if(n===o&&l===m)return b
return A.fh(a,n,l)
case 11:k=b.y
j=A.aD(a,k,a0,a1)
i=b.z
h=A.jD(a,i,a0,a1)
if(j===k&&h===i)return b
return A.ha(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.cl(a,g,a0,a1)
o=b.y
n=A.aD(a,o,a0,a1)
if(f===g&&n===o)return b
return A.fi(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.a(A.dw("Attempted to substitute unexpected RTI kind "+c))}},
cl(a,b,c,d){var s,r,q,p,o=b.length,n=A.ez(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aD(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jE(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ez(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aD(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jD(a,b,c,d){var s,r=b.a,q=A.cl(a,r,c,d),p=b.b,o=A.cl(a,p,c,d),n=b.c,m=A.jE(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.d3()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
ht(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jY(s)
return a.$S()}return null},
hA(a,b){var s
if(A.fW(b))if(a instanceof A.am){s=A.ht(a)
if(s!=null)return s}return A.T(a)},
T(a){var s
if(a instanceof A.m){s=a.$ti
return s!=null?s:A.fl(a)}if(Array.isArray(a))return A.I(a)
return A.fl(J.bh(a))},
I(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
r(a){var s=a.$ti
return s!=null?s:A.fl(a)},
fl(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.jk(a,s)},
jk(a,b){var s=a instanceof A.am?a.__proto__.__proto__.constructor:b,r=A.j9(v.typeUniverse,s.name)
b.$ccache=r
return r},
jY(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ex(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hu(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.cb(a)
q=A.ex(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.cb(q):p},
jj(a){var s,r,q,p=this,o=t.K
if(p===o)return A.bd(p,a,A.jo)
if(!A.ai(p))if(!(p===t.c))o=p===o
else o=!0
else o=!0
if(o)return A.bd(p,a,A.jr)
o=p.x
s=o===6?p.y:p
if(s===t.S)r=A.fn
else if(s===t.gR||s===t.di)r=A.jn
else if(s===t.N)r=A.jp
else r=s===t.v?A.hk:null
if(r!=null)return A.bd(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.k5)){p.r="$i"+q
if(q==="p")return A.bd(p,a,A.jm)
return A.bd(p,a,A.jq)}}else if(o===7)return A.bd(p,a,A.jh)
return A.bd(p,a,A.jf)},
bd(a,b,c){a.b=c
return a.b(b)},
ji(a){var s,r,q=this
if(!A.ai(q))if(!(q===t.c))s=q===t.K
else s=!0
else s=!0
if(s)r=A.jc
else if(q===t.K)r=A.jb
else r=A.jg
q.a=r
return q.a(a)},
eH(a){var s,r=a.x
if(!A.ai(a))if(!(a===t.c))if(!(a===t.x))if(r!==7)s=r===8&&A.eH(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
jf(a){var s=this
if(a==null)return A.eH(s)
return A.E(v.typeUniverse,A.hA(a,s),null,s,null)},
jh(a){if(a==null)return!0
return this.y.b(a)},
jq(a){var s,r=this
if(a==null)return A.eH(r)
s=r.r
if(a instanceof A.m)return!!a[s]
return!!J.bh(a)[s]},
jm(a){var s,r=this
if(a==null)return A.eH(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.m)return!!a[s]
return!!J.bh(a)[s]},
kZ(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.hi(a,s)},
jg(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.hi(a,s)},
hi(a,b){throw A.a(A.j_(A.h3(a,A.hA(a,b),A.Q(b,null))))},
h3(a,b,c){var s=A.cv(a)
return s+": type '"+A.k(A.Q(b==null?A.T(a):b,null))+"' is not a subtype of type '"+A.k(c)+"'"},
j_(a){return new A.cc("TypeError: "+a)},
L(a,b){return new A.cc("TypeError: "+A.h3(a,null,b))},
jo(a){return a!=null},
jb(a){return a},
jr(a){return!0},
jc(a){return a},
hk(a){return!0===a||!1===a},
kO(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a(A.L(a,"bool"))},
hf(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.L(a,"bool"))},
kP(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.L(a,"bool?"))},
kQ(a){if(typeof a=="number")return a
throw A.a(A.L(a,"double"))},
kS(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.L(a,"double"))},
kR(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.L(a,"double?"))},
fn(a){return typeof a=="number"&&Math.floor(a)===a},
kT(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a(A.L(a,"int"))},
aX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.L(a,"int"))},
kU(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.L(a,"int?"))},
jn(a){return typeof a=="number"},
kV(a){if(typeof a=="number")return a
throw A.a(A.L(a,"num"))},
kX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.L(a,"num"))},
kW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.L(a,"num?"))},
jp(a){return typeof a=="string"},
kY(a){if(typeof a=="string")return a
throw A.a(A.L(a,"String"))},
J(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.L(a,"String"))},
hg(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.L(a,"String?"))},
jz(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=B.c.m(r,A.Q(a[q],b))
return s},
hj(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=A.c([],t.s)
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
if(!j)l+=B.c.m(" extends ",A.Q(h,a6))}l+=">"}else{l=""
r=null}o=a5.y
f=a5.z
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=A.Q(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=B.c.m(a3,A.Q(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=B.c.m(a3,A.Q(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.fz(A.Q(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+A.k(a1)},
Q(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.Q(a.y,b)
return s}if(l===7){r=a.y
s=A.Q(r,b)
q=r.x
return J.fz(q===11||q===12?B.c.m("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+A.k(A.Q(a.y,b))+">"
if(l===9){p=A.jF(a.y)
o=a.z
return o.length>0?p+("<"+A.jz(o,b)+">"):p}if(l===11)return A.hj(a,b,null)
if(l===12)return A.hj(a.y,b,a.z)
if(l===13){b.toString
n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
jF(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
ja(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
j9(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ex(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ce(a,5,"#")
q=A.ez(s)
for(p=0;p<s;++p)q[p]=r
o=A.cd(a,b,q)
n[b]=o
return o}else return m},
j7(a,b){return A.hd(a.tR,b)},
j6(a,b){return A.hd(a.eT,b)},
ex(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.h7(A.h5(a,null,b,c))
r.set(b,s)
return s},
ey(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.h7(A.h5(a,b,c,!0))
q.set(c,r)
return r},
j8(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.fh(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
aB(a,b){b.a=A.ji
b.b=A.jj
return b},
ce(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.Z(null,null)
s.x=b
s.at=c
r=A.aB(a,s)
a.eC.set(c,r)
return r},
hc(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.j4(a,b,r,c)
a.eC.set(r,s)
return s},
j4(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.ai(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.Z(null,null)
q.x=6
q.y=b
q.at=c
return A.aB(a,q)},
fj(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.j3(a,b,r,c)
a.eC.set(r,s)
return s},
j3(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.ai(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.eS(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.x)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.eS(q.y))return q
else return A.iH(a,b)}}p=new A.Z(null,null)
p.x=7
p.y=b
p.at=c
return A.aB(a,p)},
hb(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.j1(a,b,r,c)
a.eC.set(r,s)
return s},
j1(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.ai(b))if(!(b===t.c))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.cd(a,"ap",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.Z(null,null)
q.x=8
q.y=b
q.at=c
return A.aB(a,q)},
j5(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.Z(null,null)
s.x=13
s.y=b
s.at=q
r=A.aB(a,s)
a.eC.set(q,r)
return r},
dj(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
j0(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
cd(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dj(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.Z(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.aB(a,r)
a.eC.set(p,q)
return q},
fh(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.dj(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.Z(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.aB(a,o)
a.eC.set(q,n)
return n},
ha(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dj(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dj(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.j0(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.Z(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.aB(a,p)
a.eC.set(r,o)
return o},
fi(a,b,c,d){var s,r=b.at+("<"+A.dj(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.j2(a,b,c,r,d)
a.eC.set(r,s)
return s},
j2(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ez(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.aD(a,b,r,0)
m=A.cl(a,c,r,0)
return A.fi(a,n,m,c!==m)}}l=new A.Z(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.aB(a,l)},
h5(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
h7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=A.iV(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.h6(a,r,g,f,!1)
else if(q===46)r=A.h6(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(A.aA(a.u,a.e,f.pop()))
break
case 94:f.push(A.j5(a.u,f.pop()))
break
case 35:f.push(A.ce(a.u,5,"#"))
break
case 64:f.push(A.ce(a.u,2,"@"))
break
case 126:f.push(A.ce(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
A.fg(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(A.cd(p,n,o))
else{m=A.aA(p,a.e,n)
switch(m.x){case 11:f.push(A.fi(p,m,o,a.n))
break
default:f.push(A.fh(p,m,o))
break}}break
case 38:A.iW(a,f)
break
case 42:l=a.u
f.push(A.hc(l,A.aA(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(A.fj(l,A.aA(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(A.hb(l,A.aA(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new A.d3()
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
A.fg(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(A.ha(p,A.aA(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
A.fg(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
A.iY(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return A.aA(a.u,a.e,h)},
iV(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
h6(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.ja(s,o.y)[p]
if(n==null)A.aj('No "'+p+'" in "'+A.iG(o)+'"')
d.push(A.ey(s,o,n))}else d.push(p)
return m},
iW(a,b){var s=b.pop()
if(0===s){b.push(A.ce(a.u,1,"0&"))
return}if(1===s){b.push(A.ce(a.u,4,"1&"))
return}throw A.a(A.dw("Unexpected extended operation "+A.k(s)))},
aA(a,b,c){if(typeof c=="string")return A.cd(a,c,a.sEA)
else if(typeof c=="number")return A.iX(a,b,c)
else return c},
fg(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aA(a,b,c[s])},
iY(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aA(a,b,c[s])},
iX(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.a(A.dw("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.a(A.dw("Bad index "+c+" for "+b.i(0)))},
E(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.ai(d))if(!(d===t.c))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.ai(b))return!1
if(b.x!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(A.E(a,c[b.y],c,d,e))return!0
p=d.x
if(r===6)return A.E(a,b.y,c,d,e)
if(p===6){s=d.y
return A.E(a,b,c,s,e)}if(r===8){if(!A.E(a,b.y,c,d,e))return!1
return A.E(a,A.fV(a,b),c,d,e)}if(r===7){s=A.E(a,b.y,c,d,e)
return s}if(p===8){if(A.E(a,b,c,d.y,e))return!0
return A.E(a,b,c,A.fV(a,d),e)}if(p===7){s=A.E(a,b,c,d.y,e)
return s}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
if(p===12){if(b===t.a)return!0
if(r!==12)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.E(a,k,c,j,e)||!A.E(a,j,e,k,c))return!1}return A.hl(a,b.y,c,d.y,e)}if(p===11){if(b===t.a)return!0
if(s)return!1
return A.hl(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.jl(a,b,c,d,e)}return!1},
hl(a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
jl(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ey(a,b,r[o])
return A.he(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.he(a,n,null,c,m,e)},
he(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.E(a,r,d,q,f))return!1}return!0},
eS(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.ai(a))if(r!==7)if(!(r===6&&A.eS(a.y)))s=r===8&&A.eS(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
k5(a){var s
if(!A.ai(a))if(!(a===t.c))s=a===t.K
else s=!0
else s=!0
return s},
ai(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
hd(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ez(a){return a>0?new Array(a):v.typeUniverse.sEA},
Z:function Z(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
d3:function d3(){this.c=this.b=this.a=null},
cb:function cb(a){this.a=a},
d2:function d2(){},
cc:function cc(a){this.a=a},
iM(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.jJ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.dr(new A.e5(q),1)).observe(s,{childList:true})
return new A.e4(q,s,r)}else if(self.setImmediate!=null)return A.jK()
return A.jL()},
iN(a){self.scheduleImmediate(A.dr(new A.e6(t.M.a(a)),0))},
iO(a){self.setImmediate(A.dr(new A.e7(t.M.a(a)),0))},
iP(a){A.fd(B.O,t.M.a(a))},
fd(a,b){var s=B.d.a3(a.a,1000)
return A.iZ(s<0?0:s,b)},
iZ(a,b){var s=new A.dg()
s.bK(a,b)
return s},
eG(a){return new A.cV(new A.z($.v,a.h("z<0>")),a.h("cV<0>"))},
eD(a,b){a.$2(0,null)
b.b=!0
return b.a},
hh(a,b){A.jd(a,b)},
eC(a,b){var s,r
b.toString
s=b.$ti
s.h("1/?").a(a)
if(!b.b)b.a.bQ(a)
else{r=b.a
if(s.h("ap<1>").b(a))r.aX(a)
else r.af(s.c.a(a))}},
eB(a,b){var s,r=A.ak(a),q=A.aE(a)
b.toString
if(q==null)q=A.fE(r)
s=b.a
if(b.b)s.O(r,q)
else s.bR(r,q)},
jd(a,b){var s,r,q=new A.eE(b),p=new A.eF(b)
if(a instanceof A.z)a.be(q,p,t.z)
else{s=t.z
if(t.f.b(a))a.aL(q,p,s)
else{r=new A.z($.v,t.d)
r.a=8
r.c=a
r.be(q,p,s)}}},
eJ(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.v.aI(new A.eK(s),t.H,t.S,t.z)},
dx(a,b){var s=A.dq(a,"error",t.K)
return new A.bm(s,b==null?A.fE(a):b)},
fE(a){var s
if(t.W.b(a)){s=a.gZ()
if(s!=null)return s}return B.M},
fN(a,b){var s=new A.z($.v,b.h("z<0>"))
A.fc(a,new A.dJ(null,s,b))
return s},
fe(a,b){var s,r,q
for(s=t.d;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.a0()
b.ad(a)
A.bb(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.b9(q)}},
bb(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.f;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.dm(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.bb(c.a,b)
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
A.dm(i.a,i.b)
return}f=$.v
if(f!==g)$.v=g
else f=null
b=b.c
if((b&15)===8)new A.el(p,c,m).$0()
else if(n){if((b&1)!==0)new A.ek(p,i).$0()}else if((b&2)!==0)new A.ej(c,p).$0()
if(f!=null)$.v=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.h("ap<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if(b instanceof A.z)if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.a1(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.fe(b,e)
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
jx(a,b){var s
if(t.C.b(a))return b.aI(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.a(A.cn(a,"onError",u.c))},
ju(){var s,r
for(s=$.be;s!=null;s=$.be){$.ck=null
r=s.b
$.be=r
if(r==null)$.cj=null
s.a.$0()}},
jC(){$.fm=!0
try{A.ju()}finally{$.ck=null
$.fm=!1
if($.be!=null)$.fy().$1(A.hs())}},
ho(a){var s=new A.cW(a),r=$.cj
if(r==null){$.be=$.cj=s
if(!$.fm)$.fy().$1(A.hs())}else $.cj=r.b=s},
jB(a){var s,r,q,p=$.be
if(p==null){A.ho(a)
$.ck=$.cj
return}s=new A.cW(a)
r=$.ck
if(r==null){s.b=p
$.be=$.ck=s}else{q=r.b
s.b=q
$.ck=r.b=s
if(q==null)$.cj=s}},
hG(a){var s,r=null,q=$.v
if(B.b===q){A.aC(r,r,B.b,a)
return}s=!1
if(s){A.aC(r,r,q,t.M.a(a))
return}A.aC(r,r,q,t.M.a(q.aA(a)))},
ky(a,b){A.dq(a,"stream",t.K)
return new A.dc(b.h("dc<0>"))},
jA(a){return},
iQ(a,b){if(b==null)b=A.jN()
if(t.da.b(b))return a.aI(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.y.a(b)
throw A.a(A.bk("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
jw(a,b){A.dm(a,b)},
jv(){},
fc(a,b){var s=$.v
if(s===B.b)return A.fd(a,t.M.a(b))
return A.fd(a,t.M.a(s.aA(b)))},
dm(a,b){A.jB(new A.eI(a,b))},
hm(a,b,c,d,e){var s,r=$.v
if(r===c)return d.$0()
$.v=c
s=r
try{r=d.$0()
return r}finally{$.v=s}},
hn(a,b,c,d,e,f,g){var s,r=$.v
if(r===c)return d.$1(e)
$.v=c
s=r
try{r=d.$1(e)
return r}finally{$.v=s}},
jy(a,b,c,d,e,f,g,h,i){var s,r=$.v
if(r===c)return d.$2(e,f)
$.v=c
s=r
try{r=d.$2(e,f)
return r}finally{$.v=s}},
aC(a,b,c,d){t.M.a(d)
if(B.b!==c)d=c.aA(d)
A.ho(d)},
e5:function e5(a){this.a=a},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a){this.a=a},
e7:function e7(a){this.a=a},
dg:function dg(){this.b=null},
ew:function ew(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=!1
this.$ti=b},
eE:function eE(a){this.a=a},
eF:function eF(a){this.a=a},
eK:function eK(a){this.a=a},
bm:function bm(a,b){this.a=a
this.b=b},
bV:function bV(a,b){this.a=a
this.$ti=b},
ah:function ah(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=null
_.$ti=e},
bW:function bW(){},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a,b,c,d,e){var _=this
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
eb:function eb(a,b){this.a=a
this.b=b},
ei:function ei(a,b){this.a=a
this.b=b},
ee:function ee(a){this.a=a},
ef:function ef(a){this.a=a},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a,b){this.a=a
this.b=b},
eh:function eh(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a){this.a=a},
ek:function ek(a,b){this.a=a
this.b=b},
ej:function ej(a,b){this.a=a
this.b=b},
cW:function cW(a){this.a=a
this.b=null},
ay:function ay(){},
dY:function dY(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){this.a=a
this.b=b},
U:function U(){},
b9:function b9(){},
bX:function bX(){},
b8:function b8(){},
bc:function bc(){},
d_:function d_(){},
bY:function bY(a,b){this.b=a
this.a=null
this.$ti=b},
c6:function c6(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
eq:function eq(a,b){this.a=a
this.b=b},
ba:function ba(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
dc:function dc(a){this.$ti=a},
cg:function cg(){},
eI:function eI(a,b){this.a=a
this.b=b},
da:function da(){},
er:function er(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
iy(a,b,c,d){return A.iT(A.jP(),a,b,c,d)},
iz(a,b){return new A.au(a.h("@<0>").v(b).h("au<1,2>"))},
iT(a,b,c,d,e){var s=c!=null?c:new A.ep(d)
return new A.c2(a,b,s,d.h("@<0>").v(e).h("c2<1,2>"))},
bC(a){return new A.c3(a.h("c3<0>"))},
ff(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
iU(a,b,c){var s=new A.aW(a,b,c.h("aW<0>"))
s.c=a.e
return s},
je(a,b){return J.F(a,b)},
ir(a,b,c){var s,r
if(A.fo(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.j($.R,a)
try{A.js(a,s)}finally{if(0>=$.R.length)return A.f($.R,-1)
$.R.pop()}r=A.fY(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
f4(a,b,c){var s,r
if(A.fo(a))return b+"..."+c
s=new A.cM(b)
B.a.j($.R,a)
try{r=s
r.a=A.fY(r.a,a,", ")}finally{if(0>=$.R.length)return A.f($.R,-1)
$.R.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fo(a){var s,r
for(s=$.R.length,r=0;r<s;++r)if(a===$.R[r])return!0
return!1},
js(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
fP(a,b){var s,r,q=A.bC(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.eY)(a),++r)q.j(0,b.a(a[r]))
return q},
fb(a){var s,r={}
if(A.fo(a))return"{...}"
s=new A.cM("")
try{B.a.j($.R,a)
s.a+="{"
r.a=!0
a.I(0,new A.dQ(r,s))
s.a+="}"}finally{if(0>=$.R.length)return A.f($.R,-1)
$.R.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
c2:function c2(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
ep:function ep(a){this.a=a},
c3:function c3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d7:function d7(a){this.a=a
this.c=this.b=null},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bD:function bD(){},
q:function q(){},
bF:function bF(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
C:function C(){},
K:function K(){},
bN:function bN(){},
c7:function c7(){},
c4:function c4(){},
c8:function c8(){},
ch:function ch(){},
ik(a){if(a instanceof A.am)return a.i(0)
return"Instance of '"+A.k(A.dV(a))+"'"},
il(a,b){a=A.a(a)
a.stack=J.al(b)
throw a
throw A.a("unreachable")},
aQ(a,b,c,d){var s,r=c?J.f6(a,d):J.it(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
fQ(a,b,c){var s,r=A.c([],c.h("u<0>"))
for(s=a.gu(a);s.l();)B.a.j(r,c.a(s.gn()))
if(b)return r
return J.f7(r,c)},
fa(a,b,c){var s=A.iA(a,c)
return s},
iA(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.h("u<0>"))
s=A.c([],b.h("u<0>"))
for(r=J.a6(a);r.l();)B.a.j(s,r.gn())
return s},
fR(a,b,c){var s,r=J.f6(a,c)
for(s=0;s<a;++s)B.a.t(r,s,b.$1(s))
return r},
iF(a){return new A.cB(a,A.ix(a,!1,!0,!1,!1,!1))},
fY(a,b,c){var s=J.a6(b)
if(!s.l())return a
if(c.length===0){do a+=A.k(s.gn())
while(s.l())}else{a+=A.k(s.gn())
for(;s.l();)a=a+c+A.k(s.gn())}return a},
dD(a){return new A.bp(1000*a)},
cv(a){if(typeof a=="number"||A.hk(a)||a==null)return J.al(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ik(a)},
im(a,b){A.dq(a,"error",t.K)
A.dq(b,"stackTrace",t.l)
A.il(a,b)
A.fU(u.g)},
dw(a){return new A.bl(a)},
bk(a,b){return new A.a3(!1,null,b,a)},
cn(a,b,c){return new A.a3(!0,a,b,c)},
f0(a,b,c){return a},
iD(a){var s=null
return new A.b3(s,s,!1,s,s,a)},
fT(a,b){return new A.b3(null,null,!0,a,b,"Value not in range")},
dW(a,b,c,d,e){return new A.b3(b,c,!0,a,d,"Invalid value")},
iE(a,b,c){if(0>a||a>c)throw A.a(A.dW(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.dW(b,a,c,"end",null))
return b}return c},
cH(a,b){if(a<0)throw A.a(A.dW(a,0,null,b,null))
return a},
b0(a,b,c,d,e){var s=A.aX(e==null?J.a7(b):e)
return new A.cy(s,!0,a,c,"Index out of range")},
A(a){return new A.cS(a)},
h1(a){return new A.cQ(a)},
dX(a){return new A.ax(a)},
an(a){return new A.cr(a)},
fM(a){return new A.ea(a)},
du(a){A.kc(a)},
bp:function bp(a){this.a=a},
e8:function e8(){},
t:function t(){},
bl:function bl(a){this.a=a},
a5:function a5(){},
cE:function cE(){},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b3:function b3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cy:function cy(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cS:function cS(a){this.a=a},
cQ:function cQ(a){this.a=a},
ax:function ax(a){this.a=a},
cr:function cr(a){this.a=a},
cF:function cF(){},
bP:function bP(){},
ct:function ct(a){this.a=a},
ea:function ea(a){this.a=a},
dI:function dI(a,b){this.a=a
this.b=b},
i:function i(){},
y:function y(){},
D:function D(){},
m:function m(){},
dd:function dd(){},
cM:function cM(a){this.a=a},
ij(a,b,c){var s,r=document.body
r.toString
s=B.t.E(r,a,b,c)
s.toString
r=t.ac
r=new A.ag(new A.H(s),r.h("w(q.E)").a(new A.dE()),r.h("ag<q.E>"))
return t.h.a(r.gN(r))},
bs(a){var s,r,q="element tag unavailable"
try{s=J.a2(a)
if(typeof s.gbu(a)=="string")q=s.gbu(a)}catch(r){}return q},
c1(a,b,c,d,e){var s=A.jH(new A.e9(c),t.B),r=s!=null
if(r&&!0){t.o.a(s)
if(r)J.i2(a,b,s,!1)}return new A.c0(a,b,s,!1,e.h("c0<0>"))},
h4(a){var s=document.createElement("a"),r=new A.db(s,window.location)
r=new A.aV(r)
r.bI(a)
return r},
iR(a,b,c,d){t.h.a(a)
A.J(b)
A.J(c)
t.G.a(d)
return!0},
iS(a,b,c,d){var s,r,q
t.h.a(a)
A.J(b)
A.J(c)
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
h9(){var s=t.N,r=A.fP(B.z,s),q=A.c(["TEMPLATE"],t.s),p=t.d0.a(new A.ev())
s=new A.df(r,A.bC(s),A.bC(s),A.bC(s),null)
s.bJ(null,new A.ad(B.z,p,t.fj),q,null)
return s},
jH(a,b){var s=$.v
if(s===B.b)return a
return s.cG(a,b)},
e:function e(){},
aY:function aY(){},
cm:function cm(){},
aZ:function aZ(){},
aH:function aH(){},
a4:function a4(){},
bo:function bo(){},
dz:function dz(){},
aI:function aI(){},
dB:function dB(){},
cu:function cu(){},
dC:function dC(){},
cY:function cY(a,b){this.a=a
this.b=b},
l:function l(){},
dE:function dE(){},
b:function b(){},
x:function x(){},
cx:function cx(){},
ar:function ar(){},
bw:function bw(){},
ab:function ab(){},
bE:function bE(){},
H:function H(a){this.a=a},
h:function h(){},
bI:function bI(){},
cK:function cK(){},
bQ:function bQ(){},
cN:function cN(){},
cO:function cO(){},
b5:function b5(){},
O:function O(){},
ae:function ae(){},
bS:function bS(){},
P:function P(){},
b7:function b7(){},
c5:function c5(){},
cX:function cX(){},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
f3:function f3(a,b){this.a=a
this.$ti=b},
c_:function c_(){},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c0:function c0(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
e9:function e9(a){this.a=a},
aV:function aV(a){this.a=a},
B:function B(){},
bJ:function bJ(a){this.a=a},
dS:function dS(a){this.a=a},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
c9:function c9(){},
et:function et(){},
eu:function eu(){},
df:function df(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ev:function ev(){},
de:function de(){},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
db:function db(a,b){this.a=a
this.b=b},
cf:function cf(a){this.a=a
this.b=0},
eA:function eA(a){this.a=a},
cZ:function cZ(){},
d5:function d5(){},
d6:function d6(){},
d8:function d8(){},
d9:function d9(){},
dh:function dh(){},
di:function di(){},
dk:function dk(){},
dl:function dl(){},
cs:function cs(){},
dy:function dy(a){this.a=a},
cw:function cw(a,b){this.a=a
this.b=b},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
en:function en(){},
aw:function aw(a,b,c){this.a=a
this.b=b
this.$ti=c},
b4:function b4(){},
co:function co(a){this.a=a},
d:function d(){},
a9:function a9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=c
_.w=_.r=_.f=null},
dA:function dA(){},
aL(a,b){var s=new A.aq(A.ds(),A.fR(4,A.hK(),t.e),A.c([],t.i)),r=a==null?A.fD(null):a
s.as=r
r=r.a
new A.bV(r,A.r(r).h("bV<1>")).cQ(s.gc0())
s.Q=b
b.aD(s.c)
return s},
aq:function aq(a,b,c){var _=this
_.a=!1
_.b=400
_.c=a
_.d=b
_.e=c
_.w=_.r=_.f=0
_.at=_.as=_.Q=_.z=_.y=_.x=null},
fD(a){var s,r,q=null,p=new A.bj(q,q,q,new A.b6(q,q,t.q)),o=document.body
o.toString
s=t.k
r=s.h("~(1)?").a(p.gaG(p))
t.Z.a(null)
A.c1(o,"keydown",r,!1,s.c)
p.f=a==null?2:a
return p},
aM:function aM(){},
bM:function bM(){},
bj:function bj(a,b,c,d){var _=this
_.r=_.f=_.e=_.d=null
_.w=!1
_.a$=a
_.b$=b
_.c$=c
_.a=d
_.b=!1
_.c=320},
cT:function cT(){},
dK:function dK(){var _=this
_.e=_.c=_.b=_.a=null},
dL:function dL(){},
hH(a){switch(a){case 1:return 40
case 2:return 100
case 3:return 300
case 4:return 1200}return 0},
fw(a){var s,r,q,p,o=$.fk
if(o.length===0){s=J.f5(7,t.e)
for(r=0;r<7;++r)s[r]=r
$.fk=s
o=s}q=$.hZ().cT(o.length)
o=$.fk
if(!(q>=0&&q<o.length))return A.f(o,q)
p=o[q]
B.a.aJ(o,q)
return p},
eU(a,b,c,d,e){var s,r
if(typeof b!=="number")return b.m()
s=0
for(;r=b+s,A.V(a,r+1,c,d,e);)++s
return r},
hx(a){var s,r,q
for(s=0,r=0;r<24;++r){for(q=0;q<10;++q){if(!(r<a.length))return A.f(a,r)
if(!J.F(J.W(a[r],q),0))return s}++s}return s},
hL(a){var s,r,q,p=A.aQ(10,!0,!1,t.b)
for(s=0,r=0;r<24;++r)for(q=0;q<10;++q){if(!(r<a.length))return A.f(a,r)
if(J.F(J.W(a[r],q),0)){if(!p[q])++s}else B.a.t(p,q,!1)}return s},
V(a,b,c,d,e){var s,r,q,p,o,n=A.eW(c,d)
for(s=0;s<n.length;++s){r=0
while(!0){if(!(s<n.length))return A.f(n,s)
q=n[s]
if(!(r<q.length))break
if(typeof a!=="number")return A.M(a)
p=r+a
if(typeof b!=="number")return A.M(b)
o=s+b
if(!J.F(q[r],0)){if(p>=0&&p<10)q=!(o>=0&&o<24)
else q=!0
if(q)return!1
else{if(!(o>=0&&o<e.length))return A.f(e,o)
if(!J.F(J.W(e[o],p),0))return!1}}++r}}return!0},
hB(a){var s,r,q,p=A.c([],t.i)
for(s=0;s<24;++s){for(r=!0,q=0;q<10;++q){if(!(s<a.length))return A.f(a,s)
if(J.F(J.W(a[s],q),0))r=!1}if(r)B.a.j(p,s)}return p},
fp(a,b){var s,r,q,p,o,n,m=A.dn(a,null)
for(s=b.length-1;s>=0;--s){if(!(s<b.length))return A.f(b,s)
B.a.aJ(m,b[s])}for(r=b.length,q=t.e,p=A.I(m).c,o=0;o<b.length;b.length===r||(0,A.eY)(b),++o){n=p.a(A.aQ(10,0,!1,q))
if(!!m.fixed$length)A.aj(A.A("insert"))
m.splice(0,0,n)}return m},
fv(a,b){var s,r,q,p,o,n=A.c([],t._)
for(s=t.i,r=0;r<24;++r){B.a.j(n,A.c([],s))
for(q=0;q<10;++q){if(!(r<n.length))return A.f(n,r)
p=n[r]
if(!(r<b.length))return A.f(b,r)
if(!J.F(J.W(b[r],q),0)){if(!(r<b.length))return A.f(b,r)
o=J.W(b[r],q)}else{if(!(r<a.length))return A.f(a,r)
o=J.W(a[r],q)}B.a.j(p,o)}}return n},
kf(a,b){var s,r
if(a.length!==b.length)return!1
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.f(b,s)
if(!J.F(r,b[s]))return!1}return!0},
dp(a,b,c,d,e){var s,r,q,p,o,n,m=A.dn(e,null),l=A.eW(c,d)
for(s=0;s<l.length;++s){r=0
while(!0){if(!(s<l.length))return A.f(l,s)
q=l[s]
if(!(r<q.length))break
if(typeof b!=="number")return A.M(b)
p=s+b
if(typeof a!=="number")return A.M(a)
o=r+a
if(!J.F(q[r],0))q=o>=0&&o<10&&p>=0&&p<24
else q=!1
if(q){if(!(p>=0&&p<m.length))return A.f(m,p)
q=m[p]
if(!(s<l.length))return A.f(l,s)
n=l[s]
if(!(r<n.length))return A.f(n,r)
J.i1(q,o,n[r])}++r}}return m},
ds(){var s,r,q=A.c([],t._)
for(s=t.e,r=0;r<24;++r)B.a.j(q,A.aQ(10,0,!1,s))
return q},
dn(a,b){var s,r,q,p,o,n,m=A.c([],t._)
for(s=b==null,r=t.i,q=0;q<24;++q){B.a.j(m,A.c([],r))
for(p=0;p<10;++p){if(!(q<a.length))return A.f(a,q)
o=J.F(J.W(a[q],p),0)
n=m.length
if(o){if(!(q<n))return A.f(m,q)
J.fA(m[q],0)}else{if(!(q<n))return A.f(m,q)
o=m[q]
if(s){if(!(q<a.length))return A.f(a,q)
n=J.W(a[q],p)}else n=b
J.fA(o,n)}}}return m},
kj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=$.i0()
h=(h&&B.a).p(h,c)
if(!(b<h.length))return A.f(h,b)
s=h[b]
h=$.i_()
h=(h&&B.a).p(h,c)
if(!(b<h.length))return A.f(h,b)
r=h[b]
for(h=s.length,q=r.length,p=d.length,o=0,c=0;c<h;++c){if(typeof a!=="number")return a.m()
n=a+c
if(n>=0&&n<10){if(!(c<q))return A.f(r,c)
m=A.S(r[c])}else m=!1
if(m){if(!(n>=0&&n<p))return A.f(d,n)
m=d[n]
l=s[c]
if(typeof l!=="number")return A.M(l)
k=m-l
if(k>o)o=k}}for(j=0,c=0;c<h;++c){if(typeof a!=="number")return a.m()
n=a+c
if(n>=0&&n<10){if(!(c<q))return A.f(r,c)
m=A.S(r[c])}else m=!1
if(m){m=s[c]
if(typeof m!=="number")return m.m()
if(!(n>=0&&n<p))return A.f(d,n)
i=Math.abs(m+o-d[n])}else i=0
j+=i}return j},
jO(a){var s,r,q,p,o,n=A.c([],t.i)
for(s=0,r=0;r<10;++r){q=0
while(!0){p=q+1
if(p<24){if(!(p<a.length))return A.f(a,p)
o=J.F(J.W(a[p],r),0)}else o=!1
if(!o)break
q=p}if(q>s)s=q
B.a.j(n,q)}for(r=0;r<10;++r){if(!(r<n.length))return A.f(n,r)
B.a.t(n,r,s-n[r])}return n},
eW(a,b){var s,r=B.a.p($.hE,b)
if(typeof a!=="number")return A.M(a)
s=0
for(;s<a;++s)r=A.ke(r)
return r},
ke(a){var s,r,q,p,o,n,m=a.length,l=A.c([],t._)
for(s=m-1,r=t.i,q=0;q<m;++q){B.a.j(l,A.c([],r))
for(p=0;p<m;++p){if(!(q<l.length))return A.f(l,q)
o=l[q]
n=s-p
if(!(n>=0&&n<a.length))return A.f(a,n)
n=a[n]
if(!(q<n.length))return A.f(n,q)
B.a.j(o,n[q])}}return l},
hy(a){switch(a){case 0:return 4
default:return 3}},
hz(a){switch(a){case 1:case 2:case 3:case 6:return-1
default:return 0}},
jU(){var s,r,q,p,o=A.c([],t.I)
for(s=t._,r=0;r<7;++r){B.a.j(o,A.c([],s))
for(q=0;q<$.eV[r];++q){p=A.eW(q,r)
if(!(r<o.length))return A.f(o,r)
B.a.j(o[r],A.jS(p))}}return o},
jS(a){var s,r,q,p,o=A.aQ(a.length,0,!1,t.e),n=a.length,m=A.aQ(n,!1,!1,t.b)
for(s=a.length-1,r=null;s>=0;--s)for(q=0;p=a.length,q<p;++q){if(!(s<p))return A.f(a,s)
p=a[s]
if(!(q<p.length))return A.f(p,q)
if(!J.F(p[q],0)){if(!(q<n))return A.f(m,q)
p=!m[q]}else p=!1
if(p){if(r==null)r=s
B.a.t(o,q,r-s)
B.a.t(m,q,!0)}}return o},
jT(){var s,r,q,p,o=A.c([],t.ch)
for(s=t.bB,r=0;r<7;++r){B.a.j(o,A.c([],s))
for(q=0;q<$.eV[r];++q){p=A.eW(q,r)
if(!(r<o.length))return A.f(o,r)
B.a.j(o[r],A.jX(p))}}return o},
jX(a){var s,r,q,p=A.aQ(a.length,!1,!1,t.b)
for(s=0;s<a.length;++s)for(r=0;q=a.length,r<q;++r){if(!(s<q))return A.f(a,s)
q=a[s]
if(!(r<q.length))return A.f(q,r)
if(!J.F(q[r],0))B.a.t(p,r,!0)}return p},
G:function G(a){this.b=a},
k7(){A.hI()},
hI(){var s,r="#game-1",q="flex",p="#game-2",o=document,n=o.baseURI.split("/#/")
switch(B.a.gcP(n)){case"p1":B.a.C($.ci,A.c([A.aL(A.e1(B.k),new A.a1(r,A.c([],t.i)))],t.R))
s=o.querySelector(r).style
s.display=q
o=o.querySelector(p).style
o.display="none"
break
case"c1":B.a.C($.ci,A.c([A.aL(null,new A.a1(r,A.c([],t.i)))],t.R))
s=o.querySelector(r).style
s.display=q
o=o.querySelector(p).style
o.display="none"
break
case"pvp":s=t.i
B.a.C($.ci,A.c([A.aL(A.e1(B.k),new A.a1(p,A.c([],s))),A.aL(A.e1(B.X),new A.a1(r,A.c([],s)))],t.R))
s=o.querySelector(r).style
s.display=q
o=o.querySelector(p).style
o.display=q
break
case"pvc":s=t.i
B.a.C($.ci,A.c([A.aL(A.e1(B.k),new A.a1(r,A.c([],s))),A.aL(null,new A.a1(p,A.c([],s)))],t.R))
s=o.querySelector(r).style
s.display=q
o=o.querySelector(p).style
o.display=q
break
case"cvc":s=t.i
B.a.C($.ci,A.c([A.aL(null,new A.a1(r,A.c([],s))),A.aL(A.fD(1),new A.a1(p,A.c([],s)))],t.R))
s=o.querySelector(r).style
s.display=q
o=o.querySelector(p).style
o.display=q
break
default:o=window.location;(o&&B.W).cD(o,A.k(B.a.gq(n))+"#/p1")
A.hI()
break}B.a.I($.ci,new A.eX())},
e1(a){var s,r,q=new A.bT(a,new A.b6(null,null,t.q)),p=document,o=p.body
o.toString
s=t.k
r=s.h("~(1)?").a(q.gaG(q))
t.Z.a(null)
A.c1(o,"keydown",r,!1,s.c)
if(a===B.k){o=p.body
o.toString
s=t.b1
r=s.h("~(1)?")
s=s.c
A.c1(o,"touchstart",r.a(q.gcc()),!1,s)
o=p.body
o.toString
A.c1(o,"touchmove",r.a(q.gca()),!1,s)
p=p.body
p.toString
A.c1(p,"touchend",r.a(q.gc8()),!1,s)}return q},
hr(a){var s=A.I(a)
return new A.X(a,s.h("i<j*>(1)").a(new A.eL()),s.h("X<1,j*>")).cO(0)},
kb(a){return'<div class="pixel '+A.fx(A.aX(a),!1)+'"></div>'},
ka(a){switch(a){case 2:return"x2"
case 4:return"x4"
default:return"x3"}},
fx(a,b){switch(a){case 0:return b?"q-empty":"empty"
case-1:return"shadow"
case-2:return"predict"
default:return"piece-"+A.k(a)}},
eX:function eX(){},
bT:function bT(a,b){var _=this
_.d=a
_.f=_.e=null
_.a=b
_.b=!1
_.c=320},
a1:function a1(a,b){this.a=a
this.b=b},
e3:function e3(){},
e2:function e2(){},
eL:function eL(){},
kc(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
kh(a){return A.aj(new A.cD("Field '"+A.k(a)+"' has been assigned during initialization."))}},J={
fu(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eN(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ft==null){A.k1()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.a(A.h1("Return interceptor for "+A.k(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.eo
if(o==null)o=$.eo=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.k6(a)
if(p!=null)return p
if(typeof a=="function")return B.R
s=Object.getPrototypeOf(a)
if(s==null)return B.A
if(s===Object.prototype)return B.A
if(typeof q=="function"){o=$.eo
if(o==null)o=$.eo=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.r,enumerable:false,writable:true,configurable:true})
return B.r}return B.r},
it(a,b){if(a<0||a>4294967295)throw A.a(A.dW(a,0,4294967295,"length",null))
return J.iu(new Array(a),b)},
f6(a,b){if(a<0)throw A.a(A.bk("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.h("u<0>"))},
f5(a,b){return A.c(new Array(a),b.h("u<0>"))},
iu(a,b){return J.f7(A.c(a,b.h("u<0>")),b)},
f7(a,b){a.fixed$length=Array
return a},
fO(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
iv(a,b){var s,r
for(s=a.length;b<s;){r=B.c.aZ(a,b)
if(r!==32&&r!==13&&!J.fO(r))break;++b}return b},
iw(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.c.bj(a,s)
if(r!==32&&r!==13&&!J.fO(r))break}return b},
bh(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.by.prototype
return J.cA.prototype}if(typeof a=="string")return J.as.prototype
if(a==null)return J.bz.prototype
if(typeof a=="boolean")return J.cz.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof A.m)return a
return J.eN(a)},
fs(a){if(typeof a=="string")return J.as.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof A.m)return a
return J.eN(a)},
dt(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof A.m)return a
return J.eN(a)},
jV(a){if(typeof a=="number")return J.b1.prototype
if(typeof a=="string")return J.as.prototype
if(a==null)return a
if(!(a instanceof A.m))return J.aT.prototype
return a},
hv(a){if(typeof a=="string")return J.as.prototype
if(a==null)return a
if(!(a instanceof A.m))return J.aT.prototype
return a},
a2(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
return a}if(a instanceof A.m)return a
return J.eN(a)},
fz(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jV(a).m(a,b)},
F(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bh(a).L(a,b)},
W(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.k4(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fs(a).p(a,b)},
i1(a,b,c){return J.dt(a).t(a,b,c)},
i2(a,b,c,d){return J.a2(a).bO(a,b,c,d)},
i3(a){return J.a2(a).bV(a)},
i4(a,b,c){return J.a2(a).cn(a,b,c)},
fA(a,b){return J.dt(a).j(a,b)},
dv(a,b){return J.dt(a).D(a,b)},
i5(a){return J.a2(a).gcE(a)},
i6(a){return J.a2(a).gaB(a)},
bi(a){return J.a2(a).gbh(a)},
eZ(a){return J.bh(a).gB(a)},
a6(a){return J.dt(a).gu(a)},
a7(a){return J.fs(a).gk(a)},
i7(a,b,c){return J.dt(a).br(a,b,c)},
f_(a){return J.a2(a).cX(a)},
i8(a,b){return J.a2(a).cZ(a,b)},
i9(a,b){return J.a2(a).sc3(a,b)},
fB(a,b){return J.a2(a).saE(a,b)},
ia(a){return J.hv(a).d4(a)},
al(a){return J.bh(a).i(a)},
fC(a){return J.hv(a).d5(a)},
bx:function bx(){},
cz:function cz(){},
bz:function bz(){},
N:function N(){},
aO:function aO(){},
cG:function cG(){},
aT:function aT(){},
aa:function aa(){},
u:function u(a){this.$ti=a},
dO:function dO(a){this.$ti=a},
a8:function a8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b1:function b1(){},
by:function by(){},
cA:function cA(){},
as:function as(){}},B={}
var w=[A,J,B]
var $={}
A.f8.prototype={}
J.bx.prototype={
L(a,b){return a===b},
gB(a){return A.b2(a)},
i(a){return"Instance of '"+A.k(A.dV(a))+"'"}}
J.cz.prototype={
i(a){return String(a)},
gB(a){return a?519018:218159},
$iw:1}
J.bz.prototype={
L(a,b){return null==b},
i(a){return"null"},
gB(a){return 0},
$iD:1}
J.N.prototype={}
J.aO.prototype={
gB(a){return 0},
i(a){return String(a)}}
J.cG.prototype={}
J.aT.prototype={}
J.aa.prototype={
i(a){var s=a[$.hN()]
if(s==null)return this.bF(a)
return"JavaScript function for "+A.k(J.al(s))},
$iaK:1}
J.u.prototype={
j(a,b){A.I(a).c.a(b)
if(!!a.fixed$length)A.aj(A.A("add"))
a.push(b)},
aJ(a,b){if(!!a.fixed$length)A.aj(A.A("removeAt"))
if(b<0||b>=a.length)throw A.a(A.fT(b,null))
return a.splice(b,1)[0]},
C(a,b){A.I(a).h("i<1>").a(b)
if(!!a.fixed$length)A.aj(A.A("addAll"))
this.bM(a,b)
return},
bM(a,b){var s,r
t.m.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.a(A.an(a))
for(r=0;r<s;++r)a.push(b[r])},
bi(a){if(!!a.fixed$length)A.aj(A.A("clear"))
a.length=0},
I(a,b){var s,r
A.I(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.a(A.an(a))}},
br(a,b,c){var s=A.I(a)
return new A.ad(a,s.v(c).h("1(2)").a(b),s.h("@<1>").v(c).h("ad<1,2>"))},
J(a,b){var s,r=A.aQ(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.t(r,s,A.k(a[s]))
return r.join(b)},
cK(a,b,c,d){var s,r,q
d.a(b)
A.I(a).v(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.a(A.an(a))}return r},
D(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
gq(a){if(a.length>0)return a[0]
throw A.a(A.dN())},
gcP(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.dN())},
bg(a,b){var s,r
A.I(a).h("w(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.S(b.$1(a[r])))return!0
if(a.length!==s)throw A.a(A.an(a))}return!1},
A(a,b){var s
for(s=0;s<a.length;++s)if(J.F(a[s],b))return!0
return!1},
i(a){return A.f4(a,"[","]")},
gu(a){return new J.a8(a,a.length,A.I(a).h("a8<1>"))},
gB(a){return A.b2(a)},
gk(a){return a.length},
p(a,b){if(!A.fn(b))throw A.a(A.bg(a,b))
if(!(b>=0&&b<a.length))throw A.a(A.bg(a,b))
return a[b]},
t(a,b,c){A.I(a).c.a(c)
if(!!a.immutable$list)A.aj(A.A("indexed set"))
if(!(b>=0&&b<a.length))throw A.a(A.bg(a,b))
a[b]=c},
$in:1,
$ii:1,
$ip:1}
J.dO.prototype={}
J.a8.prototype={
gn(){return this.d},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.a(A.eY(q))
s=r.c
if(s>=p){r.sb3(null)
return!1}r.sb3(q[s]);++r.c
return!0},
sb3(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
J.b1.prototype={
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
$iaF:1}
J.by.prototype={$io:1}
J.cA.prototype={}
J.as.prototype={
bj(a,b){if(b<0)throw A.a(A.bg(a,b))
if(b>=a.length)A.aj(A.bg(a,b))
return a.charCodeAt(b)},
aZ(a,b){if(b>=a.length)throw A.a(A.bg(a,b))
return a.charCodeAt(b)},
m(a,b){if(typeof b!="string")throw A.a(A.cn(b,null,null))
return a+b},
bx(a,b){var s=a.length,r=b.length
if(r>s)return!1
return b===a.substring(0,r)},
by(a,b,c){return a.substring(b,A.iE(b,c,a.length))},
d4(a){return a.toLowerCase()},
d5(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.aZ(p,0)===133){s=J.iv(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.bj(p,r)===133?J.iw(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
bw(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.K)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cU(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bw(c,s)+a},
i(a){return a},
gB(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gk(a){return a.length},
$idU:1,
$ij:1}
A.cD.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.cI.prototype={
i(a){return"ReachabilityError: "+this.a}}
A.bK.prototype={
i(a){return"Null is not a valid value for '"+this.a+"' of type '"+A.hu(this.$ti.c).i(0)+"'"},
$ia5:1}
A.n.prototype={}
A.av.prototype={
gu(a){var s=this
return new A.aP(s,s.gk(s),A.r(s).h("aP<av.E>"))},
a8(a,b){return this.bB(0,A.r(this).h("w(av.E)").a(b))}}
A.aP.prototype={
gn(){return this.d},
l(){var s,r=this,q=r.a,p=J.fs(q),o=p.gk(q)
if(r.b!==o)throw A.a(A.an(q))
s=r.c
if(s>=o){r.sG(null)
return!1}r.sG(p.D(q,s));++r.c
return!0},
sG(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
A.bG.prototype={
gu(a){var s=A.r(this)
return new A.bH(J.a6(this.a),this.b,s.h("@<1>").v(s.z[1]).h("bH<1,2>"))},
gk(a){return J.a7(this.a)},
D(a,b){return this.b.$1(J.dv(this.a,b))}}
A.bH.prototype={
l(){var s=this,r=s.b
if(r.l()){s.sG(s.c.$1(r.gn()))
return!0}s.sG(null)
return!1},
gn(){return this.a},
sG(a){this.a=this.$ti.h("2?").a(a)}}
A.ad.prototype={
gk(a){return J.a7(this.a)},
D(a,b){return this.b.$1(J.dv(this.a,b))}}
A.ag.prototype={
gu(a){return new A.bU(J.a6(this.a),this.b,this.$ti.h("bU<1>"))}}
A.bU.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(A.S(r.$1(s.gn())))return!0
return!1},
gn(){return this.a.gn()}}
A.X.prototype={
gu(a){var s=this.$ti
return new A.bv(J.a6(this.a),this.b,B.D,s.h("@<1>").v(s.z[1]).h("bv<1,2>"))}}
A.bv.prototype={
gn(){return this.d},
l(){var s,r,q=this
if(q.c==null)return!1
for(s=q.a,r=q.b;!q.c.l();){q.sG(null)
if(s.l()){q.sb4(null)
q.sb4(J.a6(r.$1(s.gn())))}else return!1}q.sG(q.c.gn())
return!0},
sb4(a){this.c=this.$ti.h("y<2>?").a(a)},
sG(a){this.d=this.$ti.h("2?").a(a)},
$iy:1}
A.aS.prototype={
gu(a){return new A.bR(J.a6(this.a),this.b,A.r(this).h("bR<1>"))}}
A.br.prototype={
gk(a){var s=J.a7(this.a),r=this.b
if(s>r)return r
return s},
$in:1}
A.bR.prototype={
l(){if(--this.b>=0)return this.a.l()
this.b=-1
return!1},
gn(){if(this.b<0)return null
return this.a.gn()}}
A.aR.prototype={
gu(a){return new A.bO(J.a6(this.a),this.b,A.r(this).h("bO<1>"))}}
A.bq.prototype={
gk(a){var s=J.a7(this.a)-this.b
if(s>=0)return s
return 0},
$in:1}
A.bO.prototype={
l(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.l()
this.b=0
return s.l()},
gn(){return this.a.gn()}}
A.bt.prototype={
l(){return!1},
gn(){throw A.a(A.dN())},
$iy:1}
A.bn.prototype={
i(a){return A.fb(this)},
$iac:1}
A.aN.prototype={
a_(){var s,r,q=this,p=q.$map
if(p==null){s=q.$ti
r=A.iq(s.h("1?"))
p=A.iy(A.jt(),r,s.c,s.z[1])
A.jR(q.a,p)
q.$map=p}return p},
S(a){return this.a_().S(a)},
p(a,b){return this.a_().p(0,b)},
I(a,b){this.$ti.h("~(1,2)").a(b)
this.a_().I(0,b)},
gk(a){return this.a_().a}}
A.dM.prototype={
$1(a){return this.a.b(a)},
$S:16}
A.e_.prototype={
F(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.cC.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+A.k(r.a)
s=r.c
if(s==null)return q+p+"' ("+A.k(r.a)+")"
return q+p+"' on '"+s+"' ("+A.k(r.a)+")"}}
A.cR.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.dT.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bu.prototype={}
A.ca.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia0:1}
A.am.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.hJ(r==null?"unknown":r)+"'"},
$iaK:1,
gd7(){return this},
$C:"$1",
$R:1,
$D:null}
A.cp.prototype={$C:"$0",$R:0}
A.cq.prototype={$C:"$2",$R:2}
A.cP.prototype={}
A.cL.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.hJ(s)+"'"}}
A.b_.prototype={
L(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.b_))return!1
return this.$_target===b.$_target&&this.a===b.a},
gB(a){return(A.hC(this.a)^A.b2(this.$_target))>>>0},
i(a){return"Closure '"+A.k(this.$_name)+"' of "+("Instance of '"+A.k(A.dV(this.a))+"'")}}
A.cJ.prototype={
i(a){return"RuntimeError: "+this.a}}
A.cU.prototype={
i(a){return"Assertion failed: "+A.cv(this.a)}}
A.au.prototype={
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
I(a,b){var s,r,q=this
A.r(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.a(A.an(q))
s=s.c}},
aT(a,b,c){var s,r=A.r(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.am(b,c)
else s.b=c},
c7(){this.r=this.r+1&1073741823},
am(a,b){var s=this,r=A.r(s),q=new A.dP(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.c7()
return q},
a5(a){return J.eZ(a)&0x3fffffff},
a6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.F(a[r].a,b))return r
return-1},
i(a){return A.fb(this)},
al(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.dP.prototype={}
A.bA.prototype={
gk(a){return this.a.a},
gu(a){var s=this.a,r=new A.bB(s,s.r,this.$ti.h("bB<1>"))
r.c=s.e
return r}}
A.bB.prototype={
gn(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.an(q))
s=r.c
if(s==null){r.saS(null)
return!1}else{r.saS(s.a)
r.c=s.c
return!0}},
saS(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
A.eO.prototype={
$1(a){return this.a(a)},
$S:32}
A.eP.prototype={
$2(a,b){return this.a(a,b)},
$S:27}
A.eQ.prototype={
$1(a){return this.a(A.J(a))},
$S:29}
A.cB.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
$idU:1}
A.Z.prototype={
h(a){return A.ey(v.typeUniverse,this,a)},
v(a){return A.j8(v.typeUniverse,this,a)}}
A.d3.prototype={}
A.cb.prototype={
i(a){return A.Q(this.a,null)},
$ih_:1}
A.d2.prototype={
i(a){return this.a}}
A.cc.prototype={$ia5:1}
A.e5.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:11}
A.e4.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:34}
A.e6.prototype={
$0(){this.a.$0()},
$S:5}
A.e7.prototype={
$0(){this.a.$0()},
$S:5}
A.dg.prototype={
bK(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.dr(new A.ew(this,b),0),a)
else throw A.a(A.A("`setTimeout()` not found."))},
a4(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
self.clearTimeout(s)
this.b=null}else throw A.a(A.A("Canceling a timer."))},
$iiK:1}
A.ew.prototype={
$0(){this.a.b=null
this.b.$0()},
$S:0}
A.cV.prototype={}
A.eE.prototype={
$1(a){return this.a.$2(0,a)},
$S:6}
A.eF.prototype={
$2(a,b){this.a.$2(1,new A.bu(a,t.l.a(b)))},
$S:26}
A.eK.prototype={
$2(a,b){this.a(A.aX(a),b)},
$S:19}
A.bm.prototype={
i(a){return A.k(this.a)},
$it:1,
gZ(){return this.b}}
A.bV.prototype={}
A.ah.prototype={
ao(){},
ap(){},
san(a){this.ch=this.$ti.h("ah<1>?").a(a)},
sba(a){this.CW=this.$ti.h("ah<1>?").a(a)}}
A.bW.prototype={
gc6(){return this.c<4},
cw(a,b,c,d){var s,r,q,p,o,n=this,m=A.r(n)
m.h("~(1)?").a(a)
t.Z.a(c)
if((n.c&4)!==0){m=new A.ba($.v,c,m.h("ba<1>"))
m.cq()
return m}s=$.v
r=d?1:0
t.a7.v(m.c).h("1(2)").a(a)
A.iQ(s,b)
q=c==null?A.jM():c
t.M.a(q)
m=m.h("ah<1>")
p=new A.ah(n,a,s,r,m)
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
if(n.d==n.e)A.jA(n.a)
return p},
bN(){if((this.c&4)!==0)return new A.ax("Cannot add new events after calling close")
return new A.ax("Cannot add new events while doing an addStream")},
j(a,b){var s=this
A.r(s).c.a(b)
if(!s.gc6())throw A.a(s.bN())
s.aw(b)},
sbZ(a){this.d=A.r(this).h("ah<1>?").a(a)},
sc4(a){this.e=A.r(this).h("ah<1>?").a(a)},
$ifX:1,
$ih8:1,
$iaz:1}
A.b6.prototype={
aw(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("bY<1>");s!=null;s=s.ch)s.bP(new A.bY(a,r))}}
A.dJ.prototype={
$0(){this.b.b2(null)},
$S:0}
A.aU.prototype={
cR(a){if((this.c&15)!==6)return!0
return this.b.b.aK(t.al.a(this.d),a.a,t.v,t.K)},
cL(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=r.b.b
if(t.C.b(q))p=m.d0(q,a.a,a.b,o,n,t.l)
else p=m.aK(t.y.a(q),a.a,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.ak(s))){if((r.c&1)!==0)throw A.a(A.bk("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.a(A.bk("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.z.prototype={
aL(a,b,c){var s,r,q,p=this.$ti
p.v(c).h("1/(2)").a(a)
s=$.v
if(s===B.b){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.a(A.cn(b,"onError",u.c))}else{c.h("@<0/>").v(p.c).h("1(2)").a(a)
if(b!=null)b=A.jx(b,s)}r=new A.z(s,c.h("z<0>"))
q=b==null?1:3
this.ab(new A.aU(r,q,a,b,p.h("@<1>").v(c).h("aU<1,2>")))
return r},
d1(a,b){return this.aL(a,null,b)},
be(a,b,c){var s,r=this.$ti
r.v(c).h("1/(2)").a(a)
s=new A.z($.v,c.h("z<0>"))
this.ab(new A.aU(s,3,a,b,r.h("@<1>").v(c).h("aU<1,2>")))
return s},
ct(a){this.a=this.a&1|16
this.c=a},
ad(a){this.a=a.a&30|this.a&1
this.c=a.c},
ab(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.ab(a)
return}r.ad(s)}A.aC(null,null,r.b,t.M.a(new A.eb(r,a)))}},
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
A.aC(null,null,m.b,t.M.a(new A.ei(l,m)))}},
a0(){var s=t.F.a(this.c)
this.c=null
return this.a1(s)},
a1(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aW(a){var s,r,q,p=this
p.a^=2
try{a.aL(new A.ee(p),new A.ef(p),t.P)}catch(q){s=A.ak(q)
r=A.aE(q)
A.hG(new A.eg(p,s,r))}},
b2(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
s=r.a0()
q.c.a(a)
r.a=8
r.c=a
A.bb(r,s)},
af(a){var s,r=this
r.$ti.c.a(a)
s=r.a0()
r.a=8
r.c=a
A.bb(r,s)},
O(a,b){var s
t.l.a(b)
s=this.a0()
this.ct(A.dx(a,b))
A.bb(this,s)},
bQ(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ap<1>").b(a)){this.aX(a)
return}this.bS(s.c.a(a))},
bS(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.aC(null,null,s.b,t.M.a(new A.ed(s,a)))},
aX(a){var s=this,r=s.$ti
r.h("ap<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.aC(null,null,s.b,t.M.a(new A.eh(s,a)))}else A.fe(a,s)
return}s.aW(a)},
bR(a,b){this.a^=2
A.aC(null,null,this.b,t.M.a(new A.ec(this,a,b)))},
$iap:1}
A.eb.prototype={
$0(){A.bb(this.a,this.b)},
$S:0}
A.ei.prototype={
$0(){A.bb(this.b,this.a.a)},
$S:0}
A.ee.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.af(p.$ti.c.a(a))}catch(q){s=A.ak(q)
r=A.aE(q)
p.O(s,r)}},
$S:11}
A.ef.prototype={
$2(a,b){this.a.O(a,t.l.a(b))},
$S:18}
A.eg.prototype={
$0(){this.a.O(this.b,this.c)},
$S:0}
A.ed.prototype={
$0(){this.a.af(this.b)},
$S:0}
A.eh.prototype={
$0(){A.fe(this.b,this.a)},
$S:0}
A.ec.prototype={
$0(){this.a.O(this.b,this.c)},
$S:0}
A.el.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.d_(t.fO.a(q.d),t.z)}catch(p){s=A.ak(p)
r=A.aE(p)
if(m.c){q=t.n.a(m.b.a.c).a
o=s
o=q==null?o==null:q===o
q=o}else q=!1
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.dx(s,r)
o.b=!0
return}if(l instanceof A.z&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.f.b(l)){n=m.b.a
q=m.a
q.c=l.d1(new A.em(n),t.z)
q.b=!1}},
$S:0}
A.em.prototype={
$1(a){return this.a},
$S:13}
A.ek.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.aK(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.ak(l)
r=A.aE(l)
q=this.a
q.c=A.dx(s,r)
q.b=!0}},
$S:0}
A.ej.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this
try{s=t.n.a(k.a.a.c)
p=k.b
if(A.S(p.a.cR(s))&&p.a.e!=null){p.c=p.a.cL(s)
p.b=!1}}catch(o){r=A.ak(o)
q=A.aE(o)
p=t.n.a(k.a.a.c)
n=p.a
m=r
l=k.b
if(n==null?m==null:n===m)l.c=p
else l.c=A.dx(r,q)
l.b=!0}},
$S:0}
A.cW.prototype={}
A.ay.prototype={
gk(a){var s={},r=new A.z($.v,t.fJ)
s.a=0
this.aF(new A.dY(s,this),!0,new A.dZ(s,r),r.gbW())
return r}}
A.dY.prototype={
$1(a){A.r(this.b).c.a(a);++this.a.a},
$S(){return A.r(this.b).h("~(1)")}}
A.dZ.prototype={
$0(){this.b.b2(this.a.a)},
$S:0}
A.U.prototype={}
A.b9.prototype={
gB(a){return(A.b2(this.a)^892482866)>>>0},
L(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b9&&b.a===this.a}}
A.bX.prototype={
ao(){A.r(this.w).h("U<1>").a(this)},
ap(){A.r(this.w).h("U<1>").a(this)}}
A.b8.prototype={
ao(){},
ap(){},
bP(a){var s,r,q=this,p=q.r
if(p==null){p=new A.c6(A.r(q).h("c6<1>"))
q.sb8(p)}s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.aP(q)}},
aw(a){var s,r=this,q=A.r(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bt(r.a,a,q)
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
if(r)q.ao()
else q.ap()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aP(q)},
sb8(a){this.r=A.r(this).h("c6<1>?").a(a)},
$iU:1,
$iaz:1}
A.bc.prototype={
aF(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Z.a(c)
return this.a.cw(s.h("~(1)?").a(a),d,c,b===!0)},
cQ(a){return this.aF(a,null,null,null)}}
A.d_.prototype={}
A.bY.prototype={}
A.c6.prototype={
aP(a){var s,r=this
r.$ti.h("az<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.hG(new A.eq(r,a))
r.a=1}}
A.eq.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("az<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.r(r).h("az<1>").a(s).aw(r.b)},
$S:0}
A.ba.prototype={
cq(){var s=this
if((s.b&2)!==0)return
A.aC(null,null,s.a,t.M.a(s.gcr()))
s.b|=2},
cs(){var s,r=this,q=r.b&=4294967293
if(q>=4)return
r.b=q|1
s=r.c
if(s!=null)r.a.bs(s)},
$iU:1}
A.dc.prototype={}
A.cg.prototype={$ih2:1}
A.eI.prototype={
$0(){A.im(this.a,this.b)
A.fU(u.g)},
$S:0}
A.da.prototype={
bs(a){var s,r,q
t.M.a(a)
try{if(B.b===$.v){a.$0()
return}A.hm(null,null,this,a,t.H)}catch(q){s=A.ak(q)
r=A.aE(q)
A.dm(s,t.l.a(r))}},
bt(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.b===$.v){a.$1(b)
return}A.hn(null,null,this,a,b,t.H,c)}catch(q){s=A.ak(q)
r=A.aE(q)
A.dm(s,t.l.a(r))}},
aA(a){return new A.er(this,t.M.a(a))},
cG(a,b){return new A.es(this,b.h("~(0)").a(a),b)},
d_(a,b){b.h("0()").a(a)
if($.v===B.b)return a.$0()
return A.hm(null,null,this,a,b)},
aK(a,b,c,d){c.h("@<0>").v(d).h("1(2)").a(a)
d.a(b)
if($.v===B.b)return a.$1(b)
return A.hn(null,null,this,a,b,c,d)},
d0(a,b,c,d,e,f){d.h("@<0>").v(e).v(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.v===B.b)return a.$2(b,c)
return A.jy(null,null,this,a,b,c,d,e,f)},
aI(a,b,c,d){return b.h("@<0>").v(c).v(d).h("1(2,3)").a(a)}}
A.er.prototype={
$0(){return this.a.bs(this.b)},
$S:0}
A.es.prototype={
$1(a){var s=this.c
return this.a.bt(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.c2.prototype={
p(a,b){if(!A.S(this.y.$1(b)))return null
return this.bD(b)},
t(a,b,c){var s=this.$ti
this.bE(s.c.a(b),s.z[1].a(c))},
S(a){if(!A.S(this.y.$1(a)))return!1
return this.bC(a)},
a5(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
a6(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(A.S(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.ep.prototype={
$1(a){return this.a.b(a)},
$S:14}
A.c3.prototype={
gu(a){var s=this,r=new A.aW(s,s.r,A.r(s).h("aW<1>"))
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
return q.b_(s==null?q.b=A.ff():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.b_(r==null?q.c=A.ff():r,b)}else return q.bL(b)},
bL(a){var s,r,q,p=this
A.r(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.ff()
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
ae(a){var s,r=this,q=new A.d7(A.r(r).c.a(a))
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
ag(a){return J.eZ(a)&1073741823},
aj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.F(a[r].a,b))return r
return-1}}
A.d7.prototype={}
A.aW.prototype={
gn(){return this.d},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.an(q))
else if(r==null){s.sb0(null)
return!1}else{s.sb0(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sb0(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
A.bD.prototype={$in:1,$ii:1,$ip:1}
A.q.prototype={
gu(a){return new A.aP(a,this.gk(a),A.T(a).h("aP<q.E>"))},
D(a,b){return this.p(a,b)},
gbq(a){return this.gk(a)===0},
br(a,b,c){var s=A.T(a)
return new A.ad(a,s.v(c).h("1(q.E)").a(b),s.h("@<q.E>").v(c).h("ad<1,2>"))},
d3(a,b){var s,r,q,p,o=this
if(o.gbq(a)){s=J.f6(0,A.T(a).h("q.E"))
return s}r=o.p(a,0)
q=A.aQ(o.gk(a),r,!0,A.T(a).h("q.E"))
for(p=1;p<o.gk(a);++p)B.a.t(q,p,o.p(a,p))
return q},
d2(a){return this.d3(a,!0)},
j(a,b){var s
A.T(a).h("q.E").a(b)
s=this.gk(a)
this.sk(a,s+1)
this.t(a,s,b)},
i(a){return A.f4(a,"[","]")}}
A.bF.prototype={}
A.dQ.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.k(a)
r.a=s+": "
r.a+=A.k(b)},
$S:15}
A.C.prototype={
I(a,b){var s,r
A.r(this).h("~(C.K,C.V)").a(b)
for(s=J.a6(this.gM());s.l();){r=s.gn()
b.$2(r,this.p(0,r))}},
gk(a){return J.a7(this.gM())},
i(a){return A.fb(this)},
$iac:1}
A.K.prototype={
C(a,b){var s
for(s=J.a6(A.r(this).h("i<K.E>").a(b));s.l();)this.j(0,s.gn())},
i(a){return A.f4(this,"{","}")},
J(a,b){var s,r=this.gu(this)
if(!r.l())return""
if(b===""){s=""
do s+=A.k(r.d)
while(r.l())}else{s=A.k(r.d)
for(;r.l();)s=s+b+A.k(r.d)}return s.charCodeAt(0)==0?s:s},
D(a,b){var s,r,q,p="index"
A.dq(b,p,t.S)
A.cH(b,p)
for(s=this.gu(this),r=0;s.l();){q=s.d
if(b===r)return q;++r}throw A.a(A.b0(b,this,p,null,r))}}
A.bN.prototype={$in:1,$ii:1,$ia_:1}
A.c7.prototype={$in:1,$ii:1,$ia_:1}
A.c4.prototype={}
A.c8.prototype={}
A.ch.prototype={}
A.bp.prototype={
L(a,b){if(b==null)return!1
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
return n+Math.abs(m)+":"+r+s+":"+p+q+"."+B.c.cU(B.d.i(o%1e6),6,"0")}}
A.e8.prototype={}
A.t.prototype={
gZ(){return A.aE(this.$thrownJsError)}}
A.bl.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cv(s)
return"Assertion failed"}}
A.a5.prototype={}
A.cE.prototype={
i(a){return"Throw of null."}}
A.a3.prototype={
gai(){return"Invalid argument"+(!this.a?"(s)":"")},
gah(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gai()+q+o
if(!s.a)return n
return n+s.gah()+": "+A.cv(s.b)}}
A.b3.prototype={
gai(){return"RangeError"},
gah(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.k(q):""
else if(q==null)s=": Not greater than or equal to "+A.k(r)
else if(q>r)s=": Not in inclusive range "+A.k(r)+".."+A.k(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.k(r)
return s}}
A.cy.prototype={
gai(){return"RangeError"},
gah(){var s,r=A.aX(this.b)
if(typeof r!=="number")return r.d9()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+A.k(s)},
gk(a){return this.f}}
A.cS.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.cQ.prototype={
i(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.ax.prototype={
i(a){return"Bad state: "+this.a}}
A.cr.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cv(s)+"."}}
A.cF.prototype={
i(a){return"Out of Memory"},
gZ(){return null},
$it:1}
A.bP.prototype={
i(a){return"Stack Overflow"},
gZ(){return null},
$it:1}
A.ct.prototype={
i(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
A.ea.prototype={
i(a){return"Exception: "+this.a}}
A.dI.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.c.by(q,0,75)+"..."
return r+"\n"+q}}
A.i.prototype={
a8(a,b){var s=A.r(this)
return new A.ag(this,s.h("w(i.E)").a(b),s.h("ag<i.E>"))},
J(a,b){var s,r=this.gu(this)
if(!r.l())return""
if(b===""){s=""
do s+=A.k(J.al(r.gn()))
while(r.l())}else{s=A.k(J.al(r.gn()))
for(;r.l();)s=s+b+A.k(J.al(r.gn()))}return s.charCodeAt(0)==0?s:s},
cO(a){return this.J(a,"")},
gk(a){var s,r=this.gu(this)
for(s=0;r.l();)++s
return s},
gN(a){var s,r=this.gu(this)
if(!r.l())throw A.a(A.dN())
s=r.gn()
if(r.l())throw A.a(A.is())
return s},
D(a,b){var s,r,q
A.cH(b,"index")
for(s=this.gu(this),r=0;s.l();){q=s.gn()
if(b===r)return q;++r}throw A.a(A.b0(b,this,"index",null,r))},
i(a){return A.ir(this,"(",")")}}
A.y.prototype={}
A.D.prototype={
gB(a){return A.m.prototype.gB.call(this,this)},
i(a){return"null"}}
A.m.prototype={$im:1,
L(a,b){return this===b},
gB(a){return A.b2(this)},
i(a){return"Instance of '"+A.k(A.dV(this))+"'"},
toString(){return this.i(this)}}
A.dd.prototype={
i(a){return""},
$ia0:1}
A.cM.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.e.prototype={}
A.aY.prototype={
scM(a,b){a.href=b},
i(a){return String(a)},
$iaY:1}
A.cm.prototype={
i(a){return String(a)}}
A.aZ.prototype={$iaZ:1}
A.aH.prototype={$iaH:1}
A.a4.prototype={
gk(a){return a.length}}
A.bo.prototype={
gk(a){return a.length}}
A.dz.prototype={}
A.aI.prototype={}
A.dB.prototype={
i(a){return String(a)}}
A.cu.prototype={
cJ(a,b){return a.createHTMLDocument(b)}}
A.dC.prototype={
gk(a){return a.length}}
A.cY.prototype={
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
gu(a){var s=this.d2(this)
return new J.a8(s,s.length,A.I(s).h("a8<1>"))}}
A.l.prototype={
gcE(a){return new A.d0(a)},
gaB(a){return new A.cY(a,a.children)},
gbh(a){return new A.d1(a)},
i(a){return a.localName},
E(a,b,c,d){var s,r,q,p
if(c==null){s=$.fL
if(s==null){s=A.c([],t.Q)
r=new A.bJ(s)
B.a.j(s,A.h4(null))
B.a.j(s,A.h9())
$.fL=r
d=r}else d=s
s=$.fK
if(s==null){d.toString
s=new A.cf(d)
$.fK=s
c=s}else{d.toString
s.a=d
c=s}}if($.ao==null){s=document
r=s.implementation
r.toString
r=B.N.cJ(r,"")
$.ao=r
$.f2=r.createRange()
r=$.ao.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.ao.head.appendChild(r)}s=$.ao
if(s.body==null){r=s.createElement("body")
B.P.scH(s,t.t.a(r))}s=$.ao
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.ao.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!B.a.A(B.U,a.tagName)){$.f2.selectNodeContents(q)
s=$.f2
p=s.createContextualFragment(b)}else{J.i9(q,b)
p=$.ao.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.ao.body)J.f_(q)
c.aO(p)
document.adoptNode(p)
return p},
cI(a,b,c){return this.E(a,b,c,null)},
saE(a,b){this.a9(a,b)},
a9(a,b){this.sbv(a,null)
a.appendChild(this.E(a,b,null,null))},
sc3(a,b){a.innerHTML=b},
gbu(a){return a.tagName},
$il:1}
A.dE.prototype={
$1(a){return t.h.b(t.A.a(a))},
$S:12}
A.b.prototype={$ib:1}
A.x.prototype={
bO(a,b,c,d){return a.addEventListener(b,A.dr(t.o.a(c),1),!1)},
$ix:1}
A.cx.prototype={
gk(a){return a.length}}
A.ar.prototype={
gk(a){return a.length},
p(a,b){if(b>>>0!==b||b>=a.length)throw A.a(A.b0(b,a,null,null,null))
return a[b]},
t(a,b,c){t.A.a(c)
throw A.a(A.A("Cannot assign element of immutable List."))},
sk(a,b){throw A.a(A.A("Cannot resize immutable List."))},
D(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
$in:1,
$iat:1,
$ii:1,
$ip:1,
$iar:1}
A.bw.prototype={
scH(a,b){a.body=b}}
A.ab.prototype={$iab:1}
A.bE.prototype={
cD(a,b){return a.assign(b)},
i(a){return String(a)},
$ibE:1}
A.H.prototype={
gN(a){var s=this.a,r=s.childNodes.length
if(r===0)throw A.a(A.dX("No elements"))
if(r>1)throw A.a(A.dX("More than one element"))
s=s.firstChild
s.toString
return s},
j(a,b){this.a.appendChild(t.A.a(b))},
C(a,b){var s,r,q,p,o
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
return new A.aJ(s,s.length,A.T(s).h("aJ<B.E>"))},
gk(a){return this.a.childNodes.length},
sk(a,b){throw A.a(A.A("Cannot set length on immutable List."))},
p(a,b){var s=this.a.childNodes
if(!(b>=0&&b<s.length))return A.f(s,b)
return s[b]}}
A.h.prototype={
cX(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
cZ(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.i4(s,b,a)}catch(q){}return a},
bV(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s)},
i(a){var s=a.nodeValue
return s==null?this.bA(a):s},
sbv(a,b){a.textContent=b},
cn(a,b,c){return a.replaceChild(b,c)},
$ih:1}
A.bI.prototype={
gk(a){return a.length},
p(a,b){if(b>>>0!==b||b>=a.length)throw A.a(A.b0(b,a,null,null,null))
return a[b]},
t(a,b,c){t.A.a(c)
throw A.a(A.A("Cannot assign element of immutable List."))},
sk(a,b){throw A.a(A.A("Cannot resize immutable List."))},
D(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
$in:1,
$iat:1,
$ii:1,
$ip:1}
A.cK.prototype={
gk(a){return a.length}}
A.bQ.prototype={
E(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aa(a,b,c,d)
s=A.ij("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new A.H(r).C(0,new A.H(s))
return r}}
A.cN.prototype={
E(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.aa(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=B.B.E(s.createElement("table"),b,c,d)
s.toString
s=new A.H(s)
q=s.gN(s)
q.toString
s=new A.H(q)
p=s.gN(s)
r.toString
p.toString
new A.H(r).C(0,new A.H(p))
return r}}
A.cO.prototype={
E(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aa(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=B.B.E(s.createElement("table"),b,c,d)
s.toString
s=new A.H(s)
q=s.gN(s)
r.toString
q.toString
new A.H(r).C(0,new A.H(q))
return r}}
A.b5.prototype={
a9(a,b){var s,r
this.sbv(a,null)
s=a.content
s.toString
J.i3(s)
r=this.E(a,b,null,null)
a.content.appendChild(r)},
$ib5:1}
A.O.prototype={$iO:1}
A.ae.prototype={$iae:1}
A.bS.prototype={
gk(a){return a.length},
p(a,b){if(b>>>0!==b||b>=a.length)throw A.a(A.b0(b,a,null,null,null))
return a[b]},
t(a,b,c){t.fY.a(c)
throw A.a(A.A("Cannot assign element of immutable List."))},
sk(a,b){throw A.a(A.A("Cannot resize immutable List."))},
gq(a){if(a.length>0)return a[0]
throw A.a(A.dX("No elements"))},
D(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
$in:1,
$iat:1,
$ii:1,
$ip:1}
A.P.prototype={}
A.b7.prototype={$ib7:1}
A.c5.prototype={
gk(a){return a.length},
p(a,b){if(b>>>0!==b||b>=a.length)throw A.a(A.b0(b,a,null,null,null))
return a[b]},
t(a,b,c){t.A.a(c)
throw A.a(A.A("Cannot assign element of immutable List."))},
sk(a,b){throw A.a(A.A("Cannot resize immutable List."))},
D(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
$in:1,
$iat:1,
$ii:1,
$ip:1}
A.cX.prototype={
I(a,b){var s,r,q,p,o
t.eA.a(b)
for(s=this.gM(),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.eY)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gM(){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=A.c([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(!(p<m.length))return A.f(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
B.a.j(s,n)}}return s}}
A.d0.prototype={
p(a,b){return this.a.getAttribute(A.J(b))},
gk(a){return this.gM().length}}
A.d1.prototype={
K(){var s,r,q,p,o=A.bC(t.N)
for(s=this.a.className.split(" "),r=s.length,q=0;q<r;++q){p=J.fC(s[q])
if(p.length!==0)o.j(0,p)}return o},
aM(a){this.a.className=t.j.a(a).J(0," ")},
gk(a){return this.a.classList.length},
A(a,b){var s=this.a.classList.contains(b)
return s},
j(a,b){var s,r
A.J(b)
s=this.a.classList
r=s.contains(b)
s.add(b)
return!r},
Y(a,b){var s=this.a.classList,r=s.contains(b)
s.remove(b)
return r}}
A.f3.prototype={}
A.c_.prototype={
aF(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Z.a(c)
return A.c1(this.a,this.b,a,!1,s.c)}}
A.bZ.prototype={}
A.c0.prototype={}
A.e9.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:17}
A.aV.prototype={
bI(a){var s
if($.d4.a===0){for(s=0;s<262;++s)$.d4.t(0,B.T[s],A.jZ())
for(s=0;s<12;++s)$.d4.t(0,B.o[s],A.k_())}},
R(a){return $.hY().A(0,A.bs(a))},
H(a,b,c){var s=$.d4.p(0,A.k(A.bs(a))+"::"+b)
if(s==null)s=$.d4.p(0,"*::"+b)
if(s==null)return!1
return A.hf(s.$4(a,b,c,this))},
$iY:1}
A.B.prototype={
gu(a){return new A.aJ(a,this.gk(a),A.T(a).h("aJ<B.E>"))},
j(a,b){A.T(a).h("B.E").a(b)
throw A.a(A.A("Cannot add to immutable List."))}}
A.bJ.prototype={
R(a){return B.a.bg(this.a,new A.dS(a))},
H(a,b,c){return B.a.bg(this.a,new A.dR(a,b,c))},
$iY:1}
A.dS.prototype={
$1(a){return t.D.a(a).R(this.a)},
$S:4}
A.dR.prototype={
$1(a){return t.D.a(a).H(this.a,this.b,this.c)},
$S:4}
A.c9.prototype={
bJ(a,b,c,d){var s,r,q
this.a.C(0,c)
s=b.a8(0,new A.et())
r=b.a8(0,new A.eu())
this.b.C(0,s)
q=this.c
q.C(0,B.V)
q.C(0,r)},
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
A.et.prototype={
$1(a){return!B.a.A(B.o,A.J(a))},
$S:10}
A.eu.prototype={
$1(a){return B.a.A(B.o,A.J(a))},
$S:10}
A.df.prototype={
H(a,b,c){if(this.bG(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
A.ev.prototype={
$1(a){return"TEMPLATE::"+A.k(A.J(a))},
$S:20}
A.de.prototype={
R(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&A.bs(a)==="foreignObject")return!1
if(s)return!0
return!1},
H(a,b,c){if(b==="is"||B.c.bx(b,"on"))return!1
return this.R(a)},
$iY:1}
A.aJ.prototype={
l(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sb7(J.W(s.a,r))
s.c=r
return!0}s.sb7(null)
s.c=q
return!1},
gn(){return this.d},
sb7(a){this.d=this.$ti.h("1?").a(a)},
$iy:1}
A.db.prototype={$iiL:1}
A.cf.prototype={
aO(a){var s,r=new A.eA(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
X(a,b){++this.b
if(b==null||b!==a.parentNode)J.f_(a)
else b.removeChild(a)},
cp(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.i5(a)
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
n=A.S(s)?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){}r="element unprintable"
try{r=J.al(a)}catch(p){}try{q=A.bs(a)
this.co(a,b,n,r,q,t.eO.a(m),A.hg(l))}catch(p){if(A.ak(p) instanceof A.a3)throw p
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
r=A.c(s.slice(0),A.I(s))
for(q=f.gM().length-1,s=f.a,p="Removing disallowed attribute <"+A.k(e)+" ";q>=0;--q){if(!(q<r.length))return A.f(r,q)
o=r[q]
n=l.a
m=J.ia(o)
A.J(o)
if(!n.H(a,m,s.getAttribute(o))){window
n=s.getAttribute(o)
if(typeof console!="undefined")window.console.warn(p+o+'="'+A.k(n)+'">')
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
l.aO(s)}},
$iiB:1}
A.eA.prototype={
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
if(p){p=A.dX("Corrupt HTML")
throw A.a(p)}}catch(n){p=q.a(s);++m.b
o=p.parentNode
if(a==null?o!=null:a!==o){if(o!=null)o.removeChild(p)}else a.removeChild(p)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:21}
A.cZ.prototype={}
A.d5.prototype={}
A.d6.prototype={}
A.d8.prototype={}
A.d9.prototype={}
A.dh.prototype={}
A.di.prototype={}
A.dk.prototype={}
A.dl.prototype={}
A.cs.prototype={
az(a){var s=$.hM().b
if(typeof a!="string")A.aj(A.hq(a))
if(s.test(a))return a
throw A.a(A.cn(a,"value","Not a valid class token"))},
i(a){return this.K().J(0," ")},
gu(a){var s=this.K()
return A.iU(s,s.r,A.r(s).c)},
gk(a){return this.K().a},
A(a,b){this.az(b)
return this.K().A(0,b)},
j(a,b){var s
A.J(b)
this.az(b)
s=this.cS(new A.dy(b))
return A.hf(s==null?!1:s)},
Y(a,b){var s,r
this.az(b)
s=this.K()
r=s.Y(0,b)
this.aM(s)
return r},
D(a,b){return this.K().D(0,b)},
cS(a){var s,r
t.bU.a(a)
s=this.K()
r=a.$1(s)
this.aM(s)
return r}}
A.dy.prototype={
$1(a){return t.j.a(a).j(0,this.a)},
$S:22}
A.cw.prototype={
gP(){var s=this.b,r=A.r(s)
return new A.bG(new A.ag(s,r.h("w(q.E)").a(new A.dF()),r.h("ag<q.E>")),r.h("l(q.E)").a(new A.dG()),r.h("bG<q.E,l>"))},
t(a,b,c){var s
t.h.a(c)
s=this.gP()
J.i8(s.b.$1(J.dv(s.a,b)),c)},
sk(a,b){var s=J.a7(this.gP().a)
if(b>=s)return
else if(b<0)throw A.a(A.bk("Invalid list length",null))
this.cY(0,b,s)},
j(a,b){this.b.a.appendChild(t.h.a(b))},
cY(a,b,c){var s=this.gP()
s=A.iI(s,b,s.$ti.h("i.E"))
B.a.I(A.fQ(A.iJ(s,c-b,A.r(s).h("i.E")),!0,t.z),new A.dH())},
gk(a){return J.a7(this.gP().a)},
p(a,b){var s=this.gP()
return s.b.$1(J.dv(s.a,b))},
gu(a){var s=A.fQ(this.gP(),!1,t.h)
return new J.a8(s,s.length,A.I(s).h("a8<1>"))}}
A.dF.prototype={
$1(a){return t.h.b(t.A.a(a))},
$S:12}
A.dG.prototype={
$1(a){return t.h.a(t.A.a(a))},
$S:23}
A.dH.prototype={
$1(a){return J.f_(a)},
$S:6}
A.en.prototype={
cT(a){if(a<=0||a>4294967296)throw A.a(A.iD("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.aw.prototype={
i(a){return"Point("+this.a+", "+this.b+")"},
L(a,b){if(b==null)return!1
return b instanceof A.aw&&this.a===b.a&&this.b===b.b},
gB(a){var s=B.d.gB(this.a),r=B.d.gB(this.b),q=A.fZ(A.fZ(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911},
bk(a){var s,r
this.$ti.a(a)
s=this.a-a.a
r=this.b-a.b
return Math.sqrt(s*s+r*r)}}
A.b4.prototype={$ib4:1}
A.co.prototype={
K(){var s,r,q,p,o=this.a.getAttribute("class"),n=A.bC(t.N)
if(o==null)return n
for(s=o.split(" "),r=s.length,q=0;q<r;++q){p=J.fC(s[q])
if(p.length!==0)n.j(0,p)}return n},
aM(a){this.a.setAttribute("class",a.J(0," "))}}
A.d.prototype={
gbh(a){return new A.co(a)},
gaB(a){return new A.cw(a,new A.H(a))},
saE(a,b){this.a9(a,b)},
E(a,b,c,d){var s,r,q,p,o=A.c([],t.Q)
B.a.j(o,A.h4(null))
B.a.j(o,A.h9())
B.a.j(o,new A.de())
c=new A.cf(new A.bJ(o))
o=document
s=o.body
s.toString
r=B.t.cI(s,'<svg version="1.1">'+b+"</svg>",c)
q=o.createDocumentFragment()
r.toString
o=new A.H(r)
p=o.gN(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
$id:1}
A.a9.prototype={
gaU(){return B.a.cK(this.e,0,new A.dA(),t.e)},
gaQ(){var s,r,q,p,o=this
if(o.d){s=o.f
r=o.gaU()
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return A.M(r)
q=o.r
if(typeof q!=="number")return A.M(q)
p=o.w
if(typeof p!=="number")return A.M(p)
p=s+r+q-p
s=p}else s=0
return s},
bH(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
$.f1=0
e.sav(a)
e.f=0
e.r=A.hx(e.c)
e.w=A.hL(e.c)
s=b.length
if(s!==0){if(0>=s)return A.f(b,0)
r=b[0]
for(s=e.e,q=t.J,p=0;p<B.a.p($.eV,r);++p)for(o=0;o<11;++o){n=B.y[o]
if(s.length<10||A.kj(n,p,r,A.jO(a))===0){m=e.c
l=new A.a9(n,p,A.c([],q))
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
if(typeof i!=="number")return A.M(i)
h=q.r
if(typeof h!=="number")return A.M(h)
q=q.w
if(typeof q!=="number")return A.M(q)
g=m+i+h-q}else g=0
if(g>k){k=g
j=r}}if(!(j>=0&&j<q))return A.f(s,j)
f=s[j]
e.b=f.b
e.a=f.a}},
aR(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h=this
$.f1=$.f1+1
s=c.length
if(s!==0&&d<s&&A.V(h.a,0,h.b,c[d],f)){if(!(d<c.length))return A.f(c,d)
r=c[d]
h.d=!0
q=A.eU(h.a,0,h.b,r,f)
h.sav(A.dp(h.a,q,h.b,r,f))
p=A.hB(h.c)
h.f=A.hH(p.length)
h.sav(A.fp(h.c,p))
h.r=A.hx(h.c)
h.w=A.hL(h.c)
s=d+1
if(c.length>s){if(typeof e!=="number")return A.M(e)
o=s<e}else o=!1
if(o)for(o=t.J,n=h.e,m=0;m<B.a.p($.eV,r);++m)for(l=0;l<11;++l){k=B.y[l]
j=h.c
i=new A.a9(k,m,A.c([],o))
i.aR(k,m,c,s,e,j)
if(i.d)B.a.j(n,i)}}else h.d=!1},
sav(a){this.c=t.O.a(a)}}
A.dA.prototype={
$2(a,b){var s
A.aX(a)
s=t.d7.a(b).gaQ()
if(typeof a!=="number")return a.m()
return a+s},
$S:36}
A.aq.prototype={
bb(){var s=this
s.z=0
s.y=A.hy(B.a.gq(s.d))
s.x=A.hz(B.a.gq(s.d))},
au(){var s,r,q,p=this;++p.w
p.sc2(Math.max(p.f,p.r))
p.f=0
p.sac(A.ds())
p.sci(A.fR(4,A.hK(),t.e))
B.a.bi(p.e)
p.bb()
s=p.as
r=p.c
q=p.d
s.aC(t.O.a(r),t.w.a(q))
p.aq()
p.a2()},
aq(){var s=this
return s.Q.aH(s.y,s.x,s.z,B.a.gq(s.d),s.c,s.d,s.e,s.f,s.r,s.as)},
a2(){var s,r=this
if(!r.a){s=r.at
if(s!=null)s.a4()
r.at=A.fc(A.dD(Math.max(20,r.b)),r.gc_())}},
b6(){var s,r,q=this,p=q.at
if(p!=null)p.a4()
q.bc()
p=q.y
s=q.x
if(typeof s!=="number")return s.m()
s=A.V(p,s+1,q.z,B.a.gq(q.d),q.c)
p=q.x
if(s){if(typeof p!=="number")return p.m()
q.x=p+1}else{q.sac(A.dp(q.y,p,q.z,B.a.gq(q.d),q.c))
q.sc5(A.hB(q.c))
p=q.e.length
if(p!==0)q.f=q.f+A.hH(p)
B.a.aJ(q.d,0)
B.a.j(q.d,A.fw(null))
q.bb()
p=q.as
s=A.fp(q.c,q.e)
r=q.d
p.aC(t.O.a(s),t.w.a(r))
if(!A.V(q.y,q.x,q.z,B.a.gq(q.d),q.c)){A.du("Game Ended! Final Score:"+q.f)
q.au()
return}}q.aq()
q.a2()},
bc(){var s=this,r=s.e
if(r.length!==0){s.sac(A.fp(s.c,r))
B.a.bi(s.e)}},
c1(a){var s,r,q,p=this
switch(t.db.a(a)){case B.w:p.au()
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
case B.x:s=!p.a
p.a=s
if(s){s=p.at
if(s!=null)s.a4()}else p.a2()
s=p.as
r=p.a
s.b=r
s.bm(r)
A.du(p.a?"Paused":"Unpaused")
break
case B.m:p.aY(-50)
break
case B.n:p.aY(50)
break}p.aq()},
aY(a){var s,r="Speed set to tick:"
this.b+=a
s=this.as.c+=a
A.du(r+s+"ms")
A.du(r+this.b+"ms")},
bY(){var s,r=this
r.bc()
s=A.eU(r.y,r.x,r.z,B.a.gq(r.d),r.c)
r.x=s
r.as.T(r.y,s,r.z)
r.b6()},
sac(a){this.c=t.O.a(a)},
sci(a){this.d=t.w.a(a)},
sc5(a){this.e=t.w.a(a)},
sc2(a){this.r=A.aX(a)}}
A.aM.prototype={
a7(a,b){var s,r=this
t.u.a(b)
s=r instanceof A.am?A.ht(r):null
A.du(A.hu(s==null?A.T(r):s).i(0)+" "+B.p.S(b.keyCode))
if(B.p.S(b.keyCode))r.a.j(0,B.p.p(0,b.keyCode))},
bm(a){},
aC(a,b){t.O.a(a)
t.w.a(b)},
T(a,b,c){},
bl(){}}
A.bM.prototype={}
A.bj.prototype={
bm(a){this.w=a
if(a)this.aV()
else this.ak()},
aC(a,b){var s,r
t.O.a(a)
t.w.a(b)
s=new A.dK()
s.sbT(a)
s.scj(b)
s.c=A.hy(B.a.gq(s.b))
A.hz(B.a.gq(s.b))
s.e=0
this.d=s
s=this.f
r=new A.a9(null,null,A.c([],t.J))
r.bH(a,b,s)
this.e=r},
T(a,b,c){var s=this.d
s.c=a
s.e=c},
bl(){this.ak()},
ak(){var s=this
if(!s.w){s.aV()
s.r=A.fc(A.dD(Math.max(20,s.c)),s.gcA())}},
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
if(typeof s!=="number")return s.d8()
if(typeof q!=="number")return A.M(q)
if(s>q)p.a.j(0,B.i)
else{r=p.a
if(s<q)r.j(0,B.j)
else r.j(0,B.f)}}}p.ak()}}
A.cT.prototype={}
A.dK.prototype={
i(a){var s=this,r=new A.X(A.c([s.gcW(),s.gd6()],t._),t.eU.a(new A.dL()),t.ex).J(0,", "),q=B.a.J(s.gcF(),", ")
return"["+A.k(B.a.gq(s.b))+", "+r+", "+q+"],"},
gcW(){var s,r,q=J.f5(4,t.e)
for(s=this.e,r=0;r<4;++r)q[r]=s===r?1:0
return q},
gd6(){var s,r,q=J.f5(11,t.e)
for(s=this.c,r=0;r<11;++r)q[r]=s===r?1:0
return q},
gcF(){var s,r,q,p,o,n,m,l=A.c([],t.gs)
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
A.dL.prototype={
$1(a){return t.w.a(a)},
$S:2}
A.G.prototype={
i(a){return"GameInput."+this.b}}
A.eX.prototype={
$1(a){t.aY.a(a)
a.au()
a.as.bl()
if(!a.a)a.a2()
return null},
$S:28}
A.bT.prototype={
a7(a,b){var s
t.u.a(b)
s=this.d
if(s.S(b.keyCode))this.a.j(0,s.p(0,b.keyCode))
else this.bz(0,b)},
cd(a){var s,r
t.r.a(a)
s=a.touches
s=(s&&B.q).gq(s)
r=t.p
this.sbd(new A.aw(B.e.U(s.clientX),B.e.U(s.clientY),r))
s=a.touches
s=(s&&B.q).gq(s)
this.sb5(new A.aw(B.e.U(s.clientX),B.e.U(s.clientY),r))},
cb(a){var s,r,q,p,o,n=this,m=t.r.a(a).touches
m=(m&&B.q).gq(m)
n.sb5(new A.aw(B.e.U(m.clientX),B.e.U(m.clientY),t.p))
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
sbd(a){this.e=t.E.a(a)},
sb5(a){this.f=t.E.a(a)}}
A.a1.prototype={
gck(){var s=this.a,r=document
return A.c([r.querySelector(s).querySelector("#q1"),r.querySelector(s).querySelector("#q2"),r.querySelector(s).querySelector("#q3")],t.dp)},
aD(a){return this.cN(t.O.a(a))},
cN(a){var s=0,r=A.eG(t.z),q=this,p,o
var $async$aD=A.eJ(function(b,c){if(b===1)return A.eB(c,r)
while(true)switch(s){case 0:p=q.a
o=document
if(o.querySelector(p)==null)throw A.a(A.fM('Unable to find component to mount Game into "'+p+'"'))
J.fB(o.querySelector(p),'<div id="board"></div>\n<div id="score"></div>\n<div id="high-score"></div>\n<div class="queue">\n    <div id="q1"></div>\n    <div id="q2"></div>\n    <div id="q3"></div>\n</div>')
J.fB(o.querySelector(p).querySelector("#board"),A.hr(a))
return A.eC(null,r)}})
return A.eD($async$aD,r)},
aH(a,b,c,d,e,f,g,h,i,j){var s=t.w
return this.cV(a,b,c,d,t.O.a(e),s.a(f),s.a(g),h,i,j)},
cV(a,b,c,d,e,f,a0,a1,a2,a3){var s=0,r=A.eG(t.z),q,p=this,o,n,m,l,k,j,i,h,g
var $async$aH=A.eJ(function(a4,a5){if(a4===1)return A.eB(a5,r)
while(true)$async$outer:switch(s){case 0:i=A.dn(e,null)
h=A.fa(f,!0,t.e)
g=t.dE
if(g.b(a3)&&a3.e.d){g.a(a3)
g=a3.e
o=A.eU(g.a,b,g.b,d,e)
g=a3.e
i=A.fv(i,A.dn(A.dp(g.a,o,g.b,d,A.ds()),-2))}i=A.fv(A.fv(i,A.dn(A.dp(a,A.eU(a,b,c,d,e),c,d,A.ds()),-1)),A.dp(a,b,c,d,A.ds()))
g=A.I(i)
n=g.h("X<1,o*>")
m=A.fa(new A.X(i,g.h("i<o*>(1)").a(new A.e3()),n),!0,n.h("i.E"))
l=J.i6(document.querySelector(p.a).querySelector("#board"))
k=A.c([],t.ff)
for(b=0;b<24;++b)for(a=0;a<10;++a)B.a.j(k,B.a.A(a0,b))
for(d=0;d<l.gk(l);++d){g=l.p(0,d)
if(!(d<m.length)){q=A.f(m,d)
s=1
break $async$outer}n=A.fx(m[d],!1)
if(!(d<k.length)){q=A.f(k,d)
s=1
break $async$outer}j=k[d]?"remove":""
g.className="pixel "+n+" "+j}p.W(a1,a2)
p.ar(h)
case 1:return A.eC(q,r)}})
return A.eD($async$aH,r)},
W(a,b){var s=0,r=A.eG(t.z),q=this,p,o,n,m,l
var $async$W=A.eJ(function(c,d){if(c===1)return A.eB(d,r)
while(true)switch(s){case 0:n="Score: "+a
m=q.a
l=document
s=l.querySelector(m).querySelector("#score").innerText!==n?2:3
break
case 2:l.querySelector(m).querySelector("#score").innerText=n
s=a!==0&&!J.bi(l.querySelector(m).querySelector("#score")).A(0,"bounce-score")?4:5
break
case 4:J.bi(l.querySelector(m).querySelector("#score")).j(0,"bounce-score")
s=6
return A.hh(A.fN(A.dD(400),t.z),$async$W)
case 6:J.bi(l.querySelector(m).querySelector("#score")).Y(0,"bounce-score")
case 5:case 3:p="Highest: "+b
o=b!==0
s=o&&l.querySelector(m).querySelector("#high-score").innerText!==p?7:8
break
case 7:l.querySelector(m).querySelector("#high-score").innerText=p
s=o&&!J.bi(l.querySelector(m).querySelector("#high-score")).A(0,"bounce-score")?9:10
break
case 9:J.bi(l.querySelector(m).querySelector("#high-score")).j(0,"bounce-score")
s=11
return A.hh(A.fN(A.dD(400),t.z),$async$W)
case 11:J.bi(l.querySelector(m).querySelector("#high-score")).Y(0,"bounce-score")
case 10:case 8:return A.eC(null,r)}})
return A.eD($async$W,r)},
ar(a){return this.ce(t.w.a(a))},
ce(a){var s=0,r=A.eG(t.z),q=this,p,o,n
var $async$ar=A.eJ(function(b,c){if(b===1)return A.eB(c,r)
while(true)switch(s){case 0:if(!A.kf(a,q.b))for(p=q.a,o=document,n=0;o.querySelector(p).querySelector("#q1"),o.querySelector(p).querySelector("#q2"),o.querySelector(p).querySelector("#q3"),n<3;++n)q.cf(n,a)
q.scg(a)
return A.eC(null,r)}})
return A.eD($async$ar,r)},
cf(a,b){var s,r,q,p,o,n,m
t.w.a(b)
s=this.gck()
if(!(a<3))return A.f(s,a)
r=s[a]
s=a+1
if(!(s<b.length))return A.f(b,s)
q=B.a.p($.hE,b[s])
r.className="on-deck "+A.ka(q.length)
s=J.a2(r)
s.saE(r,A.hr(q))
p=A.I(q)
o=p.h("X<1,o*>")
n=A.fa(new A.X(q,p.h("i<o*>(1)").a(new A.e2()),o),!0,o.h("i.E"))
m=s.gaB(r)
for(a=0;a<m.gk(m);++a){s=m.p(0,a)
if(!(a<n.length))return A.f(n,a)
s.className="pixel "+A.fx(n[a],!0)}},
scg(a){this.b=t.w.a(a)},
$iio:1}
A.e3.prototype={
$1(a){return t.w.a(a)},
$S:2}
A.e2.prototype={
$1(a){return t.w.a(a)},
$S:2}
A.eL.prototype={
$1(a){return J.i7(t.w.a(a),A.k8(),t.dV)},
$S:30};(function aliases(){var s=J.bx.prototype
s.bA=s.i
s=J.aO.prototype
s.bF=s.i
s=A.au.prototype
s.bC=s.bn
s.bD=s.bo
s.bE=s.bp
s=A.i.prototype
s.bB=s.a8
s=A.l.prototype
s.aa=s.E
s=A.c9.prototype
s.bG=s.H
s=A.aM.prototype
s.bz=s.a7})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_1i
s(A,"jt","ip",31)
s(A,"jJ","iN",1)
s(A,"jK","iO",1)
s(A,"jL","iP",1)
r(A,"hs","jC",0)
q(A,"jN","jw",7)
r(A,"jM","jv",0)
p(A.z.prototype,"gbW","O",7)
o(A.ba.prototype,"gcr","cs",0)
q(A,"jP","je",33)
n(A,"jZ",4,null,["$4"],["iR"],8,0)
n(A,"k_",4,null,["$4"],["iS"],8,0)
var k
o(k=A.aq.prototype,"gc_","b6",0)
m(k,"gc0","c1",25)
l(A.aM.prototype,"gaG","a7",9)
o(A.bj.prototype,"gcA","cB",0)
n(A,"hK",0,null,["$1","$0"],["fw",function(){return A.fw(null)}],35,0)
s(A,"k8","kb",24)
l(k=A.bT.prototype,"gaG","a7",9)
m(k,"gcc","cd",3)
m(k,"gca","cb",3)
m(k,"gc8","c9",3)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.m,null)
q(A.m,[A.f8,J.bx,J.a8,A.t,A.i,A.aP,A.y,A.bv,A.bt,A.bn,A.am,A.e_,A.dT,A.bu,A.ca,A.C,A.dP,A.bB,A.cB,A.Z,A.d3,A.cb,A.dg,A.cV,A.bm,A.ay,A.b8,A.bW,A.aU,A.z,A.cW,A.U,A.d_,A.c6,A.ba,A.dc,A.cg,A.ch,A.d7,A.aW,A.c4,A.q,A.K,A.c8,A.bp,A.e8,A.cF,A.bP,A.ea,A.dI,A.D,A.dd,A.cM,A.dz,A.f3,A.aV,A.B,A.bJ,A.c9,A.de,A.aJ,A.db,A.cf,A.en,A.aw,A.a9,A.aq,A.aM,A.bM,A.dK,A.a1])
q(J.bx,[J.cz,J.bz,J.N,J.u,J.b1,J.as])
q(J.N,[J.aO,A.x,A.cZ,A.dB,A.cu,A.dC,A.b,A.d5,A.bE,A.d8,A.O,A.dh,A.dk])
q(J.aO,[J.cG,J.aT,J.aa])
r(J.dO,J.u)
q(J.b1,[J.by,J.cA])
q(A.t,[A.cD,A.cI,A.bK,A.a5,A.cC,A.cR,A.cJ,A.bl,A.d2,A.cE,A.a3,A.cS,A.cQ,A.ax,A.cr,A.ct])
q(A.i,[A.n,A.bG,A.ag,A.X,A.aS,A.aR])
q(A.n,[A.av,A.bA])
q(A.y,[A.bH,A.bU,A.bR,A.bO])
r(A.ad,A.av)
r(A.br,A.aS)
r(A.bq,A.aR)
r(A.aN,A.bn)
q(A.am,[A.dM,A.cp,A.cq,A.cP,A.eO,A.eQ,A.e5,A.e4,A.eE,A.ee,A.em,A.dY,A.es,A.ep,A.dE,A.e9,A.dS,A.dR,A.et,A.eu,A.ev,A.dy,A.dF,A.dG,A.dH,A.dL,A.eX,A.e3,A.e2,A.eL])
r(A.bL,A.a5)
q(A.cP,[A.cL,A.b_])
r(A.cU,A.bl)
r(A.bF,A.C)
q(A.bF,[A.au,A.cX])
q(A.cq,[A.eP,A.eF,A.eK,A.ef,A.dQ,A.eA,A.dA])
r(A.cc,A.d2)
q(A.cp,[A.e6,A.e7,A.ew,A.dJ,A.eb,A.ei,A.eg,A.ed,A.eh,A.ec,A.el,A.ek,A.ej,A.dZ,A.eq,A.eI,A.er])
q(A.ay,[A.bc,A.c_])
r(A.b9,A.bc)
r(A.bV,A.b9)
r(A.bX,A.b8)
r(A.ah,A.bX)
r(A.b6,A.bW)
r(A.bY,A.d_)
r(A.da,A.cg)
r(A.c2,A.au)
r(A.c7,A.ch)
r(A.c3,A.c7)
r(A.bD,A.c4)
r(A.bN,A.c8)
q(A.a3,[A.b3,A.cy])
r(A.h,A.x)
q(A.h,[A.l,A.a4,A.aI,A.b7])
q(A.l,[A.e,A.d])
q(A.e,[A.aY,A.cm,A.aZ,A.aH,A.cx,A.cK,A.bQ,A.cN,A.cO,A.b5])
r(A.bo,A.cZ)
q(A.bD,[A.cY,A.H,A.cw])
r(A.d6,A.d5)
r(A.ar,A.d6)
r(A.bw,A.aI)
r(A.P,A.b)
q(A.P,[A.ab,A.ae])
r(A.d9,A.d8)
r(A.bI,A.d9)
r(A.di,A.dh)
r(A.bS,A.di)
r(A.dl,A.dk)
r(A.c5,A.dl)
r(A.d0,A.cX)
r(A.cs,A.bN)
q(A.cs,[A.d1,A.co])
r(A.bZ,A.c_)
r(A.c0,A.U)
r(A.df,A.c9)
r(A.b4,A.d)
q(A.aM,[A.cT,A.bT])
r(A.bj,A.cT)
r(A.G,A.e8)
s(A.c4,A.q)
s(A.c8,A.K)
s(A.ch,A.K)
s(A.cZ,A.dz)
s(A.d5,A.q)
s(A.d6,A.B)
s(A.d8,A.q)
s(A.d9,A.B)
s(A.dh,A.q)
s(A.di,A.B)
s(A.dk,A.q)
s(A.dl,A.B)
s(A.cT,A.bM)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",jQ:"double",aF:"num",j:"String",w:"bool",D:"Null",p:"List"},mangledNames:{},types:["~()","~(~())","p<o*>*(p<o*>*)","~(ae*)","w(Y)","D()","~(@)","~(m,a0)","w(l,j,j,aV)","~(ab*)","w(j)","D(@)","w(h)","z<@>(@)","w(@)","~(m?,m?)","w(m?)","~(b)","D(m,a0)","~(o,@)","j(j)","~(h,h?)","w(a_<j>)","l(h)","j*(o*)","~(G*)","D(@,a0)","@(@,j)","~(aq*)","@(j)","i<j*>*(p<o*>*)","o(m?)","@(@)","w(m?,m?)","D(~())","o*([@])","o*(o*,a9*)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.j7(v.typeUniverse,JSON.parse('{"cG":"aO","aT":"aO","aa":"aO","kl":"b","ks":"b","kk":"d","kt":"d","km":"e","kw":"e","kx":"h","kr":"h","kL":"aI","kK":"x","ko":"P","kn":"a4","kz":"a4","kv":"l","ku":"ar","cz":{"w":[]},"bz":{"D":[]},"u":{"p":["1"],"n":["1"],"i":["1"]},"dO":{"u":["1"],"p":["1"],"n":["1"],"i":["1"]},"a8":{"y":["1"]},"b1":{"aF":[]},"by":{"o":[],"aF":[]},"cA":{"aF":[]},"as":{"j":[],"dU":[]},"cD":{"t":[]},"cI":{"t":[]},"bK":{"a5":[],"t":[]},"n":{"i":["1"]},"av":{"n":["1"],"i":["1"]},"aP":{"y":["1"]},"bG":{"i":["2"],"i.E":"2"},"bH":{"y":["2"]},"ad":{"av":["2"],"n":["2"],"i":["2"],"i.E":"2","av.E":"2"},"ag":{"i":["1"],"i.E":"1"},"bU":{"y":["1"]},"X":{"i":["2"],"i.E":"2"},"bv":{"y":["2"]},"aS":{"i":["1"],"i.E":"1"},"br":{"aS":["1"],"n":["1"],"i":["1"],"i.E":"1"},"bR":{"y":["1"]},"aR":{"i":["1"],"i.E":"1"},"bq":{"aR":["1"],"n":["1"],"i":["1"],"i.E":"1"},"bO":{"y":["1"]},"bt":{"y":["1"]},"bn":{"ac":["1","2"]},"aN":{"bn":["1","2"],"ac":["1","2"]},"bL":{"a5":[],"t":[]},"cC":{"t":[]},"cR":{"t":[]},"ca":{"a0":[]},"am":{"aK":[]},"cp":{"aK":[]},"cq":{"aK":[]},"cP":{"aK":[]},"cL":{"aK":[]},"b_":{"aK":[]},"cJ":{"t":[]},"cU":{"t":[]},"au":{"C":["1","2"],"ac":["1","2"],"C.K":"1","C.V":"2"},"bA":{"n":["1"],"i":["1"],"i.E":"1"},"bB":{"y":["1"]},"cB":{"dU":[]},"cb":{"h_":[]},"d2":{"t":[]},"cc":{"a5":[],"t":[]},"z":{"ap":["1"]},"dg":{"iK":[]},"bm":{"t":[]},"bV":{"b9":["1"],"bc":["1"],"ay":["1"]},"ah":{"bX":["1"],"b8":["1"],"U":["1"],"az":["1"]},"bW":{"fX":["1"],"h8":["1"],"az":["1"]},"b6":{"bW":["1"],"fX":["1"],"h8":["1"],"az":["1"]},"b9":{"bc":["1"],"ay":["1"]},"bX":{"b8":["1"],"U":["1"],"az":["1"]},"b8":{"U":["1"],"az":["1"]},"bc":{"ay":["1"]},"bY":{"d_":["1"]},"ba":{"U":["1"]},"cg":{"h2":[]},"da":{"cg":[],"h2":[]},"c2":{"au":["1","2"],"C":["1","2"],"ac":["1","2"],"C.K":"1","C.V":"2"},"c3":{"K":["1"],"a_":["1"],"n":["1"],"i":["1"],"K.E":"1"},"aW":{"y":["1"]},"bD":{"q":["1"],"p":["1"],"n":["1"],"i":["1"]},"bF":{"C":["1","2"],"ac":["1","2"]},"C":{"ac":["1","2"]},"bN":{"K":["1"],"a_":["1"],"n":["1"],"i":["1"]},"c7":{"K":["1"],"a_":["1"],"n":["1"],"i":["1"]},"o":{"aF":[]},"p":{"n":["1"],"i":["1"]},"a_":{"n":["1"],"i":["1"]},"j":{"dU":[]},"bl":{"t":[]},"a5":{"t":[]},"cE":{"t":[]},"a3":{"t":[]},"b3":{"t":[]},"cy":{"t":[]},"cS":{"t":[]},"cQ":{"t":[]},"ax":{"t":[]},"cr":{"t":[]},"cF":{"t":[]},"bP":{"t":[]},"ct":{"t":[]},"dd":{"a0":[]},"l":{"h":[],"x":[]},"ab":{"b":[]},"h":{"x":[]},"ae":{"b":[]},"aV":{"Y":[]},"e":{"l":[],"h":[],"x":[]},"aY":{"l":[],"h":[],"x":[]},"cm":{"l":[],"h":[],"x":[]},"aZ":{"l":[],"h":[],"x":[]},"aH":{"l":[],"h":[],"x":[]},"a4":{"h":[],"x":[]},"aI":{"h":[],"x":[]},"cY":{"q":["l"],"p":["l"],"n":["l"],"i":["l"],"q.E":"l"},"cx":{"l":[],"h":[],"x":[]},"ar":{"q":["h"],"B":["h"],"p":["h"],"at":["h"],"n":["h"],"i":["h"],"q.E":"h","B.E":"h"},"bw":{"h":[],"x":[]},"H":{"q":["h"],"p":["h"],"n":["h"],"i":["h"],"q.E":"h"},"bI":{"q":["h"],"B":["h"],"p":["h"],"at":["h"],"n":["h"],"i":["h"],"q.E":"h","B.E":"h"},"cK":{"l":[],"h":[],"x":[]},"bQ":{"l":[],"h":[],"x":[]},"cN":{"l":[],"h":[],"x":[]},"cO":{"l":[],"h":[],"x":[]},"b5":{"l":[],"h":[],"x":[]},"bS":{"q":["O"],"B":["O"],"p":["O"],"at":["O"],"n":["O"],"i":["O"],"q.E":"O","B.E":"O"},"P":{"b":[]},"b7":{"h":[],"x":[]},"c5":{"q":["h"],"B":["h"],"p":["h"],"at":["h"],"n":["h"],"i":["h"],"q.E":"h","B.E":"h"},"cX":{"C":["j","j"],"ac":["j","j"]},"d0":{"C":["j","j"],"ac":["j","j"],"C.K":"j","C.V":"j"},"d1":{"K":["j"],"a_":["j"],"n":["j"],"i":["j"],"K.E":"j"},"c_":{"ay":["1"]},"bZ":{"c_":["1"],"ay":["1"]},"c0":{"U":["1"]},"bJ":{"Y":[]},"c9":{"Y":[]},"df":{"Y":[]},"de":{"Y":[]},"aJ":{"y":["1"]},"db":{"iL":[]},"cf":{"iB":[]},"cs":{"K":["j"],"a_":["j"],"n":["j"],"i":["j"]},"cw":{"q":["l"],"p":["l"],"n":["l"],"i":["l"],"q.E":"l"},"b4":{"d":[],"l":[],"h":[],"x":[]},"co":{"K":["j"],"a_":["j"],"n":["j"],"i":["j"],"K.E":"j"},"d":{"l":[],"h":[],"x":[]},"bj":{"aM":[],"bM":[]},"bT":{"aM":[]},"a1":{"io":[]}}'))
A.j6(v.typeUniverse,JSON.parse('{"n":1,"bD":1,"bF":2,"bN":1,"c7":1,"c4":1,"c8":1,"ch":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",g:"`null` encountered as the result from expression with type `Never`."}
var t=(function rtii(){var s=A.fr
return{a7:s("@<~>"),n:s("bm"),cR:s("aZ"),t:s("aH"),U:s("n<@>"),h:s("l"),W:s("t"),B:s("b"),ex:s("X<p<o*>*,o*>"),Y:s("aK"),f:s("ap<@>"),L:s("aN<o*,G*>"),eh:s("i<h>"),hf:s("i<@>"),eU:s("i<o*>(p<o*>*)"),Q:s("u<Y>"),s:s("u<j>"),m:s("u<@>"),J:s("u<a9*>"),dp:s("u<l*>"),R:s("u<aq*>"),ch:s("u<p<p<w*>*>*>"),I:s("u<p<p<o*>*>*>"),bB:s("u<p<w*>*>"),_:s("u<p<o*>*>"),V:s("u<j*>"),ff:s("u<w*>"),i:s("u<o*>"),gs:s("u<aF*>"),T:s("bz"),a:s("aa"),aU:s("at<@>"),eO:s("ac<@,@>"),fj:s("ad<j*,j>"),A:s("h"),D:s("Y"),P:s("D"),K:s("m"),p:s("aw<aF>"),ew:s("b4"),j:s("a_<j>"),l:s("a0"),N:s("j"),d0:s("j(j*)"),g7:s("d"),aW:s("b5"),fY:s("O"),dd:s("h_"),eK:s("a5"),ak:s("aT"),q:s("b6<G*>"),h9:s("b7"),ac:s("H"),k:s("bZ<ab*>"),b1:s("bZ<ae*>"),d:s("z<@>"),fJ:s("z<o>"),G:s("aV"),v:s("w"),al:s("w(m)"),gR:s("jQ"),z:s("@"),fO:s("@()"),y:s("@(m)"),C:s("@(m,a0)"),bU:s("@(a_<j>)"),S:s("o"),d7:s("a9*"),aY:s("aq*"),db:s("G*"),u:s("ab*"),O:s("p<p<o*>*>*"),w:s("p<o*>*"),x:s("0&*"),c:s("m*"),dE:s("bM*"),E:s("aw<aF>*"),dV:s("j*"),r:s("ae*"),b:s("w*"),e:s("o*"),eH:s("ap<D>?"),X:s("m?"),F:s("aU<@,@>?"),g:s("d7?"),o:s("@(b)?"),Z:s("~()?"),di:s("aF"),H:s("~"),M:s("~()"),d5:s("~(m)"),da:s("~(m,a0)"),eA:s("~(j,j)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.C=A.aY.prototype
B.t=A.aH.prototype
B.N=A.cu.prototype
B.P=A.bw.prototype
B.Q=J.bx.prototype
B.a=J.u.prototype
B.d=J.by.prototype
B.e=J.b1.prototype
B.c=J.as.prototype
B.R=J.aa.prototype
B.S=J.N.prototype
B.W=A.bE.prototype
B.A=J.cG.prototype
B.B=A.bQ.prototype
B.q=A.bS.prototype
B.r=J.aT.prototype
B.D=new A.bt(A.fr("bt<0&*>"))
B.u=function getTagFallback(o) {
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
B.v=function(hooks) { return hooks; }

B.K=new A.cF()
B.L=new A.en()
B.b=new A.da()
B.M=new A.dd()
B.O=new A.bp(0)
B.w=new A.G("reset")
B.f=new A.G("dropPiece")
B.h=new A.G("rotatePiece")
B.i=new A.G("movePieceLeft")
B.j=new A.G("movePieceRight")
B.l=new A.G("movePieceDown")
B.x=new A.G("togglePause")
B.m=new A.G("increaseSpeed")
B.n=new A.G("decreaseSpeed")
B.T=A.c(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.V)
B.y=A.c(s([-2,-1,0,1,2,3,4,5,6,7,8]),t.i)
B.U=A.c(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.V)
B.V=A.c(s([]),t.V)
B.z=A.c(s(["bind","if","ref","repeat","syntax"]),t.V)
B.o=A.c(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.V)
B.p=new A.aN([27,B.w,80,B.x,107,B.m,187,B.m,109,B.n,189,B.n],t.L)
B.k=new A.aN([13,B.f,38,B.h,37,B.i,39,B.j,40,B.l],t.L)
B.X=new A.aN([32,B.f,87,B.h,65,B.i,68,B.j,83,B.l],t.L)})();(function staticFields(){$.eo=null
$.fS=null
$.fH=null
$.fG=null
$.hw=null
$.hp=null
$.hF=null
$.eM=null
$.eR=null
$.ft=null
$.be=null
$.cj=null
$.ck=null
$.fm=!1
$.v=B.b
$.R=A.c([],A.fr("u<m>"))
$.ao=null
$.f2=null
$.fL=null
$.fK=null
$.d4=A.iz(t.N,t.Y)
$.f1=0
$.fk=[]
$.eV=A.c([1,2,2,2,4,4,4],t.i)
$.hE=function(){var s=t.i,r=t._
return A.c([A.c([A.c([1,1],s),A.c([1,1],s)],r),A.c([A.c([0,0,0,0],s),A.c([2,2,2,2],s),A.c([0,0,0,0],s),A.c([0,0,0,0],s)],r),A.c([A.c([0,0,0],s),A.c([0,3,3],s),A.c([3,3,0],s)],r),A.c([A.c([0,0,0],s),A.c([4,4,0],s),A.c([0,4,4],s)],r),A.c([A.c([0,5,0],s),A.c([0,5,0],s),A.c([0,5,5],s)],r),A.c([A.c([0,6,0],s),A.c([0,6,0],s),A.c([6,6,0],s)],r),A.c([A.c([0,0,0],s),A.c([7,7,7],s),A.c([0,7,0],s)],r)],t.I)}()
$.ci=A.c([],t.R)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazyOld
s($,"kq","hN",()=>A.jW("_$dart_dartClosure"))
s($,"kA","hO",()=>A.af(A.e0({
toString:function(){return"$receiver$"}})))
s($,"kB","hP",()=>A.af(A.e0({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"kC","hQ",()=>A.af(A.e0(null)))
s($,"kD","hR",()=>A.af(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"kG","hU",()=>A.af(A.e0(void 0)))
s($,"kH","hV",()=>A.af(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"kF","hT",()=>A.af(A.h0(null)))
s($,"kE","hS",()=>A.af(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"kJ","hX",()=>A.af(A.h0(void 0)))
s($,"kI","hW",()=>A.af(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"kM","fy",()=>A.iM())
s($,"kN","hY",()=>A.fP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N))
s($,"kp","hM",()=>A.iF("^\\S+$"))
r($,"l_","hZ",()=>B.L)
r($,"l2","i0",()=>A.jU())
r($,"l1","i_",()=>A.jT())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.N,MediaError:J.N,Navigator:J.N,NavigatorConcurrentHardware:J.N,NavigatorUserMediaError:J.N,OverconstrainedError:J.N,PositionError:J.N,GeolocationPositionError:J.N,Range:J.N,HTMLAudioElement:A.e,HTMLBRElement:A.e,HTMLButtonElement:A.e,HTMLCanvasElement:A.e,HTMLContentElement:A.e,HTMLDListElement:A.e,HTMLDataElement:A.e,HTMLDataListElement:A.e,HTMLDetailsElement:A.e,HTMLDialogElement:A.e,HTMLDivElement:A.e,HTMLEmbedElement:A.e,HTMLFieldSetElement:A.e,HTMLHRElement:A.e,HTMLHeadElement:A.e,HTMLHeadingElement:A.e,HTMLHtmlElement:A.e,HTMLIFrameElement:A.e,HTMLImageElement:A.e,HTMLInputElement:A.e,HTMLLIElement:A.e,HTMLLabelElement:A.e,HTMLLegendElement:A.e,HTMLLinkElement:A.e,HTMLMapElement:A.e,HTMLMediaElement:A.e,HTMLMenuElement:A.e,HTMLMetaElement:A.e,HTMLMeterElement:A.e,HTMLModElement:A.e,HTMLOListElement:A.e,HTMLObjectElement:A.e,HTMLOptGroupElement:A.e,HTMLOptionElement:A.e,HTMLOutputElement:A.e,HTMLParagraphElement:A.e,HTMLParamElement:A.e,HTMLPictureElement:A.e,HTMLPreElement:A.e,HTMLProgressElement:A.e,HTMLQuoteElement:A.e,HTMLScriptElement:A.e,HTMLShadowElement:A.e,HTMLSlotElement:A.e,HTMLSourceElement:A.e,HTMLSpanElement:A.e,HTMLStyleElement:A.e,HTMLTableCaptionElement:A.e,HTMLTableCellElement:A.e,HTMLTableDataCellElement:A.e,HTMLTableHeaderCellElement:A.e,HTMLTableColElement:A.e,HTMLTextAreaElement:A.e,HTMLTimeElement:A.e,HTMLTitleElement:A.e,HTMLTrackElement:A.e,HTMLUListElement:A.e,HTMLUnknownElement:A.e,HTMLVideoElement:A.e,HTMLDirectoryElement:A.e,HTMLFontElement:A.e,HTMLFrameElement:A.e,HTMLFrameSetElement:A.e,HTMLMarqueeElement:A.e,HTMLElement:A.e,HTMLAnchorElement:A.aY,HTMLAreaElement:A.cm,HTMLBaseElement:A.aZ,HTMLBodyElement:A.aH,CDATASection:A.a4,CharacterData:A.a4,Comment:A.a4,ProcessingInstruction:A.a4,Text:A.a4,CSSStyleDeclaration:A.bo,MSStyleCSSProperties:A.bo,CSS2Properties:A.bo,XMLDocument:A.aI,Document:A.aI,DOMException:A.dB,DOMImplementation:A.cu,DOMTokenList:A.dC,MathMLElement:A.l,Element:A.l,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,CustomEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,Window:A.x,DOMWindow:A.x,EventTarget:A.x,HTMLFormElement:A.cx,HTMLCollection:A.ar,HTMLFormControlsCollection:A.ar,HTMLOptionsCollection:A.ar,HTMLDocument:A.bw,KeyboardEvent:A.ab,Location:A.bE,DocumentFragment:A.h,ShadowRoot:A.h,DocumentType:A.h,Node:A.h,NodeList:A.bI,RadioNodeList:A.bI,HTMLSelectElement:A.cK,HTMLTableElement:A.bQ,HTMLTableRowElement:A.cN,HTMLTableSectionElement:A.cO,HTMLTemplateElement:A.b5,Touch:A.O,TouchEvent:A.ae,TouchList:A.bS,CompositionEvent:A.P,FocusEvent:A.P,MouseEvent:A.P,DragEvent:A.P,PointerEvent:A.P,TextEvent:A.P,WheelEvent:A.P,UIEvent:A.P,Attr:A.b7,NamedNodeMap:A.c5,MozNamedAttrMap:A.c5,SVGScriptElement:A.b4,SVGAElement:A.d,SVGAnimateElement:A.d,SVGAnimateMotionElement:A.d,SVGAnimateTransformElement:A.d,SVGAnimationElement:A.d,SVGCircleElement:A.d,SVGClipPathElement:A.d,SVGDefsElement:A.d,SVGDescElement:A.d,SVGDiscardElement:A.d,SVGEllipseElement:A.d,SVGFEBlendElement:A.d,SVGFEColorMatrixElement:A.d,SVGFEComponentTransferElement:A.d,SVGFECompositeElement:A.d,SVGFEConvolveMatrixElement:A.d,SVGFEDiffuseLightingElement:A.d,SVGFEDisplacementMapElement:A.d,SVGFEDistantLightElement:A.d,SVGFEFloodElement:A.d,SVGFEFuncAElement:A.d,SVGFEFuncBElement:A.d,SVGFEFuncGElement:A.d,SVGFEFuncRElement:A.d,SVGFEGaussianBlurElement:A.d,SVGFEImageElement:A.d,SVGFEMergeElement:A.d,SVGFEMergeNodeElement:A.d,SVGFEMorphologyElement:A.d,SVGFEOffsetElement:A.d,SVGFEPointLightElement:A.d,SVGFESpecularLightingElement:A.d,SVGFESpotLightElement:A.d,SVGFETileElement:A.d,SVGFETurbulenceElement:A.d,SVGFilterElement:A.d,SVGForeignObjectElement:A.d,SVGGElement:A.d,SVGGeometryElement:A.d,SVGGraphicsElement:A.d,SVGImageElement:A.d,SVGLineElement:A.d,SVGLinearGradientElement:A.d,SVGMarkerElement:A.d,SVGMaskElement:A.d,SVGMetadataElement:A.d,SVGPathElement:A.d,SVGPatternElement:A.d,SVGPolygonElement:A.d,SVGPolylineElement:A.d,SVGRadialGradientElement:A.d,SVGRectElement:A.d,SVGSetElement:A.d,SVGStopElement:A.d,SVGStyleElement:A.d,SVGSVGElement:A.d,SVGSwitchElement:A.d,SVGSymbolElement:A.d,SVGTSpanElement:A.d,SVGTextContentElement:A.d,SVGTextElement:A.d,SVGTextPathElement:A.d,SVGTextPositioningElement:A.d,SVGTitleElement:A.d,SVGUseElement:A.d,SVGViewElement:A.d,SVGGradientElement:A.d,SVGComponentTransferFunctionElement:A.d,SVGFEDropShadowElement:A.d,SVGMPathElement:A.d,SVGElement:A.d})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,Range:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMTokenList:true,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,WheelEvent:true,UIEvent:false,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.k7
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
