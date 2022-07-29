import './App.css';
import "bootswatch/dist/materia/bootstrap.min.css"; 
// import Languages from './components/Languages';
import  ShopContextProvider from "./context/ShopContext";
import ShowProduct from './components/ShowProduct';

function App() {
  return (
    <div className="container mt-5">
        <ShopContextProvider>
           <ShowProduct/>
        </ShopContextProvider>
    </div>
  );
}

export default App;
