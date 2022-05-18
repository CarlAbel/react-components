/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const TravelComponent = (props) => {
  const styles = {
    article: css`
      margin: 30px;
      padding: 30px;
      width: 33%;
      height: 500px;

      border: solid 1px red;
      border-radius: 24px;

      & span {
        text-transform: capitalize;
        font-size: 26px;
        font-weight: bold;
        color: darkblue;
      }
      & h2 {
        font-size: 32px;
      }
      & p {
        font-size: 1.5em;
        font-weight: 500;
        color: #3a3a3a;
      }
    `,
  };

  const data = props.data;

  return (
    <section>
      {data.map((section) => (
        <article css={styles.article} key={section.id}>
          <img src="#" alt="#" />
          <span>{section.tag}</span>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </article>
      ))}
    </section>
  );
};

export default TravelComponent;
