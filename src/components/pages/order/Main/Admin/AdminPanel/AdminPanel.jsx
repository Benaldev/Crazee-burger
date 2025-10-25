import styled from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { getTabsConfig, getTabSelected } from "../getTabsConfig.jsx";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled className="panel-admin">
      {currentTabSelected === tabSelected.index && tabSelected.Content}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%;
`;
