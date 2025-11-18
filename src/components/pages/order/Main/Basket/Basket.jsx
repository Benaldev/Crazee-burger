import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";

export default function Basket() {
  return (
    <BasketStyles>
      <Total amountToPay={formatPrice()} />
      <div className="body">Body</div>
      <Footer />
    </BasketStyles>
  );
}

const BasketStyles = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;

  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
`;
