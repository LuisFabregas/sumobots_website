<template>
	<v-container fluid py-0>
		<v-row class="row1" align="center">
			<v-col class="text-center">
				<span class="toptitle d-block text-h2 font-weight-regular mb-8">About Us</span>
				<v-btn
					x-large
					color="yellow darken-1"
					rounded
					class="font-weight-bold"
					href="https://docs.google.com/forms/d/e/1FAIpQLSeFAtxa4FhqUQ_s7tlak1XX31E6EF5zicx5bwXOqRcX07RTOQ/viewform"
					target="_blank"
				>
					<v-icon left>mdi-newspaper</v-icon>Newsletter
				</v-btn>
			</v-col>
		</v-row>
		<v-row class="px-md-16 py-10">
			<v-col cols="12" lg="8">
				<v-card height="100%" class="d-flex align-center elevation-10">
					<span class="pa-4 px-sm-15">
						<h1 style="color:#9a2a29" class="text-center text-h3 font-weight-bold py-5">Our Goal</h1>
						<h2 class="text-center text-h6 font-weight-regular px-5 pb-5">
							McMaster Sumobot Club is a club that hosts tutorials and
							competitions to raise the awareness of robotics design. The goal
							of this club is to introduce undergraduate engineering students to
							the world robotics design and help them obtain hands-on experience
							about electrical circuit design, CAD design for hardware closure
							and software programming.
						</h2>
					</span>
				</v-card>
			</v-col>
			<v-col cols="12" lg="4">
				<v-row>
					<v-col class="pt-0 hidden-sm-and-down" cols="12" lg="12" md="6" sm="12">
						<v-img src="~../assets/About/hands-on.jpg" eager max-height="30vh" class="elevation-10" />
					</v-col>
					<v-col class="py-0" cols="12" lg="12" md="6" sm="12">
						<v-img src="~../assets/About/circuit.jpg" eager max-height="30vh" class="elevation-10" />
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="12" md="5">
				<v-card height="100%" class="d-flex align-center elevation-10">
					<span class="pa-4 px-sm-15">
						<h1 style="color:#9a2a29" class="text-center text-h3 font-weight-bold py-5">How it Works</h1>
						<h6 class="text-center font-weight-regular text-h6 px-5 pb-5">
							Students members are grouped into teams with a maximum size of
							four people. Under the guidance and support from mentors, teams
							will make their own autonomous robots. The robots are then pitted
							against each other in tournament-style, one-on-one matches.
						</h6>
					</span>
				</v-card>
			</v-col>
			<v-col cols="12" md="7">
				<v-img class="team pb-0 elevation-10" src="~../assets/About/team.jpg" eager height="100%" />
			</v-col>
		</v-row>
		<v-sheet
			class="mx-n3"
			style="border-bottom: 5vw solid #eee; border-left: 100vw solid transparent;"
		/>
		<v-row style="background:#eee" justify="space-around" class="pa-5 px-sm-15 pb-15">
			<v-col cols="12" class="mb-10">
				<h1 class="titleblock mt-10" style="font-size:50px">TEAM</h1>
			</v-col>
			<v-col cols="12" md="6" v-for="role in team" :key="role.role">
				<h1 class="titleblock mb-2">{{role.role}}</h1>
				<v-row justify="center">
					<v-col
						cols="6"
						class="pa-0 hov"
						v-for="member in role.people"
						:key="member.name"
						@click.stop="overlay = true, overlayImg = member.pic"
					>
						<v-card class="text-center ma-3 pt-5 elevation-5">
							<v-img
								style="border-radius:50%"
								aspect-ratio="1"
								width="90%"
								max-width="200px"
								class="mx-auto"
								:src="require(`../assets/About/members/${member.pic}`)"
								eager
							/>
							<v-card-text>
								<div class="text-center">{{ member.name }}</div>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		<v-dialog v-model="overlay" width="fit-content">
			<v-card style="background-image: linear-gradient(90deg, #a90b0b 30%, black 70%)">
				<v-img
					:src="require(`../assets/About/descriptions/${overlayImg}`)"
					max-height="90vh"
					:max-width="$vuetify.breakpoint.mdAndUp ? '70vw':''"
					contain
				/>
			</v-card>
		</v-dialog>
		<v-parallax class="mx-n3" src="../assets/Gallery/comp-landing.jpg">
			<span
				style="color:#B30000"
				class="d-block text-h2 text-sm-h1 font-weight-medium mb-15 mx-auto"
			>Gallery</span>
		</v-parallax>
		<v-row class="pa-5" justify="center">
			<v-col
				cols="12"
				class="mt-sm-10 text-h4 text-md-h2 font-weight-regular d-flex justify-center"
				style="color:#9a2a29"
			>Advanced Competition 2019-20</v-col>
			<GalleryImg :imgs="advancedImgs" type="advanced" />
		</v-row>
		<v-sheet
			class="mx-n3"
			style="border-bottom: 5vw solid #e9e9e9; border-left: 100vw solid transparent;"
		/>
		<v-row class="pa-5" justify="center" style="background-color:#e9e9e9">
			<v-col
				cols="12"
				class="my-3 mt-sm-10 text-h4 text-md-h2 font-weight-regular d-flex justify-center"
				style="color:#9a2a29"
			>Beginner Competition 2018-19</v-col>
			<GalleryImg :imgs="beginnerImgs" type="beginner" />
		</v-row>
	</v-container>
