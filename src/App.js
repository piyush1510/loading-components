import './App.css';
import Loader1 from './loaders/Loader1';
import Loader2 from './loaders/Loader2';
import Loader3 from './loaders/Loader3';
import Loader4 from './loaders/Loader4';

function App() {
  return (
    <div className="App">
      <div className="stage"><Loader1 /></div>
      <div className="stage"><Loader2 /></div>
      <div className="stage"><Loader3 /></div>
      <div className="stage"><Loader4 /></div>
    </div>
  );
}

export default App;
