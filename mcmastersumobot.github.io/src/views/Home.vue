<template>
	<v-container fluid py-0>
		<!-- Top row, Introduction -->
		<v-row class="row1" align="center">
			<bubble v-if="$vuetify.breakpoint.smAndDown" />
			<!-- Video for desktop screens -->
			<span
				style="background-color: rgba(40,0,0,0.5);position:absolute;height:100%;width:100%;z-index:1"
				v-if="$vuetify.breakpoint.mdAndUp"
			/>
			<video
				autoplay
				muted
				loop
				class="video"
				poster="../assets/Home/Intro.jpg"
				v-if="$vuetify.breakpoint.mdAndUp"
			>
				<source src="../assets/Home/Intro.mp4" type="video/mp4" />
			</video>
			<!-- Video for desktop screens -->
			<v-col cols="12" class="text-center" style="z-index:2">
				<span class="toptitle d-block text-h2 font-weight-regular mb-8">McMaster Sumobot</span>
				<span class="d-block text-h5 text-md-h3 mb-15 font-weight-regular">So you want to build a robot?</span>
				<!-- <v-dialog v-model="orderdialog" :max-width="$vuetify.breakpoint.mdAndUp ? '50vw' : ''">
					<template v-slot:activator="{ on }">
						<v-btn
							x-large
							rounded
							v-on="on"
							class="font-weight-bold white--text green darken-3 mx-1 mb-3"
						>
							<v-icon class="mr-2">mdi-robot</v-icon>Sumobot Kit
						</v-btn>
					</template>
					<v-card>
						<v-card-text class="pa-2">
							<v-img src="~../assets/Home/Kit_Update.png" max-height="75vh" contain />
						</v-card-text>
						<v-card-actions class="pb-4 pr-4">
							<v-spacer></v-spacer>
							<v-btn
								large
								class="font-weight-bold white--text green darken-3 mx-2"
								href="https://sumobot-kits.eventbrite.ca/"
								target="_blank"
								@click="orderdialog = false"
							>
								<v-icon class="mr-2">mdi-robot</v-icon>Order Kit
							</v-btn>
							<v-btn large color="red darken-2" text @click="orderdialog = false">Close</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-btn
					x-large
					rounded
					class="font-weight-bold white--text blue mx-1 mb-3"
					href="https://forms.gle/Ci2AndDaXM9Ccj2o8"
					target="_blank"
				>
					<v-icon class="mr-2">mdi-account-group</v-icon>Registration
				</v-btn>
				<v-btn
					x-large
					rounded
					class="font-weight-bold yellow darken-1 mx-1 mb-3"
					@click.stop="$vuetify.goTo('#FAQ')"
				>
					<v-icon class="mr-2">mdi-account-group</v-icon>FAQ
				</v-btn>-->
				<!-- <v-btn
					x-large
					rounded
					class="font-weight-bold white--text mb-3"
					href="https://mcmaster.zoom.us/j/99878491814"
					target="_blank"
					color="blue darken-3"
				>
					<v-icon class="mr-2">mdi-cog</v-icon>Workshop 1
				</v-btn>-->
				<!-- <v-btn
					x-large
					rounded
					class="font-weight-bold white--text mx-1 mb-3"
					href="https://forms.gle/AfNr2VY7SfbmTkSk6"
					target="_blank"
					color="green darken-4"
				>
					<v-icon class="mr-2">mdi-account-details</v-icon>Mentor
				</v-btn>
				<v-btn
					x-large
					rounded
					class="font-weight-bold white--text mx-1 mb-3"
					href="https://forms.gle/VzBrUn3u2NtM7nZ26"
					target="_blank"
					color="blue darken-3"
				>
					<v-icon class="mr-2">mdi-account-group</v-icon>VP Business
				</v-btn>
				<br />
				<br />
				<v-btn
					x-large
					rounded
					class="font-weight-bold white--text mx-1 mb-3"
					href="https://forms.gle/BKGirXT8FnaeSpct8"
					target="_blank"
					color="red darken-4"
				>
					<v-icon class="mr-2">mdi-robot</v-icon>Register
				</v-btn>
				<v-btn
					x-large
					rounded
					class="font-weight-bold white--text mx-1 mb-3"
					href="https://forms.gle/4SCd7y3eMgGaP2uT6"
					target="_blank"
					color="yellow darken-3"
				>
					<v-icon class="mr-2">mdi-account-group</v-icon>Matchmaking
				</v-btn>
				<br />
				<v-btn
					x-large
					rounded
					class="font-weight-bold white--text mx-1 mb-3"
					href="https://docs.google.com/forms/d/e/1FAIpQLSdIWylor2pSIV1kvP084lCCeb8MxQTPU6DYVlHErw81OCSdfQ/viewform"
					target="_blank"
					color="cyan darken-2"
				>
					<v-icon class="mr-2">mdi-account-group</v-icon>Info Change
				</v-btn>-->
				<v-card
					class="mx-15 text-h3 pa-10 red darken-4 white--text"
				>We regret to inform you that McMaster Sumobot has been cancelled for 2021-22.</v-card>
			</v-col>
		</v-row>
		<!-- Top row, Introduction -->
		<!-- Description of Sumobot -->
		<v-row id="whowe" class="white py-10" justify="center" align="center">
			<v-col cols="12">
				<div class="heading">WHO WE ARE</div>
			</v-col>
			<v-col cols="11" md="4" order-md="1" class="mb-md-0 mb-5 mt-10">
				<v-img src="~../assets/Home/WhoWeAre.jpg" max-height="300" eager />
			</v-col>
			<v-col cols="11" md="6" order-md="0" class="px-md-10" style="font-size:1.3rem">
				<div class="mb-5 font-weight-regular">
					The McMaster Sumobot Club is a
					<b>robotics organization</b> that challenges students to design their
					own
					<b>autonomous</b> fighting robots to compete in
					<b>tournament-style, one-on-one</b> matches.
				</div>
				<div class="font-weight-regular">
					This club introduces helps engineering students obtain
					<b>hands-on experience</b> in several fields such as electrical
					circuits, CAD designs and coding.
				</div>
				<div class="mb-3 mb-sm-0">
					<v-btn large class="mr-5 mt-4 red darken-4" dark to="/about">Read More</v-btn>
				</div>
			</v-col>
		</v-row>
		<!-- Description of Sumobot -->
		<!-- Slanted edge -->
		<v-sheet
			class="mx-n3"
			style="border-bottom: 5vw solid #9a2a29; border-right: 100vw solid transparent;"
		/>
		<v-sheet
			class="mx-n3"
			style="border-top: 5vw solid #9a2a29; border-left: 100vw solid transparent;background:#fff"
		/>
		<div class="heading">Sumobot 2021 - 22</div>
		<v-row justify="center">
			<v-col cols="10" class="text-center text-h5 font-weight-medium mt-5">
				<br />Hello Everyone,
				<br /><br />We regret to inform you that the McMaster Sumobot competition will be cancelled this year due to a significant amount of uncertainty regarding the COVID19 restrictions. This made it very difficult for our executive team to plan accordingly and make arrangements ahead of time.
				<br /><br />
