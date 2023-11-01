import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import MainContainer from "../components/MainContainer";
import { css } from "@emotion/css";

const ContactPageListviewLocof: FunctionComponent = () => {
  return (
    <div
      className={css`
        position: relative;
        background-color: #f9f9f9;
        width: 100%;
        height: 1024px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      `}
    >
      <Navbar />
      <MainContainer />
    </div>
  );
};

export default ContactPageListviewLocof;
