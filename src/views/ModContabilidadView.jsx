import { useContext, useState } from "react";    
import { Link } from "react-router-dom";    
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../estilos/modalmacen.css";
import { Navbar, Container, Nav,   NavDropdown, Button, Form } from "react-bootstrap";  


export default function ModContabilidadView() {
    
    const navigate  = useNavigate();
        

    return (
        <>
        <div className="contenedor">
        <Nav className="me-auto">

             <NavDropdown title="CONTABILIDAD" id="collasible-nav-dropdown" className="me-4">
              <NavDropdown.Item >MAESTROS</NavDropdown.Item>              
              <NavDropdown.Item >OPERACIONES</NavDropdown.Item>
              <NavDropdown.Item >LIBROS</NavDropdown.Item>              
              <NavDropdown.Item >CONSULTAS CONTABLES</NavDropdown.Item>              
              
              <NavDropdown.Divider />            
              <NavDropdown.Item >SALIR</NavDropdown.Item>
              
            </NavDropdown>

            
            <Link className="btn btn-primary btn-lg datadicbtn" to="/"> Salir </Link>
            
              
              </Nav>
        </div>   
        
    </>
 
 
     
    );
}