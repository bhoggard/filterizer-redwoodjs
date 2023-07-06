import Neighborhood from 'src/components/Admin/Neighborhood/Neighborhood'

export const QUERY = gql`
  query FindNeighborhoodById($id: BigInt!) {
    neighborhood: neighborhood(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Neighborhood not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ neighborhood }) => {
  return <Neighborhood neighborhood={neighborhood} />
}
