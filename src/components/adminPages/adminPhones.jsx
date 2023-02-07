import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminNav from "./adminNav";


const AdminPhonedata = () => {
  const [product, setProduct] = useState({
    phoneModel: "",
    display: "",
    image: "",
    body: "",
    camera: "",
    vendor: "",
    prodDate: "",
  });
  const { phoneModel, display, body, image, camera, vendor, prodDate } =
    product;
  // console.log(formData.vendor);

  const PostAll = (e) => {
    if(e.target.name == "image")
    setProduct({ ...product, [e.target.name]: e.target.files[0]});
    else
    setProduct({ ...product, [e.target.name]: e.target.value });

    console.log(e.target)
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const newPhone = {
  //     phoneModel: phoneModel,
  //     display: display,
  //     body: body,
  //     image: image,
  //     camera: camera,
  //     vendor: vendor,
  //     prodDate: prodDate,
  //   };

  //   try {
  //     await axios.post("http://localhost:5000/phones", newPhone);
  //     setFormData({
  //       phoneModel: "",
  //       display: "",
  //       image: "",
  //       body: "",
  //       camera: "",
  //       vendor: "",
  //       prodDate: "",
  //     });
  //   } catch (err) {
  //     console.log("error", err.response.data);
  //   }
  // };
  const onSubmit = async (e) => {
    e.preventDefault();
    var battikh = new FormData();
    // battikh =product;
    battikh.append(product,"")
    console.log("fff",product)
    // formData.append("phoneModel", phoneModel);
    // formData.append("display", display);
    // formData.append("body", body);
    // formData.append("image", image);
    // formData.append("camera", camera);
    // formData.append("vendor", vendor);
    // formData.append("prodDate", prodDate);
  
    try {
      await axios.post("http://localhost:5000/phones", battikh, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setProduct({
        phoneModel: "",
        display: "",
        image: "",
        body: "",
        camera: "",
        vendor: "",
        prodDate: "",
      });
    } catch (err) {
      console.log("error", err.response.data);
    }
  };
  
  const [phoness, setphoness] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadphoness();
  }, []);

  const loadphoness = async () => {
    const result = await axios.get("http://localhost:5000/phones");
    console.log(result.data);
    setphoness(result.data);
  };

  const deletephones = async (id) => {
    await axios.delete(`http://localhost:5000/phones/${id}`);
    loadphoness();
  };

  return (
    <>
    <AdminNav/>

      <div>
        <h1>Phones</h1>
        <table>
          <thead>
            <tr>
              <th scope="col">index</th>
              <th scope="col">phoneModel</th>
              <th scope="col">display</th>
              <th scope="col">camera</th>
              <th scope="col">body</th>
              <th scope="col">prodDate</th>
            </tr>
          </thead>
          <tbody>
            {phoness.map((phones, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{phones.phoneModel}</td>
                <td>{phones.display}</td>
                <td>{phones.camera}</td>
                <td>{phones.body}</td>
                <td>{phones.prodDate}</td>
                {/* <td>{phones.vendor}</td> */}

                <td>
                  <button
                    className="button2"
                    onClick={() => deletephones(phones._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="form-admin">
        <form className="contact-form" encType="multipart/form-data">
          <input
            type="text"
            name="phoneModel"
            value={phoneModel}
            placeholder="Enter phoneModel"
            onChange={PostAll}
            required
          />
          <input
            type="text"
            name="display"
            value={display}
            placeholder="Enter  display data"
            onChange={PostAll}
            required
          />
          <br />
          <input
            type="text"
            name="prodDate"
            value={prodDate}
            placeholder="Enter production Date"
            onChange={PostAll}
            required
          />
          <input
            type="text"
            name="body"
            value={body}
            placeholder="enter body data"
            onChange={PostAll}
            required
          />
          <br />
          <input
            type="text"
            name="camera"
            value={camera}
            placeholder="Enter camera data "
            onChange={PostAll}
            required
          />
          <br />{" "}
          <input
            type="text"
            name="vendor"
            value={vendor}
            placeholder="Enter The Vendor/Manifacturer"
            onChange={PostAll}
            required
          />
          <br />
          <input
        type="file"
        name="image"
        // multiple
        // accept="image/*"
        // upload
        onChange={PostAll}
      />
          <br />
          <button type="submit" onClick={onSubmit}>
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminPhonedata;
