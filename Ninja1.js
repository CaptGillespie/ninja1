function Ninja(name, health, speed, strength){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
}
    this.sayName = function(){
        console.log("Hello, my name is " + this.name);
    }
    this.showStats = function(){
        console.log(this.name, this.health, this.speed, this.strength);
    }
    this.punch = function(){

    }

    var ninja1 = new Ninja("Hyabusa", 100, 3, 3,);
    var blueNinja = new Ninja("Goemon");
    var redNinja = new Ninja("Bill Gates");
    redNinja.punch(blueNinja);



    
    ninja1.sayName();
        console.log(ninja1.name)
    ninja1.showStats();
        console.log(ninja.health, ninja.speed, ninja.strength)
    