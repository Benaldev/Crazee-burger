import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";

export default function Basket() {
  const { basket } = useContext(OrderContext);
  return (
    <BasketStyles>
      <Total amountToPay={formatPrice()} />
      <EmptyBasket basket={basket} />
      <Footer />
    </BasketStyles>
  );
}

const BasketStyles = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
`;
