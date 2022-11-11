import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      console.log(res.data);
      setData(res.data);
    };
    fetchdata();
  }, []);
  const [data, setData] = useState([]);

  return (
    <div>
      {data.map((e) => (
        <p>
          {e.body} {e.email} {e.id} {e.name} {e.postId}
        </p>
      ))}
    </div>
  );
}

export default App;
