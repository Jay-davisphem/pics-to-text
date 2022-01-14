import { Link } from "react-router-dom";
const ContactButton = ({ text, path }) => {
  return (
    <Link to={path}>
      <button className="contact-btn">
        <span>{text}</span>
      </button>
    </Link>
  );
};
export default ContactButton;
