import{d as g,r as f,k as B,l as y,o as d,m as w,w as s,eh as N,i as r,c as v,f as o,e,a as E,v as k,t as b,X as V,p as I,g as S,_ as q}from"./index.d69e1802.js";import{L as H}from"./infoLayout.a4efc0e2.js";const a=i=>(I("data-v-32bcff4d"),i=i(),S(),i),L=a(()=>e("div",{class:"head-text"},[e("div",{class:"text"},"\u6839\u636E\u56FD\u5BB6\u653F\u7B56\u8981\u6C42\uFF0C\u8BF7\u60A8\u8FDB\u884C\u5B9E\u540D\u8BA4\u8BC1"),e("div",{class:"text"},"\u5B9E\u540D\u4FE1\u606F\u63D0\u4EA4\u540E\u4E0D\u53EF\u4FEE\u6539\uFF0C\u8BF7\u8C28\u614E\u586B\u5199")],-1)),R={key:0,class:"auth-body flex-column flex-vertical-center"},U=a(()=>e("div",{class:"description"},"\u4F8B\u5982\uFF1A\u534E\u5B89",-1)),$=a(()=>e("div",{class:"description"},"\u4F8B\u5982\uFF1A320981202207079527",-1)),M={style:{"margin-top":"35px"}},T={key:1,class:"auth-body flex-column flex-vertical-center"},X={class:"flex-row flex-vertical-center"},j=a(()=>e("p",{class:"label"},"\u5B8C\u6210\u8EAB\u4EFD\u8BA4\u8BC1",-1)),z={class:"getter-row flex-row flex-vertical-center flex-between",style:{"margin-top":"54px"}},G=a(()=>e("span",{class:"label"},"\u771F\u5B9E\u59D3\u540D: ",-1)),J={class:"value"},K={class:"getter-row flex-row flex-vertical-center flex-between",style:{"margin-top":"15px"}},O=a(()=>e("span",{class:"label"},"\u8EAB\u4EFD\u8BC1\u53F7: ",-1)),P={class:"value"},Q=a(()=>e("div",{class:"line"},null,-1)),W=g({name:"Attestation"}),Y=g({...W,setup(i){const _=f(),m=f(!1),t=B({name:"",idNumber:""}),h=B({name:[{required:!1,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:["blur","change"]},{required:!1,pattern:/^[\u4e00-\u9fa5]{2,5}$/,message:"\u60A8\u8F93\u5165\u7684\u59D3\u540D\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165",trigger:["blur","change"]}],idNumber:[{required:!1,message:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",trigger:"blur"},{required:!1,validator:(n,u,l)=>{u?N(u)?l():l(new Error("\u60A8\u8F93\u5165\u7684\u8EAB\u4EFD\u8BC1\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165")):l(new Error("\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7"))},trigger:"blur"}]}),p=y(()=>t.name&&t.idNumber),D=async n=>{!n||await n&&n.validate(u=>{u&&(V({message:"\u60A8\u5DF2\u63D0\u4EA4\u5B9E\u540D\u8BA4\u8BC1",type:"success"}),m.value=!0)})};return(async()=>{})(),(n,u)=>{const l=r("el-input"),F=r("el-form-item"),x=r("el-button"),C=r("el-form"),A=r("svg-icon");return d(),w(H,{title:"\u5B9E\u540D\u8BA4\u8BC1"},{head:s(()=>[L]),body:s(()=>[m.value?(d(),v("div",T,[e("div",X,[o(A,{"icon-class":"ok"}),j]),e("div",z,[G,e("span",J,b(t.name),1)]),e("div",K,[O,e("span",P,b(t.idNumber),1)])])):(d(),v("div",R,[o(C,{ref_key:"ruleFormRef",ref:_,model:t,rules:h,"label-width":"0px",class:"rule-form"},{default:s(()=>[o(F,{prop:"name"},{default:s(()=>[o(l,{class:"h50",modelValue:t.name,"onUpdate:modelValue":u[0]||(u[0]=c=>t.name=c),placeholder:"\u5355\u884C\u8F93\u5165"},null,8,["modelValue"]),U]),_:1}),o(F,{prop:"idNumber"},{default:s(()=>[o(l,{class:"h50",modelValue:t.idNumber,"onUpdate:modelValue":u[1]||(u[1]=c=>t.idNumber=c),placeholder:"\u8EAB\u4EFD\u8BC1\u53F7"},null,8,["modelValue"]),$]),_:1}),e("div",M,[o(x,{class:"submit-btn h50",type:E(p)?"primary":"info",onClick:u[2]||(u[2]=c=>D(_.value)),disabled:!E(p)},{default:s(()=>[k("\u63D0\u4EA4\u8BA4\u8BC1")]),_:1},8,["type","disabled"])])]),_:1},8,["model","rules"])]))]),foot:s(()=>[Q]),_:1})}}});const se=q(Y,[["__scopeId","data-v-32bcff4d"]]);export{se as default};
