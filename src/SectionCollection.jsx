/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SectionCollection = (props) => {
  const styles = {
    section: css`
      display: flex;
      flex-direction: row;
    `,
    article: css`
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 10px;
      margin: 20px;
      width: 100%;
      border: solid 1px red;
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
  };

  const data = props.data;

  return (
    <section css={styles.section}>
      {data.map((section) => (
        <article css={styles.article} key={section.id}>
          <div css={styles.placeholderIMG}>
            <p>Collection #{section.collectionNumber}</p>
            <img src="#" alt="#" />
          </div>
          <div css={styles.placeholderIMG}>
            <img src="#" alt="#" />
          </div>
          <h2>{section.title}</h2>
          <p>By: {section.author}</p>
        </article>
      ))}
    </section>
  );
};

export default SectionCollection;
