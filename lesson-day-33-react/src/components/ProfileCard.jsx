import React from "react";

const ProfileCard = ({imgUrl, imgName, profession, about, skills, email}) =>{
    return (
        <div>
            <div class="bg-white shadow-md rounded-lg overflow-hidden mx-2 my-4 p-6 text-center">
                <img src={imgUrl} alt={imgName} class="w-32 h-40 mx-auto rounded-full mb-4" />
                <h1 class="text-lg">{imgName}</h1>
                <p>{profession}</p>
                <div class="mt-4">
                    <p><strong>About me:</strong>{about}</p>
                    <p><strong>Skills:</strong>{skills}</p>
                    <p><strong>Contact:</strong><a href={email} class="text-gray-800 no-underline hover:underline">{email}</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard