import Button from "./Button";
import Input from "./Input";

export default function Form({ amount, setAmount, select }) {
  return (
    <div className="input-section">
      <Input
        symbol={"₦"}
        field={
          select === 0
            ? "House Rent"
            : select === 1
            ? "Monthly Income"
            : select === 2
            ? "Monthly Income"
            : null
        }
        amount={amount}
        setAmount={setAmount}
        category={select === 0 ? "rent" : select === 1 ? "mIncome" : select === 2 ? "mIncome" : null}
      />
      <Input
        symbol={
          select === 0 ? "%" : select === 1 ? "%" : select === 2 ? "₦" : null
        }
        field={
          select === 0
            ? "Monthly Savings Rate"
            : select === 1
            ? "Monthly Savings Rate"
            : select === 2
            ? "House Rent"
            : null
        }
        memo={
          select === 0
            ? "The percentage of your monthly income you wish to save each month towards your rent"
            : select === 1
            ? "The percentage of your monthly income you wish to save each month towards your rent"
            : null
        }
        amount={amount}
        setAmount={setAmount}
        category={select === 0 ? "rate" : select === 1 ? "rate" : select === 2 ? "rent" : null}
      />
      <Button amount={amount} setAmount={setAmount} select={select} />
    </div>
  );
}
