export default function Result({ amount, select, setSelect }) {
  const { mIncome, rent, rate, savings } = amount;
  return (
    <div className="result-section">
      <h4>Result:</h4>
      {select === 0 ? (
        <span className="result-text">
          To conveniently afford this yearly rent, your monthly income should be
          at least <span className="result-amount">₦{mIncome},</span> and you
          should be saving at least{" "}
          <span className="result-amount">₦{savings}</span> each month towards
          your rent.
        </span>
      ) : select === 1 ? (
        <span className="result-text">
          With your current monthly income, you can conveniently afford to rent
          a house which costs up to{" "}
          <span className="result-amount">₦{rent}, </span>
          if you save up to <span className="result-amount">
            ₦{savings}
          </span>{" "}
          each month towards your rent.
        </span>
      ) : select === 2 ? (
        <span className="result-text">
          To conveniently afford this yearly rent,{" "}
          <span className="result-amount">{rate}%</span> of your income should
          be saved towards your rent each month, saving at least{" "}
          <span className="result-amount">₦{savings}</span> each month.
        </span>
      ) : null}
      {select === 0 ? (
        <div className="suggest-results">
          <button
            onClick={() => {
              setSelect(1);
            }}
          >
            Find out the rent that suits your budget
          </button>
          <button
            onClick={() => {
              setSelect(2);
            }}
          >
            At what rate should you be saving for your rent
          </button>
        </div>
      ) : select === 1 ? (
        <div className="suggest-results">
          <button
            onClick={() => {
              setSelect(0);
            }}
          >
            What's a convenient income to pay rent
          </button>
          <button
            onClick={() => {
              setSelect(2);
            }}
          >
            At what rate should you be saving for your rent
          </button>
        </div>
      ) : select === 2 ? (
        <div className="suggest-results">
          <button
            onClick={() => {
              setSelect(1);
            }}
          >
            Find out the rent that suits your budget
          </button>
          <button
            onClick={() => {
              setSelect(0);
            }}
          >
            Calculate the income you need to pay your rent
          </button>
        </div>
      ) : null}
    </div>
  );
}
