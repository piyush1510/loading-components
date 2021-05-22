import './App.css';
import Loader1 from './loaders/Loader1';
import Loader2 from './loaders/Loader2';

function App() {
  return (
    <div className="App">
      <div className="stage"><Loader1 /></div>
      <div className="stage"><Loader2 /></div>
    </div>
  );
}

export default App;
