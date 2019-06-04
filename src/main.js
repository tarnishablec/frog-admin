import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import './plugins/element.js'


Vue.config.productionTip = false;

Vue.component('vScroll', VuePerfectScrollbar);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
