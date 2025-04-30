import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct'; 
import UpdateProduct from './pages/UpdateProduct'; 
import Supplier from './pages/Supplier';
import UpdateSupplier from './pages/UpdateSupplier';
import AddSupplier from './pages/AddSupplier';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addProduct" element={<AddProduct />} /> 
          <Route path="/updateProduct/:productId" element={<UpdateProduct />} /> 
          <Route path="/suppliers" element={<Supplier />} />
          <Route path="/addSupplier" element={<AddSupplier />} /> 
          <Route path="/updateSupplier/:supplierId" element={<UpdateSupplier />} /> 
          <Route path="/notifications" element={<Notifications />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
