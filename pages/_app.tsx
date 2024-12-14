import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';

// Importation des différents composants de l'application
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// Composant principal de l'application
export default function App({ Component, pageProps }: AppProps) {
  return ( 
    // Div principale qui englobe l'ensemble des composants
    <div> 
      <Header /> {/* Composant d'en-tête de l'application*/}
      <Component {...pageProps} /> {/* Composant principal qui change en fonction de la page*/}
      <Footer /> {/*Composant de pied de page de l'application*/}
    </div>
  )
}
