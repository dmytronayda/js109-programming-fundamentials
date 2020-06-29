# What is a function in JavaScipt: definition, usage and important vocabulary
- [What is a function in JavaScipt: definition, usage and important vocabulary](#what-is-a-function-in-javascipt-definition-usage-and-important-vocabulary)
  - [What is a function?](#what-is-a-function)
  - [How to define a function?](#how-to-define-a-function)
  - [How to invoke a function?](#how-to-invoke-a-function)
  - [Return value vs. printing to the console](#return-value-vs-printing-to-the-console)
  - [The call stack](#the-call-stack)
  - [Vocabulary / Language precision](#vocabulary--language-precision)
  - [Sources](#sources)

## What is a function?
A function in JavaScript can be considered as a 'procedure'. A function has a **unique name**, a collection of **statements** that may be invoked (0 or more times), may be provided some **inputs**, and may give back one or more **outputs**.

## How to define a function? 
A function is defined with a special keyword `function` followed by a function name and a pair of parentheses `()`. Inputs that may be provided to a function are placed between the parentheses. These inputs in the function definition are called parameters. A set of statements that function executes is placed between the curly braces.

Here's an example of **function declaration**:

```js
function bestFunction(input1, input2) { // keyword `function` followed by a function name `bestFunction` and 2 parameters between the parentheses: `input1` & input2`
  // statement1 - do something with input 1 
  // statement2 - do something with input 2
  return awesomeStuff;
}
```

This is called a **function declaration** because it appears as a statement by itself, not as an expression in another statement. When you define a function using function declaration, the association between the name `bestFunction` and the function value happens during the compile state before the code is executed. That is why function declaration can be invoked before it is defined in the code:

```js
function testStuff() {
  let thingOne = 'wood';
  let thingTwo = 'metal';
  return printThings(thingOne, thingTwo);

  function printThings(one, two) {
    console.log(one);
    console.log(two);
  }
}

testStuff();
// wood
// metal
```

Another way to define a function is **function expression**: 

```js
let testStuff = function() {
  let thingOne = 'wood';
  let thingTwo = 'metal';
  return printThings(thingOne, thingTwo); // ReferenceError: printThings is not defined

  let printThings = function(one, two) {
    console.log(one);
    console.log(two);
  }
}

testStuff();
```
In this case, the function is an expression which is assigned to the variable `testStuff`. The function expression does not get associated with its name until that assignment statement during runtime. Thus, if you try to invoke `printThings()` in the code above, JavaScript engine raises a `ReferenceError` and stops execution instantly. You cannot call a function expression before it is defined in a program.

This example also shows that functions in JavaScript are values that can be assigned and passed around (e.g. as an argument to another function). Functions are object data type values.

The third notation for functions in JavaScript is an **arrow function**.

```js
printThings('hello', 'there'); // ReferenceError: printThings is not defined

let printThings = (one, two) => {
  console.log(one); 
  console.log(two);
}; 
```
The arrow functions are similar to function expressions. The JavaScript engine does not associate an arrow function's name and value until code is being executed. That is, you cannot call an arrow function until it's been defined in the code.

## How to invoke a function?
Function is invoked by writing a function name followed by the list of passed in **arguments** in the parentheses `()`.

```js
doStuff(arg1, arg2, arg3); // function `doStuff` is invoked with 3 arguments: `arg1`, `arg2` and `arg3`
```

There's no minimum or maximum required number of arguments to be passed into the function. Arguments are optional and can be omitted from the function invocation altogether.

If a function is called without arguments but was defined with parameters, the parameters get assigned to `undefined` unless they have a default value.

```js
function checkInput(param1, param2) {
  param1 = null;
  return param2; // returns value `undefined`
}

console.log(checkInput('argument1')); // prints string 'undefined'
```

---
**Parameters vs. Arguments**

The local variable names, which are written between parantheses while defining a function, are called **parameters**. There may be 0 or more parameters.

On the other hand, the parameter values that are written in the function body or passed with a function invocation are called **arguments**

![distinction between parameters and arguments](./parameterVsArgument.png)

---

## Return value vs. printing to the console
If invoked, function always have some return value.

To get a explicit return value, function body should include the `return` keyword followed by a variable name with a value or specific value you want to return.

<span style="background-color: #20A4BC">
In case a value to `return` is not specified explicitly, the function will return `undefined`.
</span>

Oftentimes, you need your function to make some operations and print the result to the console using `console.log()` function call. It worth noting that in this case your function invocation outputs the message to the console and returns `undefined` too.

## The call stack
To better understand functions it is useful to look at the control flow.

Let's look at the simple program with two function calls:

```js
/*1*/  function greet(name) {
/*2*/    console.log("Guten Tag " + name);
/*3*/  }
/*4*/  greet("Dima");
/*5*/  console.log("Auf Wiedersehen!");
```
The run through the program looks like this:
- the function `greet` invocation with passed in argument `"Dima"` on line 4 causes control to jump to line 2. `console.log` function is invoked with passed in argument `name`. It concatenates the argument value `"Dima"` to the string `"Guten Tag "` and prints new string to the console: `"Guten Tag Dima"`. Function `console.log` itself returns the value `undefined`.
- control returns to line 2, reaches the end of the `greet` function body and returns back to the place that called it originally -- line 4.
- line 5 calls `console.log` function with passed in argument `"Auf Wiedersehen!"`. It prints the string `"Auf Wiedersehen!"` to the console. Function `console.log` itself returns the value `undefined`.
- the program reaches its end.

Since a function has to jump back to the place it was called, the computer must remember the context from which the call happened. In the example above, `console.log()` has to return to the `greet` function once its done. In another case, it returns to the end of the program.

---

The place where the computer stores this context is called the **call stack**. Every time a function is invoked, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution. ([Eloquent JavaScript. 3rd edition. Functions.](https://eloquentjavascript.net/03_functions.html#p_PCO8aj4Plj))

--- 

## Vocabulary / Language precision
Here are some JavaScript vocabulary items that are used for defining and using functions.

Keyword - token that has special meaning to JS engine, such as `let`, `const`, `function`, `return`, `for`, `while`, etc.

Statement - a command for JS engine. This is not a keyword but a group of keywords.

Function name - a property of a function object that indicates function's name as specified when it was created.

Function invocation - (invoking a function, calling a function) execute / run statements inside a body of a function.

Invoking function with argument/s - executing a function with values of passed in arguments.

Method - a function which is also a property of an object. That's why we use `.` dot notation to call a method on value or variable.
 
Method invocation - invoking / calling a method on a value or a variable.

Function declaration - a way to define a function which consists of a `function` keyword, followed by: 
- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas. 
- The JavaScript statements that define the functions, enclosed in curly brackets, `{ . . . }` 
For example, the following code defines a simple function named `square`: 

```js
function square(number) {
  return number * number;
}
```
---

**IMPORTANT**

Function declarations can be invoked before they are defined in the code.

---

Function expression - a way to define a function where a function is an expression which gets assigned to a variable name. You cannot invoke a function expression before it appears in your program.

Arrow function - a syntactically compact alternative to a regular function expression. As with the function expression, you cannot invoke an arrow function before it appears in your program. One difference is that you can omit `return` statement if the arrow function body is only one line. 

Function parameter - a named variable passed into a function. Parameter variables are used to import arguments into functions.

Function argument - on contrary to a function parameters, argument is a real value passed to a function.

## Sources
1. [Introduction to Programming with JavaScript by Launch School. Functions.](https://launchschool.com/books/javascript/read/functions)
2. [You Don't Know JavaScript Yet. Getting Started. 2nd edition. Chapter 2. Functions.](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md#functions)
3. [Eloquent JavaScript. 3rd edition. Functions.](https://eloquentjavascript.net/03_functions.html)