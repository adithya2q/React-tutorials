
import './App.css';
import About from './components/About/about';
import Banner from './components/Banner/banner';

// shorthand for creating compnents:'rafce'

function App() {
  return (
    <div className="App">

     <div style={{marginTop:'20px'}}>
      <Banner /> 
      {/* Lctrl+ component leads to that component */}
     </div>
     <div style={{marginTop:'20px'}}>
      <About />
     </div>

    </div>
  );
}

export default App;
