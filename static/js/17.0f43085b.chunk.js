(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var l=a(19),n=a(20),s=a(22),r=a(21),i=a(23),c=a(0),o=a.n(c),m=a(51),d=a(52),u=a(49),p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).axios=Object(m.a)(),a.state={startup_detail:null,loading:!0},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.startup_id=this.props.match.params.id,this.startup_year=this.props.match.params.year,console.log(this.startup_id,this.startup_year),this.axios.get("/startups/list/".concat(this.startup_year,"/")).then(function(t){var a=t.data.data;console.log(a);var l=a.find(function(t){return t.id===Number(e.startup_id)});console.log({data:a,startup_detail:l}),e.setState({startup_detail:l,loading:!1})})}},{key:"render",value:function(){var e=null;if(!this.state.loading){var t=this.state.startup_detail;e=o.a.createElement("div",{className:"startup_detail"},o.a.createElement("div",{className:"startup-item1"},o.a.createElement("img",{alt:"startup",className:"shadow-lg p-3 mb-5 bg-white rounded startup-detail-pic",src:t.pic})),o.a.createElement("div",{className:"startup-item2"},o.a.createElement("div",{className:"startup-content"},o.a.createElement("div",{className:"startup-detail-name"},o.a.createElement("h4",{className:"s-name"},t.name)),o.a.createElement("br",null),o.a.createElement("div",{className:"startup-details"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.details}})),o.a.createElement("br",null))))}return o.a.createElement("div",{className:"startups"},o.a.createElement(d.a,null),o.a.createElement("div",null,this.state.loading?"loading":e),o.a.createElement(u.a,null))}}]),t}(c.Component)},49:function(e,t,a){"use strict";var l=a(25),n=a(0),s=a.n(n),r=a(24),i=(a(50),a(53)),c=a.n(i);t.a=function(){return s.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},s.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},s.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/"},"Home")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/events"},"Events")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/speakers"},"Speakers")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/sponsors"},"Sponsors")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/team"},"Team"))),s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},s.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:c.a}),s.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions.")),s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},s.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),s.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),s.a.createElement("p",{style:{fontSize:"40px"}},s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-facebook-square"})),s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-instagram"})),s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-twitter-square"})),s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-linkedin"}))),s.a.createElement("div",null,s.a.createElement("a",{className:"site",href:"https://ecell.nitrr.ac.in/"},"E-Cell Official Site")),s.a.createElement("div",null,s.a.createElement("a",Object(l.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),s.a.createElement("div",null,s.a.createElement("a",Object(l.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),s.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")))))}},50:function(e,t,a){}}]);
//# sourceMappingURL=17.0f43085b.chunk.js.map