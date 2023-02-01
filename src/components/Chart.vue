<template>
  <div data-theme="black">
    <apexchart
      :options="options"
      :series="series"
      type="candlestick"
    ></apexchart>
  </div>
</template>

<script setup>
let options = {
  chart: {
    type: "candlestick",
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return "$" + value;
      },
    },
  },
};
let series = [
  {
    data: [
      {
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33],
      },
      {
        x: new Date(1438780400000),
        y: [6872.01, 6983.59, 6770, 6000.11],
      },
      {
        x: new Date(1536780400222),
        y: [6232.01, 6093.59, 6550, 6440.11],
      },
      {
        x: new Date(1537780400876),
        y: [6632.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date(1535780400096),
        y: [6632.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date(1538870400236),
        y: [44532.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date(1538440400658),
        y: [7832.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date(1538230400967),
        y: [9882.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date(1538340700000),
        y: [7632.01, 6643.59, 6620, 6630.11],
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
