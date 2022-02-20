import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getHero, removeHero, updateHero } from '../../services/api';
import style from './style.module.scss';
import Button from 'components/Button';
import HeroInfo from 'components/HeroInfo';
import Modal from 'components/Modal';
import Form from 'components/Form';

const HeroPage = function HeroPage() {
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState({});
  const params = useParams();
  let history = useHistory();

  useEffect(() => {
    getHero(params.id)
      .then(res => setInfo(res.hero))
      .catch(err => console.log(err));
  }, []);

  const handleClick = () => {
    history.push('/home');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const deleteHero = () => {
    removeHero(params.id)
      .then(console.log)
      .catch(err => console.log(err));
  };

  const handleSubmit = data => {
    updateHero(params.id, data)
      .then(res => setInfo(res.hero))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div>
        <div className={style.actions}>
          <Button name={'Go back'} func={handleClick} />
          <Button name={'Change hero info'} func={toggleModal} />
          <Button name={'Delete hero info'} func={deleteHero} />
        </div>
        <HeroInfo data={info} />
      </div>
      {showModal && (
        <Modal switcher={toggleModal}>
          <Form modalState={setShowModal} submit={handleSubmit} data={info} />
        </Modal>
      )}
    </>
  );
};

export default HeroPage;
