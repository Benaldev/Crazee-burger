import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import { theme } from "../../../../../theme";
import { isEmpty } from "../../../../../utils/array";

export default function Basket() {
  const { basket } = useContext(OrderContext);

  return (
    <BasketStyled>
      <Total />
      {isEmpty(basket) ? <EmptyBasket /> : <BasketProducts />}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 80vh;
`;
