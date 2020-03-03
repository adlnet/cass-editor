import Vue from 'vue';
import Router from 'vue-router';

import About from './views/About.vue';
import Test from './lode/views/Test.vue';
import Frameworks from './views/framework/Frameworks.vue';
import Framework from './views/framework/Framework.vue';
import Organizations from './views/organization/Organizations.vue';
import Organization from './views/organization/Organization.vue';
import Import from './views/framework/Import.vue';
import ConceptScheme from './views/conceptScheme/ConceptScheme.vue';
import Login from './views/login/Login.vue';
import ConfigurationEditor from './views/configuration/ConfigurationEditor';
import UserGroupEditor from './views/usersGroups/UserGroupEditor';
import FrameworkCrosswalk from './views/framework/Crosswalk';

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'frameworks',
            component: Frameworks,
            alias: '/cass-editor/'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/config',
            name: 'configuration',
            component: ConfigurationEditor
        },
        {
            path: '/userGroup',
            name: 'usergroup',
            component: UserGroupEditor
        },
        {
            path: '/crosswalk',
            name: 'crosswalk',
            component: FrameworkCrosswalk
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/framework',
            name: 'framework',
            component: Framework
        },
        {
            path: '/import',
            name: 'import',
            component: Import
        },
        {
            path: '/organizations',
            name: 'organizations',
            component: Organizations
        },
        {
            path: '/organization',
            name: 'organization',
            component: Organization
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/conceptScheme',
            name: 'conceptScheme',
            component: ConceptScheme
        }
    ]
});
