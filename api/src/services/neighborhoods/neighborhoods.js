import { db } from 'src/lib/db'

export const neighborhoods = () => {
  return db.neighborhood.findMany()
}

export const neighborhood = ({ id }) => {
  return db.neighborhood.findUnique({
    where: { id },
  })
}

export const createNeighborhood = ({ input }) => {
  return db.neighborhood.create({
    data: input,
  })
}

export const updateNeighborhood = ({ id, input }) => {
  return db.neighborhood.update({
    data: input,
    where: { id },
  })
}

export const deleteNeighborhood = ({ id }) => {
  return db.neighborhood.delete({
    where: { id },
  })
}
