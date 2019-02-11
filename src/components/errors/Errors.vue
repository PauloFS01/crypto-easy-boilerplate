<template>
<div class="wrapper">
  <p>Ops there is an error here...</p>
  <img
    src="~assets/sad.svg"
    style="width:30vw;max-width:150px;"
  >
  <q-btn
    icon="replay"
    label="Page Reloader"
    color="secondary"
    @click="reload"
    class="full-width"
  >
    <q-spinner-oval slot="loading" />
  </q-btn>
</div>
</template>
<script>
export default {
  methods: {
    reload () {
      this.$emit('reload')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~variables'
.wrapper
  width 80%;
  margin auto
  margin-top 20%
  text-align center
</style>
