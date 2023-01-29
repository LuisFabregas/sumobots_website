<template>
	<div>
		<v-dialog v-model="show" scrollable max-width="800px">
			<v-card>
				<v-card-title class="text-h3">
					Timeline
					<v-btn icon class="ml-auto" @click="show=false">
						<v-icon large>mdi-close</v-icon>
					</v-btn>
				</v-card-title>
				<v-divider />
				<v-card-text class="py-0 pl-0 px-sm-5">
					<v-timeline :dense="$vuetify.breakpoint.xsOnly" scrollable align-top>
						<v-timeline-item
							v-for="event in landmarks"
							:key="event.title"
							:icon="(event.rawDate < new Date()) ? 'mdi-check' : ''"
							:color="(event.rawDate < new Date()) ? 'red darken-4' : 'blue'"
						>
							<!-- :icon="completed ? 'mdi-check' : ''" -->
							<span slot="opposite">{{event.date}}</span>
							<v-card elevation="10" :color="(event.rawDate < new Date()) ? 'red darken-4' : 'blue'">
								<v-card-title class="headline white--text" style="word-break:normal">{{event.title}}</v-card-title>
								<v-card-subtitle class="hidden-sm-and-up white--text">{{event.date}}</v-card-subtitle>
								<v-card-text class="white pt-3">{{event.text}}</v-card-text>
								<v-sheet v-if="event.link" color="white">
									<v-btn
										v-if="event.title === 'Beginner and Advanced Info Session'"
										class="mx-4 mb-3 mt-n3 red darken-4"
										dark
										:href="event.link"
										target="_blank"
									>Presentation</v-btn>
									<v-btn
										v-if="event.title.substr(0, event.title.indexOf(' ')) === 'Workshop'"
										class="mx-4 mb-3 mt-n3"
										:color="(event.rawDate < new Date()) ? 'red darken-4' : 'blue'"
										dark
										:href="event.link"
										target="_blank"
									>Workshop</v-btn>
									<v-btn
										v-if="event.title === 'Final Info Session'"
										class="mx-4 mb-3 mt-n3 red darken-4"
										dark
										:href="event.link"
										target="_blank"
									>Recording</v-btn>
								</v-sheet>
							</v-card>
						</v-timeline-item>
					</v-timeline>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	props: { value: Boolean },
	data() {
		return {
			landmarks: [
				{
					title: "Beginner and Advanced Info Session",
					date: "8 October",
					rawDate: new Date("October 8, 2021"),
					text:
						"More details about the rules and the competition details for the beginner and advanced competition",
					link: "/Info_Session_2021.pdf",
				},
				{
					title: "Workshop 1",
					date: "October 20",
					rawDate: new Date("October 20, 2021"),
					text: "Workshop for Arduino and programming",
					link: "https://sumobot.ca/#/workshop",
				},
				{
					title: "Workshop 2",
					date: "October 27",
					rawDate: new Date("October 27, 2021"),
					text: "Workshop for Motors and Deisgn",
					link: "https://sumobot.ca/#/workshop",
				},
				{
					title: "Workshop 3",
					date: "November 3",
					rawDate: new Date("November 3, 2021"),
					text: "Workshop for Sensors",
					link: "https://sumobot.ca/#/workshop",
				},
				{
					title: "Workshop 4",
					date: "November 10",
					rawDate: new Date("November 10, 2021"),
					text: "Workshop for Sensors",
					link: "https://sumobot.ca/#/workshop",
				},
			],
		};
	},
	computed: {
		show: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit("input", value);
			},
		},
	},
};
</script>