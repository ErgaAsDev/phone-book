import { FunctionComponent, memo } from "react";
import HeadContainer from "./HeadContainer";
import ListCards from "./ListCards";
import { css } from "@emotion/css";

const ContactContainer: FunctionComponent = memo(() => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: var(--padding-xs) var(--padding-xl) 0px 0px;
        gap: var(--gap-21xl);
        text-align: left;
        font-size: var(--font-size-11xl);
        color: var(--black);
        font-family: var(--font-cairo);
        @media (max-width: 500px) {
          padding: 10px 4px var(--padding-xs) 4px; // Set the padding to 10px for screens below 500px
        }
      `}
    >
      <HeadContainer />
      <ListCards />
    </div>
  );
});

export default ContactContainer;
