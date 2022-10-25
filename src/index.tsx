import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import theme from "./theme";
import Fonts from './Fonts'

import './index.css'

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <ChakraProvider theme={theme}>
      <Fonts/>
      <App />
    </ChakraProvider>
);
