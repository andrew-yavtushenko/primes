"use strict";

describe("suite", function() {
  it("Primes for one returns empty array", function(done) {
    expect(Primes(1)).toEqual([]);
    done();
  });
  it("response with not empty array when called with argument bigger than 1", function(done) {
    expect(Primes(2).length > 0).toBe(true);
    done();
  });
  it("should contain three for 3", function(done) {
    expect(Primes(3)).toEqual([3]);
    done();
  });
  it("should has two items in array", function(done) {
    expect(Primes(4)).toEqual([2,2]);
    done();
  });
  it("should contain five for 5", function(done) {
    expect(Primes(5)).toEqual([5]);
    done();
  });
  it("should do 6", function(done) {
    expect(Primes(6)).toEqual([2,3]);
    done();
  });
  it("should contain 7 for 7", function(done) {
    expect(Primes(7)).toEqual([7]);
    done();
  });
  it("should do 8", function(done) {
    expect(Primes(8)).toEqual([2,2,2]);
    done();
  });
  it("should do 9", function(done) {
    expect(Primes(Math.pow(2,31)-1)).toEqual([2147483648-1]);
    done();
  });
});