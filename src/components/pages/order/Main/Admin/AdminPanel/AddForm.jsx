import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext.jsx";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  //state
  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime(),
    };

    handleAdd(newProductToAdd);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    const name = e.target.name;
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  //affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="images-preview">Aucune image</div>
      <div className="inputs-fields">
        <input
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          type="text"
          placeholder="Nom"
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          onChange={handleChange}
          type="text"
          placeholder="Image URL"
        />
        <input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          type="text"
          placeholder="Prix"
        />
      </div>
      <button className="submit-button">Submit button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 3px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .images-preview {
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }

  .inputs-fields {
    background: green;
    grid-area: 1 / 2 / 4 / 3;

    display: grid;
  }

  .submit-button {
    background: purple;
    grid-area: 4 / 2 / 5 / 3;
    width: 50%;
  }
`;
