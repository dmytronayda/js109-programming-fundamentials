/**
 * Notes:
 * - input is a string
 * - output is the updated stack
 * 
 * Algorithm: 
 * - convert string to integers and function calls
 * - perform the operations in order
 */



function minilang(command) {
  let stack = [];
  let register = 0;
  command.split(' ').forEach(token => {
    switch(token) {
      case "ADD":
        register += stack.pop();
        break;
      case "PUSH":
        stack.push(register);
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "DIV":
        register = Math.floor(register / stack.pop());
        break;
      case "MOD":
        register = Math.floor(register % stack.pop());
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        register = Number(token);
    }
  });
  return register;
}

// minilang("5 PUSH 3 MULT PRINT");
// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
minilang('4 PUSH PUSH 7 MOD MULT PRINT');
minilang('-3 PUSH 5 SUB PRINT');