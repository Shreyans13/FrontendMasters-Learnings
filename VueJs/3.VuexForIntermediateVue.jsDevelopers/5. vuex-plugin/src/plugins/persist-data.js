const persistTime = 60 * 1000; // 1 min

const persistDataPlugin = store => {
	store.subscribe((mutation, state) => {
		console.log("mutation = ", mutation);
		console.log("state = ", state);
		if (mutation.type === "updateServiceDate") {
			let record = {
				dateTime: state.lastServiced,
				persistFor: state.lastServiced.getTime() + persistTime
			};
			try {
				window.localStorage.setItem(
					"last_serviced",
					JSON.stringify(record)
				);
			} catch (e) {
				console.log(e);
				throw e;
			}
		}
	});
	// store.subscribeAction(action => {
	// 	console.log("action.type = ", action.type);
	// 	console.log("action.payload = ", action.payload);
	// });
	store.subscribeAction({
		before: (action, state) => {
			console.log("Before");
			console.log("action.type = ", action.type);
			console.log("action.payload = ", action.payload);
			console.log("state.lastServiced = ", state.lastServiced);
		},
		after: (action, state) => {
			console.log("After");
			console.log("action.type = ", action.type);
			console.log("action.payload = ", action.payload);
			console.log("state.lastServiced = ", state.lastServiced);
		}
	});
};

export default persistDataPlugin;
