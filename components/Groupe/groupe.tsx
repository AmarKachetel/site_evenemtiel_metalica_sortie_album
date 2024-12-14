import Image from 'next/image'; // Importer la composante Image de Next.js
import { Container, Row, Col, Carousel } from 'react-bootstrap'; // Importer les composantes Container, Row, Col et Carousel de React-Bootstrap

const Groupe = () => {
  return (
    <Container fluid className="text-start"> {/* Le conteneur occupe toute la largeur et aligne le texte à gauche */}
      <Row className="p-5"> {/* Créer une rangée de 5% de marge intérieure (padding) */}
        <Col sm={12} md={6} lg={6} data-aos="fade-right" className="pe-5  order-sm-2 order-md-1 order-1"> {/* Une colonne de 12 pour les petits écrans (sm) et de 6 pour les écrans moyens (md) et de 6 pour les écrans larges (lg), qui est animée et qui est ordonnée pour les écrans moyens et les petits écrans */}
          <Carousel> {/* Un carrousel pour afficher plusieurs images */}
            <Carousel.Item>
              <Image className='imgAccueil1' src="/Pochette de l'album - face.jpg" alt="pochette de l'album face" width={1417} height={1417} /> {/* Afficher une image de la pochette de l'album face */}
            </Carousel.Item>
            <Carousel.Item>
              <Image className='imgAccueil1' src="/Pochette de l'album - dos.jpg" alt="pochette de l'album dos" width={1417} height={1417} /> {/* Afficher une image de la pochette de l'album dos */}
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={12} md={6} lg={6} data-aos="fade-left" className="titre ps-5 pb-5 order-sm-1 order-md-2 order-2  "> {/* Une colonne de 12 pour les petits écrans (sm) et de 6 pour les écrans moyens (md) et de 6 pour les écrans larges (lg), qui est animée, qui est ordonnée pour les petits écrans et qui a une marge intérieure à gauche de 5% et une marge inférieure de 5% */}
          <h1 className="">METALLICA</h1> {/* Afficher le titre METALLICA */}
          <section className="ma-section mb-5">
            <h6 className="sousTitre">72 Seasons</h6> {/* Afficher le titre de l'album */}
          </section>
          <h5 className="sousTitre">18,99€ </h5> {/* Afficher le prix de l'album */}
          <p>
            "72 Seasons" sera leur onzième album studio et devrait sortir le 14 avril 2023 sur leur propre label Blackened Recordings. <br /> Le titre de l'album est une référence à un ancien calendrier japonais qui décompte les 72 micro-saisons de l'année.
          </p> {/* Afficher une description de l'album */}
          <div className='d-flex justify-content-center  pt-5'> {/* Centrer le bouton de précommande */}
            <button className="p-3 btn-precommander ">PRÉCOMMANDER L'ALBUM</button> {/* Ajouter un bouton pour précommander l'album */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
// Exportation du composant Groupe pour qu'il puisse être utilisé ailleurs dans le code
export default Groupe; 
