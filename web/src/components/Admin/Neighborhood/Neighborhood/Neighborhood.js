import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_NEIGHBORHOOD_MUTATION = gql`
  mutation DeleteNeighborhoodMutation($id: BigInt!) {
    deleteNeighborhood(id: $id) {
      id
    }
  }
`

const Neighborhood = ({ neighborhood }) => {
  const [deleteNeighborhood] = useMutation(DELETE_NEIGHBORHOOD_MUTATION, {
    onCompleted: () => {
      toast.success('Neighborhood deleted')
      navigate(routes.adminNeighborhoods())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete neighborhood ' + id + '?')) {
      deleteNeighborhood({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Neighborhood {neighborhood.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{neighborhood.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{neighborhood.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditNeighborhood({ id: neighborhood.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(neighborhood.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Neighborhood
