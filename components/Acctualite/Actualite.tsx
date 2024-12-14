import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'

const Actualite = () => {
  return (
    // Conteneur principal pour le titre et le texte
    <Container className='p-5 titre'>
      {/* Titre de la section d'actualités avec animation fade-left */}
      <h1 data-aos="fade-left" className='pb-5'>ACTUALITÉ</h1>
      <div data-aos="fade-left">
        {/* Date de l'article */}
        <h6 className='gris'>28 mars 2023</h6>
        {/* Titre de l'article */}
        <h5>METALLICA SE LANCE DANS LA PRODUCTION DE VINYLES EN ACHETANT... UNE USINE.</h5>
      </div>
      {/* Colonne pour l'image et le texte */}
      <Col ms={12} md={12}>
        {/* Conteneur pour l'image et le texte */}
        <div data-aos="fade-up" className="d-flex justify-content-center">
          {/* Conteneur pour l'image */}
          <div className="flex-column align-items-center">
            <div className="pt-3 pb-3 pe-5">
              {/* Utilisation de la balise Image pour afficher l'image */}
              <Image className='imgAccueil1' src="/Img_2.jpeg" alt="logo-Metalicca" width={1920} height={1080} />
            </div>
            {/* Conteneur pour le texte */}
            <div className="pt-3 pb-3 pe-5">
              <p>
                {/* Paragraphe de texte à propos de l'acquisition de l'usine de pressage de vinyles */}
                Le 14 mars 2023, Metallica a annoncé avoir acheté une usine de pressage de vinyles à Nashville, dans le Tennessee. Cette acquisition permettra au groupe de maîtriser tout le processus de production de leurs disques vinyles, de la fabrication jusqu'à l'enregistrement. L'usine de pressage de vinyles de Metallica sera équipée de machines de haute qualité et disposera d’un studio d'enregistrement intégré pour effectuer des tests d'écoute en temps réel et garantir une qualité sonore optimale. 
                Le groupe n'a pas précisé à quelle date l'usine sera opérationnelle, mais a promis de fournir plus d'informations dans les semaines et les mois à venir. 
                L'achat de cette usine de vinyle par Metallica est un choix ambitieux qui témoigne de l'engagement du groupe envers la qualité sonore et la satisfaction de ses fans. Cela renforce leur statut de groupe emblématique du heavy metal.
                  <br className='mb-3' />
                Le vinyle a joué un rôle important dans l'histoire de Metallica, notamment dans les débuts du groupe. En effet, leurs premiers albums, tels que "Kill 'Em All", "Ride the Lightning" et "Master of Puppets", ont été publiés à l'origine en vinyle, avant d'être réédités en CD et en cassette.

              </p>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
};

// Exportation de la fonction Actualite comme composant par défaut pour une utilisation dans d'autres fichiers
export default Actualite;





