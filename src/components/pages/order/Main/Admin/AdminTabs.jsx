import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isEditSelected,
    setIsEditSelected,
    isAddSelected,
    setisAddSelected,
  } = useContext(OrderContext);

  const selectTab = (tabeSelected) => {
    setIsCollapsed(false);

    if (tabeSelected === "add") {
      setIsEditSelected(false);
      setisAddSelected(true);
    }

    if (tabeSelected === "edit") {
      setIsEditSelected(true);
      setisAddSelected(false);
    }
  };

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        className={isCollapsed ? "is-active" : ""}
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
      <Tab
        label={"Ajouter un produit"}
        className={isAddSelected ? "is-active" : ""}
        Icon={<AiOutlinePlus />}
        onClick={() => selectTab("add")}
      />
      <Tab
        label={"Modifier un produit"}
        className={isEditSelected ? "is-active" : ""}
        Icon={<MdModeEditOutline />}
        onClick={() => selectTab("edit")}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
