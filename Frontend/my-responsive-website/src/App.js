import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveLayout from './components/ResponsiveLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ResponsiveLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;