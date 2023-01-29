import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
	{
		path: "*",
		name: "404",
		meta: { title: "Sumobot" },
		component: () => import("./views/Home"),
	},
	{
		path: "/",
		name: "Home",
		meta: { title: "Sumobot" },
		component: () => import("./views/Home"),
	},
	{
		path: "/about",
		name: "About",
		meta: { title: "About - Sumobot" },
		component: () => import("./views/About"),
	},
	{
		path: "/competition",
		name: "Competition",
		meta: { title: "Competition - Sumobot" },
		component: () => import("./views/Competition"),
	},
	{
		path: "/workshop",
		name: "Workshop",
		meta: { title: "Workshop - Sumobot" },
		component: () => import("./views/Tutorial"),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	routes,
});

new Vue({
	router,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
