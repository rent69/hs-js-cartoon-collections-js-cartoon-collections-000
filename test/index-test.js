'use strict';

describe("dwarfRollCall", function() {
      it("prints out dwarfs in a numbered list based on an array'", function() {
        var dwarves = ["Dopey", "Grumpy", "Bashful"];
        expect(dwarfRollCall(dwarves)).toEqual("1. Dopey 2. Grumpy 3. Bashful ");
      });
});

describe("summonCaptainPlanet", function() {
  it("returns an array with the same number of elements that it was given", function() {
        var veggies = ["carrot", "cucumber", "pepper"];
        expect(summonCaptainPlanet(veggies).length).toEqual(3);
  });

  it("capitalizes each element and adds an exclamation mark", function() {
        var fruits = ["apple", "banana", "orange"];
        var result = summonCaptainPlanet(fruits);
        result.forEach(function(item){
          expect(item).toContain("!");
        });
  });
});

describe("longPlaneteerCalls", function() {
      it("returns true if any calls are longer than 4 characters", function() {
        var longCalls = ["earth", "wind", "fire", "water", "heart"];
        expect(longPlaneteerCalls(longCalls)).toBe(true);
      });

      it("returns false if no calls are longer than 4 characters", function() {
        var shortCalls = ["wind", "fire"];
        expect(longPlaneteerCalls(shortCalls)).toBe(false);
      });
});

describe("findTheCheese", function() {
      it("returns the first element of the array that is cheese", function() {
        var cheddarCheese = ["banana", "cheddar", "sock"];
        expect(findTheCheese(cheddarCheese)).toEqual("cheddar");
      });

      it("returns 'no cheese!' if the array does not contain a type of cheese", function() {
        var noCheeseArray = ["banana", "tomato", "sock"];
        expect(findTheCheese(noCheeseArray)).toEqual("no cheese!");
      });
});