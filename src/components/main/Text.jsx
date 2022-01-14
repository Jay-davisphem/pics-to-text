import InitTextplace from "./InitTextplace";
import FinalTextplace from "./FinalTextplace";
import Spin from "./Spin";

const Text = ({ data, isLoading }) => {
  return (
    <>
      {data ? (
        <FinalTextplace data={data} />
      ) : isLoading ? (
        <Spin />
      ) : (
        <InitTextplace />
      )}
    </>
  );
};

export default Text;
