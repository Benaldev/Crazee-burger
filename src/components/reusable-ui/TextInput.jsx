import styled from "styled-components";
import { theme } from "../..";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled className="input-with-icon">
      {Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: 15px;
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: 15px;
    color: ${theme.colors.dark};
  }

  &::placeholder {
    background-color: ${theme.colors.white};
    color: ${theme.colors.greyLight};
  }
`;
