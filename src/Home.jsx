/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import useState from "react"
import TravelComponent from "./TravelComponent"

const Home = () => {
  const [sections, setSections] = useState(null)
  fetch("http://localhost:3001/sections")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setSections(data.sections)
    })
  return (
    <div className="Home">
      <TravelComponent />
    </div>
  )
}

export default Home
