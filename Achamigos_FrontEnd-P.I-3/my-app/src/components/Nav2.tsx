"use client";
import Image from "next/image";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";

const Nav2 =()=>{

    const router = useRouter();

    return(
        <>
            <Navbar expand="lg" className="bg-light border-1 border-black">
          <Navbar.Brand>
            <Image
              id="logo"
              src="/images/logocerto.png"
              alt="logo"
              width={200}
              height={100}
              style={{cursor:"pointer"}}
              onClick={() =>{
                router.push("/");
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  
            className="m-3"
            style={{
            backgroundColor: '#ff8110',  
            borderColor: 'black'     
    }}  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link
              style={{cursor:'pointer'}} 
              onClick={()=>{
                  router.push("/")
              }}>Home</Nav.Link>

              <Nav.Link 
              style={{cursor:'pointer'}} 
              onClick={()=>{
                  router.push("/quemsomos")
              }}>Quem Somos</Nav.Link>

              <Nav.Link 
              style={{cursor:'pointer'}} 
              onClick={()=>{
                  router.push("/parceiros")
              }}>Parceiros</Nav.Link>

              <Nav.Link 
              style={{cursor:'pointer'}} 
              onClick={()=>{
                  router.push("/catalogo")
              }}>Catálogo</Nav.Link>

              <Nav.Link 
               style={{cursor:'pointer'}} 
               onClick={()=>{
                   router.push("/informacoes")
               }}>Informações</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </>

    );
}
export default Nav2;