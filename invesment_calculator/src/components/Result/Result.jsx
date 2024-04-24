import ResultTick from "../ResultTick/ResultTick"
import { calculateInvestmentResults } from "../../util/investment"

export default function Result({ investmentData }) {

    const correctedInvestmentData = { annualInvestment: investmentData.monthlyInvestment * 12, ...investmentData }
    function getInvestmentResults(data) {
        return calculateInvestmentResults(data)
            .map((result, index) => {
                const correctResult = {
                    year: result.year,
                    valueEndOfYear: result.valueEndOfYear,
                    interest: result.interest,
                    annualInvestment: result.annualInvestment,
                    investedCapital: result.annualInvestment * result.year + data.initialInvestment
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
                {getInvestmentResults(correctedInvestmentData).map(result => result)}
            </tbody>
        </table>
    )
}