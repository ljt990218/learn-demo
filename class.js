class Example {
  constructor (name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  static sum(a, b) {
    return a + b
  }
}

console.log(new Example('name').getName())
console.log(Example.sum(1, 2));

class Example2 extends Example {
  constructor (name) {
    super(name)
  }

  getName() {
    return super.getName() + '2'
  }
}

console.log(new Example2('name').getName())
console.log(Example2.sum(1, 2));