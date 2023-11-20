import { Link } from "react-router-dom"

const Navbar = () => {
  return (
  <>
    <div className="flex flex-row justify-evenly items-center text-lg font-medium mt-3 py-4 bg-indigo-300">
        <Link to="/">Home</Link>
        <Link to="/basket">Basket</Link>
    </div>
    <h1 className='text-4xl text-center font-semibold mt-2 py-4'>Hello Niyad</h1>
  </>
  )
}

export default Navbar