/*import './App.css';*/


import  {BrowserRouter as  Router,  Route, Routes  } from "react-router-dom";
import NavBar from './components/NavBar'


/*import Footer from './components/Footer'*/
/*import Footer2 from './components/Footer2'*/
import Home from './components/Home'
import ModAlmacenView from "./views/ModAlmacenView";
import ModComprasView from "./views/ModComprasView";
import ModProduccionView from "./views/ModProduccionView";
import ModVentasView from "./views/ModVentasView";
import ModTesoreriaView from "./views/ModTesoreriaView";
import ModContabilidadView from "./views/ModContabilidadView";
import ModPlanillaView from "./views/ModPlanillaView";
import ModGestionView from "./views/ModGestionView";

import ModAcopamientoView from "./views/ModAcopamientoView";
import ModControlAmbienteView from "./views/ModControlAmbienteView";
import ModComercializacionView from "./views/ModComercializacionView";

function App() {
  
  return (
   <>
        
      <Router>                        
          <NavBar/>   
          
         { <Routes>
              <Route  path="/home" element={<Home />} />  
              <Route  path="modalmacen" element={<ModAlmacenView  />}/>  
              <Route  path="modcompras" element={<ModComprasView  />}/>  
              <Route  path="modproduccion" element={<ModProduccionView  />}/>  
              <Route  path="modventas" element={<ModVentasView  />}/>  
              <Route  path="modcontabilidad" element={<ModContabilidadView  />}/>  
              <Route  path="modtesoreria" element={<ModTesoreriaView  />}/>  
              <Route  path="modplanilla" element={<ModPlanillaView  />}/>  
              <Route  path="modGestion" element={<ModGestionView  />}/>  
              <Route  path="modacopamiento" element={<ModAcopamientoView   />}/>  
              <Route  path="modcontrolambiente" element={<ModControlAmbienteView   />}/>  
              <Route  path="modcomercializacion" element={<ModComercializacionView   />}/>  
        </Routes>}
          
      </Router>
   
  </>
  );
}

export default App;
