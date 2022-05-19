/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SectionNewsDigest = (props) => {
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      padding: 10px;
      margin: 20px;

      border-bottom: solid 1px lightgrey;

      & h2 {
        font-size: 26px;
      }
      & p {
        font-size: 18px;
        font-weight: 500;
        color: #7a7a7a;
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
      <h2>NEWS DIGEST</h2>
      {data.map((section) => (
        <article css={styles.article} key={section.id}>
          <div css={styles.container}>
            <div css={styles.placeholderIMG}>
              <img src="#" alt="#" />
            </div>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default SectionNewsDigest;
