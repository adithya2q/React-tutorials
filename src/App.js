
import './App.css';
import About from './components/About/about';
import Banner from './components/Banner/banner';
import Authorization from './components/Checkauthorisation';

// shorthand for creating compnents:'rafce'

function App() {
  const user= "adi";
  return (
    <div className="App">
{
  user==='adi' ?(
            <>
    <div style={{marginTop:'20px'}}>
      <Banner /> 
      {/* Lctrl+ component leads to that component */}
     </div>
     <div style={{marginTop:'20px'}}>
      <About />
     </div>
     </>):

       ( <Authorization username={user}/>)

      }
    </div>
  );
};


export default App;
