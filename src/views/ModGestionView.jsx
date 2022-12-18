import { useContext, useState } from "react";    
import { Link } from "react-router-dom";    
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../estilos/modalmacen.css";
import { Navbar, Container, Nav,   NavDropdown, Button, Form } from "react-bootstrap";  


export default function ModGestionView() {
    
    const navigate  = useNavigate();
        

    return (
        <>
        <div className="contenedor">
        <Nav className="me-auto">

             <NavDropdown title="GESTION" id="collasible-nav-dropdown" className="me-4">
              <NavDropdown.Item >ANALISIS DE PRODUCCION</NavDropdown.Item>              
              <NavDropdown.Item >ANALISIS DE VENTAS </NavDropdown.Item>
              <NavDropdown.Item >ANALISIS DE COMPRAS</NavDropdown.Item>              
              <NavDropdown.Item >PLANIFICACION</NavDropdown.Item>              
              
              <NavDropdown.Divider />            
              <NavDropdown.Item >SALIR</NavDropdown.Item>
              
            </NavDropdown>

            
            <Link className="btn btn-primary btn-lg datadicbtn" to="/"> Salir </Link>
            
              
              </Nav>
        </div>   
        
    </>
 
 
     
    );
}