import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client/core";
import { API_URL } from "@/common/config";
import { createUploadLink } from "apollo-upload-client";

const cache = new InMemoryCache();

const httpLink = createUploadLink({
  uri: API_URL,
});

const authLink = new ApolloLink((operation, forward) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  operation.setContext({
    headers: {
      token,
    },
  });
  return forward(operation);
});

const link = ApolloLink.from([authLink, httpLink]);

export const defaultClient = new ApolloClient({
  link,
  cache,
});
