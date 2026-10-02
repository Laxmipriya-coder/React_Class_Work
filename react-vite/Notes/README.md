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