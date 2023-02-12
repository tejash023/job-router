import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route index element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
