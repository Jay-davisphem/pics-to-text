function Form() {
  return (
    <div class="wrapper">
      <form class="form">
        <div class="pageTitle title">SAY HI / SEND QUOTE</div>
        <input type="text" id="name" name="name" class="name formEntry" />

        <input type="email" id="email" class="email formEntry" name="email" />

        <textarea
          id="message"
          name="message"
          class="message formEntry"
        ></textarea>

        <input type="submit" value="HALLA ME" class="submit formEntry" />
      </form>
    </div>
  );
}
export default Form;
