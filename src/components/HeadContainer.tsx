import { FunctionComponent, memo, useState, useCallback } from "react";
import { useAppContext } from "../context";
import { css } from "@emotion/css";
import Form from "./Form";

const HeadContainer: FunctionComponent = memo(() => {
  const { contactsToDisplay, handleOpenForm } = useAppContext();

  return (
    <>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          font-size: var(--font-size-11xl);
          color: var(--black);
          font-family: var(--font-cairo);
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-3xs);
            @media screen and (max-width: 1200px) {
              flex: unset;
              align-self: stretch;
            }
          `}
        >
          <button
            onClick={handleOpenForm}
            className={css`
              cursor: pointer;
              border: none;
              padding: 0px var(--padding-5xs);
              background-color: var(--primer);
              border-radius: var(--br-sm);
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
              height: 60px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              box-sizing: border-box;
              gap: var(--gap-3xs);
              @media screen and (max-width: 620px) {
                align-self: stretch;
                align-items: center;
                justify-content: center;
              }
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17px;
                height: 15.1px;
              `}
              alt=""
              src="/vector.svg"
            />
            <b
              className={css`
                position: relative;
                font-size: var(--font-size-lg);
                display: inline-block;
                font-family: var(--font-cairo);
                color: var(--primary-contrast);
                text-align: left;
                width: 100px;
                height: 30px;
                flex-shrink: 0;
              `}
            >
              New Contact
            </b>
          </button>
          <Form />
        </div>
        <b
          className={css`
            position: relative;
            display: inline-block;
            // width: 155px;
            flex-shrink: 0;
            @media screen and (max-width: 500px) {
              font-size: 18px;
            }
          `}
        >
          Contacts ({contactsToDisplay.length})
        </b>
      </div>
    </>
  );
});

export default HeadContainer;
