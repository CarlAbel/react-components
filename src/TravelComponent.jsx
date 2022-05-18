/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const TravelComponent = ({ sections, title }) => {
  const styles = {
    h1: css`
      padding: 10px;
    `,
  }

  return (
    <div className="TravelComponent">
      <span>{}</span>
      {sections.map((section) => (
        <div key={section}>
          <h2 css={styles.h1}>{section.header.title}</h2>
          <p>{}</p>
        </div>
      ))}
    </div>
  )
}

export default TravelComponent