</template>

<script>
import GalleryImg from "../components/GalleryImg";

export default {
	components: {
		GalleryImg,
	},
	data() {
		return {
			overlay: false,
			overlayImg: "Arun.jpg",
			team: [
				{
					role: "Co-President",
					people: [
						{ name: "Emmanuel Aduwari", pic: "Emmanuel.jpg" },
						{ name: "Tam Yuan", pic: "Tam.jpg" },
					],
				},
				{
					role: "Technical Lead",
					people: [
						{ name: "Bardia Sedighi", pic: "Bardia.jpg" },
						{ name: "Anh Hoang", pic: "Anh.jpg" },
					],
				},
				{
					role: "VP Outreach",
					people: [{ name: "Hridhoy Datta", pic: "Hridhoy.jpg" }],
				},
				{
					role: "VP Events",
					people: [{ name: "Hareshan Suntharalingam", pic: "Hareshan.jpg" }],
				},				
				{
					role: "Web Lead",
					people: [
						{ name: "Arun Mistry", pic: "Arun.jpg" },
						{ name: "Luis Fabregas", pic: "Luis.jpg" },
						{ name: "Neil Lobo", pic: "Neil.jpg" },
					],
				},

				// { role: "VP Finance", people: [], },
			],
			beginnerImgs: [
				"robot1.jpg",
				"robot2.jpg",
				"teammates1.jpg",
				"battle1.jpg",
				"teammates2.jpg",
				"competition1.jpg",
				"battle2.jpg",
				"battle3.jpg",
				"teammates3.jpg",
				"battle4.jpg",
				"trophies1.jpg",
				"teammates4.jpg",
				"teammates5.jpg",
				"teammates6.jpg",
				"teammates7.jpg",
				"winners1.jpg",
				"winners2.jpg",
				"winners3.jpg",
				"winners4.jpg",
			],
			advancedImgs: [
				"trophies.jpg",
				"presentation1.jpg",
				"teammates1.jpg",
				"teammates2.jpg",
				"battle1.jpg",
				"battle2.jpg",
				"battle3.jpg",
				"battle4.jpg",
				"teammates3.jpg",
				"winners1.jpg",
				"winners2.jpg",
				"winners3.jpg",
				"battle5.jpg",
			],
		};
	},
	methods: {},
};
</script>

<style>
.row1 {
	/* Adding a gradient over image to make text slightly more legible */
	background-image: linear-gradient(rgb(154 42 41 / 50%), rgb(154 42 41 / 50%)),
		url("../assets/About/About-intro.jpg");
	background-size: cover;
	background-position-y: 80%;
	background-position-x: 30%;
	height: 100vh;
	color: white;
	position: relative;
}
.titleblock {
	width: fit-content;
	margin: 0 auto;
	font-size: 36px;
	font-weight: bold;
	padding: 0 4vw;
	border-bottom: solid 2px #9a2a29;
}

.hov:hover {
	cursor: pointer;
	transition-duration: 0.3s;
	transform: translateY(-2%);
}
.v-dialog.v-dialog--active {
	margin: 0px !important;
}
</style>
