import data from "./dataSet";
export const City = (props) => {
  return (
    <select
      id="type"
      name="cars"
      onChange={(e) => props.city(e.target.value)}
    >
        {data.map((e)=>
            (
            <>
            <option value={e.address.city}>{e.address.city}</option>
            </>))}    
        </select>
  );
};
