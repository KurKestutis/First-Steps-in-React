import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

// function App() {
//   return (
//     <div className="App">
//       <Greet/>
//       <Welcome/>
//       <Hello />
//     </div>
//   );  
// }

class App extends Component{
  render(){ 
    return (
      <div className="App">
      <Greet name='Jonas'/>
      <Greet name='Antanas'/>
      <Greet name='Aloyzas'/>
      <Greet name='Martynas'/>
      {/* <Welcome/> */}
      {/* <Hello /> */}
    </div>
   );
  }
}

export default App;
