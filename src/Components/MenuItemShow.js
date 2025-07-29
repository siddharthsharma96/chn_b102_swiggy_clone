const MenuItemShow = ({ r, addItem, removeItem, cartItems }) => {
  const isItemInCart = cartItems.some((item) => item.id === r.id);
  const quantityInCart = isItemInCart
    ? cartItems.find((item) => item.id === r.id).quantity
    : 0;
  console.log(cartItems);

  return (
    <div key={r.name} className="restaurant__menu-item-card">
      <div className="restaurant__menu-item-info">
        <p className="restaurant__menu-item-name">{r.name}</p>
        <p className="restaurant__menu-item-price">
          ₹ {r.defaultPrice / 100 || r.price / 100}
        </p>
        <p className="restaurant__menu-item-desc">{r.description}</p>
      </div>
      <div className="restaurant__menu-item-action">
        {isItemInCart ? (
          <div className="restaurant__menu-item-quantity-controls">
            <button
              onClick={() => {
                removeItem(r);
              }}
            >
              -
            </button>
            <span>{quantityInCart}</span>
            <button onClick={() => addItem(r)}>+</button>
          </div>
        ) : (
          <button
            className="restaurant__menu-item-add-btn"
            onClick={() => addItem(r)}
          >
            Add
          </button>
        )}

        <img src={`/images/${r.imgName}`}></img>
      </div>
    </div>
  );
};

export default MenuItemShow;
