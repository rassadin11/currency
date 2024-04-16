import s from './Currency.module.scss'
import btc from '../../assets/btc.svg'
import { Link } from 'react-router-dom'

const Currency = ({ title, ticker, description, price }) => {
    return (
        <div className={s.block}>
            <img src={btc} alt={ticker} className={s.image} />
            <div className={s.wrapper}>
                <div className={s.title}>
                    <p><Link to={"/currency/" + title}>{title}</Link> <span className={s.ticker}>( {ticker} )</span></p>
                    <p><span className={s.price}><span>{price}</span> $</span></p>
                </div>
                <p className={s.shortDescription}>{description}</p>
            </div>
        </div>
    )
}

export default Currency