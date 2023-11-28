<script>
import axios from "axios";

export default {
	data() {
		return {
			categories: [],
			tags: [],
			users: [],
			post: {
				title: "",
				content: "",
				image: "",
				categoryId: null,
				published: true,
				userId: 1,
				tags: [],
			},
		};
	},

	methods: {
		async submitPost() {
			try {
				const response = await axios.post(
					"http://localhost:3000/posts",
					this.post,
				);

				this.$router.push({name: "Index"});
			} catch (error) {
				console.log(error);
			}
		},

		async getCategories() {
			try {
				const response = await axios.get("http://localhost:3000/categories");
				this.categories = response.data;
			} catch (error) {
				console.log(error);
			}
		},

		async getTags() {
			try {
				const response = await axios.get("http://localhost:3000/tags");
				this.tags = response.data;
			} catch (error) {
				console.log(error);
			}
		},

		async getUsers() {
			try {
				const response = await axios.get("http://localhost:3000/users");
				this.users = response.data;
				console.log(this.users);
			} catch (error) {
				console.log(error);
			}
		},
	},

	mounted() {
		this.getCategories();
		this.getTags();
		this.getUsers();
	},
};
</script>

<template>
	<form @submit.prevent="submitPost">
		<div class="form-group">
			<label for="category">Categoria: </label>
			<select id="category" v-model="post.categoryId">
				<option
					v-for="category in categories"
					:value="category.id"
					:key="category.id">
					{{ category.name }}
				</option>
			</select>
		</div>

		<div class="form-group">
			<label class="tags-label">Tags</label>
			<div class="tags-container">
				<div v-for="tag in tags" :key="tag.id" class="tag-item">
					<input
						type="checkbox"
						:id="'tag-' + tag.id"
						:value="tag.id"
						v-model="post.tags" />
					<label :for="'tag-' + tag.id">{{ tag.name }}</label>
				</div>
			</div>
		</div>

		<div class="form-group">
			<label for="title">Titolo e contenuto: </label>
			<input type="text" v-model="post.title" placeholder="Titolo del Post" />

			<textarea
				v-model="post.content"
				placeholder="Contenuto del Post"></textarea>
		</div>

		<div class="form-group">
			<label class="tags-label">Pubblicato: </label>
			<input type="checkbox" v-model="post.published" />
		</div>

		<div class="form-group">
			<select v-model="post.userId">
				<option v-for="user in users" :value="user.id" :key="user.id">
					{{ user.name }}
				</option>
			</select>
		</div>

		<button type="submit">Crea Post</button>
	</form>
</template>

<style lang="scss" scoped>
form {
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 60vw;
	margin: 0 auto;
	padding: 20px;
}

.form-group {
	margin-bottom: 2rem;
}

input[type="text"],
textarea,
select {
	margin-bottom: 15px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	display: inline;
}

.tags-label {
	margin-bottom: 30px;
}

.tags-container {
	margin-top: 1rem;
	display: flex;
	flex-wrap: wrap;
	gap: 3rem;
}

.tag-item {
	display: flex;
	align-items: start;
}

input[type="checkbox"] {
	margin-bottom: 15px;
	margin-right: 5px;
}

button {
	width: fit-content;
	padding: 10px 15px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

button:hover {
	background-color: #0056b3;
}
</style>
