<template>
	<div class="answers">
		<div class="answer-options-container">
			<div class="answer-option" v-for="option in options">
				<button @click="pickOption(option)" :class="{blueState: gameActive, disabled: !gameActive, yellowState: selected === option && selected !== correct, greenState: !gameActive && selected === option && selected === correct || !gameActive && selected !== correct && option === correct, redState: !gameActive}">
					{{ option }}
				</button>
			</div>
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
	}

	.redState {
		background-color: orangered;
	}

	.yellowState {
		background-color: yellow;
	}

	.disabled {
		pointer-events: none;
	}
</style>