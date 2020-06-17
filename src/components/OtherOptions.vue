<template lang="html">
  <div>
    <div class="distance">
      <p>Entfernung</p>
      <button
        v-for="(distance, index) in distances"
        v-on:click="saveDistance(index)"
        :class="{ active: index === $store.state.filter.distance }" >
          {{ distance }}
      </button>
    </div>
    <div class="price">
      <p>Preis</p>
      <button
        v-for="(price, index) in prices"
        v-on:click="savePrice(index)"
        :class="{ active: index === $store.state.filter.price }" >
          {{ price }}
      </button>
    </div>
    <div class="vege">
      <p>Veggietauglich</p>
      <button
        v-for="(vege, index) in veges"
        v-on:click="saveVege(index)"
        :class="{ active: index === $store.state.filter.vege }" >
          {{ vege }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherOptions',
  data () {
    return {
      distances: [
        'Egal',
        'nicht so weit weg',
        'ganz nah dran',
      ],
      prices: [
        'Egal',
        'nicht zu viel',
        'Ende des Monats'
      ],
      veges: [
        'Egal',
        'sollte schon schmecken',
        'muss ganz lecker sein'
      ]
    }
  },
  methods: {
    saveDistance: function (index) {
      this.$store.state.filter.distance = index;
    },
    savePrice: function (index) {
      this.$store.state.filter.price = index;
    },
    saveVege: function (index) {
      this.$store.state.filter.vege = index;
    }
  }
}
</script>

<style lang="css" scoped>
  .distance {
    margin-right: 15px;
  }

  .distance, .price {
    display: inline-block;
  }
</style>
