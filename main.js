// Ex1: Write a function that takes a number as input and returns true
//  if the number is less than or equal to zero, otherwise return false.

function numbers(num){
if (num <=0){
    return true;
}
else{
    return false ;
}
}
console.log(numbers(-1));
// ======================================
// Ex2: Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)
function NextInt(num){
   Newnum= num+1;
   console.log(Newnum);
}
NextInt(12);
// =====================================

// Ex3: Write a function that takes an array of strings and returns only the strings with numbers in it as an array. 
// And return an empty array, If there are no strings containing numbers. 
function numInStr(arr) {
    return arr.filter(function (x) {
        return x.match(/\d/);
    })
}

console.log(numInStr(['foo', 'ab1', 'bar2']))
// Array [ "ab12", "34asdf" ]
// ====================================================================
// Ex4: Develop a JS Code to check if a number is even or odd using recursion 

function EvenOrOdd(num){
    
if (num === 0) {
        console.log('even');
    }else if (num ===1 ){
        console.log('odd');
    } else {
        return EvenOrOdd(num - 2);
    }
}
EvenOrOdd(8);
// ==================================
// Ex5: Write a function to swap all instances of string ch1 with string ch2 and vice versa  
// (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")

// console.log(swap("dareen"));
// ========================================================================
// Ex6,7: Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]
array1=["dareen","rawan","ahmad"];

    array1.map(element => console.log(element));
    // array1.filter(element => console.log(element));
// ==============================================
// ex8
function series(){
	return [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		        ]
			}
                // console.log((newSeries[0]));

                // console.log(Object.values(newSeries[0])); 
                // num1=(Object.values(newSeries)); 


//     newSeries.forEach(element => console.log(element));
// let y= newSeries.forEach(element => console.log(element));
function x(arr) {
    newArr = [];
    arr.forEach((elem) => {
        two = {id: elem.id, title: elem.title};
        newArr.push(two)
    });
    console.log(newArr);
}

x(series());
// \\\\\\\\\\\\\\\\\\\\\\\\
function y(arr) {
    let newArr = arr.map(elem => {
        return {id: elem.id, title: elem.title};
    })
    console.log(newArr)
}
y(series());
// ===================================
function z(arr) {
    let stars = arr.filter((elem) => {
       return elem.rating < 5;
    })
    console.log(stars)
}
z(series())
// =====================================
function prog(arr) {
    let longestStr = arr.reduce((long,Str) => {
    return Str.length > long.length ? Str : long;
});
    console.log(longestStr)
}
prog(["Java", "JavaScript", "Python", "C++", "PHP"]);
// ==============================================
function displayName(){
return [
    {
      "game_index": 76,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }
    }
    ]

}
// ==================

// Ex14: What is the output of the following JS code segments? and Why?

 var employee = {
    firstName: 'Rawan',
    sayHi: function(){
        console.log("Hi Coach ! " + this.firstName);
    }
}

employee.sayHi() // ?
// (HI Coach ! Rawan).


 var employee = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true
    },
    printInfo: function(){
        console.log("Car owner? " + this.hasCar);
    }
}

employee.printInfo() // ?
// Car owner? undefined


var employee = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true,
        printAddress: function(){
            return this.data.address;
        },
        data: {
            address: "Zarqa"
        }
    },
}

employee.info.printAddress() // ?
