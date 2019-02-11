<template>
      <q-list separator>
        <div v-for="(data, index) in listData" :key="index">
          <q-collapsible :avatar="avatarPath + index + '.png'" :label="acronymsName[index]">
            <q-item v-for="(item, index) in data" :key="index">
              <q-item-side  class="item-index">
                <q-item-tile label>{{ acronymsDesc[index] }}</q-item-tile>
              </q-item-side>
              <q-item-main inline  class="item-main">
                <q-item-tile sublabel>{{ item }}</q-item-tile>
              </q-item-main>
              <q-item-side class="icon-help">
                 <q-item-tile><span  @click="showNotification(index)"><q-icon name="help"/></span> </q-item-tile>
              </q-item-side>
            </q-item>
          </q-collapsible>
        </div>
      </q-list>
</template>
<script>
export default {
  props: {
    listData: {
      type: Object
    },
    acronymsDesc: {
      type: Object
    },
    acronymsName: {
      type: Object
    },
    avatarPath: {
      type: String
    },
    tipsList: {
      type: Object
    }
  },
  methods: {
    showNotification (msg) {
      this.$q.notify({
        color: 'tertiary',
        textColor: 'white',
        icon: 'info',
        message: this.tipsList[msg],
        position: 'right'
      })
    }
  }
}
</script>
<style scoped>
  .item-main{
    text-align: right;
  }
  .icon-help {
    text-align: right;
  }
</style>
