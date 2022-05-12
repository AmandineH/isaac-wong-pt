// apollo-config.js
import { onError } from "@apollo/client/link/error";

export default function ({ redirect, app, env }) {
  const httpEndpoint = `${env.apiUrl}/graphql`;

  const link = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (networkError && networkError.message.includes("401")) {
        app.$cookies.remove("apollo-token");
        // location.reload();
      }
      return forward(operation);
    }
  );

  return {
    link,
    httpEndpoint,
  };
}
