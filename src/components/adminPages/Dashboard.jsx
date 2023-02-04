import { BrowserRouter, Route, Routes, } from "react-router-dom";
import AdminNav from "./adminNav";
import contactUsadmin from "./contactUsadmin"

function Dashborad() {

  return (<>
    <AdminNav/>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/Dashboard" element={<Dashborad />}></Route>
      <Route path="/contactUsadmin" element={<contactUsadmin />}></Route>
    </Routes>
  </BrowserRouter> */}
  </>
  );
}

export default Dashborad;
