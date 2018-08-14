import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
		state: {
			results: {
				correct_answers: 0,
				incorrect_answers: 0
			},
			questions: [],
		},
		getters: {},
		mutations: {
			translateData: function (state, questions) {
				var array = []
				for (var i = 0; i < questions.length; i++) {
					questions[i].question = htmlDecode(questions[i].question);
					questions[i].correct_answer = htmlDecode(questions[i].correct_answer);
					questions[i].incorrect_answers.push(questions[i].correct_answer);
					for (var j = 0; j < questions[i].incorrect_answers.length; j++) {
						questions[i].incorrect_answers[j] = htmlDecode(questions[i].incorrect_answers[j]);
					}
					shuffle(questions[i].incorrect_answers);
				}
				state.questions = questions;
				// console.log(state.questions)
			}
		},
		actions: {
			getQuestions(context) {
				return fetch('https://opentdb.com/api.php?amount=10')
					.then(res => res.json())
					.then(data => {
						// console.log(data.results)
						context.commit('translateData', data.results)
					})
			}
		}
	}),
	htmlDecode = function (input) {
		var e = document.createElement('div');
		e.innerHTML = input;
		return e.childNodes[0].nodeValue;
	},
	shuffle = function (a) {
		for (let i = a.length; i; i--) {
			let j = Math.floor(Math.random() * i);
			[a[i - 1], a[j]] = [a[j], a[i - 1]];
		}
		return a;
	}