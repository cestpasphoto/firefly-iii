var y=Object.defineProperty;var w=(i,t,e)=>t in i?y(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var r=(i,t,e)=>(w(i,typeof t!="symbol"?t+"":t,e),e);import{d as v,f as b}from"./format-money-801d83e5.js";import{f as g,i as h}from"./vendor-a521728f.js";import{G as E}from"./get-80423852.js";import{p as _}from"./parse-downloaded-splits-91e990b4.js";import"./create-empty-split-96981b0e.js";class l{constructor(t){if(this.constructor===l)throw new Error("It's abstract class");this.context=t}event_show(){this.context.typeElement.hideError(),this.context.typeElement.element.value=this.context.value,this.context.element.dispatchEvent(new CustomEvent("show"))}event_shown(){this.context.element.dispatchEvent(new CustomEvent("shown"))}event_hide(){this.context.element.dispatchEvent(new CustomEvent("hide"))}event_hidden(){this.context.element.dispatchEvent(new CustomEvent("hidden"))}init(){throw new Error("Method `init` not define!")}enable(){throw new Error("Method `enable` not define!")}disable(){throw new Error("Method `disable` not define!")}hide(){throw new Error("Method `hide` not define!")}}class L extends l{init(){this.popover=new bootstrap.Popover(this.context.element,{container:"body",content:this.context.typeElement.create(),html:!0,customClass:"dark-editable",title:this.context.title}),this.context.element.addEventListener("show.bs.popover",()=>{this.event_show()}),this.context.element.addEventListener("shown.bs.popover",()=>{this.event_shown()}),this.context.element.addEventListener("hide.bs.popover",()=>{this.event_hide()}),this.context.element.addEventListener("hidden.bs.popover",()=>{this.event_hidden()}),document.addEventListener("click",t=>{const e=t.target;if(e===this.popover.tip||e===this.context.element)return;let n=e;for(;n=n.parentNode;)if(n===this.popover.tip)return;this.hide()})}enable(){this.popover.enable()}disable(){this.popover.disable()}hide(){this.popover.hide()}}class T extends l{init(){const t=()=>{if(!this.context.disabled){const e=this.context.typeElement.create();this.event_show(),this.context.element.removeEventListener("click",t),this.context.element.innerHTML="",this.context.element.append(e),this.event_shown()}};this.context.element.addEventListener("click",t)}enable(){}disable(){}hide(){this.event_hide(),this.context.element.innerHTML=this.context.value,setTimeout(()=>{this.init(),this.event_hidden()},100)}}class c{constructor(t){r(this,"context",null);r(this,"element",null);r(this,"error",null);r(this,"form",null);r(this,"load",null);r(this,"buttonGroup",null);r(this,"buttons",{success:null,cancel:null});if(this.constructor===c)throw new Error("It's abstract class");this.context=t}create(){throw new Error("Method `create` not define!")}createContainer(t){const e=document.createElement("div");this.element=t,this.error=this.createContainerError(),this.form=this.createContainerForm(),this.load=this.createContainerLoad(),this.buttons.success=this.createButtonSuccess(),this.buttons.cancel=this.createButtonCancel();const n=document.createElement("div");n.classList.add("col-12");const s=document.createElement("label");s.classList.add("visually-hidden"),s.for=t.id,n.append(s,t);const o=document.createElement("div");return o.classList.add("col-12"),this.buttonGroup=this.createButtonGroup(),this.buttonGroup.append(this.buttons.success,this.buttons.cancel),o.append(this.buttonGroup),this.form.append(n,o),e.append(this.error,this.form),e}createButtonGroup(){const t=document.createElement("div");return t.classList.add("btn-group","btn-group-sm"),t}createContainerError(){const t=document.createElement("div");return t.classList.add("text-danger","fst-italic","mb-2","fw-bold"),t.style.display="none",t}createContainerForm(){const t=document.createElement("form");return t.classList.add("row","row-cols-lg-auto","g-3","align-items-center"),t.addEventListener("submit",async e=>{e.preventDefault();const n=this.getValue();if(this.context.send&&this.context.pk&&this.context.url&&this.context.value!==n){this.showLoad();let s;try{const o=await this.ajax(n);o.ok?s=await this.context.success(o,n):s=await this.context.error(o,n)||`${o.status} ${o.statusText}`}catch(o){console.error(o),s=o}s?(this.setError(s),this.showError()):(this.setError(null),this.hideError(),this.context.value=this.getValue(),this.context.modeElement.hide(),this.initText()),this.hideLoad()}else this.context.value=this.getValue(),this.context.modeElement.hide(),this.initText();this.context.element.dispatchEvent(new CustomEvent("save"))}),t}createContainerLoad(){const t=document.createElement("div");t.style.display="none",t.style.position="absolute",t.style.background="white",t.style.width="100%",t.style.height="100%",t.style.top=0,t.style.left=0;const e=document.createElement("div");return e.classList.add("dark-editable-loader"),t.append(e),t}createButton(){const t=document.createElement("button");return t.type="button",t.classList.add("btn","btn-sm"),t.style.color="transparent",t.style.textShadow="0 0 0 white",t}createButtonSuccess(){const t=this.createButton();return t.type="submit",t.classList.add("btn-success"),t.innerHTML="✔",t}createButtonCancel(){const t=this.createButton();t.classList.add("btn-danger");const e=document.createElement("div");return e.innerHTML="✖",t.append(e),t.addEventListener("click",()=>{this.context.modeElement.hide()}),t}hideLoad(){this.load.style.display="none"}showLoad(){this.load.style.display="block"}ajax(t){let e=this.context.url,n,s=!1;console.log(this.context),this.context.options.formType==="journal_description"&&(s=!0,n={transactions:[{transaction_journal_id:this.context.options.journalId,description:t}]}),s===!1&&console.error('Cannot deal with form type "'+this.context.formType+'"');const o={headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content}};return o.method=this.context.ajaxOptions.method,this.context.options.method&&(o.method=this.context.options.method),o.method==="POST"||this.context.options.method==="PUT"?o.body=JSON.stringify(n):e+="?"+new URLSearchParams(form).toString(),fetch(e,o)}async successResponse(t,e){}async errorResponse(t,e){}setError(t){this.error.innerHTML=t}showError(){this.error.style.display="block"}hideError(){this.error&&(this.error.style.display="none")}createElement(t){const e=document.createElement(t);return console.log(e),e.classList.add("form-control"),this.context.required&&(e.required=this.context.required),this.add_focus(e),e}add_focus(t){this.context.element.addEventListener("shown",function(){t.focus()})}initText(){return this.context.value===""?(this.context.element.innerHTML=this.context.emptytext,!0):(this.context.element.innerHTML=this.context.value,!1)}initOptions(){}getValue(){return this.element.value}}class M extends c{create(){const t=this.createElement("input"),e=this.context.element.id+"_input";return t.type=this.context.type,t.id=e,t.autocomplete="off",t.placeholder=this.context.element.innerText,t.classList.add("form-control","form-control-md"),this.createContainer(t)}}class C extends c{create(){const t=this.createElement("textarea");return this.createContainer(t)}}class k extends c{create(){const t=this.createElement("select");return this.context.source.forEach(e=>{const n=document.createElement("option");n.value=e.value,n.innerHTML=e.text,t.append(n)}),this.createContainer(t)}initText(){if(this.context.element.innerHTML=this.context.emptytext,this.context.value!==""&&this.context.source.length>0)for(const t in this.context.source){const e=this.context.source[t];if(e.value==this.context.value)return this.context.element.innerHTML=e.text,!1}return!0}initOptions(){this.context.get_opt("source",[]),typeof this.context.source=="string"&&this.context.source!==""&&(this.context.source=JSON.parse(this.context.source))}}class f extends c{create(){const t=this.createElement("input");return t.type="date",this.createContainer(t)}initText(){return this.value===""?(this.context.element.innerHTML=this.context.emptytext,!0):(this.context.element.innerHTML=moment(this.context.value).format(this.context.viewformat),!1)}initOptions(){this.context.get_opt("format","YYYY-MM-DD"),this.context.get_opt("viewformat","YYYY-MM-DD")}}class D extends f{create(){const t=this.createElement("input");return t.type="datetime-local",this.createContainer(t)}initOptions(){this.context.get_opt("format","YYYY-MM-DD HH:mm"),this.context.get_opt("viewformat","YYYY-MM-DD HH:mm"),this.context.value=moment(this.context.value).format("YYYY-MM-DDTHH:mm")}}class Y{constructor(t,e={}){r(this,"modeElement",null);r(this,"typeElement",null);r(this,"mode",null);r(this,"type",null);r(this,"emptytext",null);r(this,"viewformat",null);r(this,"pk",null);r(this,"name",null);this.element=t,this.options=e,this.init_options(),this.typeElement=this.route_type(),this.typeElement.initOptions(),this.modeElement=this.route_mode(),this.modeElement.init(),this.init_text(),this.init_style(),this.disabled&&this.disable(),this.element.dispatchEvent(new CustomEvent("init"))}get_opt(t,e){var n,s;return this[t]=((n=this.element.dataset)==null?void 0:n[t])??((s=this.options)==null?void 0:s[t])??e}get_opt_bool(t,e){return this.get_opt(t,e),typeof this[t]!="boolean"&&(this[t]==="true"?this[t]=!0:this[t]==="false"?this[t]=!1:this[t]=e),this[t]}init_options(){var t,e,n,s;this.get_opt("value",this.element.innerHTML),this.get_opt("name",this.element.id),this.get_opt("pk",null),this.get_opt("title",""),this.get_opt("type","text"),this.get_opt("emptytext","Empty"),this.get_opt("mode","popup"),this.get_opt("url",null),this.get_opt("ajaxOptions",{}),this.ajaxOptions=Object.assign({method:"POST",dataType:"text"},this.ajaxOptions),this.get_opt_bool("send",!0),this.get_opt_bool("disabled",!1),this.get_opt_bool("required",!1),(t=this.options)!=null&&t.success&&typeof((e=this.options)==null?void 0:e.success)=="function"&&(this.success=this.options.success),(n=this.options)!=null&&n.error&&typeof((s=this.options)==null?void 0:s.error)=="function"&&(this.error=this.options.error)}init_text(){const t="dark-editable-element-empty";this.element.classList.remove(t),this.typeElement.initText()&&this.element.classList.add(t)}init_style(){this.element.classList.add("dark-editable-element")}route_mode(){switch(this.mode){default:throw new Error(`Mode ${this.mode} not found!`);case"popup":return new L(this);case"inline":return new T(this)}}route_type(){if(this.type.prototype instanceof c)return new this.type(this);if(typeof this.type=="string")switch(this.type){case"text":case"password":case"email":case"url":case"tel":case"number":case"range":case"time":return new M(this);case"textarea":return new C(this);case"select":return new k(this);case"date":return new f(this);case"datetime":return new D(this)}throw new Error("Undefined type")}async success(t,e){return await this.typeElement.successResponse(t,e)}async error(t,e){return await this.typeElement.errorResponse(t,e)}enable(){this.disabled=!1,this.element.classList.remove("dark-editable-element-disabled"),this.modeElement.enable()}disable(){this.disabled=!0,this.element.classList.add("dark-editable-element-disabled"),this.modeElement.enable()}setValue(t){this.value=t,this.init_text()}getValue(){return this.value}}function H(i){const t=parseInt(i.dataset.id),e=parseInt(i.dataset.group),n={pk:e,mode:"inline",url:"./api/v2/transactions/"+e,formType:"journal_description",journalId:t,method:"PUT"};new Y(i,n)}let I=function(){return{notifications:{error:{show:!1,text:"",url:""},success:{show:!1,text:"",url:""},wait:{show:!1,text:""}},groupProperties:{id:0,transactionType:"",transactionTypeTranslated:"",title:"",date:new Date},dateFields:["book_date","due_date","interest_date","invoice_date","payment_date","process_date"],metaFields:["external_id","internal_reference","sepa_batch_id","sepa_ct_id","sepa_ct_op","sepa_db","sepa_country","sepa_cc","sepa_ep","sepa_ci","external_url"],amounts:{},entries:[],pageProperties:{},formatMoney(i,t){return console.log("formatting",i,t),t===""&&(t="EUR"),b(i,t)},format(i){return g(i,h.t("config.date_time_fns"))},init(){this.notifications.wait.show=!0,this.notifications.wait.text=h.t("firefly.wait_loading_data");const i=window.location.href.split("/"),t=parseInt(i[i.length-1]);new E().show(t,{}).then(n=>{const s=n.data.data;this.groupProperties.id=parseInt(s.id),this.groupProperties.transactionType=s.attributes.transactions[0].type,this.groupProperties.transactionTypeTranslated=h.t("firefly."+s.attributes.transactions[0].type),this.groupProperties.title=s.attributes.title??s.attributes.transactions[0].description,this.entries=_(s.attributes.transactions,parseInt(s.id)),this.notifications.wait.show=!1}).then(()=>{for(let s in this.entries)if(this.entries.hasOwnProperty(s)){const o=this.entries[s].currency_code,a=this.entries[s].foreign_currency_code;this.amounts[o]===void 0&&(this.amounts[o]=0,this.amounts[o]+=parseFloat(this.entries[s].amount)),a!==null&&a!==""&&this.amounts[a]===void 0&&(this.amounts[a]=0,this.amounts[a]+=parseFloat(this.entries[s].foreign_amount)),parseInt(s)===0&&(this.groupProperties.date=this.entries[s].date)}const n=document.querySelectorAll(".journal_description");for(const s in n)if(n.hasOwnProperty(s)){const o=n[s];o.addEventListener("save",function(a){parseInt(a.currentTarget.dataset.id);const d=parseInt(a.currentTarget.dataset.group),u=parseInt(a.currentTarget.dataset.length),p=a.currentTarget.textContent;console.log(u),u===1&&(document.querySelector('.group_title[data-group="'+d+'"]').textContent=p,document.querySelector('.group_title_title[data-group="'+d+'"]').textContent=p)}),H(o)}}).catch(n=>{this.notifications.error.show=!0,this.notifications.error.text=n.message})}}},m={show:I,dates:v};function x(){Object.keys(m).forEach(i=>{console.log(`Loading page component "${i}"`);let t=m[i]();Alpine.data(i,()=>t)}),Alpine.start()}document.addEventListener("firefly-iii-bootstrapped",()=>{console.log("Loaded through event listener."),x()});window.bootstrapped&&(console.log("Loaded through window variable."),x());
