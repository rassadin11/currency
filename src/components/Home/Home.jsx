import Currency from '../Currency/Currency'
import s from './Home.module.scss'
import { useSelector } from 'react-redux'

const Home = () => {
    const items = useSelector((state) => state.data.items)

    return (
        <div className={s.container}>
            {items.map(item => {
                return <Currency {...item} key={item.id} />
            })}
        </div>
    )
}

export default Home