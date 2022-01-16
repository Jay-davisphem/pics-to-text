const Image = ({ image, isSet }) => {
  return (
    <div className="img-c">
      {isSet ? <img src={URL.createObjectURL(image)} /> : <>{""}</>}
    </div>
  );
};
export default Image;
