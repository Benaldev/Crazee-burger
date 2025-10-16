import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminPanel() {
  const { isEditSelected, isAddSelected } = useContext(OrderContext);

  return (
    <AdminPanelStyled className="panel-admin">
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: 0 -6px 8px -2px rgba(0, 0, 0, 0.1);
`;
