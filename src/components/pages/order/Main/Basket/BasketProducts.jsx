import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { findObjectById } from "../../../../../utils/array";
import React, { useContext, useRef } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { checkIfProductIsClicked } from "../Menu/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../theme/animations";

export default function BasketProducts() {
  const nodeRefs = useRef({});

  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <BasketProductsStyled>
      <TransitionGroup>
        {basket.map((basketProduct) => {
          if (!nodeRefs.current[basketProduct.id]) {
            nodeRefs.current[basketProduct.id] = React.createRef();
          }

          const nodeRef = nodeRefs.current[basketProduct.id];

          const menuProduct = findObjectById(basketProduct.id, menu);
          return (
            <CSSTransition
              appear={true}
              nodeRef={nodeRef}
              classNames={"animation-basket"}
              key={basketProduct.id}
              timeout={300}
            >
              <div ref={nodeRef} className="card-container">
                <BasketCard
                  {...menuProduct}
                  imageSource={
                    menuProduct.imageSource
                      ? menuProduct.imageSource
                      : IMAGE_COMING_SOON
                  }
                  quantity={basketProduct.quantity}
                  onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                  isClickable={isModeAdmin}
                  onClick={
                    isModeAdmin
                      ? () => handleProductSelected(basketProduct.id)
                      : null
                  }
                  isSelected={checkIfProductIsClicked(
                    basketProduct.id,
                    productSelected.id,
                  )}
                  className={"card"}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .card-container {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
  }

  ${basketAnimation}
`;
