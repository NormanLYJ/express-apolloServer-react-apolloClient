import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUsers";
import PostUser from "./Components/PostUser";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    // standard way to handle error
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const httpLink = new HttpLink({ uri: "http://localhost:6969/graphql" })

//requries an error link and http link
const link = from([errorLink,httpLink]);

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache: cache,
  link: link, // link to the backend server
});

function App() {
  return (
    <ApolloProvider client={client}>
      <PostUser />
      <GetUsers />
    </ApolloProvider>
  );
}

export default App;
