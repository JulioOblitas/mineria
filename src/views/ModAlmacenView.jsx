import { useContext, useState } from "react";    
import { Link } from "react-router-dom";    

import { useNavigate } from "react-router-dom";
import "../estilos/modalmacen.css";
import { Navbar, Container, Nav,   NavDropdown, Button, Form } from "react-bootstrap";  


export default function ModAlmacenView() {
    
    const navigate  = useNavigate();
        

    return (
        <>
        <div className="contenedor">
        <Nav className="me-auto">

             <NavDropdown title="ALMACEN" id="collasible-nav-dropdown" className="me-4">
              <NavDropdown.Item >MAESTROS</NavDropdown.Item>              
              <NavDropdown.Item >ORDEN REQUERIMIENTO.</NavDropdown.Item>
              <NavDropdown.Item >ENTRADAS/SALIDAS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >KARDEX</NavDropdown.Item>
              <NavDropdown.Item >TRANSFERENCIA ALMACENES</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >SALIR</NavDropdown.Item>
              
            </NavDropdown>

            
            <Link className="btn btn-primary btn-lg datadicbtn" to="/"> Salir </Link>
            
              
              </Nav>
        </div>   
        
    </>
 
 
     
    );
}