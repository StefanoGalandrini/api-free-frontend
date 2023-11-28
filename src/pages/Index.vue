<script>
import axios from "axios";

export default {
	data() {
		return {
			posts: [],
		};
	},

	methods: {
		async fetchPosts() {
			try {
				const response = await axios.get("http://localhost:3000/posts");
				this.posts = response.data;
			} catch (error) {
				console.error(error);
			}
		},
	},

	mounted() {
		this.fetchPosts();
	},

	beforeRouteUpdate(to, from, next) {
		this.fetchPosts();
		next();
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

				<!-- user, category and tags -->
				<p class="card-user">
					Autore: <span class="text">{{ post.user.name }}</span>
				</p>
				<p class="card-category">
					Categoria: <span class="text">{{ post.category.name }}</span>
				</p>
				<div class="card-tags">
					Tags:
					<span v-for="tag in post.tags" :key="tag.id">{{ tag.name }}</span>
				</div>
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
	border: 1px solid #222222;
	border-radius: 0.5rem;
	overflow: hidden;
	width: 300px;
	background-color: #222222;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.card-image {
	width: 100%;
	aspect-ratio: 4 / 3;
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

.card-user,
.card-category {
	margin: 1rem 0;
	font-style: italic;
}

.text {
	font-weight: bold;
	font-style: normal;
	color: #cfb5ff;
}

.card-tags {
	margin-top: 1rem;
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	span {
		font-size: 0.8rem;
		background-color: #cfb5ff;
		color: #333333;
		padding: 5px;
		max-width: fit-content;
		border-radius: 5px;
	}
}
</style>
