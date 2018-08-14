<template>
	<div>
		<question :question='question'></question>
		<answers :answers='activeQuestion'></answers>
	</div>
</template>

<script>
	import Question from "./Question.vue";
	import Answer from "./Answer.vue";
	export default {
		components: {
			question: Question,
			answers: Answer
		},
		data() {
			return {
				questions: this.$store.state.questions,
				question: '',
				activeQuestion: {},
				result: {
					correct: 0,
					incorrect: 0
				}
			}
		},
		methods: {
			getQuestion(answer) {
				this.activeQuestion = this.questions.shift()
				this.question = this.activeQuestion.question
				console.log(this.question)
			}
		},
		created() {
			// console.log(this.questions)
			this.getQuestion();
		}
	};
</script>

<style scoped>
</style>