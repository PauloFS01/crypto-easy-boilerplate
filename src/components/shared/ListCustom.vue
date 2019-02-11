<template>
  <div class="wrapper">
      <q-list>
        <q-item inline v-for="(data, index) in listData" :key="index">
          <q-item-side>
            <q-item-tile>
              <img :src="data.icon" class="icon">
            </q-item-tile>
          </q-item-side>
          <q-item-main>
            <q-item-tile label> {{ data.name }}: </q-item-tile>
            <q-item-tile sublabel>{{ data.value }}</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
  </div>
</template>
<script>
export default {
  props: {
    listData: {
      type: Array
    }
  }

}
</script>
<style scoped>
  .icon {
    width: 20px;
  }
</style>
