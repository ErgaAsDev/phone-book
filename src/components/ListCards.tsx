import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import { Rating } from "@mui/material";
import { useState } from "react";
import { useAppContext } from "../context";
import { gql, useMutation } from "@apollo/client";
import { DELETE_CONTACT } from "../graphql/api";

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  phones: number;
}

const ListCards: FunctionComponent = () => {
  const {
    sortedContacts,
    selectedCardIndex,
    handleSelectedCard,
    ratings,
    handleRatingChange,
    handleDeleteContact,
    handleOpenFormEdit,
  } = useAppContext();

  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: column;
        gap: 18px;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        font-size: var(--font-size-5xl);
        color: var(--color-black);
        font-family: var(--font-cairo);
      `}
    >
      {sortedContacts.map((contact: any, index: number) => (
        <div
          onClick={() => handleSelectedCard(index)}
          key={contact.id}
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
              border: 2px solid green;
            }
            border: ${selectedCardIndex === index ? "2px solid green" : ""};
            @media screen and (max-width: 500px) {
              gap: 4px;
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
            <Rating
              name="simple-controlled"
              value={ratings[contact.id] || 0}
              max={1}
              onChange={(event, newValue) => {
                handleRatingChange(contact.id, newValue);
              }}
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
                  {contact.first_name[0]?.toUpperCase()}
                  {contact?.last_name[0]?.toUpperCase()}
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
                {contact.first_name} {contact.last_name}
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
                {contact.phones[0].number}
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
              onClick={() => handleDeleteContact(contact.id)}
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
                &:hover {
                  cursor: pointer;
                  opacity: 0.7;
                }
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
              onClick={() => handleOpenFormEdit(index)}
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
                &:hover {
                  cursor: pointer;
                  opacity: 0.7;
                }
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
      ))}
    </div>
  );
};

export default ListCards;
