import { BounceLoader } from "react-spinners";
const cssL = { "margin-top": "20px" };
const Spin = ({ isLoading }) => {
  return (
    <div className="spin">
      <BounceLoader size={50} loading={isLoading} />
    </div>
  );
};

export default Spin;
