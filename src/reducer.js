export const reducer = (state = initialValue, action) => {
  const { fruit } = action.payload;
  switch (action.type) {
    case "add":
      const addedCart = state.map((el) =>
        el.name === fruit.name ? { ...el, quantity: el.quantity + 1 } : el
      );
      return addedCart;
    case "remove":
      const removedCart = state.map((el) => {
        if (el.name === fruit.name && el.quantity > 0) {
          return { ...el, quantity: el.quantity - 1 };
        }
        return el;
      });
      return removedCart;
    default:
      return state;
  }
};
