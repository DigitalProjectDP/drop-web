import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Router from './Router';
import { SetParameters } from './utils/setParameters';

function App() {
  SetParameters();  
  return (
    <Router></Router>
  )
}

export default App;
