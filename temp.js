import { useState } from "react";

const FormSubmit = () => {
  const [userForm, setUserForm] = useState({ name: "", age: "", city: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userForm);
  };

  return (
    <>
      FormSubmit
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={userForm.name}
            onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            value={userForm.age}
            onChange={(e) => setUserForm({ ...userForm, age: e.target.value })}
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            value={userForm.city}
            onChange={(e) => setUserForm({ ...userForm, city: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormSubmit;
