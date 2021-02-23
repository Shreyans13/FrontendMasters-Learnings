import { createStore } from "vuex";
let inventory = {
	chips: {
		stock: 13
	}
};
let pingInventory = item => {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(inventory[item]);
		}, 3000);
		console.log(reject);
	});
};
export default createStore({
	// state - initial data state
	// single source of truth for store state
	state: {
		supply: 40,
		isRestocking: false,
		isDispensing: false,
		lang: "en"
	},
	// getters - compute derived state
	// to compute derived state based on store state.
	// cached data
	getters: {
		isSupplyLow: state => state.supply < 10,
		lang: state => state.lang
	},
	// actions - commit mutations
	// similar to mutations but it commits mutations
	// can be async
	actions: {
		fetchFromInventory(context) {
			// context can be destructuredd to commit directly {commit}
			context.commit("isRestocking", true);
			pingInventory("chips")
				.then(inventory => {
					context.commit("stockItems", inventory.stock);
				})
				.finally(() => context.commit("isRestocking", false));
		},
		dispense(context) {
			context.commit("dispense");
		},
		toggleLang(context) {
			context.commit("switchLang");
		}
	},
	// mutations - perform tasks
	// the only way to change store state
	// can only be sync
	mutations: {
		isRestocking(state, payload) {
			state.isRestocking = payload;
		},
		dispense(state) {
			state.supply--;
		},
		stockItems(state) {
			state.supply = 40;
		},
		switchLang(state) {
			state.lang = state.lang == "en" ? "es" : "en";
		}
	}
});
