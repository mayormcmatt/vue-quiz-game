<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	html, body {
		font-size: 16px;
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: 'Fira Sans', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

	}
	h1 {
		font-size: 4rem;
	}
</style>