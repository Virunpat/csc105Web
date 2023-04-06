import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
    const {id} = useParams();

    return(
        <div>
            <p style={{fontWeight: "bold"}}>This Student ID of user is {id}</p>
        </div>
    );
};

export default Profile;
