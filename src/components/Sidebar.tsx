import { FunctionComponent, memo, useEffect } from "react";
import { css, keyframes } from "@emotion/css";

const animationFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  `;

const Sidebar: FunctionComponent = memo(() => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className={css`
        background-color: var(--primary-contrast);
        box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.1);
        width: 370px;
        height: 907px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--gap-mid);
        text-align: left;
        font-size: var(--font-size-5xl);
        color: var(--color-gray-100);
        font-family: var(--font-cairo);
        @media screen and (max-width: 960px) {
          display: none;
        }
      `}
    >
      <img
        className={css`
          align-self: stretch;
          position: relative;
          max-width: 100%;
          overflow: hidden;
          height: 215.1px;
          flex-shrink: 0;
        `}
        alt=""
        src="/vector5.svg"
      />
      <div
        className={css`
          height: 444.8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0px 0px var(--padding-21xl);
          box-sizing: border-box;
          gap: var(--gap-3xs);
          opacity: 0;
          &.animate {
            animation: 1s ease-in-out 0s 1 normal forwards ${animationFadeIn};
          }
        `}
        data-animate-on-scroll
      >
        <div
          className={css`
            border-radius: var(--br-46xl);
            background-color: var(--primer);
            width: 130px;
            height: 130px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            color: var(--primary-contrast);
            @media screen and (max-width: 1000px) {
              width: 100px;
              height: 100px;
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
            font-size: var(--font-size-11xl);
            font-weight: 600;
            @media screen and (max-width: 1000px) {
              font-size: var(--font-size-5xl);
            }
          `}
        >
          Angela Moss
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: var(--gap-3xs);
          `}
        >
          <img
            className={css`
              position: relative;
              width: 40px;
              height: 35.3px;
            `}
            alt=""
            src="/vector6.svg"
          />
          <div
            className={css`
              position: relative;
              font-weight: 300;
              @media screen and (max-width: 1000px) {
                font-size: var(--font-size-base);
              }
            `}
          >
            +62 81390367895
          </div>
        </div>
      </div>
      <img
        className={css`
          align-self: stretch;
          position: relative;
          max-width: 100%;
          overflow: hidden;
          height: 214.6px;
          flex-shrink: 0;
        `}
        alt=""
        src="/vector7.svg"
      />
    </div>
  );
});

export default Sidebar;
