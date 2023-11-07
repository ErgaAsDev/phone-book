import { FunctionComponent, memo } from "react";
import ContactContainer from "./ContactContainer";
import PaginationFooter from "./PaginationFooter";
import { css } from "@emotion/css";

const ContentContainer: FunctionComponent = memo(() => {
  return (
    <div
      className={css`
        align-self: stretch;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0px var(--padding-5xs) var(--padding-xs) var(--padding-xl);
        text-align: left;
        font-size: var(--font-size-11xl);
        color: var(--black);
        font-family: var(--font-cairo);
        @media (max-width: 500px) {
          padding: 0px 0px var(--padding-xs) 0px;
        }
      `}
    >
      <ContactContainer />
      <PaginationFooter />
    </div>
  );
});

export default ContentContainer;
