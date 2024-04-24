export default function UserInput({ handleInvestmentDataChange }) {
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">Initial Investment:</label>
                    <input type="number" id="initialInvestment" required onChange={handleInvestmentDataChange} />
                </p>
                <p>
                    <label htmlFor="monthlyInvestment">Monthly Investment:</label>
                    <input type="number" id="monthlyInvestment" required onChange={handleInvestmentDataChange} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">Expected Return:</label>
                    <input type="number" id="expectedReturn" required onChange={handleInvestmentDataChange} />
                </p>
                <p>
                    <label htmlFor="duration">Duration:</label>
                    <input type="number" id="duration" required onChange={handleInvestmentDataChange} />
                </p>
            </div>
        </section>
    )
}