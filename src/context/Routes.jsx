import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./UserContext";

export const ProtectedRoute = ({children}) => {
    const navigation = useNavigate();

    const {user} = useAuthContext()

    useEffect(() => {
        if (!user) {
            return navigation('/login')
        }
    }, [])

    return children
}

export const UnProtectedRoute = ({children}) => {
    const navigation = useNavigate();

    const {user} = useAuthContext()

    useEffect(() => {
        if (user) {
            return navigation('/')
        }
    }, [])

    
    return children
}