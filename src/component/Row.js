import arr from "./dataSet";

const Row = (props) => {
  let count = 1;
  return (
    <>
      {arr.map((f) => {
        return (
          <>
            <tr>
              <td>{count++}</td>
              <td>{f.id}</td>
              <td>{f.name}</td>
              <td>{f.username}</td>
              <td>{f.email}</td>
              <td>{f.email}</td>
              <td>{f.address.street}</td>
              <td>{f.address.city}</td>
              <td>{f.phone}</td>
            </tr>
          </>
        );
      })}
    </>
  );
};

export default Row;
