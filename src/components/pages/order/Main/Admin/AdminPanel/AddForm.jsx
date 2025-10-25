import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext.jsx";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: new Date().getTime(),
      title: title,
      imageSource: imageSource,
      price: price,
    };

    handleAdd(newProduct);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageSourceChange = (e) => {
    setImageSource(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="images-preview">Aucune image</div>
      <div className="inputs-fields">
        <input
          value={title}
          onChange={handleTitleChange}
          type="text"
          placeholder="Nom"
        />
        <input
          value={imageSource}
          onChange={handleImageSourceChange}
          type="text"
          placeholder="Image URL"
        />
        <input
          value={price ? price : ""}
          onChange={handlePriceChange}
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
