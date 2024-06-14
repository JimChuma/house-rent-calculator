export default function Input({
  symbol,
  field,
  memo,
  amount,
  setAmount,
  category,
}) {
  function handleChange(event) {
    const str = event.target.value;
    if (category === "rate") {
      if (str !== "" && str <= 100) {
        const value = str.replace(/\D/g, "");
        const number = Number(value).toLocaleString("en-US");
        setAmount({ ...amount, [category]: number });
      } else if (str > 100) {
        setAmount({ ...amount });
      } else if (str === "") {
        setAmount({ ...amount, [category]: "" });
      } else {
        const value = str.replace(/\D/g, "");
        const number = Number(value).toLocaleString("en-US");
        setAmount({ ...amount, [category]: number });
      }
    } else {
      if (str !== "") {
        const value = str.replace(/\D/g, "");
        const number = Number(value).toLocaleString("en-US");
        setAmount({ ...amount, [category]: number });
      } else {
        setAmount({ ...amount, [category]: "" });
      }
    }
  }
  return (
    <div className="input-field">
      <span>{field}</span>
      {memo ? <span className="memo">{memo}</span> : null}
      <label>
        <span>{symbol}</span>
        <input type="text" value={amount[category]} onChange={handleChange} />
      </label>
    </div>
  );
}
