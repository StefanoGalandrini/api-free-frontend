import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/pages/Home";
import CreatePost from "../src/pages/CreatePost";


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
