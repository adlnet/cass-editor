(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{b8fd:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("iframe",{staticClass:"legacyIframe",attrs:{src:e.baseRepoUrl+"cass-profile/?user=wait&origin="+e.origin,height:"100%",width:"100%"}})},r=[],a=(i("baa5"),i("fb6a"),i("ac1f"),i("5319"),{name:"Welcome",data:function(){return{repo:window.repo,baseRepoUrl:"",origin:""}},mounted:function(){var e=this.repo.selectedServer.lastIndexOf("api");this.baseRepoUrl=this.repo.selectedServer.slice(0,e),this.origin=window.location.origin},created:function(){window.addEventListener("message",this.sendIdentity)},beforeDestroy:function(){window.removeEventListener("message",this.sendIdentity)},methods:{sendIdentity:function(e){var t=this,i=t.repo.selectedServer.replace("/api/","");"waiting"===e.data.message&&document.getElementsByTagName("iframe")[0].contentWindow.postMessage(JSON.stringify({action:"initIdentity",serverParm:t.repo.selectedServer,nameParm:EcIdentityManager.ids[0].displayName,pemParm:EcIdentityManager.ids[0].ppk.toPem()}),i)}}}),s=a,o=i("2877"),d=Object(o["a"])(s,n,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=profile.34af8ec4.js.map