import{a as O,f,g as v,P as bt,d as wt}from"./format-money-34250c96.js";import{f as g,C as m,a as S,i as p,S as vt,F as mt,L as Ct,b as kt,A as Pt,B as Dt,T as xt,P as Ot,c as Mt,d as Ft,p as St,e as At,g as Bt,h as jt,j as Wt,k as It}from"./vendor-fcd3df87.js";import{G as $t}from"./get-4c4a00e4.js";import{G as Vt,a as Kt}from"./get-1b66e77f.js";class Lt{get(e,n,a){return O.get("/api/v2/summary/basic",{params:{start:e,end:n,code:a}})}}function P(t,e,n){const a=g(e,"y-MM-dd")+"_"+g(n,"y-MM-dd")+"_"+t;return console.log("getCacheKey: "+a),String(a)}let U=!1;const Et=()=>({balanceBox:{amounts:[],subtitles:[]},billBox:{paid:[],unpaid:[]},leftBox:{left:[],perDay:[]},netBox:{net:[]},autoConversion:!1,loading:!1,boxData:null,boxOptions:null,getFreshData(){const t=new Date(window.store.get("start")),e=new Date(window.store.get("end")),n=P("dashboard-boxes-data",t,e),a=window.store.get("cacheValid");let r=window.store.get(n);if(a&&typeof r<"u"){this.boxData=r,this.generateOptions(this.boxData);return}new Lt().get(g(t,"yyyy-MM-dd"),g(e,"yyyy-MM-dd"),null).then(i=>{this.boxData=i.data,window.store.set(n,i.data),this.generateOptions(this.boxData)})},generateOptions(t){this.balanceBox={amounts:[],subtitles:[]},this.billBox={paid:[],unpaid:[]},this.leftBox={left:[],perDay:[]},this.netBox={net:[]};let e={};for(const n in t)if(t.hasOwnProperty(n)){const a=t[n];if(!a.hasOwnProperty("key"))continue;let r=a.key;if(this.autoConversion){if(r.startsWith("balance-in-native")){this.balanceBox.amounts.push(f(a.value,a.currency_code)),e.hasOwnProperty(a.currency_code)||(e[a.currency_code]="");continue}if(r.startsWith("spent-in-native")){e.hasOwnProperty(a.currency_code)||(e[a.currency_code]=""),e[a.currency_code]=e[a.currency_code]+f(a.value,a.currency_code);continue}if(r.startsWith("earned-in-native")){e.hasOwnProperty(a.currency_code)||(e[a.currency_code]=""),e[a.currency_code]=f(a.value,a.currency_code)+" + "+e[a.currency_code];continue}if(r.startsWith("bills-unpaid-in-native")){this.billBox.unpaid.push(f(a.value,a.currency_code));continue}if(r.startsWith("bills-paid-in-native")){this.billBox.paid.push(f(a.value,a.currency_code));continue}if(r.startsWith("left-to-spend-in-native")){this.leftBox.left.push(f(a.value,a.currency_code));continue}if(r.startsWith("left-per-day-to-spend-in-native")){this.leftBox.perDay.push(f(a.value,a.currency_code));continue}if(r.startsWith("net-worth-in-native")){this.netBox.net.push(f(a.value,a.currency_code));continue}}if(!this.autoConversion&&!r.endsWith("native")){if(r.startsWith("balance-in-")){this.balanceBox.amounts.push(f(a.value,a.currency_code));continue}if(r.startsWith("spent-in-")){e.hasOwnProperty(a.currency_code)||(e[a.currency_code]=""),e[a.currency_code]=e[a.currency_code]+f(a.value,a.currency_code);continue}if(r.startsWith("earned-in-")){e.hasOwnProperty(a.currency_code)||(e[a.currency_code]=""),e[a.currency_code]=f(a.value,a.currency_code)+" + "+e[a.currency_code];continue}if(r.startsWith("bills-unpaid-in-")){this.billBox.unpaid.push(f(a.value,a.currency_code));continue}if(r.startsWith("bills-paid-in-")){this.billBox.paid.push(f(a.value,a.currency_code));continue}if(r.startsWith("left-to-spend-in-")){this.leftBox.left.push(f(a.value,a.currency_code));continue}if(r.startsWith("left-per-day-to-spend-in-")){this.leftBox.perDay.push(f(a.value,a.currency_code));continue}r.startsWith("net-worth-in-")&&this.netBox.net.push(f(a.value,a.currency_code))}}for(let n in e)e.hasOwnProperty(n)&&this.balanceBox.subtitles.push(e[n]);this.loading=!1},loadBoxes(){if(this.loading!==!0){if(this.loading=!0,this.boxData===null){this.getFreshData();return}this.generateOptions(this.boxData),this.loading=!1}},init(){Promise.all([v("viewRange"),v("autoConversion",!1)]).then(t=>{U=!0,this.autoConversion=t[1],this.loadBoxes()}),window.store.observe("end",()=>{U&&(this.boxData=null,this.loadBoxes())}),window.store.observe("autoConversion",t=>{U&&(this.autoConversion=t,this.loadBoxes())})}});class Gt{put(e,n){let a="/api/v1/preferences/"+e;return O.put(a,{data:n})}}function Tt(t,e=null){window.store.set(t,e),new Gt().put(t,e).then(a=>{}).catch(()=>{new bt().post(t,e).then(r=>{})})}let Rt=class{dashboard(e,n){let a=g(e,"y-MM-dd"),r=g(n,"y-MM-dd");return O.get("/api/v2/chart/account/dashboard",{params:{start:a,end:r}})}expense(e,n){let a=g(e,"y-MM-dd"),r=g(n,"y-MM-dd");return O.get("/api/v2/chart/account/expense-dashboard",{params:{start:a,end:r}})}};class st{get(e,n){let a={date:g(n,"y-MM-dd").slice(0,10)};return n?O.get("/api/v2/accounts/"+e,{params:a}):O.get("/api/v2/accounts/"+e)}transactions(e,n){const a={page:n.page??1};return n.hasOwnProperty("start")&&(a.start=g(n.start,"y-MM-dd")),n.hasOwnProperty("end")&&(a.end=g(n.end,"y-MM-dd")),O.get("/api/v2/accounts/"+e+"/transactions",{params:a})}}function N(t){return t==="sankey"?{type:"sankey",data:{datasets:[]},options:{animations:!1}}:t==="pie"?{type:"pie",data:{datasets:[]}}:t==="column"?{type:"bar",data:{labels:[],datasets:[]},options:{plugins:{tooltip:{callbacks:{label:function(e){let n=e.dataset.currency_code;return f(e.raw,n)}}}},maintainAspectRatio:!1,scales:{}}}:t==="line"?{options:{plugins:{tooltip:{callbacks:{label:function(e){let n=e.dataset.currency_code;return f(e.raw,n)}}}},maintainAspectRatio:!1,scales:{x:{type:"time",time:{tooltipFormat:"PP"}}}},type:"line",data:{labels:[],datasets:[]}}:{}}let q=new m("#36a2eb"),I=new m("#ff6384"),G=new m("#4bc0c0"),ft=new m("#ff9f40"),qt=new m("#9966ff"),Nt=new m("#ffcd56"),Yt=new m("#c9cbcf"),lt=0;window.theme==="dark"&&(I.darken(.3).desaturate(.3),G.darken(.3).desaturate(.3),q.darken(.3).desaturate(.3),ft.darken(.3).desaturate(.3));let z=[I,ft,q,G,qt,Nt,Yt,G];function j(t,e){let n={borderColor:I.rgbString(),backgroundColor:I.rgbString()},a;switch(t){default:let o=Math.floor(lt/2)%z.length;a=new m(z[o].rgbString()),a.lighten(.38),n={borderColor:z[o].hexString(),backgroundColor:a.hexString()};break;case"spent":a=new m(q.rgbString()),a.lighten(.38),n={borderColor:q.rgbString(),backgroundColor:a.rgbString()};break;case"left":a=new m(G.rgbString()),a.lighten(.38),n={borderColor:G.rgbString(),backgroundColor:a.rgbString()};break;case"overspent":a=new m(I.rgbString()),a.lighten(.22),n={borderColor:I.rgbString(),backgroundColor:a.rgbString()};break}return lt++,e==="border"?n.borderColor:e==="background"?n.backgroundColor:"#FF0000"}let A=[],$=null,H=null,J=!1;const Ut=()=>({loading:!1,loadingAccounts:!1,accountList:[],autoConversion:!1,chartOptions:null,switchAutoConversion(){this.autoConversion=!this.autoConversion,Tt("autoConversion",this.autoConversion)},getFreshData(){const t=new Date(window.store.get("start")),e=new Date(window.store.get("end")),n=P("dashboard-accounts-chart",t,e),a=window.store.get("cacheValid");let r=window.store.get(n);if(a&&typeof r<"u"){console.log(r),this.drawChart(this.generateOptions(r)),this.loading=!1;return}new Rt().dashboard(t,e,null).then(i=>{this.chartData=i.data,window.store.set(n,i.data),console.log(i.data),this.drawChart(this.generateOptions(this.chartData)),this.loading=!1})},generateOptions(t){A=[];let e=N("line");for(let n=0;n<t.length;n++)if(t.hasOwnProperty(n)){let a="y",r=t[n],o={},i=[];n===0&&(e.data.labels=Object.keys(r.entries)),o.label=r.label,this.autoConversion&&(A.push(r.native_currency_code),o.currency_code=r.native_currency_code,i=Object.values(r.native_entries),a="y"+r.native_currency_code),this.autoConversion||(a="y"+r.currency_code,o.currency_code=r.currency_code,A.push(r.currency_code),i=Object.values(r.entries)),o.yAxisID=a,o.data=i,e.data.datasets.push(o)}for(let n in A)if(A.hasOwnProperty(n)){let a="y"+A[n];e.options.scales.hasOwnProperty(a)||(e.options.scales[a]={id:n,type:"linear",position:parseInt(n)===1?"right":"left",ticks:{callback:function(r,o,i){return f(r,A[n])}}})}return e},loadChart(){if(this.loading!==!0){if(this.loading=!0,H===null){this.getFreshData();return}this.drawChart(this.generateOptions(H)),this.loading=!1}},drawChart(t){if($!==null){$.options=t.options,$.data=t.data,$.update();return}$=new S(document.querySelector("#account-chart"),t)},loadAccounts(){if(this.loadingAccounts===!0)return;if(this.loadingAccounts=!0,this.accountList.length>0){this.loadingAccounts=!1;return}const t=new Date(window.store.get("start")),e=new Date(window.store.get("end")),n=P("dashboard-accounts-data",t,e),a=window.store.get("cacheValid");let r=window.store.get(n);if(a&&typeof r<"u"){this.accountList=r,this.loadingAccounts=!1;return}const o=10;let i=0,l=0,u=[];Promise.all([v("frontpageAccounts")]).then(d=>{i=d[0].length;for(let h in d[0]){let c=d[0];if(c.hasOwnProperty(h)){let _=c[h];new st().get(_,new Date(window.store.get("end"))).then(w=>{let C=w.data.data;const yt={page:1,start:new Date(window.store.get("start")),end:new Date(window.store.get("end"))};new st().transactions(C.id,yt).then(at=>{let nt=[];for(let B=0;B<at.data.data.length&&!(B>=o);B++){let M=at.data.data[B],rt={title:M.attributes.group_title===null?"":M.attributes.group_title,id:M.id,transactions:[]};for(let Y=0;Y<M.attributes.transactions.length;Y++){let k=M.attributes.transactions[Y];const ot=k.type==="withdrawal"?parseFloat(k.native_amount)*-1:parseFloat(k.native_amount),it=k.type==="withdrawal"?parseFloat(k.amount)*-1:parseFloat(k.amount);rt.transactions.push({description:k.description,id:M.id,type:k.type,amount_raw:it,amount:f(it,k.currency_code),native_amount_raw:ot,native_amount:f(ot,k.native_currency_code)})}nt.push(rt)}u.push({name:C.attributes.name,order:C.attributes.order,id:C.id,balance_raw:parseFloat(C.attributes.current_balance),balance:f(C.attributes.current_balance,C.attributes.currency_code),native_balance_raw:parseFloat(C.attributes.native_current_balance),native_balance:f(C.attributes.native_current_balance,C.attributes.native_currency_code),groups:nt}),l++,l===i&&(u.sort((B,M)=>B.order-M.order),this.accountList=u,this.loadingAccounts=!1,window.store.set(n,u))})})}}})},init(){Promise.all([v("viewRange","1M"),v("autoConversion",!1),v("language","en_US")]).then(t=>{this.autoConversion=t[1],J=!0,this.loadChart(),this.loadAccounts()}),window.store.observe("end",()=>{J&&(H=null,this.accountList=[],this.loadChart(),this.loadAccounts())}),window.store.observe("autoConversion",()=>{J&&(this.loadChart(),this.loadAccounts())})}});let zt=class{dashboard(e,n){let a=g(e,"y-MM-dd"),r=g(n,"y-MM-dd");return O.get("/api/v2/chart/budget/dashboard",{params:{start:a,end:r}})}},V=[],T=null,F=null,Z=!1;const Ht=()=>({loading:!1,autoConversion:!1,loadChart(){if(this.loading!==!0){if(this.loading=!0,F!==null){this.drawChart(this.generateOptions(F)),this.loading=!1;return}this.getFreshData()}},drawChart(t){if(T!==null){T.data.datasets=t.data.datasets,T.update();return}T=new S(document.querySelector("#budget-chart"),t)},getFreshData(){const t=new Date(window.store.get("start")),e=new Date(window.store.get("end")),n=P("dashboard-budgets-chart",t,e),a=window.store.get("cacheValid");let r=window.store.get(n);if(a&&typeof r<"u"){F=r,this.drawChart(this.generateOptions(F)),this.loading=!1;return}new zt().dashboard(t,e,null).then(i=>{F=i.data,this.drawChart(this.generateOptions(F)),window.store.set(n,F),this.loading=!1})},generateOptions(t){V=[];let e=N("column");e.options.locale=window.store.get("locale").replace("_","-"),e.options.plugins={tooltip:{callbacks:{title:function(n){return n.label},label:function(n){let a=n.dataset.label||"";return a&&(a+=": "),a+" "+f(n.parsed.y,V[n.parsed.x]??"EUR")}}}},e.data={labels:[],datasets:[{label:p.t("firefly.spent"),data:[],borderWidth:1,stack:1,backgroundColor:j("spent","background"),borderColor:j("spent","border")},{label:p.t("firefly.left"),data:[],borderWidth:1,stack:1,backgroundColor:j("left","background"),borderColor:j("left","border")},{label:p.t("firefly.overspent"),data:[],borderWidth:1,stack:1,backgroundColor:j("overspent","background"),borderColor:j("overspent","border")}]};for(const n in t)if(t.hasOwnProperty(n)){let a=t[n],r=a.label+" ("+a.currency_code+")";e.data.labels.push(r),this.autoConversion&&(V.push(a.native_currency_code),e.data.datasets[0].data.push(parseFloat(a.native_entries.spent)*-1),e.data.datasets[1].data.push(parseFloat(a.native_entries.left)),e.data.datasets[2].data.push(parseFloat(a.native_entries.overspent))),this.autoConversion||(V.push(a.currency_code),e.data.datasets[0].data.push(parseFloat(a.entries.spent)*-1),e.data.datasets[1].data.push(parseFloat(a.entries.left)),e.data.datasets[2].data.push(parseFloat(a.entries.overspent)))}return e.options.scales={y:{ticks:{callback:function(n){return f(n,V[0]??"EUR")}}}},e},init(){Promise.all([v("autoConversion",!1)]).then(t=>{this.autoConversion=t[0],Z=!0,this.loading===!1&&this.loadChart()}),window.store.observe("end",()=>{Z&&this.loading===!1&&(F=null,this.loadChart())}),window.store.observe("autoConversion",t=>{Z&&(this.autoConversion=t,this.loading===!1&&this.loadChart())})}});class Jt{dashboard(e,n){let a=g(e,"y-MM-dd"),r=g(n,"y-MM-dd");return O.get("/api/v2/chart/category/dashboard",{params:{start:a,end:r}})}}let ut=[],K=null,W=null,Q=!1;const Zt=()=>({loading:!1,autoConversion:!1,generateOptions(t){ut=[];let e=N("column"),n={};for(const r in t)if(t.hasOwnProperty(r)){let o=t[r],i=o.currency_code;this.autoConversion&&(i=o.native_currency_code),n.hasOwnProperty(i)||(n[i]={name:i,yAxisID:"",data:{}},ut.push(i))}for(const r in t)if(t.hasOwnProperty(r)){let o=t[r],i=o.currency_code;this.autoConversion&&(i=o.native_currency_code);for(const l in n)if(n.hasOwnProperty(l)){let u=0;i===l&&(u=parseFloat(o.amount),""+o.currency_code,this.autoConversion&&(u=parseFloat(o.native_amount),""+o.native_currency_code)),n[l].data.hasOwnProperty(o.label)&&(n[l].data[o.label]=n[l].data[o.label]+u),n[l].data.hasOwnProperty(o.label)||(n[l].data[o.label]=u)}e.data.labels.includes(o.label)||e.data.labels.push(o.label)}let a=0;for(const r in n){let o="y"+r,i={label:r,currency_code:r,yAxisID:o,data:[]};for(const l in n[r].data)i.data.push(n[r].data[l]);e.data.datasets.push(i),e.options.scales.hasOwnProperty(o)||(e.options.scales[o]={beginAtZero:!0,type:"linear",position:a===1?"right":"left",ticks:{callback:function(l,u,d){return f(l,r)}}},a++)}return e},drawChart(t){if(K!==null){K.options=t.options,K.data=t.data,K.update();return}K=new S(document.querySelector("#category-chart"),t)},getFreshData(){const t=new Date(window.store.get("start")),e=new Date(window.store.get("end")),n=P("dashboard-categories-chart",t,e),a=window.store.get("cacheValid");let r=window.store.get(n);if(a&&typeof r<"u"){W=r,this.drawChart(this.generateOptions(W)),this.loading=!1;return}new Jt().dashboard(t,e,null).then(i=>{W=i.data,this.drawChart(this.generateOptions(i.data)),window.store.set(n,W),this.loading=!1})},loadChart(){if(this.loading!==!0){if(this.loading=!0,W!==null){this.drawChart(this.generateOptions(W)),this.loading=!1;return}this.getFreshData()}},init(){Promise.all([v("autoConversion",!1)]).then(t=>{this.autoConversion=t[0],Q=!0,this.loadChart()}),window.store.observe("end",()=>{Q&&(this.chartData=null,this.loadChart())}),window.store.observe("autoConversion",t=>{Q&&(this.autoConversion=t,this.loadChart())})}});S.register({SankeyController:vt,Flow:mt});const ct="dashboard-sankey-data";let X=!1,R=null,D=[],y=!1,s={category:null,unknown_category:null,in:null,out:null,unknown_source:null,unknown_dest:null,unknown_account:null,expense_account:null,revenue_account:null,budget:null,unknown_budget:null,all_money:null};const dt=function(t){return t.includes(s.revenue_account)?"forestgreen":t.includes("("+s.in+",")?"green":t.includes(s.budget)||t.includes(s.unknown_budget)?"Orchid":t.includes("("+s.out+",")?"MediumOrchid":t.includes(s.all_money)?"blue":"red"};function L(t,e,n,a){if(t==="category"&&e!==null&&n==="in")return s.category+' "'+e+'" ('+s.in+(y?", "+a+")":")");if(t==="category"&&e===null&&n==="in")return s.unknown_category+" ("+s.in+(y?", "+a+")":")");if(t==="category"&&e!==null&&n==="out")return s.category+' "'+e+'" ('+s.out+(y?", "+a+")":")");if(t==="category"&&e===null&&n==="out")return s.unknown_category+" ("+s.out+(y?", "+a+")":")");if(t==="account"&&e===null&&n==="in")return s.unknown_source+(y?" ("+a+")":"");if(t==="account"&&e!==null&&n==="in")return s.revenue_account+'"'+e+'"'+(y?" ("+a+")":"");if(t==="account"&&e===null&&n==="out")return s.unknown_dest+(y?" ("+a+")":"");if(t==="account"&&e!==null&&n==="out")return s.expense_account+' "'+e+'"'+(y?" ("+a+")":"");if(t==="budget"&&e!==null)return s.budget+' "'+e+'"'+(y?" ("+a+")":"");if(t==="budget"&&e===null)return s.unknown_budget+(y?" ("+a+")":"");console.error('Cannot handle: type:"'+t+'", dir: "'+n+'"')}function E(t,e,n){if(t==="category"&&e!==null)return s.category+' "'+e+'"'+(y?" ("+n+")":"");if(t==="category"&&e===null)return s.unknown_category+(y?" ("+n+")":"");if(t==="account"&&e===null)return s.unknown_account+(y?" ("+n+")":"");if(t==="account"&&e!==null)return e+(y?" ("+n+")":"");if(t==="budget"&&e!==null)return s.budget+' "'+e+'"'+(y?" ("+n+")":"");if(t==="budget"&&e===null)return s.unknown_budget+(y?" ("+n+")":"");console.error('Cannot handle: type:"'+t+'"')}const Qt=()=>({loading:!1,autoConversion:!1,generateOptions(){let t=N("sankey"),e={},n={};for(let r in D)if(D.hasOwnProperty(r)){let o=D[r];for(let i in o.attributes.transactions)if(o.attributes.transactions.hasOwnProperty(i)){let l=o.attributes.transactions[i],u=this.autoConversion?l.native_currency_code:l.currency_code,d=this.autoConversion?parseFloat(l.native_amount):parseFloat(l.amount),h;if(l.type==="deposit"){let c=L("category",l.category_name,"in",u),_=L("account",l.source_name,"in",u);n[c]=E("category",l.category_name,u),n[_]=E("account",l.source_name,u),h=_+"-"+c+"-"+u,e.hasOwnProperty(h)||(e[h]={from:_,to:c,amount:0}),e[h].amount+=d,h=c+"-"+s.all_money+"-"+u,e.hasOwnProperty(h)||(e[h]={from:c,to:s.all_money+(this.autoConversion?" ("+u+")":""),amount:0}),e[h].amount+=d}if(l.type==="withdrawal"){let c=L("budget",l.budget_name,"out",u);n[c]=E("budget",l.budget_name,u),h=s.all_money+"-"+c+"-"+u,e.hasOwnProperty(h)||(e[h]={from:s.all_money+(this.autoConversion?" ("+u+")":""),to:c,amount:0}),e[h].amount+=d;let _=L("category",l.category_name,"out",u);n[_]=E("category",l.category_name,u),h=c+"-"+_+"-"+u,e.hasOwnProperty(h)||(e[h]={from:c,to:_,amount:0}),e[h].amount+=d;let w=L("account",l.destination_name,"out",u);n[w]=E("account",l.destination_name,u),h=_+"-"+w+"-"+u,e.hasOwnProperty(h)||(e[h]={from:_,to:w,amount:0}),e[h].amount+=d}}}let a={label:"Firefly III dashboard sankey chart",data:[],colorFrom:r=>dt(r.dataset.data[r.dataIndex]?r.dataset.data[r.dataIndex].from:""),colorTo:r=>dt(r.dataset.data[r.dataIndex]?r.dataset.data[r.dataIndex].to:""),colorMode:"gradient",labels:n,size:"min"};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r];a.data.push({from:o.from,to:o.to,flow:o.amount})}return t.data.datasets.push(a),t},drawChart(t){if(R!==null){R.data.datasets=t.data.datasets,R.update();return}R=new S(document.querySelector("#sankey-chart"),t)},getFreshData(){const t=new Date(window.store.get("start")),e=new Date(window.store.get("end")),n=P(ct,t,e),a=window.store.get("cacheValid");let r=window.store.get(n);if(a&&typeof r<"u"){D=r,this.drawChart(this.generateOptions()),this.loading=!1;return}let o={start:g(t,"y-MM-dd"),end:g(e,"y-MM-dd"),type:"withdrawal,deposit",page:1};this.downloadTransactions(o)},downloadTransactions(t){const e=new Date(window.store.get("start")),n=new Date(window.store.get("end")),a=P(ct,e,n);new $t().list(t).then(o=>{if(D=[...D,...o.data.data],parseInt(o.data.meta.pagination.total_pages)>t.page){t.page++,this.downloadTransactions(t);return}window.store.set(a,D),this.drawChart(this.generateOptions()),this.loading=!1})},loadChart(){if(this.loading!==!0){if(this.loading=!0,D.length!==0){this.drawChart(this.generateOptions()),this.loading=!1;return}this.getFreshData()}},init(){D=[],Promise.all([v("autoConversion",!1)]).then(t=>{this.autoConversion=t[0],y=t[0],s.all_money=p.t("firefly.all_money"),s.category=p.t("firefly.category"),s.in=p.t("firefly.money_flowing_in"),s.out=p.t("firefly.money_flowing_out"),s.unknown_category=p.t("firefly.unknown_category_plain"),s.unknown_source=p.t("firefly.unknown_source_plain"),s.unknown_dest=p.t("firefly.unknown_dest_plain"),s.unknown_account=p.t("firefly.unknown_any_plain"),s.unknown_budget=p.t("firefly.unknown_budget_plain"),s.expense_account=p.t("firefly.expense_account"),s.revenue_account=p.t("firefly.revenue_account"),s.budget=p.t("firefly.budget"),X=!0,this.loadChart()}),window.store.observe("end",()=>{X&&(this.transactions=[],this.loadChart())}),window.store.observe("autoConversion",t=>{X&&(this.autoConversion=t,this.loadChart())})}});let tt=!1,b={};function gt(t){return new Vt().list(t).then(n=>{let a=n.data.data;for(let r in a)if(a.hasOwnProperty(r)){let o=a[r];if(o.attributes.active&&o.attributes.pay_dates.length>0){let i=o.attributes.object_group_id===null?0:o.attributes.object_group_id,l=o.attributes.object_group_title===null?p.t("firefly.default_group_title_name_plain"):o.attributes.object_group_title,u=o.attributes.object_group_order===null?0:o.attributes.object_group_order;b.hasOwnProperty(i)||(b[i]={id:i,title:l,order:u,payment_info:{},bills:[]});let d={id:o.id,name:o.attributes.name,amount_min:o.attributes.amount_min,amount_max:o.attributes.amount_max,amount:(parseFloat(o.attributes.amount_max)+parseFloat(o.attributes.amount_min))/2,currency_code:o.attributes.currency_code,native_amount_min:o.attributes.native_amount_min,native_amount_max:o.attributes.native_amount_max,native_amount:(parseFloat(o.attributes.native_amount_max)+parseFloat(o.attributes.native_amount_min))/2,native_currency_code:o.attributes.native_currency_code,transactions:[],pay_dates:o.attributes.pay_dates,paid:o.attributes.paid_dates.length>0};d.expected_amount=t.autoConversion?f(d.native_amount,d.native_currency_code):f(d.amount,d.currency_code),d.expected_times=p.t("firefly.subscr_expected_x_times",{times:o.attributes.pay_dates.length,amount:d.expected_amount});for(let h in o.attributes.paid_dates)if(o.attributes.paid_dates.hasOwnProperty(h)){const c=o.attributes.paid_dates[h];let _=100;t.autoConversion&&(_=Math.round(-100+parseFloat(c.native_amount)*-1/parseFloat(d.native_amount)*100)),t.autoConversion||(_=Math.round(-100+parseFloat(c.amount)*-1/parseFloat(d.amount)*100));let w={amount:t.autoConversion?f(c.native_amount,c.native_currency_code):f(c.amount,c.currency_code),percentage:_,date:g(new Date(c.date),"PP"),foreign_amount:null};c.foreign_currency_code!==null&&(w.foreign_amount=t.autoConversion?c.foreign_native_amount:c.foreign_amount,w.foreign_currency_code=t.autoConversion?c.native_currency_code:c.foreign_currency_code),d.transactions.push(w)}if(b[i].bills.push(d),o.attributes.paid_dates.length===0){const h=o.attributes.pay_dates.length*d.amount,c=o.attributes.pay_dates.length*d.native_amount;b[i].payment_info.hasOwnProperty(d.currency_code)||(b[i].payment_info[d.currency_code]={currency_code:d.currency_code,paid:0,unpaid:0,native_currency_code:d.native_currency_code,native_paid:0,native_unpaid:0}),b[i].payment_info[d.currency_code].unpaid+=h,b[i].payment_info[d.currency_code].native_unpaid+=c}if(o.attributes.paid_dates.length>0){for(let h in o.attributes.paid_dates)if(o.attributes.paid_dates.hasOwnProperty(h)){let c=o.attributes.paid_dates[h];b[i].payment_info.hasOwnProperty(c.currency_code)||(b[i].payment_info[c.currency_code]={currency_code:d.currency_code,paid:0,unpaid:0,native_currency_code:d.native_currency_code,native_paid:0,native_unpaid:0});const _=parseFloat(c.amount)*-1,w=parseFloat(c.native_amount)*-1;b[i].payment_info[c.currency_code].paid+=_,b[i].payment_info[c.currency_code].native_paid+=w}}}}return parseInt(n.data.meta.pagination.total_pages)>t.page?(t.page++,gt(t)):Promise.resolve()})}const Xt=()=>({loading:!1,autoConversion:!1,subscriptions:[],startSubscriptions(){this.loading=!0;let t=new Date(window.store.get("start")),e=new Date(window.store.get("end"));const n=window.store.get("cacheValid");let a=window.store.get(P("subscriptions-data-dashboard",t,e));n&&typeof a<"u",b={},this.subscriptions=[];let r={start:g(t,"y-MM-dd"),end:g(e,"y-MM-dd"),autoConversion:this.autoConversion,page:1};gt(r).then(()=>{let o=Object.values(b);for(let i in o)if(o.hasOwnProperty(i)){let l=o[i];const u=Object.keys(l.payment_info);l.col_size=u.length===1?"col-6 offset-3":"col-6",l.chart_width=u.length===1?"50%":"100%",l.payment_length=u.length,this.subscriptions.push(l)}this.loading=!1})},drawPieChart(t,e,n){let a="#pie_"+t+"_"+n.currency_code;const r=this.autoConversion?n.native_unpaid:n.unpaid,o=this.autoConversion?n.native_paid:n.paid,i=this.autoConversion?n.native_currency_code:n.currency_code,u={type:"doughnut",data:{labels:[p.t("firefly.paid"),p.t("firefly.unpaid")],datasets:[{label:p.t("firefly.subscriptions_in_group",{title:e}),data:[o,r],backgroundColor:["rgb(54, 162, 235)","rgb(255, 99, 132)"],hoverOffset:4}]},options:{plugins:{tooltip:{callbacks:{label:function(h){return h.dataset.label+": "+f(h.raw,i)}}}}}};var d=S.getChart(document.querySelector(a));typeof d<"u"&&d.destroy(),new S(document.querySelector(a),u)},init(){Promise.all([v("autoConversion",!1)]).then(t=>{this.autoConversion=t[0],tt=!0,this.loading===!1&&this.startSubscriptions()}),window.store.observe("end",()=>{tt&&this.loading===!1&&this.startSubscriptions()}),window.store.observe("autoConversion",t=>{tt&&(this.autoConversion=t,this.loading===!1&&this.startSubscriptions())})}});let x={},et=!1;const ht="dashboard-piggies-data",te=()=>({loading:!1,autoConversion:!1,sankeyGrouping:"account",piggies:[],getFreshData(){const t=new Date(window.store.get("start")),e=new Date(window.store.get("end")),n=P(ht,t,e),a=window.store.get("cacheValid");let r=window.store.get(n);if(a&&typeof r<"u"){x=r,this.parsePiggies(),this.loading=!1;return}let o={start:g(t,"y-MM-dd"),end:g(e,"y-MM-dd"),page:1};this.downloadPiggyBanks(o)},downloadPiggyBanks(t){const e=new Date(window.store.get("start")),n=new Date(window.store.get("end")),a=P(ht,e,n);new Kt().list(t).then(o=>{if(x=[...x,...o.data.data],parseInt(o.data.meta.pagination.total_pages)>t.page){t.page++,this.downloadPiggyBanks(t);return}window.store.set(a,x),this.parsePiggies(),this.loading=!1})},parsePiggies(){let t=[];for(let e in x)if(x.hasOwnProperty(e)){let n=x[e];if(n.attributes.percentage>=100||n.attributes.percentage===0)continue;let a=n.object_group_title??p.t("firefly.default_group_title_name_plain");t.hasOwnProperty(a)||(t[a]={id:n.object_group_id??0,title:a,order:n.object_group_order??0,piggies:[]});let r={id:n.id,name:n.attributes.name,percentage:parseInt(n.attributes.percentage),amount:this.autoConversion?n.attributes.native_current_amount:n.attributes.current_amount,left_to_save:this.autoConversion?n.attributes.native_left_to_save:n.attributes.left_to_save,target_amount:this.autoConversion?n.attributes.native_target_amount:n.attributes.target_amount,save_per_month:this.autoConversion?n.attributes.native_save_per_month:n.attributes.save_per_month,currency_code:this.autoConversion?n.attributes.native_currency_code:n.attributes.currency_code};t[a].piggies.push(r)}this.piggies=Object.values(t)},loadPiggyBanks(){if(this.loading!==!0){if(this.loading=!0,this.piggies.length!==0){this.parsePiggies(),this.loading=!1;return}this.getFreshData()}},init(){x=[],Promise.all([v("autoConversion",!1)]).then(t=>{et=!0,this.autoConversion=t[0],this.loadPiggyBanks()}),window.store.observe("end",()=>{et&&(x=[],this.loadPiggyBanks())}),window.store.observe("autoConversion",t=>{et&&(this.autoConversion=t,this.loadPiggyBanks())})}});S.register({LineController:Ct,LineElement:kt,ArcElement:Pt,BarController:Dt,TimeScale:xt,PieController:Ot,BarElement:Mt,Filler:Ft,Colors:St,LinearScale:At,CategoryScale:Bt,PointElement:jt,Tooltip:Wt,Legend:It});const pt={dates:wt,boxes:Et,accounts:Ut,budgets:Ht,categories:Zt,sankey:Qt,subscriptions:Xt,piggies:te};function _t(t){Object.keys(t).forEach(e=>{let n=t[e]();Alpine.data(e,()=>n)}),Alpine.start()}document.addEventListener("firefly-iii-bootstrapped",()=>{console.log("Loaded through event listener."),_t(pt)});window.bootstrapped&&(console.log("Loaded through window variable."),_t(pt));
