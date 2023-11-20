const BasketProduct = ({ item }) => {
  return (
    <div>
        <img src={item.image} alt={item.name + "glasses"} />
        <div>
            <p>{item.name} </p>
            <p>{item.price} </p>
        </div>
    </div>
  )
}

export default BasketProduct