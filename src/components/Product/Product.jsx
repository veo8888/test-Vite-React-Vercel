export default function Product({ name, imgUrl, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="640" />
      <p>⭐⭐⭐⭐⭐</p>
      <p>Price: {price} credits</p>
      <label htmlFor="login">
        <input id="login" />
      </label>
    </div>
  );
}
