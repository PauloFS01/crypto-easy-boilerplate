<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="tertiary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Crypto Easy
          <div slot="subtitle">Running on v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Menu</q-list-header>
        <q-item @click.native="$router.push('/charts')">
          <q-item-side icon="bar_chart" />
            <q-item-main label="Charts" sublabel="Gráficos" />
        </q-item>
        <q-item @click.native="$router.push('/compare')">
          <q-item-side icon="compare_arrows"/>
          <q-item-main label="Cryptos" sublabel="Valor em-BTC"/>
        </q-item>
        <q-item @click.native="$router.push('/')">
          <q-item-side icon="business" />
          <q-item-main label="Exchanges" sublabel="BRL prices" />
        </q-item>
        <q-item @click.native="$router.push('/orders')">
          <q-item-side icon="table_chart"/>
          <q-item-main label="Orders book" sublabel="Statistics" />
        </q-item>
        <q-item @click.native="$router.push('/global')">
          <q-item-side icon="public"/>
          <q-item-main label="Global Prices" sublabel="By Blockchain" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    goHome () {

    }
  }
}
</script>
