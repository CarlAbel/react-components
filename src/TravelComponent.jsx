/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const TravelComponent = ({ sections, title }) => {
  const styles = {
    header: css`
      padding: 10px;
    `,
  }

  return (
    <div className="TravelComponent">
      <span>{tag}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default TravelComponent
