import Landing from "./routes/landing/landing.routes";

import { AppContainer } from "./App.styles";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import { motion } from "framer-motion";

function App() {
  return (
    <AppContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        duration: 2,
      }}
    >
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
