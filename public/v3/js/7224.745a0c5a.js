"use strict";(self["webpackChunkfirefly_iii"]=self["webpackChunkfirefly_iii"]||[]).push([[7224],{7224:(t,e,r)=>{r.r(e),r.d(e,{default:()=>D});var n=r(9835),a=r(6970);const i={class:"q-ml-sm"},o=(0,n._)("br",null,null,-1),s=["title"],l={key:0};function u(t,e,r,u,m,c){const d=(0,n.up)("q-item-label"),p=(0,n.up)("q-item-section"),h=(0,n.up)("q-item"),f=(0,n.up)("q-separator"),g=(0,n.up)("q-icon"),v=(0,n.up)("q-card-section"),_=(0,n.up)("q-card");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(_,{bordered:""},{default:(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n._)("strong",null,(0,a.zw)(t.$t("firefly.net_worth")),1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(f),(0,n.Wm)(v,{horizontal:""},{default:(0,n.w5)((()=>[(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,{color:m.primary>0?"positive":"negative",name:"fas fa-chart-line",size:"50px"},null,8,["color"])])),_:1}),(0,n.Wm)(f,{vertical:""}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n._)("strong",null,(0,a.zw)(c.formatAmount(m.currency,m.primary)),1),o,(0,n._)("small",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(m.netWorth,((t,e)=>((0,n.wg)(),(0,n.iD)("span",null,[(0,n._)("span",{title:c.formatAmount(t.native_code,t.native_sum)},(0,a.zw)(c.formatAmount(t.code,t.sum)),9,s),e+1!==m.netWorth.length?((0,n.wg)(),(0,n.iD)("span",l," + ")):(0,n.kq)("",!0)])))),256))])])),_:1})])),_:1})])),_:1})])}var m=r(3555),c=r(1569),d=r(8898);class p{get(t){let e=(0,d.Z)(t,"y-MM-dd");return c.api.get("/api/v2/net-worth",{params:{date:e}})}}const h={name:"NetWorthInsightBox",data(){return{netWorth:[],primary:0,currency:"EUR",store:null}},mounted(){this.store=(0,m.S)(),this.store.$onAction((({name:t,$store:e,args:r,after:n,onError:a})=>{n((e=>{"setRange"===t&&this.triggerUpdate()}))})),this.triggerUpdate()},methods:{triggerUpdate:function(){if(null!==this.store.getRange.start&&null!==this.store.getRange.end){this.unpaid=[];const t=new Date(this.store.getRange.start),e=new Date(this.store.getRange.end),r=new Date;let n=e;r>=t&&r<=e&&(n=r),this.currency=this.store.getCurrencyCode,(new p).get(n).then((t=>this.parseResponse(t.data)))}},parseResponse(t){for(let e in t)if(t.hasOwnProperty(e)){const r=t[e],n=r.converted&&r.native_id!==r.id&&0!==parseFloat(r.native_sum);r.converted&&(n||r.native_id===r.id)&&(this.primary=this.primary+parseFloat(r.native_sum)),r.converted||(this.primary=this.primary+parseFloat(r.sum)),0!==parseFloat(r.sum)&&this.netWorth.push({sum:r.sum,code:r.code,native_sum:r.converted?r.native_sum:r.sum,native_code:r.converted?r.native_code:r.code,native:n})}},formatAmount:function(t,e){var r,n;return Intl.NumberFormat(null!==(r=null===(n=this.store)||void 0===n?void 0:n.getLocale)&&void 0!==r?r:"en-US",{style:"currency",currency:t}).format(e)}}};var f=r(1639),g=r(4458),v=r(490),_=r(1233),w=r(3115),y=r(926),W=r(3190),q=r(2857),Z=r(9984),R=r.n(Z);const b=(0,f.Z)(h,[["render",u]]),D=b;R()(h,"components",{QCard:g.Z,QItem:v.Z,QItemSection:_.Z,QItemLabel:w.Z,QSeparator:y.Z,QCardSection:W.Z,QIcon:q.Z})}}]);