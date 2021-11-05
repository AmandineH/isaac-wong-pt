import gql from "graphql-tag";

export const GET_ARTICLES = gql`
  query GetArticles(
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
