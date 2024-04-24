import MoneyBagIcon from '../../assets/investment-calculator-logo.png'

export default function Header() {
    return (
        <header id='header'>
            <img src={MoneyBagIcon} alt="Money Bag Icon" />
            <h1>Investment Calculator</h1>
        </header>
    )
}