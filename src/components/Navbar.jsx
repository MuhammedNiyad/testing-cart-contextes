import { useContext } from "react"
import { Link } from "react-router-dom"
import { StoreContext } from "../context-&-reducer/StoreContext"

const Navbar = () => {
  const {products} = useContext(StoreContext)
  return (
  <>
    <div className="flex flex-row justify-evenly items-center text-lg font-medium mt-3 py-4 bg-indigo-300">
        <Link to="/">Home</Link>
        <Link to="/basket">
          Basket {products.length > 0 ? <span className="text-xs align-top bg-red-700 rounded-full text-white px-2 py-1 mx-1">{products.length} </span> : ''}
        </Link>
    </div>
    <h1 className='text-4xl text-center font-semibold mt-2 py-4'>Hello Customer</h1>
  </>
  )
}

export default Navbar