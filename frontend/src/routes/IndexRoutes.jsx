import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from '../pages/onboarding/Login';
import { NavOnboarding } from '../pages/onboarding/NavOnboarding';
import { Welcome } from '../pages/Welcome';


const clientRoutes = 'butterfly'

export const IndexRoutes = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${clientRoutes}/`}>
          <Route path='welcome' element={<Welcome client={clientRoutes} />} />
          <Route path='onboarding' element={<NavOnboarding client={clientRoutes}/>}> 
            <Route path='login' element={<Login/>} />
            {/* <Route path=''/>  */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


