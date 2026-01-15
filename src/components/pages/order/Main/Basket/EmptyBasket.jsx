import styled from "styled-components";
import { theme } from "../../../../../theme";
import { BASKET_MESSAGE } from "../../../../../enums/product";

export default function EmptyBasket({ isLoading }) {
  return (
    <EmptyBasketStyled>
      <span className="empty-message">
        {isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}
      </span>
    </EmptyBasketStyled>
  );
}

const EmptyBasketStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};

  .empty-message {
    text-align: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.sizes.P4};
    color: ${theme.colors.greyBlue};
  }
`;
