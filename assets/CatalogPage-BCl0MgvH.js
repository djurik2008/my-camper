import{j as e,c as d,L as v,s as p,u as j,a as _,b as $,M as B,R as S,d as T,e as P,f as q,g as y,h as O,i as A,k as F,C as H,l as M}from"./index-hGJmcAIz.js";import{C as V,B as w,u as E,a as k,S as W}from"./index.esm-BIEgiefv.js";import{L as D}from"./LinkButton-BNcc43EJ.js";const z="_loadMoreBtn_1jlvi_25",G={loadMoreBtn:z},U=({funk:t,className:c=null,isLoading:s})=>e.jsx("button",{type:"button",className:d(G.loadMoreBtn,c&&c),onClick:()=>t(),children:s?e.jsx(v,{type:"button"}):"Load more"}),K="_itemImage_jnd6l_25",J={itemImage:K},Q=({className:t=null,imgUrl:c,imgAlt:s})=>e.jsx("img",{src:c,alt:s,className:d(J.itemImage,t&&t),width:"292"}),X="_namePriceHeartContainer_1et47_25",Y="_itemName_1et47_31",Z="_priceHeartContainer_1et47_37",ee="_itemPrice_1et47_43",te="_checkbox_1et47_49",ce="_iconCheckbox_1et47_56",se="_checked_1et47_66",i={namePriceHeartContainer:X,itemName:Y,priceHeartContainer:Z,itemPrice:ee,checkbox:te,iconCheckbox:ce,checked:se},oe=({id:t,name:c,price:s,func:o,isSelected:n})=>e.jsxs("div",{className:i.namePriceHeartContainer,children:[e.jsx("h2",{className:i.itemName,children:c}),e.jsxs("div",{className:i.priceHeartContainer,children:[e.jsxs("p",{className:i.itemPrice,children:["€",s.toFixed(2)]}),e.jsxs("label",{className:i.checkboxContainer,children:[e.jsx("input",{type:"checkbox",name:"selected",onChange:()=>o(t),checked:n,className:i.checkbox}),e.jsx("svg",{className:d(i.iconCheckbox,n&&i.checked),children:e.jsx("use",{href:p+"#heart"})})]})]})]}),ae="_catalogItemContainer_a9a8s_25",ne="_detailsContainer_a9a8s_33",ie="_description_a9a8s_40",b={catalogItemContainer:ae,detailsContainer:ne,description:ie},le=({camper:t})=>{const{id:c,name:s,price:o,rating:n,location:a,description:h,reviews:x}=t,N=j(),I=_($).includes(c),R=L=>N(T(L)),f=t.gallery[0].thumb;return e.jsxs("div",{className:b.catalogItemContainer,children:[e.jsx(Q,{imgUrl:f,imgAlt:s}),e.jsxs("div",{className:b.detailsContainer,children:[e.jsxs("div",{children:[e.jsx(oe,{id:c,price:o,name:s,func:R,isSelected:I}),e.jsx(V,{rating:n,location:a,reviewsCount:x.length})]}),e.jsx("p",{className:b.description,children:h}),e.jsx(w,{advantageKeys:B,camperData:t}),e.jsx(D,{text:"Show more",linkTo:S.CATALOG+`/${c}`})]})]})},re="_catalogList_rxuui_25",de="_catalogListSection_rxuui_29",C={catalogList:re,catalogListSection:de},me=()=>{const t=_(P);return e.jsx("section",{className:C.catalogListSection,children:e.jsx("ul",{className:C.catalogList,children:t.map(c=>e.jsx("li",{children:e.jsx(le,{camper:c})},c.id))})})},he="_checkboxRadio_1n9n4_25",xe="_customCheckboxRadio_1n9n4_32",_e="_checkboxRadioIcon_1n9n4_47",ue="_checkboxRadioName_1n9n4_53",pe="_checked_1n9n4_59",r={checkboxRadio:he,customCheckboxRadio:xe,checkboxRadioIcon:_e,checkboxRadioName:ue,checked:pe},ke=({item:t,value:c,onChange:s})=>e.jsxs("label",{className:r.checkboxRadioLabel,children:[e.jsx("input",{className:r.checkboxRadio,type:"checkbox",value:t==="transmission"?"automatic":!0,checked:t==="transmission"?c==="automatic":c,onChange:o=>{s(t==="transmission"?o.target.checked?"automatic":"":o.target.checked?!0:"")}}),e.jsxs("span",{className:d(r.customCheckboxRadio,c==="automatic"&&r.checked||c&&r.checked),children:[e.jsx("svg",{className:r.checkboxRadioIcon,children:e.jsx("use",{href:p+`#${t}`})}),e.jsx("span",{className:r.checkboxRadioName,children:t==="transmission"?"automatic":t})]})]}),be="_checkboxRadio_1n9n4_25",je="_customCheckboxRadio_1n9n4_32",Ce="_checkboxRadioIcon_1n9n4_47",ge="_checkboxRadioName_1n9n4_53",Ne="_checked_1n9n4_59",m={checkboxRadio:be,customCheckboxRadio:je,checkboxRadioIcon:Ce,checkboxRadioName:ge,checked:Ne},Ie=({type:t,value:c,onChange:s})=>e.jsxs("label",{className:m.checkboxRadioLabel,children:[e.jsx("input",{className:m.checkboxRadio,type:"radio",name:"typeOptions",value:t,checked:c===t,onChange:o=>{s(o.target.checked?t:"")}}),e.jsxs("span",{className:d(m.customCheckboxRadio,c===t&&m.checked),children:[e.jsx("svg",{className:m.checkboxRadioIcon,children:e.jsx("use",{href:p+`#${t}`})}),e.jsx("span",{className:m.checkboxRadioName,children:t==="fullyIntegrated"?"Fully Integrated":t})]})]}),Re="_locationLabel_1el5i_25",fe="_inputTitle_1el5i_29",Le="_locationInput_1el5i_37",ve="_inputIcon_1el5i_60",u={locationLabel:Re,inputTitle:fe,locationInput:Le,inputIcon:ve},$e=({field:t,className:c=null})=>e.jsxs("label",{className:d(u.locationLabel,c&&c),children:[e.jsx("span",{className:u.inputTitle,children:"Location"}),e.jsx("input",{type:"text",placeholder:"City",...t,className:u.locationInput,autoComplete:"off"}),e.jsx("svg",{className:u.inputIcon,children:e.jsx("use",{href:p+"#map"})})]}),Be="_filterForm_11q3c_25",Se="_locationInput_11q3c_29",Te="_filtersTitle_11q3c_33",Pe="_filterBlockName_11q3c_40",qe="_equipmentOptions_11q3c_48",ye="_typeOptions_11q3c_57",l={filterForm:Be,locationInput:Se,filtersTitle:Te,filterBlockName:Pe,equipmentOptions:qe,typeOptions:ye},Oe=({className:t=null})=>{const{control:c,handleSubmit:s}=E({defaultValues:{location:"",AC:"",transmission:"",kitchen:"",TV:"",bathroom:"",form:""}}),o=j(),n=a=>{o(q()),o(y(a))};return e.jsx("section",{className:l.filtersSection,children:e.jsxs("form",{onSubmit:s(n),className:d(l.filterForm,t&&t),children:[e.jsx(k,{name:"location",control:c,render:({field:a})=>e.jsx($e,{field:a,className:l.locationInput})}),e.jsx("p",{className:l.filtersTitle,children:"Filters"}),e.jsxs("div",{children:[e.jsx("p",{className:l.filterBlockName,children:"Vehicle equipment"}),e.jsx("div",{className:l.equipmentOptions,children:["AC","transmission","kitchen","TV","bathroom"].map(a=>e.jsx(k,{name:a,control:c,render:({field:{value:h,onChange:x}})=>e.jsx(ke,{item:a,value:h,onChange:x})},a))})]}),e.jsxs("div",{children:[e.jsx("p",{className:l.filterBlockName,children:"Vehicle type"}),e.jsx("div",{className:l.typeOptions,children:["van","fullyIntegrated","alcove"].map(a=>e.jsx(k,{name:"form",control:c,render:({field:{value:h,onChange:x}})=>e.jsx(Ie,{type:a,value:h,onChange:x})},a))})]}),e.jsx(W,{text:"Search"})]})})},Ae="_catalogContainer_bziov_25",Fe="_listButtonWrapper_bziov_32",g={catalogContainer:Ae,listButtonWrapper:Fe},He=()=>{const t=j(),c=_(O),s=_(A),o=_(F),n=()=>{t(M(c+1))};return e.jsx("main",{children:e.jsxs(H,{className:g.catalogContainer,children:[e.jsx(Oe,{}),e.jsxs("div",{className:g.listButtonWrapper,children:[e.jsx(me,{}),c<s&&e.jsx(U,{funk:n,isLoading:o})]})]})})},We=()=>e.jsx(He,{});export{We as default};
