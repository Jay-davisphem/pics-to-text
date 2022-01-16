function Form() {
  return (
    <div className="wrapper">
      <form className="form">
        <div className="pageTitle title">Say Hi / Send Quote</div>
        <input
          type="text"
          id="name"
          name="name"
          className="name formEntry"
          placeholder="NAME"
        />

        <input
          type="email"
          id="email"
          className="email formEntry"
          name="email"
          placeholder="EMAIL"
        />

        <textarea
          id="message"
          name="message"
          className="message formEntry"
          placeholder="MESSAGE"
        ></textarea>

        <input type="submit" value="HALLA ME" className="submit formEntry" />
      </form>
    </div>
  );
}
export default Form;
