import React from "react";
import useGithubStats from "react-github-user-stats";

const GitHub = () => {
  const { error, loading, userData } = useGithubStats("OmkarMane1997");
  if (loading) return <h1 className="text-center my-5">Loading data..</h1>;
  if (error) return <h1 className="text-center my-5">ERROR: {error}</h1>;
  if (!userData) return <h1 className="text-center my-5">Not found!</h1>;
  const {
    name,
    username,
    avatar_url,
    company,
    location,
    email,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    total_stars,
    total_forks,
    created_at,
    updated_at,
  } = userData;

  return (
    <div className="container">
      <h1 className="text-center my-5">Github</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="text-center">
              <img
                src={avatar_url}
                className="card-img-top img-fluid img-thumbnail w-50 h-50 mx-5 my-2"
                alt="omkar mane"
              ></img>
            </div>
            <div className="card-header">
              <div className="mx-2 text-center ">
                <a href='https://github.com/OmkarMane1997' target='blank' className="btn btn-success">GitHub Visit</a>
                {/* <NavLink to={'/'}></NavLink> */}
              </div>
            </div>
            <div className="card-body ">
              <h5 className="card-title mx-2 my-2">Name:- {name}</h5>
              <h6 className="card-subtitle mx-2 my-2 text-muted">Username:-{username}</h6>
              <div className="card-text">
                <p className="mx-2"><b>Company</b>:-{company}</p>
                <p className="mx-2"><b>Location</b>:-{location}</p>
                <p className="mx-2"><b>email</b>:-{email}</p>
                <p className="mx-2"><b>bio</b>:-{bio}</p>
                <p className="mx-2"><b>twitter_username</b>:-{twitter_username}</p>
                <p className="mx-2"><b>public_repos</b>:-{public_repos}</p>
                <p className="mx-2"><b>public_gists</b>:-{public_gists}</p>
                <p className="mx-2"><b>followers</b>:-{followers}</p>
                <p className="mx-2"><b>following</b>:-{following}</p>
                <p className="mx-2"><b>total_stars</b>:-{total_stars}</p>
                <p className="mx-2"><b>total_forks</b>:-{total_forks}</p>
              
                <p className="mx-2"><b>created_at</b>:-{ Date(created_at).toLocaleString()}</p>
                <p className="mx-2"><b>updated_at</b>:-{Date(updated_at).toLocaleString()}</p>
                
               
              </div>
            </div>
          </div>

          {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
        </div>
      </div>
    </div>
  );
};

export default GitHub;
