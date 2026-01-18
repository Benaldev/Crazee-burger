import styled from "styled-components";

export default function CasinoEffect({ count, className }) {
  return (
    <CasinoEffectStyled>
      <span key={count} className={className}>
        {count}
      </span>
    </CasinoEffectStyled>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow: hidden;

  span {
    display: inline-block;
    animation: slideIn 300ms ease forwards;
  }

  @keyframes slideIn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;
