<template>
  <div class>
    <v-icon color="black" large >mdi-arrow-right</v-icon>
    <v-icon color="black" large class="mx-10" v-if="$vuetify.breakpoint.lgAndUp">mdi-arrow-right</v-icon>
    <v-btn
      x-large
      rounded
      class="font-weight-bold white--text blue"
      @click.stop="partshow = true"
    >Parts List</v-btn>
    <v-icon color="black" large class="mx-10" v-if="$vuetify.breakpoint.lgAndUp">mdi-arrow-left</v-icon>
    <v-icon color="black" large >mdi-arrow-left</v-icon>

    <v-dialog v-model="partshow" scrollable max-width="800px">
      <v-card>
        <v-card-title class="text-sm-h3 text-h4 my-2">
          Parts in Kit
          <v-btn icon class="ml-auto" @click="partshow = false">
            <v-icon large>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider />
        <v-card-text class="py-0">
          <v-row>
            <v-col cols="12" sm="6" v-for="item in parts" :key="item.name">
              <v-sheet class="d-flex text-center text-h5">{{item.name}}</v-sheet>
              <span>{{item.desc}}</span>
              <v-img max-height="20vh" contain :src="require(`../assets/Parts/${item.name}.jpg`)" />
              
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      partshow: false,
      parts: [
        { name: "9V - Barrel", desc: "9V connecter to power uno" },
        { name: "9V - Open", desc: "9V connecter to power nano" },
        { name: "AA Pack", desc: "Batteries to power everything" },
        { name: "Bread Board", desc: "Connect components" },
        { name: "Jumpers", desc: "M-M: 10 per kit, M-F: 25 per kit, F-F: 10 per kit. M = Male, F = Female" },
        { name: "Line IR", desc: "4 Per kit, used for detection" },
        { name: "Motor 1", desc: "2 DC motors per kit, used to drive bot" },
        { name: "Motor Driver", desc: "1 per kit, used to control the motor" },
        { name: "Motor Mount", desc: "2 per kit, used to mount the motor" },
        { name: "Nano", desc: "Microcontroller, limited in quantity," },
        { name: "Open Wire", desc: "Used for connections, mostly on breadboard" },
        { name: "Ultra Sonic", desc: "2 Per Kit, used for detection" },
        { name: "Uno", desc: "Microcontroller, choose between Uno or Nano" },
        { name: "Wheel", desc: "2 Per kit (You know what it does)" },
      ],
    };
  },
};
</script>