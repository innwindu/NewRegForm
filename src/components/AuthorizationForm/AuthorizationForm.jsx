import Input from "../Input/Input";
import { placeholder } from "../Placeholder";
import { useState } from "react";
import { regExp } from "../RegExp";
import { fieldErrors } from "../errors";

export default function AuthorizationForm() {
  const [user, setUser] = useState("");
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = validateForm(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setUser("User successfully created!");
    }
  }

  function validateForm(data) {
    const errors = {};
    if (data.fullName === "") {
      errors.fullName = fieldErrors.emptyField;
    } else if (regExp.nameRegExp.test(data.fullName) === false) {
      errors.fullName = fieldErrors.fullName;
    }
    if (data.email === "") {
      errors.email = fieldErrors.emptyField;
    } else if (regExp.emailRegExp.test(data.email) === false) {
      errors.email = fieldErrors.email;
    }
    if (data.password === "") {
      errors.password = fieldErrors.emptyField;
    }
    if (data.confirmPassword === "") {
      errors.confirmPassword = fieldErrors.emptyField;
    }
    if (data.password !== data.confirmPassword) {
      errors.password = fieldErrors.confirmPassword;
      errors.confirmPassword = fieldErrors.confirmPassword;
    }
    return errors;
  }

  return (
    <div className="container">
      <h1>Get register for free</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder={placeholder.name}
          value={values.fullName}
          onChange={handleInputChange}
          name="fullName"
          label={errors.fullName}
        />
        <Input
          type="text"
          placeholder={placeholder.email}
          value={values.email}
          onChange={handleInputChange}
          name="email"
          label={errors.email}
        />
        <Input
          type="password"
          placeholder={placeholder.password}
          value={values.password}
          onChange={handleInputChange}
          name="password"
          label={errors.password}
        />
        <Input
          type="password"
          placeholder={placeholder.confirmPassword}
          value={values.confirmPassword}
          onChange={handleInputChange}
          name="confirmPassword"
          label={errors.confirmPassword}
        />

        <button type="submit" className="btn">
          <div className="text">Confirm registration</div>
        </button>
      </form>
      <p className="user">{user}</p>
    </div>
  );
}
