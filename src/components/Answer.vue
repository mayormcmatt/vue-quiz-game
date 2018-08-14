<template>
	<div class="answers">
		<div class="answer-options-container">
			<div class="answer-option" v-for="option in options">
				<button @click="pickOption(option)" :class="{blueState: gameActive, yellowState: selected === option && selected !== correct, greenState: !gameActive && selected === option && selected === correct || !gameActive && selected !== correct && option === correct, redState: !gameActive}">
					{{ option }}
				</button>
			</div>
			<button v-if="!gameActive" @click="nextQuestion()">Next</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['answers'],
		data() {
			return {
				options: [],
				correct: '',
				status: false,
				gameActive: true,
				selected: ''
			}
		},
		methods: {
			assign: function () {
				this.options = this.answers.incorrect_answers,
					this.correct = this.answers.correct_answer,
					this.gameActive = true,
					this.selected = ''
				console.log(this.correct)
			},
			pickOption: function (op) {
				this.gameActive = false
				this.selected = op
				this.correct === this.selected ? this.status = true : this.status = false
			},
			nextQuestion: function () {
				this.$emit('nextQuestion', this.status)
			}
		},
		watch: {
			'$props': {
				handler: function (val, oldVal) {
					this.assign()
				},
				deep: true
			}
		},
		created() {
			this.assign()
		}
	}
</script>

<style scoped>
	.blueState {
		background-color: deepskyblue;
	}

	.greenState {
		background-color: green !important;
		pointer-events: none;
	}

	.redState {
		background-color: orangered;
		pointer-events: none;
	}

	.yellowState {
		background-color: yellow;
		pointer-events: none;
	}
</style>