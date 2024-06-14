export default function Button({ amount, setAmount, select }) {
  const { rent, rate, mIncome } = amount;
  function submitForm() {
    if (select === 0) {
      const houseRent = rent.replace(/\D/g, "");
      const percentRate = rate.replace(/\D/g, "");
      const monthlyIncomeValue = (100 * houseRent) / (percentRate * 12);
      const formatIncome =
        monthlyIncomeValue > 10000
          ? Math.ceil(Number(monthlyIncomeValue / 10000)) * 10000
          : Math.ceil(Number(monthlyIncomeValue));

      const monthlyIncome = formatIncome.toLocaleString("en-US");
      const monthlySavingsValue = (monthlyIncomeValue * percentRate) / 100;
      const formatSavings =
        monthlySavingsValue > 10000
          ? Math.ceil(Number(monthlySavingsValue / 1000)) * 1000
          : Math.ceil(Number(monthlySavingsValue));
      const monthlySavings = Number(formatSavings).toLocaleString("en-US");
      setAmount({ ...amount, mIncome: monthlyIncome, savings: monthlySavings });
    } else if (select === 1) {
      const monthlyIncome = mIncome.replace(/\D/g, "");
      const percentRate = rate.replace(/\D/g, "");
      const houseRentValue = (monthlyIncome * percentRate * 12) / 100;
      const formatRent =
        houseRentValue > 10000
          ? Math.ceil(Number(houseRentValue / 10000)) * 10000
          : Math.ceil(Number(houseRentValue));

      const houseRent = formatRent.toLocaleString("en-US");
      const monthlySavingsValue = (monthlyIncome * percentRate) / 100;
      const formatSavings =
        monthlySavingsValue > 10000
          ? Math.ceil(Number(monthlySavingsValue / 1000)) * 1000
          : Math.ceil(Number(monthlySavingsValue));
      const monthlySavings = Number(formatSavings).toLocaleString("en-US");
      setAmount({ ...amount, rent: houseRent, savings: monthlySavings });
    } else if (select === 2) {
      const monthlyIncome = mIncome.replace(/\D/g, "");
      const houseRent = rent.replace(/\D/g, "");
      const rateValue = (houseRent * 100) / (monthlyIncome * 12);
      const formatRate = Math.ceil(Number(rateValue));

      const monthlySavingsValue = houseRent / 12;
      const formatSavings =
        monthlySavingsValue > 10000
          ? Math.ceil(Number(monthlySavingsValue / 1000)) * 1000
          : Math.ceil(Number(monthlySavingsValue));
      const monthlySavings = Number(formatSavings).toLocaleString("en-US");
      setAmount({ ...amount, rate: formatRate, savings: monthlySavings });
    }
  }
  return (
    <div className="calc-button">
      {select === 0 ? (
        <button
          className={
            rent && rate && rent !== "0" && rate !== "0" ? "active-button" : ""
          }
          onClick={
            rent && rate && rent !== "0" && rate !== "0" ? submitForm : null
          }
        >
          Calculate
        </button>
      ) : select === 1 ? (
        <button
          className={
            mIncome && rate && mIncome !== "0" && rate !== "0"
              ? "active-button"
              : ""
          }
          onClick={
            mIncome && rate && mIncome !== "0" && rate !== "0"
              ? submitForm
              : null
          }
        >
          Calculate
        </button>
      ) : select === 2 ? (
        <button
          className={
            mIncome && rent && mIncome !== "0" && rent !== "0"
              ? "active-button"
              : ""
          }
          onClick={
            mIncome && rent && mIncome !== "0" && rent !== "0"
              ? submitForm
              : null
          }
        >
          Calculate
        </button>
      ) : null}
    </div>
  );
}
