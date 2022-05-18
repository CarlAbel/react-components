/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const TravelComponent = (props) => {
  const styles = {
    article: css`
      margin: 10px;
      width: 200px;
      border-radius: 24px;
      background-color: red;
      & span {
        padding: 30px;
      }
      & h2 {
        padding: 1em;
      }
      & p {
        padding: 2em;
      }
    `,
  };

  const data = props.data;

  return (
    <section>
      {data.map((section) => (
        <article css={styles.article} key={section.id}>
          <span>{section.tag}</span>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </article>
      ))}
    </section>
  );
};

export default TravelComponent;
