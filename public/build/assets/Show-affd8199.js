import{T as x,d as m,o as b,c as h,w as t,a as e,b as s,g as l,t as u,l as v,q as w,u as o,n as S,i as V}from"./app-0226d3fd.js";import{_ as $}from"./AppLayout-71ecb9b6.js";import{_ as C,a as k}from"./TextInput-a5f49ca0.js";import{_ as A}from"./InputLabel-38415e45.js";import{_ as f}from"./PrimaryButton-99f37ac9.js";import{_ as T}from"./ActionMessage-b9f8b23e.js";import{_ as z}from"./FormSection-697791a7.js";import{S as B}from"./SectionBorder-f186c264.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SectionTitle-a95b7281.js";const D=e("div",{class:"flex"},[e("div",{class:"flex-none"},[e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Atualização da Categoria ")])],-1),N={class:"max-w-7xl mx-auto py-4 sm:px-6 lg:px-8"},q=e("div",{class:"mt-5"},[e("p",null,[e("span",{class:"text-red-500"},[e("b",null,"Atenção"),l(":")]),l(" Ao deletar uma categoria, todos os produtos relacionados a ela serão deletados. ")])],-1),F={class:"col-span-6 sm:col-span-4"},I=e("p",{style:{color:"#009606"}},"Atualizado com sucesso.",-1),P={__name:"Show",props:{category:{type:Object,required:!0}},setup(i){const c=i,a=x({id:c.category.id,name:c.category.name}),p=m(null),_=()=>{a.transform(r=>({...r})).put(route("categories:update"),{onFinish:()=>{a.reset("name"),a.name=null,setTimeout(()=>y.value=!1,1500)}})},g=()=>{a.transform(r=>({...r})).delete(route("categories:delete"),{onFinish:()=>{}})},y=m(!1);return(r,n)=>(b(),h($,{title:"Categorias"},{header:t(()=>[D]),default:t(()=>[e("div",null,[e("div",N,[s(z,{onSubmit:V(_,["prevent"])},{title:t(()=>[l(" Categoria selecionada: "+u(i.category.name),1)]),description:t(()=>[l(" Total de produtos: "+u(i.category.products)+" ",1),q]),form:t(()=>[v(e("input",{id:"id",ref_key:"categoryId",ref:p,type:"hidden","onUpdate:modelValue":n[0]||(n[0]=d=>i.category.id=d)},null,512),[[w,i.category.id]]),e("div",F,[s(A,{for:"name",value:"Novo nome"}),s(C,{id:"name",modelValue:o(a).name,"onUpdate:modelValue":n[1]||(n[1]=d=>o(a).name=d),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),s(k,{message:o(a).errors.name,class:"mt-2"},null,8,["message"])])]),actions:t(()=>[s(T,{on:o(a).recentlySuccessful,class:"me-3"},{default:t(()=>[I]),_:1},8,["on"]),s(f,{type:"button",onClick:g,class:"bg-red-600",style:{"margin-right":"10px"},disabled:o(a).processing},{default:t(()=>[l(" Deletar ")]),_:1},8,["disabled"]),s(f,{class:S({"opacity-25":o(a).processing}),disabled:o(a).processing},{default:t(()=>[l(" Atualizar ")]),_:1},8,["class","disabled"])]),_:1},8,["onSubmit"])]),s(B)])]),_:1}))}};export{P as default};