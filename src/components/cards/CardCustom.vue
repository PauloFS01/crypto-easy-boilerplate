<template>
  <q-card>
    <q-card-title class="title">
      <div class="card-title ">{{ title }} - {{ exchangeNames[title] }}</div>
      <div class="card-icon" :class="isPositive"><q-icon name="swap_vert"/></div>
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      <div class="card-body">
        <!--<div><q-icon name="swap_vert"/></div>-->
        <div class="card-value"> <span>R$:</span>  {{ content.last | currency }}</div>
        <div class="nested-content">
          <div>high: {{ content.high | currency}}</div>
          <div>low: {{ content.low | currency}}</div>
        </div>
        <div><div>vol: {{ content.vol }}</div></div>
      </div>
    </q-card-main>
  </q-card>
</template>

<script>
import { mapState } from 'vuex'
import currency from '../../filters/currency'
export default {
  props: {
    title: {
      type: String
    },
    content: {
      type: Object
    }
  },
  filters: {
    currency
  },
  computed: {
    ...mapState({
      exchangeNames: (state) => state.selects.exchangesNames || {}
    }),
    isPositive () {
      return (this.content.last === this.content.low) ? 'red' : 'green'
    }
  }
}
</script>

<style scoped>
  .card-body {
    display:grid;
    grid-template-columns:2fr 1fr;
  }
  .nested-content{
    display:grid;
    text-align: right;
  }
  .card-title {
    float: left;
  }
  .card-icon {
    float: right;
    font-size: 1.5em;
  }
  .card-body > div:nth-child(odd) span {
    color: #f9ca24;
  }
  .card-value {
    font-size: 1.5rem;
  }
  .redBorder {
    border: solid red 1px;
  }
  .title {
    padding-bottom: 0;
  }
  .green {
    color: greenyellow;
  }
  .red {
    color: red;
  }
</style>
