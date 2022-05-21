import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';

import HomePage from './HomePage';
import Questions from './Questions';
import Scores from './Score/Scores';
import QuestionsProvider from './context/QuestionsContext';
import UserInfosProvider from './context/UserInfosContext';

function App() {
  return (
    <BrowserRouter>
      <QuestionsProvider>
        <UserInfosProvider>
          <GlobalStyles />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/score' element={<Scores />} />
          </Routes>
        </UserInfosProvider>
      </QuestionsProvider>
    </BrowserRouter>
  );
}

export default App;