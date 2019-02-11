<template>
  <div class="wrapper">
    <q-card v-if="showCards" inline class="card-Compare">
      <q-card-title>
        <h4 >Compare - Preço Por Bitcoin</h4>
      </q-card-title>
      <list-custom :listData="mapedState"/>
    </q-card>
    <errors v-else @reload="reloadData"></errors>
    <q-inner-loading :visible="spinnerVisible">
      <q-spinner-gears size="50px" color="faded"></q-spinner-gears>
    </q-inner-loading>
  </div>
</template>
<script>
import { searchGetters, searchActions } from '../store/helpers'
import helpers from '../utils/helpers'
import ListCustom from '../components/shared/ListCustom'
import Errors from '../components/errors/Errors'
export default {
  components: {
    ListCustom,
    Errors
  },
  data () {
    return {
      iconPath: 'assets/icons/',
      spinnerVisible: false,
      showCards: true
    }
  },
  computed: {
    ...searchGetters,
    mapedState () {
      let array = this.cryptocompare.values
      let result = Object.keys(array).map(key => {
        let obj = {}
        obj.name = this.cryptoNames[key]
        obj.icon = this.iconPath + key + '.png'
        obj.value = this.cryptocompare.values[key]
        return obj
      })
      return result
    }
  },
  methods: {
    ...searchActions,
    async initializer () {
      this.spinnerTogle()
      let result = await this.getCryptoCompare()
      if (result) {
        this.lastUpdate()
        this.spinnerTogle()
      } else {
        console.log('error')
        this.showCards = false
        this.spinnerTogle()
      }
    },
    update () {
      helpers.updatActions(this.compareLastUpate, () => this.initializer())
    },
    spinnerTogle () {
      this.spinnerVisible = !this.spinnerVisible
    },
    lastUpdate () {
      this.updateCompareLastUpate(new Date())
    },
    reloadData () {
      this.update()
    }
  },
  created () {
    this.update()
    setInterval(() => this.update(), 300000)
  }
}
</script>
<style scoped>
  .card-Compare {
    width: 100%;
  }
</style>
