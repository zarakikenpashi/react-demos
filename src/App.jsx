import Accordion from "./Accordion"
import ToggleColor from "./components/ToggleColor"

const App = () => {
  return (
    <Layout>
      {/* <ToggleColor /> */}
      <Accordion />
    </Layout>
  )
}

const Layout = ({children}) => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      {children}
    </div>
  )
}

export default App