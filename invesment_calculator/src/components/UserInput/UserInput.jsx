export default function UserInput({ handleInvestmentDataChange, investmentData }) {
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">Initial Investment:</label>
                    <input type="number" id="initialInvestment" value={investmentData.initialInvestment} required onChange={handleInvestmentDataChange} />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual Investment:</label>
                    <input type="number" id="annualInvestment" value={investmentData.annualInvestment} required onChange={handleInvestmentDataChange} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">Expected Return:</label>
                    <input type="number" id="expectedReturn" value={investmentData.expectedReturn} required onChange={handleInvestmentDataChange} />
                </p>
                <p>
                    <label htmlFor="duration">Duration:</label>
                    <input type="number" id="duration" value={investmentData.duration} required onChange={handleInvestmentDataChange} />
                </p>
            </div>
        </section>
    )
}