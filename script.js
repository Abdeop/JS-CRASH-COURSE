
let string = "AbdorahhackibJAVASCRIPT3"

// a quick note that shows how much Variables are powerfull
// DRY- don't repeat lines like this one below

console.log(string);
console.log(string);
console.log(string);
console.log(string.length);

// How to create Variables ?; To answer to this question, we simply use "let" and "const" and rarely "var" because we don't use it sm
// 4example

let userEmail = "Abdo@gmail.com";
let age = 17;
let name = "Abde";

// It is not necessary to use let or const or var. all the time we simply can do this.

age = age + 1;
console.log(age);

// creating variables using const

const points = 100;
console.log(points);

// in const we are not allowed to adjust the variables after we set them up like "let" keyword so this is a difference thing between them so we better use "let" for the moment and then we can use const when our level gets better

// EX

// Currency converter 

// AUD$ to US$ formula

// AUD = US * 1.5

function usdollarconvertertoaud(dollars){
    return dollars * 1.5
}
console.log(usdollarconvertertoaud(80))

// Semi colons are optional but it's a good practice to kep using them

// Comparison Operators

let comparison = "7" == 7

console.log(comparison)

let comparison2 = "7" === 7

console.log(comparison2)

// If we want the opposite we simply use "!" instead of the first equal sign, and this "!" can work with anything even !yes or !no

let comparison3 = "5" != 5

console.log(comparison3)

let comparison4 = "5" !== 5

console.log(comparison4)

// Conditions

let age1 = 20

if (age1 >= 18) {
    console.log(`You are ${age1} yo, you can enter to the Stadium`)
}
else {
    console.log(`You are ${age1} yo, you cannot enter to the Stadium`)
}

// Ternary operator 

let hasMembership = true
let loggedIn = true

let str = hasMembership && loggedIn ? 
"show video" :
"don't show the video"
console.log(str)

// Loops
// While loop

let loop = 1
while (loop <= 5) {
console.log("This is a loop")
loop = loop + 1
}
console.log("a loop just ran")

// for loop
// i = index
// i++ = i + 1
// the only reason why i have typed "a" is to make sure to not make conflict with the next iindex "i" in the activity line 105

for (let a = 0; a <= 3; a++) {
     console.log(a)}

// Activity: Make a for loop that make a difference between odd and even from 1 to 10

for (let i = 1; i <=10; i++) {
    

if (i % 2 === 0) {
    console.log(`${i} - even`)}

     else {
        console.log(`${i} - odd`)
    }}

    // Activity 3: make a string "Abde" but in this order;
    // "A"
    // "B"
    // "D"
    // "E"
                // My Answer
    // let str3 = "A"
    // console.log(str3)
    // let str4 = "B"
    // console.log(str4)
    // let str5 = "D"
    // console.log(str5)
    // let str6 = "E"
    // console.log(str6)

                // The correction
    
    let str3 = "Abde"
    for (let b = 0; b < str3.length; b++) {
        console.log(str3[b])
    }
    // Again. The only reason why i named the index by "b" instead of "i" is because i already did typed it so it only will make conflict with the other elements

    // Regular Functions;
    // Function declaration;
    function greetUser (name) {
    console.log(`Hello, ${name}`) 
    }

    // Call the function;
    greetUser("Abde")
    greetUser("Danny")
    greetUser("Ryan")
    // Return element;

    function sum (num1, num2) {
        return num1 - num2
    }
    console.log(sum(5, 5))

    // arrow function;
    
    const convertMadtoUsd = (Dirhams) => {
        return Dirhams / 10
    }
    console.log(convertMadtoUsd(500));

    // Arrays
    let array = ["Apples", "Bananas", "Milk"]

    console.log(array[1])
    // To target the last element;
    console.log(array[array.length - 1])

    // Push Array "Mutating method";
    array.push("Toast")
    console.log(array)

    // Array filter "Non-Mutating methode" with a "call back function" (Is it similar to const function);
    array.filter((element) => {
        console.log(element)
    })

    /* Exercise
    filter all the people who are not +18 years old
    [18, 20, 16, 15, 19]
    [16, 17, 14, 15, 19]
    [20, 22, 26, 16, 20]
     */ 
    let age5 = [18, 20, 16, 15, 19, 17, 14,
        22, 26,]

     let adults = age5.filter((element) => (element >= 18)
    )

    console.log(adults)

    /*  SAME Exercise (WITHOUT USING .FILTER METHOD)
    filter all the people who are not +18 years old
    [18, 20, 16, 15, 19]
    [16, 17, 14, 15, 19]
    [20, 22, 26, 16, 20]
     */ 
    let age10 =[18, 20, 16, 15, 19, 17, 14,
        22, 26,]

        for (let c = 0; c < age10; c++) {
            if (age10[c]>= 18) {
                console.log(age10>= 18)
            }
            else {
                console.log("This age is unnable to accsess")
            }
        }

        // .map method(NON MUTATING METHOD);
        let array2 = [1, 2, 3, 4, 5]

        let newArray2 = array2.map((element) => {
            console.log(element)
            return "you are the best thing that just happened to me"
        })

            console.log(newArray2)

            // Objects;

    // let adminEmail = "example@gmail.com"
    // let adminPass  = "12345"
    // let adminName  = "Don Abde"
    // let adminSubscribtion = "VIP+"

    let admins = [{
        email: "example@gmail.com",
        password: "12345",
        name: "Don Abde",
        Subscribtion: "VIP+"
    },
                {
                    email: "Abde@.com",
                    password: "12345",
                    name: "Danny"
                }
]

 console.log(admins[0].email)

 console.log(admins[1].name)
 
 console.log(admins[1].email)

//    The DOM
// 1st method (recommended)

console.log(document.querySelector(`#heading`))

// 2nd method; Only work with element who got Id in html;

console.log(document.getElementById(`heading`))

// change element content 
document.querySelector(`h1`).innerHTML = "Abde"
document.querySelector(`h1`).innerHTML += "Abde"

// Change CSS;
document.querySelector(`h1`).style.color = "white"
document.querySelector(`h1`).style.fontWeight = 800
document.querySelector(`h1`).style.fontFamily = "sans-serif"
document.querySelector(`h1`).style.margin = "20px"