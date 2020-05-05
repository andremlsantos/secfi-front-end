(this["webpackJsonpsecfi-front-end"]=this["webpackJsonpsecfi-front-end"]||[]).push([[0],{155:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(47),l=a.n(o),i=(a(55),a(9)),c=a.n(i),u=a(15),s=a(2),p=a(3),m=a(8),h=a(5),v=a(4),E=(a(57),a(58),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.secfi.com/",className:"left logo"}," ")),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:andremlsantos@protonmail.com?Subject=Next%20call",className:"right"},"Contact")),r.a.createElement("li",null,r.a.createElement("a",{href:" https://github.com/andremlsantos/secfi-front-end.git",className:"right"},"GitHub"))))}}]),a}(n.Component)),y=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).map=new Map,e}return Object(p.a)(a,[{key:"isPresent",value:function(e){return null!=this.map.get(e)}},{key:"getValue",value:function(e){return this.map.get(e)}},{key:"getExchangeKey",value:function(e,t){return"".concat(e,"-").concat(t)}},{key:"getDailyKey",value:function(e,t){return"".concat(e,"-daily-").concat(t)}},{key:"saveExchange",value:function(e,t,a){var n=this.getExchangeKey(e,t),r=a;console.log("saving",n,r),this.map.set(n,r);var o=this.getExchangeKey(t,e),l=1/a;console.log("saving",o,l),this.map.set(o,l)}},{key:"saveDaily",value:function(e,t,a){var n=this.getDailyKey(e,t);console.log("Saving "+n+" to daily map "),this.map.set(n,a)}},{key:"removeDaily",value:function(e,t){this.map.delete(this.getDailyKey(e,t))}},{key:"removeExchange",value:function(e,t){this.map.delete(this.getExchangeKey(e,t))}}]),a}(n.Component),f=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={API_KEY:"0VY8POTUN3UDETPX"},n.repository=new y,n}return Object(p.a)(a,[{key:"fetchExchangeRate",value:function(){var e=Object(u.a)(c.a.mark((function e(t,a,n){var r,o,l,i=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.repository.getExchangeKey(t,a),t!==a){e.next=6;break}return console.log("from == to, returning amount"),e.abrupt("return",n);case 6:if(!this.repository.isPresent(r)){e.next=12;break}return console.log("values already requested"),o=this.repository.getValue(r)*n,e.abrupt("return",o.toFixed(4));case 12:return l="https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=".concat(t,"&to_currency=").concat(a,"&apikey=").concat(this.state.API_KEY),e.abrupt("return",fetch(l).then((function(e){return e.json()})).then((function(e){try{var o=Number(e["Realtime Currency Exchange Rate"]["5. Exchange Rate"]),l=n*o;return console.log("saving "+r+"  to map"),i.repository.saveExchange(t,a,o),l.toFixed(4)}catch(c){return console.error("Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day."),n}})).catch((function(e){return console.error(e)})));case 14:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"fetchDaily",value:function(){var e=Object(u.a)(c.a.mark((function e(t,a){var n,r,o,l,i,u,s,p=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.repository.getDailyKey(t,a),!this.repository.isPresent(n)){e.next=6;break}return console.log("returning old values from daily"),e.abrupt("return",this.repository.getValue(n));case 6:return r="https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=".concat(t,"&to_symbol=").concat(a,"&outputsize=compact&apikey=").concat(this.state.API_KEY),o=[],l=[],i=[],u=[],s=[],e.abrupt("return",fetch(r).then((function(e){return e.json()})).then((function(e){if(null!=e["Time Series FX (Daily)"]){for(var n in e["Time Series FX (Daily)"])o.push(n),l.push(e["Time Series FX (Daily)"][n]["1. open"]),i.push(e["Time Series FX (Daily)"][n]["2. high"]),u.push(e["Time Series FX (Daily)"][n]["3. low"]),s.push(e["Time Series FX (Daily)"][n]["4. close"]);var r={dates:o.reverse(),open:l.reverse(),high:i.reverse(),low:u.reverse(),close:s.reverse()};return p.repository.saveDaily(t,a,r),r}return console.info("Removing key "+p.repository.getDailyKey(t,a)+" due problems"),p.repository.removeDaily(t,a),p.repository.getValue(p.repository.getDailyKey("EUR","EUR"))})).catch((function(e){console.error(e)})));case 13:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),a}(n.Component),C=(a(59),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"from_currency_panel"},r.a.createElement("select",{id:"from_currency_select",value:this.props.fromCurrency,onChange:this.props.onChangeFromCurrency},r.a.createElement("option",{value:"AED"},"AED"),r.a.createElement("option",{value:"ARS"},"ARS"),r.a.createElement("option",{value:"AUD"},"AUD"),r.a.createElement("option",{value:"BGN"},"BGN"),r.a.createElement("option",{value:"BRL"},"BRL"),r.a.createElement("option",{value:"BSD"},"BSD"),r.a.createElement("option",{value:"CAD"},"CAD"),r.a.createElement("option",{value:"CHF"},"CHF"),r.a.createElement("option",{value:"CLP"},"CLP"),r.a.createElement("option",{value:"CNY"},"CNY"),r.a.createElement("option",{value:"COP"},"COP"),r.a.createElement("option",{value:"CZK"},"CZK"),r.a.createElement("option",{value:"DKK"},"DKK"),r.a.createElement("option",{value:"DOP"},"DOP"),r.a.createElement("option",{value:"EGP"},"EGP"),r.a.createElement("option",{value:"EUR"},"EUR"),r.a.createElement("option",{value:"FJD"},"FJD"),r.a.createElement("option",{value:"GBP"},"GBP"),r.a.createElement("option",{value:"GTQ"},"GTQ"),r.a.createElement("option",{value:"HKD"},"HKD"),r.a.createElement("option",{value:"HRK"},"HRK"),r.a.createElement("option",{value:"HUF"},"HUF"),r.a.createElement("option",{value:"IDR"},"IDR"),r.a.createElement("option",{value:"ILS"},"ILS"),r.a.createElement("option",{value:"INR"},"INR"),r.a.createElement("option",{value:"ISK"},"ISK"),r.a.createElement("option",{value:"JPY"},"JPY"),r.a.createElement("option",{value:"KRW"},"KRW"),r.a.createElement("option",{value:"KZT"},"KZT"),r.a.createElement("option",{value:"MXN"},"MXN"),r.a.createElement("option",{value:"MYR"},"MYR"),r.a.createElement("option",{value:"NOK"},"NOK"),r.a.createElement("option",{value:"NZD"},"NZD"),r.a.createElement("option",{value:"PAB"},"PAB"),r.a.createElement("option",{value:"PEN"},"PEN"),r.a.createElement("option",{value:"PHP"},"PHP"),r.a.createElement("option",{value:"PKR"},"PKR"),r.a.createElement("option",{value:"PLN"},"PLN"),r.a.createElement("option",{value:"PYG"},"PYG"),r.a.createElement("option",{value:"RON"},"RON"),r.a.createElement("option",{value:"RUB"},"RUB"),r.a.createElement("option",{value:"SAR"},"SAR"),r.a.createElement("option",{value:"SEK"},"SEK"),r.a.createElement("option",{value:"SGD"},"SGD"),r.a.createElement("option",{value:"THB"},"THB"),r.a.createElement("option",{value:"TRY"},"TRY"),r.a.createElement("option",{value:"TWD"},"TWD"),r.a.createElement("option",{value:"UAH"},"UAH"),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"UYU"},"UYU"),r.a.createElement("option",{value:"VND"},"VND"),r.a.createElement("option",{value:"ZAR"},"ZAR")),r.a.createElement("input",{type:"number",id:"from_amount",placeholder:"1",min:"1",max:"100",onChange:this.props.onChangeAmount})),r.a.createElement("div",{className:"middle_panel"},r.a.createElement("div",{className:"result"},r.a.createElement("p",null,this.props.amount," ",this.props.fromCurrency," = ",this.props.result," ",this.props.toCurrency," "))),r.a.createElement("div",{className:"to_currency_panel"},r.a.createElement("select",{id:"to_currency_select",value:this.props.toCurrency,onChange:this.props.onChangeToCurrency},r.a.createElement("option",{value:"AED"},"AED"),r.a.createElement("option",{value:"ARS"},"ARS"),r.a.createElement("option",{value:"AUD"},"AUD"),r.a.createElement("option",{value:"BGN"},"BGN"),r.a.createElement("option",{value:"BRL"},"BRL"),r.a.createElement("option",{value:"BSD"},"BSD"),r.a.createElement("option",{value:"CAD"},"CAD"),r.a.createElement("option",{value:"CHF"},"CHF"),r.a.createElement("option",{value:"CLP"},"CLP"),r.a.createElement("option",{value:"CNY"},"CNY"),r.a.createElement("option",{value:"COP"},"COP"),r.a.createElement("option",{value:"CZK"},"CZK"),r.a.createElement("option",{value:"DKK"},"DKK"),r.a.createElement("option",{value:"DOP"},"DOP"),r.a.createElement("option",{value:"EGP"},"EGP"),r.a.createElement("option",{value:"EUR"},"EUR"),r.a.createElement("option",{value:"FJD"},"FJD"),r.a.createElement("option",{value:"GBP"},"GBP"),r.a.createElement("option",{value:"GTQ"},"GTQ"),r.a.createElement("option",{value:"HKD"},"HKD"),r.a.createElement("option",{value:"HRK"},"HRK"),r.a.createElement("option",{value:"HUF"},"HUF"),r.a.createElement("option",{value:"IDR"},"IDR"),r.a.createElement("option",{value:"ILS"},"ILS"),r.a.createElement("option",{value:"INR"},"INR"),r.a.createElement("option",{value:"ISK"},"ISK"),r.a.createElement("option",{value:"JPY"},"JPY"),r.a.createElement("option",{value:"KRW"},"KRW"),r.a.createElement("option",{value:"KZT"},"KZT"),r.a.createElement("option",{value:"MXN"},"MXN"),r.a.createElement("option",{value:"MYR"},"MYR"),r.a.createElement("option",{value:"NOK"},"NOK"),r.a.createElement("option",{value:"NZD"},"NZD"),r.a.createElement("option",{value:"PAB"},"PAB"),r.a.createElement("option",{value:"PEN"},"PEN"),r.a.createElement("option",{value:"PHP"},"PHP"),r.a.createElement("option",{value:"PKR"},"PKR"),r.a.createElement("option",{value:"PLN"},"PLN"),r.a.createElement("option",{value:"PYG"},"PYG"),r.a.createElement("option",{value:"RON"},"RON"),r.a.createElement("option",{value:"RUB"},"RUB"),r.a.createElement("option",{value:"SAR"},"SAR"),r.a.createElement("option",{value:"SEK"},"SEK"),r.a.createElement("option",{value:"SGD"},"SGD"),r.a.createElement("option",{value:"THB"},"THB"),r.a.createElement("option",{value:"TRY"},"TRY"),r.a.createElement("option",{value:"TWD"},"TWD"),r.a.createElement("option",{value:"UAH"},"UAH"),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"UYU"},"UYU"),r.a.createElement("option",{value:"VND"},"VND"),r.a.createElement("option",{value:"ZAR"},"ZAR")),r.a.createElement("input",{disabled:!0,type:"number",id:"from_ammount",placeholder:this.props.result,min:"1",max:"100"})))}}]),a}(n.Component)),g=a(48),d=(a(155),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={chartData:{},days:"30"},n.onChangeDays=n.onChangeDays.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.props.onGraphMount().then((function(t){e.setState({chartData:e.buildChartData(t)})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;e.fromCurrency===this.props.fromCurrency&&e.toCurrency===this.props.toCurrency||this.props.onGraphMount().then((function(e){a.setState({chartData:a.buildChartData(e)})})).catch((function(e){console.error("Something happen andre?")}))}},{key:"buildChartData",value:function(e){return{labels:this.filterData(e.dates,this.state.days),datasets:[{label:"Close",data:this.filterData(e.close,this.state.days),backgroundColor:["rgba(255, 99, 132, 0.05)"],borderColor:"rgba(255, 99, 132, 0.8)",borderDash:[1],fill:!1},{label:"Open",data:this.filterData(e.open,this.state.days),backgroundColor:["rgba(23, 99, 132, 0.05)"],borderColor:"rgba(23, 99, 132, 0.8)",borderDash:[3]},{label:"High",data:this.filterData(e.high,this.state.days),backgroundColor:["rgba(44, 173, 221, 0.05)"],borderColor:"rgba(44, 173, 221, 0.8)",borderDash:[7]},{label:"Low",data:this.filterData(e.low,this.state.days),backgroundColor:["rgba(170, 161, 17, 0.05)"],borderColor:"rgba(170, 161, 17, 0.8)",borderDash:[5],fill:!1}]}}},{key:"buildChartOptions",value:function(){return{title:{display:!0,text:this.props.fromCurrency+" vs "+this.props.toCurrency,fontSize:25,fontColor:"#0E6D90"},legend:{display:!0,position:"right",labels:{fontColor:"#0E6D90"}},tooltips:{display:!0},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Value",fontColor:"#0E6D90",fontSize:20}}],xAxes:[{scaleLabel:{display:!0,labelString:"Time",fontColor:"#0E6D90",fontSize:20}}]}}}},{key:"filterData",value:function(e,t){return e.slice(Math.max(e.length-t,0))}},{key:"onChangeDays",value:function(e){var t=this;this.setState({days:e.target.value}),this.props.onGraphMount().then((function(e){t.setState({chartData:t.buildChartData(e)})})).catch((function(e){console.error("Something happen andre?")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(g.a,{data:this.state.chartData,options:this.buildChartOptions()}),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("input",{type:"range",onChange:this.onChangeDays,step:"10",min:"10",max:"100",value:this.state.days}),r.a.createElement("span",null,this.state.days)))}}]),a}(n.Component)),D=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={fromCurrency:"EUR",toCurrency:"EUR",amount:1,result:1,dates:[],open:[],high:[],low:[],close:[]},e.onChangeFromCurrency=e.onChangeFromCurrency.bind(Object(m.a)(e)),e.onChangeToCurrency=e.onChangeToCurrency.bind(Object(m.a)(e)),e.onChangeAmount=e.onChangeAmount.bind(Object(m.a)(e)),e.onGraphMount=e.onGraphMount.bind(Object(m.a)(e)),e.service=new f,e}return Object(p.a)(a,[{key:"onChangeFromCurrency",value:function(e){var t=this;this.setState({fromCurrency:e.target.value}),this.service.fetchExchangeRate(e.target.value,this.state.toCurrency,this.state.amount).then((function(e){t.setState({result:e})}))}},{key:"onChangeToCurrency",value:function(e){var t=this;this.setState({toCurrency:e.target.value}),this.service.fetchExchangeRate(this.state.fromCurrency,e.target.value,this.state.amount).then((function(e){t.setState({result:e})}))}},{key:"onChangeAmount",value:function(e){var t=this;this.setState({amount:e.target.value}),this.service.fetchExchangeRate(this.state.fromCurrency,this.state.toCurrency,e.target.value).then((function(e){t.setState({result:e})}))}},{key:"onGraphMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){t.service.fetchDaily(t.state.fromCurrency,t.state.toCurrency).then((function(a){t.setState({dates:a.dates,open:a.open,high:a.high,low:a.low,close:a.close}),e(a)})).catch((function(e){return a(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(C,{fromCurrency:this.state.fromCurrency,toCurrency:this.state.toCurrency,amount:this.state.amount,result:this.state.result,onGraphMount:this.onGraphMount,onChangeFromCurrency:this.onChangeFromCurrency,onChangeToCurrency:this.onChangeToCurrency,onChangeAmount:this.onChangeAmount}),r.a.createElement(d,{onGraphMount:this.onGraphMount,fromCurrency:this.state.fromCurrency,toCurrency:this.state.toCurrency,dates:this.state.dates,open:this.state.open,high:this.state.high,close:this.state.close}))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))},50:function(e,t,a){e.exports=a(156)},55:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.70f7c73f.chunk.js.map