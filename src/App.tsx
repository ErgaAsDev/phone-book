import { Routes, Route } from "react-router-dom";
import ContactPageListviewLocof from "./pages/ContactPageListviewLocof";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactPageListviewLocof />} />
    </Routes>
  );
}
export default App;
