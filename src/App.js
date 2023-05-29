import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  console.log(watch(errors));
  return (
    <form
      style={{ padding: "40px" }}
      onSubmit={handleSubmit((data) => console.log(data, "submitting data"))}
    >
      <label>firstName</label>
      <tr></tr>
      <input
        {...register("firstName", {
          required: "This is Required!",
          minLength: {
            value: 2,
            message: `You need more than 1 symbols!`,
          },
          maxLength: {
            value: 25,
            message: `You exeeded 25 symbols!`,
          },
        })}
      />
      {errors.firstName && <span>{errors.firstName.message || "error!"}</span>}
      <tr></tr>
      <label>secondName</label>
      <tr></tr>
      <input
        {...register("secondName", {
          required: "This is Required!",
          minLength: {
            value: 2,
            message: `You need more than 1 symbols!`,
          },
          maxLength: {
            value: 25,
            message: `You exeeded 25 symbols!`,
          },
        })}
      />
      {errors.secondName && <span>{errors.secondName.message}</span>}
      <tr></tr>
      <label>age</label>
      <tr></tr>
      <input
        {...register("age", {
          required: "This is Required!",
          valueAsNumber: "this option has been a Number",
        })}
      />
      {errors.age && <span>{errors.age.message}</span>}
      <tr></tr>
      <label>gender</label>
      <tr></tr>
      <select {...register("gender", { required: "This is Required!" })}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      {errors.gender && <span>{errors.gender.message}</span>}
      <tr></tr>
      <input type="submit" />
    </form>
  );
}

export default App;
