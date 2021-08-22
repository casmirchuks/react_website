/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import FooterContainer from "./FooterContainer";
import Container from "../GlobalComponents/Container";

const styles = css`
  background: #000;
  .container {
    padding: 30px 0;
    border-top: 1px solid #1a1a1a;
    text-align: center;
    p {
      font-size: 15px;
      color: #aab1b7;
      a {
        text-decoration: none;
        color: #ff1414;
      }
    }
  }
  @media (max-width: 1200px) {
    .container {
      max-width: 90%;
    }
  }
`;

const Footer = () => (
  <footer css={styles} id="contact">
    <FooterContainer />
    <Container>
      <p>
        Copyright &copy;2020 All rights reserved K-Digital
    </p>
    </Container>
  </footer>
);



export default Footer;