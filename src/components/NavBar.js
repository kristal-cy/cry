import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../img/pinky.jpg'; // Use the correct file extension
import '../App.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = value=> {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about"className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#contact"className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                        <Nav.Link href="#portfolio"className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
                        <Nav.Link href="#service"className={activeLink === 'service' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('service')}>Service</Nav.Link>
                        <Nav.Link href="#resume"className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src="social-icon.png" alt="Social Icon" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log("connect")}><span>Crystal Sabado();</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
