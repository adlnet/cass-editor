(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8821f9e"],{"040c":function(e,t,s){},2102:function(e,t,s){},"3e24":function(e,t,s){},"401c":function(e,t,s){"use strict";var o=s("2102"),i=s.n(o);i.a},6675:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"comment-list-item"},[s("li",{staticClass:"comment-list__user",attrs:{title:e.comment.creatorEmail}},[e._v(" "+e._s(e.comment.creatorName)+" ")]),s("li",{staticClass:"comment-list__email"},[e._v(" "+e._s(e.comment.creatorEmail)+" ")]),s("li",{staticClass:"comment-list__timestamp"},[e._v(" "+e._s(e.toPrettyDateString(e.comment.dateCreated))+" ")]),s("li",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeCommentListDropDown,expression:"closeCommentListDropDown"}],staticClass:"comment-list__message-container"},[e.comment.canModify?s("div",{staticClass:"dropdown",class:{"is-active":e.commentListDropDownActive}},[s("div",{staticClass:"dropdown-trigger"},[s("button",{staticClass:"button is-text has-text-dark",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"},on:{click:function(t){e.commentListDropDownActive=!e.commentListDropDownActive}}},[e._m(0)])]),s("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu",role:"menu"}},[s("div",{staticClass:"dropdown-content"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:e.handleClickEdit}},[e._v(" edit ")]),s("a",{staticClass:"dropdown-item",on:{click:e.handleClickDelete}},[e._v(" delete ")])])])]):e._e(),s("div",{staticClass:"comment-list__message-container__message",class:{"show-more":e.showMore}},[e._v(" "+e._s(e.comment.commentText)+" ")]),e.comment.commentText.length>90?s("div",{staticClass:"buttons is-right"},[e.showMore?s("div",{staticClass:"button is-text has-text-primary",on:{click:function(t){e.showMore=!1}}},[e._v(" show less ")]):s("div",{staticClass:"button is-text has-text-primary",on:{click:function(t){e.showMore=!0}}},[e._v(" show more ")])]):e._e()]),e.comment.lastEditDate?s("li",{staticClass:"comment-list__message_edit"},[e._v(" *Edited: "+e._s(e.toPrettyDateString(e.comment.lastEditDate))+" ")]):e._e(),e._m(1),e.comment.replies.length>0?s("li",e._l(e.comment.replies,(function(e){return s("comment",{key:e.commentId,attrs:{comment:e,canReply:!1}})})),1):e._e()])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"icon has-text-primary"},[s("i",{staticClass:"fas fa-ellipsis-v"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"comment-list__reply_hr"},[s("hr")])}],n=(s("d3b7"),s("b85c")),r=s("872c"),a={name:"Comment",mixins:[r["a"]],components:{comment:function(){return Promise.resolve().then(s.bind(null,"6675"))}},props:{comment:{type:Object},canReply:{type:Boolean,default:!1}},data:function(){return{showMore:!1,commentListDropDownActive:!1}},methods:{closeCommentListDropDown:function(){this.commentListDropDownActive=!1},handleClickReply:function(){this.$store.commit("editor/setAddCommentAboutId",this.comment.aboutId),this.$store.commit("editor/setAddCommentType","reply"),this.$store.commit("editor/setCommentToReply",this.comment.comment),this.$store.commit("app/showModal",{component:"AddComment"})},handleClickEdit:function(){this.commentListDropDownActive=!1,this.$store.commit("editor/setAddCommentAboutId",this.comment.aboutId),this.$store.commit("editor/setAddCommentType","edit"),this.$store.commit("editor/setCommentToEdit",this.comment.comment),this.$store.commit("app/showModal",{component:"AddComment"})},handleClickEditReply:function(e){this.$store.commit("editor/setAddCommentAboutId",this.comment.aboutId),this.$store.commit("editor/setAddCommentType","edit"),this.$store.commit("editor/setCommentToEdit",this.comment.replies[e].comment),this.$store.commit("app/showModal",{component:"AddComment"})},handleClickDelete:function(){var e=[];if(e.push(this.comment.comment),this.comment.replies&&this.comment.replies.length>0){var t,s=Object(n["a"])(this.comment.replies);try{for(s.s();!(t=s.n()).done;){var o=t.value;e.push(o.comment)}}catch(i){s.e(i)}finally{s.f()}}this.$store.commit("editor/setCommentsToDelete",e),this.$store.commit("app/showModal",{component:"DeleteCommentConfirm"})},handleClickDeleteReply:function(e){var t=[];t.push(this.comment.replies[e].comment),this.$store.commit("editor/setCommentsToDelete",t),this.$store.commit("app/showModal",{component:"DeleteCommentConfirm"})}},computed:{commentId:function(){return this.comment.commentId}}},c=a,m=s("2877"),l=Object(m["a"])(c,o,i,!1,null,null,null);t["default"]=l.exports},"94fc":function(e,t,s){"use strict";var o=s("3e24"),i=s.n(o);i.a},d57a:function(e,t,s){"use strict";var o=s("d921"),i=s.n(o);i.a},d921:function(e,t,s){},dd98:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("aside",{staticClass:"menu has-background-light",attrs:{id:"right-side-bar"}},[s("button",{staticClass:"delete is-dark has-text-dark is-pulled-right",attrs:{"aria-label":"close"},on:{click:function(t){return e.$store.commit("app/closeRightAside")}}}),s(e.rightAsideContent,{tag:"Component"})],1)},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("aside",{staticClass:"menu has-background-lightest",attrs:{id:"right-side-bar__comments"}},[e._m(0),e.isCommentsBusy?s("div",{staticClass:"has-text-centered"},[e._m(1)]):e._e(),e.isCommentsBusy?e._e():s("div",[e.commentWrapperList.length<=0?s("div",{staticClass:"has-text-centered"},[e._m(2)]):e._e(),e.commentWrapperList.length>0?e._l(e.commentWrapperList,(function(t,o){return s("div",{key:o,staticClass:"comment-list"},[s("h4",{staticClass:"comment-list__about",on:{click:function(s){return e.setUpScroll(t)}}},[e._v(" "+e._s(t.aboutName)+" ")]),s("Comment",{key:t.commentId,attrs:{comment:t,canReply:e.canReplyToComments}}),s("div",{staticClass:"buttons is-right"},[s("div",{staticClass:"button is-small is-outlined is-primary",attrs:{title:"reply"},on:{click:function(s){return e.handleClickReply(t)}}},[e._m(3,!0),s("span",[e._v("reply")])])])],1)})):e._e()],2)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"right-aside-bar__title"},[s("h3",{staticClass:"title is-size-3"},[e._v(" Comments ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"icon is-large has-text-center has-text-link"},[s("i",{staticClass:"fas fa-2x fa-spinner is-info fa-pulse"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"has-text-center"},[s("p",[s("i",{staticClass:"fa fa-exclamation-circle"}),e._v(" No comments available")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-reply"})])}],a=(s("caad"),s("b0c0"),s("ac1f"),s("841c"),s("1276"),s("b85c")),c=s("6675"),m=s("872c"),l={name:"Comments",mixins:[m["a"]],data:function(){return{COMMENT_SEARCH_SIZE:1e4,isCommentsBusy:!1,localFrameworkCommentList:[],commentAboutMap:{},commentWrapperList:[],commentWrapperMap:{},canReplyToComments:!1}},components:{Comment:c["default"]},methods:{setUpScroll:function(e){var t={ts:Date.now(),scrollId:"#scroll-"+e.aboutId.split("/").pop()};this.$store.commit("editor/setCommentScrollTo",t)},handleClickReply:function(e){this.$store.commit("editor/setAddCommentAboutId",e.aboutId),this.$store.commit("editor/setAddCommentType","reply"),this.$store.commit("editor/setCommentToReply",e.comment),this.$store.commit("app/showModal",{component:"AddComment"})},determineCanModifyComment:function(e){return!!this.loggedOnPerson.shortId().equals(e.creator)},buildCommentWrapper:function(e,t,s){var o={},i=this.frameworkCommentPersonMap[e.creator];return o.comment=e,o.creator=i,o.aboutId=e.about,o.aboutName=t,o.commentId=e.shortId(),o.creatorName=i.name,o.creatorEmail=i.email,o.dateCreated=e.dateCreated-0,e.lastEditDate&&(o.lastEditDate=e.lastEditDate-0),o.commentText=e.text,o.isTopLevel=s,o.canModify=this.determineCanModifyComment(e),o.replies=[],o},buildFrameworkCommentWrappers:function(){var e=this.commentAboutMap[this.currentFramework.shortId()];if(e&&e.length>0){var t,s=Object(a["a"])(e);try{for(s.s();!(t=s.n()).done;){var o=t.value,i=this.buildCommentWrapper(o,this.currentFramework.getName(),!0);this.commentWrapperList.push(i),this.commentWrapperMap[o.shortId()]=i}}catch(n){s.e(n)}finally{s.f()}}},getCompetencyName:function(e){var t=EcRepository.getBlocking(e);return t?t.getName():"Unknown Competency"},buildCompetencyCommentWrappers:function(){if(this.currentFramework.competency){var e,t=Object(a["a"])(this.currentFramework.competency);try{for(t.s();!(e=t.n()).done;){var s=e.value,o=this.commentAboutMap[s];if(o&&o.length>0){var i,n=this.getCompetencyName(s),r=Object(a["a"])(o);try{for(r.s();!(i=r.n()).done;){var c=i.value,m=this.buildCommentWrapper(c,n,!0);this.commentWrapperList.push(m),this.commentWrapperMap[c.shortId()]=m}}catch(l){r.e(l)}finally{r.f()}}}}catch(l){t.e(l)}finally{t.f()}}},addRepliesToParentWrapper:function(e){var t,s=Object(a["a"])(e);try{for(s.s();!(t=s.n()).done;){var o=t.value,i=this.commentWrapperMap[o],n=i.aboutId,r=this.commentWrapperMap[n];r&&r.replies.push(i)}}catch(c){s.e(c)}finally{s.f()}},buildReplyCommentWrappers:function(){var e,t=[],s=Object(a["a"])(this.frameworkCommentList);try{for(s.s();!(e=s.n()).done;){var o=e.value,i=o.shortId(),n=this.commentAboutMap[i];if(n&&n.length>0){var r,c=Object(a["a"])(n);try{for(c.s();!(r=c.n()).done;){var m=r.value,l=this.buildCommentWrapper(m,"reply",!1);this.commentWrapperMap[m.shortId()]=l,t.push(m.shortId())}}catch(d){c.e(d)}finally{c.f()}}}}catch(d){s.e(d)}finally{s.f()}this.addRepliesToParentWrapper(t)},buildCommentDisplayStructures:function(){this.buildFrameworkCommentWrappers(),this.buildCompetencyCommentWrappers(),this.buildReplyCommentWrappers()},buildCommentAboutMap:function(){var e,t=Object(a["a"])(this.frameworkCommentList);try{for(t.s();!(e=t.n()).done;){var s=e.value,o=s.about;this.commentAboutMap[o]||(this.commentAboutMap[o]=[]),this.commentAboutMap[o].push(s)}}catch(i){t.e(i)}finally{t.f()}},parseComments:function(){this.currentFramework?(this.isCommentsBusy=!0,this.commentAboutMap={},this.commentWrapperList=[],this.commentWrapperMap={},this.buildCommentAboutMap(),this.buildCommentDisplayStructures(),this.isCommentsBusy=!1):this.clearAllFrameworkCommentData()},buildFrameworkCommentPersonMapSuccess:function(e){var t,s={},o=Object(a["a"])(e);try{for(o.s();!(t=o.n()).done;){var i=t.value;s[i.shortId()]=i}}catch(n){o.e(n)}finally{o.f()}this.$store.commit("editor/setFrameworkCommentDataLoaded",!0),this.$store.commit("editor/setFrameworkCommentPersonMap",s),this.$store.commit("editor/setFrameworkCommentList",this.localFrameworkCommentList)},buildFrameworkCommentPersonMapFailure:function(e){appLog("buildFrameworkCommentPersonMapFailure: "+e),this.isCommentsBusy=!1},buildCommentCreatorList:function(){var e,t=[],s=Object(a["a"])(this.localFrameworkCommentList);try{for(s.s();!(e=s.n()).done;){var o=e.value;t.includes(o.creator)||t.push(o.creator)}}catch(i){s.e(i)}finally{s.f()}return t},buildFrameworkCommentPersonMap:function(){var e=this.buildCommentCreatorList();e.length>0?window.repo.multiget(e,this.buildFrameworkCommentPersonMapSuccess,this.buildFrameworkCommentPersonMapFailure):this.buildFrameworkCommentPersonMapSuccess([])},sortLocalFrameworkCommentList:function(){this.localFrameworkCommentList.sort((function(e,t){return e.dateCreated-0>t.dateCreated-0?1:t.dateCreated-0>e.dateCreated-0?-1:0}))},buildFrameworkCommentListSuccess:function(e){this.localFrameworkCommentList=e,this.sortLocalFrameworkCommentList(),this.buildFrameworkCommentPersonMap()},buildFrameworkCommentListFailure:function(e){appLog("buildFrameworkCommentListFailure: "+e),this.isCommentsBusy=!1},clearAllFrameworkCommentData:function(){this.isCommentsBusy=!1,this.localFrameworkCommentList=[],this.commentAboutMap={},this.commentWrapperList=[],this.commentWrapperMap={},this.canReplyToComments=!1},buildFrameworkCommentList:function(){if(this.currentFramework){var e={};e.size=this.COMMENT_SEARCH_SIZE,EcComment.search(window.repo,'isBasedOn:"'+this.currentFramework.shortId()+'"',this.buildFrameworkCommentListSuccess,this.buildFrameworkCommentListFailure,null)}else this.clearAllFrameworkCommentData()},buildCommentDataSet:function(){!this.frameworkCommentList||this.frameworkCommentList.length<=0?(this.isCommentsBusy=!0,this.buildFrameworkCommentList()):this.parseComments()}},computed:{loggedOnPerson:function(){return this.$store.getters["user/loggedOnPerson"]},currentFramework:function(){return this.$store.getters["editor/framework"]},currentFrameworkCompetencies:function(){return this.$store.getters["editor/framework"].competency},frameworkCommentList:function(){return this.$store.getters["editor/frameworkCommentList"]},frameworkCommentPersonMap:function(){return this.$store.getters["editor/frameworkCommentPersonMap"]}},watch:{currentFrameworkCompetencies:function(){this.parseComments()},frameworkCommentList:function(){this.parseComments()}},mounted:function(){this.buildCommentDataSet(),this.canReplyToComments=this.canAddCommentsCurrentFramework()}},d=l,u=(s("94fc"),s("2877")),h=Object(u["a"])(d,n,r,!1,null,null,null),p=h.exports,f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("aside",{staticClass:"menu has-background-light",attrs:{id:"comments-side-bar"}},[s("p",{staticClass:"subtitle is-size-4"},[s("span",{staticClass:"icon",on:{click:function(t){return e.$store.commit("app/closeRightAside")}}},[s("i",{staticClass:"fa fa-caret-right"})]),e._v(" Version History ")])])},C=[],b={name:"Versions",data:function(){return{isCommenter:!0,isAdmin:!1,isViewer:!0}},components:{}},k=b,y=(s("eeb6"),Object(u["a"])(k,f,C,!1,null,null,null)),v=y.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"right-aside__filter-and-sort"},[s("h3",{staticClass:"title is-size-4"},[e._v(" Filter and Sort ")]),s("div",{staticClass:"filter-sort-section"},[s("h3",{staticClass:"filter-sort-header"},[e._v(" Sort by ")]),e._l(e.sortResults,(function(t){return s("div",{key:t,staticClass:"field"},[t.enabled?[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sortBy,expression:"sortBy"}],staticClass:"is-checkradio",attrs:{id:t.id,type:"radio",name:"sortResults"},domProps:{value:{id:t.id,label:t.label},checked:e._q(e.sortBy,{id:t.id,label:t.label})},on:{change:function(s){e.sortBy={id:t.id,label:t.label}}}}),s("label",{staticClass:"label",attrs:{for:t.id}},[e._v(e._s(t.label))])]:e._e()],2)}))],2),!e.showQuickFilterHeading||e.$store.getters["editor/conceptMode"]&&!e.loggedIn?e._e():s("div",{staticClass:"filter-sort-section"},[s("h3",{staticClass:"filter-sort-header"},[e._v(" Quick Filters ")]),e._l(e.quickFilters,(function(t){return s("div",{key:t,staticClass:"field"},[t.enabled?[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"option.checked"}],staticClass:"is-checkradio",attrs:{id:t.id,type:"checkbox",name:t.id},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:function(s){var o=t.checked,i=s.target,n=!!i.checked;if(Array.isArray(o)){var r=null,a=e._i(o,r);i.checked?a<0&&e.$set(t,"checked",o.concat([r])):a>-1&&e.$set(t,"checked",o.slice(0,a).concat(o.slice(a+1)))}else e.$set(t,"checked",n)}}}),s("label",{staticClass:"label",attrs:{for:t.id}},[e._v(e._s(t.label))])]:e._e()],2)}))],2),e.$store.getters["editor/conceptMode"]?e._e():s("div",{staticClass:"filter-sort-section"},[s("h3",{staticClass:"filter-sort-header"},[e._v(" Apply search term to ")]),e._l(e.applySearchTo,(function(t){return s("div",{key:t,staticClass:"field"},[t.enabled?[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"option.checked"}],staticClass:"is-checkradio",attrs:{id:t.id,type:"checkbox",name:t.id},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:function(s){var o=t.checked,i=s.target,n=!!i.checked;if(Array.isArray(o)){var r=null,a=e._i(o,r);i.checked?a<0&&e.$set(t,"checked",o.concat([r])):a>-1&&e.$set(t,"checked",o.slice(0,a).concat(o.slice(a+1)))}else e.$set(t,"checked",n)}}}),s("label",{staticClass:"label",attrs:{for:t.id}},[e._v(e._s(t.label))])]:e._e()],2)}))],2)])},_=[],g={name:"FilterAndSort",data:function(){return{sortResults:[{id:"dateCreated",label:"created date",enabled:!0},{id:"lastEdited",label:"last modified",enabled:!0}],quickFilters:[{id:"configMatchDefault",checked:!1,label:"Configuration matches default",enabled:!0},{id:"ownedByMe",checked:!1,label:"Owned by me",enabled:!0},{id:"notOwnedByMe",checked:!1,label:"Not owned by me",enabled:!0}],applySearchTo:[{id:"frameworkName",checked:!1,label:"Framework name",enabled:!0},{id:"frameworkDescription",checked:!1,label:"Framework description",enabled:!0},{id:"competencyLabel",checked:!1,label:"Competency label",enabled:!1},{id:"competencyName",checked:!1,label:"Competency name",enabled:!0},{id:"competencyDescription",checked:!1,label:"Competency description",enabled:!0},{id:"ownerName",checked:!1,label:"Owner name",enabled:!0}],showQuickFilterHeading:!0}},computed:{sortBy:{get:function(){return this.$store.getters["app/sortResults"]},set:function(e){this.$store.commit("app/sortResults",e)}},loggedIn:function(){return EcIdentityManager.ids&&EcIdentityManager.ids.length},searchByOwnerNameEnabled:function(){return this.$store.state.featuresEnabled.searchByOwnerNameEnabled},configurationsEnabled:function(){return this.$store.state.featuresEnabled.configurationsEnabled},queryParams:function(){return this.$store.getters["editor/queryParams"]}},mounted:function(){if(!this.searchByOwnerNameEnabled)for(var e=0;e<this.applySearchTo.length;e++)"ownerName"===this.applySearchTo[e].id&&(this.applySearchTo[e].enabled=!1);if(!this.loggedIn)for(e=0;e<this.quickFilters.length;e++)"configMatchDefault"!==this.quickFilters[e].id&&(this.quickFilters[e].enabled=!1);if(this.$store.getters["editor/conceptMode"]||!this.configurationsEnabled)for(e=0;e<this.quickFilters.length;e++)"configMatchDefault"===this.quickFilters[e].id&&(this.quickFilters[e].enabled=!1);var t=!1;for(e=0;e<this.quickFilters.length;e++)!0===this.quickFilters[e].enabled&&(t=!0);if(this.showQuickFilterHeading=t,"true"===this.queryParams.ceasnDataFields)for(e=0;e<this.applySearchTo.length;e++)"competencyLabel"===this.applySearchTo[e].id?this.applySearchTo[e].enabled=!0:"competencyName"===this.applySearchTo[e].id?this.applySearchTo[e].label="Competency text":"competencyDescription"===this.applySearchTo[e].id&&(this.applySearchTo[e].label="Competency comment")},watch:{applySearchTo:{handler:function(){this.$store.commit("app/applySearchTo",this.applySearchTo)},deep:!0},quickFilters:{handler:function(){appLog("watched"),this.$store.commit("app/quickFilters",this.quickFilters)},deep:!0}}},F=g,A=(s("d57a"),Object(u["a"])(F,w,_,!1,null,null,null)),M=A.exports,$={name:"RightAside",data:function(){return{isCommenter:!0,isAdmin:!1,isViewer:!0}},components:{Comments:p,Versions:v,FilterAndSort:M},computed:{showRightAside:function(){return this.$store.getters["app/showRightAside"]},rightAsideContent:function(){return this.$store.getters["app/rightAsideContent"]}}},L=$,D=(s("401c"),Object(u["a"])(L,o,i,!1,null,null,null));t["default"]=D.exports},eeb6:function(e,t,s){"use strict";var o=s("040c"),i=s.n(o);i.a}}]);
//# sourceMappingURL=chunk-b8821f9e.efa29bd7.js.map