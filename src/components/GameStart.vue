<template>
	<div class="game-start-main">
		<div class="tv">
			<div class="tv__screen">
				<div class="tv__screen__text">
					<h1>{{ titleMsg }}
						<br>
						<span>{{titleMsg2}}</span>
					</h1>
					<button @click="getQuestions()">Play</button>
				</div>
			</div>
		</div>
	</div>
</template>button { width: 500px; }

<script>
	export default {
		name: 'GameStart',
		data() {
			return {
				titleMsg: 'Let\'s Play ',
				titleMsg2: 'KNOWITALL!'
			}
		},
		methods: {
			getQuestions() {
				var router = this.$router;
				this.$store.dispatch('getQuestions')
					.then(data => {
						console.log('Request success!');
						router.push({
							name: 'game'
						})
					})
					.catch(data => {
						console.log('Request unsuccessful')
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.game-start-main {
		min-height: 100vh;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		.tv {
			width: 1200px;
			height: 800px;
			background-color: #966F33;
			display: flex;
			justify-content: center;
			align-items: center;
			.tv__screen {
				position: relative;
				width: 900px;
				height: 700px;
				margin: 20px 10px;
				background: #335B96;
				border-radius: 50% / 10%;
				color: white;
				display: flex;
				justify-content: center;
				align-items: center;
				&:before {
					content: "";
					position: absolute;
					top: 8%;
					bottom: 8%;
					right: -4%;
					left: -4%;
					background: #335B96;
					border-radius: 5% / 50%;
				}
				.tv__screen__text {
					width: 90%;
					height: 50%;
					position: absolute;
					h1 {
						text-align: center;
						font-family: 'Parisienne', cursive;
						font-weight: 100;
						span {
							font-family: 'Fontdiner Swanky', cursive;
							letter-spacing: 0.5rem;
						}
					}
					button {
						margin: 0 auto;
						display: block;
						width: 20rem;
						height: 8rem;
						font-size: 3rem;
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
			}
		}
	}
</style>