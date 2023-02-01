<template>
  <div>
    <v-container fluid class="pa-0">
      <v-row no-gutters class="pa-0">
        <v-col cols="4" class="flex-grow-0 flex-shrink-0 ml-1">
          <v-btn color="#564F6F" class="text-white" block>689071 Equity</v-btn>
        </v-col>
        <v-col col="12" class="ml-1 flex-grow-1 flex-shrink-0">
          <v-btn color="#564F6F" class="text-white" block>Rana Utban</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 mt-1">
      <v-row no-gutters class="pa-0">
        <v-col col="1" class="flex-grow-0 flex-shrink-0 ml-1">
          <v-btn color="#564F6F" class="text-white">Place Order</v-btn>
        </v-col>
        <v-col col="1" class="flex-grow-0 flex-shrink-0 ml-1">
          <v-btn color="#564F6F" class="text-white text-sm"
            >Stoping Order</v-btn
          >
        </v-col>
        <v-col col="1" class="flex-grow-0 flex-shrink-0 ml-1"
          ><v-btn color="#564F6F" class="text-white text-sm"
            >Trading Order</v-btn
          ></v-col
        >
        <v-col col="1" class="flex-grow-0 flex-shrink-0 ml-1"
          ><v-btn color="#564F6F" class="text-white text-sm"
            >Bracket Order</v-btn
          ></v-col
        >
        <v-col col="1" class="flex-grow-0 flex-shrink-0 ml-1"
          ><v-btn color="#564F6F" class="text-white text-sm">DCA</v-btn></v-col
        >
        <v-spacer></v-spacer>
        <v-col col="1">
          <v-btn variant="text" size="small"
            ><i class="fa-regular fa-bell"></i>Alert Orders</v-btn
          >
        </v-col>
        <v-col col="1">
          <v-btn variant="text" size="small"
            ><i class="fa-solid fa-angles-up"></i>Show more</v-btn
          > </v-col
        ><v-col col="1">
          <v-btn variant="text" size="small"
            ><i class="fa-solid fa-arrows-rotate"></i>Show more</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
    <div
      data-theme="#5599ff"
      class="bg-background-blue flex flex-wrap flex-row h-10"
    >
      <v-radio-group inline v-model="inline" class="text-white">
        <v-radio label="Buy" value="1" color="grey-darken-3"></v-radio>
        <v-radio label="Sell" value="2" color="grey-darken-3"></v-radio>
      </v-radio-group>
    </div>
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">Order No</th>
          <th class="text-left">Time</th>
          <th class="text-left">Symbol</th>
          <th class="text-left">Side</th>
          <th class="text-left">Price</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Matched</th>
          <th class="text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in currency" :key="item.id">
          <td>{{ item.order }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.symbol }}</td>
          <td>{{ item.side }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.matched }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
const inline = true;
let currency = [
  {
    id: 1,
    order: 43242,
    time: "11:53:38",
    symbol: "PTT",
    side: "B",
    price: 952.3,
    quantity: 1,
    matched: "",
    status: "Canceled",
  },
  {
    id: 2,
    order: 43242,
    time: "11:53:38",
    symbol: "PTT",
    side: "B",
    price: 952.3,
    quantity: 1,
    matched: "",
    status: "Canceled",
  },
  {
    id: 3,
    order: 43242,
    time: "11:53:38",
    symbol: "PTT",
    side: "B",
    price: 952.3,
    quantity: 1,
    matched: "",
    status: "Canceled",
  },

  {
    id: 4,
    order: 43242,
    time: "11:53:38",
    symbol: "PTT",
    side: "B",
    price: 952.3,
    quantity: 1,
    matched: "",
    status: "Canceled",
  },
  {
    id: 5,
    order: 43242,
    time: "11:53:38",
    symbol: "PTT",
    side: "B",
    price: 952.3,
    quantity: 1,
    matched: "",
    status: "Canceled",
  },
];
</script>

<style lang="scss" scoped></style>
