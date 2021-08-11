import Vue from "vue";
import App from "./app.vue";
import VueRouter from 'vue-router';
import Vuex from 'vuex'

import createRouter from './router/router';
import createStore from './store/store'

// import './assets/style/test.css'

Vue.use(VueRouter);
Vue.use(Vuex)

const router = createRouter();
const store = createStore()

// import "./assects/style/test.css";
// import "./assects/style/test-stylus.styl";
// import "./assects/images/leica5.jpg";

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
    router,
    store,
  render: (h) => h(App),
}).$mount('#root');