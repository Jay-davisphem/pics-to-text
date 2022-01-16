function Form() {
  return (
    <div className="wrapper">
      <form className="form">
        <div className="pageTitle title">SAY HI / SEND QUOTE</div>
        <input type="text" id="name" name="name" className="name formEntry" />

        <input
          type="email"
          id="email"
          className="email formEntry"
          name="email"
        />

        <textarea
          id="message"
          name="message"
          className="message formEntry"
        ></textarea>

        <input type="submit" value="HALLA ME" className="submit formEntry" />
      </form>
    </div>
  );
}
export default Form;
