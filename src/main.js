import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import './plugins/element-ui.js'
import './style/index.scss'
import './assets/ant-icon'
import axios from '@/plugins/axios'
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false;

Vue.component('vScroll', VuePerfectScrollbar);

Vue.use(AsyncComputed);

Vue.prototype.$vars = store.state.style.vars;
Vue.prototype.$themes = store.state.style.themes;
Vue.prototype.$apps = store.state.apps;

Vue.prototype.$axios = axios;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
