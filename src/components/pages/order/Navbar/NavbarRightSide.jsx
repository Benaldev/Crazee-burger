import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyle>
      <ToggleButton
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin"
      />
      <Profile username={username} />
    </NavbarRightSideStyle>
  );
}

const NavbarRightSideStyle = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