Nonetheless, we hope to host the competition in person in the following school year. We sincerely apologize for cancelling the competition this year, and we hope to see you next year. Thank you for your continued support!
			<br /><br />
			The info session for 2021-22 has been provided below, for future reference.
			<br /><br />
			</v-col>
		</v-row>
		<span class="d-flex align-vertical mt-5">
			<v-btn
				x-large
				rounded
				class="font-weight-bold white--text mx-auto"
				href="/Info_Session_2021.pdf"
				target="_blank"
				color="green darken-3"
			>
				<v-icon class="mr-2">mdi-file-document</v-icon>Info Session
			</v-btn>
		</span>

		<!-- Slanted edge -->
		<!-- FAQ -->
		<!-- <v-row class="pa-3 px-md-16 pb-10" style="font-size:1.15rem;background-color:#eee" id="FAQ">
			<v-col cols="12">
				<div class="heading">FAQ</div>
			</v-col>
			<v-expansion-panels focusable style="width:80%" class="mx-auto">
				<v-expansion-panel v-for="faq in FAQ" :key="faq.q">
					<v-expansion-panel-header style="background:#9a2a29;color:#eee">
						{{faq.q}}
						<template v-slot:actions>
							<v-icon color="white">$expand</v-icon>
						</template>
					</v-expansion-panel-header>
					<v-expansion-panel-content class="ma-5" v-html="faq.a" />
				</v-expansion-panel>
			</v-expansion-panels>
		</v-row>-->
		<!-- FAQ -->
		<!-- Showcase -->
		<!-- <v-row class="ma-3 mx-md-16 mb-10" style="font-size:1.15rem;">
			<v-col cols="12">
				<div class="heading">SHOWCASE</div>
			</v-col>
			<v-col cols="12" md="6" class="pa-0 mt-5 d-none d-md-flex">
				<v-img src="~../assets/Gallery/beginner/robot1.jpg" max-height="45vh" eager />
			</v-col>
			<v-col cols="12" md="6" class="d-flex align-center justify-center px-sm-10">
				<span>
					<h2 style="color:#9a2a29" class="text-center mb-3">What is it?</h2>
					<v-img
						src="~../assets/Gallery/beginner/robot1.jpg"
						max-height="300px"
						max-width="80vw"
						class="mx-auto my-4 d-flex d-md-none"
						eager
					/>
					<ul>
						<li>
							Showcase your bot through
							<b>live demos!</b>
						</li>
						<li>
							The showcase will
							<b>simulate bot fight</b> where the bot will push all the targets
							out of the ring (octagon)
						</li>
						<li>The match ring and the targets will be prepared by you</li>
						<li>The Showcase is separate from the competition</li>
						<li>
							Submit a
							<b>demo presentation</b>, showcasing the building process
						</li>
						<li>Showcase will be held (TBD)</li>
					</ul>
				</span>
			</v-col>

			<v-col cols="12" md="6" class="d-flex align-center justify-center px-sm-10">
				<span>
					<h2 style="color:#9a2a29" class="text-center mb-3">Prize Categories!</h2>
					<v-img
						src="~../assets/Gallery/advanced/trophies.jpg"
						max-height="300px"
						max-width="80vw"
						class="mx-auto my-4 d-flex d-md-none"
						eager
					/>
					<ul>
						<li>
							Showcase Award Categories:
							<ul class="innerlist font-weight-bold">
								<li>Speed</li>
								<li>Strength (Push Weight)</li>
								<li>Creative/Smart Design</li>
								<li>Algorithm Design</li>
								<li>Overall Build</li>
							</ul>
						</li>
						<li>(Official Category will be posted in January)</li>
					</ul>
				</span>
			</v-col>
			<v-col cols="12" md="6" class="pa-0 d-none d-md-flex">
				<v-img src="~../assets/Gallery/advanced/trophies.jpg" max-height="45vh" eager />
			</v-col>
		</v-row>-->
		<!-- Showcase -->
		<!-- Slanted edge -->
		<!-- Slanted edge -->
		<v-sheet
			class="mx-n3 mt-10"
			style="border-bottom: 5vw solid #9a2a29; border-right: 100vw solid transparent;"
		/>

		<v-sheet
			class="mx-n3"
			style="border-top: 5vw solid #9a2a29; border-left: 100vw solid transparent;background:#eee"
		/>
		<!-- Slanted edge -->
		<!-- Competition Details -->
		<v-row class="px-sm-10 py-5" style="background-color:#eee" justify="center">
			<v-col cols="12">
				<div class="heading">COMPETITION</div>
			</v-col>

			<!-- Beginner Card -->
			<v-col cols="11" sm="6" lg="5">
				<v-sheet rounded class="pa-5" height="100%">
					<div class="text-center text-h4 mb-5">
						BEGINNER
						<div class="caption">For first-time builders</div>
					</div>
					<v-row>
						<v-col cols="12" lg="5" class="py-0 mb-5 mb-lg-0" order-lg="1">
							<v-img src="~../assets/Home/Beginner.jpg" height="100%" max-height="200px" eager />
						</v-col>
						<v-col cols="12" lg="7" class="py-0" order-lg="0">
							<ul class="text-subtitle-1 font-weight-medium">
								<li>Takes place in (TBD)</li>
								<li>
									Learn About:
									<ul class="innerlist">
										<li>Electrical (circuits)</li>
										<li>Software (programming)</li>
										<li>Mechanical (design)</li>
									</ul>
								</li>
								<li>(Optional) Starter Kit - $30</li>
								<li>Registration per bot - $10</li>
							</ul>
						</v-col>
					</v-row>
				</v-sheet>
			</v-col>
			<!-- Beginner Card -->
			<!-- Advanced Card -->
			<v-col cols="11" sm="6" lg="5">
				<v-sheet rounded class="pa-5" height="100%">
					<div class="text-center text-h4 mb-5">
						ADVANCED
						<div class="caption">For experienced competitiors</div>
					</div>
					<v-row>
						<v-col cols="12" lg="5" class="py-0 mb-5 mb-lg-0" order-lg="1">
							<v-img src="~../assets/Home/Advanced.jpg" height="100%" max-height="200px" eager />
						</v-col>
						<v-col cols="12" lg="7" class="py-0" order-lg="0">
							<ul class="text-subtitle-1 font-weight-medium">
								<li>Takes place in (TBD)</li>
								<li>
									Build robots that are:
									<ul class="innerlist">
										<li>Bigger</li>
										<li>Heavier</li>
										<li>Stronger</li>
									</ul>
								</li>
								<li>Less restrictions than beginner</li>
								<li>Registration per bot - $40</li>
							</ul>
						</v-col>
					</v-row>
				</v-sheet>
			</v-col>
			<!-- Advanced Card -->
			<v-col
				cols="11"
				class="text-center text-h5 mt-5"
				:class="{
					'text-h6 font-weight-regular': $vuetify.breakpoint.xsOnly,
				}"
			>
				Our competitions give students a
				<b>fun, well-rounded, and an informative</b> challenge.
				<br />Students
				work in teams of four, developing key communication skills as they
				master the
				<b>Mechanical, Electrical, and Software</b> systems needed to
				construct a fighting robot.
				<br />
				<v-btn large class="mt-5" color="red darken-4" dark to="/competition">View Rules</v-btn>
			</v-col>
		</v-row>
		<!-- Competition Details -->
	</v-container>
