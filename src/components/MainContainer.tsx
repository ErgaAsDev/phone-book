import { FunctionComponent, memo } from "react";
import { useAppContext } from "../context";
import ContentContainer from "./ContentContainer";
import Sidebar from "./Sidebar";
import { css } from "@emotion/css";

const MainContainer: FunctionComponent = memo(() => {
  const { selectedCardIndex, sortedContacts } = useAppContext();
  return (
    <div
      className={css`
        align-self: stretch;
        height: 100%;
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
      {selectedCardIndex !== null && (
        <Sidebar contact={sortedContacts[selectedCardIndex]} />
      )}
    </div>
  );
});

export default MainContainer;
