import css from "./CarForm.module.css";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  date?: string;
  comment?: string;
}

const getTodayDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const CarForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    date: getTodayDate(),
    comment: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [showNotification, setShowNotification] = useState(false);

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

      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      setFormData({
        name: "",
        email: "",
        date: getTodayDate(),
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

      {showNotification && (
        <div className={css.notification}>
          ✅ Your car has been successfully booked!
        </div>
      )}

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
        {errors.name && <span className={css.error}>{errors.name}</span>}

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
        {errors.email && <span className={css.error}>{errors.email}</span>}

        <input
          id="date"
          type="date"
          name="date"
          className={css.inputDate}
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
