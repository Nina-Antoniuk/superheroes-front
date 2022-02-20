import { useEffect, useState } from 'react';
import style from './style.module.scss';
import HeroesList from '../../components/HeroesList';
import Button from 'components/Button';
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import { getHeroes, addHero } from '../../services/api';

const HomePage = function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [heroes, setHeroes] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 5;

  useEffect(() => {
    getHeroes(skip, limit)
      .then(res => {
        setHeroes(res.heroes);
        setSkip(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = data => {
    addHero(data)
      .then(res => setHeroes(res.heroes))
      .catch(err => console.log(err));
  };

  const handleClick = () => {
    getHeroes(skip, limit)
      .then(res => {
        setHeroes([...heroes, ...res.heroes]);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className={style.btnContainer}>
        <Button name={'Add hero'} func={toggleModal} />
      </div>
      <div className={style.content}>
        <HeroesList data={heroes} />
        <div className={style.btnContainer}>
          <Button name="Load more" func={handleClick} />
        </div>
        {showModal && (
          <Modal switcher={toggleModal}>
            <Form modalState={setShowModal} submit={handleSubmit} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default HomePage;
