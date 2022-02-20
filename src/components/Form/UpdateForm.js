import { useState, useCallback } from 'react';
import style from './style.module.scss';

const UpdateForm = function UpdateForm({ modalState, submit }) {
  const [image, setImage] = useState({});

  const handleClick = useCallback(() => {
    modalState(false);
  }, [modalState]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      handleClick();
      submit(image);
    },
    [handleClick, submit, image],
  );

  const getFile = useCallback(e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImage({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }, []);

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {console.log('im', image)}
      <div className={style.wrapper}>
        <label htmlFor="image">Images</label>
        <input
          type="file"
          id="image"
          name="image"
          className="input"
          onChange={getFile}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateForm;
