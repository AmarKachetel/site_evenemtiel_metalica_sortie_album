import { useState } from 'react';
import Link from 'next/link';

const TourDates = () => {
  // Initialisation de l'état local "dates" avec une liste d'objets contenant les informations de chaque date de la tournée
  const [dates, setDates] = useState([
    { date1: "2023-04-27", date2: "2023-04-29", location: 'AMESTERDAM, PAYS-BAS' },
    { date1: "2023-05-17", date2: "2023-05-19", location: 'PARIS STADE DE FRANCE, FRANCE' },
    { date1: "2023-05-26", date2: "2023-05-28", location: 'HAMBOURG, ALLEMAGNE' },
  ]);

  return (
    // Conteneur principal avec une classe "container-fluid titre p-5"
    <div className="container-fluid titre p-5">
      <div>
        {/* Titre de la tournée */}
        <h1 className='pb-5'>LA TOURNÉE</h1>
        {/* Bouton pour afficher toutes les dates de la tournée, en utilisant le composant Link de Next.js */}
        <Link href="/tournee">
          <button className='btn-dates'>VOIR TOUTE LES DATES</button>
        </Link>
      </div>
      {/* Grille pour afficher les dates */}
      <div className="row">
        {/* Boucle pour afficher chaque date de la tournée */}
        {dates.map(date => (
          // Utilisation de la propriété "key" pour optimiser le rendu
          <div key={date.date1} className="col-lg-4 col-md-6 col-sm-12 mb-3 back">
            <div className="card h-100">
              <div className="card-body carte ">
                {/* Lieu de la date */}
                <h5 className="card-title">{date.location}</h5>
                
                {/* Bouton pour acheter des billets */}
                <button className='btn-billeterie'>
                  <i><a className='billeterie' href="https://www.stadefrance.com/fr/billetterie/metallica-pack-2-jours-2023"> BILLETTERIE</a></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourDates;
