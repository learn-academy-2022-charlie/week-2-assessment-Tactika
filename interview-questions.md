# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?
   - Answer:
      > The difference between a parameter and an argument is that a parameter is a placeholder in the creation of a function and an argument is data passed into a function where a parameter would then be fulfilled.

   - Researched Answer:
      > The difference between a parameter and an argument is that parameters are the named placeholders for a value while creating functions. Once the function is created, the data that is passed into the function call would then be considered the function argument.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?
   - Answer:
      > The JavaScript built in method takes in value, index, and array. While they are all useful in different situations, value is the only required parameter out of the three. The index and array can be useful when finding an index of a value or returning full arrays are necessary. I recently realized that the exact terms aren't required to equal value, index, and array.

   - Researched Answer:
      > The JavaScript built in map method takes in one required parameter, a callback function. The callback function is made up of the value, index and array parameters, of which the value is the only required to build the callback function. The map method can take in a second argument thisArgs, which can be used to reference the "this" reference of internal properties values of the callback function. If thisArgs isn't used, the predefined value of undefined will be used.

3. What is the difference between map and filter?
   - Answer:
      >In JavaScript there are multiple ways to iterate over arrays, two common ways are to use the built-in methods or higher order functions of map and filter aka (.map() or .filter()) these two methods can take in an array and complete a task on any item in the array. The main difference is that the map method completes the same code replication on every item in the array whereas the filter method only runs the supplied code on the items that meet the filtered requirements.
      The map function is great for ensuring all items in an array are returned whereas the filter method is great for filtering in or out items you need.

   - Researched Answer:
      > The primary difference between the map and filter method is that the filter methods callback function only returns if the statement provided returns true. The callback function on a map method runs on each item of an array as long as it exists.

4. What is the difference between a function and a method?
   - Answer:
      > The difference between a function and a method is that a function is called directly and a method is a function called using dot notation from within an object.

   - Researched Answer:
      > The difference between a function and a method is that functions are a block of code that you can create to perform a specific task and a method is a property of an object that has a function as the value. Methods have an object as a receiver whereas functions have no receiver. The method has the ability of using 'this' as a keyword to reference the object the method is nested into.

5. What is object destructuring?
   - Answer:
      > Object destructuring is the process of breaking apart an object into a subset of variables to access directly. I have used object destructuring while using the import statement to pull individual functions/methods that i wanted implicitly and not have to load an entire files worth of code.

   - Researched Answer:
      > Object destructuring is a way to take values from properties from objects and assign the reference to a variable. The process of destructuring is not destructive as it leaves the main object in-tact. Destructuring can skip items by inserting concurrent commas (i.e. {item1, , item3}), the example takes the first and third item but passes over the second. A triple period can be used to assist with destructuring, allowing you to take multiple arguments and pull them out of the object without explicitly naming them.

6. STRETCH: What is hoisting in JavaScript?
   - Answer:
      > I'm not sure what hoisting is in JavaScript, but from what it sounds like it means to lift something above another in regards to importance.

   - Researched Answer:
      > JavaScript hoisting is the process of moving variables and function declarations to the top scope allowing them to be called/declared before code execution. The items aren't moved themselves, just the declaration. The variable declarator of var makes any item declared in the global scope to be a global variable, no matter the location of the declaration in the code, so long as it's in the global scope. The variable declarations const and let allow for items to only be called after the declaration/execution and only on a block scope. This can also be implemented with the 'use strict' mode to be declared in the beginning of the code, which will limit the var declarator to access variables before the declaration.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance:
   - Researched Answer:
      > Class inheritance is the idea of using class objects built as a constructor to be able to construct sub-classes for example parent-child classes. Properties from within the parent class object are passed down to the child class objects, but properties and methods created at the children are not passed upwards. These classes can be used to make objects with the same properties like a factory with the ability to have default values and included methods. These class objects can be instantiated by calling the new keyword and the Class constructors name. The preceding class objects can access the data within using dot notation.

2. React:
   - Researched Answer:
      > React is Facebook's JavaScript framework created to assist with the creation of user interfaces that is scalable via components. It's been used by numerous large corporations due to the scalability and benefits of building using the component based system. React itself is a frontend technology framework, but there have been multiple frameworks to tie in an equally scalable backend. React is typically programmed using JSX through Babel, but can be typed in vanilla javascript.

3. React state:
   - Researched Answer:
      > React state is an object within ReactJS that represents the current condition of a component. When information in an object is changed within React, the react state is then updated. The objects react state is how the object knows how to render.  

4. React lifecycle methods:
   - Researched Answer:
      > React lifecycle methods are broken down into three phases, the mounting, updating, and un-mounting phases. In three phases each stage has multiple methods baked in.
      The first phase has four built in to assist in displaying the information to the virtual document object model (aka - VDOM). The four methods are the constructor, getDerivedStateFromProps, render, and componentDidMount methods.
      The second phase is comprised of five methods used to update state and prop changes. They consist of the getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, and componentDidUpdate.
      The last phase is used to remove components from the DOM. This stage can also be called the clean-up stage which only has one method, the componentWillUnmount.
      Two of the methods are shared between the phases getDerivedStateFromProps and render are used in the mounting and updating phases.

5. DOM:
   - Researched Answer:
      > The DOM is the document object model which is an API or application program interface that is a graphical representation of the html structure of a website. It was created to work with html and xml documents.The individual html elements are represented by object nodes. The model allows programming languages to interact with the page represented as an object.
