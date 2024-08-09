// 1. What is a function?

// ფუნქცია არის კოდის ბლოკი, რომელიც შექმნილია კონკრეტული ამოცანის შესასრულებლად და შეიძლება შესრულდეს გამოძახებისას. ფუნქციები ხელს უწყობს კოდის ორგანიზებას, 

// 2. What is a function call?

//ფუნცქიის გამოძახებით პროგრამას ვეუბნებით რომ შეასრულოს ფუნქციაშ მოცემული პირობა

// 3. What is a code block, and how does it relate to a function?
 //JavaScript-ში კოდის ბლოკი არის განცხადებების ერთობლიობა, რომლებიც დაჯგუფებულია. კოდის ბლოკები გამოიყენება ცვლადების არეალის და ნაკადის სტრუქტურების გასაკონტროლებლად.

// 4. Create a function that takes a string as an argument and greets the user. For example, if the function is 
// called with "John," the function should return "Hello, John!"
// let name = prompt("Please enter your name");

function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("John"));
// 5. Create a function that takes a string as an argument and returns a string with the argument value in reverse. 
// For example, if the function is called with the input "hello," the function should return "olleh." (Use a loop, not a method that does this in one step.)

function reversestring(str) {
    return str.split('').reverse().join('');
}
console.log(reversestring("lasha"));

// 6. What is a default argument, and how does it work?

//არის მნიშვნელობა, რომელსაც ფუნქციის პარამეტრი იღებს, როდესაც არგუმენტი არ არის მოცემული ამ პარამეტრისთვის ფუნქციის გამოძახებაში.

// 7. What is the scope and lifetime of a variable?

//ის განსაზღვრავს, თუ სად შეიძლება ცვლადის გამოყენება ან მითითება კოდის ფარგლებში.

// 8. What is a return value?

//ის აშუალებას აძლევს ფუნქციებს, გადასცენ შედეგები ან მონაცემები პროგრამის იმ ნაწილზე, რომელმაც ისინი გამოიძახა.

// 9. What is the return value of a function that does not have a return statement?

//undefined

// 10. Given the following function, find mistakes in the code and explain what the function is supposed to do:
//     ```javascript
    function foo(y) {
        return y * 2; //return value რადგან ფუნქციამ დააბრუნოს შედეგი ან მონაცემები
    }
   let y = 7;
     y = foo(y);
     console.log(y);

// 11. Given the following code, find and correct the mistake in the code:
//     ```javascript
    function bar(x) {//არგუმენტად სჭირდება x
        return x + 1; // return
    }
    console.log(bar(6)); // Outputs 7
    
    function foo(x) {
        x = bar(x); //არგუმენტად სჭირდება x
        x *= 2;     // Multiply the result by 2
        return x;   // Return the final value of x
    }
    
    let x = 7;
    x = foo(x); 
    console.log(x); 
    
//     ```
// 12. Given the following function, what is the return value of the function call `foo(2)`? Explain your answer.
//     ```javascript
    function foo(d) {
        if (d > 5) {
           return d;
       } else {
           return d + foo(d + 1);
         }
     }
     console.log(foo(2));
     //ჩვენ როცა გადავცემთ 2ს რაც ნაკლებია 5ზე ის დაამატებს მას 1ს და ასე გაგრძელდება სანამ დს მნიშვნელობა არ იქნება 5ზე მეტი ამის შემდეგ ყველა წინა ვარიანტები შეიკრიბება და გამოვა 20
//     ``` 
// 13. Create a function that takes an array of numbers as an argument and returns the sum of the odd numbers in the array. 
// (Use a loop, not a method that does this in one step.)
function sumOfOdds(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {  
        if (numbers[i] % 2 !== 0) {
            sum += numbers[i]; 
        }
    }

    return sum; 
}

const numbersArray = [1, 2, 3, 4, 5];
console.log(sumOfOdds(numbersArray)); 

// 14. Create a function that takes a string as an argument and returns a boolean, true if string is a palindrome else false. 
// A palindrome is a word that reads the same backward as forward. For example, if the function is called with `"hello"` it should return 
// `false`, if the function receives `"elle"` it should return `true`, because `elle` backwards is also `elle`.

function isPalindrome(str) {
   
    const equal = str.toLowerCase();

   
    const reversedStr = equal.split('').reverse().join('');

   
    return equal === reversedStr;
}
console.log(isPalindrome("hello")); 
console.log(isPalindrome("elle")); 
console.log(isPalindrome("Malayalam"));
