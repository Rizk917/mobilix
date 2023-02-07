import axios from "axios";
import React, { useState } from "react";
import AdminNav from "./adminNav";

const Adminarticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    article: "",
    date: "",
    author: "",
    image: "",
  });
  const { title, description, date, article, author, image } = formData;
  // console.log(formData.image);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      title: title,
      description: description,
      date: date,
      article: article,
      author: author,
      image: image,
    };
    // await axios.post("http://localhost:5000/cont/news", newArticle);
    console.log(newArticle);
    // const config = {
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // };
    try {
      await axios.post("http://localhost:5000/cont/news", newArticle);
      setFormData({
        title: "",
        description: "",
        article: "",
        date: "",
        author: "",
        image: "",
      });
    } catch (err) {
      console.log("error", err.response.data);
    }
  };

  return (
    <div className="container">
    <AdminNav/>

    <form className="contact-form">

      <input
        type="text"
        name="title"
        value={title}
        placeholder="Enter article title"
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="description"
        value={description}
        placeholder="Enter article Description"
        onChange={onChange}
        required
      />
      <br />
      <input
        type="text"
        name="article"
        value={article}
        placeholder="Body"
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="date"
        value={date}
        placeholder="Date"
        onChange={onChange}
        required
      />
      <br />
      <input
        type="text"
        name="author"
        value={author}
        placeholder="Enter your author "
        onChange={onChange}
        required
      />
      <br />
      <input
        type="file"
        name="image"
        // multiple
        // accept="image/*"
        onChange={onChange}
      />

      <br />
      <button type="submit" onClick={onSubmit}>
        Post
      </button>
    </form>
    </div>

  );
};

export default Adminarticle;
