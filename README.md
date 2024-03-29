# reactAcademind

## Js concepts refresher
1) Js deep dive - https://www.youtube.com/watch?v=U7ZzbNQPNB8&list=PLl4Y2XuUavmufEvZlmluM5eWoer1WkLfz&index=7  
2) multitasking in js - https://www.youtube.com/watch?v=ROCT3pF62Cs&list=PLl4Y2XuUavmsgfNFfCS7Xhbg5lis6oC04&index=3  
3) js callbacks, async/await & promises - https://www.youtube.com/watch?v=7oQ102fYv6g&list=PLl4Y2XuUavmvrxDddWW8W0nhm83v6iAXd  

## Adv JS Concepts  
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
    return args.filter( e => e===1);
}

5) destructing : easily extract array elements or object properties and store them in variables  
[a,b] = ['Hello','max'];
console.log(b); // max

[a, ,c] = ['Hello','max','harry'];
console.log(c); // harry

6) primitive types copies the values, arrays and objects references (pointers are copied) are copied so if just want to copy use spread operator  
7) map function     
numbers = [1,2,3];
const dArray = numbers.map((num) => {
    return num*2;
})
// maps the original numbers, does the calculation and maps in new array  


## Basics  (React Core Syntax, JSX, Components - working with components, Working with Data)
-- In React, we build ui by building and combining ui interfaces  
1) Custom components must start with Capital Letters  
2) jsx : https://www.w3schools.com/react/react_jsx.asp  
3) In JSX, you must only have one root element per JSX code snippet    
4) components - separation of concerns and reusability  
5) Learn : Components, JSX, Integarting CSS, Dynamic Data Integration, Props, Splitting component into multiple components, concept of composition(merging and rendering all the components together) - props.children,  
6) JSX is not readable by the browser and this is changed according to the browser by node(behind the scene) during runtime  
7) JSX internaly is converted to react object and rendered on the screen  

## User Interaction, States and Working with Events
-- Handle events, useState, Multiple States, updating state properly, form submission, two way binding, child to parent communication,  lifting the state up, controlled and stateful components, 
1) we just point to the func in jsx and not call it, coz js will execute the function too, while parsing html(parsing is done, when jsx is returned), so if we dont write (), react memorizes the function and perform action only when the button is clicked  
2) Event names list is started with on...  
3) end your event handler function with the name handler -- good practice

useState: adds reactivity and used to change ui, respond to user input and make visible changes in the ui   
4) values doesnt gets updated directly for that we have to use state  
5) whenever hooks are invoked / state is changed, the component function is re-rendered  
6) state is seperated on per component basis  
7) useState > DOM Manipulation : https://stackoverflow.com/questions/56332590/react-to-manipulate-dom-or-use-state  
dom is also not used because the component needs to be differenciated and that can be done by maintaing a seperate state for each component   
8) dont modify state directly : https://daveceddia.com/why-not-modify-react-state-directly/  
9) event.target.value always returns string  
10) we can have multiple states in one one component  
11) Form State updation : (A)you can maintain diff states for diff input and handle them separately, (B) you can maintain one state in an object and update the input whilst spreading the original object, (C) extending B you can maintain a prevState variable spread that and update the input -- reason in (12)  
12) react schedules state updates, so we if do a lot of state updates at the same time, we could get an outdated or incorrect snapshot, hence try to use prevState in an arrow function and then update the state, we can update states whenever we like there's no necessary condition for it  

13) two way binding - gather input from field and change input field data  
14) child to parent communication - pass functions through props from parent and call them by passing data in child component  
15) when we use two way binding - controlled component, stateful components - component with state present in it


## Rendering List and Conditional Content(Working with dynamic content)
Outputting dynamic list of content and rendering content under certain conditions 
-- rendering lists of data, using stateful lists, keys, outputting conditional content, adding conditional return statements,charts
1) use useState to render dynamic list  
2) whenever updating state combining older state always do this: 
 const onFormSubmissionApp = (expenseData) => {
      setNewExpense(prevState => {
        return [expenseData, ...prevState];
      });
  }
3) jsx content can directly be stored in variables too  
4) use keys while rendering list of components  

## Styling
-- Approaches - conditional & dynamic styles, styles component and css modules    
1) (I) dynamic inline(highest priority overwrite evry other style hence shouldn't be used) styles based on condition - check condition and if you can make state for that condition and hence make element and add styles in it 
-- dynamic styles means adding or removing styles based on our convenience or any condition      
2) setting css classes dynamically - we can add ${}-js expression, inside of ``-template literal just like js inside of jsx {}, hence add classeNames in the elements like this and define the classes in a different file   
Example : className = {`form-control ${!invalid ? 'invalid' : ''}`} for this define the invalid class in the css file  
3) (II) Styled Components : the other components of the page with same class also gets triggered the styles, so thats why styled components are introduced, which always gives a unique className to the components hence no 2 components will get the same style ever    
4) (III) CSS Modules : import the styles in a variable and use the styles as object styles.button or styles['form-control'] of that variable, also change the original css file name to file_name.module.css  

## Debugging
-- understanding the error, debugging & analyzing react apps and react dev tools    
1) analyze the code, see the console for errors & use breakpoints  
2) React dev tools  

## Fragments, Portals & Refs
-- JSX Limitation & Fragments, Cleaner DOM with Portals, Working with Refs 
limitation - sending 2 or more jsx elements in div - clusters too many divs on page  
1) One soln is to return 2 jsx elements in an array  
whenever we are working with array of elements like returning 2 elements in an array or rendering an ul list, we just have to provide a key for the elements of the array or the list  
2) Use React.Fragement to return 2 or more divs  
3) Modal should be seperate and not included along with other divs - that's why we use portals  
4) Apply ReactDOM.createPortal() to separate the backdrops and overlay  
5) you can write error modal anywhere with logic but it will get rendered only at defined portal space in index.html to be specific  
6) controlled comp - where internal state is managed/controlled by react;  
   uncontrolled comp - internal state is managed by users like refs  
7) Instead of changing state of each key stroke we can directly use useRef() to handle the changes - use when you want to read a value and not handle states  

## Effects, Reducers and COntext 
-- side effects - reducers to handle complex react component and context to manage app wide or component wide state  
1) 