import { useState } from "react";
import API from "../services/api";

function RegisterComplaint() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    category: "",
    location: "",
  });

  const [aiResult, setAiResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/complaints", formData);

      const aiResponse = await API.post(
        "/ai/analyze",
        {
          description: formData.description,
        }
      );

      setAiResult(aiResponse.data);

      alert("Complaint Registered");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register Complaint</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="title"
          placeholder="Complaint Title"
          onChange={handleChange}
        />

        <br />
        <br />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Submit Complaint
        </button>
      </form>

      {aiResult && (
        <div style={{ marginTop: 20 }}>
          <h3>AI Analysis</h3>

          <p>
            <b>Priority:</b>{" "}
            {aiResult.priority}
          </p>

          <p>
            <b>Department:</b>{" "}
            {aiResult.department}
          </p>

          <p>
            <b>Summary:</b>{" "}
            {aiResult.summary}
          </p>

          <p>
            <b>Auto Response:</b>{" "}
            {aiResult.autoResponse}
          </p>
        </div>
      )}
    </div>
  );
}

export default RegisterComplaint;