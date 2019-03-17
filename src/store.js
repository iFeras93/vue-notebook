import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './store/mutations';
import state from './store/state';
import * as actions from './store/actions';
import * as getters from './store/getters';


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
