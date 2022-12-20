import { useContext, useState } from "react";    
import { Link } from "react-router-dom";    

import { useNavigate } from "react-router-dom";
import "../estilos/modalmacen.css";
import { Navbar, Container, Nav,   NavDropdown, Button, Form } from "react-bootstrap";  


export default function ModAcopamientoView() {
    
    const navigate  = useNavigate();
        

    return (
        <>
        <div className="contenedor">
        <Nav className="me-auto">

             <NavDropdown title="ACOPAMIENTO" id="collasible-nav-dropdown" className="me-4">              
              <NavDropdown.Item >ACOPIADORES</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >CONTROL KARDEX ACOPAMIENTO</NavDropdown.Item>
              <NavDropdown.Item >CONTROL COSTOS ACOPIADO</NavDropdown.Item>
              <NavDropdown.Item >CONTROL PROCESAMIENTO PLANTA MINERA</NavDropdown.Item>
              <NavDropdown.Item >CONTROL IOT BALANZAS </NavDropdown.Item>
              <NavDropdown.Item >KARDEX PRODUCTO TERMINADO PLANTA  </NavDropdown.Item>
              <NavDropdown.Item >KARDEX VALORIZADO PRODUCTO TERMINADO  </NavDropdown.Item>
            
                            
              <NavDropdown.Divider />
              <NavDropdown.Item >SALIR</NavDropdown.Item>
              
            </NavDropdown>

            
            <Link className="btn btn-primary btn-lg datadicbtn" to="/"> Salir </Link>
            
              
              </Nav>
        </div>   
        
    </>
 
 
     
    );
}