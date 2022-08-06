import { useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader'
import Home from './components/Home';


function App() {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1500)

  },[])
  return (
    <div className="App">
      {loading ? (
      <div style={{"height":"100vh","display":"flex","alignItems":"center","justifyContent":"center"}} >
          <PropagateLoader size={30} color={'rgb(255,0,0)'} loading={loading}/>
      </div>
      ): ( 
        <div>
          <Home />
        </div>
      )}
     
    </div>
  );
}

export default App;
