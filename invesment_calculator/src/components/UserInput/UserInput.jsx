export default function UserInput({ handleInvestmentDataChange, userInput }) {
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">Initial Investment:</label>
                    <input type="number" id="initialInvestment" value={userInput.initialInvestment} required onChange={handleInvestmentDataChange} />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual Investment:</label>
                    <input type="number" id="annualInvestment" value={userInput.annualInvestment} required onChange={handleInvestmentDataChange} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">Expected Return:</label>
                    <input type="number" id="expectedReturn" value={userInput.expectedReturn} required onChange={handleInvestmentDataChange} />
                </p>
                <p>
                    <label htmlFor="duration">Duration:</label>
                    <input type="number" id="duration" value={userInput.duration} required onChange={handleInvestmentDataChange} />
                </p>
            </div>
        </section>
    )
}