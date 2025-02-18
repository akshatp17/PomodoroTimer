import Header from "./components/Header"
import Timer from "./components/Timer"

function App() {

  return (
    <>
      <div className="root flex flex-col h-screen gap-20">
        <Header />
        <div className="flex grow">
          <Timer />
        </div>
      </div>
    </>
  )
}

export default App
