import { formatter } from "../../util/investment"
export default function ResultTick({ data }) {
    const { year, valueEndOfYear, interest, annualInvestment, investedCapital } = data
    const totalInterest = valueEndOfYear - annualInvestment * year
    return (
        <tr>
            <td>{year}</td>
            <td>{valueEndOfYear}</td>
            <td>{interest}</td>
            <td>{totalInterest}</td>
            <td>{investedCapital}</td>
        </tr>
    )
}