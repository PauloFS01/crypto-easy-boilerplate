const transform = (obj) => {
  var array = []
  for (var item in obj) {
    let newOb = {}
    newOb.x = item
    newOb.y = obj[item]
    array.push(newOb)
  }
  return array
}

export default transform
