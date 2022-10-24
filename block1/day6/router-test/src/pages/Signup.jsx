import React from "react"
import { useLocation } from "react-router-dom"

export const  SignUp = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>dis is signup page</div>
    )
}