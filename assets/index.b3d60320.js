var wt=Object.defineProperty,Ct=Object.defineProperties;var Ft=Object.getOwnPropertyDescriptors;var lt=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var ut=(t,e,s)=>e in t?wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,ct=(t,e)=>{for(var s in e||(e={}))kt.call(e,s)&&ut(t,s,e[s]);if(lt)for(var s of lt(e))St.call(e,s)&&ut(t,s,e[s]);return t},dt=(t,e)=>Ct(t,Ft(e));import{d as D,r as _t,o as u,c as p,a as l,b as d,w as c,e as g,f as K,p as et,g as st,s as L,u as n,h as k,n as ot,t as m,i as B,K as Dt,T as Et,F as A,j as It,k as j,l as xt,m as nt,q as Tt,v as bt,x as J,y as W,z as V,A as N,B as Pt,C as pt,D as Bt,E as At,G as Ot,H as Lt,I as Ut,J as Mt}from"./vendor.00ee5308.js";const Rt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}};Rt();var E=(t,e)=>{for(const[s,o]of e)t[s]=o;return t};const Vt={class:"nav"},Nt={class:"nav-item"},Kt=g("\u6587\u5B57"),Wt={class:"nav-item"},Ht=g("\u53D1\u8A00"),jt={class:"nav-item"},Gt=g("\u679C\u56ED"),Jt={class:"nav-item"},zt=g("\u4E2A\u4EBA"),qt=D({setup(t){return(e,s)=>{const o=_t("router-link");return u(),p("div",Vt,[l("div",Nt,[d(o,{to:"/"},{default:c(()=>[Kt]),_:1})]),l("div",Wt,[d(o,{to:"/message"},{default:c(()=>[Ht]),_:1})]),l("div",jt,[d(o,{to:"/playground"},{default:c(()=>[Gt]),_:1})]),l("div",Jt,[d(o,{to:"/profile"},{default:c(()=>[zt]),_:1})])])}}});var Yt=E(qt,[["__scopeId","data-v-08154f56"]]);const Qt=2e3,Xt={"?":"https://pt-starimg.didistatic.com/static/starimg/img/KY7KIe3Q4q1639999226185.png","!":"https://pt-starimg.didistatic.com/static/starimg/img/jGg8Oue4V41639999416168.png",OK:"https://pt-starimg.didistatic.com/static/starimg/img/iHBDA1efzF1637660245957.png",ERR:"https://pt-starimg.didistatic.com/static/starimg/img/lbgKE9Icl91639038730163.png",LOADING:""},G=K("toast",{state:()=>({show:!1,type:"",icon:"",content:"",timer:0}),actions:{showToast({content:t,type:e,timeout:s=Qt}){!t||(this.show&&clearTimeout(this.timer),this.content=t,this.type=e,this.icon=Xt[e],this.show=!0,this.timer=setTimeout(this.clear,s))},clear(){this.show=!1,this.content=""}}});const Zt=t=>(et("data-v-e218da6c"),t=t(),st(),t),te={viewBox:"0 0 50 50",class:"loading-svg"},ee=Zt(()=>l("circle",{cx:"25",cy:"25",r:"20",fill:"none",class:"path"},null,-1)),se=[ee],oe=D({setup(t){return(e,s)=>(u(),p("svg",te,se))}});var ne=E(oe,[["__scopeId","data-v-e218da6c"]]);const ae={key:0,class:"toast-wrapper"},ie={class:"toast"},re={class:"content"},le=D({setup(t){const e=G(),{type:s,show:o,content:r,icon:a}=L(e);return(i,_)=>n(o)?(u(),p("div",ae,[l("div",ie,[n(s)==="loading"?(u(),k(ne,{key:0})):(u(),p("div",{key:1,class:"icon",style:ot({"background-image":`url(${n(a)})`})},null,4)),l("div",re,m(n(r)),1)])])):B("",!0)}});var ue=E(le,[["__scopeId","data-v-16d3c47b"]]);const ce=D({setup(t){return(e,s)=>{const o=_t("router-view");return u(),p(A,null,[(u(),k(Dt,{exclude:"profile"},[d(o)],1024)),d(Et,{name:"toast-slide"},{default:c(()=>[d(ue,{class:"toast"})]),_:1}),d(Yt)],64)}}});const de={class:"card"},_e={key:0,class:"title"},pe=D({setup(t){const s=It().title;return(o,r)=>(u(),p("div",de,[n(s)?(u(),p("div",_e,[j(o.$slots,"title",{},void 0,!0)])):B("",!0),j(o.$slots,"default",{},void 0,!0)]))}});var S=E(pe,[["__scopeId","data-v-46bdb5a3"]]);const ge=location.href.includes("forvera.me")?"online":"local",q=ge==="online"?"http://106.54.172.20:3000/":`http://${location.hostname}:3000/`;async function x(t,e="get",s,o){let r={url:t,baseURL:q,withCredentials:!0,headers:{},method:e};const a=Y(),i=a.userInfo.token;if(i&&(r.headers.Authorization=i),s)if(typeof s=="string")r.data=s,r.headers["Content-Type"]="application/json";else if(s instanceof FormData)r.data=s;else{let _=new FormData;for(let h in s)_.append(h,s[h]);r.data=_}try{return(await xt(r)).data}catch(_){const h=_.response.status;return _.response.status===401&&(a.isLogin&&G().showToast({content:"\u767B\u5F55\u51ED\u8BC1\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u4FDD\u5B58\u540E\u70B9\u51FB\u4E2A\u4EBA\u91CD\u65B0\u767B\u5F55\u3002",type:"!",timeout:3e3}),a.logout()),{ERRNO:h}}}const Y=K("user",{state:()=>({loginData:{username:"",password:""},userInfo:{username:void 0,token:void 0}}),getters:{isLogin:t=>!!t.userInfo.token},actions:{async login(){let t,e;if(localStorage.token&&localStorage.username&&(t=localStorage.token,e=localStorage.username),!(t&&e)){const s=this.loginData;if(!(s.username&&s.password))return;t=(await x("auth/login","POST",JSON.stringify(s))).token,e=this.loginData.username}t&&e&&(localStorage.token=t,localStorage.username=e,t=`Bearer ${t}`,Object.assign(this.userInfo,{token:t,username:e}))},async logout(){delete localStorage.token,delete localStorage.username,Object.assign(this.userInfo,{token:void 0,username:void 0})},validateLoginForm(){var t;return!(((t=this.loginData.username)==null?void 0:t.length)<3||this.loginData.password.length<3)},async register(){if(!this.validateLoginForm())return!1;let t=this.loginData;const{token:e,ERRNO:s}=await x("auth/register","POST",JSON.stringify(t));s||Object.assign(this.userInfo,{token:e,username:this.loginData.username})}}});const he=t=>(et("data-v-3f52cb66"),t=t(),st(),t),fe={key:0},ve=he(()=>l("svg",{viewBox:"0 0 50 50",class:"loading-svg"},[l("circle",{cx:"25",cy:"25",r:"20",fill:"none",class:"path"})],-1)),me=[ve],ye={key:1},$e=D({props:{type:null,loading:null},setup(t){return(e,s)=>(u(),p("div",{class:nt(["button",{primary:t.type=="primary"}])},[t.loading?(u(),p("div",fe,me)):(u(),p("div",ye,[j(e.$slots,"default",{},void 0,!0)]))],2))}});var b=E($e,[["__scopeId","data-v-3f52cb66"]]);const at=K("category",{state:()=>({categories:[],editing:{}}),actions:{init(){this.categories.length||this.fetchCategories()},async fetchCategories(){this.categories=await x("cat")},checkParam(){return this.editing.title&&this.editing.description},clear(){this.editing={}},async add(){!this.checkParam()||await x("cat","POST",JSON.stringify(this.editing))},async update(){!this.checkParam()||!this.editing._id||await x(`cat/${this.editing._id}`,"PUT",JSON.stringify(this.editing))},async delete(){!this.editing._id||(await x(`cat/${this.editing._id}`,"DELETE"),this.clear())}}}),z=K("main",{state:()=>({posts:[],route:Tt(),router:bt()}),actions:{async init(){at().fetchCategories()},async go(t){this.router.push(t)}}}),H=K("post",{state:()=>({posts:[],myPosts:[]}),actions:{async fetchPostById(t){return await x(`post/${t}`,"GET")},async createPost(){return await x("post","POST")},async fetchPosts(){this.posts=await x("post")},async fetchMyPosts(){this.myPosts=await x("post/user","POST")},async updatePost(t,e){return await x(`post/${t}`,"PUT",JSON.stringify(e))},async uploadSingleImage(t,e){return await x(`file/uploadSingle/${t}`,"POST",{file:e})},async fetchImagesOfPost(t){return await x(`file/post/${t}`,"POST")},async deletePost(t){return await x(`post/${t}`,"DELETE")}}}),Q=t=>{const e=new Date(t);return`${e.getFullYear()}-${X(e.getMonth()+1)}-${X(e.getDate())} ${X(e.getHours())}:${X(e.getMinutes())}`},X=t=>t<10?`0${t}`:`${t}`,gt=t=>new Promise(e=>{const s=new FileReader;s.onload=o=>e({blob:o.target.result,file:t}),s.readAsDataURL(t)}),we=t=>{let e=null;return(...s)=>{e||(t(...s),e=setTimeout(()=>{e=null},1e3))}};function ht(t,e=!1){const s=o=>`${q}${e?o.thumb:o.url}`;return Array.isArray(t)?t.map(s):s(t)}const ft=K("write",{state:()=>({postId:"",post:{},files:[]}),getters:{images:t=>ht(t.files)},actions:{async init(t){const e=H();t?this.post=await e.fetchPostById(t):this.post=await e.createPost(),this.postId=t||this.post._id},changeStatus(){this.post.status===1?this.post.status=0:this.post.status===0&&(this.post.status=1)},async publish(){if(this.post.title.length<1&&this.post.content.length<1)return;let t=dt(ct({},this.post),{time:Date.now()});return await H().updatePost(this.postId,t)},async deletePost(){return await H().deletePost(this.postId)},toggleCategory(t){Array.isArray(this.post.category)?this.post.category.includes(t)?this.post.category.splice(this.post.category.indexOf(t),1):this.post.category.push(t):this.post.category=[t]},async uploadImage(t){await H().uploadSingleImage(this.postId,t),this.initUploadedImages()},async initUploadedImages(){const t=H();this.files=await t.fetchImagesOfPost(this.postId)}}});const Ce={class:"flex-center"},Fe=g("\u767B\u5F55"),ke=g("\u6CE8\u518C"),Se=g("\u767B\u51FA"),De={class:"actions"},Ee=g("\u5199\u6587\u7AE0"),Ie=g("\u7F16\u8F91\u5206\u7C7B"),xe={class:"my-posts"},Te={class:"post-info"},be={class:"title"},Pe={class:"desc"},Be={key:0,class:"status"},Ae={class:"post-actions"},Oe=g("\u4FEE\u6539"),Le=D({setup(t){const[e,s,o,r,a]=[Y(),z(),H(),ft(),G()],{loginData:i,isLogin:_,userInfo:h}=L(e),{myPosts:P}=L(o);e.login(),e.isLogin&&o.fetchMyPosts();const R=async()=>{await e.login(),a.showToast({content:"\u767B\u5F55\u6210\u529F\uFF5E",type:"OK"}),o.fetchMyPosts()},U=async()=>{if(!await e.register()){console.log("fail");return}o.fetchMyPosts()},w=async()=>{e.logout(),a.showToast({content:"\u5DF2\u767B\u51FA\uFF5E",type:"OK"})},$=J({write:!1,login:!1,register:!1}),v=()=>{s.router.push("write")},I=async()=>{$.value.write=!0,await r.init(),$.value.write=!1,v()},f=async T=>{await r.init(T),v()},C=()=>{s.router.push("category")};return(T,O)=>n(_)?(u(),p(A,{key:1},[d(S,{class:"item user-info-bar"},{default:c(()=>[l("div",null,m(n(h).username),1),d(b,{onClick:w},{default:c(()=>[Se]),_:1})]),_:1}),d(S,{class:"item"},{default:c(()=>[l("div",De,[d(b,{onClick:I,loading:$.value.write},{default:c(()=>[Ee]),_:1},8,["loading"]),d(b,{onClick:C},{default:c(()=>[Ie]),_:1})])]),_:1}),l("div",xe,[(u(!0),p(A,null,W(n(P),y=>(u(),k(S,{class:nt(["item post",{hidden:y.status!==1}])},{default:c(()=>[l("div",Te,[l("span",be,m(y.title),1),l("span",Pe,m(n(Q)(y.updated_time)),1),y.status!==1?(u(),p("div",Be,"\u9690\u85CF")):B("",!0)]),l("div",Ae,[d(b,{onClick:F=>f(y._id)},{default:c(()=>[Oe]),_:2},1032,["onClick"])])]),_:2},1032,["class"]))),256))])],64)):(u(),k(S,{key:0,class:"login-wrapper"},{default:c(()=>[V(l("input",{class:"text-input","onUpdate:modelValue":O[0]||(O[0]=y=>n(i).username=y)},null,512),[[N,n(i).username]]),V(l("input",{class:"text-input","onUpdate:modelValue":O[1]||(O[1]=y=>n(i).password=y),type:"password"},null,512),[[N,n(i).password]]),l("div",Ce,[d(b,{type:"primary",onClick:R,loading:$.value.login},{default:c(()=>[Fe]),_:1},8,["loading"]),d(b,{onClick:U,loading:$.value.register},{default:c(()=>[ke]),_:1},8,["loading"])])]),_:1}))}});var Ue=E(Le,[["__scopeId","data-v-524170eb"]]);const vt=K("message",{state:()=>({messages:[],messageInput:{content:"",files:[],parent:"",ancestor:"",progress:0},messageWrapper:{replyToUsername:"",anonymous:!0},page:0,loading:!1}),actions:{reply(t){this.clearMessageInput(),t&&(this.messageInput.parent=t._id,this.messageInput.ancestor=t.level===0?t._id:t.ancestor,this.messageWrapper.replyToUsername=t.user.username)},clearMessageInput(){this.messageInput={content:"",files:[],parent:"",ancestor:"",progress:0},this.messageWrapper.replyToUsername=""},async fetchMessages(t=!1){if(t&&(this.page=0,this.messages=[]),this.loading)return;this.loading=!0;let e=await x(`twit/${this.page}`);return e.forEach(s=>{s.files.forEach(o=>{o.url=`${q}${o.url}`,o.thumb=`${q}${o.thumb}`})}),e.length>0&&(this.messages.push(...e),this.page++),this.loading=!1,e},async addMessage(){const{content:t,parent:e,ancestor:s,files:o}=this.messageInput,{anonymous:r}=this.messageWrapper,a=r?"twit/anonymous":"twit",i=new FormData;if(i.append("content",t),e&&s&&(i.append("parent",e),i.append("ancestor",s)),!r)for(let h of o)i.append("files",h);return await x(a,"POST",i,{upload:!0,progress:this.messageInput})}}});const Me={class:"gallery"},Re=["onClick"],Ve=D({props:{images:null,onClick:null},setup(t){return(e,s)=>(u(),p("div",Me,[(u(!0),p(A,null,W(t.images,(o,r)=>(u(),p("div",{class:"item",style:ot({backgroundImage:`url(${o})`}),onClick:a=>{var i;return(i=t.onClick)==null?void 0:i.call(t,r)}},null,12,Re))),256))]))}});var Ne=E(Ve,[["__scopeId","data-v-26ef09cc"]]);const Ke={class:"header"},We={class:"name"},He={class:"date"},je={class:"content"},Ge={key:1,class:"reply-wrapper"},Je=["onClick"],ze={class:"header"},qe={class:"name"},Ye={key:0,class:"name"},Qe={class:"date"},Xe={class:"content"},Ze=D({setup(t){const[e,s,o,r]=[vt(),Y(),z(),G()],{messages:a,messageInput:i,messageWrapper:_}=L(e);L(s),e.fetchMessages(!0);const h=we(async()=>{let w=await e.fetchMessages();w&&w.length<=0&&r.showToast({content:"\u6CA1\u6709\u66F4\u591A\u5566",type:"!"})}),P=()=>{document.documentElement.scrollTop+window.innerHeight>=document.body.clientHeight-10*16&&h()};window.addEventListener("scroll",P),Pt(()=>window.removeEventListener("scroll",P));const R=(w,$)=>{let v;if($.level===1){const I=w.descendants.find(f=>f._id===$.parent);I&&(v=I.user.username)}return v},U=w=>{e.reply(w),o.router.push("addMessage")};return(w,$)=>(u(),p(A,null,[(u(!0),p(A,null,W(n(a),v=>(u(),k(S,{class:"message",onClick:I=>U(v)},{default:c(()=>{var I;return[l("div",Ke,[l("div",We,m(v.user.username),1),l("div",He,m(n(Q)(v.created_time)),1)]),l("div",je,m(v.content),1),v.files.length?(u(),k(Ne,{key:0,class:"gallery",images:v.files.map(f=>f.thumb)},null,8,["images"])):B("",!0),((I=v.descendants)==null?void 0:I.length)>0?(u(),p("div",Ge,[(u(!0),p(A,null,W(v.descendants,f=>(u(),p("div",{class:"reply",onClick:pt(C=>U(f),["stop"])},[l("div",ze,[l("div",qe,m(f.user.username),1),R(v,f)?(u(),p("div",Ye,": "+m(R(v,f)),1)):B("",!0)]),l("div",Qe,m(n(Q)(f.created_time)),1),l("div",Xe,m(f.content),1)],8,Je))),256))])):B("",!0)]}),_:2},1032,["onClick"]))),256)),l("div",{class:"send",onClick:$[0]||($[0]=v=>U())})],64))}});var ts=E(Ze,[["__scopeId","data-v-3df728fe"]]);const es=D({props:{active:null},setup(t){return(e,s)=>(u(),p("div",{class:nt(["label",{active:t.active}])},[j(e.$slots,"default",{},void 0,!0)],2))}});var it=E(es,[["__scopeId","data-v-6454c012"]]);const ss=g("\u9009\u62E9"),os=["multiple"],ns=D({props:{change:null,multiple:null},setup(t){const{change:e,multiple:s=!1}=t,o=J({}),r=()=>{o.value.click()},a=i=>{e(i.target)};return(i,_)=>(u(),p(A,null,[d(b,{onClick:r},{default:c(()=>[ss]),_:1}),l("input",{ref:(h,P)=>{P.fileInput=h,o.value=h},class:"input",type:"file",onChange:a,multiple:t.multiple},null,40,os)],64))}});var mt=E(ns,[["__scopeId","data-v-396daa4d"]]);const as={class:"gallery-wrapper"},is={class:"gallery"},rs=["onClick","onDragstart","onDragenter"],ls=D({props:{images:null,onClick:null,isDraggable:null,onDrag:null,onRemove:null},setup(t){const{isDraggable:e=!1,onDrag:s,onRemove:o}=t;let r,a,i=J(!1);const _=w=>{r=w,i.value=!0,console.log(i)},h=w=>{a=w,a!==void 0&&r!==void 0&&(s==null||s(a,r),r=a)},P=()=>{a===-1&&r!==void 0&&(o==null||o(r)),r=a=void 0,i.value=!1},R=()=>{a=-1},U=()=>{a=void 0};return(w,$)=>(u(),p("div",as,[l("div",is,[(u(!0),p(A,null,W(t.images,(v,I)=>(u(),p("div",{class:"item",style:ot({backgroundImage:`url(${v})`}),onClick:f=>{var C;return(C=t.onClick)==null?void 0:C.call(t,I)},draggable:"true",onDragstart:f=>_(I),onDragenter:f=>h(I),onDragend:$[0]||($[0]=f=>P())},null,44,rs))),256))]),n(i)?(u(),p("div",{key:0,class:"remove",onDragenter:R,onDragleave:U,onDragover:$[1]||($[1]=pt(()=>{},["prevent"]))},null,32)):B("",!0)]))}});var yt=E(ls,[["__scopeId","data-v-70031f44"]]);const Z=t=>(et("data-v-03244d40"),t=t(),st(),t),us={class:"content"},cs={class:"tips"},ds=Z(()=>l("br",null,null,-1)),_s=g(" - \u9000\u51FA\u9875\u9762\u4F1A\u6E05\u7A7A\uFF0C\u4E0D\u8981\u5728\u8FD9\u91CC\u6253\u4E00\u5806\u5B57\u54E6\u3002"),ps=Z(()=>l("br",null,null,-1)),gs=Z(()=>l("br",null,null,-1)),hs={class:"actions"},fs={class:"right"},vs=Z(()=>l("div",{class:"icon"},null,-1)),ms=D({props:{msg:null},setup(t){const[e,s,o,r]=[vt(),Y(),G(),z()],{messageInput:a,messageWrapper:i}=L(e),{isLogin:_}=L(s),h=Bt([]),P=At(()=>h.map(f=>f.blob)),R=async f=>{const C=f.files;if(C==null?void 0:C.length){const T=Array.from(C),O=await Promise.all(T.map(gt));h.push(...O),e.messageInput.files=h.map(y=>y.file)}},U=(f,C)=>{const T=h.splice(C,1)[0];h.splice(f,0,T),e.messageInput.files=h.map(O=>O.file)},w=f=>{h.splice(f,1),e.messageInput.files=h.map(C=>C.file)},$=i.value.replyToUsername?`\u56DE\u590D${i.value.replyToUsername}`:"\u53D1\u9001",v=async()=>{if(!a.value.content.length){o.showToast({content:"\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",type:"ERR"});return}if(a.value.content.length<4){o.showToast({content:`\u5185\u5BB9\u5C11\u4E8E${a.value.content.length}\u4E2A\u5B57\u4E5F\u4E0D\u884C`,type:"ERR"});return}await e.addMessage(),o.showToast({content:"\u53D1\u9001\u6210\u529F\uFF5E",type:"OK"}),r.router.go(-1)},I=()=>{!_.value||e.$patch({messageWrapper:{anonymous:!i.value.anonymous}})};return(f,C)=>(u(),k(S,{class:"input-wrapper"},{default:c(()=>{var T;return[l("div",us,[l("div",cs,[g(" - "+m(n(s).isLogin?"":"\u5F53\u524D\u672A\u767B\u5F55\uFF0C\u767B\u5F55\u540E")+"\u53EF\u4EE5\u9644\u5E26\u6700\u591A3\u5F20\u56FE\u7247\u548C\u5207\u6362\u8EAB\u4EFD\u3002",1),ds,_s,ps,g(" - \u6B63\u5728\u4EE5"+m(n(i).anonymous?"\u968F\u673A":n(s).userInfo.username)+"\u8EAB\u4EFD"+m(n(i).replyToUsername?`\u56DE\u590D${n(i).replyToUsername}`:"\u53D1\u8A00")+"\u3002",1),gs]),V(l("input",{class:"input text-input","onUpdate:modelValue":C[0]||(C[0]=O=>n(a).content=O)},null,512),[[N,n(a).content]]),!n(i).anonymous&&((T=n(P))==null?void 0:T.length)?(u(),k(yt,{key:0,images:n(P),class:"gallery","is-draggable":!0,onDrag:U,onRemove:w},null,8,["images"])):B("",!0),l("div",hs,[d(b,{class:"action send",onClick:v},{default:c(()=>[g(m(n($)),1)]),_:1}),l("div",fs,[n(i).anonymous?B("",!0):(u(),k(mt,{key:0,change:R,multiple:!0})),d(it,{class:"action",onClick:I,active:n(i).anonymous},{default:c(()=>[g(m(n(i).anonymous?"\u533F\u540D\u4E2D":"\u542F\u7528\u533F\u540D"),1)]),_:1},8,["active"])])])]),vs]}),_:1}))}});var ys=E(ms,[["__scopeId","data-v-03244d40"]]);const $s={},ws={class:"layout-list"};function Cs(t,e){return u(),p(A,null,[j(t.$slots,"layout-title",{class:"title"}),l("div",ws,[j(t.$slots,"content")])],64)}var tt=E($s,[["render",Cs]]);const Fs=g("\u6807\u9898"),ks=g("\u63CF\u8FF0"),Ss=g("\u9009\u62E9\u6807\u7B7E"),Ds={class:"categories"},Es=g("\u56FE\u7247"),Is={class:"image-input"},xs=g("\u4E0A\u4F20"),Ts=["src"],bs=g("\u63D0\u4EA4"),Ps=g("\u5220\u9664"),Bs=D({setup(t){const[e,s,o,r]=[ft(),at(),G(),z()],{post:a,images:i,files:_}=L(e),{categories:h}=L(s);e.initUploadedImages(),s.init();const P=y=>{var F;return(F=a.value.category)==null?void 0:F.includes(y)},R=e.toggleCategory,U=async()=>{await e.publish()&&(o.showToast({content:"\u5DF2\u66F4\u65B0",type:"OK"}),r.go("profile"))},w=async()=>{!confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F")||(await e.deletePost(),o.showToast({content:"\u5DF2\u5220\u9664\uFF5E",type:"OK"}),r.go("profile"))},$=()=>{e.changeStatus()};let v=J({});const I=async y=>{const F=y.files;(F==null?void 0:F.length)&&(v.value=await gt(F[0]))},f=async()=>{e.uploadImage(v.value.file)},C=y=>{const F=ht(_.value[y]);T.value=`<img src="${F}" width="100%">`},T=J(""),O=y=>{y.target.select(),document.execCommand("Copy"),o.showToast({content:"\u5DF2\u590D\u5236\u56FE\u7247\u4EE3\u7801\uFF0C\u8BF7\u7C98\u8D34\u5230\u6587\u7AE0\u4E2D\u3002",type:"OK"})};return(y,F)=>(u(),k(tt,null,{content:c(()=>[d(S,null,{title:c(()=>[Fs]),default:c(()=>[V(l("input",{class:"text-input","onUpdate:modelValue":F[0]||(F[0]=M=>n(a).title=M)},null,512),[[N,n(a).title]])]),_:1}),d(S,null,{title:c(()=>[ks]),default:c(()=>[V(l("input",{class:"text-input","onUpdate:modelValue":F[1]||(F[1]=M=>n(a).description=M)},null,512),[[N,n(a).description]])]),_:1}),d(S,null,{default:c(()=>[V(l("textarea",{class:"text-input textarea","onUpdate:modelValue":F[2]||(F[2]=M=>n(a).content=M)},null,512),[[N,n(a).content]])]),_:1}),d(S,null,{title:c(()=>[Ss]),default:c(()=>[l("div",Ds,[(u(!0),p(A,null,W(n(h),M=>(u(),k(it,{active:P(M._id),onClick:oo=>n(R)(M._id)},{default:c(()=>[g(m(M.title),1)]),_:2},1032,["active","onClick"]))),256))])]),_:1}),d(S,null,{title:c(()=>[Es]),default:c(()=>[l("div",Is,[d(mt,{change:I,multiple:!1}),d(b,{class:"upload-btn",onClick:f},{default:c(()=>[xs]),_:1}),l("img",{class:"preview",src:n(v).blob},null,8,Ts)]),T.value?V((u(),p("textarea",{key:0,class:"copy-container text-input","onUpdate:modelValue":F[3]||(F[3]=M=>T.value=M),readonly:"",onClick:O,rows:"3"},null,512)),[[N,T.value]]):B("",!0),n(i).length>0?(u(),k(yt,{key:1,images:n(i),onClick:C,class:"gallery"},null,8,["images"])):B("",!0)]),_:1}),d(S,{class:"actions"},{default:c(()=>[d(b,{onClick:U},{default:c(()=>[bs]),_:1}),d(it,{onClick:$,active:n(a).status===1},{default:c(()=>[g(m(n(a).status===1?"\u5DF2\u516C\u5F00":"\u5DF2\u9690\u85CF"),1)]),_:1},8,["active"]),d(b,{onClick:w},{default:c(()=>[Ps]),_:1})]),_:1})]),_:1}))}});var As=E(Bs,[["__scopeId","data-v-38caf634"]]);const Os=t=>{let e=t.split(`
`);return e=Us(e),e.join("")},Ls=t=>`<p>${t}</p>`,Us=t=>t.map(e=>{let s=Ms(e)||Rs(e);return s?e=s:e=Ls(e),e}),Ms=t=>{let e=t.match(/^#+\s/);return(e==null?void 0:e.length)?`<div class="h${e[0].length-1}">${t.slice(e[0].length)}</div>`:!1},Rs=t=>{let e=t.match(/^\s*-\s/);return(e==null?void 0:e.length)?`<div class="ul${e[0].length-1}">${t.slice(e[0].length)}</div>`:!1},$t=K("detail",{state:()=>({post:{}}),actions:{async init(t){const e=H();this.post=await e.fetchPostById(t),this.post.content=Os(this.post.content)}}});const Vs=["innerHTML"],Ns=D({setup(t){const[e]=[$t()],{post:s}=L(e);return(o,r)=>(u(),k(tt,null,{content:c(()=>[d(S,null,{default:c(()=>[g(m(n(s).title),1)]),_:1}),n(s).description?(u(),k(S,{key:0,class:"description"},{default:c(()=>[g(m(n(s).description),1)]),_:1})):B("",!0),d(S,null,{default:c(()=>[l("div",{class:"content",innerHTML:n(s).content},null,8,Vs)]),_:1})]),_:1}))}});var Ks=E(Ns,[["__scopeId","data-v-0d29379b"]]);const Ws={class:"left"},Hs={class:"right"},js={class:"date"},Gs=D({setup(t){const[e,s]=[z(),H()],{posts:o}=L(s);s.fetchPosts();const r=a=>{$t().init(a),e.go("post")};return(a,i)=>(u(),k(tt,null,{content:c(()=>[(u(!0),p(A,null,W(n(o),_=>(u(),k(S,{class:"post",onClick:h=>r(_._id)},{default:c(()=>[l("div",Ws,m(_.title||"\u65E0\u6807\u9898"),1),l("div",Hs,[l("div",js,m(n(Q)(_.updated_time)),1)])]),_:2},1032,["onClick"]))),256))]),_:1}))}});var Js=E(Gs,[["__scopeId","data-v-8de41ece"]]);const zs={class:"actions"},qs=g("\u63D0\u4EA4"),Ys=g("\u53D6\u6D88"),Qs=g("\u5220\u9664"),Xs={class:"description"},Zs=g("\u7F16\u8F91"),to=D({setup(t){const[e]=[at()],{categories:s,editing:o}=L(e);e.init();const r=async({remove:a=!1})=>{a?await e.delete():o.value._id?await e.update():await e.add(),e.fetchCategories()};return(a,i)=>(u(),k(tt,null,{content:c(()=>[d(S,{class:"edit-wrapper"},{default:c(()=>[V(l("input",{class:"text-input","onUpdate:modelValue":i[0]||(i[0]=_=>n(o).title=_)},null,512),[[N,n(o).title]]),V(l("input",{class:"text-input","onUpdate:modelValue":i[1]||(i[1]=_=>n(o).description=_)},null,512),[[N,n(o).description]]),l("div",zs,[d(b,{type:"primary",onClick:i[2]||(i[2]=_=>r({}))},{default:c(()=>[qs]),_:1}),n(o).title||n(o).description?(u(),k(b,{key:0,onClick:i[3]||(i[3]=_=>n(e).clear())},{default:c(()=>[Ys]),_:1})):B("",!0),d(b,{class:"right",onClick:i[4]||(i[4]=_=>r({remove:!0}))},{default:c(()=>[Qs]),_:1})])]),_:1}),(u(!0),p(A,null,W(n(s),_=>(u(),k(S,{class:"category"},{default:c(()=>[l("span",null,m(_.title),1),l("span",Xs,m(_.description),1),d(b,{class:"right",onClick:h=>n(e).editing=_},{default:c(()=>[Zs]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:1}))}});var eo=E(to,[["__scopeId","data-v-9e83d354"]]);const so={history:Ot(),routes:[{path:"/",component:Js},{path:"/message",component:ts},{path:"/profile",component:Ue},{path:"/addMessage",component:ys},{path:"/write",component:As},{path:"/post",component:Ks},{path:"/category",component:eo}]},rt=Lt(ce);rt.use(Ut(so));rt.use(Mt());rt.mount("#app");
