import { FunctionComponent, memo, useState, useCallback } from "react";
import Form from "./Form";
import PortalPopup from "./PortalPopup";
import { css } from "@emotion/css";

const HeadContainer: FunctionComponent = memo(() => {
  const [isFormPopupOpen, setFormPopupOpen] = useState(false);

  const openFormPopup = useCallback(() => {
    setFormPopupOpen(true);
  }, []);

  const closeFormPopup = useCallback(() => {
    setFormPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-99xl);
          text-align: left;
          font-size: var(--font-size-11xl);
          color: var(--black);
          font-family: var(--font-cairo);
          @media screen and (max-width: 1200px) {
            flex-direction: column;
            gap: var(--gap-xl);
          }
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
            @media screen and (max-width: 960px) {
              gap: var(--gap-0);
              align-items: center;
              justify-content: space-between;
            }
            @media screen and (max-width: 620px) {
              flex-direction: column;
              gap: var(--gap-xl);
            }
          `}
        >
          <button
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
                width: auto;
                align-items: center;
                justify-content: center;
              }
            `}
            onClick={openFormPopup}
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
          <div
            className={css`
              border-radius: var(--br-sm);
              background-color: var(--primary-contrast);
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
              width: 409px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-xl);
              box-sizing: border-box;
              gap: var(--gap-3xs);
              @media screen and (max-width: 620px) {
                align-self: stretch;
                width: auto;
              }
            `}
          >
            <img
              className={css`
                position: relative;
                width: 21px;
                height: 21px;
              `}
              alt=""
              src="/vector1.svg"
            />
            <input
              className={css`
                border: none;
                background-color: transparent;
                flex: 1;
                position: relative;
                height: 24px;
                overflow: hidden;
              `}
              type="text"
            />
          </div>
        </div>
        <b
          className={css`
            position: relative;
            display: inline-block;
            width: 155px;
            flex-shrink: 0;
          `}
        >
          Contacts (2)
        </b>
      </div>
      {isFormPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFormPopup}
        >
          <Form onClose={closeFormPopup} />
        </PortalPopup>
      )}
    </>
  );
});

export default HeadContainer;
