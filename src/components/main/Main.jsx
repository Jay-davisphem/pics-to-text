import { useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";
import { nanoid } from "nanoid";

import Text from "./Text";
import Image from "./Image";
import Canva from "./.Canva";
import ImageForm from "./ImageForm";

function Main() {
  const [image, setImage] = useState({});
  const [isSet, setIsSet] = useState(false);
  const [formData, setFormData] = useState({});
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePost = (formData) => {
    setIsLoading(true);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      // method: "POST", // *GET, POST, PUT, DELETE, etc.
    };
    axios.defaults.headers.common = {
      "X-API-Key": import.meta.env.VITE_APP_API_KEY,
    };
    isSet &&
      axios
        .post(import.meta.env.VITE_APP_API_URL, formData, config)
        .then((res) => {
          const data = res.data;
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          const msg = err.message;
          setIsLoading(false);
          console.log(msg, err);
        });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setData(null);
    const formData = new FormData();
    formData.append("name", image.name);
    formData.append("image", image);
    console.log(image, formData, import.meta.env.VITE_APP_API_URL);
    setFormData(formData);
    handlePost(formData);
  };

  const handleSelect = (e) => {
    setData(null);
    setFormData({});
    setIsLoading(false);
    const file = e.target.files[0];
    setImage(file);
    setIsSet(true);
  };

  return (
    <main id="container">
      <ImageForm onSubmit={onSubmit} handleSelect={handleSelect} />
      <Image image={image} isSet={isSet} />
      <Text data={data} isLoading={isLoading} />
    </main>
  );
}

export default Main;
