import{d as A,u as B,r as x,j as I,k as N,l as f,o,c as y,e,f as i,m as a,t as d,w as _,q as C,L as R,a as k,v as l,e1 as E,X as L,i as v,K as M,p as O,g as U,_ as Y}from"./index.d27a4e9e.js";import{e as j}from"./index.8ea71b75.js";import{Y as q}from"./index.0342102d.js";const K=h=>(O("data-v-1ffc31b3"),h=h(),U(),h),W={class:"account-container flex-row flex-level-center"},X={class:"center-box"},z={class:"flex-row"},F={class:"card purple"},G={class:"flex-row flex-vertical-center"},J={class:"circle"},Q={class:"tips-info flex-column flex-vertical-center"},Z={class:"f1"},ee=l(" \u7ED1\u5B9A\u624B\u673A "),se={class:"f2"},te={class:"card orange"},oe={class:"flex-row flex-vertical-center"},ne={class:"circle"},ie={class:"tips-info flex-column flex-vertical-center"},ce={class:"f1"},ae=l(" \u5B9E\u540D\u8BA4\u8BC1 "),le={class:"f2"},de=l("\u53BB\u8BA4\u8BC1"),re={class:"card green"},_e={class:"flex-row flex-vertical-center"},fe={class:"circle"},ve={class:"tips-info flex-column flex-vertical-center"},he={class:"f1"},pe=l(" \u7ED1\u5B9A\u90AE\u7BB1 "),ue={class:"f2"},me={class:"card blue"},ye={class:"flex-row flex-vertical-center"},ge={class:"circle"},xe={class:"tips-info flex-column flex-vertical-center"},ke={class:"f1"},we=l(" \u4E2A\u4EBA\u4FE1\u606F "),be={class:"f2"},Ce=l("\u53BB\u5B8C\u5584"),Ae={class:"card-section"},Ke={class:"login-title flex-row flex-between flex-vertical-center"},Se=K(()=>e("span",{class:"title"},"\u767B\u5F55\u5386\u53F2",-1)),Te={style:{cursor:"pointer"}},De=K(()=>e("div",{class:"card-section",style:{height:"330px"}},null,-1)),He={class:"avatar-box flex-column flex-level-center flex-vertical-center"},Pe=l("Vite Element Admin Admin Admin Admin"),Ve={class:"user-name ellipsis"},$e={class:"phone"},Be={key:0},Ie={key:1},Ne=A({name:"UserCenter"}),Re=A({...Ne,setup(h){const w=B(),g=x(!1),c=I(),S={0:"\u672A\u77E5",1:"\u5BC6\u7801\u767B\u5F55",2:"\u9A8C\u8BC1\u7801\u767B\u5F55",3:"\u7B2C\u4E09\u65B9\u767B\u5F55"},s=N({avatar:f(()=>c.avatar),name:f(()=>c.name),phone:f(()=>c.phone),email:f(()=>c.email),identity:f(()=>c.identity),isPerfect:f(()=>c.avatar&&c.name&&c.phone&&c.email&&c.identity)}),T=x([{key:"method",title:"\u767B\u5F55\u65B9\u5F0F",dataKey:"method",align:"center",width:106,cellRenderer:r=>{const{rowData:t}=r;return i("div",null,[S[t.method]])}},{key:"deviceType",title:"\u8BBE\u5907\u540D\u79F0",dataKey:"deviceType",align:"center",width:231},{key:"deviceOs",title:"\u7CFB\u7EDF",dataKey:"deviceOs",align:"center",width:110},{key:"loginAddr",title:"\u767B\u5F55\u5730\u70B9",dataKey:"loginAddr",align:"center",width:231},{key:"loginTime",title:"\u6700\u540E\u767B\u5F55\u65F6\u95F4",dataKey:"loginTime",align:"center",width:231}]),b=x([]);(async()=>{g.value=!0;try{const{code:r,data:t}=await E();r==200&&(b.value=t)}catch{}finally{g.value=!1}})();const p=async r=>{if(r!=2){L({message:"\u6B64\u7EC4\u4EF6\u8FD8\u672A\u5F00\u53D1",type:"warning"});return}w.push("/user/attestation")};return(r,t)=>{const n=v("svg-icon"),u=v("el-button"),D=v("el-tooltip"),H=v("ArrowRight"),P=v("el-icon"),V=v("el-table-v2"),$=M("loading");return o(),y("div",W,[e("div",X,[e("div",z,[e("div",F,[e("div",G,[e("div",J,[i(n,{"icon-class":"phone_1",class:"icon"})]),e("div",Q,[e("div",Z,[ee,s.phone?(o(),a(n,{key:0,"icon-class":"ok",class:"status-ok"})):(o(),a(n,{key:1,"icon-class":"warning_1",class:"status-warning"}))]),e("div",se,d(s.phone?"\u5DF2\u7ED1\u5B9A\u624B\u673A":"\u672A\u7ED1\u5B9A\uFF0C\u8BF7\u5C3D\u5FEB\u7ED1\u5B9A"),1)])]),i(u,{class:"btn",type:"info",onClick:t[0]||(t[0]=m=>p(1))},{default:_(()=>[l(d(s.phone?"\u66F4\u6362\u624B\u673A":"\u53BB\u7ED1\u5B9A"),1)]),_:1})]),e("div",te,[e("div",oe,[e("div",ne,[i(n,{"icon-class":"safe",class:"icon"})]),e("div",ie,[e("div",ce,[ae,s.identity?(o(),a(n,{key:0,"icon-class":"ok",class:"status-ok"})):(o(),a(n,{key:1,"icon-class":"warning_1",class:"status-warning"}))]),e("div",le,d(s.identity?"\u5DF2\u5B9E\u540D\u8BA4\u8BC1":"\u8BF7\u5C3D\u5FEB\u5B8C\u6210\u5B9E\u540D\u8BA4\u8BC1"),1)])]),s.identity?C("",!0):(o(),a(u,{key:0,class:"btn",type:"info",onClick:t[1]||(t[1]=m=>p(2))},{default:_(()=>[de]),_:1}))]),e("div",re,[e("div",_e,[e("div",fe,[i(n,{"icon-class":"msg_1",class:"icon"})]),e("div",ve,[e("div",he,[pe,s.phone?(o(),a(n,{key:0,"icon-class":"ok",class:"status-ok"})):(o(),a(n,{key:1,"icon-class":"warning_1",class:"status-warning"}))]),e("div",ue,d(s.email?"\u5DF2\u7ED1\u5B9A\u90AE\u7BB1":"\u672A\u7ED1\u5B9A\uFF0C\u8BF7\u5C3D\u5FEB\u7ED1\u5B9A"),1)])]),i(u,{class:"btn",type:"info",onClick:t[2]||(t[2]=m=>p(3))},{default:_(()=>[l(d(s.email?"\u66F4\u6362\u90AE\u7BB1":"\u53BB\u7ED1\u5B9A"),1)]),_:1})]),e("div",me,[e("div",ye,[e("div",ge,[i(n,{"icon-class":"text",class:"icon"})]),e("div",xe,[e("div",ke,[we,s.isPerfect?(o(),a(n,{key:0,"icon-class":"ok",class:"status-ok"})):(o(),a(n,{key:1,"icon-class":"warning_1",class:"status-warning"}))]),e("div",be,d(s.isPerfect?"\u4E2A\u4EBA\u4FE1\u606F\u5DF2\u5B8C\u5584":"\u4E2A\u4EBA\u4FE1\u606F\u672A\u5B8C\u5584"),1)])]),s.isPerfect?C("",!0):(o(),a(u,{key:0,class:"btn",type:"info",onClick:t[3]||(t[3]=m=>p(4))},{default:_(()=>[Ce]),_:1}))])]),R((o(),y("div",Ae,[e("div",Ke,[i(D,{class:"box-item",effect:"dark",content:"\u6B64\u5904\u6A21\u62DF\u4E8610W\u6761\u6570\u636E",placement:"top-start"},{default:_(()=>[Se]),_:1}),e("p",Te,[e("span",{class:"right-tips",onClick:t[4]||(t[4]=m=>k(w).push("/user/history"))},"\u67E5\u770B\u66F4\u591A"),i(P,{color:"#1890ff"},{default:_(()=>[i(H)]),_:1})])]),i(V,{class:"login-history-table",columns:T.value,data:b.value,width:910,height:210,fixed:!1},null,8,["columns","data"])])),[[$,g.value]]),De]),e("div",He,[i(k(q),{width:"150px",height:"150px",image:s.avatar},{default:_(()=>[Pe]),_:1},8,["image"]),e("span",Ve," Hi,"+d(s.name||"\u5C0F\u7070\u7070"),1),e("span",$e,[s.phone?(o(),y("span",Be,d(k(j)(s.phone)),1)):(o(),y("span",Ie," \u4F60\u8FD8\u672A\u7ED1\u5B9A\u624B\u673A "))])])])}}});const Ue=Y(Re,[["__scopeId","data-v-1ffc31b3"]]);export{Ue as default};
