/* 1
P:
    given a string, double return a new string with doubled consonants
    input: string
    ouptut: string
E:
    input: "string"
    output: "ssttrrinngg"
D:
    arrays, strings
A:
    initialize a new array;
    iterate through the given string
        initialize a variable to hold vowels
        check if the current letter is included in vowels {
            push current letter into the new array
        }
        else {
            push current letter, current letter into the new array
        }
    return the joined array seperated by an empty sting ''
*/

const doubleConsonants = str => {
    const newStrArr = [];
    for (let i = 0; i < str.length; i++) {
        let vowels = "aeiou";
        if (vowels.includes(str[i])) {
            newStrArr.push(str[i]);
        } else {
            newStrArr.push(str[i],str[i]);
        }
    }
    return newStrArr.join('');
}
// console.log(doubleConsonants('hello'));

/* 2
P:
    input: string
    output: reversed string
E:
    input: 'hello'
    output: 'olleh'
D:
    array, strings
A: 
    initialize a new array to hold the reversed string
    iterate through the given string backwards
        push the current value into the array
    return the array joined by an empty string
*/

const reverseString = str => {
    const reversed = [];
    for (let i = str.length-1; i >= 0; i--) {
        reversed.push(str[i]);
    }
    return reversed.join('');
}
// console.log(reverseString('peppa pig'))

/*3
P:
    input: number
    output: boolean
    given a year, return true if it is a leap year, false if it is not
    
    RULES FOR A LEAP YEAR:
    the year is divisible by 100 and 400
    the year is divisible by 4
    if the year is only divisible by 100 it is not a leap year
E:
    input: 2004
    output: true
D:
    numbers, booleans
A:
    conditional statement to check the rules
*/

const leapYear = year => {
    if (year % 4 === 0 && year % 100 === 0) {
        return year % 400 === 0 ? true : false
    }
    else if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(leapYear(1000))

/*4
P:
    input: two arrays
    output: one array
    given two arrays, return a new array with the items alternating
E:
    input: ['one','two'], [1,2]
    output: ['one', 1, 'two', 2
    ]
D:
    arrays
A:
    initialize an empty array
    iterate through the first array
        push the current value of each array into the new array
    return the new arr
*/

const combineArrays = (arr1, arr2) => {
    const combined = [];
    for (let i = 0; i < arr1.length; i++) {
        combined.push(arr1[i], arr2[i])
    }
    return combined;
}
// console.log(combineArrays(['one','two'], [1,2]))

/* 5
P:
    input: string
    output: object
    given a string, return an object that has properties of the 5 vowels, with values of how many times that letter is in the given string.
E:
    input: 'supercalifragilisticexpialidocious'
    output: {
        'a' : 3,
        'e' : 2,
        'i' : 7,
        'o' : 2,
        'u' : 2
    }
D:
    strings, objects, numbers
A:
    initialize an object with keys as vowels with values of 0
    iterate through the given string
        if the current letter is a key in obj {
            currentLetter++
        }
    return the object
*/

const vowelCounter = sentence => {
    const obj = {
        'a' : 0,
        'e' : 0,
        'i' : 0,
        'o' : 0,
        'u' : 0
    };
    for (let i = 0; i < sentence.length; i++) {
        let currentLetter = sentence[i];
        if (currentLetter in obj) {
            obj[currentLetter]++;
        }
    } return obj;
}
// console.log(vowelCounter('supercalifragilisticexpialidocious'));

/* 6
P:
    input: string
    output: string with any numbers spelled changed to a digit
E:
    input: "one day"
    output: "1 day"
D:
    strings, numbers, array
A:
    initialize a new array to hold the answer
    if the given string includes words spelled out {
        push the number into the array
    }
    else {
        push the sentence into the array
    }
    return the joined array
*/

// const replaceNumbers = str => {
//     const newArr = [];
//     if ()
//     console.log(newArr.push(1))
// }
// replaceNumbers('one day')