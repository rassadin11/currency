import Currency from '../Currency/Currency'
import s from './Home.module.scss'

const Home = () => {
    return (
        <div className={s.container}>
            <Currency/>
        </div>
    )
}

export default Home