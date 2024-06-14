import { useState } from "react";
import Form from "./Form";
import Result from "./Result";

export default function AmountCalc({ select, setSelect }) {
  const [amountCalc, setAmountCalc] = useState(
    select === 0
      ? {
          rent: "",
          rate: "",
          mIncome: "",
          savings: "",
        }
      : select === 1
      ? {
          mIncome: "",
          rate: "",
          rent: "",
          savings: "",
        }
      : select === 2
      ? {
          mIncome: "",
          rent: "",
          rate: "",
          savings: "",
        }
      : null
  );
  const { mIncome, rent, rate, savings } = amountCalc;
  return (
    <>
      <Form amount={amountCalc} setAmount={setAmountCalc} select={select} />
      {(select === 0
        ? mIncome
        : select === 1
        ? rent
        : select === 2
        ? rate
        : null) && savings ? (
        <Result amount={amountCalc} select={select} setSelect={setSelect} />
      ) : null}
    </>
  );
}
