// On importe les modules et les composants nécessaires
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPlay } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

// On définit le composant TrackList
const TrackList = () => {

  // On initialise l'état playerLoaded à false avec useState
  const [playerLoaded, setPlayerLoaded] = useState(false);

  // On utilise useEffect pour charger l'API Deezer et mettre à jour l'état
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://e-cdns-files.dzcdn.net/js/min/dz.js';
    script.async = true;
    script.onload = () => setPlayerLoaded(true);
    document.body.appendChild(script);

    // On nettoie le script à la fin de l'effet
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // On définit la fonction handlePlayButtonClick
  const handlePlayButtonClick = () => {
    // Si l'API Deezer n'est pas chargée, on ne fait rien
    if (!playerLoaded) return;

    // Sinon, on initialise l'API Deezer et on lit une piste
    DZ.init({
      appId: '593924',
      channelUrl: 'http://localhost:3006/',
    });
    DZ.player.playTracks([423766937]);
  };

  return (
    <Container fluid className='pt-5 pb-5'>
      <Row className='justify-content-md-center'>

        {/* On définit les 6 colonnes du composant */}
        <Col md={8} sm={12} data-aos="fade-left">
          <div className='track d-flex'>
            <Button className="btn-circle me-5" onClick={handlePlayButtonClick}><FaPlay /></Button>
            <div className=' me-5 ms-5'>
              <img className="me-4" src="/Pochette de l'album - face.jpg" alt="Cover de l'album 1" />
            </div>
            <div className='d-flex flex-column  ms-5'>
              <h4 className='trackTitle'>Sleepwalk My Life Away</h4>
              <section className='ma-section'>
                <h4 className='trackArtist'>Metalicca</h4>
              </section>
            </div>
            <div>
            </div>
          </div>
        </Col>

        {/* On répète la même structure pour chaque colonne */}
        <Col md={8} sm={12} data-aos="fade-left">
          <div className='track d-flex'>
            <Button className="btn-circle me-5" onClick={handlePlayButtonClick}><FaPlay /></Button>
            <div className=' me-5 ms-5'>
              <img className="me-4" src="/Pochette de l'album - face.jpg" alt="Cover de l'album 1" />
            </div>
            <div className='d-flex flex-column  ms-5'>
              <h4 className='trackTitle'>Sleepwalk My Life Away</h4>
              <section className='ma-section'>
                <h4 className='trackArtist'>Metalicca</h4>
              </section>
            </div>
            <div>
            </div>
          </div>
        </Col>
                {/* On répète la même structure pour chaque colonne */}
        <Col md={8} sm={12} data-aos="fade-left">
          <div className='track d-flex'>
            <Button className="btn-circle me-5" onClick={handlePlayButtonClick}><FaPlay /></Button>
            <div className=' me-5 ms-5'>
              <img className="me-4" src="/Pochette de l'album - face.jpg" alt="Cover de l'album 1" />
            </div>
            <div className='d-flex flex-column  ms-5'>
              <h4 className='trackTitle'>Sleepwalk My Life Away</h4>
              <section className='ma-section'>
                <h4 className='trackArtist'>Metalicca</h4>
              </section>
            </div>
            <div>
            </div>
          </div>
        </Col>
                {/* On répète la même structure pour chaque colonne */}
        <Col md={8} sm={12} data-aos="fade-left">
          <div className='track d-flex'>
            <Button className="btn-circle me-5" onClick={handlePlayButtonClick}><FaPlay /></Button>
            <div className=' me-5 ms-5'>
              <img className="me-4" src="/Pochette de l'album - face.jpg" alt="Cover de l'album 1" />
            </div>
            <div className='d-flex flex-column  ms-5'>
              <h4 className='trackTitle'>Sleepwalk My Life Away</h4>
              <section className='ma-section'>
                <h4 className='trackArtist'>Metalicca</h4>
              </section>
            </div>
            <div>
            </div>
          </div>
        </Col>
                {/* On répète la même structure pour chaque colonne */}
        <Col md={8} sm={12} data-aos="fade-left">
          <div className='track d-flex'>
            <Button className="btn-circle me-5" onClick={handlePlayButtonClick}><FaPlay /></Button>
            <div className=' me-5 ms-5'>
              <img className="me-4" src="/Pochette de l'album - face.jpg" alt="Cover de l'album 1" />
            </div>
            <div className='d-flex flex-column  ms-5'>
              <h4 className='trackTitle'>Sleepwalk My Life Away</h4>
              <section className='ma-section'>
                <h4 className='trackArtist'>Metalicca</h4>
              </section>
            </div>
            <div>
            </div>
          </div>
        </Col>
                {/* On répète la même structure pour chaque colonne */}
        <Col md={8} sm={12} data-aos="fade-left">
          <div className='track d-flex'>
            <Button className="btn-circle me-5" onClick={handlePlayButtonClick}><FaPlay /></Button>
            <div className=' me-5 ms-5'>
              <img className="me-4" src="/Pochette de l'album - face.jpg" alt="Cover de l'album 1" />
            </div>
            <div className='d-flex flex-column  ms-5'>
              <h4 className='trackTitle'>Sleepwalk My Life Away</h4>
              <section className='ma-section'>
                <h4 className='trackArtist'>Metalicca</h4>
              </section>
            </div>
            <div>
            </div>
          </div>
        </Col>
                {/* On répète la même structure pour chaque colonne */}
        <Col md={8} sm={12} data-aos="fade-left">
          <div className='track d-flex'>
            <Button className="btn-circle me-5" onClick={handlePlayButtonClick}><FaPlay /></Button>
            <div className=' me-5 ms-5'>
              <img className="me-4" src="/Pochette de l'album - face.jpg" alt="Cover de l'album 1" />
            </div>
            <div className='d-flex flex-column  ms-5'>
              <h4 className='trackTitle'>Sleepwalk My Life Away</h4>
              <section className='ma-section'>
                <h4 className='trackArtist'>Metalicca</h4>
              </section>
            </div>
            <div>
            </div>
          </div>
        </Col>
                {/* On répète la même structure pour chaque colonne */}
        <Col md={8} sm={12} data-aos="fade-left">
          <div className='track d-flex'>
            <Button className="btn-circle me-5" onClick={handlePlayButtonClick}><FaPlay /></Button>
            <div className=' me-5 ms-5'>
              <img className="me-4" src="/Pochette de l'album - face.jpg" alt="Cover de l'album 1" />
            </div>
            <div className='d-flex flex-column  ms-5'>
              <h4 className='trackTitle'>Sleepwalk My Life Away</h4>
              <section className='ma-section'>
                <h4 className='trackArtist'>Metalicca</h4>
              </section>
            </div>
            <div>
            </div>
          </div>
        </Col>
                {/* On répète la même structure pour chaque colonne */}
        <Col md={8} sm={12} data-aos="fade-left">
          <div className='track d-flex'>
            <Button className="btn-circle me-5" onClick={handlePlayButtonClick}><FaPlay /></Button>
            <div className=' me-5 ms-5'>
              <img className="me-4" src="/Pochette de l'album - face.jpg" alt="Cover de l'album 1" />
            </div>
            <div className='d-flex flex-column  ms-5'>
              <h4 className='trackTitle'>Sleepwalk My Life Away</h4>
              <section className='ma-section'>
                <h4 className='trackArtist'>Metalicca</h4>
              </section>
            </div>
            <div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TrackList;
