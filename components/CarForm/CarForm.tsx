import css from "./CarForm.module.css";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  date?: string;
  comment?: string;
}

const CarForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    date: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      currentErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      currentErrors.email = "Email is required";
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      console.log("Form data:", formData);
      // reset form
      setFormData({
        name: "",
        email: "",
        date: "",
        comment: "",
      });
    }
  };

  return (
    <div className={css.container}>
      <div className={css.ttl}>
        <h2 className={css.title}>Book your car now</h2>
        <p className={css.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          name="name"
          className={css.input}
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}

        <input
          id="email"
          type="email"
          name="email"
          className={css.input}
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

        <input
          id="date"
          type="text"
          name="date"
          className={css.input}
          placeholder="Booking date"
          value={formData.date}
          onChange={handleChange}
        />

        <input
          id="comment"
          type="text"
          name="comment"
          className={css.comment}
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
        />

        <button type="submit" className={css.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default CarForm;
