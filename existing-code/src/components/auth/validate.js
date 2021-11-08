export default function validateSignUp(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "This field is required";
  } else if (!/^[a-zA-Z ]+$/.test(values.name)) {
    errors.name = "Only letters allowed";
  }

  if (!values.email) {
    errors.email = "This field is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email";
  }

  if (!values.password) {
    errors.password = "This field is required";
  } else if (values.password.length < 8) {
    errors.password = "Password not long enough";
  } else if (!/(?=.*[A-Z])/.test(values.password)) {
    errors.password = "Password must have uppercase characters (A-Z)";
  } else if (!/^(?=.*[a-z])/.test(values.password)) {
    errors.password = "Password must have lowercase characters (a-z)";
  } else if (!/(?=.*[0-9])/.test(values.password)) {
    errors.password = "Password must have numeric characters (0-9)";
  } else if (!/(?=.*[!@#\$%\^&\*])/.test(values.password)) {
    errors.password = `Password must have special character`;
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "This field is required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password and Confirm Password should be same";
  }
  return errors;
}
