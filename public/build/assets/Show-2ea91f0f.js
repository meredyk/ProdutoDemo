import{_ as p}from"./AppLayout-d06060ff.js";import n from"./DeleteUserForm-4c1441aa.js";import{o,c,w as i,a as m,e as r,b as t,f as s,F as l}from"./app-d94cb34d.js";import{S as a}from"./SectionBorder-8181631b.js";import _ from"./UpdatePasswordForm-ecb2f8b1.js";import d from"./UpdateProfileInformationForm-5e472113.js";import"./ResponsiveNavLink-ea322290.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SecondaryButton-e23eb47e.js";import"./SectionTitle-5abd66e5.js";import"./DangerButton-30d889ac.js";import"./TextInput-0d7d6fea.js";import"./ActionMessage-ba61e2bf.js";import"./FormSection-c98d290b.js";import"./InputLabel-5b180604.js";import"./PrimaryButton-cfb7273b.js";const f=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),u={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},h={key:0},g={key:1},E={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup($){return(e,x)=>(o(),c(p,{title:"Profile"},{header:i(()=>[f]),default:i(()=>[m("div",null,[m("div",u,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",h,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(a)])):s("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",g,[t(_,{class:"mt-10 sm:mt-0"}),t(a)])):s("",!0),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(l,{key:2},[t(a),t(n,{class:"mt-10 sm:mt-0"})],64)):s("",!0)])])]),_:1}))}};export{E as default};