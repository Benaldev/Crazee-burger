import styled from "styled-components";

export default function Product({ title, imageSource, price, id }) {
  return (
    <ProductSyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="description">
          <div className="title">{title}</div>
          <div className="price">{price}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductSyled>
  );
}

const ProductSyled = styled.div`
  background: green;
  width: 240px;
  height: 330px;
  display: grid;

  .image {
    width: 100px;
    height: auto;
    border: 1px solid fuchsia;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .description {
  }
`;
