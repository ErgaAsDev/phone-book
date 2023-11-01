import { FunctionComponent, memo } from "react";
import { css } from "@emotion/css";

const PaginationFooter: FunctionComponent = memo(() => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        text-align: left;
        font-size: var(--font-size-base);
        color: var(--color-black);
        font-family: var(--font-open-sans);
      `}
    >
      <div
        className={css`
          position: relative;
        `}
      >
        <span className={css``}>{`Showing `}</span>
        <b className={css``}>1-10</b>
        <span className={css``}>{` from `}</span>
        <b className={css``}>46</b>
        <span className={css``}> data</span>
      </div>
    </div>
  );
});

export default PaginationFooter;
