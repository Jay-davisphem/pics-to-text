const Image = ({ image, isSet }) => {
  return <>{isSet ? <img src={URL.createObjectURL(image)} /> : <>{""}</>}</>;
};
export default Image;
