import React, { useEffect, useState } from "react";

const App = () => {
  const apiUrl = "https://randomuser.me/api/?page=1&results=5&seed=abc"; // Fetching 5 users
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data.results);
        setUserList(data.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div className="flex justify-center items-center  flex-col">
      {userList.length > 0 ? (
        userList.map((user, index) => (
          <div
            key={index}
            className="w-[20rem] h-[10rem] mx-4 my-8 bg-white shadow-md rounded-md overflow-hidden hover:scale-105 "
          >
            <div className="flex ">
              <img
                className="w-[8rem] h-48 object-cover "
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />
              <div className="p-4">
                <p className="text-xl font-semibold">
                  {user.name.first} {user.name.last}
                </p>
                <p className="text-gray-600">{user.gender}</p>
                <p className="text-gray-700">{user.phone}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading ....</p>
      )}
    </div>
  );
};

export default App;
