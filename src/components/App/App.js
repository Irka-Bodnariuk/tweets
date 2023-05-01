import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/Home/Home';
import TweetsPage from '../../pages/Tweets/Tweets';
import NavBar from '../NavBar/NavBar';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

import { Container } from './App.styled';

function App() {
  return (
    <BrowserRouter basename="/tweets">
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
