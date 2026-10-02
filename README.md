Why react
-----------
React is a open source javascript library which is used to build ui.
Current version of React is v19.3
--->React is Component based architecture.
Component is a piece of ui
Component are we can reuse it.
--->Declarative approach
how my ui looks like
--->React handle with Virtual DOM
React having its own dom means its a copy of real dom
a-----b-----c
here  c is real dom
b is virtual dom
a is react.
a is react a cannot talk with c a talk with b, b talk with  real  dom
------------------------------------------
SPA
single html page will load to the browser.
MPA
------------------------------------
Where we can use and which react

Navigation --> React Router 
Fetch --->fetch/axios
Global --->Redux
Mobile Application --->React Native
-------------------------------------

We have cdn for  react and create-dom

In react
------------------------------------------------
create syntax
React.createElement('h1',{id:"h1Tag",class:"bg-yellow"},"Hello");

React.createElement('div',{}/null,[ptag,h1tag])

h1 is tag name (which element you want to create)
{} what attribute you want to add
then add content which you want to display

<!-- rendering and Adding it into a webpage -->
ReactDOM.createRoot();
root.render();
we can render  only one argument.
-----------------------------------------------------------------------------------
SPA(Single Page Application)
A SPA loads a single HTML page initially and dynamically updates the content without reloading the whole page.
Initially Load speed is slower.
Example:
Gmail,Facebook,Spotify
-----------------------
MPA(Multi Page Application)
MPA is a traditional website architecture where every new user interaction requests and fully reloads a brand-new page from the server.
Initially Load Speed is Higher.
Example:
Amazon,Instagram
---------------------------------------------------------------------

cra
parcel
vite
node.js is a runtime environment
npm package management
npx 
Why node.js in react?
--------------------------
React Installation
cra (create-react-app)
vite(most recommended)
react project
step:1
npx create-react-app project-name
step:2
npm start
----------------------------------

when npm start it seach root.render();
---->public
to use static element

--->src 
src is the source code

index.js and App.js are the important file
index.js root js file
App.js root react file
Instaed of returning primitive and non-primitive data type in react we use html code
function explain(){
    return <h1>Hello</h1>
}

index.html()
⬇️
index.js(bridge between index.html and app.js)
⬇️
app.js

--->node_modules
database of ur react
it store all the package and library and dependecy of react

npm install 
only for node_modules(re-install or incase if you delete the original node_modules you can reinstall the node_module)

--->.gitignore
what ever the file is ignored we write in this file

--->package.json 
all the meta data or information,a list of dependecies, scripts for running common tasks like 

--->package-lock-json

--------------------------------------------------------------------------------------------------
JSX (javascript extension)(javascript extension)
which allow you to write html like code along with javascript

you can create 2 ways to component
function based component 
class based component
fuction based and class based both return jsx code
can return any type of primitive and non primitive based
-----------------------------------------------------------------------------
---------->what is the difference between js function and react component
-----------------------------------------------------------------------------

Rules of JSX
--->components must be starts with Capital letter.
you cant return multiple html code to create we have to create one parent
to avoid extra node in dom we will go for use React Fragments
example 
--->
<React.Fragments>
<Greet/>
<Hii/>
</React.Fragments>
or
<>
<Greet/>
<Hii/>
</>
or
<Fragments>
<Greet/>
<Hii/>
</Fragments>


or
// <React.Fragment>
    //   <Greet/>
    //   <Hii/>
    // </React.Fragment>

    // <Fragment>
    //   <Greet/>
    //   <Hii/>
    // </Fragment>

    <>
    <Parent/>
    <Greet/>
    <Hii/>
    </>
import React from 'react' or import {Fragments} from 'react'
React.Fragments
--->all tags must be closed
---->we can write direct js in react (write code in {})
---->Because of strict mode {console.log("Hii)} give 2 times hello
--->to avoid the confusion between html and javascript for and class name  and all will be in Camel Case
we can write html code htmlFor, and className
-----------------------------------------------------------------------
Important library 
--------------------------
Babel     
--->it acts like a compiler 
--->it convert the code into browser understanding code
eslint 
--->it is a library or dependendency
--->it is used to find the error in your code
webpack
--->it is configure them to bundle your jsx and js files
jest
--->important for testing
------------------------------------------------------------------------
How to style a react application
we cant perform internal css in react
we can use inline css and external css
inside jsx it is object
<h1 style ={{color:'red',backgroundColor:'yellow'}}></h1>
here {color:'red',backgroundColor:'yellow'} this is a object
{} extra for js 
external css works like global variable
import into a variable and then access it.
---------------------------------------------------------------
what ever you install package it will present in package.json