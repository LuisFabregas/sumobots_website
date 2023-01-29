<template>
	<v-container fluid py-0>
		<v-row class="landing-page" align="center">
			<v-col class="text-center">
				<span class="d-block text-h2 text-sm-h1 font-weight-regular mb-5">Competition</span>
				<span class="d-block text-h5 text-md-h4 font-weight-regular">Beginner or Advanced?</span>
				<span class="d-block text-h6 mb-10 font-weight-regular">You choose</span>
				<!-- $vuetify.goTo scrolls down to a specific point -->
				<v-btn x-large dark outlined fab class="mt-5" @click="$vuetify.goTo('#begcomp')">
					<v-icon x-large>mdi-robot-vacuum-variant</v-icon>
					<span class="text-subtitle" style="position: absolute; bottom: -50px">Beginner</span>
				</v-btn>
				<v-btn x-large dark outlined fab class="ml-10 ml-sm-16 mt-5" @click="$vuetify.goTo('#advcomp')">
					<v-icon x-large class="mt-2">mdi-robot-mower</v-icon>
					<v-icon style="position: absolute; top: -8px; right: 20px">mdi-robot-industrial mdi-24px</v-icon>
					<span class="text-subtitle" style="position: absolute; bottom: -46px">Advanced</span>
				</v-btn>
			</v-col>
		</v-row>
		<!-- <NewInfo/> -->
		<div class="extra-rules-container px-2 px-sm-10 pb-10">
			<!-- Competition/Demo Overview -->
			<div class="rule-card my-3">
				<h1 class="rule-card-title">Competition/Demo Overview</h1>
				<div class="rule-card-content">
					<p>
						<v-icon color="yellow accent-4">mdi-alert</v-icon>Due to COVID-19, the competitions have turned into an online demonstration of your
						team's robot. The demo is split into 3 parts as outlined below.
					</p>
					<ol style="font-weight:bold">
						<li>
							General Round:
							<ul class="tab-content-list">
								<li>
									Participants’ sumobot will navigate through a standardized obstacle course to
									demonstrate the capabilities of their bot.
								</li>
								<li>Your goal is to push all obstacles out of the arena.</li>
								<li>
									There are four possible standardized maps and one map will be randomly assigned
									to the participants.
								</li>
							</ul>
						</li>
						<li>
							Category specific Round:
							<ul class="tab-content-list">
								<li>
									Contestants can choose to participate in specific demonstrations: one that will
									push the limits of their sumobot’s speed and one that will challenge their strength.
								</li>
								<li>The participants can choose at their discretion the speed layout provided by the competition.</li>
								<li>Strength test will be conducted by pushing the heaviest non-rolling object out of the ring.</li>
							</ul>
						</li>
						<li>
							Presentation:
							<ul class="tab-content-list">
								<li>Contestants will give a brief presentation about their bot, talking about the build and the software.</li>
								<li>They can further demonstrate the competencies of their bot by constructing an obstacle course of their own.</li>
							</ul>
						</li>
					</ol>
				</div>
			</div>
			<!-- Category Specific Round Rules -->
			<div class="my-3" style="width:100%;display:flex" id="categories-continer">
				<!-- RULES -->
				<div class="rule-card">
					<h1 class="rule-card-title">General Round Rules</h1>
					<div class="rule-card-content">
						<ul class="tab-content-list">
							<li>Black duct/electrical tape for boarders of the octagon arena.</li>
							<li>
								Common household items as obstacles to push out of border.
								<ul class="innerlist">
									<li>eg. Toilet paper (Full roll).</li>
								</ul>
							</li>
							<li>
								4 different options of demo. Judges choose 1 out of 4 options for the bot to do.
								<ul class="innerlist">
									<li>Layout options is shown in the following picture</li>
									<li>Ring Dimensions are also shown</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<!-- CATEGORIES -->
				<div class="rule-card">
					<h1 class="rule-card-title">Court Layout</h1>
					<div class="rule-card-content">
						<v-img
							src="~../assets/Competition/Court.png"
							max-height="80vh"
							:max-width="$vuetify.breakpoint.mdAndUp?'50vw':'100vw'"
							contain
              eager
						/>
					</div>
				</div>
			</div>
			<!-- Category Specific Round Rules -->
			<div class="my-3" style="width:100%;display:flex" id="categories-continer">
				<!-- RULES -->
				<div class="rule-card">
					<h1 class="rule-card-title">Category Specific Round Rules</h1>
					<div class="rule-card-content">
						<ul class="tab-content-list">
							<li>
								Participants choose the categories they would like to participate in
								and do one demo on each of the participating categories.
								<ul class="innerlist">
									<li>Up to 3 tries per category</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<!-- CATEGORIES -->
				<div class="rule-card">
					<h1 class="rule-card-title">Categories</h1>
					<div class="rule-card-content">
						<v-expansion-panels focusable accordion style="width:80%" class="mx-auto">
							<!-- SPEED -->
							<v-expansion-panel>
								<v-expansion-panel-header class="px-3" style="background:#9a2a29;color:#eee">
									Speed
									<template v-slot:actions>
										<v-icon color="white">$expand</v-icon>
									</template>
								</v-expansion-panel-header>
								<v-expansion-panel-content class="mx-5 mt-2">
									<ul class="tab-content-list">
										<li>Speed run (fastest bot).</li>
										<li>Participants get to choose one of the 4 layout options presented in general round</li>
									</ul>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<!-- STRENGTH -->
							<v-expansion-panel>
								<v-expansion-panel-header class="px-3" style="background:#9a2a29;color:#eee">
									Strength
									<template v-slot:actions>
										<v-icon color="white">$expand</v-icon>
									</template>
								</v-expansion-panel-header>
								<v-expansion-panel-content class="mx-5 mt-2">
									<ul class="tab-content-list">
										<li>Push heaviest weight</li>
										<li>
											Heavy targets (common household item, at their liberty)
											<ul class="innerlist">
												<li>Must be able to show weight</li>
												<li>Need to be approximately same width as toilet paper rolls</li>
												<li>If objects falls and rolls, attempt fail</li>
												<li>Participants get to choose one of the layout options</li>
											</ul>
										</li>
									</ul>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<!-- DESIGN -->
							<v-expansion-panel>
								<v-expansion-panel-header class="px-3" style="background:#9a2a29;color:#eee">
									Design Creativity (mechanical)
									<template v-slot:actions>
										<v-icon color="white">$expand</v-icon>
									</template>
								</v-expansion-panel-header>
								<v-expansion-panel-content class="mx-5 mt-2">
									<ul class="tab-content-list">
										<li>Mechanical /software design</li>
										<li>Aesthetics</li>
									</ul>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<!-- OVERALL -->
							<v-expansion-panel>
								<v-expansion-panel-header class="px-3" style="background:#9a2a29;color:#eee">
									Overall
									<template v-slot:actions>
										<v-icon color="white">$expand</v-icon>
									</template>
								</v-expansion-panel-header>
								<v-expansion-panel-content class="mx-5 mt-2">
									<ul class="tab-content-list">
										<li>Best performance in general demo</li>
									</ul>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</div>
				</div>
			</div>
			<!-- Presentation Requirements -->
			<div class="rule-card my-3">
				<h1 class="rule-card-title">Presentation Requirements</h1>
				<h3
					class="mt-n3"
				>Please submit your presentation materials (Electrical Design, Mechanical Design, Code) by April 2nd, 11:59 PM</h3>
				<div class="rule-card-content">
					<ul class="tab-content-list mt-5">
						<li>Explain the software code</li>
						<li>Explain Electronic Design - Why did you choose this design</li>
						<li>Mechanical Design - CAD, Pictures</li>
						<li>Demonstrate one round on the makeshift court</li>
					</ul>
				</div>
			</div>
		</div>
		<v-sheet
			style="
        border-top: 5vw solid #e9e9e9;
        border-right: 100vw solid transparent;
      "
		></v-sheet>
		<!-- <div class="comps-container" id="begcomp">
      <div class="comp-container">
        <h1 class="comp-heading">BEGINNER COMPETITION</h1>
        <Tab>
          <div slot="desc-tab-text" class="tab-text-content img-flex">
            <div class="desc-text">
              The Beginner Sumobot Competition is for anyone who has never
              competed in a Sumobot Competition. Have no idea what you’re doing?
              That’s fine! We will provide you with the tools you need to build
              your very own Sumobot! Once competing in the Beginner Competition,
              you CANNOT enter a Beginner Competition again. Team Fees:
              $40(Include package) or $10(Buy your own parts).
              <span
                class="d-block"
              >
                <v-btn
                  class="mt-3 red darken-4 white--text"
                  href="/Beginner_Competition.pdf"
                  target="_blank"
                >More Details</v-btn>
              </span>
            </div>
            <div class="desc-img-container">
              <img src="../assets/Home/Beginner.jpg" class="ml-md-4" />
            </div>
          </div>
          <div slot="specs-tab-text" class="tab-text-content">
            <p style="color: red; font-weight: 400">
              A team whose robot does not meet these specifications may be
              permitted to compete in the round robin competition if their
              failure to meet these specifications DOES NOT result in the
              possibility of damaging the other competitor’s robots. If the
              judges decide that the failure to meet the specifications do not
              result in an advantage, the team may be permitted to participate
              in the finals, unless another team whose robot meets these
              specifications has a comparable round robin score. For these rules
              we shall consider two scores comparable if the smaller score is
              greater than or equal to 80% of the larger score.
            </p>
            <ul class="tab-content-list">
              <li>
                A robot must fit within a square tube with side length of 10 cm.
                A robot may expand in size after a match begins, but must not
                physically separate into pieces. There is no height restriction.
              </li>
              <li>
                The total mass of a robot at the start of a match must be under
                500 g.
              </li>
              <li>
                The robot must not affect the terrain of the ring. For example,
                your robot cannot spray liquid on the ground to slip up its
                opponent.
              </li>
              <li>
                The robot cannot damage its opponent directly. Only pushing and
                lifting are allowed; no hitting or stabbing. Magnets are banned
                due to how they affect electrical components.
              </li>
              <li>
                Adhesives are a bit of a sticky subject. We would prefer if you
                didn’t use them, as they provide unfair advantages. Please
                contact us if you are thinking of using adhesives (on wheels,
                external of robot, etc).
              </li>
              <li>
                Robots must be completely autonomous. No off board instructions
                or signals allowed.
              </li>
              <li>
                Each robot must be uniquely identifiable. Spectators and
                officials should be able to identify your robot during a match.
              </li>
            </ul>
          </div>
        </Tab>
      </div>
      <div class="comp-container" id="advcomp">
        <h1 class="comp-heading">ADVANCED COMPETITION</h1>
        <Tab>
          <div slot="desc-tab-text" class="tab-text-content img-flex">
            <div class="desc-text">
              The Advanced Sumobot Competition is for anyone who has competed in
              a Sumobot Competition in the past, or believes they have the
              knowledge to compete in a more difficult competition. Once you’ve
              competed in the Advanced Competition, you CAN NOT enter a Beginner
              Competition. Team Fees: $40
              <span
                class="d-block"
              >
                <v-btn
                  class="mt-3 red darken-4 white--text"
                  href="/Advanced_Competition.pdf"
                  target="_blank"
                >More Details</v-btn>
              </span>
            </div>
            <div class="desc-img-container">
              <img src="../assets/Home/Advanced.jpg" class="ml-md-4" />
            </div>
          </div>
          <div slot="specs-tab-text" class="tab-text-content">
            <p style="color: red; font-weight: 400">
              A team whose robot does not meet these specifications may be
              permitted to compete in the round robin competition if their
              failure to meet these specifications DOES NOT result in the
              possibility of damaging the other competitor’s robots. If the
              judges decide that the failure to meet the specifications do not
              result in an advantage, the team may be permitted to participate
              in the finals, unless another team whose robot meets these
              specifications has a comparable round robin score. For these rules
              we shall consider two scores comparable if the smaller score is
              greater than or equal to 80% of the larger score.
            </p>
            <ul class="tab-content-list">
              <li>
                The Robot cannot be larger than 20 cm by 20 cm before the match
                begins. (Yes, your robot can expand as long as it does it on its
                own).
              </li>
              <li>The robot cannot weigh more than 3 kgs.</li>
              <li>
                The robot must not affect the terrain of the ring. For example,
                your robot cannot spray liquid on the ground to slip up its
                opponent.
              </li>
              <li>
                Screws, nuts, and other parts that fall off the robot during the
                round which total to more than 5 grams shall cause the loss of
                the round.
              </li>
              <li>
                The robot cannot damage its opponent directly. Only pushing and
                lifting are allowed; no hitting or stabbing. Magnets are banned
                due to how they affect electrical components.
              </li>
              <li>
                Adhesives are a bit of a sticky subject. We would prefer if you
                didn’t use them, as they provide unfair advantages. Please
                contact us if you are thinking of using adhesives (on wheels,
                external of robot, etc).
              </li>
              <li>
                Robots must be completely autonomous. No off board instructions
                or signals allowed.
              </li>
            </ul>
          </div>
        </Tab>
      </div>
		</div>-->
		<!-- Slanted edge -->
		<Tab v-if="0" />
		<!-- Remove when competition details is needed again -->
		<v-sheet
			style="
        border-bottom: 5vw solid #e9e9e9;
        border-left: 100vw solid transparent;
      "
		></v-sheet>
		<div class="extra-rules-container px-2 px-sm-10 pb-10">
			<!-- <div class="rule-card my-3">
        <h1 class="rule-card-title">Ring specification</h1>
        <div class="rule-card-content">
          <ul class="tab-content-list">
            <li>
              The ring shall be circular in shape, having a total diameter of
              154 cm and a border width of 2.54 cm.
            </li>
            <li>
              The ring will be centered at the "ring area", a circular space
              with a diameter of 460 cm which no one is permitted to enter upon
              the start of the match.
            </li>
          </ul>
        </div>
			</div>-->
			<div class="rule-card my-3">
				<h1 class="rule-card-title">Robot Restrictions</h1>
				<div class="rule-card-content">
					<p style="color: red; font-weight: 400">
						A team whose robot does not meet these requirements will NOT be
						permitted to compete in the competition.
					</p>
					<ul class="tab-content-list">
						<li>
							A robot must fit within a square tube with side length of 10 cm.
							A robot may expand in size after a match begins, but must not
							physically separate into pieces. There is no height restriction.
						</li>
						<li>
							Jamming devices, such as IR LEDs intended to saturate the
							opponents IR sensors, are not allowed.
						</li>
						<li>
							Parts that could break or damage the ring are not allowed. Do not
							use parts that are intended to damage the opponent’s robot or its
							operator. Normal pushes and bangs are not considered intent to
							damage.
						</li>
						<li>
							Devices that can store liquid, powder, gas or other substances for
							throwing at the opponent are not allowed.
						</li>
						<li>Any flaming devices are not allowed.</li>
						<li>Devices that throw things at your opponent are not allowed</li>
						<li>
							Sticky substances to improve traction are not allowed. Tires and
							other components of the robot in contact with the ring must not be
							able to pick up and hold a standard 8.5” by 11” sheet of paper for
							more than two seconds.
						</li>
						<li>
							Devices to increase down force, such as a vacuum pump or magnets,
							are not allowed.
						</li>
						<li>
							All edges, including but not limited to the front scoop, must not
							be sharp enough to scratch or damage the ring, other robots, or
							players. Judges or competition officials may require edges that
							they deem too sharp to be covered with a piece of tape.
						</li>
					</ul>
				</div>
			</div>
			<div class="rule-card my-3">
				<h1 class="rule-card-title">Team Etiquette</h1>
				<div class="rule-card-content">
					<ul class="tab-content-list">
						<li>Teams must show respect to SumoBot organizers and to each-other.</li>
						<li>Insults will not be tolerated. Neither will cheating.</li>
						<li>
							Penalties range from verbal warnings to complete disqualification
							based on the severity of the infraction.
						</li>
						<li>
							If a team believes they have been unfairly penalized, their
							representative may appeal to the referee when the round is over.
						</li>
						<li>
							If the referee chooses not to revoke their penalty, the team will
							just have to deal with it. Any further objections may lead to
							additional penalization.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</v-container>
