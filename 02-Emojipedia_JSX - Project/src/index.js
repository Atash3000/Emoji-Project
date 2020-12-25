import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import emojipedia from './emojipedia' //#file exported

//!atamurad screen
let emoji= emojipedia.map(item=><dl>{item.icon}</dl>)



const entry = (
<div className="term">
{emojipedia.map(item =>{
return(
  <dt>
    <span>{item.name}</span>
    <span role="img" className='emoji'>{item.icon}</span>
    <dd>{item.meaning}</dd>
   
  </dt>
 ) }
)
}
</div>
)

const app = (
  <div>
  <dl className='dictionary'>{entry}</dl>
  </div> 
  )

ReactDOM.render(
  app , document.querySelector('#root')
)
  