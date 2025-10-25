import styled from "styled-components";

export default function AddForm() {
  return (
    <AddFormStyled>
      <div className="images-preview">image-preview</div>
      <div className="inputs-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Prix" />
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
