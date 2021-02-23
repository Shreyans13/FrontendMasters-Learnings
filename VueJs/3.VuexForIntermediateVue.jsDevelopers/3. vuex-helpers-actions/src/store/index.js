import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let inventory = {
	chips: {
		stock: 10
	}
};
let pingInventory = function(item) {
	return new Promise(resolve => {
		setTimeout(function() {
			resolve(inventory[item]);
		}, 3000);
	});
};

export default new Vuex.Store({
	state: {
		machineName: "bender",
		supply: 40,
		isRestocking: false,
		isDispensing: false,
		isCheckingMachine: false
	},
	mutations: {
		isRestocking(state, payload) {
			state.isRestocking = payload;
		},
		isDispensing(state, payload) {
			state.isDispensing = payload;
		},
		isCheckingMachine(state, payload) {
			state.isCheckingMachine = payload;
		},
		dispense(state) {
			state.supply--;
		},
		stockItems(state) {
			state.supply = 40;
		}
	},
	actions: {
		fetchFromInventory({ commit, dispatch }) {
			dispatch("checkMachineState").then(() => {
				commit("isRestocking", true);
				pingInventory("chips").then(inventoryItems => {
					commit("stockItems", inventoryItems.stock);
				});
				commit("isRestocking", false);
			});
			// commit("isRestocking", true);
			// pingInventory("chips")
			// 	.then(inventoryItems => {
			// 		commit("stockItems", inventoryItems.stock);
			// 	})
			// 	.finally(() => commit("isRestocking", false));
		},
		dispense({ commit }) {
			commit("isDispensing", true);
			setTimeout(() => {
				commit("dispense");
				commit("isDispensing", false);
			}, 3000);
		},
		checkMachineState({ commit }) {
			commit("isCheckingMachine", true);
			return new Promise(resolve => {
				setTimeout(() => {
					commit("isCheckingMachine", true);
					// resolve(machines[state.machineName]);
					resolve(true);
				});
			});
		}
	},
	modules: {}
});
