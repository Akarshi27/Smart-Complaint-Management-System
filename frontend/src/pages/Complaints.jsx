import { useEffect, useState } from "react";
import API from "../services/api";

function Complaints() {
  const [complaints, setComplaints] = useState([]);

  const [location, setLocation] = useState("");

  const [category, setCategory] = useState("");

  const fetchComplaints = async () => {
    try {
      const response = await API.get(
        "/complaints"
      );

      setComplaints(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const deleteComplaint = async (id) => {
    try {
      await API.delete(`/complaints/${id}`);

      fetchComplaints();
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id) => {
    try {
      await API.put(`/complaints/${id}`, {
        status: "Resolved",
      });

      fetchComplaints();
    } catch (error) {
      console.log(error);
    }
  };

  const searchByLocation = async () => {
    try {
      const response = await API.get(
        `/complaints/search/location?location=${location}`
      );

      setComplaints(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterByCategory = async () => {
    try {
      const response = await API.get(
        `/complaints/category/${category}`
      );

      setComplaints(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>All Complaints</h2>

      <div
        style={{
          marginBottom: 20,
          display: "flex",
          gap: 10,
        }}
      >
        <input
          type="text"
          placeholder="Search by location"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
        />

        <button onClick={searchByLocation}>
          Search
        </button>

        <input
          type="text"
          placeholder="Filter category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <button onClick={filterByCategory}>
          Filter
        </button>

        <button onClick={fetchComplaints}>
          Reset
        </button>
      </div>

      {complaints.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid gray",
            padding: 15,
            marginBottom: 15,
          }}
        >
          <h3>{item.title}</h3>

          <p>{item.description}</p>

          <p>
            <b>Category:</b>{" "}
            {item.category}
          </p>

          <p>
            <b>Location:</b>{" "}
            {item.location}
          </p>

          <p>
            <b>Status:</b>{" "}
            {item.status}
          </p>

          <button
            onClick={() =>
              updateStatus(item._id)
            }
          >
            Resolve
          </button>

          <button
            onClick={() =>
              deleteComplaint(item._id)
            }
            style={{ marginLeft: 10 }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Complaints;