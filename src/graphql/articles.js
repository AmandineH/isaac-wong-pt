import gql from "graphql-tag";
import { setHeaderParams } from "@/plugins/apollo.js";

export const GET_ARTICLES = gql`
  query Articles(
    $first: Int = 20
    $offset: Int = 0
    $orderBy: [ArticlesOrderBy!] = [PUBLICATION_DATE_DESC]
    $filter: ArticlesFilter
  ) {
    articles(
      first: $first
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      pageInfo {
        hasNextPage
      }
      nodes {
        articleId
        title
        lang
        thumbnail
        content
        publicationDate
        author
        description
        tags
        editor
        published
        createdDate
        updatedDate
      }
    }
  }
`;

export async function getArticles(client, variables = {}, host) {
  try {
    const { filter, first, offset } = variables;
    const res = await client.query({
      query: GET_ARTICLES,
      variables: {
        filter: {
          published: { equalTo: true },
          ...filter,
        },
        first: first,
        offset: offset,
      },
      ...setHeaderParams("USER", { origin: host }),
    });
    if (res) {
      return {
        articles: res.data.articles.nodes,
        hasNextPage: res.data.articles.pageInfo.hasNextPage,
      };
    }
  } catch (e) {}
}
