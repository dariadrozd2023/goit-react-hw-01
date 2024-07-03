import transactions  from "/src/transactions.json";
import s from './Transactions.module.css';
import clsx from "clsx";

export function Transactions() {
  return (
    <div>
      <table className={clsx(s.wrapper)}>
        <thead className={clsx(s.thead)}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({id, type, amount, currency}) => {
            return (
              <tr className={clsx(s.tbody, s.tr)} key={id}>
                <td className={clsx(s.tbody)}>{type}</td>
                <td className={clsx(s.tbody)}>{amount}</td>
                <td className={clsx(s.tbody)}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
