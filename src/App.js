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
import Labas from './components/Labas'
import Kitty from './components/Kitty'

class App extends Component{
 
  render(){ 

    function formatDate(date) {
      return date.toLocaleDateString();
    }

    const comment = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
      },
    };

    return (

      

      <div className="App">

      <Message/>
      <Labas name='Saras'/>

      <Kitty  
        date={comment.date}
        text={comment.text}
        author={comment.author}/>

      <Greet name='Diana' heroName='Superwoman'/>
     

      <Counter/>
      {/* <Stylesheet primary={true}/>

      <Inline/>  */}
      
      <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Success</h2>
      
      <Welcome name='Jonas' heroName='Iroman'/>

    </div>
   );
  }
}

export default App;
