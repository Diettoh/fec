import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { token, logout } = useAuth();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 text-center bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold text-[#233A89] mb-4">Bienvenido a Comunidad Virtual</h1>

      {token ? (
        <>
          <p className="text-green-600 mb-6 text-lg">Sesión iniciada ✅</p>
          <div className="flex justify-center gap-4">
            <Link
              to="/productos"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Ver productos
            </Link>
            <Link
              to="/perfil"
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
            >
              Mi Perfil
            </Link>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Cerrar sesión
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-600 mb-6 text-lg">No has iniciado sesión</p>
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Registrarse
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
