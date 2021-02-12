<template>
	<li>
		<img class="post-img" :src="commentpost.authorImg" />
		<small>{{ commentpost.author }}</small>
		<p class="post-comment">{{ commentpost.text }}</p>
	</li>
</template>

<script>
export default {
	props: ["commentpost"]
};
</script>
