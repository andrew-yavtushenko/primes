"use strict"

function Stack(capacity) {
  var item, that = this, arr = []
  this.size = 0
  this.capacity = capacity

  this.push = function(newItem) {
    if (that.size == that.capacity) {
      throw new Error("Overflow")
    }
    arr.push(newItem)
    return ++that.size
  }
  this.pop = function() {
    if (that.size == 0) {
      throw new Error("Underflow")
    }
    var popped = arr.pop()
    --that.size
    return popped
  }
}