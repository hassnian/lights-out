(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(24)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),l=n.n(s),o=(n(16),n(1)),c=n(2),i=n(4),u=n(3),p=n(5),h=n(9),m=n(6),d=(n(18),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),f=(n(20),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard(),flips:0},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nRows;t++){for(var n=[],a=0;a<this.props.nCols;a++)n.push(Math.random()<this.props.chanceLightStartsOn);e.push(n)}return e}},{key:"flipCellsAround",value:function(e){console.log("Flipping",e);var t=this.props,n=t.nCols,a=t.nRows,r=this.state.board,s=e.split("-").map(Number),l=Object(h.a)(s,2),o=l[0],c=l[1];function i(e,t){t>=0&&t<n&&e>=0&&e<a&&(r[e][t]=!r[e][t])}i(o,c),i(o,c+1),i(o,c-1),i(o+1,c),i(o-1,c);var u=r.every(function(e){return e.every(function(e){return!e})});console.log(u," is hasWOn"),this.setState({board:r,hasWon:u,flips:this.state.flips+1})}},{key:"makeTable",value:function(){for(var e=this,t=[],n=0;n<this.props.nRows;n++){for(var a=[],s=function(t){var s="".concat(n,"-").concat(t);a.push(r.a.createElement(d,{key:s,isLit:e.state.board[n][t],flipCellsAroundMe:function(){return e.flipCellsAround(s)}}))},l=0;l<this.props.nCols;l++)s(l);t.push(r.a.createElement("tr",{key:n},a))}return r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,t))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.hasWon?r.a.createElement("div",{className:"winner"},r.a.createElement("span",{className:"neon-orange"},"YOU"),r.a.createElement("span",{className:"neon-blue"},"WIN!"),r.a.createElement("div",null,r.a.createElement("p",{className:"neon-blue"},"Flips:",r.a.createElement("span",{className:"neon-orange"},this.state.flips)))):r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"neon-orange"},"Lights"),r.a.createElement("div",{className:"neon-blue"},"Out")),this.makeTable(),r.a.createElement("div",null,r.a.createElement("p",{className:"neon-blue"},"Flips counter:",r.a.createElement("span",{className:"neon-orange"},this.state.flips)))))}}]),t}(a.Component));f.defaultProps={nRows:6,nCols:6,chanceLightStartsOn:0};var b=f,v=(n(22),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.c2677e10.chunk.js.map