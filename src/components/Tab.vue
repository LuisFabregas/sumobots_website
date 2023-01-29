<template>
  <v-tabs
    :grow="$vuetify.breakpoint.smAndDown"
    :vertical="$vuetify.breakpoint.mdAndUp"
    hide-slider
    class="px-sm-16"
    active-class="selected-tab"
  >
    <v-tab
      v-for="name in ['Description','At a Glance']"
      :key="name"
      class="tab px-md-10"
      :style="$vuetify.breakpoint.smAndDown ? 'border-top-right-radius:10px': 'border-bottom-left-radius:10px;'"
    >{{name}}</v-tab>
    <v-tab-item
      v-for="name in ['desc-tab-text','specs-tab-text']"
      :key="name"
      class="tab-text-container"
    >
      <slot :name="name" />
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.tab-text-container {
  background-color: #e9e9e9;
  /* border-radius: 20px; */
  padding: 30px;
  font-weight: 300;
}

.tab {
  width: auto;
  background-color: transparent;
  text-transform: none;
  font-weight: 400;
  color: black;
  border-top-left-radius: 10px;
}

.horizontal-tab {
  width: auto;
}

.vertical-tab {
  width: 100%;
}

.selected-tab {
  background-color: #e9e9e9;
  /* border-top-left-radius: 10px;
	border-bottom-left-radius: 10px; */
  font-weight: bold;
}

.tab-text-content {
  /* background-color: rgb(114, 72, 72); */
  height: 100%;
}
</style>
