<script>
import {RouterLink, RouterView} from "vue-router";
import Header from "./components/Header.vue";

export default {
	components: {
		RouterLink,
		RouterView,
		Header,
	},
};
</script>

<template>
	<Header />
	<RouterView />
</template>

<style lang="scss" scoped></style>
