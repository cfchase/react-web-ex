(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},16:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(3),r=a.n(o),c=(a(16),a(1)),l=a.n(c),i=a(4),u=a(5),m=a(6),p=a(8),d=a(7),f=a(9),h=(a(20),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).apiUrl="/api/status",a.state={requestInProgress:!1,responseUrl:null,responseStatus:null,responseStatusText:null,responseBody:null},a.fetchData=function(){console.log("fetch data from ".concat(a.apiUrl)),a.setState({requestInProgress:!0},function(){fetch(a.apiUrl).then(function(){var e=Object(i.a)(l.a.mark(function e(t){var n,s,o,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),n=null,s=t.url,o=t.status,r=t.statusText,!t.ok){e.next=9;break}return e.next=8,t.json();case 8:n=e.sent;case 9:a.setState({requestInProgress:!1,responseUrl:s,responseStatus:o,responseStatusText:r,responseBody:n});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state,t=e.requestInProgress,a=e.responseUrl,n=e.responseStatus,o=e.responseStatusText,r=e.responseBody,c=s.a.createElement("div",{className:"response-text"},"No Request");return t?c=s.a.createElement("div",{className:"response-text"},"Request in Progress"):n&&(c=s.a.createElement("div",{className:"response-text"},s.a.createElement("div",{className:"code-section"},s.a.createElement("span",{className:"code-label"},"URL:")," ",s.a.createElement("code",{className:"code-value"},a)),s.a.createElement("div",{className:"code-section"},s.a.createElement("span",{className:"code-label"},"STATUS:")," ",s.a.createElement("code",{className:"code-value"},n," ",o)),r?s.a.createElement("div",{className:"code-section"},s.a.createElement("div",{className:"code-label"},"Body:"),s.a.createElement("pre",{className:"code-value"},JSON.stringify(r,void 0,2))):"")),s.a.createElement("div",{className:"App"},s.a.createElement("h3",null,"API URL: ",this.apiUrl),c,s.a.createElement("button",{type:"button",onClick:this.fetchData},s.a.createElement("i",{className:"fa fa-undo"})," Fetch Data"))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.9e2893db.chunk.js.map