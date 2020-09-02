(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58708fa9"],{"217e":function(t,e,s){"use strict";var i=s("6628"),a=s.n(i);a.a},6628:function(t,e,s){},6791:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"framework-list-page",attrs:{id:"frameworks"}},[t.showRightAside?s("RightAside"):t._e(),s("div",{class:t.parentObjectClass},[s("div",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-gapless is-paddingless"},[s("div",{staticClass:"column is-narrow"},[t.conceptMode?s("h1",{staticClass:"title"},[t._v(" "+t._s(t.conceptSchemeString)+" ")]):s("h1",{staticClass:"title"},[t._v(" Frameworks ")]),s("h2",{staticClass:"subtitle is-size-5"},[t._v(" List of available "),t.conceptMode&&"true"===t.queryParams.ceasnDataFields?s("span",[t._v("concepts")]):t.conceptMode?s("span",[t._v("taxonomies.")]):t._e(),t.conceptMode&&"true"!==t.queryParams.ceasnDataFields?s("p",{staticClass:"is-size-6"},[s("a",{staticClass:"custom-link external is-size-6",attrs:{title:"Wikipedia: Taxonomy (general)",href:"https://en.wikipedia.org/wiki/Taxonomy_(general)",target:"_blank"}},[t._v("Taxonomies ")]),t._v(" can be used to categorize and label competencies in frameworks. ")]):t._e(),t.conceptMode?t._e():s("span",[t._v("frameworks")])])]),s("div",{staticClass:"column"},[t.conceptMode?s("div",{staticClass:"buttons is-right concept-buttons"},[s("div",{staticClass:"button is-outlined is-primary",on:{click:function(e){return t.$emit("createNewConceptScheme")}}},[t._m(0),s("span",[t._v("new "+t._s(t.conceptSchemeStringForButton))])]),s("router-link",{staticClass:"button is-outlined is-primary",attrs:{to:"/import"},nativeOn:{click:function(e){t.$store.commit("editor/conceptMode",!0),t.$store.dispatch("app/clearImport")}}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-upload"})]),s("span",[t._v("import "+t._s(t.conceptSchemeStringForButton))])])],1):s("div",{staticClass:"buttons is-right frameworks-buttons"},[s("div",{staticClass:"button is-outlined is-primary",on:{click:function(e){return t.$emit("createNewFramework")}}},[t._m(1),s("span",[t._v("create new")])]),s("router-link",{staticClass:"button is-outlined is-primary",attrs:{to:"/import"},nativeOn:{click:function(e){t.$store.commit("editor/conceptMode",!1),t.$store.dispatch("app/clearImport")}}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-upload"})]),s("span",[t._v("import framework")])]),s("router-link",{staticClass:"button is-outlined is-primary",attrs:{to:"/crosswalk"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-network-wired"})]),s("span",[t._v("crosswalk")])])],1)])]),s("SearchBar",{attrs:{filterSet:"all",searchType:"ConceptScheme"===t.type?"concept scheme":"framework"}})],1)])]),s("div",{staticClass:"section"},[t.conceptMode?t._e():s("div",{staticClass:"container is-fluid show-only-mine"},[s("div",{staticClass:"control"},["mine"!==t.queryParams.show&&"mine"!==t.queryParams.conceptShow&&t.numIdentities?s("div",[s("label",{staticClass:"checkbox",attrs:{for:"showMine"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.showMine,expression:"showMine"}],attrs:{type:"checkbox",value:"true",id:"showMine"},domProps:{checked:Array.isArray(t.showMine)?t._i(t.showMine,"true")>-1:t.showMine},on:{change:function(e){var s=t.showMine,i=e.target,a=!!i.checked;if(Array.isArray(s)){var r="true",o=t._i(s,r);i.checked?o<0&&(t.showMine=s.concat([r])):o>-1&&(t.showMine=s.slice(0,o).concat(s.slice(o+1)))}else t.showMine=a}}}),t._v(" Show only mine")])]):t._e()])]),s("div",{staticClass:"container is-fluid"},[s("List",{attrs:{type:t.type,repo:t.repo,click:t.frameworkClick,searchOptions:t.searchOptions,paramObj:t.paramObj,view:"frameworks",disallowEdits:!0},scopedSlots:t._u([{key:"frameworkTags",fn:function(e){return[s("span",{staticClass:"framework-details has-text-weight-light family-primary is-size-7"},[t.conceptMode||"Framework"!==e.item.type?t._e():s("span",{staticClass:"framework-details__item"},[s("span",{staticClass:"has-text-weight-medium"},[t._v(" Items: ")]),s("span",{staticClass:"has-text-weight-light"},[t._v(" "+t._s(e.item.competency?e.item.competency.length:0)+" ")])]),e.item.Published?s("span",{staticClass:"framework-details__item",attrs:{title:e.item.Published}},[s("span",{staticClass:"has-text-weight-medium"},[t._v(" Published: ")]),s("span",{staticClass:"has-text-weight-light"})]):t._e(),e.item.Approved?s("span",{staticClass:"framework-details__item",attrs:{title:e.item.Approved}},[s("span",{staticClass:"has-texte-weight-medium"},[t._v(" Approved: ")]),s("span",{staticClass:"has-text-weight-light"})]):t._e(),e.item["schema:dateCreated"]?s("span",{staticClass:"framework-details__item",attrs:{title:new Date(e.item["schema:dateCreated"])}},[s("span",{staticClass:"has-text-weight-medium"},[t._v(" Created: ")]),s("span",{staticClass:"has-text-weight-light"},[t._v(" "+t._s(t.$moment(new Date(e.item["schema:dateCreated"])).fromNow())+" ")])]):t._e(),e.item.getTimestamp()?s("span",{staticClass:"framework-details__item",attrs:{title:new Date(e.item.getTimestamp())}},[s("span",{staticClass:"has-text-weight-medium"},[t._v(" Last modified: ")]),s("span",{staticClass:"has-text-weight-light"},[t._v(" "+t._s(t.$moment(e.item.getTimestamp()).fromNow())+" ")])]):e.item["schema:dateModified"]?s("span",{staticClass:"framework-details__item",attrs:{title:new Date(e.item["schema:dateModified"])}},[s("span",{staticClass:"has-text-weight-medium"},[t._v(" Last modified: ")]),s("span",{staticClass:"has-text-weight-light"},[t._v(" "+t._s(t.$moment(new Date(e.item["schema:dateModified"])).fromNow())+" ")])]):t._e(),e.item["ceasn:publisherName"]&&t.getName(e.item["ceasn:publisherName"])?s("span",{staticClass:"framework-details__item"},[s("span",{staticClass:"has-text-weight-medium"},[t._v(" Publisher: ")]),s("span",{staticClass:"has-text-weight-light"},[t._v(" "+t._s(t.getName(e.item["ceasn:publisherName"]))+" ")])]):e.item["schema:publisher"]&&t.getName(e.item["schema:publisher"])?s("span",{staticClass:"framework-details__item"},[s("span",{staticClass:"has-text-weight-medium"},[t._v(" Publisher: ")]),s("span",[t._v(" "+t._s(t.getName(e.item["schema:publisher"]))+" ")])]):e.item["schema:creator"]&&t.getName(e.item["schema:creator"])?s("span",{},[s("span",{staticClass:"has-text-weight-medium"},[t._v(" Creator ")]),s("span",[t._v(" "+t._s(t.getName(e.item["schema:creator"]))+" ")])]):t._e(),t.canEditItem(e.item)&&"true"!==t.queryParams.view?s("span",{staticClass:"framework-details__item"},[s("span",{staticClass:"has-text-weight-medium"},[t._v(" Editable ")])]):t._e()])]}}])})],1)])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-plus"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-plus"})])}],r=(s("4de4"),s("c975"),s("b047")),o=s.n(r),n=s("000d"),c=s("dd98"),m=s("872c"),l=s("6b9e"),d={name:"Frameworks",mixins:[m["a"]],data:function(){return{repo:window.repo,showMine:!1,showNotMine:!1,filterByConfig:!1,numIdentities:EcIdentityManager.ids.length,parentObjectClass:"frameworks-sticky",sortBy:null,defaultConfig:""}},created:function(){this.sortBy=this.conceptMode?"dcterms:title.keyword":"name.keyword",this.$store.commit("editor/t3Profile",!1),this.$store.commit("editor/framework",null),this.spitEvent("viewChanged"),this.setDefaultConfig()},computed:{conceptSchemeString:function(){return"true"===this.queryParams.ceasnDataFields?"Concept Schemes":"Taxonomies"},conceptSchemeStringForButton:function(){return"true"===this.queryParams.ceasnDataFields?"Concept Scheme":"Taxonomy"},showRightAside:function(){return this.$store.getters["app/showRightAside"]},frameworkSearchTerm:function(){return this.$store.getters["app/searchTerm"]},queryParams:function(){return this.$store.getters["editor/queryParams"]},type:function(){return this.conceptMode?"ConceptScheme":"Framework"},searchOptions:function(){var t="";if(this.queryParams&&null!=this.queryParams.filter&&(t+=" AND ("+this.queryParams.filter+")"),(this.showMine||this.queryParams&&!this.conceptMode&&"mine"===this.queryParams.show||this.queryParams&&this.conceptMode&&"mine"===this.queryParams.conceptShow)&&EcIdentityManager.ids.length>0){t+=" AND (";for(var e=0;e<EcIdentityManager.ids.length;e++){0!==e&&(t+=" OR ");var s=EcIdentityManager.ids[e];t+='\\*owner:"'+s.ppk.toPk().toPem()+'"',t+=' OR \\*owner:"'+this.addNewlinesToId(s.ppk.toPk().toPem())+'"'}t+=")"}if(this.showNotMine&&EcIdentityManager.ids.length>0){t+=" AND NOT (";for(e=0;e<EcIdentityManager.ids.length;e++){0!==e&&(t+=" OR ");s=EcIdentityManager.ids[e];t+='\\*owner:"'+s.ppk.toPk().toPem()+'"',t+=' OR \\*owner:"'+this.addNewlinesToId(s.ppk.toPk().toPem())+'"'}t+=")"}return this.filterByConfig&&this.defaultConfig&&(t+=' AND (configuration:"',t+=this.defaultConfig,t+='")'),t},paramObj:function(){var t={size:20},e="name.keyword"===this.sortBy||"dcterms:title.keyword"===this.sortBy?"asc":"desc";return t.sort='[ { "'+this.sortBy+'": {"order" : "'+e+'" , "unmapped_type" : "long",  "missing" : "_last"}} ]',EcIdentityManager.ids.length>0&&this.queryParams&&(!this.conceptMode&&"mine"===this.queryParams.show||this.conceptMode&&"mine"===this.queryParams.conceptShow)&&(t.ownership="me"),t},sortResults:function(){return this.$store.getters["app/sortResults"]},quickFilters:function(){return this.$store.getters["app/quickFilters"]},filteredQuickFilters:function(){var t=this.quickFilters.filter((function(t){return!0===t.checked}));return appLog("filtered value",t),t},conceptMode:function(){return this.$store.getters["editor/conceptMode"]}},components:{List:n["a"],RightAside:c["default"],SearchBar:l["a"]},methods:{canEditItem:function(t){return t.canEditAny(EcIdentityManager.getMyPks())},frameworkClick:function(t){var e=this;this.conceptMode?EcConceptScheme.get(t.id,(function(s){e.$store.commit("editor/framework",s),e.$store.commit("editor/clearFrameworkCommentData"),e.$store.commit("app/setCanViewComments",e.canViewCommentsCurrentFramework()),e.$store.commit("app/setCanAddComments",e.canAddCommentsCurrentFramework()),e.$router.push({name:"conceptScheme",params:{frameworkId:t.id}})}),appError):EcFramework.get(t.id,(function(s){e.$store.commit("editor/framework",s),e.$store.commit("editor/clearFrameworkCommentData"),e.$store.commit("app/setCanViewComments",e.canViewCommentsCurrentFramework()),e.$store.commit("app/setCanAddComments",e.canAddCommentsCurrentFramework()),e.$router.push({name:"framework",params:{frameworkId:t.id}})}),appError)},getName:function(t){var e=EcArray.isArray(t)?t:[t];return-1!==Thing.getDisplayStringFrom(e).toLowerCase().indexOf("http")?this.resolveNameFromUrl(Thing.getDisplayStringFrom(e)):Thing.getDisplayStringFrom(e)},addNewlinesToId:function(t){t=t.substring(0,26)+"\n"+t.substring(26);var e=t.length,s=27;while(s+64<e)t=t.substring(0,s+64)+"\n"+t.substring(s+64),s+=65,e++;return t=t.substring(0,e-24)+"\n"+t.substring(e-24),t},setDefaultConfig:function(){var t=this;localStorage.getItem("cassAuthoringToolDefaultBrowserConfigId")?this.defaultConfig=localStorage.getItem("cassAuthoringToolDefaultBrowserConfigId"):this.repo.searchWithParams("@type:Configuration",{size:1e4},(function(e){"true"===e.isDefault&&(t.defaultConfig=e.shortId())}),(function(){}),(function(){}))},scrollFunction:function(t){document.getElementsByClassName("frameworks-sticky");var e=t.target.scrollTop;this.parentObjectClass=0!==e?"frameworks-sticky scrolled":"frameworks-sticky"}},mounted:function(){"lastEdited"===this.sortResults.id?this.sortBy="schema:dateModified":"dateCreated"===this.sortResults.id&&(this.sortBy="schema:dateCreated"),this.showMine=!1,this.showNotMine=!1,this.filterByConfig=!1;for(var t=0;t<this.filteredQuickFilters.length;t++)"ownedByMe"===this.filteredQuickFilters[t].id&&(this.showMine=!0),"notOwnedByMe"===this.filteredQuickFilters[t].id&&(this.showNotMine=!0),"configMatchDefault"===this.filteredQuickFilters[t].id&&(this.filterByConfig=!0);var e=document.getElementById("frameworks");e.addEventListener("scroll",o()(this.scrollFunction,100,{leading:!0}))},watch:{sortResults:function(){"lastEdited"===this.sortResults.id?this.sortBy="schema:dateModified":"dateCreated"===this.sortResults.id?this.sortBy="schema:dateCreated":this.sortBy=this.conceptMode?"dcterms:title.keyword":"name.keyword"},filteredQuickFilters:function(){this.showMine=!1,this.showNotMine=!1,this.filterByConfig=!1;for(var t=0;t<this.filteredQuickFilters.length;t++)"ownedByMe"===this.filteredQuickFilters[t].id&&(this.showMine=!0),"notOwnedByMe"===this.filteredQuickFilters[t].id&&(this.showNotMine=!0),"configMatchDefault"===this.filteredQuickFilters[t].id&&(this.filterByConfig=!0)}}},h=d,u=(s("217e"),s("2877")),p=Object(u["a"])(h,i,a,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-58708fa9.fdfdb874.js.map