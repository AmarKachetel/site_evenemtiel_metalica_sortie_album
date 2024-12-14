import Link from "next/link"; // importation de la bibliothèque Next.js 
import { BsFacebook } from 'react-icons/bs'; // importation de l'icône Facebook de la bibliothèque react-icons/bs
import { GrInstagram } from 'react-icons/gr'; // importation de l'icône Instagram de la bibliothèque react-icons/gr
import { Container, Row, Col } from 'react-bootstrap'; // importation des composants Container, Row et Col de la bibliothèque react-bootstrap

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container> {/* conteneur de niveau supérieur */}
        <Row> {/* ligne qui contient les 3 colonnes */}
          <Col ms={12} md={4} ml={4}> {/* première colonne (à gauche) */}
              <h4 className="mb-4">À PROPOS</h4>
              <ul className="listFooter">
                <li className="pb-3"><a href="#">Contact</a></li>
                <li className="pb-3"><a href="#">CGV</a></li>
                <li className="pb-3"><a href="#">Mentions légales</a></li>
                <li className="pb-5"><a href="#">Politique de confidentialité</a></li>
              </ul>
          </Col>
          <Col ms={12} md={4} ml={4}> {/* deuxième colonne (au centre) */}
              <h4 className="mb-4">NEWSLETTER</h4>
              <input type="email" className="form-control" placeholder='Entrez votre e-mail' required/>
              <button className='inscription-btn mb-5' type="button">S'inscrire</button>
          </Col>
          <Col ms={12} md={4} ml={4} className="mb-4"> {/* troisième colonne (à droite) */}
              <h4 className="pb-5">SUIVRE METALICCA</h4>
              <span>
                    <Link className="reseau" href="https://www.facebook.com/profile.php?id=100091490982236"><BsFacebook size={25} /></Link> {/* lien vers la page Facebook de Metallica */}
                    <Link className="reseau" href="https://www.instagram.com/metallica_mult/?igshid=YmMyMTA2M2Y%3D"><GrInstagram size={25} /></Link> {/* lien vers la page Instagram de Metallica */}
              </span> 
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
// exportation du composant Footer pour une utilisation dans d'autres fichiers.
export default Footer; 
