(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-530eb192"],{"3ba8":function(t,e,s){"use strict";var i=s("a89b"),a=s.n(i);a.a},a89b:function(t,e,s){},e672:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"framework-editor-toolbar"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-mobile is-spaced"},[s("div",{staticClass:"column is-narrow"},[s("div",{staticClass:"buttons"},[s("div",{staticClass:"button is-text has-text-dark ",attrs:{title:"View only primary properties"},on:{click:function(e){return t.changeProperties("primary")}}},[t._m(0),s("span",{staticClass:"is-hidden-touch"},[t._v(t._s(t.ceasnDataFields?"Low Detail":"Primary"))]),s("span",{staticClass:"is-hidden-desktop"},[t._v("1st")])]),s("div",{staticClass:"button is-text ",class:(t.activeView,"has-text-dark"),attrs:{title:"View primary and secondary properties"},on:{click:function(e){return t.changeProperties("secondary")}}},["primary"===t.activeView?s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-square"})]):s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-check-square"})]),s("span",{staticClass:"is-hidden-touch"},[t._v(t._s(t.ceasnDataFields?"Moderate Detail":"Secondary"))]),s("span",{staticClass:"is-hidden-desktop"},[t._v("2nd")])]),s("div",{staticClass:"button is-text ",class:(t.activeView,"has-text-dark"),attrs:{title:"View all properties"},on:{click:function(e){return t.changeProperties("tertiary")}}},["tertiary"===t.activeView?s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-check-square"})]):s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-square"})]),s("span",{staticClass:"is-hidden-touch"},[t._v(t._s(t.ceasnDataFields?"High Detail":"Tertiary"))]),s("span",{staticClass:"is-hidden-desktop"},[t._v("3rd")])])])]),t._m(1),t.showAddComments||t.showViewComments?s("div",{staticClass:"column is-narrow"},[s("div",{staticClass:"buttons"},[t.showViewComments?s("div",{staticClass:"button is-text  has-text-dark",attrs:{title:"View all comments"},on:{click:function(e){return t.$store.commit("app/showRightAside","Comments")}}},[t._m(2)]):t._e()])]):t._e(),t.showAddComments||t.showViewComments?s("div",{staticClass:"column is-narrow"},[s("div",{staticClass:"vl"})]):t._e(),t.canEditFramework?s("div",{staticClass:"column is-narrow"},[s("div",{staticClass:"buttons"},[s("div",{staticClass:"button  is-text has-text-dark",attrs:{title:"Undo recent change"},on:{click:t.onClickUndo}},[t._m(3)])])]):t._e(),t.canEditFramework?s("div",{staticClass:"column is-narrow"},[s("div",{staticClass:"vl"})]):t._e(),t.canExport?s("div",{staticClass:"column is-narrow"},[s("div",{staticClass:"button is-text has-text-dark ",class:{"is-disabled":!t.canExport},attrs:{title:"Export framework"},on:{click:function(e){return t.handleExportClick()}}},[t._m(4)])]):s("div",{staticClass:"column is-narrow"},[s("div",{staticClass:"button is-text has-text-dark ",class:{"is-disabled":!t.canExport},attrs:{title:"Export unavailable",disabled:"true"}},[t._m(5)])]),s("div",{staticClass:"column is-narrow"},[t.loggedIn?s("div",{staticClass:"button is-text has-text-dark ",attrs:{title:"Manage users"},on:{click:function(e){t.showManageUsersModal(),t.showShareDropdown=!1}}},[t._m(6)]):s("div",{staticClass:"button is-text has-text-dark ",attrs:{title:"Get shareable link"},on:{click:function(e){t.showManageUsersModal(),t.showShareDropdown=!1}}},[t._m(7)])]),t.configurationsEnabled?s("div",{staticClass:"column is-narrow"},[t.canEditFramework&&!t.conceptMode?s("div",{staticClass:"button  is-text has-text-dark is-pulled-right",attrs:{title:"Framework configuration"},on:{click:function(e){t.showManageConfigurationModal(),t.showShareDropdown=!1}}},[t._m(8),s("span",{staticClass:"is-hidden-touch"},[t._v(t._s(t.defaultFrameworkConfigName))])]):t._e()]):t._e()])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-check-square"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-narrow"},[s("div",{staticClass:"vl"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-comments"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-undo-alt "})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-file-export"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-file-export"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-users"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-share"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-cog"})])}],o=(s("c975"),s("b0c0"),s("ac1f"),s("5319"),s("2ca0"),s("6d79")),n={name:"EditorToolbar",mixins:[o["a"]],props:{properties:{type:String,default:"primary"}},data:function(){return{showPropertyViewDropDown:!1,showShareDropdown:!1,activeView:"primary",repo:window.repo,editsFinishedCounter:0,totalEditsCounter:0,defaultFrameworkConfigName:null}},methods:{closeViewDropDown:function(){this.showPropertyViewDropDown&&(this.showPropertyViewDropDown=!1)},closeShareDropDown:function(){this.showShareDropdown&&(this.showShareDropdown=!1)},handleExportClick:function(){this.canExport&&(this.$emit("showExportModal"),this.showShareDropdown=!1)},handleClickAddComment:function(){this.$store.commit("editor/setAddCommentAboutId",this.$store.getters["editor/framework"].shortId()),this.$store.commit("editor/setAddCommentType","new"),this.$store.commit("app/showModal",{component:"AddComment"})},showExportModal:function(){this.$store.commit("app/showModal","Export")},showManageUsersModal:function(){this.$store.commit("app/showModal",{component:"Share"})},showManageConfigurationModal:function(){this.$store.commit("app/showModal",{component:"Configuration"})},changeProperties:function(t){var e=this.properties,s=t;"secondary"===s&&"secondary"===e?s="primary":"tertiary"===s&&"tertiary"===e&&(s="secondary"),this.$emit("changeProperties",s),this.showPropertyViewDropDown=!1,this.activeView=s},onClickUndo:function(){var t=this;this.$Progress.start(),this.$store.dispatch("editor/lastEditToUndo").then((function(e){if(e){EcArray.isArray(e)||(e=[e]),t.totalEditsCounter+=e.length;for(var s=0;s<e.length;s++){var i=e[s].operation;"addNew"===i?t.undoAdd(e[s].id):"delete"===i?t.undoDelete(e[s].obj):"update"===i&&t.undoUpdate(e[s])}}t.$store.commit("editor/setLastEditToUndo",null)}))},undoAdd:function(t){var e=this;this.repo.deleteRegistered(EcRepository.getBlocking(t),(function(){e.editsFinishedCounter++}),(function(t){appLog(t),e.editsFinishedCounter++,e.$Progress.fail()}))},undoDelete:function(t){var e=t,s=this;"Concept"===t.type&&(e=new EcConcept,e.copyFrom(t)),this.repo.saveTo(e,(function(){s.editsFinishedCounter++,s.$Progress.finish()}),(function(t){appLog(t),s.editsFinishedCounter++,s.$Progress.fail()}))},undoUpdate:function(t){var e=this;EcRepository.get(t.id,(function(s){if(t.expandedProperty)return e.undoUpdateWithExpandedProperty(t,s);for(var i=0;i<t.fieldChanged.length;i++)s[t.fieldChanged[i]]=t.initialValue[i];e.repo.saveTo(s,(function(){e.editsFinishedCounter++,e.$Progress.finish()}),(function(){e.editsFinishedCounter++,e.$Progress.fail()})),e.$store.commit("editor/changedObject",s.shortId())}),(function(t){appError(t),e.editsFinishedCounter++,e.$Progress.fail()}))},undoUpdateWithExpandedProperty:function(t,e){var s=this;this.expand(e,(function(e){for(var i=0;i<t.fieldChanged.length;i++)e[t.fieldChanged[i]]=t.initialValue[i],0===e[t.fieldChanged[i]].length&&delete e[t.fieldChanged[i]],s.saveExpanded(e)}))},expand:function(t,e){var s=JSON.parse(t.toJson());null!=s["@context"]&&s["@context"].startsWith("http://")&&(s["@context"]=s["@context"].replace("http://","https://")),null!=s["@context"]&&-1!==s["@context"].indexOf("skos")&&(s["@context"]="https://schema.cassproject.org/0.4/skos/"),jsonld.expand(s,(function(t,s){e(null==t?s[0]:null)}))},saveExpanded:function(t){var e=this,s="https://schema.cassproject.org/0.4";-1!==t["@type"][0].toLowerCase().indexOf("concept")&&(s="https://schema.cassproject.org/0.4/skos"),jsonld.compact(t,this.$store.state.lode.rawSchemata[s],(function(t,i){if(null!=t&&appError(t),i){var a=new EcRemoteLinkedData;a.copyFrom(i),a.context=s,delete a["@context"],a=e.turnFieldsBackIntoArrays(a),a["schema:dateModified"]=(new Date).toISOString(),e.$store.state.editor&&!0===e.$store.state.editor.private&&!0!==EcEncryptedValue.encryptOnSaveMap[a.id]&&(a=EcEncryptedValue.toEncryptedValue(a)),e.repo.saveTo(a,(function(){e.editsFinishedCounter++}),(function(t){appError(t),e.editsFinishedCounter++}))}}))},turnFieldsBackIntoArrays:function(t){for(var e=["owner","reader","signature","competency","level","relation","skos:hasTopConcept","skos:narrower","skos:broader","skos:broadMatch","skos:closeMatch","skos:exactMatch","skos:narrowMatch","skos:related"],s=0;s<e.length;s++){var i=e[s];t[i]&&!EcArray.isArray(t[i])&&(t[i]=[t[i]])}return t},getConfigurationName:function(){if(this.$store.getters["editor/framework"].configuration){var t=EcRepository.getBlocking(this.$store.getters["editor/framework"].configuration);this.defaultFrameworkConfigName=t?t.name:"No configuration"}else this.defaultFrameworkConfigName="No configuration"}},computed:{showAddComments:function(){return!0!==this.$store.getters["editor/conceptMode"]&&this.$store.state.app.canAddComments},showViewComments:function(){return!0!==this.$store.getters["editor/conceptMode"]&&this.$store.state.app.canViewComments},framework:function(){return this.$store.state.editor.framework},queryParams:function(){return this.$store.getters["editor/queryParams"]},ceasnDataFields:function(){return"true"===this.queryParams.ceasnDataFields},canEditFramework:function(){return(!this.queryParams||"true"!==this.queryParams.view)&&!!this.framework.canEditAny(EcIdentityManager.getMyPks())},loggedIn:function(){return!!(EcIdentityManager.ids&&EcIdentityManager.ids.length>0)},configuration:function(){return this.$store.getters["editor/framework"].configuration},conceptMode:function(){return this.$store.getters["editor/conceptMode"]},canExport:function(){return!this.$store.state.editor.private&&!(this.framework.reader&&this.framework.reader.length>0)},configurationsEnabled:function(){return this.$store.state.featuresEnabled.configurationsEnabled}},watch:{editsFinishedCounter:function(){if(this.editsFinishedCounter&&this.editsFinishedCounter===this.totalEditsCounter){this.editsFinishedCounter=0,this.totalEditsCounter=0;var t=this.$store.getters["editor/framework"];this.$store.commit("editor/framework",EcRepository.getBlocking(t.shortId())),this.$store.commit("editor/recomputeHierarchy",!0),this.$store.commit("editor/refreshAlignments",!0)}},configuration:function(){this.getConfigurationName()}},mounted:function(){this.getConfigurationName()}},r=n,c=(s("3ba8"),s("2877")),d=Object(c["a"])(r,i,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-530eb192.3672653f.js.map