//Importing React and components
import { createRoot } from "react-dom/client";
import SearchParams from "./components/SearchParams";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./components/AdoptedPetContext";
import Details from "./components/Details";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
//Creating a main App, and importing all components on it.
const App = () => {
  // Whole hook, same as [adoptedpethook, setAdoptedPetHook]
  const adoptedPetHook = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPetHook}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <h1>Adopt Me!</h1>
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
//Rendering an App on DOM.
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
