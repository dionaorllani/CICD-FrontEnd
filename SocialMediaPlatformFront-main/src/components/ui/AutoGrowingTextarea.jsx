import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import styles from "./AutoGrowingTextarea.module.css";

function AutoGrowingTextarea({
  placeholderText = "Share your thoughts here...",
}) {
  const { theme } = useTheme();

  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setText(e.target.value);
    autoResizeTextarea();
  };

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set new height
  };

  return (
    <Form.Control
      as="textarea"
      value={text}
      onChange={handleInput}
      placeholder={placeholderText}
      className={`mt-1 ${styles.placeholder} light text-${
        theme === "light" ? "dark" : "light"
      }`}
      ref={textareaRef}
      style={{ overflow: "hidden", backgroundColor: "var(--bs-secondary)" }}
    />
  );
}

export default AutoGrowingTextarea;
