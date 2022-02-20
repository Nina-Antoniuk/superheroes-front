import style from './styles.module.scss';

const Card = function Card({ data }) {
  return (
    <div className={style.wrapper}>
      <div className="imageWrapper">
        <img src="https://via.placeholder.com/150" alt="placeholder" />
      </div>
      <div className={style.heroInfo}>
        <p>
          <b>Nickname:</b> {data.nickname}
        </p>
      </div>
    </div>
  );
};
export default Card;
