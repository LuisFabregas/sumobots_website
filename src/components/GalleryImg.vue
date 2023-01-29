<template>
	<v-row class="pa-5 pa-md-10">
		<v-row v-if="$vuetify.breakpoint.mdAndUp">
			<v-col cols="4" lg="3" xl="2"  v-for="(image, index) in imgs" :key="index">
				<v-img
					:src="require(`../assets/Gallery/${type}/${image}`)"
					max-width="40vw"
					height="100%"
					class="imghov"
					@click.stop="overlay = true, overlayImg = image, key = index"
				/>
			</v-col>
			<v-dialog	v-model="overlay" max-width="80vw">
				<v-carousel v-model="key" height="90vh">
					<v-carousel-item
						v-for="image in imgs"
						:key="image"
						eager
					><v-img
						:src="require(`../assets/Gallery/${type}/${image}`)"
						width="100%"
						height="100%"
						eager
					/></v-carousel-item>
				</v-carousel>
			</v-dialog>
		</v-row>
		<v-carousel hide-delimiters height="100%" v-else>
			<v-carousel-item
				v-for="image in imgs"
				:key="image"
				eager
			>
				<img
					:src="require(`../assets/Gallery/${type}/${image}`)"
					width="100%"
					height="100%"
				/>
			</v-carousel-item>
		</v-carousel>
	</v-row>
</template>

<script>
export default {
	props: {
		imgs: Array,
		type: String,
	},
	data() {
		return {
			overlay: false,
			overlayImg: "battle1.jpg",
			key: 0,
		};
	},
};
</script>

<style scoped>
.imghov:hover {
	cursor: pointer;
	transition-duration: 0.5s;
	transform: translateY(-5%);
}
</style>
