import { css } from "@emotion/core";

const styles = css`  
text-decoration: none;
display: inline-block;
text-transform: uppercase;
padding: 15px 44px;
background: #ff1414;
color: #fff;
font-size: 14px;
font-weight: 600;
border: 1px solid transparent;
transition: all 500ms ease-in-out; 
`;

const Button = ({text}) => (
    <a href="#/" css={styles} className="btn">
        {text}
    </a>
);

export default Button;