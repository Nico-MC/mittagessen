<template lang="html">
  <div>
    <p>Kategorien - FILTER</p>
    <div class="categories">
      <button
        v-for="category in categories"
        v-on:click="saveCategory(category)"
        :class="{ active: checkClickedCategory(category) }"
        >
          {{ category }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Categories',
    data () {
      return {
        categories: [
          'Alles',
          'Burger',
          'Pizza / Pasta',
          'Asiatisch',
          'Hausmannskost',
          'Sonstiges'
        ]
      }
    },
    methods: {
      saveCategory (category) {
        const index = this.$store.state.filter.category.indexOf(category);
        if (index === -1) {
          this.$store.state.filter.category.push(category);
        } else if (index > -1) {
          this.$store.state.filter.category.splice(index, 1);
        }
      },
      checkClickedCategory (category) {
        const index = this.$store.state.filter.category.indexOf(category);
        if (index > -1) return true;
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
