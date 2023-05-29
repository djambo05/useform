import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  return (
    <form
      style={{ padding: "40px" }}
      onSubmit={handleSubmit((data) => console.log(data, "submitting data"))}
    >
      <label>firstName</label>
      <tr></tr>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && <span>This field is required</span>}
      <tr></tr>
      <label>secondName</label>
      <tr></tr>
      <input {...register("secondName", {})} />
      <tr></tr>
      <label>age</label>
      <tr></tr>
      <input {...register("age", { required: true, valueAsNumber: true })} />
      {errors.age && <span>This field is required</span>}
      <tr></tr>
      <label>gender</label>
      <tr></tr>
      <input {...register("gender", { required: true })} />
      {errors.gender && <span>This field is required</span>}
      <tr></tr>
      <input type="submit" />
    </form>
  );
}

export default App;
