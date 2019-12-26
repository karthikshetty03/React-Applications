// import react and reactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

// import: we want to get code from some other file or dependency
//React/ReactDOM: the variable we want to assign this import to
//after the from keyword: the name of the dependency or the path of the library we are importing;loook inside the node modules directory





// create react components
function getTime()
{
  return (new Date()).toLocaleTimeString()
}



//function based components
 const App= ()=>{
     const ButtonText= {text:"Click ME !",id:12345}; //if array the all elemens of array without spacing
     const style={backgroundColor:'blue',color:'white'}
     return (
     <div>
     <label className="label" htmlFor="name">Enter name:</label>
     
     <input id="name" type="text"/>
     <button style={style}>{getTime()}</button>
   </div>
     );                                                   
                                                      

 };
//we can directly use javascript object at style of button tag but not between the display part
//so remember,we can only use js objects unless we are not trying t display something 
// while display something use obj.property 
//alo it acts like the System.out of java or\
//para = document.querySelector("p");
// para.textContent of javascript



//show the react component on screen

ReactDOM.render(<App/>,document.querySelector("#root"));


