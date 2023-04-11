"use client"
import { useRouter } from "next/navigation"

const Ricks = ({ rick }) => {

  const router = useRouter()
  return (

    <div className="container p-4 row">
      {

        rick.map((r) => (

          <div className="col-md-4" key={r.id} onClick={() => {
            router.push(`/users/${r.id}`)
          }}>

            <img className = "img-fluid rounded-pill" src={r.image} alt="" />
            <div>{r.name}</div>
          </div>
        ))

      }

    </div>
  )
}

export default Ricks