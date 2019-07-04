(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r),c=(a(19),a(1)),s=a(2),i=a(4),u=a(3),m=a(5),h=a(9),d=a.n(h),b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"header"},l.a.createElement("img",{src:d.a,alt:"icon",className:"logo"}),l.a.createElement("p",{className:"brand"},"Bitcoin Info"))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={totalbc:"",hashestowin:"",nextretarget:"",bcperblock:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://blockchain.info/q/totalbc").then(function(e){return e.json()}).then(function(t){e.setState({totalbc:t})}),fetch("https://blockchain.info/q/hashestowin").then(function(e){return e.json()}).then(function(t){e.setState({hashestowin:t})}),fetch("https://blockchain.info/q/nextretarget").then(function(e){return e.json()}).then(function(t){e.setState({nextretarget:t})}),fetch("https://blockchain.info/q/bcperblock").then(function(e){return e.json()}).then(function(t){e.setState({bcperblock:t})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"cards container"},l.a.createElement("div",{className:"card"}," ",l.a.createElement("p",{className:"cardDesc"},"Total Bitcoins in circulation (delayed by up to 1 hour)")," ",l.a.createElement("p",{className:"cardInfo"},this.state.totalbc)," "),l.a.createElement("div",{className:"card"}," ",l.a.createElement("p",{className:"cardDesc"},"Block height of the next difficulty retarget")," ",l.a.createElement("p",{className:"cardInfo"},this.state.nextretarget)," "),l.a.createElement("div",{className:"card"}," ",l.a.createElement("p",{className:"cardDesc"},"Average number of hash attempts needed to solve a block")," ",l.a.createElement("p",{className:"cardInfo"},this.state.hashestowin)," "),l.a.createElement("div",{className:"card"}," ",l.a.createElement("p",{className:"cardDesc"},"Current block reward in BTC")," ",l.a.createElement("p",{className:"cardInfo"},this.state.bcperblock)," "))}}]),t}(n.Component),E=a(23),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={usd:{},eur:{},gbp:{},rub:{},jpy:{},cny:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://blockchain.info/ticker").then(function(e){return e.json()}).then(function(t){e.setState({usd:t.USD,eur:t.EUR,gbp:t.GBP,rub:t.RUB,jpy:t.JPY,cny:t.CNY})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"tabContainer container"},l.a.createElement(E.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"}),l.a.createElement("th",{scope:"col"},"Last prise"),l.a.createElement("th",{scope:"col"},"Buy"),l.a.createElement("th",{scope:"col"},"Sell"),l.a.createElement("th",{scope:"col"},"Symbol"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"USD"),l.a.createElement("td",null,this.state.usd.last),l.a.createElement("td",null,this.state.usd.buy),l.a.createElement("td",null,this.state.usd.sell),l.a.createElement("td",null,this.state.usd.symbol)),l.a.createElement("tr",null,l.a.createElement("td",null,"EUR"),l.a.createElement("td",null,this.state.eur.last),l.a.createElement("td",null,this.state.eur.buy),l.a.createElement("td",null,this.state.eur.sell),l.a.createElement("td",null,this.state.eur.symbol)),l.a.createElement("tr",null,l.a.createElement("td",null,"GBP"),l.a.createElement("td",null,this.state.gbp.last),l.a.createElement("td",null,this.state.gbp.buy),l.a.createElement("td",null,this.state.gbp.sell),l.a.createElement("td",null,this.state.gbp.symbol)),l.a.createElement("tr",null,l.a.createElement("td",null,"RUB"),l.a.createElement("td",null,this.state.rub.last),l.a.createElement("td",null,this.state.rub.buy),l.a.createElement("td",null,this.state.rub.sell),l.a.createElement("td",null,this.state.rub.symbol)),l.a.createElement("tr",null,l.a.createElement("td",null,"JPY"),l.a.createElement("td",null,this.state.jpy.last),l.a.createElement("td",null,this.state.jpy.buy),l.a.createElement("td",null,this.state.jpy.sell),l.a.createElement("td",null,this.state.jpy.symbol)),l.a.createElement("tr",null,l.a.createElement("td",null,"CNY"),l.a.createElement("td",null,this.state.cny.last),l.a.createElement("td",null,this.state.cny.buy),l.a.createElement("td",null,this.state.cny.sell),l.a.createElement("td",null,this.state.cny.symbol)))))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer container"},l.a.createElement("p",null,"API:",l.a.createElement("a",{href:"https://www.blockchain.com/api"},"https://www.blockchain.com/api")),l.a.createElement("p",null,"View source:",l.a.createElement("a",{href:"https://github.com/VlTre/Bitcoin-ticker"},"https://github.com/VlTre/Bitcoin-ticker")," "))}}]),t}(n.Component),C=a(6),k=a.n(C),g=a(12),v=a.n(g);k.a.createElement("link",{rel:"stylesheet",type:"text/css"},null,document.getElementsByTagName("head")[0]),k.a.theme={colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#343a40"]]},style:{fontFamily:"'Unica One', sans-serif"},plotBorderColor:"#606063"},title:{style:{color:"#E0E0E3",textTransform:"uppercase",fontSize:"20px"}},subtitle:{style:{color:"#E0E0E3",textTransform:"uppercase"}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:"#A0A0A3"}}},yAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",tickWidth:1,title:{style:{color:"#A0A0A3"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0"}},plotOptions:{series:{dataLabels:{color:"#B0B0B3"},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},legend:{itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"}},credits:{style:{color:"#666"}},labels:{style:{color:"#707073"}},drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},activeDataLabelStyle:{color:"#F0F0F3"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:"#505053"}}},rangeSelector:{buttonTheme:{fill:"#505053",stroke:"#000000",style:{color:"#CCC"},states:{hover:{fill:"#707073",stroke:"#000000",style:{color:"white"}},select:{fill:"#000003",stroke:"#000000",style:{color:"white"}}}},inputBoxBorderColor:"#505053",inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"},legendBackgroundColor:"rgba(0, 0, 0, 0.5)",background2:"#505053",dataLabelsColor:"#B0B0B3",textColor:"#C0C0C0",contrastTextColor:"#F0F0F3",maskColor:"rgba(255,255,255,0.3)"},k.a.setOptions(k.a.theme);var j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={options:{chart:{type:"line"},title:{text:"Monthly Average USD Price"},xAxis:{categories:[]},yAxis:{title:{text:"Price in USD"}},plotOptions:{line:{dataLabels:{enabled:!0}}},series:[]}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.blockchain.info/charts/market-price?timespan=30days&format=json&cors=true").then(function(e){return e.json()}).then(function(t){var a=t.values.map(function(e){return Math.round(e.y)}),n=t.values.map(function(e){return new Date(1e3*e.x)});e.setState({options:{categories:n,series:[{name:"",data:a}]}})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"chart container"},l.a.createElement(v.a,{highcharts:k.a,options:this.state.options},"    "))}}]),t}(n.Component),B=(a(20),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement(j,null),l.a.createElement(f,null),l.a.createElement(p,null),l.a.createElement(y,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a.p+"static/media/Bitcoin-icon.a5630cf1.png"}},[[13,1,2]]]);
//# sourceMappingURL=main.5813833e.chunk.js.map