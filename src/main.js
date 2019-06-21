import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element-ui.js'
import './style/index.scss'
import './assets/ant-icon'
import axios from '@/plugins/axios'
import AsyncComputed from 'vue-async-computed'
import Viser from 'viser-vue'
import '@/plugins/frog-ui'
import VueClipboard from 'vue-clipboard2'
import {jumpTo} from '@/utils/routerUtils'

Vue.config.productionTip = false;

Vue.use(AsyncComputed);
Vue.use(Viser);
Vue.use(VueClipboard);

Vue.prototype.$vars = store.state.style.vars;
Vue.prototype.$themes = store.state.style.themes;
Vue.prototype.$apps = store.state.apps;
Vue.prototype.$jumpTo = jumpTo;
Vue.prototype.$routeState = store.state.routeState;

Vue.prototype.$axios = axios;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
