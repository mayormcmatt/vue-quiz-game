<template>
	<div>
		<question :question='question'></question>
		<answers :answers='activeQuestion' @nextQuestion='getQuestion($event)'></answers>
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
				console.log('firing')
				if (answer) {
					this.result.correct++
				} else if (answer === false) {
					this.result.incorrect++
				} else if (answer === null) {
					console.log("Response null")
				}

				if (this.questions[0]) {
					this.gameActive = true
					this.activeQuestion = this.questions.shift()
					this.question = this.activeQuestion.question
					console.log(this.question)
				} else {
					this.$store.commit('setResults', this.result)
					this.$router.push({
						name: 'results'
					})
				}
			}
		},
		created() {
			this.getQuestion();
		}
	};
</script>

<style scoped>
</style>