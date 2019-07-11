//https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/
import { createContext } from "react";

const AudioContext = createContext({
  //audioId: 0,
  time: 0
});

export default AudioContext;
