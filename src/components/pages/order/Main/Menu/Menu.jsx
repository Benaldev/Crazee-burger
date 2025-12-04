import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../../enums/product";
import { findObjectById, isEmpty } from "../../../../../utils/array";

export default function Menu() {
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    setProductSelected,
    productSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
    handleAddToBasket,
    handleDeleteBasketProduct,
  } = useContext(OrderContext);

  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = findObjectById(idProductClicked, menu);
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  if (isEmpty(menu) === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
    handleDeleteBasketProduct(idProductToDelete);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
    titleEditRef.current.focus();
  };

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToBasket(idProductToAdd);
  };

  return (
    <MenuStyled className="menu">
      {menu.map(({ title, id, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, productSelected.id)}
            onAdd={(event) => handleAddButton(event, id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
`;
