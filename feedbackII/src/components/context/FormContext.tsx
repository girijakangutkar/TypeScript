import React, { createContext, useState } from "react";

export const FeedBackContext = createContext(null);

const FormContext = ({ children }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [feedBack, setFeedBack] = useState<string>("");
  const [data, setData] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData([...data, { name, email, feedBack }]);
    alert(`${name}, ${email}, ${feedBack}`);
    setName("");
    setEmail("");
    setFeedBack("");
  };

  return (
    <FeedBackContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        setFeedBack,
        feedBack,
        handleSubmit,
        data,
        setData,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FormContext;
