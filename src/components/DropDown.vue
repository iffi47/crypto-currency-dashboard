<template>
  <div class="d-flex flex-row bg-surface-variant" data-theme="black">
    <div class="d-flex flex-row pr-7" data-theme="dark">
      <div class="d-flex flex-col">
        <p class="font-bold text-green-600 ml-4 justify-center">PTT</p>
        <span class="text-sm ml-2"
          >C:<span class="text-orange-400 text-sm">0.25</span></span
        >
      </div>
      <div class="d-flex flex-col ml-16">
        <div class="justify-center">
          <p class="font-bold text-green-600 justify-center">
            <i class="fa-solid fa-caret-up text-green-600"></i> 39.25
          </p>
        </div>
        <span class="text-sm"
          >F:<span class="text-blue-400 text-sm">0.25</span></span
        >
      </div>
      <div class="d-flex flex-col ml-10">
        <p class="text-sm text-green-500">0.25</p>
      </div>
      <div class="d-flex flex-col ml-10">
        <p class="text-sm text-green-500">0.64%</p>
      </div>
    </div>
    <div class="flex flex-row pl-1" data-theme="black">
      <div data-theme="black">
        <v-btn color="grey-darken-1" height="30px" dark> PTT</v-btn>
      </div>
      <div data-theme="black">
        <v-btn color="grey-darken-1" size="x-small" height="30px" dark>
          1D <i class="fa-solid fa-caret-down"></i
        ></v-btn>
      </div>
      <div data-theme="black">
        <v-btn color="grey-darken-1" size="x-small" height="30px" dark>
          <i class="fa-solid fa-chart-simple"></i
        ></v-btn>
      </div>
      <div data-theme="black">
        <v-btn color="grey-darken-1" size="x-small" height="30px" dark>
          <i class="fa-solid fa-i-cursor"></i
        ></v-btn>
      </div>
      <div data-theme="black">
        <v-btn color="grey-darken-1" size="x-small" height="30px" dark>
          <i class="fa-solid fa-magnifying-glass-plus"></i
        ></v-btn>
      </div>
      <div data-theme="black">
        <v-btn color="grey-darken-1" height="30px" size="x-small" dark>
          <i class="fa-solid fa-eye-slash"></i
        ></v-btn>
      </div>
      <div data-theme="black">
        <v-btn color="grey-darken-1" height="30px" size="x-small" dark>
          <i class="fa-solid fa-trash"></i
        ></v-btn>
      </div>
      <div data-theme="black">
        <v-btn color="grey-darken-1" height="30px" size="x-small" dark>
          <i class="fa-regular fa-circle"></i
        ></v-btn>
      </div>
    </div>
    <div class="colored-div" data-theme="black">
      <v-btn height="30px" class="ml-56 mt-2 justify-end" :rounded="0">
        <i class="fa-solid fa-filter"></i>Filter</v-btn
      >
    </div>
  </div>
  <!-- <div data-theme="dark" class="flex flex-wrap flex-row">
    <div class="flex flex-wrap flex-row" data-theme="black">
      <div class="flex flex-col justify-center ml-2">
        <p class="font-bold text-green-600 ml-4">PTT</p>
        <span class="text-sm"
          >C:<span class="text-orange-400 text-sm">0.25</span></span
        >
      </div>
      <div class="flex flex-col justify-center">
        <div>
          <i class="fa-solid fa-caret-down"></i>
          <p class="font-bold text-green-600 ml-4">39.25</p>
        </div>
        <span class="text-sm"
          >F:<span class="text-blue-400 text-sm">0.25</span></span
        >
      </div>
      <div class="flex flex-col">
        <span class="text-blue-400 text-sm">0.25</span>
      </div>
      <div class="flex flex-col">
        <span class="text-blue-400 text-sm">0.25</span>
      </div>
    </div>
    <div class="text-center">
      <v-menu top :offset-x="offset">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Dropdown
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div> -->
</template>

<script setup>
let items = [
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
];
let closeOnContentClick = true;
</script>

<style lang="css" scoped>
.colored-div {
  position: relative;
}

.colored-div::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>
