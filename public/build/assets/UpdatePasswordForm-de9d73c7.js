import{d as i,T as _,o as f,c as g,w as e,g as l,a as n,b as a,u as o,n as v}from"./app-0226d3fd.js";import{_ as V}from"./ActionMessage-b9f8b23e.js";import{_ as P}from"./FormSection-697791a7.js";import{_ as d,a as p}from"./TextInput-a5f49ca0.js";import{_ as u}from"./InputLabel-38415e45.js";import{_ as b}from"./PrimaryButton-99f37ac9.js";import"./SectionTitle-a95b7281.js";import"./_plugin-vue_export-helper-c27b6911.js";const k={class:"col-span-6 sm:col-span-4"},y={class:"col-span-6 sm:col-span-4"},S={class:"col-span-6 sm:col-span-4"},T={__name:"UpdatePasswordForm",setup($){const c=i(null),m=i(null),s=_({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),c.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return(x,r)=>(f(),g(P,{onSubmitted:w},{title:e(()=>[l(" Atualizar Senha ")]),description:e(()=>[l(" Certifique-se de que sua conta esteja usando uma senha longa e aleatória para permanecer segura. ")]),form:e(()=>[n("div",k,[a(u,{for:"current_password",value:"Password Atual"}),a(d,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:o(s).current_password,"onUpdate:modelValue":r[0]||(r[0]=t=>o(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),a(p,{message:o(s).errors.current_password,class:"mt-2"},null,8,["message"])]),n("div",y,[a(u,{for:"password",value:"Novo Password"}),a(d,{id:"password",ref_key:"passwordInput",ref:c,modelValue:o(s).password,"onUpdate:modelValue":r[1]||(r[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),a(p,{message:o(s).errors.password,class:"mt-2"},null,8,["message"])]),n("div",S,[a(u,{for:"password_confirmation",value:"Confirme o Password"}),a(d,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":r[2]||(r[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),a(p,{message:o(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[a(V,{on:o(s).recentlySuccessful,class:"me-3"},{default:e(()=>[l(" Salvo com sucesso. ")]),_:1},8,["on"]),a(b,{class:v({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:e(()=>[l(" Salvar ")]),_:1},8,["class","disabled"])]),_:1}))}};export{T as default};