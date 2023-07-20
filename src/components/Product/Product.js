import "./style.css";
import rasvet from "./rassvet.jpeg";
function Product() {
  return (
    <div>
      <header className="header">
        <img className="img_product" src={rasvet} />
        <h1 className="header_p">добро пожаловать на мою страницу</h1>
        <p className="header_p">Hello Worid hi</p>
        <div className="item"></div>
      </header>
    </div>
  );
}

export default Product;

