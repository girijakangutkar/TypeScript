import { useSelector, useDispatch } from "react-redux";
import { onChange, handleSubmit } from "../redux/FormReducer";
import type { RootState, AppDispatch } from "../redux/store";

const Feedback: React.FC = () => {
  const form = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const processedValue = name === "rating" ? Number(value) : value;
    dispatch(onChange(name as keyof typeof form, processedValue));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(handleSubmit(form));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          name="rating"
          value={form.rating}
          onChange={handleInputChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div>
        <label htmlFor="feedback">Feedback</label>
        <textarea
          id="feedback"
          name="feedback"
          value={form.feedback}
          onChange={handleInputChange}
          rows={4}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Feedback;
