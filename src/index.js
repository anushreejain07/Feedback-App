import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'

// ReactDom.render(<h1>My App</h1>,document.getElementById('root')); // same as docu.gebi.classList[0].innerHTML


//so now instead of h1 tag in render we use app component that will be the main component of our app.

ReactDom.render(
<React.StrictMode> 
    <App/> 
</React.StrictMode>
,document.getElementById('root'));