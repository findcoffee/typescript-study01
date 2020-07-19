import React from 'react';
import "./GithubProfileInfo.css";

type GithubProfileInfoProps = {
    name: string;
    thumbnail: string;
    bio: string;
    blog: string;
}

function GithubProfileInfo({ name, thumbnail, bio, blog} : GithubProfileInfoProps) {
    return (
        <div className="GithubProfileInfo">
            <div className="profile-head">
                <img src={thumbnail} alt="user thumbnail" ></img>
            <div>{name}</div>
            </div>
            <p>
                {bio}
                <span>{blog !== '' && <a href={blog}>blog</a>}</span>
            </p>
        </div>
    );
}

export default GithubProfileInfo;
