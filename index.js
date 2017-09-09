class Algorithm {
  constructor (option) {
    let setting = {
      start: 0,
      end: 10000,
      sort: false
    }
    this.option = Object.assign({}, setting, option)
  }
  random (repeat = true) {
    let [arr, obj] = [[], {}]
    for (let i = this.option.start; i < this.option.end; i++) {
      let start = this.option.start
      let end = this.option.end
      let num = start + Number.parseInt(Math.random() * (end - start))
      if (repeat) {
        arr.push(num)
      } else {
        if (obj[num] === undefined) {
          obj[num] = num
          arr.push(num)
        }
      }
    }
    return arr
  }
}

module.exports = Algorithm