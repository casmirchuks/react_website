import { css } from "@emotion/core";

const styles = css`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

const Container = ({ children }) => (
  <div css={styles} className="container">
    {children}
  </div>
);

export default Container;