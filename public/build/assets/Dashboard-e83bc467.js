import{_ as a}from"./AppLayout-d06060ff.js";import{Q as d,o as l,c as i,w as c,a as t,t as o,u as e}from"./app-d94cb34d.js";import"./ResponsiveNavLink-ea322290.js";import"./_plugin-vue_export-helper-c27b6911.js";const r={class:"py-12"},x={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},_={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg p-6"},n={class:"bg-white py-24 sm:py-32"},g={class:"mx-auto max-w-7xl px-6 lg:px-8"},m={class:"grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3"},p={class:"mx-auto flex max-w-xs flex-col gap-y-4"},h=t("dt",{class:"text-base leading-7 text-gray-600"},"Total de Categorias",-1),f={class:"order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"},u={class:"mx-auto flex max-w-xs flex-col gap-y-4"},y=t("dt",{class:"text-base leading-7 text-gray-600"},"Total de Produtos",-1),w={class:"order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"},b={class:"mx-auto flex max-w-xs flex-col gap-y-4"},v=t("dt",{class:"text-base leading-7 text-gray-600"},"Valor em Produtos",-1),k={class:"order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"},Q={__name:"Dashboard",setup(B){const s=d().props.auth.user;return(D,C)=>(l(),i(a,{title:"Dashboard"},{default:c(()=>[t("div",r,[t("div",x,[t("div",_,[t("div",n,[t("div",g,[t("dl",m,[t("div",p,[h,t("dd",f,o(e(s).categories_total),1)]),t("div",u,[y,t("dd",w,o(e(s).products_total),1)]),t("div",b,[v,t("dd",k,o(e(s).products_total_price),1)])])])])])])])]),_:1}))}};export{Q as default};