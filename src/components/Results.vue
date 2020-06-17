<template lang="html">
  <div class="results">
    <p>Ergebnisse</p>
    <div class="next-to">
      <div class="results-data">
        <span v-if="filteredRestaurants.length === 0">Keine Ergebnisse gefunden.</span>
        <div class="restaurant" v-for="(restaurant, index) in filteredRestaurants">
          {{ index+1 + ". " + restaurant[0] + " | " }}
          <!-- Price -->
          <i class="fas fa-coins coins" />
          {{ " " }}
          <i class="fas fa-star-of-life star"
             v-for="price in restaurant[3] + 1" />
          {{ " | " }}
          <!-- Distance -->
          <i class="fas fa-car car" />
          {{ " " }}
          <i class="fas fa-star-of-life star"
             v-for="distance in restaurant[2] + 1" />
          {{ " | " }}
          <!-- Vege -->
          <i class="fas fa-seedling seed" />
          {{ " " }}
          <i class="fas fa-star-of-life star"
             v-for="vege in restaurant[4] + 1" />
        </div>
      </div>
      <div class="buttons">
        <button type="button" v-on:click="reset">Reset</button>
        <button type="button" v-on:click="randomize">Randomize</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     restaurants: [
        [ "Perle", "Alles", 0, 0, 2 ],
        [ "Europapassage", "Alles", 0, 1, 2 ],
        [ "Max & Consorten", "Hausmannskost", 2, 0, 1 ],
        [ "Luigi's", "Pizza / Pasta", 2, 1, 2 ],
        [ "Bella Italia", "Pizza / Pasta", 1, 0, 1 ],
        [ "Restaurant Kabul", "Sonstiges", 2, 0, 1 ],
        [ "Goot", "Hausmannskost", 1, 2, 0 ],
        [ "O-ren Ishii", "Asiatisch", 1, 2, 2 ],
        [ "Better Burger Company", "Burger", 0, 1, 2 ],
        [ "Bucks Burgers", "Burger", 1, 1, 2 ],
        [ "Mr. Cherng", "Asiatisch", 1, 2, 2 ],
        [ "Franco Rathauspassage", "Pizza / Pasta", 1, 1, 2 ]
      ],
      filteredRestaurants: []
    }
  },
  computed: {
    filterChanged () {
      return [
        this.$store.state.filter.category,
        this.$store.state.filter.distance,
        this.$store.state.filter.price,
        this.$store.state.filter.vege
      ]
    }
  },
  watch: {
    filterChanged (filter) {
      this.filteredRestaurants = [];
      for (var i = 0; i < this.restaurants.length; i++) {
        if(this.checkFood(this.restaurants[i][1], filter[0])) { //Filter food category
          if(this.checkDistance(this.restaurants[i][2], filter[1])) { //Filter distance
            if(this.checkPrice(this.restaurants[i][3], filter[2])) { //Filter price
              if(this.checkVege(this.restaurants[i][4], filter[3])) { //Filter vegetarian
                this.filteredRestaurants.push(this.restaurants[i]);
              } else continue;
            } else continue;
          } else continue;
        } else continue;
      }
    }
  },
  methods: {
    checkFood (RFood, FFood) {
      for (var j = 0; j < FFood.length; j++) {
        if((FFood[j] === "Alles") || RFood === FFood[j]) return true;
      }
    },
    checkDistance (RDistance, FDistance) {
      if(FDistance === 0 || RDistance === FDistance) return true;
    },
    checkPrice (RPrice, FPrice) {
      if(FPrice === 0 || RPrice === FPrice) return true;
    },
    checkVege (RVege, FVege) {
      if(FVege === 0 || RVege === FVege) return true;
    },
    randomize () {
      this.filteredRestaurants.sort(() => Math.random() - 0.5);
    },
    reset () {
      this.$store.state.filter.category = ["Alles"];
    }
  }
}
</script>

<style lang="css" scoped>
  .results {
    margin-top: 30px;
    max-width: 900px;
  }

  .results-data {
    border: 1px solid black;
    max-width: 400px;
    padding: 15px;
    display: inline-block;
  }

  .buttons {
    justify-content: center;
    margin-left: auto;
  }

  .buttons button {
    margin-left: 15px;
    width: 120px;
  }

  /* .buttons button:nth-child(2) {
    background-color: #ccc;
  } */

  .next-to {
    align-items: end;
    display: flex;
    flex-direction: row;
  }

  .star {
    width: 12px;
    height: 12px;
    font-size: 8pt;
    vertical-align: middle;
  }

  .restaurant {
    margin-bottom: 15px;
  }

  .seed {
    color: green;
  }

  .car {
    color: #d00000;
  }

  .coins {
    color: #d2d200;
  }


</style>
