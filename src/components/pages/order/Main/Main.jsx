import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Admin</div>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  border: 3px solid green;
  height: calc(90vh - 10vh);
  background-color: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-columns: 25% 1fr; Code for basket*/

  /* .basket {
    border: 1px solid pink;
  } */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    .admin {
      background-color: red;
      position: absolute;
      height: 250px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;
