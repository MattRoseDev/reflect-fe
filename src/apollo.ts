import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { API_URL } from "@/common/config";

export const defaultClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
