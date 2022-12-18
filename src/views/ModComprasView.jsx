import { useContext, useState } from "react";    
import { Link } from "react-router-dom";    
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../estilos/modalmacen.css";
import { Navbar, Container, Nav,   NavDropdown, Button, Form } from "react-bootstrap";  


export default function ModComprasView() {
    
    const navigate  = useNavigate();
        

    return (
        <>
        <div className="contenedor">
        <Nav className="me-auto">

             <NavDropdown title="COMPRAS" id="collasible-nav-dropdown" className="me-4">
              <NavDropdown.Item >MAESTROS</NavDropdown.Item>              
              <NavDropdown.Item >ORDENES DE SERVICIO</NavDropdown.Item>
              <NavDropdown.Item >COMPRAS</NavDropdown.Item>              
              <NavDropdown.Item >CONSULTA COMPRAS</NavDropdown.Item>              
              <NavDropdown.Divider />            
              <NavDropdown.Item >SALIR</NavDropdown.Item>
              
            </NavDropdown>

            
            <Link className="btn btn-primary btn-lg datadicbtn" to="/"> Salir </Link>
            
              
              </Nav>
        </div>   
        
    </>
 
 
     
    );
}