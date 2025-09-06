import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Carrito from './pages/Carrito';
import Pago from './pages/Pago';
import Productos from './pages/Productos';
import Perfil from './pages/Perfil';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Navbar fijo */}
        <Navbar />

        {/* Contenido principal */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            {/* Públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protegidas */}
            <Route
              path="/carrito"
              element={
                <PrivateRoute>
                  <Carrito />
                </PrivateRoute>
              }
            />
            <Route
              path="/pagar"
              element={
                <PrivateRoute>
                  <Pago />
                </PrivateRoute>
              }
            />
            <Route
              path="/productos"
              element={
                <PrivateRoute>
                  <Productos />
                </PrivateRoute>
              }
            />
            <Route
              path="/perfil"
              element={
                <PrivateRoute>
                  <Perfil />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>

        {/* Footer opcional */}
        {/* <footer className="text-center text-sm text-gray-500 py-4">
          Comunidad Virtual © {new Date().getFullYear()}
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
