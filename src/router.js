import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/pages/Home.vue";
import CreatePost from "../src/pages/CreatePost.vue";


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home
		},
		{
			path: "/create",
			name: "CreatePost",
			component: CreatePost
		},
	]
});

export default router;
