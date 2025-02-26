let obj = {
  a: 1,
  b: 2,
  c: {
    d: 4,
    e: 5,
  },
  f: 6,
}

const proxy = new Proxy(obj, {
  get(target, k) {
    console.log('get', k)
    return target[k]
  },

  set(target, k, v) {
    if (target[k] === v) return

    console.log('set', k)
    target[k] = v
  },

  deleteProperty(target, k) {
    console.log('delete', k)
    delete target[k]
  },
})

proxy.a = 3
proxy.aa = 22
delete proxy.f
console.log(proxy)
