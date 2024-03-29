import React from "react";
import GithubUsernameForm from "../components/GithubUsernameForm";
import GithubProfileInfo from "../components/GithubProfileInfo";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { getUserProfileAsync } from "../modules/github";

function GithubProfileLoader() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.github.userProfile
  );
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    // dispatch(getUserProfileThunk(username));
    dispatch(getUserProfileAsync.request(username));
  };

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: "center" }}>loading...</p>}
      {error && <p style={{ textAlign: "center" }}>Error !!!</p>}
      {data && (
        <GithubProfileInfo
          bio={data.bio}
          blog={data.blog}
          name={data.name}
          thumbnail={data.avatar_url}
        />
      )}
    </>
  );
}

export default GithubProfileLoader;
