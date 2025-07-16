import { useTina } from "tinacms/dist/react";

export default function App(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{data.page.title}</h1>
      <p>{data.page.body}</p>
    </div>
  );
}

// 🔁 Estes exports SÃO OBRIGATÓRIOS!
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
