import { Routes, Route, useLocation  } from 'react-router-dom';
import { useEffect } from 'react';

import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import ContactsPage from './pages/ContactsPage/ContactsPage'
import InfoPage from './pages/InfoPage/InfoPage';
import ActivityPage from './pages/ActivityPage/ActivityPage';
import ManagementPage from './pages/ManagementPage/ManagementPage';
import EducationPage from './pages/EducationPage/EducationPage';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="activity" element={<ActivityPage />} />
        <Route path="management" element={<ManagementPage />} />
        <Route path="education" element={<EducationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
