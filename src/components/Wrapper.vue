<template>
  <div>
    <h1>WO / WAS ESSEN WIR DENN HEUTE?</h1>
    <Categories/>
    <OtherOptions/>
    <Results/>
  </div>
</template>

<script>
import Categories from './Categories.vue'
import OtherOptions from './OtherOptions.vue'
import Results from './Results.vue'

export default {
  name: 'Wrapper',
  components: {
    Categories,
    OtherOptions,
    Results
  },
  mounted () {
    this.$store.state.filter.category.push("Alles");
    this.$store.state.filter.distance = 0;
    this.$store.state.filter.price = 0;
    this.$store.state.filter.vege = 0;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  button {
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
  }

  button:hover {
    background-color: #ddd;
  }

  button.active {
    background-color: #ccc;
  }

  p {
    margin-bottom: 10px;
  }
</style>
