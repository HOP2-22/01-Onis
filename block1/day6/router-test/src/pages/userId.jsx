import react from "react";
import { useParams } from "react-router-dom";
import './userId.css'

export const UserId = () => {
    const {userId} = useParams();
    console.log(userId)
    return <div>User Id is "{userId}" </div>
}