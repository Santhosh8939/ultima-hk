import { Suspense, React, useRef } from 'react';
import { HashRouter } from 'react-router-dom';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import AppRoutes from './AppRoutes';
import Loading from  './components/Loading';
import './App.css';

let params = (new URL(document.location)).searchParams;
let name = params.get("t");
if(name === 'v'){
  window.journey = 'visa';
}else {
  window.journey = 'mastercard';
}
console.log('set to ', window.journey);

/**
 * Base Template component holding the basic web application
 * @returns {JSX.Element}
 */
const App = () => {    
  const ref = useRef(null);

    const options = {
      smooth: true,
    } 

    return (   
      <LocomotiveScrollProvider 
        options={options} 
        containerRef={ref} 
        watch={[AppRoutes]} 
      >    
        <main data-scroll-container ref={ref} className='bg-black'>               
          <HashRouter>              
              <AppRoutes />                
          </HashRouter>   
        </main>
      </LocomotiveScrollProvider>     
    );
};


export default function WrappedApp() {
  return (
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  )
}
