"use strict";

describe("suite", function() {
  var stack, CAPACITY;
  describe("size", function() {
    beforeEach(function() {
      CAPACITY = 10;
      stack = new Stack(CAPACITY);
    });
    it("has propetry size", function(done) {
      expect(stack.size).not.toBeUndefined();
      done();
    });
    it("size is a number", function(done) {
      expect(stack.size.constructor).toBe(Number);
      done();
    });
    it("capacity be set by parameter passet to constructor", function(done) {
      expect(stack.capacity).toEqual(CAPACITY);
      done();
    });
  });
  describe("methods pop and push", function() {
    beforeEach(function() {
      stack = new Stack(CAPACITY);
    });
    it("has method push", function(done) {
      expect(stack.push).toBeDefined();
      expect(stack.push.constructor).toBe(Function);
      done();
    });
    it("increases size when push is called", function(done) {
      stack.push();
      expect(stack.size).toEqual(1);
      done();
    });
    it("has method pop", function(done) {
      expect(stack.pop).toBeDefined();
      expect(stack.pop.constructor).toBe(Function);
      done();
    });
    it("decreases size when pop is called", function(done) {
      stack.push();
      stack.pop();
      expect(stack.size).toEqual(0);
      done();
    });
    it("returns size of stack when push is called", function(done) {
      expect(stack.push()).toEqual(1);
      done();
    });
    it("returns popped item of stack when pop is called", function(done) {
      var poppedItem = 'item';
      var anotherItem = 'anotherItem';
      stack.push(anotherItem);
      stack.push(poppedItem);
      stack.pop();
      expect(stack.pop()).toBe(anotherItem);
      done();
    });
  });
  describe("errors", function() {
    it("throws an Underflow error when pop is called on empty stack", function(done) {
      var stack = new Stack(0);
      var illegalPop = function() {
        stack.pop();
      };
      expect(illegalPop).toThrowError();
      done();
    });
    it("throws an Overflow error when push is called on stack with size", function(done) {
      var stack = new Stack(10);
      var illegalPush = function() {
        while (stack.size < stack.capacity) {
          stack.push();
        }
        stack.push();
      };
      expect(illegalPush).toThrowError();
      done();
    });
  });
});
