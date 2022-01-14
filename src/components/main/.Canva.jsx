import ImageForm from "./ImageForm";
import Image from "./Image";
import Extract from "./Extract";
import Text from "./Text";

const Canva = ({ onSubmit, handleSelect, image, isSet, data, isLoading }) => {
  return (
    <div className="canva">
      <div className="img-cont">
        <Image image={image} isSet={isSet} />
        <ImageForm onSubmit={onSubmit} handleSelect={handleSelect} />
      </div>
      <div className="text-cont">
        <Text data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Canva;
