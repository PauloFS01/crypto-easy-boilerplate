<template>
  <q-list inset-separator >
    <q-item v-for="(tick, index) in tickers" :key="index">
      <q-item-side>
        <q-item-tile letter color="secondary"> <span class="icon-index icon-symbol">{{ tick.symbol }}</span> </q-item-tile>
      </q-item-side>
      <q-item-main :label="tick.last | currency" />
      <q-item-side right :avatar="inconPaths + index + '.png'">
      </q-item-side>
    </q-item>
  </q-list>
</template>
<script>
import currency from '../../filters/currency'
export default {
  props: {
    tickers: {
      type: Object
    },
    inconPaths: {
      type: String
    }
  },
  filters: {
    currency
  }
}
</script>
<style scoped>
  .icon-index {
    font-size: .8em;
  }
  .icon-symbol {
    color: #f6b93b;
  }
</style>