</template>

<script>
import bubble from "../assets/bubble";

export default {
	components: { bubble },
	data() {
		return {
			orderdialog: false,
			FAQ: [
				{
					q: "Can I still register my team or as an individual?",
					a: "YES! Registration is still open and will remain open until March 7th.",
				},
				{
					q: "Can I still get a kit?",
					a: "We have a lot of kits ready for sale still which can be ordered though out website. No in-person pick up will occur during the stay-at-home order. Participants can opt for mail delivery (subject to S&H fees), or wait until after the order has been lifted.<br /> <br /> We will be reaching out through email to anyone who has already ordered a kit and have not recevied it.",
				},
				{
					q: "I registered to be put on a team. When will I get my group?",
					a: "Groups have already been released! Please contact any of the exec members if you have any issue.",
				},
				{
					q: "When is the showcase happening?",
					a: "Tutorials will continue to run for those with kits and those people waiting can stil attend and follow along. We will keep you updated on our showcase date.",
				},
			],
		};
	},
};
</script>

<style scoped>
.row1 {
	/* Adding a gradient over image to make text slightly more legible */
	background-image: linear-gradient(rgba(226, 19, 19, 0.1), rgba(39, 0, 0, 0.4)),
		url("../assets/Home/Intro.jpg");
	background-size: cover;
	background-position-x: 40%;
	height: 100vh;
	color: white;
	position: relative;
}
.video {
	z-index: 0;
	position: absolute;
	right: 0;
	bottom: 0;
	min-width: 100%;
	min-height: 100%;
}
.heading {
	width: fit-content;
	margin: 0 auto;
	font-size: 36px;
	font-weight: bold;
	padding: 0 4vw;
	border-bottom: solid 2px #9a2a29;
}
li {
	list-style: none;
	position: relative;
}
li:before {
	content: "\2022";
	position: absolute;
	left: -1em;
	color: #9a2a29;
	font-weight: 900;
}
.innerlist >>> li:before {
	content: "\25b8";
	color: black;
}

/* Switch toptitle style at 700px */
@media (min-width: 700px) {
	.toptitle {
		font-size: 10vw !important;
		margin-bottom: 5vw !important;
		margin-top: 80px;
	}
}
</style>
