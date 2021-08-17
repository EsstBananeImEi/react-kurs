
import React, { createContext, Dispatch, ReactChildren, ReactElement, useContext, useReducer } from "react";
import BookModel from "./shared/BookModel";

export interface Store {
    shoppingCard: BookModel[]
}

export const initialState: Store = { shoppingCard: [] }

interface AddToShoppingCard {
    type: 'ADD_TO_CARD'
    book: BookModel
}

interface RemoveFromShoppingCard {
    type: 'REMOVE_FROM_CARD'
    book: BookModel
}

interface ClearCard {
    type: 'CLEAR_CARD'
}

export type Action = AddToShoppingCard | RemoveFromShoppingCard | ClearCard
export type DispatchAction = React.Dispatch<Action>

export function reducer(store: Store, action: Action): Store {
    switch (action.type) {
        case 'ADD_TO_CARD':
            return { ...store, shoppingCard: [...store.shoppingCard, action.book] }

        case 'REMOVE_FROM_CARD': {
            const index = store.shoppingCard.map(book_ => book_.id).indexOf(action.book.id)
            return { ...store, shoppingCard: store.shoppingCard.filter((book_, index_) => index !== index_) }
        }
        case 'CLEAR_CARD': {
            return { ...store, shoppingCard: [] }
        }
        default:
            return store
    }
}

interface StoreContextModel {
    store: Store;
    dispatch: Dispatch<Action>
}

const StoreContext = createContext({} as StoreContextModel)
export const useStore = (): StoreContextModel => useContext(StoreContext)

export function StoreProvider(props: { children: ReactElement }): ReactElement {
    const [store, dispatch] = useReducer(reducer, initialState)
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    );
}