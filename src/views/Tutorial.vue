<template>
	<v-container fluid py-0>
		<v-row class="row1" align="center">
			<v-col class="text-center">
				<span class="d-block text-h2 text-sm-h1 font-weight-regular mb-8">Workshops</span>
				<span
					class="d-block text-h5 text-md-h4 mb-10 font-weight-regular"
				>Hands on experience for everyone</span>
				<!-- $vuetify.goTo scrolls down to a specific point -->
			</v-col>
		</v-row>
		<!-- <NewInfo /> -->
		<div class="d-flex justify-center py-16 blue lighten-4 mx-n3">
			<Parts />
		</div>
		<v-row class="ma-3 mx-md-16" id="tutorial">
			<v-col cols="12" md="6" class="d-flex text-center align-center justify-center px-sm-10">
				<span>
					<h2 style="color:#9a2a29">Workshop 1: Arduino & Motors</h2>
					<v-img
						src="~../assets/Tutorial/Arduino.jpg"
						max-height="300px"
						max-width="80vw"
						class="mx-auto my-4 d-flex d-md-none"
						eager
					/>
					<p>
						An easy-to-use open-source platform
						<br />Tell your board what to do by loading a set of instructions to
						the microcontroller!
					</p>
					<v-btn
						class="red darken-4 mx-2 white--text"
						href="https://drive.google.com/drive/folders/1QXzrsBxzseGWYiqEu17lvbp3FxaXk4Bf?usp=sharing"
						target="_blank"
					>Recording</v-btn>
					<v-btn
						class="red darken-4 mx-2 white--text"
						href="https://docs.google.com/presentation/d/1ZTFKGIMswynVs_jr35FVVcA_rCBacOw2G3tyd9-6K9M/edit?usp=sharing"
						target="_blank"
					>Presentation</v-btn>
				</span>
			</v-col>
			<v-col cols="12" md="6" class="pa-0 d-none d-md-flex">
				<v-img src="~../assets/Tutorial/Arduino.jpg" max-height="45vh" eager />
			</v-col>
			<v-col cols="12" md="6" class="pa-0 d-none d-md-flex">
				<v-img src="~../assets/Tutorial/Motor.jpg" max-height="45vh" eager />
			</v-col>
			<v-col cols="12" md="6" class="d-flex text-center align-center justify-center px-sm-10">
				<span>
					<h2 style="color:#9a2a29">Workshop 2: Motors & Design</h2>
					<v-img
						src="~../assets/Tutorial/Motor.jpg"
						max-height="300px"
						max-width="80vw"
						class="mx-auto my-4 d-flex d-md-none"
						eager
					/>
					<p>
						Learn how to configure your motors to work properly
						<br />Find out how to design the chassis effectively!
					</p>
					<v-btn
						class="red darken-4 mx-2 white--text"
						href="https://drive.google.com/drive/folders/1eSNQ1vkW3hCQElJPiU-IYGUx7xc0ZL2K"
						target="_blank"
					>Recording & Slides</v-btn>
				</span>
			</v-col>
			<v-col cols="12" md="6" class="d-flex text-center align-center justify-center px-sm-10">
				<span>
					<h2 style="color:#9a2a29">Workshop 3 & 4: Sensors</h2>
					<v-img
						src="~../assets/Tutorial/wiring.jpg"
						max-height="300px"
						max-width="80vw"
						class="mx-auto my-4 d-flex d-md-none"
						eager
					/>
					<p>
						Different sensors serve different purposes
						<br />Find out which ones suit your needs!
					</p>
					<v-btn
						class="red darken-4 mx-2 white--text"
						href="/Workshop3_Sensors.pdf"
						target="_blank"
						disabled
					>Presentation</v-btn>
					<v-btn class="red darken-4 mx-2 white--text" href="/Line.ino" download disabled>Code</v-btn>
					<v-btn
						class="red darken-4 ma-2 white--text"
						href="https://web.microsoftstream.com/video/d48ce5bf-a94e-47e3-af92-f00e603f85ab"
						target="_blank"
						disabled
					>Recording</v-btn>
				</span>
			</v-col>
			<v-col cols="12" md="6" class="pa-0 d-none d-md-flex">
				<v-img src="~../assets/Tutorial/wiring.jpg" max-height="45vh" eager />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
//import NewInfo from "../components/NewInfo.vue";
import Parts from "../components/Parts";
export default {
	components: { Parts },
	data() {
		return {};
	},
};
</script>

<style scoped>
.row1 {
	/* Adding a gradient over image to make text slightly more legible */
	background-image: linear-gradient(rgb(154 42 41 / 50%), rgb(154 42 41 / 50%)),
		url("~../assets/Tutorial/Tutorial-intro.jpg");
	background-size: cover;
	height: 100vh;
	color: white;
}
</style>
