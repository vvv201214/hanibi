import './App.css';
import Homepage from './page/Homepage';
import FormPage from './page/FormPage';
import ResultPage from './page/ResultPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/form/:username' element={<FormPage />} />
          <Route path='/result' element={<ResultPage />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App;
