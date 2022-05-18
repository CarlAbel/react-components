/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SectionLatestNews = (props) => {
  const styles = {
    section: css`
      border: solid 1px red;
      border-radius: 24px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 33%;
      margin: 20px;
    `,
    article: css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      padding: 10px;
      margin: 20px;

      border: solid 1px orange;
      border-radius: 24px;
      & h2 {
        font-size: 32px;
      }
      & p {
        font-size: 1.5em;
        font-weight: 500;
        color: #3a3a3a;
      }
    `,
    placeholderIMG: css`
      border-radius: 24px;
    `,
    container: css`
      padding: 30px;
    `,
  };

  const data = props.data;

  return (
    <section css={styles.section}>
      <h2>LATEST NEWS</h2>
      {data.map((section) => (
        <article css={styles.article} key={section.id}>
          <div css={styles.placeholderIMG}>
            <img src="#" alt="#" />
          </div>
          <div css={styles.container}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default SectionLatestNews;
