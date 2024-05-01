import ResultTick from "../ResultTick/ResultTick"
import { calculateInvestmentResults } from "../../util/investment"

export default function Result({ investmentData }) {

    function getInvestmentResults(investmentData) {

        let result_data = calculateInvestmentResults(investmentData)
        const initialInvestment =
            result_data[0].valueEndOfYear -
            result_data[0].annualInvestment -
            result_data[0].interest
        return result_data.map((result, index) => {
            const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment
            const correctResult = {
                year: result.year,
                valueEndOfYear: result.valueEndOfYear,
                interest: result.interest,
                totalInterest: totalInterest,
                investedCapital: result.valueEndOfYear - totalInterest
            }
            return <ResultTick key={index} data={correctResult} />
        }
        )
    }

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {getInvestmentResults(investmentData).map(result => result)}
            </tbody>
        </table>
    )
}