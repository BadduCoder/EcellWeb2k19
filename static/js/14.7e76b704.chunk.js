(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{118:function(e,t,a){},139:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.r(t);var l=a(19),r=a(20),c=a(22),s=a(21),i=a(23),o=a(0),m=a.n(o),u=a(51),d=a(24),p=(a(118),a(52)),f=a(49),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).axios=Object(u.a)(),a.state={startups:[]},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.axios.get("/startups/full_list/").then(function(t){console.log(t);var a=t.data;a.length>0&&e.setState({loading:!1,startups:[].concat(n(e.state.startups),n(a))})})}},{key:"render",value:function(){var e=this.state.startups.map(function(e){return m.a.createElement("div",{className:"startup",key:e.id},m.a.createElement("div",{className:"cont1"},m.a.createElement("div",{className:"front1 shadow-lg p-3 mb-5 bg-white rounded"},m.a.createElement("img",{className:"startup-pic",src:e.pic_url,alt:e.name})),m.a.createElement("div",{className:"back2 shadow-lg p-3 mb-5 bg-white rounded"},m.a.createElement("div",{className:"inner1"},m.a.createElement("h4",{className:"startup-name",style:{fontWeight:"800"}},e.name),m.a.createElement("div",{className:"image-text"},m.a.createElement(d.c,{className:"startup-detail-link",to:"/startups/".concat(e.year,"/").concat(e.id)},"Know More!"))))))});return m.a.createElement("div",{className:"startups"},m.a.createElement(p.a,null),m.a.createElement("div",{className:"container-fluid ctn16"},m.a.createElement("h2",{className:"header6"},"Our Startups"),m.a.createElement("div",{className:"list"},e)),m.a.createElement(f.a,null))}}]),t}(o.Component);t.default=E},49:function(e,t,a){"use strict";var n=a(25),l=a(0),r=a.n(l),c=a(24),s=(a(50),a(53)),i=a.n(s);t.a=function(){return r.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},r.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/events"},"Events")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/speakers"},"Speakers")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/sponsors"},"Sponsors")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/team"},"Team"))),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},r.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:i.a}),r.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions.")),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),r.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),r.a.createElement("p",{style:{fontSize:"40px"}},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-facebook-square"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-twitter-square"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("div",null,r.a.createElement("a",{className:"site",href:"https://ecell.nitrr.ac.in/"},"E-Cell Official Site")),r.a.createElement("div",null,r.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),r.a.createElement("div",null,r.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),r.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")))))}},50:function(e,t,a){}}]);
//# sourceMappingURL=14.7e76b704.chunk.js.map