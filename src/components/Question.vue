<template>
	<div>
		<h3 class="question">{{question}}</h3>
	</div>
</template>

<script>
	export default {
		props: ['question']
	};
</script>

<style lang="scss" scoped>
	.question {
		font-size: 2.2rem;
		font-weight: 300;
		text-align: center;
	}
</style>