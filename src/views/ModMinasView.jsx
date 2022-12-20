import { useContext, useState } from "react";    
import { Link } from "react-router-dom";    

import { useNavigate } from "react-router-dom";
import "../estilos/modalmacen.css";
import { Navbar, Container, Nav,   NavDropdown, Button, Form } from "react-bootstrap";  


export default function ModMinasView() {
    
    const navigate  = useNavigate();
        

    return (
        <>
        <div className="contenedor">
        <Nav className="me-auto">

             <NavDropdown title="MINA AMBIENTAL" id="collasible-nav-dropdown" className="me-4">
              <NavDropdown.Item >UBIGEO</NavDropdown.Item>
              <NavDropdown.Item >ACOPIADORES</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >CONTROL IOT RELAVES</NavDropdown.Item>
              <NavDropdown.Item >CONTROL IOT PESAJE</NavDropdown.Item>
              <NavDropdown.Item >CONTROL IOT AMBIENTAL</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >KARDEX ACOPIAMIENTO</NavDropdown.Item>
              <NavDropdown.Item >KARDEX RELAVES</NavDropdown.Item>
                            
              <NavDropdown.Divider />
              <NavDropdown.Item >SALIR</NavDropdown.Item>
              
            </NavDropdown>

            
            <Link className="btn btn-primary btn-lg datadicbtn" to="/"> Salir </Link>
            
              
              </Nav>
        </div>   
        
    </>
 
 
     
    );
}