import http from './HttpService'
import { format } from 'date-fns'

export default {
  async getData (url) {
    try {
      let result = await http().get(url)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async getDataCDK () {
    var endDate = format(new Date(), 'YYYY-MM-DD')
    var startDate = format(this.previousDate(), 'YYYY-MM-DD')
    try {
      let result = await http().get('https://api.coindesk.com/v1/bpi/historical/close.json?start=' + startDate + '&end=' + endDate)
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  previousDate () {
    var setDay = new Date().getDate() - 6
    var trampoline = new Date()
    trampoline.setDate(setDay)
    return trampoline
  }
}
