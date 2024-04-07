# Import Export Syntax ES6 Syntax

In ES6 every file is a module and you cannot access the variables and functions defined in a file outside of it. If we want to access a variable defined in a file in another file we have to export the variable. There are two types of exports

1. Named Export
2. Default Export

## 1. Named Export

### 1.1 Exporting

#### 1.1.1 Single Variable/Function Export

<p>
Placing the export keyword before the variable or function
</p>

`export const names = ['John','Mike'];`

#### 1.1.2 Multiple Variable/Function Export

We can export more than one variable or function by using curly braces, this curly brace does not refer to the object braces where we have everything in key value pair.

```
const names = ["Mike","John", "Jerry"];

function displayName() {
  console.log('hello',names[0])`
}

export {names, displayName}
```

### 1.2 Importing

When using named export use curly braces to import the variable. Also keep the name of variable same as it is defined in the file, because while importing it checks if that particular variable/function is defined in the file then only it imports it.

`import {names, displayName} from '../utils/constants.js';`

## 2. Default Export

## Exporting

- If you have something in a file which is the only thing you want to export, then you can use the default export.
- But we can also export other variables as named export.
- There would be only one default export from a file/module.
- "export default" can only be used with functions, expressions and classes."export default" cannot come before read only values like variables declaration.
- If you want to "export default" a variable then export default it on a next line.
  Example:
  const nums = [1,2,3,4];
  export default nums;
- You can export default a variable without declaring it. While importing it you can use any name you want to import it, as it is default export so it will be the first import which will be imported.
  Example:
  export default [1,2,3,4,5];

- You can export all the things inside the single export curly braces alongwith default export. While importing you can import it
  Example:
  export {nums as default, displayName, names, User }

export const names = ['John', 'Mike'];

export const displayNames = () => {
console.log('display Names');
}

export default class User extends React.Component () {
render() {
return <div>My User Component</div>
}
}

## Importing

Now User is not a named export so we will import it without the curly braces.
While importing default export and named export make sure to place the default export before the named export.
When you are importing a default export you can use any name you want for that export, instead of User you can use Profile or something else.

import User, {names, displayNames} from '../Users/index.js'
