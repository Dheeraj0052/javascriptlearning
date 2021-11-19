// object literals for creating objects

let car={
    name:'tata nexon',
    topspeed:101,
    run :function()
    {
        console.log('car is running');
    },

};
 
console.log(car);

car.run();
console.log(car.name);

// using constructors
function generalCar(name , topspeed)
{ this.name= name;
    this.topspeed=topspeed;
    this.run = function()
    {
        console.log(this.name+' is runnung');


    }

}
car1 = new generalCar('hexa',1000);
console.log(car1);
car1.run();

