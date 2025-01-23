import { Fragment } from 'react';
import './App.css'
import Mahi from './Mahi.js'

const App = () =>{
  return (
    // [
    //   <h1 className='App'>Array Method</h1>,
    //   <h2 className='App'>Welcome To React</h2>
    // ]

    // <fragment className='App'>  
    //     <h2>Good Morning Everyone</h2>
    //     <h2>Learn React Code</h2>
    //     <h2>hello</h2>
    // </fragment>

    <div className='App'>
      <h2>Welcome to React</h2>
      <h2>Good Morning</h2>

    <Mahi></Mahi>
    </div>

    // <>
    //   <h2>Good Morning</h2>
    //   <h3>Welcome to React</h3>
    // </>
   

  )
}

export default App;