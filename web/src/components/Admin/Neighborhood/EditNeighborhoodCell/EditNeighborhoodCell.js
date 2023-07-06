import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NeighborhoodForm from 'src/components/Admin/Neighborhood/NeighborhoodForm'

export const QUERY = gql`
  query EditNeighborhoodById($id: BigInt!) {
    neighborhood: neighborhood(id: $id) {
      id
      name
    }
  }
`
const UPDATE_NEIGHBORHOOD_MUTATION = gql`
  mutation UpdateNeighborhoodMutation(
    $id: BigInt!
    $input: UpdateNeighborhoodInput!
  ) {
    updateNeighborhood(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ neighborhood }) => {
  const [updateNeighborhood, { loading, error }] = useMutation(
    UPDATE_NEIGHBORHOOD_MUTATION,
    {
      onCompleted: () => {
        toast.success('Neighborhood updated')
        navigate(routes.adminNeighborhoods())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateNeighborhood({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Neighborhood {neighborhood?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <NeighborhoodForm
          neighborhood={neighborhood}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
