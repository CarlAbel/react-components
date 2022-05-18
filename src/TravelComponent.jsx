/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ListItem = (props) => {
  return <li>{props.value}</li>;
};

const TravelComponent = (props) => {
  const data = props.data;
  const listItems = data.map(() => (
    <ListItem key={data.toString()} value={data} />
  ));
  return (
    <section>
      {data.map((section) => (
        <article key={section.id}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </article>
      ))}
    </section>
  );
};

export default TravelComponent;
