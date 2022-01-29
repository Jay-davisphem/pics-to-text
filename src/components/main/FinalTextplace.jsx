import { nanoid } from "nanoid";
const FinalTextPlace = ({ data }) => {
  return (
    <>{data && data.map((datum) => <p key={nanoid()}>{datum.text}</p>)}</>
  );
};

export default FinalTextPlace;
