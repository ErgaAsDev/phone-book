import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import createGlobalStyle from "./global";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AppProvider from "./context";

// 1. Set up the Apollo Client
const client = new ApolloClient({
  uri: "https://wpe-hiring.tokopedia.net/graphql",
  cache: new InMemoryCache(),
});

const container = document.getElementById("root");
const root = createRoot(container!);
createGlobalStyle();

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AppProvider>
        <App />
      </AppProvider>
    </ApolloProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
