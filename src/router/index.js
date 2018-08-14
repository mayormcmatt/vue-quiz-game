import Vue from 'vue'
import Router from 'vue-router'
import GameStart from '@/components/GameStart'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'gamestart',
			component: GameStart
		},
		{
			path: '/game',
			name: 'game',
			component: Game
		}
	]
})