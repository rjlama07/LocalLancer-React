import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "finalyearproject");

  try {
    console.log("Uploading file:", file); // Debug: Check if file is correct
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dmuan3rbl/image/upload",
      data
    );
    console.log("Upload response:", res); // Debug: Check if response is correct
    if (res.data && res.data.secure_url) {
      const { secure_url } = res.data;
      console.log("Image URL:", secure_url);
      return secure_url;
    } else {
      console.error("Upload error: No secure_url found in response");
      return null;
    }
  } catch (err) {
    console.error(
      "Upload error:",
      err.response ? err.response.data : err.message
    ); // More detailed error log
  }
};

export default upload;
