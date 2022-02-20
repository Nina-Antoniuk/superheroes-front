import { useState, useCallback, useEffect } from 'react';
import style from './style.module.scss';

const Form = function Form({
  modalState,
  submit,
  data = {
    name: '',
    nickname: '',
    description: '',
    superpowers: '',
    phrase: '',
  },
}) {
  const [nickname, setNickname] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    setNickname(data.nickname);
    setName(data.name);
    setDescription(data.description);
    setSuperpowers(data.superpowers);
    setPhrase(data.phrase);
  }, []);

  const inputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'nickname':
        setNickname(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'superpowers':
        setSuperpowers(value);
        break;
      case 'phrase':
        setPhrase(value);
        break;
      default:
        console.log('oops');
    }
  };

  const handleClick = useCallback(() => {
    modalState(false);
  }, [modalState]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      handleClick();
      submit({ nickname, name, description, superpowers, phrase });
      reset();
    },
    [description, handleClick, name, nickname, phrase, submit, superpowers],
  );

  const reset = () => {
    setNickname('');
    setName('');
    setDescription('');
    setSuperpowers('');
    setPhrase('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.wrapper}>
        <label htmlFor="nickname">Nickname</label>
        <input
          id="nickname"
          type="text"
          className={style.input}
          name="nickname"
          value={nickname}
          onChange={inputChange}
        />
      </div>
      <div className={style.wrapper}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className={style.input}
          name="name"
          value={name}
          onChange={inputChange}
        />
      </div>
      <div className={style.wrapper}>
        <label htmlFor="description">Origin_description</label>
        <input
          id="description"
          type="text"
          className={style.input}
          name="description"
          value={description}
          onChange={inputChange}
        />
      </div>
      <div className={style.wrapper}>
        <label htmlFor="superpowers">Superpowers</label>
        <input
          id="superpowers"
          type="text"
          className={style.input}
          name="superpowers"
          value={superpowers}
          onChange={inputChange}
        />
      </div>
      <div className={style.wrapper}>
        <label htmlFor="phrase">Catch_phrase</label>
        <input
          id="phrase"
          type="text"
          className={style.input}
          name="phrase"
          value={phrase}
          onChange={inputChange}
        />
      </div>
      {/* <div className={style.wrapper}>
        <label htmlFor="image">Images</label>
        <input
          type="file"
          id="image"
          name="image"
          className="input"
          onChange={inputChange}
        />
      </div> */}
      <button className={style.btn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
