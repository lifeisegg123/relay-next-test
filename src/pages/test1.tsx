import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { graphql } from "relay-runtime";
import { test1Query } from "src/queries/__generated__/test1Query.graphql";
import { createServerEnvironment, getClientEnvironment } from "src/utils/relay";

const query = graphql`
  query test1Query($first: Int!) {
    allFilms(first: $first) {
      films {
        title
      }
    }
  }
`;

const Test1 = ({ preloadedQuery }: RelayProps<{}, test1Query>) => {
  const data = usePreloadedQuery(query, preloadedQuery);
  return <div>{data.allFilms?.films?.[0]?.title}</div>;
};

export default withRelay(Test1, query, {
  createClientEnvironment: () => getClientEnvironment()!,
  createServerEnvironment: async () => createServerEnvironment(),
  variablesFromContext: () => ({ first: 1 }),
});
