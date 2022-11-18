import { Suspense } from 'react';
import './App.css';
import ErrorBoundary from './auxiliaries/ErrorBoundary/ErrorBoundary';
import Loader from './auxiliaries/Loader/Loader';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() { 

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <div className="wrapper"> 
          <Header />
          <Main />
          <Footer />
        </div>
      </Suspense>
    </ErrorBoundary>   
  );
}

export default App;
