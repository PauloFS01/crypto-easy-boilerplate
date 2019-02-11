export default {
  debounceTime (untilTime) {
    var baseDate = new Date().setMinutes(new Date().getMinutes() - 4)
    return untilTime < new Date(baseDate)
  }
}
