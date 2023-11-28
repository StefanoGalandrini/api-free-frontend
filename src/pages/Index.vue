<script>
import axios from "axios";

export default {
	data() {
		return {
			posts: [],
		};
	},

	mounted() {
		axios
			.get("http://localhost:3000/posts")
			.then((response) => {
				this.posts = response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
</script>

<template>
	<div class="cards-container">
		<div class="card" v-for="post in posts" :key="post.id">
			<img :src="post.image" alt="{{post.title}}" class="card-image" />
			<div class="card-body">
				<h2 class="card-title">{{ post.title }}</h2>
				<p class="card-content">{{ post.content }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.cards-container {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
	align-items: space-between;
	padding: 20px;
}

.card {
	border: 1px solid #ddd;
	border-radius: 8px;
	overflow: hidden;
	width: 300px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.card-image {
	width: 100%;
	height: 200px;
	object-fit: cover;
}

.card-body {
	padding: 15px;
}

.card-title {
	margin: 0 1rem 2rem;
	font-size: 1.25em;
	color: #dddddd;
	font-weight: bold;
	text-align: center;
}

.card-content {
	font-size: 1em;
	color: #808080;
}
</style>
