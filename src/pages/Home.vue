<script>
export default {};
</script>

<template>
	<div class="container">
		<div class="image-container">
			<img src="../assets/imgs/home.jpg" alt="Immagine Descrittiva" />
		</div>
		<div class="text-container">
			<h1 class="title">Un blog è per sempre</h1>
			<p class="subtitle">
				...anche se a volte sarebbe bene finirla lì e farsene una ragione.
			</p>
		</div>
	</div>
</template>

<style lang="scss">
.container {
	margin-top: 80px;
	height: 90vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
}

.image-container {
	flex-shrink: 0;
}

.image-container img {
	height: 500px;
	width: auto;
	margin-right: 20px;
	border-radius: 10px;
}

.text-container {
	text-align: left;
}

.title {
	margin-bottom: 4rem;
	font-size: 3rem;
	color: #1a1a1a;
}

.subtitle {
	font-size: 1.5rem;
	font-style: italic;
	color: #050505;
}
</style>