</template>

<script>
//import NewInfo from '../components/NewInfo.vue';
import Tab from "../components/Tab.vue";

export default {
	data() {
		return {};
	},
	components: {
		Tab: Tab,
//NewInfo,
	},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

.landing-page {
	height: 100vh;
	background-image: linear-gradient(rgb(154 42 41 / 50%), rgb(154 42 41 / 50%)),
		url("../assets/Competition/comp.jpg");
	background-position: center;
	background-size: cover;
	color: #fff;
}

ol li ul {
	font-weight: normal;
}

#categories-continer .rule-card:nth-child(1) {
	margin-right: 10px;
}

#categories-continer .rule-card:nth-child(2) {
	margin-left: 10px;
}

.comps-container {
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.comp-container {
	margin-bottom: 60px;
}

.comp-heading {
	font-size: 5vw;
	text-align: center;
	margin: 10px 0;
}

.img-flex {
	display: flex;
	flex-direction: row;
}

.desc-text {
	flex: 2;
	align-self: center;
}

.desc-img-container {
	flex: 1;
	display: flex;
	align-items: center;
}

.desc-img-container img {
	width: 100%;
}

.tab-content-list {
	list-style: none;
}

.tab-content-list li {
	margin: 5px;
}

ul li {
	list-style: none;
	position: relative;
}

.tab-content-list li:before {
	content: "\2022";
	color: #9a2a29;
	font-weight: bold;
	margin-right: 4px;
}

.innerlist >>> li:before {
	content: "\25b8";
	color: black;
}

.extra-rules-container {
	padding-top: 50px;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #e9e9e9;
	width: 100%;
}

.rule-card {
	background-color: #fff;
	width: 100%;
	padding: 20px 30px;
}

.rule-card-title {
	color: #68299a;
	margin-bottom: 20px;
}

@media (max-width: 960px) {
	.img-flex {
		display: flex;
		flex-direction: column;
	}

	.desc-img-container {
		flex: 1;
		align-self: center;
		margin-top: 15px;
	}

	#categories-continer {
		flex-direction: column;
	}

	#categories-continer .rule-card:nth-child(1) {
		margin-right: 0px;
		margin-bottom: 30px;
	}

	#categories-continer .rule-card:nth-child(2) {
		margin-left: 0px;
	}
}
</style>
