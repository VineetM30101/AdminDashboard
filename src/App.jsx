import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage.jsx";
import OverviewPage from "./pages/OverviewPage.jsx";
import Sidebar from './components/Sidebar.jsx'
import UsersPage from "./pages/UsersPage.jsx";
import SalesPage from "./pages/SalesPage.jsx";

function App() {
  return (
    <div className="flex h-screen bg-gray-950 text-gray-100 overflow-hidden">

      <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gray-950 opacity-80">
              <div className="absolute inset-0 backdrop-blur-sm"></div>
          </div>
      </div>

      <Sidebar/>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/users" element={<UsersPage />}/>
        <Route path="/sales" element={<SalesPage />}/>
      </Routes>
    </div>
  );
}

export default App;
