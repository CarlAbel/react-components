/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SectionSquared = (props) => {
  const styles = {
    section: css`
      display: flex;
      flex-direction: row;
    `,
    article: css`
      display: flex;
      flex-direction: column;
      justify-content: center;

      background-color: #7e8fee;
      padding: 10px;
      margin: 20px;
      width: 100%;
      border: solid 1px red;
      border-radius: 24px;
      & h2 {
        margin: 0%;
        margin-top: 30px;
        font-size: 26px;
      }
      & p {
        font-size: 20px;
        font-weight: 500;
        color: #3a3a3a;
      }
    `,
    placeholderIMG: css`
      margin-left: 200px;
      border-radius: 24px;
    `,
  };

  const data = props.data;

  return (
    <section css={styles.section}>
      {data.map((section) => (
        <article css={styles.article} key={section.id}>
          <div css={styles.placeholderIMG}>
            <img src="#" alt="#" />
          </div>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </article>
      ))}
    </section>
  );
};

export default SectionSquared;
