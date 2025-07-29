import MenuItemShow from "./MenuItemShow";

const MenuItem = ({ res, cartItems, addItem, removeItem }) => {
  const title = res.title;
  return (
    <div className="restaurant__menu-category" key={title}>
      <div className="restaurant__menu-title">
        <p>
          {title} ({res.itemCards.length})
        </p>
      </div>
      <div className="restaurant__menu-items">
        {res.itemCards &&
          res.itemCards.map((r) => {
            return (
              <MenuItemShow
                r={r.card.info}
                cartItems={cartItems}
                addItem={addItem}
                removeItem={removeItem}
              ></MenuItemShow>
            );
          })}
      </div>
    </div>
  );
};

export default MenuItem;
