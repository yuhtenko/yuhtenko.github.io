"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[17,794],{1362:function(e,t,i){i.d(t,{B:function(){return l},k:function(){return c}});var n=i(6540),r=i(7811),o=i.p+"static/image-e6793d931611d9e23235f26f5529ff5f.png",a=i(2524),s=i(7437);const c=e=>{let{title:t,area:i,description:a,pathname:c,children:l}=e;const{title:d,description:p,url:h}=r,C={name:r.name,title:i?`${t} | ${i} | ${d}`:`${t} | ${d}`,description:null!=a?a:p,image:`${h}${o}`,url:`${h}${c||""}`};return(0,s.Y)(n.Fragment,null,(0,s.Y)("title",null,C.title),(0,s.Y)("meta",{name:"image",content:C.image}),(0,s.Y)("meta",{name:"description",content:C.description}),(0,s.Y)("meta",{property:"og:title",content:C.title}),(0,s.Y)("meta",{property:"og:type",content:"website"}),(0,s.Y)("meta",{property:"og:image",content:C.image}),(0,s.Y)("meta",{property:"og:url",content:C.url}),(0,s.Y)("meta",{property:"og:description",content:C.description}),(0,s.Y)("meta",{property:"og:site_name",content:C.name}),(0,s.Y)("meta",{property:"og:locale",content:"en_US"}),(0,s.Y)("meta",{name:"twitter:card",content:C.image}),(0,s.Y)("meta",{name:"twitter:title",content:C.name}),(0,s.Y)("meta",{name:"twitter:description",content:C.description}),(0,s.Y)("meta",{name:"twitter:image",content:C.image}),(0,s.Y)("meta",{name:"mobile-web-app-capable",content:"yes"}),l)},l=e=>{let{projectId:t,children:i}=e;const n=(0,a.d)().findProject(t);return(0,s.Y)(c,{title:n.title,area:"Projects",description:`${n.title} | ${n.description}`,pathname:n.path},i)}},7112:function(e,t,i){i.d(t,{N:function(){return c}});var n=i(6540),r=i(2210),o=i(249),a=i(7437);function s(e){switch(e){case"flex-start":return"left";case"center":return"center";case"flex-end":return"right";default:return}}function c(e){let{items:t,align:i,color:c}=e;return(0,a.Y)(n.Fragment,null,(0,a.Y)(r.A,{spacing:1,direction:"column",alignItems:i,textAlign:s(i)},t.map(((e,t)=>{const i=n.isValidElement(e)?e.key||t.toString():"string"==typeof e?e:t.toString();return n.isValidElement(e)?e:(0,a.Y)(o.EY,{key:i,color:c},e)}))))}},2436:function(e,t,i){i.d(t,{x:function(){return h}});var n=i(8168),r=i(6540),o=i(5863),a=i(2210),s=i(7112),c=i(249),l=i(7437);function d(e){let t,{className:i,position:n="left",shape:r,icon:o}=e;return r&&o?t="left"===n?[r,o]:[o,r]:r?t=r:o&&(t=o),null==t?null:(0,l.Y)(a.A,{className:i,direction:"row",spacing:1},t)}const p=(0,i(647).I4)(o.A)((e=>{let{theme:t,hasTitle:i}=e;const n={};return i&&(n.marginTop="0 !important"),n}));function h(e){let{title:t,spacing:i=5,children:a,...s}=e;return(0,l.Y)(r.Fragment,null,t&&(0,l.Y)(c.Pd,null,t),(0,l.Y)(p,(0,n.A)({},s,{container:!0,spacing:i,direction:"row",justifyContent:"space-between",alignItems:"flex-start",hasTitle:!!t}),r.Children.map(a,(e=>(0,l.Y)(o.A,{xs:12,sm:6,md:!0},e)))))}h.Step=function(e){let{title:t,actions:i,align:n,...r}=e,o="center";return o="left"===n?"flex-start":"right"===n?"flex-end":"center",(0,l.Y)(a.A,{direction:"column",spacing:{xs:1,sm:2},alignItems:o},(0,l.Y)(a.A,{direction:"column",spacing:{xs:0,sm:1},alignItems:o},(0,l.Y)(d,r),"string"==typeof t?(0,l.Y)(c.Pd,null,t):t),(0,l.Y)(s.N,{items:i,align:o}))}},2971:function(e,t,i){i.r(t),i.d(t,{Head:function(){return a}});var n=i(9887),r=i(1362),o=i(7437);const a=()=>(0,o.Y)(r.B,{projectId:n.PROJECT_ID});t.default=n.default},9887:function(e,t,i){i.r(t),i.d(t,{PROJECT_ID:function(){return A},default:function(){return M}});var n=i(6540),r=i(2210),o=i(7437);const a=()=>(0,o.Y)("svg",{width:"58",height:"66",viewBox:"2 22 50 20",fill:"none"},(0,o.Y)("path",{d:"M40.1489 13.43L40.5133 13.8585L40.8541 14.3056C43.5374 17.8255 45.129 22.2133 45.129 26.9737C45.129 32.4439 43.0271 37.4236 39.5808 41.1587C38.9043 41.892 38.8301 43.0445 39.5061 43.8469L50.8478 57.3077C51.1089 57.6175 51.0691 58.0789 50.7566 58.34L48.9774 59.8268C48.6625 60.0899 48.1924 60.0482 47.9293 59.7359L36.3713 46.0184C35.7427 45.2724 34.6951 45.1084 33.8716 45.5406L34.3363 46.426L33.8716 45.5406C30.9437 47.0771 27.6077 47.9473 24.0645 47.9473C12.427 47.9473 3 38.5532 3 26.9737C3 15.3941 12.427 6 24.0645 6C30.5135 6 36.284 8.88427 40.1489 13.43ZM42.9205 11.6674L42.7321 11.2822C42.5733 10.9576 42.4839 10.5927 42.4839 10.2043C42.4839 8.84429 43.592 7.73476 44.9677 7.73476C45.971 7.73476 46.8351 8.32568 47.2275 9.1772L47.4075 9.56763L47.4431 9.99775C47.4487 10.0656 47.4516 10.1345 47.4516 10.2043C47.4516 11.5643 46.3434 12.6738 44.9677 12.6738C44.2902 12.6738 43.6783 12.4055 43.2298 11.9686L42.9205 11.6674ZM38.2027 16.1366C34.9421 11.9216 29.8211 9.20429 24.0645 9.20429C14.4219 9.20429 6.56063 16.8271 6.23621 26.3614L6.22973 26.5519H6.20102L6.21537 26.9737L6.20102 27.3954H6.22973L6.23621 27.5859C6.56063 37.1202 14.4219 44.743 24.0645 44.743C33.9127 44.743 41.9032 36.7913 41.9032 26.9737C41.9032 23.362 40.8204 19.9994 38.9608 17.1941L38.717 16.8264L38.726 16.816L38.6119 16.6679L38.2351 16.0994L38.2027 16.1366ZM13.0116 27.2174L12.871 26.8212V26.3954C12.871 25.0354 13.9791 23.9259 15.3548 23.9259C16.7305 23.9259 17.8387 25.0354 17.8387 26.3954C17.8387 27.1217 17.5245 27.7746 17.0193 28.2284L16.7048 28.511L16.3165 28.6733C16.0221 28.7964 15.6978 28.8649 15.3548 28.8649C14.2723 28.8649 13.352 28.1765 13.0116 27.2174ZM20.2885 33.6514L20.5322 33.3067L20.8765 33.0611C21.2833 32.7707 21.7812 32.5997 22.3226 32.5997C22.7905 32.5997 23.2251 32.7274 23.5967 32.9487L23.957 33.1634L24.2276 33.4844C24.5898 33.9141 24.8065 34.4654 24.8065 35.0692C24.8065 36.4292 23.6983 37.5387 22.3226 37.5387C20.9469 37.5387 19.8387 36.4292 19.8387 35.0692C19.8387 34.5403 20.0048 34.0526 20.2885 33.6514ZM31.5183 25.0571L31.1562 24.8455L30.8828 24.5267C30.5124 24.0948 30.2903 23.5372 30.2903 22.9259C30.2903 21.5659 31.3985 20.4564 32.7742 20.4564C33.2647 20.4564 33.719 20.5967 34.1023 20.8385L34.4573 21.0624L34.7195 21.3901C35.0573 21.8122 35.2581 22.3446 35.2581 22.9259C35.2581 24.2859 34.1499 25.3954 32.7742 25.3954C32.3139 25.3954 31.8858 25.2718 31.5183 25.0571Z",fill:"white",stroke:"#3A3537",strokeWidth:"2"})),s=()=>(0,o.Y)("svg",{width:"58",height:"66",viewBox:"0 0 58 66",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.Y)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30 48.9711C38.5925 48.4727 45.4727 41.5924 45.9711 33H51C51.5523 33 52 32.5522 52 32C52 31.4478 51.5523 31 51 31H45.9711C45.4727 22.4076 38.5925 15.5273 30 15.0289V10C30 9.44775 29.5523 9 29 9C28.4477 9 28 9.44775 28 10V15.0289C19.4075 15.5273 12.5273 22.4076 12.0289 31H7C6.44772 31 6 31.4478 6 32C6 32.5522 6.44772 33 7 33H12.0289C12.5273 41.5924 19.4075 48.4727 28 48.9711V56C28 56.5522 28.4477 57 29 57C29.5523 57 30 56.5522 30 56V48.9711ZM29 21C28.4477 21 28 20.5522 28 20V17.0328C20.5125 17.5256 14.5256 23.5125 14.0328 31H17C17.5523 31 18 31.4478 18 32C18 32.5522 17.5523 33 17 33H14.0328C14.5256 40.4875 20.5125 46.4744 28 46.9672V46C28 45.4478 28.4477 45 29 45C29.5523 45 30 45.4478 30 46V46.9672C37.4875 46.4744 43.4744 40.4875 43.9672 33H41C40.4477 33 40 32.5522 40 32C40 31.4478 40.4477 31 41 31H43.9672C43.4744 23.5125 37.4875 17.5256 30 17.0328V20C30 20.5522 29.5523 21 29 21Z",fill:"#3A3537"})),c=()=>(0,o.Y)("svg",{width:"58",height:"66",viewBox:"0 0 58 66",stroke:"#3A3537",strokeWidth:"2",fill:"none"},(0,o.Y)("path",{d:"M29,13.7c9.1,0,16.4,7.3,16.4,16.2c0,5.1-2.4,7.8-5.1,10.9l0,0c-1.5,1.6-3.1,3.5-4.3,5.8 c-0.4,0.7-0.5,1.4-0.5,2v2.7c0,1.6-1.3,2.9-2.9,2.9h-7.2c-1.6,0-2.9-1.3-2.9-2.9v-2.6c0-0.7-0.1-1.5-0.5-2c-1.2-2.3-2.8-4.2-4.3-5.8 l0,0c-2.9-3.2-5.3-6-5.3-11C12.6,21,19.9,13.7,29,13.7z M34.8,62.1c0,1.6-1.3,2.9-2.9,2.9h-5.8c-1.6,0-2.9-1.3-2.9-2.9v-1 c0-1.6,1.3-2.9,2.9-2.9h5.8c1.6,0,2.9,1.3,2.9,2.9V62.1z"}),(0,o.Y)("line",{x1:"29",y1:"9.3",x2:"29",y2:"3.3"}),(0,o.Y)("line",{x1:"55",y1:"32",x2:"49",y2:"32"}),(0,o.Y)("line",{x1:"9",y1:"32",x2:"3",y2:"32"}),(0,o.Y)("line",{x1:"46",y1:"14.9",x2:"50.2",y2:"10.7"}),(0,o.Y)("line",{x1:"12",y1:"14.9",x2:"7.8",y2:"10.7"})),l=()=>(0,o.Y)("svg",{width:"60",height:"66",viewBox:"0 0 60 66",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.Y)("path",{d:"M6.22261 23H47.7782C49.2247 23 49.2247 24 47.7782 24H6.22261C4.77606 24 4.77606 23 6.22261 23Z",fill:"white"}),(0,o.Y)("path",{d:"M6.22261 26H33.1115C34.558 26 34.558 27 33.1115 27H6.22261C4.77606 27 4.77606 26 6.22261 26Z",fill:"white"}),(0,o.Y)("path",{d:"M6.22261 30C4.77606 30 4.77606 29 6.22261 29H33.1115C34.558 29 34.558 30 33.1115 30H6.22261Z",fill:"white"}),(0,o.Y)("path",{d:"M6 14C6.55228 14 7 13.5523 7 13C7 12.4477 6.55228 12 6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14Z",fill:"white"}),(0,o.Y)("path",{d:"M11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14Z",fill:"white"}),(0,o.Y)("path",{d:"M16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14Z",fill:"white"}),(0,o.Y)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.8487 49H3.57778C2.15411 49 1 47.8446 1 46.4194V11.5806C1 10.1554 2.15411 9 3.57778 9H56.4222C57.8459 9 59 10.1554 59 11.5806V46.4194C59 47.8446 57.8459 49 56.4222 49H43.255L41.769 53.9885C41.3929 55.2511 39.6473 55.3603 39.1167 54.1544L36.8487 49ZM2 46.4194V17.8871H58V46.4194C58 47.2934 57.2926 48 56.4222 48H43.5529L43.6664 47.6189C43.8028 47.161 44.161 46.8028 44.6189 46.6664L50.9885 44.769C52.2511 44.3929 52.3603 42.6473 51.1544 42.1167L32.9902 34.1244C31.8084 33.6045 30.6045 34.8084 31.1244 35.9902L36.4087 48H3.57778C2.70744 48 2 47.2934 2 46.4194ZM2 16.8871H58V11.5806C58 10.7066 57.2926 10 56.4222 10H3.57778C2.70744 10 2 10.7066 2 11.5806V16.8871Z",fill:"white"}),(0,o.Y)("path",{d:"M6.22261 23H47.7782C49.2247 23 49.2247 24 47.7782 24H6.22261C4.77606 24 4.77606 23 6.22261 23Z",stroke:"#3A3537"}),(0,o.Y)("path",{d:"M6.22261 26H33.1115C34.558 26 34.558 27 33.1115 27H6.22261C4.77606 27 4.77606 26 6.22261 26Z",stroke:"#3A3537"}),(0,o.Y)("path",{d:"M6.22261 30C4.77606 30 4.77606 29 6.22261 29H33.1115C34.558 29 34.558 30 33.1115 30H6.22261Z",stroke:"#3A3537"}),(0,o.Y)("path",{d:"M6 14C6.55228 14 7 13.5523 7 13C7 12.4477 6.55228 12 6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14Z",stroke:"#3A3537"}),(0,o.Y)("path",{d:"M11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14Z",stroke:"#3A3537"}),(0,o.Y)("path",{d:"M16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14Z",stroke:"#3A3537"}),(0,o.Y)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.8487 49H3.57778C2.15411 49 1 47.8446 1 46.4194V11.5806C1 10.1554 2.15411 9 3.57778 9H56.4222C57.8459 9 59 10.1554 59 11.5806V46.4194C59 47.8446 57.8459 49 56.4222 49H43.255L41.769 53.9885C41.3929 55.2511 39.6473 55.3603 39.1167 54.1544L36.8487 49ZM2 46.4194V17.8871H58V46.4194C58 47.2934 57.2926 48 56.4222 48H43.5529L43.6664 47.6189C43.8028 47.161 44.161 46.8028 44.6189 46.6664L50.9885 44.769C52.2511 44.3929 52.3603 42.6473 51.1544 42.1167L32.9902 34.1244C31.8084 33.6045 30.6045 34.8084 31.1244 35.9902L36.4087 48H3.57778C2.70744 48 2 47.2934 2 46.4194ZM2 16.8871H58V11.5806C58 10.7066 57.2926 10 56.4222 10H3.57778C2.70744 10 2 10.7066 2 11.5806V16.8871Z",stroke:"#3A3537"}));var d=i(224),p=i(2436),h=i(7499),C=i(3226),m=i(647),g=i(249),f=i.p+"static/image-1-772c8b2ae0979e5727ba7e94a13dc46e.jpg",u=i.p+"static/image-2-17eec93f29c67d43625cc0bba3c93906.jpg",Y=i.p+"static/image-3-cc3ecd02aa5d00605a7062383c1207f1.jpg",w=i.p+"static/image-4-1-a3fa3e685a309daa5692b57b6d4cbb1d.jpg",y=i.p+"static/image-4-2-d7e4f07a9d8909cad76a0bfc11ea38b1.jpg",v=i.p+"static/image-4-3-0c78b2725c8c84a104ed72be16327915.jpg",L=i.p+"static/image-4-5d15a444b71050bdf9b59e17f7373e8c.jpg",b=i.p+"static/image-5-75ea6539ce0070e4cc552467b295ff24.jpg",H=i.p+"static/image-6-c8bbbc84c5158233661bfa3e06a6457d.jpg",x=i(3912);const k=(0,m.I4)(h.AC)((e=>{let{theme:t}=e;return{[t.breakpoints.down(476)]:{"& .hero-number, .hero-heading":{...t.typography.variant.h3,textTransform:"none",fontWeight:t.typography.fontWeight.bold}},[t.breakpoints.down(371)]:{"& .hero-number, .hero-heading":{...t.typography.variant.h4,textTransform:"none",fontWeight:t.typography.fontWeight.bold}}}})),A="led-screen";function M(){return(0,o.Y)(n.Fragment,null,(0,o.Y)(k,{projectId:A,shapes:(0,o.Y)(r.A,{direction:"column",justifyContent:"space-between",spacing:6,maxWidth:425,width:"100%",margin:0},(0,o.Y)(r.A,{direction:"row",justifyContent:"flex-end"},(0,o.Y)(C.M_,{color:"red",direction:"up"})),(0,o.Y)(r.A,{direction:"row",justifyContent:"center"},(0,o.Y)(C.An,{color:"black",direction:"up"})),(0,o.Y)(r.A,{direction:"row"},(0,o.Y)(C.lM,{color:"yellow",direction:"up"})))}),(0,o.Y)(h.d8,{id:"about",heading:"About",variant:"outline"},(0,o.Y)(g.fz,null,"The goal of the project was to create a service that simplifies the process of displaying and uploading commercials on LED screens for advertisers and helps LED screen owners find customers. The service aims to save the time for advertisers by eliminating the need to travel to rental agencies amd also gives more freedom to choose the time and place of their ad broadcasts. For LED screen owners, the service aims to provide a steady stream of clients, reducing the need to search for customers and saving time and money.")),(0,o.Y)(h.r_,{id:"challenges",heading:"CHALLENGES",variant:"bold"},(0,o.Y)(g.fz,null,"The process of creating such a service can be complex, and there were several design challenges that I have faced. One of the most critical considerations was providing an excellent user experience for both advertisers and LED panel owners. The service’s interface should be user-friendly, even for people with limited technical expertise. Another challenge was ensuring the service is responsive, meaning it must work smoothly on a wide range of devices. The service may need to integrate with third-party services, such as payment processors or data analytics tools. The design must take into account the requirements of these services and ensure that the integration is seamless and does not disrupt the user experience.")),(0,o.Y)(h.r_,{id:"process",heading:["DESIGN","PROCESS"],variant:["bold","normal"]},(0,o.Y)(p.x,null,(0,o.Y)(p.x.Step,{key:"discover",shape:(0,o.Y)(C.M_,{key:"shape",color:"blue",direction:"left"}),icon:(0,o.Y)(a,{key:"icon"}),title:"Discover",actions:["User research","User interviews","Competitive Analysis"],position:"left"}),(0,o.Y)(p.x.Step,{key:"define",shape:(0,o.Y)(C.An,{key:"shape",color:"yellow",direction:"right"}),icon:(0,o.Y)(s,{key:"icon"}),title:"Define",actions:["User personas","Empathy map","User journey map"],position:"left"}),(0,o.Y)(p.x.Step,{key:"ideate",shape:(0,o.Y)(C.lM,{key:"shape",direction:"left"}),icon:(0,o.Y)(c,{key:"icon"}),title:"Ideate",actions:["User flow","Card sorting","Information architecture"],position:"right"}),(0,o.Y)(p.x.Step,{key:"design",shape:(0,o.Y)(C.M_,{key:"shape",color:"red",direction:"left"}),icon:(0,o.Y)(l,{key:"icon"}),title:"Design",actions:["Wireframes","Hi-Fi designs","Prototype"],position:"right"}))),(0,o.Y)(h.r_,{id:"desktop",heading:["DESKTOP","PAGES"],variant:["bold","normal"]},(0,o.Y)(r.A,{direction:"column",spacing:3},(0,o.Y)(d._V,{src:f,withBorder:!0}),(0,o.Y)(d.e1,null,(0,o.Y)(x.D,{src:u,withBorder:!0}),(0,o.Y)(x.D,{src:Y,withBorder:!0})))),(0,o.Y)(h.r_,{id:"mobile",heading:["MOBILE","ADAPTATION"],variant:["bold","normal"]},(0,o.Y)(d.e1,null,(0,o.Y)(d._q,{src:L,withBorder:!0},(0,o.Y)(d.PQ,{top:"29%",withBorder:["left","right"]},(0,o.Y)(d.io,{className:"led-home-cycle-mobile"},(0,o.Y)(d._V,{src:w}),(0,o.Y)(d._V,{src:y}),(0,o.Y)(d._V,{src:v})))),(0,o.Y)(x.D,{src:b,withBorder:!0}),(0,o.Y)(x.D,{src:H,withBorder:!0}))))}}}]);
//# sourceMappingURL=component---src-pages-projects-led-screen-index-tsx-50d7c1d375ceccf5f6b1.js.map