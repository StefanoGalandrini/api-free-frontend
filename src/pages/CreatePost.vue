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
			// generazione del campo immagine
			// (caricamento utente da imlementare
			const randomId = Math.floor(Math.random() * 250) + 1;
			this.post.image = `https://picsum.photos/id/${randomId}/400/300`;

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
	<div class="container">
		<form @submit.prevent="submitPost" class="form-container">
			<!-- Categoria -->
			<div class="form-group">
				<label for="category">Categoria:</label>
				<select v-model="post.categoryId">
					<option disabled value="">Seleziona una categoria</option>
					<option
						v-for="category in categories"
						:value="category.id"
						:key="category.id">
						{{ category.name }}
					</option>
				</select>
			</div>

			<!-- Tags -->
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

			<!-- Titolo -->
			<div class="form-group">
				<label for="title">Titolo del Post:</label>
				<input type="text" id="title" v-model="post.title" />
			</div>

			<!-- Contenuto -->
			<div class="form-group">
				<label for="content">Contenuto del Post:</label>
				<textarea id="content" v-model="post.content"></textarea>
			</div>

			<!-- Pubblicato -->
			<div class="form-group">
				<label for="published">Pubblicato:</label>
				<input type="checkbox" id="published" v-model="post.published" />
			</div>

			<!-- User -->
			<div class="form-group">
				<label for="user">Utente:</label>
				<select v-model="post.userId">
					<option disabled value="">Seleziona un utente</option>
					<option v-for="user in users" :value="user.id" :key="user.id">
						{{ user.name }}
					</option>
				</select>
			</div>

			<!-- Bottone di Invio -->
			<div class="button-container">
				<button type="submit">Crea Post</button>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
.container {
	margin-top: 100px;
	width: 100%;
	height: 100%;
}

.form-container {
	max-width: 600px;
	margin: auto;
	padding: 20px;
}

.form-group {
	display: flex;
	align-items: center;
	margin-bottom: 15px;
}

label {
	flex-basis: 20%;
	margin-right: 10px;
}

input[type="text"],
textarea,
select {
	flex-grow: 1;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
}

textarea {
	resize: vertical;
	height: 100px;
}

.tags-container {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	flex-grow: 1;
}

.tag-item {
	display: flex;
	align-items: center;
	white-space: nowrap;
}

input[type="checkbox"] {
	margin-right: 5px;
}

.button-container {
	text-align: center;

	button {
		background-color: #222222;
		color: #aaaaaa;
		padding: 10px 15px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 16px;
		transition: background-color 0.3s;

		&:hover {
			background-color: #454545;
			color: #eeeeee;
		}
	}
}
</style>
