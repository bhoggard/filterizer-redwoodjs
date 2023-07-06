import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/Neighborhood/NeighborhoodsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_NEIGHBORHOOD_MUTATION = gql`
  mutation DeleteNeighborhoodMutation($id: BigInt!) {
    deleteNeighborhood(id: $id) {
      id
    }
  }
`

const NeighborhoodsList = ({ neighborhoods }) => {
  const [deleteNeighborhood] = useMutation(DELETE_NEIGHBORHOOD_MUTATION, {
    onCompleted: () => {
      toast.success('Neighborhood deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete neighborhood ' + id + '?')) {
      deleteNeighborhood({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {neighborhoods.map((neighborhood) => (
            <tr key={neighborhood.id}>
              <td>{truncate(neighborhood.id)}</td>
              <td>{truncate(neighborhood.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminNeighborhood({ id: neighborhood.id })}
                    title={'Show neighborhood ' + neighborhood.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditNeighborhood({ id: neighborhood.id })}
                    title={'Edit neighborhood ' + neighborhood.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete neighborhood ' + neighborhood.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(neighborhood.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NeighborhoodsList
