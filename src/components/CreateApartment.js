import { useState } from "react";
import axios from "axios";

function CreateApartment() {

  const [title, setTitle] = useState("");

  
  const createApartment = (newApartment) => {
    axios.post(process.env.REACT_APP_API_URL + "/apartments", newApartment)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const newApartment = {
      title: title,
    };
    createApartment(newApartment);
    //clear form
    setTitle("");
  };
  return (
    <>
      <h1>Create Apartment</h1>
      <div className="CreateApartment">
        <form onSubmit={handleSubmit}>
          <label>
            {" "}
            Title:
            <input
              type="text"
              name="title"
              required={true}
              placeholder="enter the title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>

          <button>Create</button>
        </form>
      </div>
    </>
  );
}

export default CreateApartment;
