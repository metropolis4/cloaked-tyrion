(function() {

  var Maths = {
    add: function (a, b) {
      return a + b;
    },

    sub: function (a, b) {
      return a - b;
    },

    mul: function (a, b) {
      return a * b;
    },

    div: function (a, b) {
      return a / b;
    }
  };

  var Pet = function (name, species, color) {
    this.name = name;
    this.species = species;
    this.color = color;
  };

  var PetOwner = function(name, age, petSpecies, petColor, petName) {
    this.name = name;
    this.age = age;
    Pet = function(species, color, name) {
      this.species = species;
      this.color = color;
      this.name = name;
    };
    this.pet = new Pet(petSpecies, petColor, petName);
  };
  PetOwner.tellAboutPet = function () {
    return "My pet's name is " + this.pet.name +
    ". He is " + this.pet.color + " and his name is " + this.pet.name;
  };

}).call(this);
