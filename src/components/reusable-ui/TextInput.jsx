import styled from "styled-components";
import { theme } from "../../theme/index";

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  ...extraProps
}) {
  return (
    <InputStyled className={className}>
      <div className="icon">{Icon && Icon}</div>
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.sizes.SM};
    color: ${theme.colors.greySemiDark};
    margin: 0 8px 0 10px;
  }

  input {
    border: none;
    font-size: ${theme.fonts.sizes.SM};
    color: ${theme.colors.dark};

    &::placeholder {
      background-color: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
