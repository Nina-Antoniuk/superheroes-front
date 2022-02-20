import style from './style.module.scss';

const HeroInfo = function HeroInfo({ data }) {
  return (
    <div className={style.wrapper}>
      <div className={style.heroInfo}>
        <p>
          <b>Nickname:</b> {data.nickname}
        </p>
        <p>
          <b>Real_name:</b> {data.name}
        </p>
        <p>
          <b>Origin_description:</b>
          {data.description}
        </p>
        <p>
          <b>Superpowers:</b>
          {data.superpowers}
        </p>
        <p>
          <b>Catch_phrase:</b> {data.phrase}
        </p>
      </div>
    </div>
  );
};
export default HeroInfo;
