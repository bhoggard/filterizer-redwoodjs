import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NeighborhoodForm from 'src/components/Admin/Neighborhood/NeighborhoodForm'

const CREATE_NEIGHBORHOOD_MUTATION = gql`
  mutation CreateNeighborhoodMutation($input: CreateNeighborhoodInput!) {
    createNeighborhood(input: $input) {
      id
    }
  }
`

const NewNeighborhood = () => {
  const [createNeighborhood, { loading, error }] = useMutation(
    CREATE_NEIGHBORHOOD_MUTATION,
    {
      onCompleted: () => {
        toast.success('Neighborhood created')
        navigate(routes.adminNeighborhoods())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createNeighborhood({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Neighborhood</h2>
      </header>
      <div className="rw-segment-main">
        <NeighborhoodForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewNeighborhood
