import { BrowserRouter,Routes,Route} from "react-router-dom"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { Dashboard } from "./pages/dashboard"
import { RecoilRoot } from "recoil"
import { SendMoney } from "./pages/Sendmoney"

function App() {

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>
  )
}

export default App
