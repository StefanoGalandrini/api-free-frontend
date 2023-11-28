<script>
import {RouterLink} from "vue-router";

export default {
	components: {
		RouterLink,
	},
};
</script>

<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/posts">Vedi tutti i Post</RouterLink>
		<RouterLink to="/create">Crea un nuovo Post</RouterLink>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 80px;
	background-color: #222222;

	a {
		font-weight: 500;
		font-size: 1.2rem;
		color: #b0b0b0;
		text-decoration: none;
	}
	a:hover {
		color: #eeeeee;
		text-decoration: underline;
		box-shadow: #aaaaaa;
	}
}
</style>
