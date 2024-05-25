import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "finalyearproject");

  try {
    console.log("Uploading file:", file);  // Debug: Check if file is correct
    const res = await axios.post("https://api.cloudinary.com/v1_1/dmuan3rbl/image/upload", data);

    console.log("Response:", res);  // Debug: Check the response
    const { url } = res.data;
    return url;
  } catch (err) {
    console.error("Upload error:", err.response ? err.response.data : err.message);  // More detailed error log
  }
};

export default upload;
