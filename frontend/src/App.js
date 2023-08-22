import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Store from './pages/Store';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route
              path='/store/:category'
              element={<Store />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;