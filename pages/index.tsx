import Head from 'next/head'
import { Inter } from 'next/font/google'

// Importation des différents composants de l'application
import Accueil from '@/components/Accueil/Accueil'
import Groupe from '@/components/Groupe/groupe'
import Album from '@/components/Album/Album'
import TrackList from '@/components/TrackList/TrackList'
import Actualite from '@/components/Acctualite/Actualite'
import Tournee from '@/components/Tournee/Tournee'

// Configuration de la police de caractères Inter pour l'application
const inter = Inter({ subsets: ['latin'] })

// Composant principal de l'application
export default function Home(props) {
  
  // Affichage des différents composants de l'application
  return (
    <>
      <Head>
        <title>Fire-Communication</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Accueil />
      <Groupe />
      <TrackList />
      <Album />
      <Tournee />
      <Actualite />
    </>
  )
}
