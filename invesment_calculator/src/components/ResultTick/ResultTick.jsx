import { formatter } from "../../util/investment"
export default function ResultTick({ data }) {
    const { year, valueEndOfYear, interest, totalInterest, investedCapital } = data
    return (
        <tr>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
        </tr>
    )
}