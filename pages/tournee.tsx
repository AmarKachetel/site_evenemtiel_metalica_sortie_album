import { useState } from 'react';


// Création du composant Tournee
const Tournee = () => {
    // Initialisation d'un tableau de dates avec useState
  const [dates, setDates] = useState([
    { date1: "2023-04-27", date2: "2023-04-29", location: 'AMESTERDAM, PAYS-BAS' },
    { date1: "2023-05-17", date2: "2023-05-19", location: 'PARIS STADE DE FRANCE, FRANCE' },
    { date1: "2023-05-26", date2: "2023-05-28", location: 'HAMBOURG, ALLEMAGNE' },
    { date1: "2023-06-16", date2: "2023-06-18", location: 'GATEBORG, SUEDE' },
    { date1: "2023-08-04", date2: "2023-08-06", location: 'EAST RUTHERFORD, NEW JERSEY USA' },
    { date1: "2023-08-11", date2: "2023-08-13", location: 'MONTREAL, CANADA' },
    { date1: "2023-08-18", date2: "2023-08-20", location: 'ARLINGTON, TEXAS USA' },
    { date1: "2023-08-25", date2: "2023-08-27", location: 'LOS ANGELES ARIZONA USA' },
    { date1: "2023-09-01", date2: "2023-09-03", location: 'PHOENIX, ARIZONA USA' },
    { date1: "2023-10-03", date2: "2023-10-05", location: 'SAINT-LOUIS, MISSOURI USA' },
    { date1: "2023-09-10", date2: "2023-09-12", location: 'DETROIT, MICHIGAN USA' },
    { date1: "2024-05-24", date2: "2024-05-26", location: 'MUNICH, ALLEMAGNE' },
    { date1: "2024-06-07", date2: "2024-06-09", location: 'HELSINKI, FINLANDE' },
    { date1: "2024-06-14", date2: "2024-06-16", location: 'COPENHAGUE, DANEMARK' },
    { date1: "2024-07-05", date2: "2024-07-07", location: 'VARSOVIE, POLOGNE' },
    { date1: "2024-05-24", date2: "2024-05-26", location: 'MADRID, ESPAGNE' },
    { date1: "2024-08-02", date2: "2024-08-04", location: 'FOXBOROUGH, USA' },
    { date1: "2024-08-09", date2: "2024-08-11", location: 'CHICAGO, ILLINOIS USA' },
    { date1: "2024-08-16", date2: "2024-08-18", location: 'MINNEAPOLIS, USA' },
    { date1: "2024-08-23", date2: "2024-08-25", location: 'EDMONTON, CANADA' },
    { date1: "2024-08-30", date2: "2024-09-01", location: 'SEATTLE, WASHINGTON USA' },
    { date1: "2024-09-20", date2: "2024-09-22", location: 'MEXICO, MEXIQUE' },
    { date1: "2024-09-27", date2: "2024-09-29", location: 'MEXICO, MEXIQUE' },
  ]);

  return (
    <div className="container titre p-5">
    <div className='tournee'>
        <h1 className='pb-5'>LA TOURNÉE COMPLETE</h1>
    </div>
    <div className="list-group">
      {dates.map(date => (
        <div key={date.date1} className="list-group-item back ">
          <div className="card mb-3 ">
            <div className="card-body carte ">
              <h5 className="card-title titre">{date.location}</h5> 
              <p className="card-text titre"> LES{new Date(date.date1).toLocaleDateString()}</p>
              <p className="card-text titre">&</p>
              <p className="card-text titre">{new Date(date.date2).toLocaleDateString()}</p>
              <button className='btn-billeterie'>BILLETTERIE</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
};

export default Tournee;
