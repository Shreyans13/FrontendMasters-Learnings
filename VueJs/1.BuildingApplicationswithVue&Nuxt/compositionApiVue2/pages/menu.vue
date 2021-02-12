<template>
	<main>
		<h1>Our Taco Friends:</h1>
		<ul>
			<li v-for="item in list" :key="item" @click="alertBox">
				{{ item }}
			</li>
		</ul>
		<p>
			<i>Click on a friend!</i>
		</p>
	</main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
	setup() {
		const state = reactive({
			list: ["item1", "item2", "item3", "item4", "item5"],
		});

		function alertBox(e: any) {
			console.log("123");
			alert(e.target.textContent);
		}

		return {
			...toRefs(state),
			alertBox,
		};
	},
});
</script>

<style lang="scss" scoped>
ul {
	width: 400px;
}

li {
	text-align: left;
	transition: 0.4s all ease;
	cursor: pointer;
	&:hover {
		background: #eee;
	}
}

i {
	color: #555;
}
</style>
