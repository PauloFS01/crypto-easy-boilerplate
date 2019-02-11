<template>
  <div class="wrapper">
    <q-select
      stack-label="Delimited options"
      inverted
      color="tertiary"
      v-model="filter"
      :options="exchangeNames"
      :after="[{ icon: 'loop' }]"
    />
    <card-custom  v-for="(exchange, index)
                  in filtervalue"
                  :key="index"
                  :title="index"
                  :content="exchange"
    ></card-custom>
  </div>
</template>

<script>
// import { searchActions, searchGetters } from '../../store/helpers'
// import { retry, debounceTime } from '../../utils/operators'
import CardCustom from './CardCustom'
export default {
  components: {
    CardCustom
  },
  props: {
    consultList: {
      type: Array
    },
    tickers: {
      type: Object
    },
    exchangeNames: {
      type: Array
    }
  },
  data () {
    return {
      filter: 'all'
    }
  },
  computed: {
    filtervalue () {
      let result = {}
      if (this.tickers.ticker_24h) {
        if (this.filter === 'all') {
          return this.tickers.ticker_24h.exchanges
        }
        result[this.filter] = this.tickers.ticker_24h.exchanges[this.filter]
        return result
      }
    }
  }
  /*
  methods: {
    ...searchActions,
    retry,
    async initializer () {
      let result = await this.getTickers()
      setTimeout(() => { this.spinnerVisible = !true }, 3000)
      return result
    },
    async updatActions () {
      let check = await debounceTime(this.exchangesLastUpate, this.initializer)
      console.log(check)
      if (check) {
        this.updateExchangesLastUpate(new Date())
        console.log('update last requisition')
      }
    }
  },
  created () {
    this.updatActions()
  }
  */
}
</script>
<style scoped>

</style>
