const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PIZZA_CART':
            const currentPizzaItems = !state.items[action.payload.id] 
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                    [action.payload.id] : {
                        items: currentPizzaItems,
                        totalPrice: getTotalPrice(currentPizzaItems)
                    }
            }
            const items = Object.values(newItems).map(obj => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);
            return {
                ...state, 
                items: newItems,
                itemsCount: allPizzas.length,
                totalPrice: totalPrice
            }
        default: return state;
    }
}

export default cart;