import { Link } from 'react-router-dom';
import style from './style.module.scss';
import Card from '../Card';

const HeroesList = function HeroesList({ data }) {
  return (
    <ul className={style.HeroesList}>
      {data.map(el => {
        return (
          <li className={style.item} key={el.nickname}>
            <Link className={style.link} to={`/hero/${el._id}`}>
              <Card data={el} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeroesList;
