(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2389a9"],{ffa4:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("iframe",{staticClass:"legacyIframe",attrs:{src:e.baseRepoUrl+"cass-gap-analysis/?user=wait&origin="+e.origin,height:"100%",width:"100%"}})},a=[],s=(n("baa5"),n("fb6a"),n("ac1f"),n("5319"),{name:"Welcome",data:function(){return{repo:window.repo,baseRepoUrl:"",origin:""}},mounted:function(){var e=this.repo.selectedServer.lastIndexOf("api");this.baseRepoUrl=this.repo.selectedServer.slice(0,e),this.origin=window.location.origin},created:function(){window.addEventListener("message",this.sendIdentity)},beforeDestroy:function(){window.removeEventListener("message",this.sendIdentity)},methods:{sendIdentity:function(e){var t=this,n=t.repo.selectedServer.replace("/api/","");"waiting"===e.data.message&&document.getElementsByTagName("iframe")[0].contentWindow.postMessage(JSON.stringify({action:"initIdentity",serverParm:t.repo.selectedServer,nameParm:EcIdentityManager.ids[0].displayName,pemParm:EcIdentityManager.ids[0].ppk.toPem()}),n)}}}),r=s,o=n("2877"),d=Object(o["a"])(r,i,a,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d2389a9.74f3b413.js.map