(function() {
  
  var User = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  };

  var Pet = function(species, color, name) {
      this.species = species;
      this.color = color;
      this.name = name;
  };

  var PetOwner = function(name, age, job, petSpecies, petColor, petName) {
    User.call(this, name, age, job);
    this.pet = new Pet(petSpecies, petColor, petName);
  };
  PetOwner.prototype = new User();
  PetOwner.prototype.constructor = PetOwner;

  PetOwner.prototype.tellAboutPet = function () {
    return "My pet's name is " + this.pet.name +
    ". He is " + this.pet.color + " and he is a " + this.pet.species;
  };

  var joe = new PetOwner("Joe", 28, "Dev", "Monkey", "Black", "Jojo");

  var me = new PetOwner("Martein", 27, "Computerer", "Mantis Shrimp", 2, "Popeye");
  
}).call(this);
