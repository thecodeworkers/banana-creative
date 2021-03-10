import Head from 'next/head';
import { Loader } from '../components';
import { HomeScreen } from '../screens';

export default function Home() {
  
  return (
    <Loader>
      <HomeScreen />
    </Loader>
  )
}
