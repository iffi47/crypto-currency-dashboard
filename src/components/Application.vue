<template>
  <div>
    <v-row no-gutters class="flex flex-nowrap min-h-fit">
      <v-col cols="3" class="flex-grow-1 flex-shrink-0">
        <v-sheet theme="dark">
          <v-table theme="dark">
            <thead>
              <tr>
                <th class="text-left">Volume</th>
                <th class="text-left">Bid</th>
                <th class="text-left">Offer</th>
                <th class="text-left">volume</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in currency" :key="item.id">
                <td>{{ item.volume }}</td>
                <td>{{ item.bid }}</td>
                <td>{{ item.offer }}</td>
                <td>{{ item.volume2 }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-sheet>
      </v-col>

      <v-col cols="8" class="flex-grow-0 flex-shrink-1">
        <Chart></Chart>
      </v-col>

      <v-col cols="4" class="flex-grow-1 flex-shrink-0">
        <v-table theme="dark">
          <thead>
            <tr>
              <th class="text-left">Volume</th>
              <th class="text-left">Bid</th>
              <th class="text-left">Offer</th>
              <th class="text-left">volume</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in currency" :key="item.id">
              <td>{{ item.volume }}</td>
              <td>{{ item.bid }}</td>
              <td>{{ item.offer }}</td>
              <td>{{ item.volume2 }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </div>
  <div><Bottom /></div>
</template>

<script setup>
import Bottom from "./Bottom.vue";
import Chart from "./Chart.vue";

let currency = [
  {
    id: 1,
    volume: 43242,
    bid: 159,
    offer: 23,
    volume2: 3423,
  },
  {
    id: 2,
    volume: 43242,
    bid: 159,
    offer: 23,
    volume2: 3423,
  },
  {
    id: 3,
    volume: 43242,
    bid: 159,
    offer: 23,
    volume2: 3423,
  },

  {
    id: 4,
    volume: 43242,
    bid: 159,
    offer: 23,
    volume2: 3423,
  },
  {
    id: 5,
    volume: 43242,
    bid: 159,
    offer: 23,
    volume2: 3423,
  },
];
</script>

<style lang="scss" scoped></style>
