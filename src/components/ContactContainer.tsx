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
        align-items: flex-start;
        justify-content: flex-start;
        padding: var(--padding-xs) var(--padding-xl) 0px 0px;
        gap: var(--gap-21xl);
        text-align: left;
        font-size: var(--font-size-11xl);
        color: var(--black);
        font-family: var(--font-cairo);
      `}
    >
      <HeadContainer />
      <ListCards />
    </div>
  );
});

export default ContactContainer;
