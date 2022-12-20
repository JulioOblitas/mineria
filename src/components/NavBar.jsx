

import { useState, useRef  } from 'react'; 
import { Navbar, Container, Nav,   NavDropdown, Button, Form } from "react-bootstrap";  
import { useParams, useNavigate } from "react-router";
import { NavLink, Link,  Route, Routes } from "react-router-dom";
import CardsEC from "./CardsEC"
import "../estilos/navbar.css"
import {Slideshow, Slide, TextoSlide} from './Slideshow'
import '../estilos/slider.css'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Modal from 'react-bootstrap/Modal';


export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  
  
  const ejecutarModAlmacen = () => {        
     navigate("/modalmacen");
  };

  const ejecutarModCompras = () => {        
    navigate("/modcompras");
   };
  const ejecutarModProduccion = () => {        
    navigate("/modproduccion");
   };
 
   const ejecutarModVentas = () => {        
    navigate("/modventas");
   };

   const ejecutarModContabilidad = () => {        
    navigate("/modcontabilidad");
   };
   const ejecutarModTesoreria = () => {        
    navigate("/modtesoreria");
   };
   const ejecutarModPlanilla = () => {        
    navigate("/modplanilla");
   };

   const ejecutarModGestion = () => {        
    navigate("/modgestion");
   };

   const ejecutarModMinas = () => {        
    navigate("/modminas");
   };

 
  
 const form = useRef()  
  
  
    // console.log(e)
    // console.log(e.target.id)
    // console.log(e.target.value)
  
    const [datos, setDatos] = useState({
      user_name: "",
      user_email:"",
      user_telefono: "",
      user_message:""      
    });
  
    const actualizarInput = (e) => {
      // console.log(e)
      // console.log(e.target.id)
      // console.log(e.target.value)
      setDatos((prevalue) => ({...prevalue, [e.target.id]: e.target.value}))
    }
  
    const sendEmail = (e) => {
  
    e.preventDefault();
    console.log(datos);
    if(datos.user_telefono =="" || datos.user_name =="" || datos.user_email =="" || datos.user_message  == "" ){
      return;
    }
    
    setShow(false);
    emailjs.sendForm('service_hho51qc','template_z0tspus',form.current,'QMDs7SfLWkWgYzlJD')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    setDatos({user_name: "",
    user_email:"",
    user_telefono: "",
    user_message:""})
  }
  
  const  img1 = 'assets/imagenes/principalmineriasostenible.jpg'
  const  img2 = 'assets/imagenes/mineriaconfuturo.jpg'
  const  img3 = 'assets/imagenes/sostenibilidadescalada.jpg'
  const  img4 = 'assets/imagenes/mineria-amigable.jpg'
  const images = [
		{
			id: '1',
			title: 'SUMINISTROS DE CONSTRUCCION',      
			image:"/assets/imagenes/mina1slider.jpg",	
			image2:
				'https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg',
		},
		{
			id: '2',
			title: 'IMPLEMENTOS DE SEGURIDAD',
      image:"/assets/imagenes/arnesslider.jpg",	
			image2:
				'https://cdn.pixabay.com/photo/2011/09/27/18/52/bird-9950_960_720.jpg',
		},
		{
			id: '3',
			title: 'SOMOS IMPORTADORES Y COMERCIALIZADORES',
      image:"/assets/imagenes/principalslider.jpg",	
			image2:
				'https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg',
		},
		{
			id: '4',
			title: 'ESCALERAS',
      image:"/assets/imagenes/escalerasslider.jpg",
			image2:
				'https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759_960_720.jpg',
		},
		{
			id: '5',
			title: 'ANDAMIOS',
      image:"/assets/imagenes/andamiosslider1.jpg",
			image2:
				'https://cdn.pixabay.com/photo/2018/10/26/22/55/harley-davidson-3775527_960_720.jpg',
		},
	]

  const [productos, setProductos] = useState(
    [{        
        id : 1,
        nombre : 'ESCALERA SIMPLE AL',
        imagen:"/assets/imagenes/escaleratijera_aluminio.jpg",
        precio: 30.00,
        tipoproducto: 'ESCALERAS',
        tipoproducto_id: 1,
        unimed:'UNIDAD',
        unimed_id: 1 
        
    },
    
    {        
      id : 2,
      nombre : 'ESCALERA DOBLE AL',
      imagen:"/assets/imagenes/escalera-tijera-doble-aluminio.jpg",          
      precio: 30.00,
      tipoproducto: 'ESCALERAS',
      tipoproducto_id: 1,
      unimed:'UNIDAD',
      unimed_id: 1 
      
    },
    {        
      id : 3,
      nombre : 'ESCALERA SIMPLE FV',          
      imagen:"/assets/imagenes/escalera.jpg",
      precio: 30.00,
      tipoproducto: 'ESCALERAS',
      tipoproducto_id: 1,
      unimed:'UNIDAD',
      unimed_id: 1 
      
  },
  {        
    id : 4,
    nombre : 'ESCALERA DOBLE FV',
    imagen:"/assets/imagenes/escaleradobleaccesoFV.jpg",        
    precio: 30.00,
    tipoproducto: 'ESCALERAS',
    tipoproducto_id: 1,
    unimed:'UNIDAD',
    unimed_id: 1 
    
},
{        
  id : 5,
  nombre : 'ESCALERA TELESCOPIC. FV',      
  imagen:"/assets/imagenes/escalera-telescopicaFV.jpg",      
  precio: 30.00,
  tipoproducto: 'ESCALERAS',
  tipoproducto_id: 1,
  unimed:'UNIDAD',
  unimed_id: 1 
  
},
{        
id : 6,
nombre : 'ESCALERA TELESCOPIC. AL',
imagen:"/assets/imagenes/escaleratelescopicaaluminio.png",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 1,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 7,
nombre : 'ESCALERA EMBONABLE FV',
imagen:"/assets/imagenes/escaleraembonable.jpg",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 1,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 8,
nombre : 'ESCALERA SIMPLE 4 PASOS',
imagen:"/assets/imagenes/escalera-banqueta-aluminio.jpg",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 1,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 9,
nombre : 'ESCALERA SIMPLE 3 PASOS',
imagen:"/assets/imagenes/escaleraacero3pasos.jpg",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 1,
unimed:'UNIDAD',
unimed_id: 1 

}, 
{        
id : 10,
nombre : 'ANDAMIO ACROW',
imagen:"/assets/imagenes/Andamios-Multidireccionales.jpg",
precio: 30.00,
tipoproducto: 'ANDAMIOS',
tipoproducto_id: 2,
unimed:'UNIDAD',
unimed_id: 1 

}, 
{        
id : 11,
nombre : 'ANDAMIO CONVENCIONAL',
imagen:"/assets/imagenes/Andamios-Convencional.jpg",
precio: 30.00,
tipoproducto: 'ANDAMIOS',
tipoproducto_id: 2,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 12,
nombre : 'PUNTALES',
imagen:"/assets/imagenes/puntal.png",
precio: 30.00,
tipoproducto: 'SUMINISTROS CONSTRUCCION',
tipoproducto_id: 3,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 13,
nombre : 'TROMPO METALICO',
imagen:"/assets/imagenes/trompometalico.png",
precio: 30.00,
tipoproducto: 'SUMINISTROS CONSTRUCCION',
tipoproducto_id: 3,
unimed:'UNIDAD',
unimed_id: 1 

},

{        
id : 14,
nombre : 'ARNES + LINEA DE VIDA',
imagen:"/assets/imagenes/arnes.jpg",
precio: 30.00,
tipoproducto: 'IMPLEMENTOS SEGURIDAD',
tipoproducto_id: 4,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 15,
nombre : 'CASCO DE SEGURIDAD',
imagen:"/assets/imagenes/casco.jpg",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 3,
unimed:'UNIDAD',
unimed_id: 3 

},
{        
id : 16,
nombre : 'MOSQUETON',
imagen:"/assets/imagenes/mosqueton.png",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 3,
unimed:'UNIDAD',
unimed_id: 3 

}
]); 
const [modalShow, setModalShow] = useState(false);  
const [productosori, setProductosori] = useState(productos)        
const [alquiler, setAlquiler] = useState(false)        
  
