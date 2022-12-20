import { useContext, useState } from "react";    
import { Link } from "react-router-dom";    

import { useNavigate } from "react-router-dom";
import "../estilos/modalmacen.css";
import { Navbar, Container, Nav,   NavDropdown, Button, Form } from "react-bootstrap";  


export default function ModComercializacionView() {
    
    const navigate  = useNavigate();
        

    return (
        <>
        <div className="contenedor">
        <Nav className="me-auto">

             <NavDropdown title="COMERCIALIZACION MINERAL" id="collasible-nav-dropdown" className="me-4">                            
              <NavDropdown.Item >KARDEX VALORIZADO PARA VENTA</NavDropdown.Item>
              <NavDropdown.Item >UTILIDADES / RENTABILIDAD </NavDropdown.Item>                                          
              <NavDropdown.Divider />
              <NavDropdown.Item >SALIR</NavDropdown.Item>
              
            </NavDropdown>

            
            <Link className="btn btn-primary btn-lg datadicbtn" to="/"> Salir </Link>
            
              
              </Nav>
        </div>   
        
    </>
 
 
     
    );
}