import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element-ui.js'
import './style/index.scss'
import './assets/ant-icon'
import axios from '@/plugins/axios'
import AsyncComputed from 'vue-async-computed'
import '@/plugins/vue-echarts'
import '@/plugins/frog-ui'
import VueClipboard from 'vue-clipboard2'
import {jumpTo} from '@/utils/routerUtils'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import commonPlugin from '@/plugins/common'

Vue.config.productionTip = false;

Vue.use(commonPlugin);
Vue.use(AsyncComputed);
Vue.use(VueClipboard);

Vue.component('vScroll', VuePerfectScrollbar);

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
