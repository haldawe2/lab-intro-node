class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.length === 0) {
      this.items.push(item);
      this.length = this.items.length;
      return;
    }
    for (let i = 0; i < this.length; i++) {
      if (item < this.items[i]) {
        if (i === 0) {
          this.items.unshift(item);
          break;
        } else {
          this.items.splice(i, 0, item);
          break;
        }
      } else {
        this.items.push(item);
        break
      }
    }
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error ("OutOfBounds")
    }
    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
