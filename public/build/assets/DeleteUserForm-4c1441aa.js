import{d as i,T as f,o as x,c as w,w as e,g as o,a as l,b as a,u as t,y as D,n as h}from"./app-d94cb34d.js";import{a as v,c as y,b as C}from"./SecondaryButton-e23eb47e.js";import{_ as m}from"./DangerButton-30d889ac.js";import{_ as g,a as k}from"./TextInput-0d7d6fea.js";import"./SectionTitle-5abd66e5.js";import"./_plugin-vue_export-helper-c27b6911.js";const b=l("div",{class:"max-w-xl text-sm text-gray-600"}," Depois que sua conta for excluída, todos os seus recursos e dados serão excluídos permanentemente. Antes de excluir sua conta, baixe todos os dados ou informações que deseja reter. ",-1),V={class:"mt-5"},$={class:"mt-4"},E={__name:"DeleteUserForm",setup(q){const r=i(!1),n=i(null),s=f({password:""}),p=()=>{r.value=!0,setTimeout(()=>n.value.focus(),250)},u=()=>{s.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>n.value.focus(),onFinish:()=>s.reset()})},c=()=>{r.value=!1,s.reset()};return(U,d)=>(x(),w(v,null,{title:e(()=>[o(" Deletar a Conta ")]),description:e(()=>[o(" Exclua permanentemente sua conta. ")]),content:e(()=>[b,l("div",V,[a(m,{onClick:p},{default:e(()=>[o(" Deletar a conta ")]),_:1})]),a(C,{show:r.value,onClose:c},{title:e(()=>[o(" Deletar a conta ")]),content:e(()=>[o(" Tem certeza de que deseja excluir sua conta? Depois que sua conta for excluída, todos os seus recursos e dados serão excluídos permanentemente. Digite sua senha para confirmar que deseja excluir permanentemente sua conta. "),l("div",$,[a(g,{ref_key:"passwordInput",ref:n,modelValue:t(s).password,"onUpdate:modelValue":d[0]||(d[0]=_=>t(s).password=_),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:D(u,["enter"])},null,8,["modelValue","onKeyup"]),a(k,{message:t(s).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[a(y,{onClick:c},{default:e(()=>[o(" Cancel ")]),_:1}),a(m,{class:h(["ms-3",{"opacity-25":t(s).processing}]),disabled:t(s).processing,onClick:u},{default:e(()=>[o(" Deletar Conta ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{E as default};