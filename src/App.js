import "./App.css";
import Index from "./router";
import UserState from "./context/user/userState";
import AuthState from "./context/login/authState";
import ApiState from "./context/api/apiState";
import EpisodeState from "./context/episode/episodeState";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import client from "./config/gqlClient"

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserState>
        <AuthState>
          <ApiState>
            <EpisodeState>
              <Index />
            </EpisodeState>
          </ApiState>
        </AuthState>
      </UserState>
    </ApolloProvider>
  );
}

export default App;
