import{j as s,s as o,c as d}from"./index-CB4yJe9-.js";const l="_badge_1idk4_88",j="_badgeIcon_1idk4_98",m="_badgeName_1idk4_104",i={badge:l,badgeIcon:j,badgeName:m},x=({name:n,value:a})=>s.jsxs("div",{className:i.badge,children:[s.jsx("svg",{className:i.badgeIcon,children:s.jsx("use",{href:o+`#${n}`})}),s.jsx("p",{className:i.badgeName,children:typeof a=="string"?a:n})]}),_=(n,a)=>{const t={};return a.forEach(e=>{n[e]&&(t[e]=n[e])}),t},b="_badgesList_p8gmt_88",h={badgesList:b},L=({camperData:n,advantageKeys:a,className:t=null})=>{const e=_(n,a);return s.jsx("ul",{className:d(h.badgesList,t&&t),children:Object.entries(e).map(([r,g])=>s.jsx("li",{children:s.jsx(x,{name:r,value:g})},r))})},p="_ratingLocationContainer_1jv2w_88",u="_ratingIcon_1jv2w_112",c={ratingLocationContainer:p,ratingIcon:u},I=({rating:n,location:a,reviewsCount:t,className:e=null})=>s.jsxs("div",{className:d(c.ratingLocationContainer,e&&e),children:[s.jsxs("p",{className:c.rating,children:[s.jsx("svg",{className:c.ratingIcon,children:s.jsx("use",{href:o+"#star"})}),n+`(${t} Reviews)`]}),s.jsxs("p",{className:c.location,children:[s.jsx("svg",{className:c.locationIcon,children:s.jsx("use",{href:o+"#map"})}),a]})]});export{L as B,I as C};