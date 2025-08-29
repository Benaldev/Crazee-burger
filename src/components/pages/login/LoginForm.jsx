import React, { useState } from "react";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom"
        value={inputValue}
        onChange={handleChange}
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}
