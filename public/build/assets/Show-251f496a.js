import{T as x,d as V,Q as h,o as u,c as w,w as r,a as t,b as o,g as c,u as s,l as k,s as $,e as _,h as S,F as U,n as z,i as D,t as q}from"./app-0226d3fd.js";import{_ as B}from"./AppLayout-71ecb9b6.js";import{_ as p,a as n}from"./TextInput-a5f49ca0.js";import{_ as d}from"./InputLabel-38415e45.js";import{_ as f}from"./PrimaryButton-99f37ac9.js";import{_ as C}from"./ActionMessage-b9f8b23e.js";import{_ as F}from"./FormSection-697791a7.js";import{_ as N}from"./TextArea-2df740e7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SectionTitle-a95b7281.js";const P=t("div",{class:"flex"},[t("div",{class:"flex-none"},[t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Atualização do Produto ")])],-1),A={class:"max-w-7xl mx-auto py-4 sm:px-6 lg:px-8"},M={class:"col-span-6 sm:col-span-4"},L={class:"col-span-6 sm:col-span-4"},T={class:"col-span-6 sm:col-span-4"},j={class:"col-span-6 sm:col-span-4"},E=["value"],I={class:"col-span-6 sm:col-span-4"},O=t("p",{style:{color:"#009606"}},"Atualizado com sucesso.",-1),ee={__name:"Show",props:{product:{type:Object,required:!0}},setup(g){const i=g,e=x({id:i.product.id,name:i.product.name,description:i.product.description,price:i.product.price,category_id:i.product.category_id,image_url:i.product.image_url});V(null);const b=()=>{e.transform(m=>({...m})).put(route("products:update"),{onFinish:()=>{}})},v=()=>{e.transform(m=>({...m})).delete(route("products:delete"),{onFinish:()=>{}})},y=h().props.auth.user.categories;return(m,l)=>(u(),w(B,{title:"Produtos"},{header:r(()=>[P]),default:r(()=>[t("div",null,[t("div",A,[o(F,{onSubmit:D(b,["prevent"])},{title:r(()=>[c(" Produto ")]),description:r(()=>[c(" Mantenha o produto atualizado com todas informações solicitadas. ")]),form:r(()=>[t("div",M,[o(d,{for:"name",value:"Nome"}),o(p,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":l[0]||(l[0]=a=>s(e).name=a),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),o(n,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),t("div",L,[o(d,{for:"name",value:"Descricao (min: 15 caracteres)"}),o(N,{id:"description",modelValue:s(e).description,"onUpdate:modelValue":l[1]||(l[1]=a=>s(e).description=a),class:"mt-1 block w-full",required:""},null,8,["modelValue"]),o(n,{message:s(e).errors.description,class:"mt-2"},null,8,["message"])]),t("div",T,[o(d,{for:"name",value:"Preço"}),o(p,{id:"price",type:"number",modelValue:s(e).price,"onUpdate:modelValue":l[2]||(l[2]=a=>s(e).price=a),class:"mt-1 block w-1/2",required:""},null,8,["modelValue"]),o(n,{message:s(e).errors.price,class:"mt-2"},null,8,["message"])]),t("div",j,[o(d,{for:"name",value:"Categoria"}),k(t("select",{"onUpdate:modelValue":l[3]||(l[3]=a=>s(e).category_id=a),name:"select",id:"category",class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"},[(u(!0),_(U,null,S(s(y),a=>(u(),_("option",{key:a.id,value:a.id},q(a.name),9,E))),128))],512),[[$,s(e).category_id]]),o(n,{message:s(e).errors.category_id,class:"mt-2"},null,8,["message"])]),t("div",I,[o(d,{for:"name",value:"URL da Imagem (opcional)"}),o(p,{id:"image_url",modelValue:s(e).image_url,"onUpdate:modelValue":l[4]||(l[4]=a=>s(e).image_url=a),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(n,{message:s(e).errors.image_url,class:"mt-2"},null,8,["message"])])]),actions:r(()=>[o(C,{on:s(e).recentlySuccessful,class:"me-3"},{default:r(()=>[O]),_:1},8,["on"]),o(f,{type:"button",onClick:v,class:"bg-red-600",style:{"margin-right":"10px"},disabled:s(e).processing},{default:r(()=>[c(" Deletar ")]),_:1},8,["disabled"]),o(f,{class:z({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[c(" Atualizar ")]),_:1},8,["class","disabled"])]),_:1},8,["onSubmit"])])])]),_:1}))}};export{ee as default};