import Image from 'next/image' // Importation de la bibliothèque d'images de Next.js
import Link from "next/link";
import React, { useEffect } from 'react'; // Importation de React et de useEffect
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos'; // Importation de la bibliothèque AOS pour les animations
import 'aos/dist/aos.css'; // Importation du fichier CSS pour AOS

const Album = () => {
  useEffect(() => { // Utilisation de useEffect pour initialiser AOS
    AOS.init({
      duration: 2000, // Durée de l'animation en millisecondes
      once: true, // L'animation ne se répète pas qu'une seule fois
      easing: 'ease-in-out', // Type d'animation
    });
  }, []);
  return (
      <Container className='p-5'> {/* Conteneur principal */}
          <Col data-aos="fade-down" className="flex-grow-1 pb-5 imgLogoGrand"> {/* Première colonne */}
            <Image data-aos="fade-buttom"  src="/LogoMetallicablanc.png" alt="logo-Metalicca" width={450} height={105} /> {/* Image du logo */}
          </Col>
          <Col ms={12} md={12} className='order-md-1 order-2 pb-5'> {/* Deuxième colonne */}
            <img className='imgAccueil' src="/Img_1.png" alt="groupe metallica" width={1920} height={1080}  data-aos="fade-up" /> {/* Image du groupe Metallica */}
          </Col>
          <Col ms={12} md={12} clasName='order-md-2 order-1 '> {/* Troisième colonne */}
            <div className="d-flex flex-column titre t-5"> {/* Conteneur de texte */}
              <p data-aos="fade-left"> {/* Paragraphe principal */}
                Metallica est un groupe de <span className='text-orange'>heavy metal</span> américain formé en 1981 à Los Angeles.
                Le groupe est composé de <span className='text-orange'>James Hetfield</span> (chant, guitare rythmique), <span className='text-orange'>Kirk Hammett</span> (guitare solo), <span className='text-orange'>Robert Trujillo</span> (basse) et <span className='text-orange'>Lars Ulrich</span> (batterie).
                Metallica est considéré comme l'un des groupes les plus influents et les plus importants de l'histoire du heavy metal. 
                Le groupe a connu un grand succès commercial avec leur album de 1991, <span className='text-orange'>"Metallica"</span> (également connu sous le nom de "The Black Album"), qui comprenait des tubes tels que "Enter Sandman" et "The Unforgiven". 
                Depuis lors, ils ont sorti plusieurs autres albums, notamment <span className='text-orange'>"Load"</span> (1996), <span className='text-orange'>"Reload"</span>  (1997), <span className='text-orange'>"St. Anger"</span> (2003), <span className='text-orange'>"Death Magnetic"</span> (2008) et <span className='text-orange'>"Hardwired... to Self-Destruct"</span> (2016).
                Metallica est également connu pour ses performances live spectaculaires et pour être <span className='text-orange'>un groupe très engagé dans les causes sociales</span>. Ils ont organisé plusieurs concerts de bienfaisance, notamment pour les victimes du tsunami de 2004 en Asie du Sud et pour les victimes de L'ouragan Katrina en 2005.
                En plus de leur musique, Metallica est également connu pour leur image de marque distinctive, notamment leur <span className='text-orange'>logo "Métallique"</span> et leur mascotte <span className='text-orange'>"Scary Guy"</span>. Ils ont également été inclus dans le <span className='text-orange'>Rock and Roll Hall of Fame</span> en 2009.
              </p>
            </div>
          </Col>
      </Container>

  );
};
// exportation du composant Album pour une utilisation dans d'autres fichiers.
export default Album;
