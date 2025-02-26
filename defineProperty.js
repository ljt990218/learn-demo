let obj = {
  a: 1,
  b: 2,
  c: {
    d: 4,
    e: 5,
    cc: {
      g: 7, 
    }
  },
  f: 6,
}

function _isObiject(obj) {
  return typeof obj === 'object' && obj !== null
}

function observe(obj) {
  for (const k in obj) {
    let v = obj[k]
    if (_isObiject(v)) {
      observe(v)
    }

    Object.defineProperty(obj, k, {
      get() {
        console.log('get', k);
        return v
      },

      set(newVal) {
        if (newVal === v) return
        console.log(`set ${k} ==> ${newVal}`)
        v = newVal
      }
    })
  }
}

observe(obj)

obj.c.d = 44
obj.a = 11
obj.aa = 22
console.log(obj)
