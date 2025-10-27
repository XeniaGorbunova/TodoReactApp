import { Outlet } from 'react-router-dom'
import './App.scss'
import { withProviders } from './providers';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
// import { ErrorBoundary } from 'widgets/ErrorBoundary';
// import { AppFallBack } from 'widgets/FallBack';
import { Toaster } from 'react-hot-toast';

export const App = withProviders(() => {

  return (
    <div className='container d-flex flex-column app-wr'>
      {/* <ErrorBoundary fallback={AppFallBack}> */}
        <Toaster />
        <Header />
        <Outlet />
        <Footer />
      {/* </ErrorBoundary> */}
    </div>
  )
});
