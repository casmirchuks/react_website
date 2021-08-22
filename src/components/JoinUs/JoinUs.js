/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import JoinUsCard from "./JoinUsCard";
import ForGirls from "../Images/forGirl.png"
import ForBoys from "../Images/forBoys.png"

const styles = css`
    width: 100%;
    .container {
        max-width: 100%;
        display: flex;
        .card {
            background: url('${ForGirls}') no-repeat center/cover;
            background-size: 100% 100%;
            transition: all 300ms ease-in-out;
            &:hover {
              background-size: 105% 105%;
            }
            &:last-of-type {
              background: url('${ForBoys}') no-repeat center/cover;
              background-size: 100% 100%;
              &:hover{
                  background-size: 105% 105%;
              }
    }
`


const JoinUs = () => {
return (
    <section css={styles} className="joinUs" id="blog">
    <Container>
        <JoinUsCard> title="For Girl"</JoinUsCard>
        <JoinUsCard> title="For Boys"</JoinUsCard>
    </Container>
</section>
)
}

export default JoinUs;