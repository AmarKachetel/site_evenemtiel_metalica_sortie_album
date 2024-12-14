// Importation des dépendances nécessaires
import { Navbar, Container, Nav } from 'react-bootstrap'// Importer les composantes Navbar,Container, Nav et Carousel de React-Bootstrap
import Link from "next/link";
import Image from 'next/image'// Importer la composante Image de Next.js

// Définition du composant Header
function Header() {
  return (
    // Balise Navbar pour la barre de navigation
    <Navbar className='header' expand="lg">
      {/* Balise Container pour contenir les éléments de la navbar */}
      <Container className='row flex-column mx-auto'>
        {/* Balise Link pour le logo qui redirige vers l'accueil */}
        <Link className='col-md-6 logo mx-auto  imgLogo' href="/">
          <Image src="/LogoMetallicablanc.png" alt="logo-Metalicca" width={150} height={35} />
          <Navbar.Toggle className='navbar-light bg-light' aria-controls="basic-navbar-nav" />
        </Link>
        {/* Balise Navbar.Collapse pour les liens de navigation */}
        <Navbar.Collapse className='col-md-6 justify-content-center' id="basic-navbar-nav">
          <Nav>
            {/* Balises Link pour chaque lien de navigation */}
            <Link legacyBehavior href='/groupe'><a className='lien'>METALICCA</a></Link>
            <Link legacyBehavior href='/album'><a className='lien'>ALBUM</a></Link>
            <Link legacyBehavior href='/tracklisting'><a className='lien'>TRACKLISTS</a></Link>
            <Link legacyBehavior href='/tournee'><a className='lien'>TOURNÉE</a></Link>
            <Link legacyBehavior href='/blog'><a className='lien'>ACTUALITÉ</a></Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// Exportation du composant Header pour qu'il puisse être utilisé ailleurs dans le code
export default Header;
