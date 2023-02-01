<template>
  <div data-theme="black" class="flex flex-wrap">
    <!-- NAvigation part one -->
    <div class="ml-12 mt-4 flex flex-wrap space-x-2 text-dashboard-text">
      <button
        class="flex flex-wrap flex-col items-center hover:text-white duration-150 cursor-pointer"
      >
        <i class="fa-solid fa-table-columns"></i>
        <span class="">Dashboard</span>
      </button>
      <button
        class="flex flex-wrap flex-col items-center hover:text-white duration-150 cursor-pointer"
      >
        <i class="fa-solid fa-star"></i>
        <span class="">Watchlist</span>
      </button>
      <button
        class="flex flex-wrap flex-col items-center hover:text-white duration-150 cursor-pointer"
      >
        <i class="fa-solid fa-tags"></i>
        <span class="">Bid Offer</span>
      </button>
      <button
        class="flex flex-wrap flex-col items-center hover:text-white duration-150 cursor-pointer"
      >
        <i class="fa-solid fa-chart-line"></i>
        <span class="">Ticker</span>
      </button>
      <button
        class="flex flex-wrap flex-col items-center hover:text-white duration-150 cursor-pointer"
      >
        <i class="fa-solid fa-chart-simple"></i>
        <span class="">Chart</span>
      </button>
      <button
        class="flex flex-wrap flex-col items-center hover:text-white duration-150 cursor-pointer"
      >
        <i class="fa-solid fa-arrows-left-right"></i>
        <span class="">Trading View</span>
      </button>
      <button
        class="flex flex-wrap flex-col items-center hover:text-white duration-150 cursor-pointer"
      >
        <i class="fa-solid fa-signal"></i>
        <span class="">Chart TDB</span>
      </button>
      <button
        class="flex flex-wrap flex-col items-center hover:text-white duration-150 cursor-pointer"
      >
        <i class="fa-solid fa-briefcase"></i>
        <span class="">Portfolio</span>
      </button>
      <button
        class="flex flex-wrap flex-col items-center hover:text-white duration-150 cursor-pointer"
      >
        <i class="fa-solid fa-file"></i>
        <span class="">Condiontal Order</span>
      </button>
      <button
        class="flex flex-wrap flex-col items-center hover:text-white duration-150 cursor-pointer"
      >
        <i class="fa-solid fa-newspaper"></i>
        <span class="">News</span>
      </button>
      <button
        class="flex flex-wrap flex-col items-center hover:text-white duration-150 cursor-pointer"
      >
        <i class="fa-solid fa-gear"></i>
        <span class="">Settings</span>
      </button>
    </div>
    <!--  Navigation part two-->
    <div class="mt-3 ml-8">
      <div class="flex flex-wrap flex-row">
        <div class="flex flex-wrap flex-row">
          <button class="text-lg hover:text-white duration-150 cursor-pointer">
            <i class="fa-solid fa-rotate"></i>
          </button>
          <v-select
            label="Equity"
            density="compact"
            :items="['689070 ']"
          ></v-select>
        </div>
        <v-select
          class="flex flex-wrap flex-col"
          label=""
          single-line="false"
          density="compact"
          :items="['Rana Utban', 'Rana ooop']"
        >
        </v-select>

        <button class="flex flex-wrap flex-row mt-8 ml-4">
          <i class="fa-regular fa-clock"></i>
          <span class="text-sm ml-2">{{ dateFormat }}{{ timeFormat }}</span>
        </button>
        <button
          class="flex flex-wrap flex-col ml-4 justify-end mb-5 hover:text-white duration-150 cursor-pointer"
        >
          <i class="fa-solid fa-signal text-green-500"></i>
        </button>

        <button
          class="flex flex-wrap flex-col justify-self-end ml-4 mt-3 hover:text-white duration-150 cursor-pointer"
        >
          <i class="fa-solid fa-right-from-bracket"></i>
          <span class="">Logout</span>
        </button>
      </div>
    </div>
  </div>
  <div data-theme="dark" class="flex flex-wrap justify-between">
    <div class="flex flex-wrap flex-row">
      <p class="font-bold text-white ml-4 mt-2">SET</p>
      <span class="ml-4 mt-2 text-green-600"
        ><i class="fa-solid fa-caret-up"></i>
        <span class="text-sm">1677.49 -5.40 -3.2%</span>
      </span>
      <p class="text-sm text-white ml-4 mt-3">High</p>
      <span class="text-sm text-green-600 ml-1 mt-3">1685.41</span>
      <p class="text-sm text-white ml-4 mt-3">Low</p>
      <span class="text-sm text-green-600 ml-1 mt-3">1685.41</span>
      <p class="text-sm text-white ml-4 mt-3">Value</p>
      <span class="text-sm text-green-600 ml-1 mt-3">1685.41MB</span>
    </div>
    <div class="justify-end mt-1">
      <v-btn elevation="0" :rounded="0"> Buy/Sell 1-Click </v-btn>
    </div>
  </div>
</template>

<script setup>
const newDate = new Date();
let dateFormat = newDate.toDateString();
let timeFormat = newDate.toLocaleTimeString();
</script>

<style lang="scss" scoped></style>
