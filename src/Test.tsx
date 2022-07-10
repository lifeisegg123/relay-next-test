import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { TestQuery } from "./queries/__generated__/TestQuery.graphql";

const query = graphql`
  query TestQuery($first: Int!) {
    allFilms(first: $first) {
      films {
        title
      }
    }
  }
`;

const Test = () => {
  const data = useLazyLoadQuery<TestQuery>(query, { first: 1 });
  return <div>{data.allFilms?.films?.[0]?.title}</div>;
};

export default Test;
