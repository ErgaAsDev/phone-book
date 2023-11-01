import { FunctionComponent, memo } from "react";
import { css } from "@emotion/css";

const ListCards: FunctionComponent = memo(() => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        font-size: var(--font-size-5xl);
        color: var(--color-black);
        font-family: var(--font-cairo);
      `}
    >
      <div
        className={css`
          align-self: stretch;
          border-radius: var(--br-8xs);
          background-color: var(--primary-contrast);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: var(--padding-7xs) 0px;
          gap: var(--gap-11xl);
          &:hover {
            cursor: pointer;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding: 0px 0px 0px var(--padding-5xs);
            gap: var(--gap-sm);
          `}
        >
          <img
            className={css`
              position: relative;
              width: 31px;
              height: 30px;
              @media screen and (max-width: 960px) {
                margin-left: 12px;
              }
              @media screen and (max-width: 620px) {
                width: 20px;
                height: 20px;
              }
            `}
            alt=""
            src="/vector2.svg"
          />
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-xl);
              @media screen and (max-width: 620px) {
                gap: var(--gap-xs);
              }
            `}
          >
            <div
              className={css`
                border-radius: var(--br-xl);
                background-color: var(--primer);
                width: 40px;
                height: 40px;
                overflow: hidden;
                flex-shrink: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: var(--font-size-base);
                color: var(--primary-contrast);
                @media screen and (max-width: 620px) {
                  width: 30px;
                  height: 30px;
                }
              `}
            >
              <b
                className={css`
                  position: relative;
                `}
              >
                AM
              </b>
            </div>
            <div
              className={css`
                position: relative;
                line-height: 14px;
                font-weight: 600;
                @media screen and (max-width: 1200px) {
                  font-size: var(--font-size-lg);
                }
                @media screen and (max-width: 620px) {
                  font-size: var(--font-size-sm);
                }
              `}
            >
              Angela Moss
            </div>
            <div
              className={css`
                position: relative;
                @media screen and (max-width: 1200px) {
                  font-size: var(--font-size-lg);
                }
                @media screen and (max-width: 620px) {
                  font-size: var(--font-size-sm);
                }
              `}
            >
              +621234567890
            </div>
          </div>
        </div>
        <div
          className={css`
            flex: 1;
            height: 37px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            padding: 0px var(--padding-xs) 0px 0px;
            box-sizing: border-box;
            gap: var(--gap-xl);
            font-size: var(--font-size-xl);
            color: var(--primary-contrast);
            @media screen and (max-width: 620px) {
              height: 25px;
            }
          `}
        >
          <div
            className={css`
              align-self: stretch;
              border-radius: var(--br-3xs);
              background-color: var(--color-tomato);
              overflow: hidden;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 0px var(--padding-xs);
              gap: var(--gap-3xs);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 16px;
                height: 18px;
              `}
              alt=""
              src="/vector3.svg"
            />
            <b
              className={css`
                position: relative;
                @media screen and (max-width: 960px) {
                  display: none;
                }
              `}
            >
              Delete
            </b>
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: var(--br-3xs);
              background-color: var(--color-goldenrod);
              overflow: hidden;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 0px var(--padding-xs);
              gap: var(--gap-3xs);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 18px;
                height: 18px;
              `}
              alt=""
              src="/vector4.svg"
            />
            <b
              className={css`
                position: relative;
                @media screen and (max-width: 960px) {
                  display: none;
                }
              `}
            >
              Edit
            </b>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ListCards;
