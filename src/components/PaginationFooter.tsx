import React, { FunctionComponent, memo } from "react";
import { useAppContext } from "../context";
import { css } from "@emotion/css";

const PaginationFooter: FunctionComponent = memo(() => {
  const { currentPage, totalPageCount, handlePageChange } = useAppContext();

  const pageNumbers = Array.from({ length: totalPageCount }, (_, i) => i + 1);

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
      <div>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              marginRight: "5px",
              color: page === currentPage ? "green" : "black",
              cursor: "pointer",
              border: page === currentPage ? "2px green solid" : "",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
});

export default PaginationFooter;
