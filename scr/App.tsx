import { useTina } from "tinacms/dist/react";

export default function App(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <header>
        <h1>{data.page.title}</h1>
      </header>
      <main>
        <p>{data.page.body}</p>
      </main>
    </div>
  );
}

export const query = `
  query PageQuery($relativePath: String!) {
    page(relativePath: $relativePath) {
      title
      body
    }
  }
`;

export const variables = {
  relativePath: "home.json",
};

export const data = {};
