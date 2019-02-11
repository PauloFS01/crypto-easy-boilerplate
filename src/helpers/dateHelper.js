import { format } from 'date-fns'

const formatFilter = (date) => {
  return format(date, 'DD/MM/YYYY')
}
export default formatFilter
