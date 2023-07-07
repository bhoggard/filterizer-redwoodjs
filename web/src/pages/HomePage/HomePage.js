import { MetaTags } from "@redwoodjs/web"

import NeighborhoodsCell from "src/components/NeighborhoodsCell/NeighborhoodsCell"

const HomePage = () => {
  return (
    <>
      <MetaTags description="An opinionated art calendar from Barry Hoggard and James Wagner" />

      <h1 className="font- py-3 text-2xl tracking-wide text-[#BD2408]">
        FILTERIZER
      </h1>

      <h2 className="py-1 text-xl text-[#FFA500]">Neighborhoods</h2>

      <NeighborhoodsCell />
    </>
  )
}

export default HomePage
