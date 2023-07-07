export const QUERY = gql`
  query NeighborhoodsQuery {
    neighborhoods {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: "red" }}>Error: {error?.message}</div>
)

export const Success = ({ neighborhoods }) => {
  return (
    <>
      {neighborhoods.map((item) => {
        return (
          <h3 className="py-1 text-lg font-medium text-[#BD2408]" key={item.id}>
            {item.name}
          </h3>
        )
      })}
    </>
  )
}
