export const schema = gql`
  type Neighborhood {
    id: BigInt!
    name: String!
  }

  type Query {
    neighborhoods: [Neighborhood!]! @requireAuth
    neighborhood(id: BigInt!): Neighborhood @requireAuth
  }

  input CreateNeighborhoodInput {
    name: String!
  }

  input UpdateNeighborhoodInput {
    name: String
  }

  type Mutation {
    createNeighborhood(input: CreateNeighborhoodInput!): Neighborhood!
      @requireAuth
    updateNeighborhood(
      id: BigInt!
      input: UpdateNeighborhoodInput!
    ): Neighborhood! @requireAuth
    deleteNeighborhood(id: BigInt!): Neighborhood! @requireAuth
  }
`
