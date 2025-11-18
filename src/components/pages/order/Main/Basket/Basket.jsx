import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketBody from "./BasketBody";

export default function Basket() {
  return (
    <BasketStyles>
      <Total amountToPay={formatPrice()} />
      <BasketBody />
      <Footer />
    </BasketStyles>
  );
}

const BasketStyles = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
`;
