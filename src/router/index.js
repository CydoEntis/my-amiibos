import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Amiibos from "../views/Amiibos.vue";
import Collection from "../views/Collection.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/amiibos",
		name: "Amiibos",
		component: Amiibos,
	},
	{
		path: "/collection",
		name: "Collection",
		component: Collection,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
