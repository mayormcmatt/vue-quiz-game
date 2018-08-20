<template>
	<div class="answers">
		<div class="answer-options-container">
			<div class="answer-option" v-for="option in options">
				<button @click="pickOption(option)" :class="{blueState: gameActive, yellowState: selected === option && selected !== correct, greenState: !gameActive && selected === option && selected === correct || !gameActive && selected !== correct && option === correct, redState: !gameActive}">
					{{ option }}
				</button>
			</div>
		</div>
		<button class="next-button" v-if="!gameActive" @click="nextQuestion()">Next</button>
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

<style lang="scss" scoped>
	.answer-options-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.answer-option {
		width: 40%;
		margin-bottom: 25px;
		button {
			margin: 0 auto;
			display: block;
			width: 20rem;
			height: 6rem;
			font-size: 1.5rem;
			border-radius: 25px;
			border: 2px solid #555;
			opacity: 0.8;
			transition: 0.2s;
			&:hover {
				background-color: #333;
				color: white;
				opacity: 1;
				transition: 0.2s;
			}
		}
	}

	.next-button {
		display: block;
		margin: 0 auto;
		width: 10rem;
		height: 4rem;
		border-radius: 10px;
		font-size: 1.5rem;
	}

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