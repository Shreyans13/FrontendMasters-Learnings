<template>
	<div>
		Let's increment by one with a mutation:
		<button @click="increment">Increment</button>
		<br /><br />
		Let's decrement by one with a mutation:
		<button @click="decrement">Decrement</button>
	</div>
</template>

<script>
export default {
	methods: {
		increment() {
			this.$store.commit("increment", 1);
		},
		decrement() {
			this.$store.commit("decrement", 1);
		}
	}
};
</script>
