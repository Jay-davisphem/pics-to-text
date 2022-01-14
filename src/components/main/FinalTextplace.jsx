import { nanoid } from "nanoid";
const FinalTextPlace = ({ data }) => {
  return (
    <>{data && data.map((datum) => <p key={nanoid()}>{datum.text}COOL</p>)}</>
  );
};

export default FinalTextPlace;
