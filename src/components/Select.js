export default function Select({select, setSelect}) {
  return (
    <div className="select-calc-div">
      <button className={"select-savings-button select-calc-button" + (select ===2 ? " highlight-button": "")} onClick={() => {setSelect(2)}}>Savings Calculator</button>
      <button className={"select-rent-button select-calc-button" + (select ===1 ? " highlight-button": "")} onClick={() => {setSelect(1)}}>Rent Calculator</button>
      <button className={"select-income-button select-calc-button" + (select ===0 ? " highlight-button": "")} onClick={() => {setSelect(0)}}>Income Calculator</button>
    </div>
  );
}
