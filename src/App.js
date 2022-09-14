import './App.css';
import Dictionary from "./Dictionary";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


export default function App() {
   library.add(fas);
  return (
    <div className="App">
      <div className="container">
      <header className="rounded shadow">
        <h2>Dictionary</h2>
     <h5>What word would you like to look up?</h5>
     </header>
     <main>
       <Dictionary />
     </main>
     <footer>This project was coded by <a href="https://golden-pasca-71ada2.netlify.app/">Inês Serra</a> and is <a href="https://github.com/i-serra/dictionary-project">open-sourced on GitHub</a></footer>
     </div>
    </div>
  );
}

