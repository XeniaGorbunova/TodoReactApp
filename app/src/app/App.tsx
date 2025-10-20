import { Outlet } from 'react-router-dom'
import './App.scss'
import { withProviders } from './providers';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';

export const App = withProviders(() => {

  return (
    <div className='container d-flex flex-column app-wr'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
});
