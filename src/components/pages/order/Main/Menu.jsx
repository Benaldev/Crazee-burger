import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          <div className="produit" key={produit.id}>
            <div className="image">
              <img src={produit.imageSource} alt={produit.title} />
            </div>
            <div className="info-text">
              <div className="title">{produit.title}</div>
              <div className="description">
                <div className="price">{produit.price}</div>
                <button className="add-button">Ajouter</button>
              </div>
            </div>
          </div>
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;

  .produit {
    background: green;
    width: 240px;
    height: 330px;

    .image {
      width: 100px;
      height: auto;
      border: 1px solid fuchsia;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
