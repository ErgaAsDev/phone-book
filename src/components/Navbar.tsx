import { FunctionComponent, memo } from "react";
import { css } from "@emotion/css";

const Navbar: FunctionComponent = memo(() => {
  return (
    <div
      className={css`
        align-self: stretch;
        background-color: var(--primer);
        height: 117px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: var(--padding-12xl) var(--padding-5xl);
        box-sizing: border-box;
        text-align: left;
        font-size: var(--font-size-17xl);
        color: var(--primary-contrast);
        font-family: var(--font-cairo);
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-xl);
        `}
      >
        <img
          className={css`
            position: relative;
            width: 50px;
            height: 56.7px;
            object-fit: cover;
          `}
          alt=""
          src="/image-1@2x.png"
        />
        <b
          className={css`
            position: relative;
          `}
        >
          GoTo
        </b>
      </div>
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-end;
          font-size: var(--font-size-base);
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-xl);
          `}
        >
          <div
            className={css`
              position: relative;
              border-radius: 50%;
              background-color: var(--primary-contrast);
              width: 70px;
              height: 70px;
            `}
          />
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <b
              className={css`
                position: relative;
                display: inline-block;
                width: 76.5px;
              `}
            >
              Erlangga
            </b>
            <div
              className={css`
                position: relative;
                font-size: var(--font-size-sm);
                text-align: right;
                display: inline-block;
                width: 77.5px;
              `}
            >
              Super Admin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Navbar;
