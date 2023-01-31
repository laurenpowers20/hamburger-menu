import burger1 from "./images/burger1.png";

function PageOne() {
  return (
    <>
      <h2 style={{ fontSize: "30px" }}>Burger One</h2>
      <img src={burger1} className="burger-image" alt="burger icon" />
    </>
  );
}

export default PageOne;
