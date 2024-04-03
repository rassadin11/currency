import s from './Currency.module.scss'
import btc from '../../assets/btc.svg'
import { Link } from 'react-router-dom'

const Currency = () => {
    return (
        <div className={s.block}>
            <img src={btc} alt="Bitcoin" className={s.image} />
            <div className={s.wrapper}>
                <div className={s.title}>
                    <p><Link to="/currency/bitcoin">Bitcoin</Link> <span className={s.ticker}>( BTC )</span></p>
                    <p><span className={s.price}><span>66.067</span> $</span></p>
                </div>
                <p className={s.shortDescription}>Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009.</p>
            </div>
        </div>
    )
}

export default Currency