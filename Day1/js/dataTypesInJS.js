console.clear();
// primitive datatypes
        // string
        var myName= "Dheeraj"
        console.log("my string: name is "+myName);


        console.log("my type of operatoris "+typeof myName); // typeof  return data type

        //number
        var num=14;
        console.log("number: "+num+ "is of type "+typeof num );

        // null
        let nullVar= null;
        console.log("datatype is "+typeof nullVar);

        // undefiend
        let undefiendVar=undefined;
        console.log("datatype is "+typeof undefiendVar);



// reference datatypes

        //array
        myArr=[1,2,3,4];
        console.log("datatype is "+typeof myArr);

        // objects
        let friendsMarks={
            dheeraj : 99,
            sagar : 00,
            manisha :87,
            'gourav singh ': 90// '' for space 

        }
        console.log(typeof friendsMarks);
        console.log(friendsMarks);
        console.table(friendsMarks);

        // function
        function myFun()
        {

        }
        console.log(typeof myFun);

        // date
        let date = new Date();
        console.log(typeof date);



// type conversion

let myVar;
myVar= String(34);// will convert num to string
console.log(typeof myVar);

let booleanVar;
booleanVar=0;
console.log(booleanVar);

console.log(booleanVar.toString);// tostring covert to string

let num1= parseInt("234");// to parsInt
console.log(num1);

let num2= parseFloat("34.097");// to parse float
console.log(num2);

console.log(num2.toFixed(2));// will print upoto two decimal and will round off the decimal figure



