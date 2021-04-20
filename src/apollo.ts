import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  split,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { API_URL } from "@/common/config";
import { createUploadLink } from "apollo-upload-client";

const cache = new InMemoryCache();

const httpLink = createUploadLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  console.log(headers);
  return {
    headers: {
      ...headers,
      token: token || "",
    },
  };
});

const link = ApolloLink.from([authLink, httpLink]);

export const defaultClient = new ApolloClient({
  link,
  cache,
});
