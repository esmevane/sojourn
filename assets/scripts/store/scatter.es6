import { EventEmitter }  from 'events'
import { range, sample } from 'underscore'

var Scatter = {
  defaults: { domain: { low: -5, high: 25 }, dots: 100, seed: 20 },
  delay: 2500
}

if (global) global.Scatter = Scatter

class ScatterStore extends EventEmitter {
  getState()          { return this.randomData() }
  hasChanged()        { this.emit('chart:data:change') }
  onChange(callback)  { this.on('chart:data:change', callback) }
  offChange(callback) { this.removeListener('chart:data:change', callback) }

  start() {
    this.interval = setInterval(() => this.hasChanged(), Scatter.delay)
  }

  randomData() {
    let { domain: { low, high }, dots, seed } = Scatter.defaults

    let data   = []
    let domain = { x: [low, high], y: [low, high], z: [low, high] }
    let points = range(1, dots)
    let seeds  = range(1, seed)

    for (let point of points) {
      let [ id, x, y, z ] = sample(seeds, 4)

      data.push({ id, x, y, z })
    }

    return { domain, data }
  }
}

let scatterStore = new ScatterStore

scatterStore.start()

export default scatterStore
