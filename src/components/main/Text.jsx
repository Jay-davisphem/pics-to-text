import InitTextplace from "./InitTextplace";
import FinalTextplace from "./FinalTextplace";
import Spin from "./Spin";

const Text = ({ data, isLoading }) => {
  return (
    <div className="text-c">
      {data ? (
        <FinalTextplace data={data} />
      ) : isLoading ? (
        <Spin isLoading={isLoading} />
      ) : (
        <InitTextplace />
      )}
    </div>
  );
};

export default Text;
