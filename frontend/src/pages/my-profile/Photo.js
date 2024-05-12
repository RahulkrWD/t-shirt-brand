import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

function Photo() {
  const [file, setFile] = useState(null);
  const [photos, setPhotos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/profile/get-photo/${id}`
      );
      setPhotos(data);
    } catch (error) {
      console.error("Failed to fetch profile photos:", error);
    }
  };

  const onChangeHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/profile/upload/photo/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(response.data.success);
    } catch (error) {
      console.error("Failed to upload file:", error);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="file" name="file" onChange={onChangeHandler} />
        <button type="submit">Upload</button>
      </form>

      {photos.length > 0 && (
        <div>
          {photos.map((photo, index) => (
            <div key={index}>
              <img
                style={{ width: "200px", height: "250px" }}
                src={`data:${photo.type};base64,${photo.data}`}
                alt="Profile"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Photo;
