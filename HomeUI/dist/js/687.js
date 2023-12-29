"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[687],{20946:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(19350);const n={help(){return(0,r.Z)().get("/daemon/help")},helpSpecific(e){return(0,r.Z)().get(`/daemon/help/${e}`)},getInfo(){return(0,r.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,r.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(e,t){return(0,r.Z)().get(`/daemon/getrawtransaction/${e}/${t}`)},listFluxNodes(){return(0,r.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,r.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,r.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,r.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,r.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,r.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,r.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,r.Z)().get("/daemon/getbenchstatus")},startBenchmark(e){return(0,r.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:e}})},stopBenchmark(e){return(0,r.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:e}})},getBlockchainInfo(){return(0,r.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,r.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,r.Z)().get("/daemon/getnetworkinfo")},validateAddress(e,t){return(0,r.Z)().get(`/daemon/validateaddress/${t}`,{headers:{zelidauth:e}})},getWalletInfo(e){return(0,r.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:e}})},listFluxNodeConf(e){return(0,r.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:e}})},start(e){return(0,r.Z)().get("/daemon/start",{headers:{zelidauth:e}})},restart(e){return(0,r.Z)().get("/daemon/restart",{headers:{zelidauth:e}})},stopDaemon(e){return(0,r.Z)().get("/daemon/stop",{headers:{zelidauth:e}})},rescanDaemon(e,t){return(0,r.Z)().get(`/daemon/rescanblockchain/${t}`,{headers:{zelidauth:e}})},getBlock(e,t){return(0,r.Z)().get(`/daemon/getblock/${e}/${t}`)},tailDaemonDebug(e){return(0,r.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:e}})},justAPI(){return(0,r.Z)()},cancelToken(){return r.S}}},89964:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=function(){var e=this,t=e._self._c;return t("b-card",[t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1",attrs:{id:"start-daemon",variant:"outline-primary",size:"md"}},[e._v(" Start Benchmark Daemon ")]),t("b-popover",{ref:"popover",attrs:{target:"start-daemon",triggers:"click",show:e.popoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.popoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("span",[e._v("Are You Sure?")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:e.onClose}},[t("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:e.onClose}},[e._v(" Cancel ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:e.onOk}},[e._v(" Start Benchmark ")])],1)]),t("b-modal",{attrs:{id:"modal-center",centered:"",title:"Benchmark Daemon Start","ok-only":"","ok-title":"OK"},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[t("b-card-text",[e._v(" The benchmark daemon will now start. ")])],1)],1)])},n=[],o=a(23215),s=a(15193),i=a(72417),l=a(31220),d=a(64206),u=a(21210),c=a(20266),m=a(20946);const g={components:{BCard:o._,BButton:s.T,BPopover:i.x,BModal:l.N,BCardText:d.j,ToastificationContent:u.Z},directives:{Ripple:c.Z},data(){return{popoverShow:!1,modalShow:!1}},methods:{onClose(){this.popoverShow=!1},onOk(){this.popoverShow=!1,this.modalShow=!0;const e=localStorage.getItem("zelidauth");m.Z.startBenchmark(e).then((e=>{this.$toast({component:u.Z,props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"success"}})})).catch((()=>{this.$toast({component:u.Z,props:{title:"Error while trying to start Benchmark",icon:"InfoIcon",variant:"danger"}})}))}}},h=g;var p=a(1001),v=(0,p.Z)(h,r,n,!1,null,null,null);const b=v.exports}}]);