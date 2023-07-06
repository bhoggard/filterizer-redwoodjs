import { Link, routes } from '@redwoodjs/router'

import Neighborhoods from 'src/components/Admin/Neighborhood/Neighborhoods'

export const QUERY = gql`
  query FindNeighborhoods {
    neighborhoods {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No neighborhoods yet. '}
      <Link to={routes.adminNewNeighborhood()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ neighborhoods }) => {
  return <Neighborhoods neighborhoods={neighborhoods} />
}
