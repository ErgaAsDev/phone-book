import { FunctionComponent } from "react";
import { css } from "@emotion/css";

type FormType = {
  onClose?: () => void;
};

const Form: FunctionComponent<FormType> = ({ onClose }) => {
  return (
    <div
      className={css`
        position: relative;
        border-radius: 12px;
        background-color: var(--primary-contrast);
        box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.03);
        border: 1px solid #eaeaea;
        box-sizing: border-box;
        width: 600px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 28px 30.000001907348633px;
        gap: var(--gap-mid);
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        text-align: left;
        font-size: 22px;
        color: #434343;
        font-family: var(--font-cairo);
      `}
    >
      <b
        className={css`
          align-self: stretch;
          position: relative;
          line-height: 34px;
          @media screen and (max-width: 1000px) {
            font-size: var(--font-size-lg);
          }
        `}
      >
        Create Contact
      </b>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          font-size: var(--font-size-lg);
          color: var(--color-dimgray);
          @media screen and (max-width: 420px) {
            flex-direction: column;
          }
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-xl);
            min-width: 300px;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                position: relative;
                @media screen and (max-width: 1000px) {
                  font-size: var(--font-size-sm);
                }
              `}
            >
              First Name
            </div>
            <input
              className={css`
                border: none;
                font-family: var(--font-cairo);
                font-size: var(--font-size-base);
                background-color: var(--color-whitesmoke-100);
                align-self: stretch;
                border-radius: var(--br-7xs);
                overflow: hidden;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: var(--padding-8xs) var(--padding-xs);
                &:focus {
                  outline: none;
                }
              `}
              placeholder="Enter name"
              type="text"
            />
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                position: relative;
                @media screen and (max-width: 1000px) {
                  font-size: var(--font-size-sm);
                }
              `}
            >
              Last Name
            </div>
            <input
              className={css`
                border: none;
                font-family: var(--font-cairo);
                font-size: var(--font-size-base);
                background-color: var(--color-whitesmoke-100);
                align-self: stretch;
                border-radius: var(--br-7xs);
                overflow: hidden;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: var(--padding-8xs) var(--padding-xs);
                &:focus {
                  outline: none;
                }
              `}
              placeholder="Enter name"
              type="text"
            />
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                position: relative;
                @media screen and (max-width: 1000px) {
                  font-size: var(--font-size-sm);
                }
              `}
            >
              <span className={css``}>Phone Number</span>
              <span
                className={css`
                  color: #ddd;
                `}
              >{` `}</span>
            </div>
            <input
              className={css`
                border: none;
                font-family: var(--font-cairo);
                font-size: var(--font-size-base);
                background-color: var(--color-whitesmoke-100);
                align-self: stretch;
                border-radius: var(--br-7xs);
                overflow: hidden;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: var(--padding-8xs) var(--padding-xs);
                outline: none;
              `}
              placeholder="Enter phone number"
              type="text"
            />
          </div>
        </div>
      </div>
      <button
        className={css`
          cursor: pointer;
          border: none;
          padding: var(--padding-8xs) 18px;
          background-color: var(--primer);
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          &:hover {
            background-color: #1e5b6f;
          }
          @media screen and (max-width: 1000px) {
            margin-right: auto;
          }
          @media screen and (max-width: 420px) {
            width: 100% !important;
          }
        `}
        type="submit"
      >
        <div
          className={css`
            position: relative;
            font-size: var(--font-size-lg);
            letter-spacing: 0.46px;
            font-family: var(--font-cairo);
            color: var(--primary-contrast);
            text-align: center;
          `}
        >
          Create
        </div>
      </button>
    </div>
  );
};

export default Form;
