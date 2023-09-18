import { createContext, useContext } from "react";

export type TUsernameContext = {
    username: string|number,
}
export const UsernameContext = createContext<TUsernameContext>({
    username: '',
})
export const useUsernameContext = () => useContext(UsernameContext)