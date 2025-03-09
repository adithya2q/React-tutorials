
import './App.css';
import About from './components/About/about';
import Banner from './components/Banner/banner';
import Authorization from './components/Checkauthorisation';
import Greet from './components/Greet';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className='d-flex justify-content-center mt-4'
      //  style={{
      //   marginTop:'10px',
      //   display:'flex',
      //   justifyContent:'center',
      //   alignItems:'center'

      // }}
      >
        <Greet user={"Adithya"} />
      </div>
    </div>
  );
};


export default App;
