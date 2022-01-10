import { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { nanoid } from "nanoid";

function Main() {
  const [images, setImages] = useState([]);
  const [imgUrls, setImgsUrl] = useState([]);
  const [text, setText] = useState({ error: "", loading: true, data: {} });

  const handleSelect = (e) => {
    const tmpImages = e.target.files;
    setImages(tmpImages);
    setText(text);
    let val = [];
    let i = 0;
    for (let src of tmpImages) {
      val.push([i, URL.createObjectURL(src)]);
      i++;
    }
    setImgsUrl(val);
    //console.log("jjdg", images, images[0].name, import.meta.VITE_APP_API_URL);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    for (let file of images) {
      const formData = new FormData();
      formData.append("image name", file.name);
      formData.append("image", file);
      console.log(file, formData);

      // const init = {
      //   method: "POST", // *GET, POST, PUT, DELETE, etc.
      //   headers: {
      //     "X-Api-Key": import.meta.env.VITE_APP_API_KEY,
      //   },
      //   data: { image: formData },
      // };

      // fetch(import.meta.env.VITE_APP_API_URL, init)
      //   .then((res) => {
      //     console.log(res.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      const config = {
        // method: "POST", // *GET, POST, PUT, DELETE, etc.
      };
      axios.defaults.headers.common = {
        "X-API-Key": import.meta.env.VITE_APP_API_KEY,
      };
      axios
        .post(import.meta.env.VITE_APP_API_URL, formData, config)
        .then((res) => {
          const data = {
            url: URL.createObjectURL(file),
            data: res.data,
          };
          setText({ error: "", loading: false, data });
          console.log(data.data);
        })
        .catch((err) => {
          const msg = err.message;
          console.log({ error: msg, loading: false, data: {} });
        });
    }
  };
  const initTemplate =
    imgUrls &&
    imgUrls.map(([key, image]) => (
      <img className="img" key={key} src={image} />
    ));
  const finalTemplate = text.data.data && (
    <div>
      {text.data &&
        text.data.data.map(({ text }) => (
          <div className="text" key={nanoid()}>
            {text}
          </div>
        ))}
      ;
    </div>
  );

  return (
    <main id="container">
      <form id="form-paren" onSubmit={onSubmit}>
        <label htmlFor="images">Upload image(s) to extract texts</label>
        <br />
        <input
          id="images"
          type="file"
          accept=".jpg, .jpeg, .png"
          multiple
          onChange={handleSelect}
          onClick={handleSelect}
        />
        <br />
        <br />
        <button id="submit-btn" type="submit">
          Extract
        </button>
      </form>
      {text.loading ? initTemplate : finalTemplate}
    </main>
  );
}

export default Main;
