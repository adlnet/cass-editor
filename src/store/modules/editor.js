import Vue from 'vue';
import Vuex from 'vuex';
import {stat} from 'fs';
Vue.use(Vuex);


const state = {
    framework: null,
    organization: null,
    selectedCompetency: null,
    queryParams: {},
    defaultLanguage: null,
    webSocketBackoff: 100,
    selectCompetencyRelation: null,
    selectingCompetencies: false,
    private: false,
    newCompetency: null,
    newFramework: null,
    t3Profile: false,
    changedObject: null,
    configuration: null,
    commonPathIframe: '',
    iframeCompetencyPathInterframework: '',
    iframeConceptPath: '',
    addCommentAboutId: '',
    addCommentType: '',
    commentToEdit: {},
    commentToReply: {},
    frameworkCommentDataLoaded: false,
    frameworkCommentList: [],
    frameworkCommentPersonMap: {},
    commentsToDelete: [],
    commentScrollTo: {},
    editsToUndo: [],
    lastEditToUndo: null
};
const mutations = {
    framework(state, f) {
        state.framework = f;
    },
    organization(state, f) {
        state.organization = f;
    },
    selectedCompetency(state, comp) {
        state.selectedCompetency = comp;
    },
    queryParams(state, params) {
        state.queryParams = params;
    },
    defaultLanguage(state, lang) {
        state.defaultLanguage = lang;
    },
    webSocketBackoffIncrease(state) {
        state.webSocketBackoff *= 2;
    },
    private(state, bool) {
        state.private = bool;
    },
    selectCompetencyRelation(state, r) {
        state.selectCompetencyRelation = r;
    },
    selectingCompetencies(state, bool) {
        state.selectingCompetencies = bool;
    },
    newCompetency(state, id) {
        state.newCompetency = id;
    },
    newFramework(state, id) {
        state.newFramework = id;
    },
    t3Profile(state, bool) {
        state.t3Profile = bool;
    },
    changedObject(state, id) {
        state.changedObject = id;
    },
    configuration(state, config) {
        state.configuration = config;
    },
    commonPathIframe(state, val) {
        state.commonPathIframe = val;
    },
    iframeCompetencyPathInterframework(state, val) {
        state.iframeCompetencyPathInterframework = val;
    },
    iframeConceptPath(state, val) {
        state.iframeConceptPath = val;
    },
    setAddCommentAboutId(state, val) {
        state.addCommentAboutId = val;
    },
    setAddCommentType(state, val) {
        state.addCommentType = val;
    },
    setCommentToEdit(state, val) {
        state.commentToEdit = val;
    },
    setCommentToReply(state, val) {
        state.commentToReply = val;
    },
    setCommentsToDelete(state, val) {
        state.commentsToDelete = val;
    },
    clearFrameworkCommentData(state) {
        state.frameworkCommentDataLoaded = false;
        state.frameworkCommentList = [];
        state.frameworkCommentPersonMap = {};
    },
    setFrameworkCommentDataLoaded(state, val) {
        state.frameworkCommentDataLoaded = val;
    },
    setFrameworkCommentList(state, val) {
        state.frameworkCommentList = val;
    },
    setFrameworkCommentPersonMap(state, val) {
        state.frameworkCommentPersonMap = val;
    },
    setCommentScrollTo(state, val) {
        state.commentScrollTo = val;
    },
    addEditsToUndo(state, edits) {
        state.editsToUndo.push(edits);
    },
    setLastEditToUndo(state, edit) {
        state.lastEditToUndo = edit;
    }
};
const actions = {
    lastEditToUndo: function(context) {
        console.log("dispatched");
        context.commit('setLastEditToUndo', context.state.editsToUndo.pop());
        return context.state.lastEditToUndo;
    }
};
const getters = {
    framework: function(state) {
        return state.framework;
    },
    organization: function(state) {
        return state.organization;
    },
    selectedCompetency: function(state) {
        return state.selectedCompetency;
    },
    queryParams: function(state) {
        return state.queryParams;
    },
    defaultLanguage: function(state) {
        return state.defaultLanguage;
    },
    webSocketBackoff: function(state) {
        return state.webSocketBackoff;
    },
    selectCompetencyRelation: function(state) {
        return state.selectCompetencyRelation;
    },
    selectingCompetencies: function(state) {
        return state.selectingCompetencies;
    },
    private: function(state) {
        return state.private;
    },
    newCompetency: function(state) {
        return state.newCompetency;
    },
    newFramework: function(state) {
        return state.newFramework;
    },
    t3Profile: function(state) {
        return state.t3Profile;
    },
    changedObject: function(state) {
        return state.changedObject;
    },
    configuration: function(state) {
        return state.configuration;
    },
    addCommentAboutId: function(state) {
        return state.addCommentAboutId;
    },
    addCommentType: function(state) {
        return state.addCommentType;
    },
    commentToEdit: function(state) {
        return state.commentToEdit;
    },
    commentToReply: function(state) {
        return state.commentToReply;
    },
    commentsToDelete: function(state) {
        return state.commentsToDelete;
    },
    frameworkCommentDataLoaded: function(state) {
        return state.frameworkCommentDataLoaded;
    },
    frameworkCommentList: function(state) {
        return state.frameworkCommentList;
    },
    frameworkCommentPersonMap: function(state) {
        return state.frameworkCommentPersonMap;
    },
    commentScrollTo: function(state) {
        return state.commentScrollTo;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};