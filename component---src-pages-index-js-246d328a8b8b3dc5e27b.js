(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QetY:function(A,e,a){"use strict";a("dZ+Y"),a("LK8F"),a("RIqP");var t=a("pVnL"),n=a.n(t),i=a("lwsE"),c=a.n(i),l=a("W8MJ"),r=a.n(l),o=a("a1gu"),s=a.n(o),d=a("Nsbk"),h=a.n(d),p=a("7W2i"),E=a.n(p),f=a("PJYZ"),u=a.n(f),g=a("lSNA"),m=a.n(g),b=a("Og4/"),j=a.n(b),B=a("J2iB"),Q=a.n(B),v=a("TSYQ"),w=a.n(v),x=(a("17x9"),a("q1tI")),N=a.n(x),C=a("H+2d"),Y=a("ZeOK"),y=a("ICNK"),I=a("Y53p"),R=a("MZgk"),S=a("D1pA"),D=a("MqQV");function O(A){var e=A.children,a=A.className,t=A.content,i=A.hidden,c=A.visible,l=w()(Object(Y.a)(c,"visible"),Object(Y.a)(i,"hidden"),"content",a),r=Object(y.a)(O,A),o=Object(I.a)(O,A);return N.a.createElement(o,n()({},r,{className:l}),C.a.isNil(e)?t:e)}O.handledProps=["as","children","className","content","hidden","visible"],O.propTypes={};var k=O,P=a("3WF5"),G=a.n(P);function M(A){var e=A.attached,a=A.basic,t=A.buttons,i=A.children,c=A.className,l=A.color,r=A.compact,o=A.content,s=A.floated,d=A.fluid,h=A.icon,p=A.inverted,E=A.labeled,f=A.negative,u=A.positive,g=A.primary,m=A.secondary,b=A.size,j=A.toggle,B=A.vertical,v=A.widths,x=w()("ui",l,b,Object(Y.a)(a,"basic"),Object(Y.a)(r,"compact"),Object(Y.a)(d,"fluid"),Object(Y.a)(h,"icon"),Object(Y.a)(p,"inverted"),Object(Y.a)(E,"labeled"),Object(Y.a)(f,"negative"),Object(Y.a)(u,"positive"),Object(Y.a)(g,"primary"),Object(Y.a)(m,"secondary"),Object(Y.a)(j,"toggle"),Object(Y.a)(B,"vertical"),Object(Y.b)(e,"attached"),Object(Y.e)(s,"floated"),Object(Y.g)(v),"buttons",c),R=Object(y.a)(M,A),S=Object(I.a)(M,A);return Q()(t)?N.a.createElement(S,n()({},R,{className:x}),C.a.isNil(i)?o:i):N.a.createElement(S,n()({},R,{className:x}),G()(t,(function(A){return H.create(A)})))}M.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],M.propTypes={};var T=M;function F(A){var e=A.className,a=A.text,t=w()("or",e),i=Object(y.a)(F,A),c=Object(I.a)(F,A);return N.a.createElement(c,n()({},i,{className:t,"data-text":a}))}F.handledProps=["as","className","text"],F.propTypes={};var _=F,W=function(A){function e(){var A,a;c()(this,e);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return a=s()(this,(A=h()(e)).call.apply(A,[this].concat(n))),m()(u()(u()(a)),"computeElementType",(function(){var A=a.props,e=A.attached,t=A.label;if(!Q()(e)||!Q()(t))return"div"})),m()(u()(u()(a)),"computeTabIndex",(function(A){var e=a.props,t=e.disabled,n=e.tabIndex;return Q()(n)?t?-1:"div"===A?0:void 0:n})),m()(u()(u()(a)),"focus",(function(){return j()(a.ref,"focus")})),m()(u()(u()(a)),"handleClick",(function(A){a.props.disabled?A.preventDefault():j()(a.props,"onClick",A,a.props)})),m()(u()(u()(a)),"handleRef",(function(A){return a.ref=A})),m()(u()(u()(a)),"hasIconClass",(function(){var A=a.props,e=A.labelPosition,t=A.children,n=A.content,i=A.icon;return!0===i||i&&(e||C.a.isNil(t)&&Q()(n))})),a}return E()(e,A),r()(e,[{key:"render",value:function(){var A=this.props,a=A.active,t=A.animated,i=A.attached,c=A.basic,l=A.children,r=A.circular,o=A.className,s=A.color,d=A.compact,h=A.content,p=A.disabled,E=A.floated,f=A.fluid,u=A.icon,g=A.inverted,m=A.label,b=A.labelPosition,j=A.loading,B=A.negative,v=A.positive,x=A.primary,R=A.secondary,O=A.role,k=A.size,P=A.toggle,G=w()(s,k,Object(Y.a)(a,"active"),Object(Y.a)(c,"basic"),Object(Y.a)(r,"circular"),Object(Y.a)(d,"compact"),Object(Y.a)(f,"fluid"),Object(Y.a)(this.hasIconClass(),"icon"),Object(Y.a)(g,"inverted"),Object(Y.a)(j,"loading"),Object(Y.a)(B,"negative"),Object(Y.a)(v,"positive"),Object(Y.a)(x,"primary"),Object(Y.a)(R,"secondary"),Object(Y.a)(P,"toggle"),Object(Y.b)(t,"animated"),Object(Y.b)(i,"attached")),M=w()(Object(Y.b)(b||!!m,"labeled")),T=w()(Object(Y.a)(p,"disabled"),Object(Y.e)(E,"floated")),F=Object(y.a)(e,this.props),_=Object(I.a)(e,this.props,this.computeElementType),W=this.computeTabIndex(_);if(!Q()(m)){var H=w()("ui",G,"button",o),U=w()("ui",M,"button",o,T),z=D.a.create(m,{defaultProps:{basic:!0,pointing:"left"===b?"right":"left"},autoGenerateKey:!1});return N.a.createElement(_,n()({},F,{className:U,onClick:this.handleClick}),"left"===b&&z,N.a.createElement("button",{className:H,disabled:p,ref:this.handleRef,tabIndex:W},S.a.create(u,{autoGenerateKey:!1})," ",h),("right"===b||!b)&&z)}var V=w()("ui",G,T,M,"button",o),Z=!C.a.isNil(l);return N.a.createElement(_,n()({},F,{className:V,disabled:p&&"button"===_||void 0,onClick:this.handleClick,ref:this.handleRef,role:O,tabIndex:W}),Z&&l,!Z&&S.a.create(u,{autoGenerateKey:!1}),!Z&&h)}}]),e}(x.Component);m()(W,"defaultProps",{as:"button",role:"button"}),m()(W,"Content",k),m()(W,"Group",T),m()(W,"Or",_),m()(W,"handledProps",["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"]),W.propTypes={},W.create=Object(R.f)(W,(function(A){return{content:A}}));var H=e.a=W},RXBc:function(A,e,a){"use strict";a.r(e);a("0mN4");var t=a("nyKl"),n=a("q1tI"),i=a.n(n),c=a("Dzhk"),l=a("Wbzz"),r=a("9eSz"),o=a.n(r),s=a("Mt1y"),d=a("yE/o"),h=a("3mGJ"),p=a("+6Dn"),E=a("WYlG"),f=a("aQu0"),u=a("QetY"),g=a("Bl7J"),m=a("hHGt");function b(){var A=[{key:"0",title:"Location",content:{content:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"We offer in-person sessions at Smeaton Grange (near Narellan NSW) and phone and video sessions (all by appointment)."," ",i.a.createElement(l.a,{to:"/contact"},"Contact Page")))}},{key:"1",title:"Fees and Funding",content:["We provide psychological services under Medicare, Private Health Funds, NDIS (self-managed only) and privately. We charge a gap fee, discussed with clients at initial appointments."].join(" ")},{key:"3",title:"Payment Options",content:["Clients can pay via Direct Bank transfer, seeking a reimbursement for Medicare (if attending under a treatment plan) or the NDIA (if applicable). Invoices and receipts are provided electronically."].join(" ")},{key:"4",title:"Parking Options",content:["Parking is readily available"].join(" ")},{key:"5",title:"Making an Appointment",content:{content:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Taking the first step towards improving the quality of your psychological health, wellbeing and relationships may feel daunting, especially if you have no prior experience with counselling."),i.a.createElement("p",null,"You can arrange an appointment by phoning 0466 231 620 or by sending an enquiry from the"," ",i.a.createElement(l.a,{to:"/contact"},"Contact Page"),"."),i.a.createElement("p",null,"We will guide you through setting up an initial appointment and will happily answer any questions you might have about the services we offer."))}}];return i.a.createElement(d.a,null,i.a.createElement(h.a,{basic:!0,size:"big"},i.a.createElement(f.a,{as:"h1",content:"Additional Information"}),i.a.createElement(m.a,{defaultActiveIndex:0,fluid:!0,styled:!0,panels:A})))}e.default=function(A){var e=A.location,a=t.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{location:e},i.a.createElement(c.c,null,i.a.createElement(c.d,null,i.a.createElement(o.a,{alt:"still waters logo",fixed:a.logo.childImageSharp.fixed})),i.a.createElement(c.d,{style:{display:"grid",justifyContent:"end",alignItems:"end",padding:"1rem",color:"white"}},i.a.createElement("small",null,"‘Still Waters’ –"," ",i.a.createElement("a",{style:{color:"inherit"},href:"https://www.maine1photography.com"},"Catharine McCann"))),i.a.createElement(o.a,{alt:"still waters painting",style:{gridArea:"main"},fluid:a.stillWaters.childImageSharp.fluid})),i.a.createElement(s.a,{hidden:!0}),i.a.createElement(d.a,null,i.a.createElement(h.a,{size:"big",basic:!0,content:i.a.createElement("p",null,"Still Waters Psychology is an adult psychotherapy and psychology service, providing evidence-based care for a range of mental health conditions and life challenges, for adults of all ages and life stages.")}),i.a.createElement(c.g,{backgroundColor:"white",textColor:"#016F92"},i.a.createElement("blockquote",{style:{color:"inherit"}},i.a.createElement("p",null,'"My vision is to support, equip and encourage individuals and communities to heal, grow and flourish"'),i.a.createElement("figcaption",null,"— Dr Marie-Thérèse Proctor"))),i.a.createElement(h.a,{size:"big",basic:!0,content:i.a.createElement("p",null,"To achieve this vision, Still Waters Psychology has a strengths-based, recovery-oriented focus in its provision of care, guided by trauma-informed and relationally focused models of care.")}),i.a.createElement(c.g,{backgroundColor:"white",textColor:"#016F92"},i.a.createElement("blockquote",{style:{color:"inherit"}},i.a.createElement("p",null,'" When healing, growth and flourishing occurs, individuals have scope to realise their personal and professional potential, while communities become supportive, nurturing and caring spaces, able to respond in healthy and positive ways to the needs of its members. Positive change in the individual can filter through, helping to form healthier communities. In turn, healthy communities become the foundation of healthy nations."'),i.a.createElement("figcaption",null,"— Dr Marie-Thérèse Proctor"))),i.a.createElement(h.a,{basic:!0,size:"big",content:i.a.createElement("p",null,"Still Waters Psychology can support people of varied worldviews and perspectives to live life in ways which align with their personal values, beliefs and life goals. As part of this process clients are encouraged to foster:")})),i.a.createElement(h.a,{vertical:!0,basic:!0},i.a.createElement(p.a,{columns:2,padded:!0,relaxed:!0,stackable:!0},i.a.createElement(p.a.Row,null,i.a.createElement(c.a,null,i.a.createElement(o.a,{alt:"park bench in park",fixed:a.aStillMind.childImageSharp.fixed}),i.a.createElement("h2",null,"A still mind"),i.a.createElement(s.a,{hidden:!0})),i.a.createElement(c.a,null,i.a.createElement(o.a,{alt:"woman on rocks by the sea",fixed:a.peacefulHeart.childImageSharp.fixed}),i.a.createElement("h2",null,"A peaceful heart"),i.a.createElement(s.a,{hidden:!0})),i.a.createElement(c.a,null,i.a.createElement(o.a,{alt:"lake at the base of two mountains",fixed:a.calmSpirit.childImageSharp.fixed}),i.a.createElement("h2",null,"A calm spirit"),i.a.createElement(s.a,{hidden:!0})),i.a.createElement(c.a,null,i.a.createElement(o.a,{alt:"man in a cave on top of a mountain",fixed:a.restoredSoul.childImageSharp.fixed}),i.a.createElement("h2",null,"A restored soul"),i.a.createElement(s.a,{hidden:!0}))))),i.a.createElement(d.a,null,i.a.createElement(c.g,{backgroundColor:"white",textColor:"#016F92"},i.a.createElement("blockquote",{style:{color:"inherit"}},i.a.createElement("p",null,'"I am committed to creating a safe and supportive space in which, together, client and therapist, can address the client’s needs and concerns. I value relationships and collaboration, these central to the way I engage with my clients."'),i.a.createElement("figcaption",null,"— Dr Marie-Thérèse Proctor"))),i.a.createElement(h.a,{size:"big",basic:!0},i.a.createElement("h1",null,"Practice Specialisations"),i.a.createElement("p",null,"In addition to general adult mental health services, Still Waters Psychology offers psychological care in four key areas:"," "),i.a.createElement("ul",null,i.a.createElement("li",null,"Spirituality and Mental Health "),i.a.createElement("li",null,"Carers’ Health and Wellbeing"),i.a.createElement("li",null,"Bereavement, Grief, Loss and Times of Change"),i.a.createElement("li",null,"Attachment and Complex Trauma")),i.a.createElement("p",null,"The practice can also provide educational and professional development workshops and presentations for:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Christian church communities - focused on building healthy leadership and health communities."),i.a.createElement("li",null,"Allied health care professionals – focused on areas such as attachment, spirituality and health, grief and loss, Acceptance and Commitment Therapy, etc."),i.a.createElement("li",null,"Community groups - focused on general mental health.")),i.a.createElement("p",null,"For more information about these areas, please see the"," ",i.a.createElement(l.a,{to:"/services"},"Services Page")," for more details."),i.a.createElement("p",null,"Clinical supervision is also available for allied health professionals, chaplains, minsters and church leaders."))),i.a.createElement(s.a,{hidden:!0}),i.a.createElement(c.c,{fullHeight:!0},i.a.createElement(c.d,null,i.a.createElement(h.a,{basic:!0},i.a.createElement(p.a,{columns:2,stackable:!0},i.a.createElement(p.a.Row,null,i.a.createElement(c.a,null,i.a.createElement(E.a,{verticalAlign:"middle"},i.a.createElement(f.a,{style:{textShadow:" 1px 1px 2px black",fontSize:"3rem"},inverted:!0,as:"h1"},"Act with Compassion"),i.a.createElement(f.a,{style:{textShadow:" 1px 1px 2px black",fontSize:"3rem"},inverted:!0,as:"h1"},"Live in Hope"),i.a.createElement(f.a,{style:{textShadow:" 1px 1px 2px black",fontSize:"3rem"},inverted:!0,as:"h1"},"Grow in Wisdom"))),i.a.createElement(c.a,{textAlign:"center"},i.a.createElement(u.a,{as:l.a,to:"/contact",inverted:!0,basic:!0,size:"big"},"Book Appointment")))))),i.a.createElement(o.a,{style:{gridArea:"main"},fluid:a.sunset.childImageSharp.fluid})),i.a.createElement(s.a,{hidden:!0}),i.a.createElement(b,null)))}},hHGt:function(A,e,a){"use strict";var t=a("pVnL"),n=a.n(t),i=a("TSYQ"),c=a.n(i),l=(a("17x9"),a("q1tI")),r=a.n(l),o=a("ZeOK"),s=a("ICNK"),d=(a("LK8F"),a("RIqP")),h=a.n(d),p=a("lwsE"),E=a.n(p),f=a("W8MJ"),u=a.n(f),g=a("a1gu"),m=a.n(g),b=a("Nsbk"),j=a.n(b),B=a("7W2i"),Q=a.n(B),v=a("PJYZ"),w=a.n(v),x=a("lSNA"),N=a.n(x),C=a("3WF5"),Y=a.n(C),y=a("Og4/"),I=a.n(y),R=a("Wt1U"),S=a.n(R),D=a("ijCd"),O=a.n(D),k=a("Y53p"),P=a("H+2d"),G=a("g4M/"),M=a("MZgk"),T=a("J2iB"),F=a.n(T),_=a("D1pA"),W=function(A){function e(){var A,a;E()(this,e);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return a=m()(this,(A=j()(e)).call.apply(A,[this].concat(n))),N()(w()(w()(a)),"handleClick",(function(A){return I()(a.props,"onClick",A,a.props)})),a}return Q()(e,A),u()(e,[{key:"render",value:function(){var A=this.props,a=A.active,t=A.children,i=A.className,l=A.content,d=c()(Object(o.a)(a,"active"),"title",i),h=Object(s.a)(e,this.props),p=Object(k.a)(e,this.props);return F()(l)?r.a.createElement(p,n()({},h,{className:d,onClick:this.handleClick}),t):r.a.createElement(p,n()({},h,{className:d,onClick:this.handleClick}),r.a.createElement(_.a,{name:"dropdown"}),l)}}]),e}(l.Component);function H(A){var e=A.active,a=A.children,t=A.className,i=A.content,l=c()("content",Object(o.a)(e,"active"),t),d=Object(s.a)(H,A),h=Object(k.a)(H,A);return r.a.createElement(h,n()({},d,{className:l}),P.a.isNil(a)?i:a)}N()(W,"handledProps",["active","as","children","className","content","index","onClick"]),W.propTypes={},W.create=Object(M.f)(W,(function(A){return{content:A}})),H.handledProps=["active","as","children","className","content"],H.propTypes={},H.create=Object(M.f)(H,(function(A){return{content:A}}));var U=H,z=function(A){function e(){var A,a;E()(this,e);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return a=m()(this,(A=j()(e)).call.apply(A,[this].concat(n))),N()(w()(w()(a)),"handleTitleOverrides",(function(A){return{onClick:function(e,t){I()(A,"onClick",e,t),I()(a.props,"onTitleClick",e,t)}}})),a}return Q()(e,A),u()(e,[{key:"render",value:function(){var A=this.props,e=A.active,a=A.content,t=A.index,n=A.title;return[W.create(n,{autoGenerateKey:!1,defaultProps:{active:e,index:t,key:"title"},overrideProps:this.handleTitleOverrides}),U.create(a,{autoGenerateKey:!1,defaultProps:{active:e,key:"content"}})]}}]),e}(l.Component);N()(z,"handledProps",["active","content","index","onTitleClick","title"]),z.propTypes={},z.create=Object(M.f)(z,null);var V=z,Z=function(A){function e(){var A,a;E()(this,e);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return a=m()(this,(A=j()(e)).call.apply(A,[this].concat(n))),N()(w()(w()(a)),"computeNewIndex",(function(A){var e=a.props.exclusive,t=a.state.activeIndex;return e?A===t?-1:A:O()(t,A)?S()(t,A):h()(t).concat([A])})),N()(w()(w()(a)),"handleTitleClick",(function(A,e){var t=e.index;a.trySetState({activeIndex:a.computeNewIndex(t)}),I()(a.props,"onTitleClick",A,e)})),N()(w()(w()(a)),"isIndexActive",(function(A){var e=a.props.exclusive,t=a.state.activeIndex;return e?t===A:O()(t,A)})),a}return Q()(e,A),u()(e,[{key:"getInitialAutoControlledState",value:function(A){return{activeIndex:A.exclusive?-1:[]}}},{key:"render",value:function(){var A=this,a=this.props,t=a.className,i=a.children,l=a.panels,o=c()("accordion",t),d=Object(s.a)(e,this.props),h=Object(k.a)(e,this.props);return r.a.createElement(h,n()({},d,{className:o}),P.a.isNil(i)?Y()(l,(function(e,a){return V.create(e,{defaultProps:{active:A.isIndexActive(a),index:a,onTitleClick:A.handleTitleClick}})})):i)}}]),e}(G.a);function L(A){var e=A.className,a=A.fluid,t=A.inverted,i=A.styled,l=c()("ui",Object(o.a)(a,"fluid"),Object(o.a)(t,"inverted"),Object(o.a)(i,"styled"),e),d=Object(s.a)(L,A);return r.a.createElement(Z,n()({},d,{className:l}))}N()(Z,"defaultProps",{exclusive:!0}),N()(Z,"autoControlledProps",["activeIndex"]),N()(Z,"handledProps",["activeIndex","as","children","className","defaultActiveIndex","exclusive","onTitleClick","panels"]),Z.propTypes={},Z.create=Object(M.f)(Z,(function(A){return{content:A}})),L.handledProps=["className","fluid","inverted","styled"],L.propTypes={},L.Accordion=Z,L.Content=U,L.Panel=V,L.Title=W;e.a=L},nyKl:function(A){A.exports=JSON.parse('{"data":{"stillWaters":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAv/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAF9eVmCiTBj/8QAGxAAAgMAAwAAAAAAAAAAAAAAAAECAxIREzH/2gAIAQEAAQUClejvizdZ4co2j//EABgRAAIDAAAAAAAAAAAAAAAAAAACERJB/9oACAEDAQE/AWnCp//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEUH/2gAIAQIBAT8BE7bf/8QAGRAAAgMBAAAAAAAAAAAAAAAAARAAAiEy/9oACAEBAAY/AuTNC2xf/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAERQRAhUf/aAAgBAQABPyHpB0Ac4kl2iK8H/9oADAMBAAIAAwAAABDvD//EABgRAAIDAAAAAAAAAAAAAAAAAAABQYGR/9oACAEDAQE/EEmKYf/EABcRAAMBAAAAAAAAAAAAAAAAAAABIYH/2gAIAQIBAT8QdUGj/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARQXGBkaH/2gAIAQEAAT8QJdbjDkf6mOTkbWLgYsuz2bPWf//Z","aspectRatio":1.25,"src":"/static/164035ba3c5824daad03f5892c855b38/be86c/image_1_Still_Waters_High_Resolution.jpg","srcSet":"/static/164035ba3c5824daad03f5892c855b38/d59a3/image_1_Still_Waters_High_Resolution.jpg 200w,\\n/static/164035ba3c5824daad03f5892c855b38/deb97/image_1_Still_Waters_High_Resolution.jpg 400w,\\n/static/164035ba3c5824daad03f5892c855b38/be86c/image_1_Still_Waters_High_Resolution.jpg 800w,\\n/static/164035ba3c5824daad03f5892c855b38/cb254/image_1_Still_Waters_High_Resolution.jpg 1200w,\\n/static/164035ba3c5824daad03f5892c855b38/ec36a/image_1_Still_Waters_High_Resolution.jpg 1600w,\\n/static/164035ba3c5824daad03f5892c855b38/75a11/image_1_Still_Waters_High_Resolution.jpg 4000w","sizes":"(max-width: 800px) 100vw, 800px"}}},"sunset":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAFT8mQTisIf/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAECERL/2gAIAQEAAQUCjjKUDU6qaO6NP//EABkRAAIDAQAAAAAAAAAAAAAAAAARASIxUf/aAAgBAwEBPwGqwUcP/8QAGBEAAgMAAAAAAAAAAAAAAAAAAFECESH/2gAIAQIBAT8BqTNZ/8QAFxAAAwEAAAAAAAAAAAAAAAAAABAxAf/aAAgBAQAGPwImur//xAAZEAEBAQADAAAAAAAAAAAAAAABADERQZH/2gAIAQEAAT8haw+Wdg/awGUnK//aAAwDAQACAAMAAAAQox//xAAYEQACAwAAAAAAAAAAAAAAAAABERAhgf/aAAgBAwEBPxB0Ftjf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/EGlMX//EABkQAAMBAQEAAAAAAAAAAAAAAAABETFRYf/aAAgBAQABPxDYTscFiwLjdfg4KI11QlpktNxuHuf/2Q==","aspectRatio":1.5,"src":"/static/ceca427f7fb3f2252f644435590019f0/be86c/image_2_Sunset.jpg","srcSet":"/static/ceca427f7fb3f2252f644435590019f0/d59a3/image_2_Sunset.jpg 200w,\\n/static/ceca427f7fb3f2252f644435590019f0/deb97/image_2_Sunset.jpg 400w,\\n/static/ceca427f7fb3f2252f644435590019f0/be86c/image_2_Sunset.jpg 800w,\\n/static/ceca427f7fb3f2252f644435590019f0/cb254/image_2_Sunset.jpg 1200w,\\n/static/ceca427f7fb3f2252f644435590019f0/ec36a/image_2_Sunset.jpg 1600w,\\n/static/ceca427f7fb3f2252f644435590019f0/5ad6d/image_2_Sunset.jpg 6000w","sizes":"(max-width: 800px) 100vw, 800px"}}},"logo":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8ElEQVQ4y5WUvUucQRCH7/X8wI+cih+naFBRiSIciCCxESyiHGKlJBDFxC80YiEGIhZWYqGNhSnFVuxsBPMH+BcIioV2goUWVlroXZ45fgvLnXfowsPOO7MzOzO7+4ZCGolEIjUnk0mnMrkCGp0emqHcs2f4+M6OQN+/4Q6e4AhicAmPZlMSgUvk1cHCPM1DyczxF9a877jWhnNlWCB5V07HZHDA/AC3yGPML2ZA3npLQJdhHL7BT/gDffAdlrwMF3IGTGtyIRn8k+OZZ7+Q7tDbPHswyFezl71MFi0bdIPwC9nKnoVR1/dcJedL3lawBIzDFTzDCZyqhztvKdmV0e/Sw3GDaeuVU+/PmqHdpfR7iM4O5AbOoQP24B6uYUrBgoxgLlBaUGcLo6/0Nol4Vyvw1/t+2coPQu8cqVeDYxFMWlkoqphL1Wh3QB3q6Wf4wJoC5jp701CiCsynwmViAeesL7oScTEMtdAJ+zCP84TWmG0VfsCGbsI6VKceOEIPRLWB7daqzOrUm49QBg0iT7Z2iEi29UW2OKrnNShDRL+tcmVY7AWoMZkk7LtJ1UWVRJXpLWCb3mgMxaa9AJjQ2/0CM7JP64V8hQFYUe9tHpEtbAFLvKvQqx1t53roYhPLslqH1qLSPiHHpO/W2mKL8R/Ri1u/pkVy8gAAAABJRU5ErkJggg==","width":300,"height":300,"src":"/static/d58419f0f913ffb46b0b1b7bf9ec3bc0/56e34/white_logo.png","srcSet":"/static/d58419f0f913ffb46b0b1b7bf9ec3bc0/56e34/white_logo.png 1x,\\n/static/d58419f0f913ffb46b0b1b7bf9ec3bc0/b5e6b/white_logo.png 1.5x,\\n/static/d58419f0f913ffb46b0b1b7bf9ec3bc0/b7710/white_logo.png 2x"}}},"aStillMind":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAP/2gAMAwEAAhADEAAAAcxypvBRII//xAAbEAACAgMBAAAAAAAAAAAAAAACEQESAAMhE//aAAgBAQABBQJ9Hf5xeMBV5Ikn/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BJ//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8Bcbhh/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERMRD/2gAIAQEABj8CGpytUww//8QAGxABAAIDAQEAAAAAAAAAAAAAAQARIUFRYXH/2gAIAQEAAT8hwNchbFsmR9hQIjsGxX4Q34z/2gAMAwEAAgADAAAAEEPv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAwEBPxDThWf/xAAYEQACAwAAAAAAAAAAAAAAAAAAAREhUf/aAAgBAgEBPxBqQjDP/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFBoVH/2gAIAQEAAT8QMiRRb9jANozcS9RFFW14xORMNPJdIl0AFeQRa5//2Q==","width":280,"height":280,"src":"/static/45ad3202114593f80a09092a29be900e/ce2b7/still_mind.jpg","srcSet":"/static/45ad3202114593f80a09092a29be900e/ce2b7/still_mind.jpg 1x,\\n/static/45ad3202114593f80a09092a29be900e/c94fa/still_mind.jpg 1.5x,\\n/static/45ad3202114593f80a09092a29be900e/f2da2/still_mind.jpg 2x"}}},"peacefulHeart":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBAwQC/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABYSl2ONAmCbb1umNuSka//8QAGhAAAwEBAQEAAAAAAAAAAAAAAQIDADIRMf/aAAgBAQABBQKbhwWx0asDShxo3smCl7Y/VycN1//EABcRAAMBAAAAAAAAAAAAAAAAAAAQEhH/2gAIAQMBAT8Booxf/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAECAQE/ASN//8QAGhAAAgMBAQAAAAAAAAAAAAAAAAEQETEgYf/aAAgBAQAGPwK1xkWzw2Wf/8QAHhABAAIBBAMAAAAAAAAAAAAAAQARMRAhQXFRYaH/2gAIAQEAAT8hoLvyQsVFbsQE1D+0ZG/+jEJsofKEwXycemZ+jQf/2gAMAwEAAgADAAAAEHAzwf/EABkRAQEAAwEAAAAAAAAAAAAAAAEAESFBcf/aAAgBAwEBPxAGN3mA6sBy/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEhEDH/2gAIAQIBAT8Q6mGyn//EACEQAQACAgIABwAAAAAAAAAAAAEAESExQVEQYXGBocHw/9oACAEBAAE/EC1cbdkBaz5GLYAQmO9PmdQAzEXkzEDSesrDkAxQ9sZcqn3anHBL19vAPwO58yf/2Q==","width":280,"height":280,"src":"/static/b0bf0f7fcc4e197f50b281a022c4e4e8/ce2b7/peaceful_heart.jpg","srcSet":"/static/b0bf0f7fcc4e197f50b281a022c4e4e8/ce2b7/peaceful_heart.jpg 1x,\\n/static/b0bf0f7fcc4e197f50b281a022c4e4e8/c94fa/peaceful_heart.jpg 1.5x,\\n/static/b0bf0f7fcc4e197f50b281a022c4e4e8/f2da2/peaceful_heart.jpg 2x"}}},"calmSpirit":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAF9Oe0aCQj/xAAcEAACAAcAAAAAAAAAAAAAAAAAAQIDBBETFCH/2gAIAQEAAQUCl1DMxsIhHxXP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHBAAAQMFAAAAAAAAAAAAAAAAAAECIRAREjJR/9oACAEBAAY/AsXNk1UlC3SKf//EABsQAAMAAgMAAAAAAAAAAAAAAAABESFRMUGh/9oACAEBAAE/IUWqmV5EuohVlGjmTwO+kXtn/9oADAMBAAIAAwAAABCT/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxCI/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QGf/EABwQAQEBAAIDAQAAAAAAAAAAAAERACFRMUGRof/aAAgBAQABPxBJrAQUDvInndpD5hyAGMcxFR1zwud1XtMKX99//9k=","width":280,"height":280,"src":"/static/d384512139889cfcc793ff748c2826bf/ce2b7/calm_spirit.jpg","srcSet":"/static/d384512139889cfcc793ff748c2826bf/ce2b7/calm_spirit.jpg 1x,\\n/static/d384512139889cfcc793ff748c2826bf/c94fa/calm_spirit.jpg 1.5x,\\n/static/d384512139889cfcc793ff748c2826bf/f2da2/calm_spirit.jpg 2x"}}},"restoredSoul":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAFByU4Mw1C//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAIBAwQTMf/aAAgBAQABBQLErVnurR4FNrE9/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8BiP/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/Aar/xAAbEAABBAMAAAAAAAAAAAAAAAABAAIREiBBYf/aAAgBAQAGPwKzogaRhtSOY//EABsQAAICAwEAAAAAAAAAAAAAAAERACExQVEQ/9oACAEBAAE/ISAvS2YEhWGMvKYhVp9gtp//2gAMAwEAAgADAAAAEJP/AP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8QU8tX/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQIBAT8Qkf/EABoQAQEBAQEBAQAAAAAAAAAAAAERIQAxQVH/2gAIAQEAAT8QYihAtGFPzrWEBsB4z5yAxN7P2aXcZxEgERBwMjXv/9k=","width":280,"height":280,"src":"/static/85eabe48f00bd6e0e3bda5d46a795d6d/ce2b7/restored_soul.jpg","srcSet":"/static/85eabe48f00bd6e0e3bda5d46a795d6d/ce2b7/restored_soul.jpg 1x,\\n/static/85eabe48f00bd6e0e3bda5d46a795d6d/c94fa/restored_soul.jpg 1.5x,\\n/static/85eabe48f00bd6e0e3bda5d46a795d6d/f2da2/restored_soul.jpg 2x"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-246d328a8b8b3dc5e27b.js.map