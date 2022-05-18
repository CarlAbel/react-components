/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const LeisureComponent = (props) => {
  const styles = {
    article: css`
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 30px;
      padding: 30px;
      width: 66%;
      height: 500px;

      border: solid 1px red;
      border-radius: 24px;

      & span {
        margin-left: 300px;
        text-transform: capitalize;
        letter-spacing: 2px;
        font-size: 18px;
        font-weight: bold;
        padding: 8px;

        background-color: darkblue;
        border: solid 1px darkblue;
        border-radius: 30px;
        color: white;
      }
      & h2 {
        font-size: 56px;
      }
      & p {
        font-size: 1.5em;
        font-weight: 500;
        color: #3a3a3a;
      }
    `,
    placeholderIMG: css`
      border: solid 1px red;
      border-radius: 24px;

      justify-content: center;
      align-items: center;
      text-align: center;

      height: 90%;
      width: 40%;
    `,
    container: css`
      padding: 30px;
      width: 60%;
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

export default LeisureComponent;