const Mensaje   =  () =>{
    {/*setModalShow(true)*/}
  
}

const Filtro   =  (e, cat, tipo) =>{


   if (cat == 0  ){
    
    setProductos(productosori) 
    
   } else{
   
 
   
    const productotempo = productosori
    const prodfiltrados  = productotempo.filter(prod => prod.tipoproducto_id == cat);        
    setProductos(prodfiltrados)
   }
    
   if( tipo == 0){      
        setAlquiler(false)      
      }
      
      if( tipo == 1){      
        setAlquiler(true)      
      }
      
   
  

    

        
 /* Swal.fire(
    'ESANYS',
    'CONTACTO : HILDA SURICHAQUI -> 996 824 484',        
    'success'      
  )*/

}


    return (
      <>
     
     
    {/* <Navbar  bg="light" expand="md" className="navbar mb-2" fixed="top" >*/}
    
    <Navbar   bg="light" expand="md" className="navbar mb-2" fixed="top">
      
      <Container fluid>
      <Navbar.Brand  className='titulo'  >INKAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/*<Nav.Link href="#features">INICIO</Nav.Link>*/}
            {/*<Nav.Link onClick={(e) => {Filtro(e,0,0)}}>INICIO</Nav.Link>*/}
            <NavDropdown title="MINERA" id="collasible-nav-dropdown" className="me-4">         
              <NavDropdown.Item onClick={ejecutarModMinas}>PRODUCCION AMBIENTAL</NavDropdown.Item>
              
              
              
            </NavDropdown>


            <NavDropdown title="MODULOS" id="collasible-nav-dropdown" className="me-4">
              <NavDropdown.Item onClick={ejecutarModAlmacen}>ALMACEN</NavDropdown.Item>
              <NavDropdown.Item onClick={ejecutarModCompras}>COMPRAS</NavDropdown.Item>
              <NavDropdown.Item  onClick={ejecutarModProduccion}>PRODUCCION</NavDropdown.Item>
              <NavDropdown.Item onClick={ejecutarModVentas}>VENTAS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={ejecutarModContabilidad}>CONTABILIDAD</NavDropdown.Item>
              <NavDropdown.Item onClick={ejecutarModTesoreria}>TESORERIA</NavDropdown.Item>
              
              <NavDropdown.Item onClick={ejecutarModPlanilla}>PLANILLA</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={ejecutarModGestion}>GESTION</NavDropdown.Item>
              
            </NavDropdown>

            
            {/*<Nav.Link variant='success' className='titulocontacto me-auto' onClick={(e) => {Mensaje(e)}}> CONTACTO</Nav.Link>*/}
        <Nav.Link variant='success' className='titulocontacto me-auto' onClick={handleShow}> CONTACTO</Nav.Link>
            <Modal className='modaldialog' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>INKAS - CONTACTO</Modal.Title>
        </Modal.Header>
          
          <form ref={form} onSubmit={sendEmail} >                
            <label  className='labelmodal' htmlFor="">NOMBRES</label>
            <input className='anchotextomodal' onChange={actualizarInput}   name='user_name'  id ='user_name' type="text" />
            <label className='labelmodal'htmlFor="">EMAIL</label>
            <input type="email" className='anchotextomodal' onChange={actualizarInput}  name='user_email' id ='user_email'  />
            <label className='labelmodal'  htmlFor="">TELEFONO</label>
            <input className='anchotextomodal' onChange={actualizarInput}  name='user_telefono'  id = "user_telefono" type="text" />
            <label className='labelmodal' htmlFor="">ASUNTO</label>
            <textarea   className='anchotextomodal'   onChange={actualizarInput} name="user_message" id="user_message" cols="30" rows="10"></textarea>
         
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                CERRAR
              </Button>
              <Button variant="primary" onClick={(event) => {sendEmail(event)}}>
                ENVIAR
              </Button>
          
            </Modal.Footer>
        </form>
      </Modal>
          </Nav>
          <Nav className="mx-auto">   
         {/*

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              
              aria-label="Search"

            />
            <Button variant="primary">BUSCAR</Button>
    </Form>*/}
          </Nav>
          <Nav>
            
            
            
         {/*  <Cotizacion show={modalShow} onHide={() => setModalShow(false)} />*}
    
          {/*  <Button variant="primary" className="me-4" >LOGIN</Button>*/}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <main  >
			
			{/*<Titulo>Productos Destacados</Titulo>*/}
			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="3000">
				<Slide>
				{/*	<a href="https://www.falconmaters.com">*/}
					{/*</a>*/}
          	<img style={{ height:'55.5rem' }} src={img1} alt=""/>
					
					
				</Slide>
				<Slide>
					
						<img style={{ height:'55.5rem' }} src={img2} alt=""/>
					
					<TextoSlide>
						<p className='tituloslider' >ECOLOGIA</p>
					</TextoSlide>
				</Slide>
        <Slide>
					
						<img style={{ height:'55.5rem' }} src={img3} alt=""/>
					
					<TextoSlide>
						<p className='tituloslider' >SOSTENIBILIDAD</p>
					</TextoSlide>
				</Slide>
        <Slide>
					
						<img style={{ height:'55.5rem' }} src={img4} alt=""/>
					
					<TextoSlide>
						<p className='tituloslider'>PROTECCION AMBIENTAL</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</main>
   
{/*    <Routes>
     
     <Route  path = "/" element = { <CardsEC  productos={productos} alquiler= {alquiler}/>} />
     
  </Routes>*/}
  
    
       


    </> 
       
   ) 

}

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;