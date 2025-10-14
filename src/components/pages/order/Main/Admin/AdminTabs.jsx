import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";

export default function AdminTabs({ setIsCollapsed, isCollapsed }) {
  return (
    <AdminTabsStyled>
      <Tab
        label=""
        className={isCollapsed ? "is-active" : ""}
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
      <Tab
        label={"ajouter un produit"}
        className={isCollapsed ? "is-active" : ""}
        Icon={<AiOutlinePlus />}
        onClick={() => setIsCollapsed(!isCollapsed)}
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
