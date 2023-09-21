"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[285],{3681:function(t,n,e){e.d(n,{Ee:function(){return i},sv:function(){return l},Q8:function(){return k},Y:function(){return b},wy:function(){return u},Kj:function(){return x}});var r=e(8010);function o(t,n){var e,r;if(!n)return null;if(!0===n)return{border:"2px solid "+(null!==(r=t.palette.grey.light)&&void 0!==r?r:t.palette.grey.main),borderRadius:t.shape.borderRadius};const o=new Set(n),i={},a="2px solid "+(null!==(e=t.palette.grey.light)&&void 0!==e?e:t.palette.grey.main);return o.has("top")&&(i.borderTop=a),o.has("bottom")&&(i.borderBottom=a),o.has("left")&&(i.borderLeft=a,o.has("top")&&(i.borderTopLeftRadius=t.shape.borderRadius),o.has("bottom")&&(i.borderBottomLeftRadius=t.shape.borderRadius)),o.has("right")&&(i.borderRight=a,o.has("top")&&(i.borderTopRightRadius=t.shape.borderRadius),o.has("bottom")&&(i.borderBottomRightRadius=t.shape.borderRadius)),i}const i=(0,r.zo)("img")((t=>{let{theme:n,withBorder:e}=t;return{objectFit:"contain",maxWidth:"100%",height:"auto",display:"block",verticalAlign:"middle",...o(n,e)}}));var a=e(7294),s=e(917);function l(t){let{className:n,children:e,interval:o}=t;const i=(0,r.Fg)(),{0:l,1:u}=(0,a.useState)(0),c=(0,a.useRef)(l),d=o||i.animation.slides;(0,a.useEffect)((()=>{const t=a.Children.count(e),n=setInterval((()=>{let n=0;c.current<t-1&&(n=c.current+1),c.current=n,u(n)}),d);return()=>{clearInterval(n)}}),[d]);const p=a.Children.map(e,((t,e)=>{if(a.isValidElement(t)){let r=null;return e!==l&&(r={display:"none"}),a.cloneElement(t,{style:r,className:n})}return t}));return(0,s.tZ)(a.Fragment,null,p)}const u=(0,r.zo)("div",{shouldForwardProp:t=>"offsetX"!==t&&"offsetY"!==t})((t=>{let{theme:n,width:e,height:r,offsetX:o=0,offsetY:i=0}=t;return{overflow:"hidden",position:"relative",width:e,height:r,"& img":{position:"relative",...o?{left:""+o}:void 0,...i?{top:""+i}:void 0}}}));function c(){return c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},c.apply(this,arguments)}function d(t,n){return d=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},d(t,n)}var p=function(t){var n,e;function r(){return t.apply(this,arguments)||this}e=t,(n=r).prototype=Object.create(e.prototype),n.prototype.constructor=n,d(n,e);var o=r.prototype;return o.getColumns=function(){var t=this.props,n=t.children,e=t.columnsCount,r=Array.from({length:e},(function(){return[]}));return a.Children.forEach(n,(function(t,n){t&&a.isValidElement(t)&&r[n%e].push(t)})),r},o.renderColumns=function(){var t=this.props.gutter;return this.getColumns().map((function(n,e){return a.createElement("div",{key:e,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:t}},n.map((function(t){return t})))}))},o.render=function(){var t=this.props,n=t.gutter,e=t.className,r=t.style;return a.createElement("div",{style:c({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:n},r),className:e},this.renderColumns())},r}(a.Component);p.propTypes={},p.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var h=p,g="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,m=function(){var t=function(){var t=(0,a.useState)(!1),n=t[0],e=t[1];return g((function(){e(!0)}),[]),n}(),n=(0,a.useState)(0),e=n[0],r=n[1],o=(0,a.useCallback)((function(){t&&r(window.innerWidth)}),[t]);return g((function(){if(t)return window.addEventListener("resize",o),o(),function(){return window.removeEventListener("resize",o)}}),[t,o]),e},f=function(t){var n=t.columnsCountBreakPoints,e=void 0===n?{350:1,750:2,900:3}:n,r=t.children,o=t.className,i=void 0===o?null:o,s=t.style,l=void 0===s?null:s,u=m(),c=(0,a.useMemo)((function(){var t=Object.keys(e).sort((function(t,n){return t-n})),n=t.length>0?e[t[0]]:1;return t.forEach((function(t){t<u&&(n=e[t])})),n}),[u,e]);return a.createElement("div",{className:i,style:l},a.Children.map(r,(function(t,n){return a.cloneElement(t,{key:n,columnsCount:c})})))};f.propTypes={};var y=f,v=h;function b(t){let{className:n,children:e}=t;const o=(0,r.Fg)(),i=a.Children.count(e),l=i>3?4:3===i?3:i;return(0,s.tZ)(y,{className:n,columnsCountBreakPoints:{350:1,750:2,900:l}},(0,s.tZ)(v,{gutter:o.spacing(3)},e))}const w=(0,r.zo)("div")((t=>{let{theme:n}=t;return{position:"relative",width:"100%"}})),Z=(0,r.zo)("div")((t=>{let{theme:n,justifyContent:e}=t;return{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:e}}));function x(t){let{className:n,src:e,justifyContent:r="flex-start",withBorder:o,children:a}=t;return(0,s.tZ)(w,{className:n},(0,s.tZ)(i,{src:e,withBorder:o}),(0,s.tZ)(Z,{justifyContent:r},a))}const C=(0,r.zo)("div")((t=>{let{theme:n,top:e,right:r,bottom:i,left:a,withBorder:s}=t;return{position:"relative",overflow:"hidden",top:e,bottom:i,right:r,left:a,...o(n,s)}}));function k(t){let{children:n,...e}=t;return(0,s.tZ)(C,e,n)}},8158:function(t,n,e){e.d(n,{Qb:function(){return y},Kr:function(){return g},NP:function(){return a},kZ:function(){return l}});var r=e(2644),o=e(640),i=e(917);function a(t){let{id:n,variant:e,className:a,children:s,heading:l,paddingTop:u,paddingBottom:c,noOffset:d,noMargin:p,sx:h}=t;const g=Array.isArray(l)?l:[l];return(0,i.tZ)(r.Z,{id:n,container:!0,className:a,component:"section",spacing:5,direction:"column",justifyContent:"flex-start",paddingTop:u,paddingBottom:c,sx:h},(0,i.tZ)(r.Z,{xs:12,paddingBottom:0},g.length>0&&(0,i.tZ)(o.X6,{noMargin:p,variant:e},l)),!d&&(0,i.tZ)(r.Z,{xs:12,md:11,mdOffset:1,paddingTop:0},s),d&&(0,i.tZ)(r.Z,{xs:12,paddingTop:0},s))}var s=e(4161);function l(t){let{id:n,variant:e,className:a,children:l,heading:u,paddingTop:c,paddingBottom:d,noOffset:p,noMargin:h,sx:g,withSubSections:m}=t;const f=Array.isArray(u)?u:[u],y=m?(0,i.tZ)(s.Z,{direction:"column",spacing:3},l):l;return(0,i.tZ)(r.Z,{id:n,container:!0,className:a,component:"section",spacing:5,direction:"column",justifyContent:"flex-start",paddingTop:c,paddingBottom:d,sx:g},(0,i.tZ)(r.Z,{xs:12,paddingBottom:0},f.length>0&&(0,i.tZ)(o.X6,{size:"heading2",variant:e,noMargin:h},u)),p?(0,i.tZ)(r.Z,{xs:12,paddingTop:0},y):(0,i.tZ)(r.Z,{xs:12,md:11,mdOffset:1,paddingTop:0},y))}var u=e(8010);const c=(0,u.zo)(s.Z)((t=>{let{theme:n}=t;return{minHeight:"88vh"}})),d=(0,u.zo)(s.Z)((t=>{let{theme:n}=t;return{paddingTop:"16vh",[n.breakpoints.down("md")]:{paddingLeft:n.spacing(2),paddingRight:n.spacing(2)}}})),p=(0,u.zo)(s.Z)((t=>{let{theme:n}=t;return{justifyContent:"flex-end","@media (max-width: 425px)":{justifyContent:"space-between",paddingLeft:"0 !important",paddingRight:"0 !important"},[n.breakpoints.down("md")]:{paddingLeft:n.spacing(2),paddingRight:n.spacing(2)}}})),h=(0,u.zo)(o.QE)((t=>{let{theme:n}=t;return{display:"inline-block",fontStyle:"italic"}}));function g(t){let{id:n,number:e,heading:r,description:a,shapes:l,className:g}=t;(0,u.Fg)();return(0,i.tZ)(c,{id:n,direction:"column",justifyContent:"space-between",className:g},(0,i.tZ)(d,{direction:"row",spacing:{xs:1,sm:2,md:3},alignItems:"baseline",justifyContent:{xs:"center",md:"flex-start"}},(0,i.tZ)(o.X6,{size:"title",variant:["outline","bold"],className:"hero-number",noMargin:!0},e),(0,i.tZ)(s.Z,{direction:"column"},(0,i.tZ)(o.X6,{size:"title",className:"hero-heading",variant:"bold",noMargin:!0},r),(0,i.tZ)(h,{className:"heading-subtitle",weight:"light"},a))),(0,i.tZ)(p,{direction:"row"},l))}var m=e(3595);const f=(0,u.zo)(r.Z)((t=>{let{theme:n}=t;return{minHeight:"88vh",paddingTop:"6vh"}}));function y(t){let{children:n,heading:e}=t;(0,u.Fg)();return(0,i.tZ)(f,{container:!0},(0,i.tZ)(r.Z,{xs:2},(0,i.tZ)(s.Z,{spacing:10,direction:"column"},(0,i.tZ)(m.Ae,{color:"red",size:40,direction:"right"}),(0,i.tZ)(m.B$,{color:"black",size:40,direction:"right"}),(0,i.tZ)(m.CJ,{color:"yellow",size:40,direction:"right"}))),(0,i.tZ)(r.Z,{container:!0,xs:10,paddingTop:{xs:"10vh",md:"6vh"}},(0,i.tZ)(s.Z,{spacing:2,direction:"column"},(0,i.tZ)(s.Z,{direction:"row",spacing:1},Array.isArray(e)&&e.length>0&&(0,i.tZ)(o.X6,{variant:["normal","outline"],noMargin:!0},e)),n)))}},640:function(t,n,e){e.d(n,{YS:function(){return h},X6:function(){return l},nv:function(){return d},QE:function(){return c},xv:function(){return p}});var r=e(7294),o=e(8010),i=e(917);function a(t){if(Array.isArray(t))switch(t.length){case 0:return["normal","normal"];case 1:return a(t[0]);case 2:return t;default:return[t[0],t[1]]}switch(t){case"outline":return["outline","normal"];case"bold":return["bold","normal"];default:return["normal","normal"]}}const s=(0,o.zo)("span")((t=>{let{theme:n,variant:e,noMargin:r,color:i,size:a,children:s}=t;const[l,u,c]=function(t,n){switch(n){case"title":return[t.typography.variant.h1,t.typography.variant.h2,t.typography.variant.h3];case"subheading1":return[t.typography.variant.h7,t.typography.variant.h8];case"subheading2":return[t.typography.variant.h9,t.typography.variant.h10];case"heading1":return[t.typography.variant.h4,t.typography.variant.h5];default:return[t.typography.variant.h6,t.typography.variant.h7]}}(n,a),d=function(t,n){return{color:(0,o.p9)(t,n)}}(n,i||"primary"),p=function(t,n,e){if("outline"===n)return{WebkitTextFillColor:"white",WebkitTextStrokeWidth:1,WebkitTextStrokeColor:e?(0,o.p9)(t,e):t.palette.primary.main}}(n,e,i),h=function(t,n,e){switch(n){case"title":return{fontWeight:t.typography.fontWeight.bold};case"subheading1":case"subheading2":return"outline"===e||"bold"===e?{fontWeight:t.typography.fontWeight.medium}:{fontWeight:t.typography.fontWeight.normal};default:return"outline"===e?{fontWeight:t.typography.fontWeight.medium}:"bold"===e?{fontWeight:t.typography.fontWeight["semi-bold"]}:{fontWeight:t.typography.fontWeight.normal}}}(n,a,e),[g,m]=r?["0","0"]:function(t,n){const[e,r]=t.sizes.spacing[n];return[t.spacing(e),t.spacing(r)]}(n,a),f=function(t){switch(t){case"heading1":case"heading2":return"uppercase";default:return"none"}}(a);return{display:"inline-block","&:not(:last-child)":{marginRight:r?"0":"12px"},...l,...h,...p,...d,textTransform:f,marginBottom:g,[n.breakpoints.down("md")]:{...u,...h,...p,...d,marginBottom:m,textTransform:f},...c&&{[n.breakpoints.down(340)]:{...c,...h,...p,...d,marginBottom:m,textTransform:f}}}}));function l(t){let{color:n,size:e="heading1",variant:o="normal",noMargin:l=!1,className:u,style:c,children:d,onClick:p}=t;const h=r.Children.toArray(d),[g,...m]=h,[f,y]=a(o);return(0,i.tZ)(r.Fragment,null,(0,i.tZ)(s,{size:e,variant:f,className:u,style:c,noMargin:l,color:n,"aria-valuetext":null==g?void 0:g.toString(),onClick:p},g),h.length>1&&m.map(((t,r)=>(0,i.tZ)(s,{size:e,key:"heading-"+r,variant:y,noMargin:l,className:u,style:c,color:n,"aria-valuetext":null==t?void 0:t.toString(),onClick:p},t))))}const u=function(t,n,e,r){return void 0===n&&(n="normal"),void 0===e&&(e="primary"),void 0===r&&(r="left"),{fontWeight:(0,o.r6)(t,n),color:(0,o.p9)(t,e),textAlign:r}},c=(0,o.zo)("span")((t=>{let{theme:n,color:e,weight:r}=t;const o=u(n,null!=r?r:"medium",null!=e?e:"primary");return{...n.typography.variant.subtitle1,...o,marginBottom:"16px",[n.breakpoints.down("sm")]:{...n.typography.variant.subtitle2,...o,marginBottom:"12px"}}})),d=(0,o.zo)("p",{name:"Paragraph"})((t=>{let{theme:n,weight:e,color:r}=t;const o=u(n,null!=e?e:"normal",r);return{margin:0,...n.typography.variant.body1,...o,[n.breakpoints.down("sm")]:{...n.typography.variant.body2,...o},"&:not(:last-child)":{marginBottom:n.spacing(1)}}}));(0,o.zo)("p")((t=>{let{theme:n}=t;const e=n;return{textAlign:"center",...e.typography.variant.quote1,[e.breakpoints.down("sm")]:{...e.typography.variant.quote2},[e.breakpoints.down(376)]:{...e.typography.variant.quote3}}})),(0,o.zo)("footer")((t=>{let{theme:n}=t;const e=n;return{float:"right",...e.typography.variant.quote1,fontStyle:"normal",[e.breakpoints.down("md")]:{...e.typography.variant.quote2,fontStyle:"normal"},[e.breakpoints.down(376)]:{...e.typography.variant.quote3,fontStyle:"normal"}}})),(0,o.zo)("blockquote")((()=>({maxWidth:640,margin:0})));const p=(0,o.zo)("span",{name:"Text"})((t=>{let{theme:n,color:e,weight:r,align:o}=t;const i=u(n,null!=r?r:"normal",e,o);return{...n.typography.variant.body1,...i,[n.breakpoints.down("md")]:{...n.typography.variant.body2,...i}}})),h=(0,o.zo)("div")((t=>{let{theme:n,weight:e,color:r}=t;const o=u(n,null!=e?e:"normal",r);return{...n.typography.variant.caption1,...o,textTransform:"none",[n.breakpoints.down("sm")]:{...n.typography.variant.caption1,...o,textTransform:"none"}}}))}}]);
//# sourceMappingURL=fc51343b60e4c6aee2014a28a6ffc3078fbef962-97fb17ac87a0593ab28c.js.map