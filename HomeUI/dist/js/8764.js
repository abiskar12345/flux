"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[8764],{70660:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(19350);const n={start(e){return(0,a.Z)().get("/benchmark/start",{headers:{zelidauth:e}})},restart(e){return(0,a.Z)().get("/benchmark/restart",{headers:{zelidauth:e}})},getStatus(){return(0,a.Z)().get("/benchmark/getstatus")},restartNodeBenchmarks(e){return(0,a.Z)().get("/benchmark/restartnodebenchmarks",{headers:{zelidauth:e}})},signFluxTransaction(e,t){return(0,a.Z)().get(`/benchmark/signzelnodetransaction/${t}`,{headers:{zelidauth:e}})},helpSpecific(e){return(0,a.Z)().get(`/benchmark/help/${e}`)},help(){return(0,a.Z)().get("/benchmark/help")},stop(e){return(0,a.Z)().get("/benchmark/stop",{headers:{zelidauth:e}})},getBenchmarks(){return(0,a.Z)().get("/benchmark/getbenchmarks")},getInfo(){return(0,a.Z)().get("/benchmark/getinfo")},tailBenchmarkDebug(e){return(0,a.Z)().get("/flux/tailbenchmarkdebug",{headers:{zelidauth:e}})},justAPI(){return(0,a.Z)()},cancelToken(){return a.S}}},99932:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var a=function(){var e=this,t=e._self._c;return t("b-card",[t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1",attrs:{id:"stop-benchmark",variant:"outline-primary",size:"md"}},[e._v(" Stop Benchmark ")]),t("b-popover",{ref:"popover",attrs:{target:"stop-benchmark",triggers:"click",show:e.popoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.popoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("span",[e._v("Are You Sure?")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:e.onClose}},[t("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:e.onClose}},[e._v(" Cancel ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:e.onOk}},[e._v(" Stop Benchmark ")])],1)]),t("b-modal",{attrs:{id:"modal-center",centered:"",title:"Benchmark Stop","ok-only":"","ok-title":"OK"},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[t("b-card-text",[e._v(" The benchmark will now stop. ")])],1)],1)])},n=[],o=r(23215),s=r(15193),i=r(72417),l=r(31220),c=r(64206),p=r(21210),h=r(20266),d=r(70660);const u={components:{BCard:o._,BButton:s.T,BPopover:i.x,BModal:l.N,BCardText:c.j,ToastificationContent:p.Z},directives:{Ripple:h.Z},data(){return{popoverShow:!1,modalShow:!1}},methods:{onClose(){this.popoverShow=!1},onOk(){this.popoverShow=!1,this.modalShow=!0;const e=localStorage.getItem("zelidauth");d.Z.stop(e).then((e=>{this.$toast({component:p.Z,props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"success"}})})).catch((()=>{this.$toast({component:p.Z,props:{title:"Error while trying to stop Benchmark",icon:"InfoIcon",variant:"danger"}})}))}}},m=u;var b=r(1001),g=(0,b.Z)(m,a,n,!1,null,null,null);const v=g.exports}}]);