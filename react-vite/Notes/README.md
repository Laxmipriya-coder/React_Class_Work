install vite 
-->npm create vite@latest
to start 
-->npm run dev
configuration file are eslint.config.js and vite.config.js
-------------------------------------------------------------------
props 
it is an inbuild object in react
props means property
where we can send the data parent component to child component
this is unidirectional means from parent to child we can pass the data but we cant pass from child to parent(one-way-binding)
props data are immutable
because props is an inbuild object object are reference type if we change it will change the entire data.
-----------------------------------------------------------------------
What is re-render??

Children Prop
----------------------------------------------------------------------------
a data between opening and closing component is known as children prop
in jsx all events are syntheticBaseEvent
-----------------------
in react fucntion is a render
old vDom to new vdom is known as diffing algorithm
Diffing Algorithm
state
props
render
Reconciliation
-------------------------------------------


-----------------------------------------------------
Very Very Important.

State
It is component own data
It is an inbuild object in class based object
It is mutable
If state changes re render will happen.
You should not modify or mutate state data directly.
To update the state we use this.setState() metrhod. it is an inbuild method.
-------------------------------------------------
Class Based Componet vs Function Based Componet
It is a statefull Components and It is a Stateless Component
Aftere 16.8 they introduce hooks and state in Function based componet.

-----------------------------------------------------------------------
Hooks
special js function in react
allow us to hook into function based component 
it was introduced in 16.8 version of react
Rules
it should be used in only inside function based componet(fbc)
inside fbc it is in the top of the fbc
all hooks have use prefix.
example
useState(),
useRef(),
useEffect(),
useReducer().

----------------------------------------------------------------------
useState
when we call usestate it will returns a value.
first will be a value and another will be a function
single array with two element
destructuring is here
use set keywords
setCount() is a function we can directly call it  
if i write without any function we use setstste what happen
too many rerenders happen
which accept the initial value 
setstate is a async function
we cant call directly. it will shows multiple rerenders


-----------------------------------------------
Array List items
key prop shoul have unique value
which will have the each and every element track of an element.

--------------------------------------------------------------------------
# Forms Handling in React

We can handle forms in 2 ways in react
1st one is Controlled
react dom
usestate
re-render will happend in each key

2nd One is Uncontrolled
real dom
useRef()
re-render not happend.

------------------------------------
# Controlled
usestate()
control by react dom
then bind eith value attribute
then add onChange event handler

 const [inputuser, setInputuser] = useState('');
    const[inputemail,setInputemail] = useState('');
    const[inputpass,setInputpass] = useState('');
    instead of doing this we will take const[inputUsn,setInput] = useState({usn:'',email:'',pwd:''})

# Uncontrolled
react dom will not control
real dom will control this
useRef() it is a hook
useRef('') return an object with current property
ref is a props
re-render is not happend in uncontrolled


# Conditional Rendering
based on condition ui should update
we cant use if else and switch case in react
we use only && and || and Ternaray Operator

# 