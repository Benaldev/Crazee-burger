import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import AdminContext from "../../../../context/OrderContext";
import Basket from "./Basket";

export default function Main() {
  const { isModeAdmin } = useContext(AdminContext);

  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: calc(90vh - 10vh);
  background-color: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};

  display: grid;
  grid-template-columns: 25% 1fr;

  overflow: hidden;

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;
