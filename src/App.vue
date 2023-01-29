<template>
  <v-app>
    <!-- NavBar -->
    <v-app-bar app :class="scrlpoint ? 'scrlpoint' : 'scrl0'" short>
      <router-link to="/" class="logo" tag="img" :src="scrlpoint ? logob : logow" />
      <!-- using normal text-weight as looks weird otherwise -->
      <!-- hiding sumobot text at sm (600-960) as it interferes -->
      <router-link
        to="/"
        tag="h1"
        style="cursor:pointer"
        :class="scrlpoint ? '' : 'white--text font-weight-regular'"
        v-if="$vuetify.breakpoint.mdAndUp || $vuetify.breakpoint.xsOnly"
      >Sumobot</router-link>
      <!-- <h1
				style="cursor:pointer"
				@click.stop=""
				:class="scrlpoint ? '' : 'white--text font-weight-regular'"
				v-if="$vuetify.breakpoint.mdAndUp || $vuetify.breakpoint.xsOnly"
			>
				Sumobot
      </h1>-->
      <v-app-bar-nav-icon @click="menu = !menu" class="ml-auto mr-2 d-sm-none" />
      <!-- Menu -->
      <span class="ml-auto mr-4 d-none d-sm-flex">
        <v-btn text to="/">HOME</v-btn>
        <v-btn text to="/about">ABOUT</v-btn>
        <v-btn text to="/competition">COMPETITION</v-btn>
        <v-btn text to="/workshop">Workshop</v-btn>
        <v-btn text @click.stop="showtimeline = true">Timeline</v-btn>
      </span>
      <!-- Menu -->
    </v-app-bar>
    <!-- NavBar -->
    <!-- Mobile Menu -->
    <v-bottom-navigation
      app
      :input-value="menu"
      scroll-threshold="50"
      hide-on-scroll
      :color="intersect ? '' : 'red darken-4'"
      :dark="intersect"
      :background-color="intersect ? '#9a2a29' : ''"
      v-if="$vuetify.breakpoint.xsOnly"
      height="90px"
    >
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/about">
        <span>About</span>
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
      <v-btn to="/competition">
        <span>Competition</span>
        <v-icon>mdi-trophy</v-icon>
      </v-btn>
      <v-btn to="/workshop">
        <span>Workshop</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>
      <v-btn @click.stop="showtimeline = true">
        <span>Timeline</span>
        <v-icon>mdi-clock</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <!-- Mobile Menu -->
    <!-- Page Views -->
    <v-main class="pa-0">
      <router-view />
    </v-main>
    <!-- Page Views -->
    <!-- Footer -->
    <v-footer dark color="#9a2a29" class="py-0">
      <!-- Width makes sheet full size, removing causes issues -->
      <!-- Padding needed for mobile view, when menu present -->
      <v-sheet color="#9a2a29" width="100%" :class="menu ? 'pb-10 pb-sm-0' : ''">
        <!-- Row allows columns to switch in mobile view -->
        <v-row justify="center" class="text-center py-2 py-sm-6">
          <!-- Location Column -->
          <v-col cols="12" sm="4" lg="2">
            <span class="d-flex align-center justify-center text-h5 font-weight-medium mb-3">
              <v-icon size="28" class="pr-2">mdi-map-marker</v-icon>LOCATION
            </span>
            <span v-intersect="onIntersect">
              McMaster University
              <br />1280 Main Street West
              <br />Hamilton, Ontario
              <br />L8S 4L8
            </span>
          </v-col>
          <!-- Location Column -->
          <v-divider inset class="mx-1 d-sm-none" />
          <!-- Find Us Column -->
          <v-col cols="12" sm="4" lg="3">
            <span
              class="d-flex align-center justify-center text-h5 font-weight-medium mb-3 mb-sm-6"
            >
              <v-icon size="28" class="pr-2">mdi-share-variant</v-icon>FIND US
            </span>
            <v-btn icon large href="https://www.facebook.com/MacSumobots/" target="_blank">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon large href="https://www.instagram.com/mac_sumobot/" target="_blank">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon large href="https://discord.gg/YnZvKqGPkw" target="_blank">
              <v-icon>mdi-discord</v-icon>
            </v-btn>
            <v-btn icon large href="https://github.com/macsumobot" target="_blank">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-col>
          <!-- Find Us Column -->
          <v-divider inset class="mx-1 d-sm-none" />
          <!-- Conatct Column -->
          <v-col cols="12" sm="4" lg="2">
            <span
              class="d-flex align-center justify-center text-h5 font-weight-medium mb-3 mb-sm-6"
            >
              <v-icon size="28" class="pr-2">mdi-email</v-icon>CONTACT
            </span>
            Email us at:
            <br />
            <a
              href="mailto:cr_sbot@mcmaster.ca"
              target="_blank"
              style="color:white"
            >cr_sbot@mcmaster.ca</a>
          </v-col>
          <!-- Conatct Column -->
        </v-row>
        <v-divider />
        <!-- Copyright Text -->
        <!-- Padding needed for mobile view, when menu present -->
        <v-card-text
          class="pa-2 d-flex justify-center align-center pb-10 pb-sm-2"
          :class="menu ? 'pb-16 pb-sm-2' : ''"
        >
          <v-icon class="px-1">mdi-copyright</v-icon>
          {{ new Date().getFullYear() }} — McMaster Sumobot
        </v-card-text>
        <!-- Copyright Text -->
      </v-sheet>
    </v-footer>
    <!-- Footer -->
    <Timeline v-model="showtimeline" />
  </v-app>
</template>

<script>
// Images imported to use in navbar
import logow from "./assets/logow.png";
import logob from "./assets/logob.png";
import Timeline from "./components/Timeline";
export default {
  components: { Timeline },
  data() {
    return {
      scrlpoint: false,
      logow: logow,
      logob: logob,
      menu: false,
      intersect: false,
      showtimeline: false,
      snackbar: true,
    };
  },
  methods: {
    // updateScroll checks how far page is scrolled, and changes scrlpoint value accordingly
    updateScroll() {
      window.scrollY >= 50 ? (this.scrlpoint = true) : (this.scrlpoint = false);
    },
    onIntersect(entries) {
      this.intersect = entries[0].isIntersecting;
    },
  },
  watch: {
    scrlpoint(value) {
      this.menu = value;
    },
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Sumobot";
      },
    },
  },
  mounted() {
    // Starts updateScroll method
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.scrl0 {
  transition-duration: 300ms;
  background-color: transparent !important;
  box-shadow: none !important;
}
/* Makes button before scrlpoint white in colour */
.scrl0 .v-btn {
  color: #fff !important;
}
.scrlpoint {
  transition-duration: 300ms;
  background-color: #fff !important;
}
span .v-btn {
  font-weight: bolder !important;
}
/* Padding removed to make menu flush with screen edge */
.v-app-bar >>> .v-toolbar__content {
  padding: 0 !important;
}
.logo {
  width: 60px;
  padding: 4px 10px;
  margin-right: 10px;
  cursor: pointer;
}
.v-item-group >>> .v-slide-group__wrapper {
  margin-right: -10px;
  margin-left: -12px;
}
</style>

<style>
body::-webkit-scrollbar {
  background: #cfcfcf;
  border-radius: 10px;
  width: 10px;
}

body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #868686;
}
</style>
