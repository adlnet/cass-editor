(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3452e5f8"],{1102:function(e,t,r){"use strict";t["a"]={computed:{t3CompetencyProfile:function(){var e=this;return{"@id":{"@id":"https://schema.cassproject.org/0.4/Competency/id","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/URL"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"The URL of the competency."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"ID"}],readOnly:"true"},"https://purl.org/ctdlasn/terms/codedNotation":{"@id":"https://purl.org/ctdlasn/terms/codedNotation","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/Text"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"An alphanumeric notation or ID code as defined by the promulgating body to identify this resource."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Code"}]},"http://schema.org/name":{"@id":"http://schema.org/name","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/Text"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"Name of the competency."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Name"}],isRequired:"true"},"http://schema.org/description":{"@id":"http://schema.org/description","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/Text"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"Description of the competency."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Description"}]},"http://purl.org/dc/terms/type":{"@id":"http://purl.org/dc/terms/type","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/Text"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"The textual label identifying the category of the competency as designated by the promulgating body."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Type"}]},"https://schema.cassproject.org/0.4/Competency/scope":{"@id":"https://schema.cassproject.org/0.4/Competency/scope","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/Text"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"Scope in which the competency may be applied. e.g. Underwater."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Scope"}]},"https://purl.org/ctdlasn/terms/conceptTerm":{"@id":"https://purl.org/ctdlasn/terms/conceptTerm","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://schema.org/rangeIncludes":[{"@id":"https://schema.cassproject.org/0.4/skos/Concept"}],noTextEditing:"true","http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"A term drawn from a controlled vocabulary used by the promulgating agency to refine and differentiate individual resources contextually."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Context"}]},"https://schema.cassproject.org/0.4/Level":{"@id":"https://schema.cassproject.org/0.4/Level","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://schema.org/rangeIncludes":[{"@id":"https://schema.cassproject.org/0.4/Level"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"When an individual's performance in a competency can be measured, a level specifies milestones that an individual can reach, creating fine-grained distinction between the proficient and the adept."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Rubric Cell"}],valuesIndexed:function(){return e.levels},noTextEditing:"true",add:function(t){e.addLevel(t)},remove:function(t,r){e.removeLevelFromFramework(r)},save:function(){e.saveFramework()},profile:{"http://schema.org/name":{"@id":"http://schema.org/name","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Level"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/Text"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":'The title that one who holds this performance level may assume. e.g. "Fast"'}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Rubric Column Header"}]},"https://schema.cassproject.org/0.4/competency":{"@id":"https://schema.cassproject.org/0.4/competency","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Level"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/URL"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"Specifies the URL of the competency the level relates to."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Rubric Row Header"}]},alwaysProperties:["http://schema.org/name","https://schema.cassproject.org/0.4/competency"]}},narrows:{"http://schema.org/rangeIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"A sub-competency relationship which has relevance to this competency."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Narrows"}],valuesIndexed:function(){return e.relations["narrows"]},noTextEditing:"true",add:function(t,r){e.addRelationsToFramework(t,"narrows",r)},save:function(){},remove:function(t,r){e.removeRelationFromFramework(t,"narrows",r)}},broadens:{"http://schema.org/rangeIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"Covers other relevant competencies not found in this competency."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Broadens"}],valuesIndexed:function(){return e.relations["broadens"]},noTextEditing:"true",add:function(t,r){e.addRelationsToFramework(t,"broadens",r)},save:function(){},remove:function(t,r){e.removeRelationFromFramework(t,"broadens",r)}},isEquivalentTo:{"http://schema.org/rangeIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"Represents same capability in all aspects to another competency."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Equivalent To"}],valuesIndexed:function(){return e.relations["isEquivalentTo"]},noTextEditing:"true",add:function(t,r){e.addRelationsToFramework(t,"isEquivalentTo",r)},save:function(){},remove:function(t,r){e.removeRelationFromFramework(t,"isEquivalentTo",r)}},isSimilarTo:{"http://schema.org/rangeIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Is Similar To"}],valuesIndexed:function(){return e.relations["isSimilarTo"]},noTextEditing:"true",add:function(t,r){e.addRelationsToFramework(t,"isSimilarTo",r)},save:function(){},remove:function(t,r){e.removeRelationFromFramework(t,"isSimilarTo",r)}},isPartiallySameAs:{"http://schema.org/rangeIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Is Partially Same As"}],valuesIndexed:function(){return e.relations["isPartiallySameAs"]},noTextEditing:"true",add:function(t,r){e.addRelationsToFramework(t,"isPartiallySameAs",r)},save:function(){},remove:function(t,r){e.removeRelationFromFramework(t,"isPartiallySameAs",r)}},isRelatedTo:{"http://schema.org/rangeIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"This competency has some degree of overlap with another."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Is Related To"}],valuesIndexed:function(){return e.relations["isRelatedTo"]},noTextEditing:"true",add:function(t,r){e.addRelationsToFramework(t,"isRelatedTo",r)},save:function(){},remove:function(t,r){e.removeRelationFromFramework(t,"isRelatedTo",r)}},enables:{"http://schema.org/rangeIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Enables"}],valuesIndexed:function(){return e.relations["enables"]},noTextEditing:"true",add:function(t,r){e.addRelationsToFramework(t,"enables",r)},save:function(){},remove:function(t,r){e.removeRelationFromFramework(t,"enables",r)}},isEnabledBy:{"http://schema.org/rangeIncludes":[{"@id":"https://schema.cassproject.org/0.4/Competency"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"A recommended option that speeds up acquisition of this competency."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Is Enabled By"}],valuesIndexed:function(){return e.relations["isEnabledBy"]},noTextEditing:"true",add:function(t,r){e.addRelationsToFramework(t,"isEnabledBy",r)},save:function(){},remove:function(t,r){e.removeRelationFromFramework(t,"isEnabledBy",r)}},primaryProperties:["https://purl.org/ctdlasn/terms/codedNotation","http://schema.org/name","http://schema.org/description"],secondaryProperties:["@id","http://purl.org/dc/terms/type","https://schema.cassproject.org/0.4/Competency/scope","https://purl.org/ctdlasn/terms/conceptTerm","https://schema.cassproject.org/0.4/Level","narrows","broadens","isEquivalentTo","isSimilarTo","isPartiallySameAs","isRelatedTo","enables","isEnabledBy"],tertiaryProperties:[]}},t3FrameworkProfile:function(){return{"@id":{"@id":"https://schema.cassproject.org/0.4/Framework/id","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Framework"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/URL"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"The URL of the framework."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"ID"}],readOnly:"true"},"http://schema.org/name":{"@id":"http://schema.org/name","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Framework"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/Text"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"Name of the competency framework."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Name"}],isRequired:"true"},"http://schema.org/description":{"@id":"http://schema.org/description","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Framework"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/Text"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"Description of the framework."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Description"}]},"https://schema.cassproject.org/0.4/level":{"@id":"https://schema.cassproject.org/0.4/level","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Framework"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/URL"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":'The title that one who holds this performance level may assume. e.g. "Fast"'}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Available Levels"}]},"http://schema.org/publisher":{"@id":"http://schema.org/publisher","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Framework"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/URL"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"The entity responsible for making this competency framework available."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Publisher"}]},"http://purl.org/dc/elements/1.1/source":{"@id":"http://purl.org/dc/elements/1.1/source","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Framework"}],"http://schema.org/rangeIncludes":[{"@id":"http://schema.org/URL"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"A URI to the original competency framework which this competency framework is based on or derived from."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Extracted From"}]},"http://schema.org/dateCreated":{"@id":"http://schema.org/dateCreated","@type":["http://www.w3.org/2000/01/rdf-schema#Property"],"http://schema.org/domainIncludes":[{"@id":"https://schema.cassproject.org/0.4/Framework"}],"http://schema.org/rangeIncludes":[{"@id":"http://www.w3.org/2001/XMLSchema#date"}],"http://www.w3.org/2000/01/rdf-schema#comment":[{"@language":"en","@value":"Date of creation of this resource."}],"http://www.w3.org/2000/01/rdf-schema#label":[{"@language":"en","@value":"Extraction Date"}]},primaryProperties:["http://schema.org/name","http://schema.org/description"],secondaryProperties:["@id","https://schema.cassproject.org/0.4/level","http://schema.org/publisher","http://purl.org/dc/elements/1.1/source","http://schema.org/dateCreated"],tertiaryProperties:[]}}}}},"1f27":function(e,t,r){"use strict";r("ac1f"),r("5319");t["a"]={methods:{exportAsn:function(e){window.open(e.replace("/data/","/asn/"),"_blank")},exportJsonld:function(e){window.open(e,"_blank")},exportRdfQuads:function(e){var t=this.framework?this.framework.getName():this.importFramework.getName(),r=this;this.get(e,null,{Accept:"text/n4"},(function(e){r.download(t+".n4",e)}),(function(e){appLog(e)}))},exportRdfJson:function(e){var t=this.framework?this.framework.getName():this.importFramework.getName(),r=this;this.get(e,null,{Accept:"application/rdf+json"},(function(e){r.download(t+".rdf.json",e)}),(function(e){appLog(e)}))},exportRdfXml:function(e){var t=this.framework?this.framework.getName():this.importFramework.getName(),r=this;this.get(e,null,{Accept:"application/rdf+xml"},(function(e){r.download(t+".rdf.xml",e)}),(function(e){appLog(e)}))},exportTurtle:function(e){var t=this.framework?this.framework.getName():this.importFramework.getName(),r=this;this.get(e,null,{Accept:"text/turtle"},(function(e){r.download(t+".turtle",e)}),(function(e){appLog(e)}))},exportCtdlasnJsonld:function(e){window.open(e.replace("/data/","/ceasn/"),"_blank")},exportCtdlasnCsv:function(e){var t=this;EcRemote.getExpectingString(e.replace("/data/","/ceasn/"),null,(function(e){CSVExport.exportCTDLASN(JSON.parse(e),t.framework?t.framework.getName():t.importFramework.getName())}),(function(e){appLog(e)}))},exportCsv:function(){CSVExport.exportFramework(this.framework?this.framework.id:this.importFramework.id,appLog,appLog)},exportCasePackages:function(e){window.open(this.repo.selectedServer+"ims/case/v1p0/CFPackages/"+e,"_blank")},exportCaseItems:function(e){window.open(this.repo.selectedServer+"ims/case/v1p0/CFItems/"+e,"_blank")},download:function(e,t){var r=new Blob([t],{type:"text/plain;charset=utf-8"});saveAs(r,e)}}}},"6ffa4":function(e,t,r){"use strict";r("fb6a");t["a"]={methods:{removeObject:function(e){appLog("removing "+e.id);var t=this,r=this.$store.getters["editor/framework"],o=r.competency?r.competency.slice():null,a=r.relation?r.relation.slice():null,n=r.level?r.level.slice():null;r["schema:dateModified"]=(new Date).toISOString(),r.removeCompetency(e.shortId(),(function(){var e=t.framework;t.$store.commit("editor/addEditsToUndo",[{operation:"update",id:e.shortId(),fieldChanged:["competency","relation","level"],initialValue:[o,a,n]}]),!0===t.$store.state.editor.private&&!0!==EcEncryptedValue.encryptOnSaveMap[f.id]&&(e=EcEncryptedValue.toEncryptedValue(e)),repo.saveTo(e,(function(){t.$store.commit("editor/framework",r)}),appError)}),appLog)},deleteObject:function(e){appLog("deleting "+e.id);var t=this,r=this.$store.getters["editor/framework"];if(e.shortId()===r.shortId())this.repo.deleteRegistered(r,(function(e){if(t.spitEvent("frameworkDeleted",r.shortId(),"editFrameworkSection"),null!=r.competency)for(var o=0;o<r.competency.length;o++)t.conditionalDelete(r.competency[o]);if(null!=r.relation)for(o=0;o<r.relation.length;o++)t.conditionalDelete(r.relation[o]);if(null!=r.level)for(o=0;o<r.level.length;o++)t.conditionalDelete(r.level[o]);t.$store.commit("editor/framework",null),t.importType?t.$store.commit("app/importFramework",null):t.$router.push({name:"frameworks"})}),appLog);else{var o=r.competency?r.competency.slice():null,a=r.relation?r.relation.slice():null,n=r.level?r.level.slice():null;this.$store.commit("editor/selectedCompetency",e),r["schema:dateModified"]=(new Date).toISOString(),r.removeCompetency(e.shortId(),(function(){r.removeLevel(e.shortId()),t.$store.commit("editor/addEditsToUndo",[{operation:"delete",obj:e},{operation:"update",id:r.shortId(),fieldChanged:["competency","relation","level"],initialValue:[o,a,n],changedValue:[r.competency,r.relation,r.level]}]),t.conditionalDelete(e.shortId()),t.spitEvent("competencyDeleted",e.shortId(),"editFrameworkSection"),t.$store.commit("editor/selectedCompetency",null);var s=r;!0===t.$store.state.editor.private&&!0!==EcEncryptedValue.encryptOnSaveMap[r.id]&&(s=EcEncryptedValue.toEncryptedValue(r)),t.repo.saveTo(s,(function(){t.$store.commit("editor/framework",r)}),appError)}),appLog)}}}}},b1ab:function(e,t,r){"use strict";r("c975"),r("b0c0");t["a"]={data:function(){return{levels:null,relations:{},alignments:{}}},watch:{refreshLevels:function(){this.refreshLevels&&this.updateLevels()},relationArray:function(){this.updateRelations()},refreshAlignments:function(){this.refreshAlignments&&this.updateAlignments()}},computed:{refreshLevels:function(){return this.$store.getters["editor/refreshLevels"]},relationArray:function(){return this.framework?this.framework.relation:this.importFramework?this.importFramework.relation:void 0},refreshAlignments:function(){return this.$store.getters["editor/refreshAlignments"]}},methods:{updateLevels:function(){var e=this;!0===this.$store.getters["editor/refreshLevels"]&&this.$store.commit("editor/refreshLevels",!1);var t={};this.framework&&(this.framework.level?(new EcAsyncHelper).each(this.framework.level,(function(e,r){EcLevel.get(e,(function(e){var o=e.competency;EcArray.isArray(o)||(o=[o]);for(var a=0;a<o.length;a++)EcArray.isArray(t[o[a]])||(t[o[a]]=[]),t[o[a]].push({"@id":e.shortId()});r()}),r)}),(function(r){e.levels=t})):this.levels=null)},updateRelations:function(){var e,t;if(!(null===(e=this.framework)||void 0===e?void 0:e.relation)&&!(null===(t=this.importFramework)||void 0===t?void 0:t.relation))return this.relations={},void this.$store.commit("editor/relations",{});var r=this,o=[];(new EcAsyncHelper).each(this.framework?this.framework.relation:this.importFramework.relation,(function(e,t){EcAlignment.get(e,(function(e){if(e&&e.source&&e.target){var a={},n=e.relationType,s=null;if("true"===r.queryParams.ceasnDataFields&&"narrows"===n){var c=r.framework;c||(c=r.importFramework),-1!==c.competency.indexOf(e.target)&&(n="isChildOf",s="hasChild")}if("narrows"===n&&(s="broadens"),a.type=n,a.source=e.source,a.target={"@id":e.target},o.push(a),s){var i={};i.type=s,i.source=e.target,i.target={"@id":e.source},o.push(i)}}t()}),t)}),(function(e){for(var t={},a=0;a<o.length;a++){var n=o[a];t[n.type]||(t[n.type]={}),t[n.type][n.source]||(t[n.type][n.source]=[]),t[n.type][n.source].push(n.target)}r.relations=t,r.$store.commit("editor/relations",r.relations)}))},updateAlignments:function(){var e=this;if(!0===this.$store.getters["editor/refreshAlignments"]&&this.$store.commit("editor/refreshAlignments",!1),this.framework&&this.framework.competency){var t={};(new EcAsyncHelper).each(this.framework.competency,(function(r,o){var a='@type:CreativeWork AND educationalAlignment.targetUrl:"'+r+'"';e.repo.searchWithParams(a,{size:25},null,(function(e){for(var a=0;a<e.length;a++){var n=e[a].educationalAlignment.alignmentType+" (resource)";t[n]||(t[n]={}),t[n][r]||(t[n][r]=[]),t[n][r].push({"@id":e[a].shortId(),name:e[a].name,"@value":e[a].url})}o()}),o)}),(function(r){e.alignments=t}))}}}}}}]);
//# sourceMappingURL=chunk-3452e5f8.1fc0bbd9.js.map