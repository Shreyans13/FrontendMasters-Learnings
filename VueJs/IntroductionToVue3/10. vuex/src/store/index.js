import { createStore } from "vuex";

export default createStore({
	state: {
		counter: 0
	},
	// showing things, not mutating state like computed
	getters: {
		tripleCounter: state => {
			return state.counter * 3;
		}
	},
	// mutating the state
	// mutations are always synchronous
	mutations: {
		// showing passed with payload, int this case num
		increment: (state, num) => {
			state.counter += num;
		},
		decrement: (state, num) => {
			state.counter -= num;
		}
	},
	// commits the mutations, it's asynchronous
	// this is where you call the APIs
	actions: {
		// showing passed with payload.
		// if we need more than one value, we would pass the object
		incrementAsync({ commit }, num) {
			setTimeout(() => {
				commit("increment", num);
			}, 1000);
		}
	},
	modules: {}
});
