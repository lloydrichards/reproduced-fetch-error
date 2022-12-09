import Link from "next/link";
import { graphql } from "../gql";
import { graphqlClient } from "../lib/graphql-client";

const GetAllPostsDocument = graphql(/* GraphQL */ `
  query GetAllPosts {
  
  getProducts {
    id
    lead
    notes
    name
    progress
    status
    version
  
}
  }
`);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getProducts } = await graphqlClient.request(GetAllPostsDocument, );

  return (
    <html>
      <head></head>
      <body>
        <nav>
          <ul>
            {getProducts?.map((edge) =>
              edge?.id ? (
                <li key={edge.id}>
                  {edge.name}
                </li>
              ) : null
            )}
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
