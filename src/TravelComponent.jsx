/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const TravelComponent = (props) => {
  const styles = {
    article: css`
      margin: 30px;

      width: 33%;
      height: 500px;

      border: solid 1px red;
      border-radius: 24px;

      & span {
        text-transform: capitalize;
        font-size: 18px;
        font-weight: bold;
        color: darkblue;
        letter-spacing: 2px;
      }
      & h2 {
        margin: 12px 0px 12px 0px;
        font-size: 28px;
      }
      & p {
        margin: 0px;
        font-size: 16px;
        font-weight: 500;
        color: #4b4b4b;
      }
    `,
    placeholderIMG: css`
      border: solid 1px red;
      border-radius: 24px 24px 0px 0px;

      justify-content: center;
      align-items: center;
      text-align: center;

      height: 50%;
      width: 100%;
    `,
    container: css`
      padding: 30px;
    `,
  };

  const data = props.data;

  return (
    <section>
      {data.map((section) => (
        <article css={styles.article} key={section.id}>
          <div css={styles.placeholderIMG}>
            <img src="#" alt="#" />
          </div>
          <div css={styles.container}>
            <span>{section.tag}</span>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default TravelComponent;
