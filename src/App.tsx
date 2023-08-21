import { useState } from "react";
import SuccessPage from "./components/SuccessPage";
import SubscriptionPage from "./components/SubscriptionPage";

const App = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const onEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  const onSubmit = () => {
    setIsSuccess(true);
  };

  return (
    <article
      className={`flex h-full w-full flex-col bg-white lg:flex-row-reverse lg:rounded-[2rem] ${
        isSuccess
          ? "lg:h-[520px] lg:w-[504px] lg:p-16"
          : "lg:h-[641px] lg:w-[928px] lg:p-6"
      }`}
    >
      {isSuccess ? (
        <SuccessPage email={email} />
      ) : (
        <SubscriptionPage
          email={email}
          onEmailChange={onEmailChange}
          onSubmit={onSubmit}
        />
      )}
    </article>
  );
};

export default App;
