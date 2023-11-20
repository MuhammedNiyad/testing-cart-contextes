import { useContext } from "react"
import { StoreContext } from "../context-&-reducer/StoreContext"

const BasketProduct = ({ item }) => {
const { removeFromBasket } = useContext(StoreContext)
  const handleRemove = () => {
        removeFromBasket(item)
  }

  return (
    <div className="flex flex-row items-center gap-8 px-10">
        <img src={item.image} alt={item.name + "glasses"} className="w-40" />
        <div className="w-1/2 px-10">
            <p className="text-xl font-medium">{item.name} </p>
            <p className="text-lg">${item.price} </p>
        </div>
        <div className="w-1/2 flex justify-end">
      <button className="bg-gray-500 text-white text-base  font-medium rounded-lg p-4 hover:bg-red-700" onClick={handleRemove}>Remove</button>
        </div>
    </div>
  )
}

export default BasketProduct