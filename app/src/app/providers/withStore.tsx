import { store } from "app/store"
import type { FC } from "react"
import { Provider } from "react-redux"

export const withStore = (WrappedComponent: FC) => () => {
    return (
        <Provider store={store}>
            <WrappedComponent />
        </Provider>
    )
}