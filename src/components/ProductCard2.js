export function ProductCard2({ product, background = "slategrey" }) {
  function getProductTitle() {
    return product.title;
  }

  function handleClick(product) {
    alert(`You clicked on ${product.title} which cost ${product.price}`);
  }

  return (
    <article
      style={{
        background,
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
