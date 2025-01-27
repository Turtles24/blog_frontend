import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./pages/router";

import "./App.css";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { APIResponseError } from "endpoint-client";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof APIResponseError) {
        if (error.body.code === "invalid_token") {
          localStorage.removeItem("accessToken");
          window.location.href = "/";
        }
      }
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
