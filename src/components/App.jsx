import React from "react";

import Header from "./Header";
import MainSection from "./MainSection";
import { reducer } from "../stores/reducer";
import { TodoProvider } from "../TodoProvider";

const initialState = {
  todos: [
    {
      text: "React Hooks",
      completed: false,
      id: 24320,
    },
    {
      text: "Orale ",
      completed: false,
      id: 1212,
    },
    {
      text: "Viva",
      completed: true,
      id: 321,
    },
    {
      text: "Completed",
      completed: false,
      id: 21321,
    },
    {
      text: "Context",
      completed: true,
      id: 1,
    },
  ],
  visibilityFilter: "All",
};
const App = () => (
  <TodoProvider initialState={initialState} reducer={reducer}>
    <div>
      <Header />
      <MainSection />
    </div>
  </TodoProvider>
);

export default App;
