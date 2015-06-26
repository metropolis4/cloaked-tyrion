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

  var User = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  };

  var PetOwner = new User();

}).call(this);
