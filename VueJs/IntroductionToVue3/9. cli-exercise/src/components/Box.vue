<template>
	<div class="locations">
		<div class="place">
			<img :src="image" width="235" height="300" alt="image" />
			<slot name="head"></slot>
			<slot name="desc"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "component",
	props: {
		image: {
			type: String,
			required: true,
		},
	},
};
</script>
