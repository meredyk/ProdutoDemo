import{T as v,d as g,o as l,c as _,w as a,a as e,b as t,g as d,i as p,l as w,p as b,u as o,n as y,e as m,F as S,h as k,j as C,t as f}from"./app-0226d3fd.js";import{_ as $}from"./AppLayout-71ecb9b6.js";import{_ as V,a as N}from"./TextInput-a5f49ca0.js";import{_ as B}from"./InputLabel-38415e45.js";import{_ as x}from"./PrimaryButton-99f37ac9.js";import{_ as T}from"./ActionMessage-b9f8b23e.js";import{_ as F}from"./FormSection-697791a7.js";import{S as q}from"./SectionBorder-f186c264.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SectionTitle-a95b7281.js";const z={class:"flex"},D=e("div",{class:"flex-none"},[e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Minhas Categorias ")],-1),M={class:"flex-auto text-end"},j={class:"max-w-7xl mx-auto py-4 sm:px-6 lg:px-8"},A={class:"col-span-6 sm:col-span-4"},E=e("p",{style:{color:"#009606"}},"Salvado com sucesso.",-1),I={key:0,class:"py-3"},L={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},O={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg p-6"},U={class:"flex-none w-auto",style:{width:"30%"}},G={class:"flex-auto w-64 text-end"},H={key:1,class:"py-3"},J=e("div",{class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},[e("div",{class:"bg-white overflow-hidden shadow-xl sm:rounded-lg p-6 text-center"},[e("p",{class:"m-10 text-2xl"},"Você não possui nenhuma categoria cadastrada!")])],-1),K=[J],te={__name:"Index",props:{categories:{type:Array,required:!0}},setup(u){const s=v({name:""}),h=()=>{s.transform(c=>({...c})).post(route("categories:store"),{onFinish:()=>{s.recentlySuccessful&&(s.name=null,setTimeout(()=>n.value=!1,1500))}})},n=g(!1);return(c,r)=>(l(),_($,{title:"Categorias"},{header:a(()=>[e("div",z,[D,e("div",M,[t(x,{type:"button",onClick:r[0]||(r[0]=p(i=>{n.value=!n.value,o(s).name=null},["prevent"]))},{default:a(()=>[d(" Nova Categoria ")]),_:1})])])]),default:a(()=>[w(e("div",null,[e("div",j,[t(F,{onSubmit:p(h,["prevent"])},{title:a(()=>[d(" Nova Categoria ")]),description:a(()=>[d(" Cadastre uma nova categoria e mantenha organizado os seus produtos. ")]),form:a(()=>[e("div",A,[t(B,{for:"name",value:"Nome"}),t(V,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":r[1]||(r[1]=i=>o(s).name=i),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),t(N,{message:o(s).errors.name,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[t(T,{on:o(s).recentlySuccessful,class:"me-3"},{default:a(()=>[E]),_:1},8,["on"]),t(x,{class:y({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:a(()=>[d(" Salvar ")]),_:1},8,["class","disabled"])]),_:1},8,["onSubmit"])]),t(q)],512),[[b,n.value]]),u.categories.length>0?(l(),m("div",I,[e("div",L,[e("div",O,[(l(!0),m(S,null,k(u.categories,i=>(l(),_(o(C),{key:i.id,href:c.route("categories:show",i.id),class:"flex border-b pb-5 pt-5"},{default:a(()=>[e("div",U,f(i.name),1),e("div",G," Total de produtos: "+f(i.products),1)]),_:2},1032,["href"]))),128))])])])):(l(),m("div",H,K))]),_:1}))}};export{te as default};
