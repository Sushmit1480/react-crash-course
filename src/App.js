import { ProductCard } from "./components/ProductCard";
import { ProductCard2 } from "./components/ProductCard2";
import { ProductList } from "./components/ProductList";
import "./App.css";

function App() {
  const product = {
    imageSrc: "images/cell-phone.png",
    title: "IPhone 16 Pro",
    specification: [
      "A21 Pro chip with 12-core CPU",
      "3x ir 4x telephonic camera",
      "Up to 36 hours video playback",
    ],
    price: 899,
  };

  return (
    <div className="App">
      <ProductList>
        <ProductCard />
        <ProductCard2 product={product} />
      </ProductList>
    </div>
  );
}

export default App;
