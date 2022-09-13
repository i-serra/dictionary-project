import './App.css';
import Dictionary from "./Dictionary";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


export default function App() {
   library.add(fas);
  return (
    <div className="App">
      <div className="container">
        <header>
     Dictionary
     <h5>What word would you like to look up?</h5>
     </header>
     <main>
       <Dictionary />
     </main>
     <footer>Coded by Inês Serra</footer>
     </div>
    </div>
  );
}

