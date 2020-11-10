import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css'
import styles from './appStyles.module.css'

class App extends Component{
  render(){ 
    return (
      <div className="App">
                
      {/* <Message/>
      <Counter/>
      <Stylesheet primary={true}/>

      <Inline/> 
      
      <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Success</h2> */}
      
      <Greet name='Diana' heroName='Superwoman'/>

    </div>
   );
  }
}

export default App;
