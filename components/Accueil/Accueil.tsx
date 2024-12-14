import Image from 'next/image';

function Accueil() {
  return (
    // Div parent pour le placement de l'image
    <div className='pb-5'>
      {/* Utilisation de la balise Image pour afficher l'image avec une source et un texte alternatif */}
      <Image 
        className='img-accueil' 
        src="/Metallica_Group_72Seasons_Tim-Saccenti_02.png" 
        alt="logo-Metallica" 
        width={3840} 
        height={1200} 
      />
    </div> 
  );
}

// Exportation de la fonction Accueil comme composant par défaut pour une utilisation dans d'autres fichiers
export default Accueil;
