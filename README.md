# reactAcademind

# Adv JS Concepts  
1) no datatype has global scope, var has function scope, let and const has block scope  
2) const mul = s => s*2;  // shortcut for arrow function, we dont even need to write the return statment  
3) export and import: export can be done in two ways - export default and normal export  
  
a) exported through default  
import p from './persons.js';  
p can be anything when we import default and only export of the file is present  

b) exported normally  
import { base } from './persons.js';  
import { base as b } from './persons.js';  
name should be same and should be in curly braces  

4) spread and rest operator  
... as spread : split up array elements or object properties  
const arr = [...b,1,2] // same goes for object too
... as rest : merge a list of function arguments into an array  
function soert(...args){
    return args.sort();
}

5) destructing : easily extract array elements or object properties and store them in variables  
[a,b] = ['Hello','max'];
console.log(b); // max

[a, ,c] = ['Hello','max','harry'];
console.log(c); // harry

6) arrays and objects references are copied so if you want to just copy use spread operator  
7) map function    
numbers = [1,2,3];
const dArray = numbers.map((num) => {
    return num*2;
})
// maps the original numbers, does the calculation and maps in new array  


# Basics  
1) Custom components must start with Capital Letters  
2) jsx : https://www.w3schools.com/react/react_jsx.asp  
3) In JSX, you must only have one root element per JSX code snippet    
4) components - separation of concerns and reusability  
5) Learn : Components, JSX, Integarting CSS, Dynamic Data Integration, Props, 
