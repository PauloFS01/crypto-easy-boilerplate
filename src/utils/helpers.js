import operators from './operators'

export default {
  async updatActions (lastUpdate, initializer) {
    let check = await operators.debounceTime(lastUpdate)
    return check && initializer()
  }
}
