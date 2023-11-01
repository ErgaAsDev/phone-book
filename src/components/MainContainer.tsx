import { FunctionComponent, memo } from "react";
import ContentContainer from "./ContentContainer";
import Sidebar from "./Sidebar";
import { css } from "@emotion/css";

const MainContainer: FunctionComponent = memo(() => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        font-size: var(--font-size-11xl);
        color: var(--black);
        font-family: var(--font-cairo);
      `}
    >
      <ContentContainer />
      <Sidebar />
    </div>
  );
});

export default MainContainer;
