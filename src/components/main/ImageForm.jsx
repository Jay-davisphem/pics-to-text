import Extract from "./Extract";
const ImageForm = ({ onSubmit, handleSelect }) => {
  return (
    <form
      id="form-paren"
      onSubmit={onSubmit}
      method="POST"
      encType="multipart/form-data"
    >
      <input
        id="image"
        type="file"
        name="image"
        accept=".jpg, .jpeg, .png"
        onChange={handleSelect}
      />
      <Extract />
    </form>
  );
};

export default ImageForm;
