(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31ea397f"],{"08bc":function(e,t,i){"use strict";var r=i("891f"),s=i.n(r);s.a},"25d8":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"lode__hierarchy"},[i("div",{staticClass:"hierarchy-buttons columns is-gapless is-paddingless is-mobile is-marginless is-paddingless"},[e.canEdit&&"import"!==e.view||e.queryParams.select?i("div",{staticClass:"column is-narrow",attrs:{id:"check-radio-all-column"}},[i("div",{staticClass:"field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.selectAll,expression:"selectAll"}],staticClass:"is-checkradio",attrs:{id:"selectAllCheckbox",type:"checkbox",name:"selectAllCheckbox"},domProps:{checked:Array.isArray(e.selectAll)?e._i(e.selectAll,null)>-1:e.selectAll},on:{change:function(t){var i=e.selectAll,r=t.target,s=!!r.checked;if(Array.isArray(i)){var n=null,a=e._i(i,n);r.checked?a<0&&(e.selectAll=i.concat([n])):a>-1&&(e.selectAll=i.slice(0,a).concat(i.slice(a+1)))}else e.selectAll=s}}}),i("label",{attrs:{for:"selectAllCheckbox"}})])]):e._e(),i("div",{staticClass:"column is-narrow"},[e.expanded?i("div",{staticClass:"icon is-vcentered",on:{click:function(t){e.expanded=!1}}},[i("i",{staticClass:"fa fa-caret-down has-text-primary is-size-2"})]):e.expanded?i("div",{staticClass:"icon is-vcentered"},[i("i",{staticClass:"fa fa-circle is-size-6 has-text-light"})]):i("div",{staticClass:"icon is-vcentered",on:{click:function(t){e.expanded=!0}}},[i("i",{staticClass:"fa fa-caret-right has-text-primary is-size-2"})]),e.selectButtonText?i("div",{staticClass:"button is-outlined is-primary",on:{click:function(t){return e.$emit("selectButtonClick",e.selectedArray)}}},[e._v(" "+e._s(e.selectButtonText)+" ")]):e._e()]),i("div",{staticClass:"column is-narrow"},[i("div",{staticClass:"buttons"},[e.multipleSelected&&!e.addingNode&&"import"!==e.view&&e.canEdit?i("div",{staticClass:"button is-outlined is-primary",on:{click:function(t){return e.$emit("editMultipleEvent")}}},[e._m(0),i("span",[e._v(" Edit multiple ")])]):e._e(),e.addingNode||!e.canEdit||e.multipleSelected?e._e():i("div",{staticClass:"button is-outlined is-primary",on:{click:function(t){e.addingNode=!0}}},[e._m(1),i("span",[e._v(" "+e._s(e.addConceptOrChildText)+" ")])]),e.addingNode?i("div",{staticClass:"button is-outlined is-dark ",on:{click:function(t){e.addingNode=!1}}},[e._m(2),i("span",[e._v("cancel")])]):e._e(),e.addingNode?i("div",{staticClass:"button is-outlined is-primary ",on:{click:e.onClickCreateNew}},[e._m(3),i("span",[e._v(" create new ")])]):e._e(),"framework"===e.view||"concept"===e.view?i("div",{staticClass:"button is-outlined",class:e.canCopyOrCut?"is-primary":"is-disabled",attrs:{disabled:!e.canCopyOrCut,title:"Copy competency"},on:{click:e.copyClick}},[e._m(4)]):e._e(),"framework"===e.view||"concept"===e.view?i("div",{staticClass:"button is-outlined",class:e.canCopyOrCut?"is-primary":"is-disabled",attrs:{title:"Cut competency",disabled:!e.canCopyOrCut},on:{click:e.cutClick}},[e._m(5)]):e._e(),"framework"===e.view||"concept"===e.view?i("div",{staticClass:"button is-outlined ",class:e.canPaste?"is-primary":"is-disabled",attrs:{disabled:!e.canPaste,title:"Paste competency"},on:{click:e.pasteClick}},[e._m(6)]):e._e()])]),"import"===e.view?i("div",{staticClass:"column"},[i("div",{staticClass:"buttons is-right"},[i("div",{staticClass:"buttons is-right"},[i("div",{staticClass:" button is-light is-pulled-right is-dark is-outlined",on:{click:e.cancelImport}},[i("span",[e._v(" Cancel ")]),e._m(7)]),i("div",{staticClass:"button is-dark is-outlined is-pulled-right",on:{click:function(t){return e.$store.dispatch("app/clearImport")}}},[i("span",[e._v(" import again ")]),e._m(8)]),i("div",{staticClass:"button is-dark is-outlined is-pulled-right",on:{click:e.openFramework}},[i("span",[e._v("view in editor")]),e._m(9)]),i("router-link",{staticClass:"button is-primary is-outlined is -pulled-right",attrs:{to:"/"}},[i("span",[e._v(" Done ")]),i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-home"})])])],1)])]):e._e()]),e.hierarchy?[i("draggable",e._b({staticClass:"lode__hierarchy-ul",attrs:{tag:"ul",disabled:!0!==e.canEdit||!e.isDraggable,group:{name:"test"},handle:".handle"},on:{start:e.beginDrag,end:e.endDrag},model:{value:e.hierarchy,callback:function(t){e.hierarchy=t},expression:"hierarchy"}},"draggable",e.dragOptions,!1),e._l(e.hierarchy,(function(t,r){return i("HierarchyNode",{key:t.obj.id,staticClass:"lode__hierarchy-li",attrs:{view:e.view,subview:e.subview,obj:t.obj,dragging:e.dragging,canEdit:e.canEdit,hasChild:t.children,profile:e.profile,exportOptions:e.exportOptions,highlightList:e.highlightList,selectAll:e.selectAll,newFramework:e.newFramework,index:r,frameworkEditable:e.canEdit,selectedArray:e.selectedArray,parentStructure:e.hierarchy,parent:e.container,properties:e.properties,expandAll:1==e.expanded,parentChecked:!1,shiftKey:e.shiftKey,arrowKey:e.arrowKey},on:{createNewNodeEvent:e.onCreateNewNode,mountingNode:e.handleMountingNode,add:e.add,beginDrag:e.beginDrag,move:e.move,deleteObject:e.deleteObject,exportObject:e.exportObject,select:e.select,draggableCheck:e.onDraggableCheck}})})),1)]:e._e()],2)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-cog"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-plus-circle"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-times"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-plus"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-copy"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fas handle fa-cut"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-paste"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-times-circle"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-redo-alt"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-edit"})])}],a=(i("99af"),i("c975"),i("fb6a"),i("a434"),i("d3b7"),i("872c")),o={name:"ConceptHierarchy",props:{container:Object,containerType:String,repo:Object,profile:Object,exportOptions:Array,highlightList:Array,selectMode:Boolean,selectAll:Boolean,containerTypeGet:String,viewOnly:Boolean,newFramework:Boolean,properties:String,view:{type:String,default:"framework"},subview:{type:String,default:""},doneDragging:{type:Boolean,default:!1}},data:function(){return{structure:[],once:!0,dragging:!1,controlOnStart:!1,filter:"showAll",dragIcon:"fa-arrows-alt",dragOptions:{delay:100,disabled:!1,ghostClass:"ghost-drag",chosenClass:"chosen-drag",dragClass:"drag",scrollSensitivity:200,forceFallback:!0},multipleSelected:!1,addingNode:!1,selectedArray:[],selectButtonText:null,expanded:!0,isDraggable:!0,shiftKey:!1,arrowKey:null,addConceptOrChildText:"Add Concept"}},components:{HierarchyNode:function(){return i.e("chunk-6a14e7d0").then(i.bind(null,"8461"))},draggable:function(){return i.e("chunk-4a49d1f9").then(i.t.bind(null,"310e",7))}},mixins:[a["a"]],computed:{canCopyOrCut:function(){return!(!this.selectedArray||1!==this.selectedArray.length)},canPaste:function(){return(null!==this.$store.getters["editor/copyId"]||null!==this.$store.getters["editor/cutId"])&&null!==this.$store.getters["editor/nodeInFocus"]},queryParams:function(){return this.$store.getters["editor/queryParams"]},hierarchy:function(){var e=this;if(null==this.container)return null;if(!this.once)return this.structure;appLog("Computing hierarchy.");var t=[];return null!=this.container["skos:hasTopConcept"]&&(t=t.concat(this.container["skos:hasTopConcept"])),t.length>0?this.repo.multiget(t,(function(t){e.computeHierarchy()}),appError,appLog):e.computeHierarchy(),this.structure},canEdit:function(){return!0!==this.viewOnly&&this.container.canEditAny(EcIdentityManager.getMyPks())},recomputeHierarchy:function(){return this.$store.getters["editor/recomputeHierarchy"]}},watch:{container:{handler:function(){this.once=!0},deep:!0},selectedArray:function(){this.selectedArray.length>1?this.multipleSelected=!0:this.multipleSelected=!1,1===this.selectedArray.length?this.addConceptOrChildText="Add Child":this.addConceptOrChildText="Add Concept",this.$emit("selectedArray",this.selectedArray)},recomputeHierarchy:function(){this.recomputeHierarchy&&(this.once=!0,this.$store.commit("editor/recomputeHierarchy",!1))},doneDragging:function(){this.doneDragging&&(this.dragging=!1)}},mounted:function(){this.queryParams&&(this.queryParams.singleSelect&&(this.selectButtonText=this.queryParams.singleSelect),this.queryParams.select&&""!==this.queryParams.select&&"select"!==this.queryParams.select&&(this.selectButtonText=this.queryParams.select)),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup)},beforeDestroy:function(){window.removeEventListener("keyup",this.keyup),window.removeEventListener("keydown",this.keydown)},methods:{cutClick:function(){this.selectedArray&&1===this.selectedArray.length&&this.$store.commit("editor/cutId",this.selectedArray[0]),this.$store.commit("editor/copyId",null),this.$store.commit("editor/paste",!1)},copyClick:function(){this.selectedArray&&1===this.selectedArray.length&&this.$store.commit("editor/copyId",this.selectedArray[0]),this.$store.commit("editor/cutId",null),this.$store.commit("editor/paste",!1)},pasteClick:function(){this.$store.commit("editor/paste",!0)},keydown:function(e){this.canEdit&&(e.shiftKey&&(this.shiftKey=!0),-1!==e.key.indexOf("Arrow")&&e.shiftKey&&(this.arrowKey=e.key),"x"===e.key&&e.ctrlKey&&(this.selectedArray&&1===this.selectedArray.length&&this.$store.commit("editor/cutId",this.selectedArray[0]),this.$store.commit("editor/copyId",null),this.$store.commit("editor/paste",!1)),"c"===e.key&&e.ctrlKey&&(this.selectedArray&&1===this.selectedArray.length&&this.$store.commit("editor/copyId",this.selectedArray[0]),this.$store.commit("editor/cutId",null),this.$store.commit("editor/paste",!1)),"v"===e.key&&e.ctrlKey&&this.$store.commit("editor/paste",!0))},keyup:function(e){e.shiftKey||(this.shiftKey=!1),-1!==e.key.indexOf("Arrow")&&(this.arrowKey=null)},onCreateNewNode:function(e,t){this.add(e,t)},handleMountingNode:function(){this.startTime()},startTime:function(){var e=this;setTimeout((function(){e.$emit("doneLoadingNodes")}),1e3)},computeHierarchy:function(){if(this.structure.splice(0,this.structure.length),null==this.container)return r;if(null!==this.container["skos:hasTopConcept"]&&void 0!==this.container["skos:hasTopConcept"])for(var e=0;e<this.container["skos:hasTopConcept"].length;e++){var t=EcConcept.getBlocking(this.container["skos:hasTopConcept"][e]);t&&(this.structure.push({obj:t,children:[]}),t["skos:narrower"]&&this.addChildren(this.structure,t,e))}this.once=!1},addChildren:function(e,t,i){for(var r=0;r<t["skos:narrower"].length;r++){var s=EcConcept.getBlocking(t["skos:narrower"][r]);e[i].children.push({obj:s,children:[]}),s&&s["skos:narrower"]&&this.addChildren(e[i].children,s,r)}},beginDrag:function(e){this.dragging=!0,void 0!==e&&(this.controlOnStart=e.originalEvent.ctrlKey||e.originalEvent.shiftKey)},endDrag:function(e){if("framework_drag"!==e.to.id){appLog(e.oldIndex,e.newIndex);var t=null,i=0;this.shiftKey&&(this.controlOnStart=!0),e.from.id===e.to.id?(e.newIndex<this.hierarchy.length&&(t=this.hierarchy[e.newIndex].obj.shortId()),i=1):void 0===e.to.children[e.newIndex]?t=e.to.id:e.newIndex+1<e.to.children.length&&(t=e.to.children[e.newIndex+1].id),this.move(this.hierarchy[e.oldIndex].obj.shortId(),t,e.from.id,e.to.id,!this.controlOnStart,i)}else this.dragging=!1},move:function(e,t,i,r,s,n){this.once=!0;var a=this;if(i===r){var o=EcConcept.getBlocking(r),c="skos:narrower";null===o&&(o=this.container,c="skos:hasTopConcept");var l=o[c]?o[c].slice():null,d=o[c].indexOf(e);if(o[c].splice(d,1),null==t||void 0===t)EcArray.isArray(o[c])||(o[c]=[]),o[c].push(e);else{var h=o[c].indexOf(t);o[c].splice(h,0,e)}a.$store.commit("editor/addEditsToUndo",[{operation:"update",id:o.shortId(),fieldChanged:[c],initialValue:[l]}]),o["schema:dateModified"]=(new Date).toISOString(),!0===this.$store.state.editor.private&&!0!==EcEncryptedValue.encryptOnSaveMap[o.id]&&(o=EcEncryptedValue.toEncryptedValue(o)),this.repo.saveTo(o,(function(){a.computeHierarchy()}),appError)}else{var p=EcConcept.getBlocking(e),u=EcConcept.getBlocking(i),y="skos:narrower",f="skos:broader",g=EcConcept.getBlocking(r),m="skos:narrower",v="skos:broader";null===u&&(u=this.container,y="skos:hasTopConcept",f="skos:topConceptOf"),null===g&&(g=this.container,m="skos:hasTopConcept",v="skos:topConceptOf");d=u[y].indexOf(e);var C=u[y].slice(),k=p[f]?p[f].slice():null,w=g[m]?g[m].slice():null,E=p[v]?p[v].slice():null;s&&u[y].splice(d,1),i&&p[f]?(s&&EcArray.setRemove(p[f],i),0===p[f].length&&delete p[f]):delete p[f],u["schema:dateModified"]=(new Date).toISOString(),!0===this.$store.state.editor.private&&!0!==EcEncryptedValue.encryptOnSaveMap[u.id]&&(u=EcEncryptedValue.toEncryptedValue(u)),this.repo.saveTo(u,(function(){if(null==t||void 0===t)EcArray.isArray(g[m])||(g[m]=[]),g[m].push(e);else{var i=g[m].indexOf(t);g[m].splice(i,0,e)}EcArray.isArray(p[v])||(p[v]=[]),r?p[v].push(r):p[v].push(a.container.shortId()),a.$store.commit("editor/addEditsToUndo",[{operation:"update",id:u.shortId(),fieldChanged:[y],initialValue:[C]},{operation:"update",id:g.shortId(),fieldChanged:[m],initialValue:[w]},{operation:"update",id:p.shortId(),fieldChanged:[f,v],initialValue:[k,E]}]),g["schema:dateModified"]=(new Date).toISOString(),p["schema:dateModified"]=(new Date).toISOString(),!0===a.$store.state.editor.private&&!0!==EcEncryptedValue.encryptOnSaveMap[g.id]&&(g=EcEncryptedValue.toEncryptedValue(g)),!0===a.$store.state.editor.private&&!0!==EcEncryptedValue.encryptOnSaveMap[p.id]&&(p=EcEncryptedValue.toEncryptedValue(p)),a.repo.saveTo(g,(function(){a.repo.saveTo(p,appLog,appError),a.computeHierarchy()}),appLog)}),appError)}this.dragging=!1},add:function(e,t){var i=this,s=new EcConcept;if(this.queryParams.newObjectEndpoint?s.generateShortId(this.queryParams.newObjectEndpoint):s.generateId(this.repo.selectedServer),s["schema:dateCreated"]=(new Date).toISOString(),s["schema:dateModified"]=(new Date).toISOString(),null!=EcIdentityManager.ids&&EcIdentityManager.ids.length>0&&s.addOwner(EcIdentityManager.ids[0].ppk.toPk()),this.container.owner&&this.container.owner.length>0)for(var n=0;n<this.container.owner.length;n++){var a=this.container.owner[n];s.addOwner(EcPk.fromPem(a))}if(this.container.reader&&this.container.reader.length>0)for(n=0;n<this.container.reader.length;n++){var o=this.container.reader[n];r.addReader(EcPk.fromPem(o))}if(this.setDefaultLanguage(),s["skos:prefLabel"]={"@language":this.$store.state.editor.defaultLanguage,"@value":"New Concept"},s["skos:inScheme"]=this.container.shortId(),e===this.container.shortId()){var c=this.container["skos:hasTopConcept"]?this.container["skos:hasTopConcept"].slice():null;if(EcArray.isArray(this.container["skos:hasTopConcept"])||(this.container["skos:hasTopConcept"]=[]),null==t||void 0===t)this.container["skos:hasTopConcept"].push(s.shortId());else{var l=this.container["skos:hasTopConcept"].indexOf(t);this.container["skos:hasTopConcept"].splice(l+1,0,s.shortId())}s["skos:topConceptOf"]=this.container.shortId(),i.$store.commit("editor/addEditsToUndo",[{operation:"addNew",id:s.shortId()},{operation:"update",id:this.container.shortId(),fieldChanged:["skos:hasTopConcept"],initialValue:[c]}]),this.container["schema:dateModified"]=(new Date).toISOString(),s["schema:dateModified"]=(new Date).toISOString(),!0===this.$store.state.editor.private&&(s=EcEncryptedValue.toEncryptedValue(s),!0!==EcEncryptedValue.encryptOnSaveMap[i.container.id]&&(i.container=EcEncryptedValue.toEncryptedValue(i.container))),this.repo.saveTo(s,(function(){i.repo.saveTo(i.container,(function(){i.once=!0}),appError)}),appError)}else{s["skos:broader"]=[e];var d=EcConcept.getBlocking(e);c=d["skos:narrower"]?d["skos:narrower"].slice():null;if(EcArray.isArray(d["skos:narrower"])||(d["skos:narrower"]=[]),null==t||void 0===t)d["skos:narrower"].push(s.shortId());else{l=d["skos:narrower"].indexOf(t);d["skos:narrower"].splice(l+1,0,s.shortId())}i.$store.commit("editor/addEditsToUndo",[{operation:"addNew",id:s.shortId()},{operation:"update",id:d.shortId(),fieldChanged:["skos:narrower"],initialValue:[c]}]),this.container["schema:dateModified"]=(new Date).toISOString(),s["schema:dateModified"]=(new Date).toISOString(),d["schema:dateModified"]=(new Date).toISOString(),!0===this.$store.state.editor.private&&(s=EcEncryptedValue.toEncryptedValue(s),!0!==EcEncryptedValue.encryptOnSaveMap[d.id]&&(d=EcEncryptedValue.toEncryptedValue(d)),!0!==EcEncryptedValue.encryptOnSaveMap[i.container.id]&&(i.container=EcEncryptedValue.toEncryptedValue(i.container))),this.repo.saveTo(s,(function(){i.repo.saveTo(d,(function(){i.repo.saveTo(i.container,(function(){i.once=!0}),appError)}),appError)}),appError)}this.$store.commit("editor/newCompetency",s.shortId()),appLog("Added node: ",JSON.parse(s.toJson()))},select:function(e,t){t?EcArray.setAdd(this.selectedArray,e):EcArray.setRemove(this.selectedArray,e)},deleteObject:function(e){this.$emit("deleteObject",e)},exportObject:function(e,t){this.$emit("exportObject",e,t)},onDraggableCheck:function(e){this.isDraggable=e},cancelImport:function(){this.deleteObject(this.container),this.$store.dispatch("app/clearImport")},openFramework:function(){var e=EcConceptScheme.getBlocking(this.container.shortId());this.$store.commit("editor/framework",e),this.$router.push({name:"conceptScheme",params:{frameworkId:this.container.id}})},onClickCreateNew:function(){var e=this.container.shortId();1===this.selectedArray.length&&(e=this.selectedArray[0]),this.add(e,null),this.addingNode=!1}}},c=o,l=(i("08bc"),i("2877")),d=Object(l["a"])(c,s,n,!1,null,null,null);t["default"]=d.exports},"891f":function(e,t,i){}}]);
//# sourceMappingURL=chunk-31ea397f.552af994.js.map