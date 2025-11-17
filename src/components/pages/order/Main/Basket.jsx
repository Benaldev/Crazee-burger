import styled from "styled-components";

export default function Basket() {
  return (
    <BasketStyles>
      <div className="head">Head</div>
      <div className="body">Body</div>
      <div className="footer">Footer</div>
    </BasketStyles>
  );
}

const BasketStyles = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;

  .head {
    border: 1px solid red;
  }

  .body {
    border: 1px solid blue;
  }

  .footer {
    border: 1px solid green;
  }
`;
