export function ProductCard2(props) {
  function getProductTitle() {
    return props.product.title;
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
        src={props.product.imageSrc}
        alt={props.product.title}
        width="128px"
        height="128px"
      />
      <p>Specification:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>{props.product.specification[0]}</li>
        <li>{props.product.specification[1]}</li>
        <li>{props.product.specification[2]}</li>
      </ul>
      <button>Buy (From ${props.product.price})</button>
    </article>
  );
}
