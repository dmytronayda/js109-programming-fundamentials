What will line 9 log to the console and why?
```js
/*0*/ let greeting = ["Hello"];
/*1*/ 
/*2*/ const test = arr => {
/*3*/   arr = ["ByeBye"];
/*4*/   arr.push("World!");
/*5*/   return arr;
/*6*/ }
/*7*/ 
/*8*/ test(greeting);
/*9*/ console.log(greeting);
```
--- 

**My answer:**

On line 9 `console.log` function call prints `["Hello"]` to the console because global variable `greeting` is not reassigned within the body of the function `test`.

On line 0 global variable `greeting` is declared and assigned to reference of the array `["Hello"]`.

On line 8 function `test` is invoked with the passed in argument `greeting`. The pointer of the array `greeting` is assigned to the parameter `arr` on line 3. At this stage both variable `greeting` and local to the function `test` parameter `arr` are referencing the same array.

On line 4 parameter `arr` (or local variable `arr`) is assigned to the new array `["ByeBye"]`. That is, local variable `arr` (parameter `arr`) does not reference the place in the computer memory where the object `greeting` variable points to.

From now on, we can't mutate the object variable `greeting` points to, because `arr` now references a different object.

---
