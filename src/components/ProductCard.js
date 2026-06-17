export function ProductCard() {
  const product = {
    imageSrc: "images/cell-phone.png",
    title: "IPhone 17 Pro",
    specification: [
      "A21 Pro chip with 16-core CPU",
      "3x ir 5x telephonic camera",
      "Up to 48 hours video playback",
    ],
    price: 999,
  };

  function handleClick(product) {
    alert(`You clicked on ${product.title} which cost ${product.price}`);
  }

  function getProductTitle() {
    return product.title;
  }

  return (
    <article
      style={{
        width: "100%",
        border: "1px solid white",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h2>{getProductTitle()}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width="128px"
        height="128px"
      />
      <p>Specification:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>{product.specification[0]}</li>
        <li>{product.specification[1]}</li>
        <li>{product.specification[2]}</li>
      </ul>
      <button onClick={() => handleClick(product)}>
        Buy (From ${product.price})
      </button>
    </article>
  );
}
