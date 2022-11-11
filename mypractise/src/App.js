import { useState } from "react";
import "./App.css";
import RegComponent from "./components/regComponent";
import Trow from "./components/Trow";
// const Trow = () => (
//   <tr>
//     <td>1</td>
//     <td>Ashique</td>
//     <td>8129788504</td>
//   </tr>
// );

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const phone = e.target.phone.value;
          for (let i = 0; i <= data.length; i++) {
            if (data[i]?.ph === phone) {
              alert("ppne number alrady existed");
              return;
            }
          }
          setData([...data, { name, ph: phone }]);
        }}
      >
        <input type="text" name="name" placeholder="ex: Aashiqui"></input>
        <input type="text" name="phone" placeholder="1234567890"></input>
        <button type="submit">Add</button>
      </form>

      <RegComponent>
        {data.map((e, i) => (
          <Trow key={i} sl_no={i + 1} name={e.name} phone={e.ph} />
        ))}
      </RegComponent>
    </div>
  );
}

export default App;
