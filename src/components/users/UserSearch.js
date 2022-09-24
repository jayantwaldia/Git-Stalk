import { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);

  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") setAlert("Please Enter Something", "error");
    else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
    }
  };

  return (
    <div className="mx-auto w-[80%] items-center font-sgRegular md:w-[50%] grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
      <div className="col-span-2 h-[150px]">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-200 input input-lg text-black"
                placeholder="github.com/name..."
                value={text}
                onChange={handleChange}
              />
              <button className="absolute top-0 right-0 w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="align-center">
          <button
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
