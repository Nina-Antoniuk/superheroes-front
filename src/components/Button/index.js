import style from './style.module.scss';

const Button = function Button({ name, func }) {
  const clickHandle = () => {
    func();
  };

  return (
    <button type="submit" className={style.button} onClick={clickHandle}>
      {name}
    </button>
  );
};

export default Button;
