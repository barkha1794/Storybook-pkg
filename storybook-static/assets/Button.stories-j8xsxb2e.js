import{r as f}from"./index-RYns6xqu.js";var u={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=f,x=Symbol.for("react.element"),k=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,v=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function l(t,r,i){var e,o={},a=null,p=null;i!==void 0&&(a=""+i),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)h.call(r,e)&&!E.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:x,type:t,key:a,ref:p,props:o,_owner:v.current}}s.Fragment=k;s.jsx=l;s.jsxs=l;u.exports=s;var O=u.exports;const _=({style:t,...r})=>O.jsx("button",{style:{...t,background:"darkred",color:"white",padding:"0.5rem 1.5rem",border:"none",outline:"none",borderRadius:"4px",fontWeight:"600"},...r});_.__docgenInfo={description:"",methods:[],displayName:"Button"};const b={title:"Button",component:_},n={args:{children:"My Button",onClick:()=>alert("My name is Barkha")}};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "My Button",
    onClick: () => alert("My name is Barkha")
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const g=["Primary"];export{n as Primary,g as __namedExportsOrder,b as default};
