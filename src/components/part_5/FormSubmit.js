import { useState } from "react";

const FormSubmit = () => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [city, setCity] = useState("");
  const [formValues, setFormValues] = useState({ name: "", age: "", city: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formToSubmit = {
    //   name: name,
    //   age: age,
    //   city: city,
    // };
    // console.log(formToSubmit);
    console.log(formValues)
  };

  return (
    <>
      FormSubmit
      <form onSubmit={handleSubmit}>
        {/* 
        // Simple single state variable
        <div>
          <label>Name</label>
          <input
            type="text"
            value={formValues.name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />
        </div>         
        */}
        <div>
          <label>Name</label>
          <input
            type="text"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            value={formValues.age}
            onChange={(e) =>
              setFormValues({ ...formValues, age: e.target.value })
            }
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            value={formValues.city}
            onChange={(e) =>
              setFormValues({ ...formValues, city: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormSubmit;
