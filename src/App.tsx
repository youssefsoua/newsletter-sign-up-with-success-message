import { useState } from "react";
import SuccessPage from "./components/SuccessPage";
import SubscriptionPage from "./components/subscriptionPage";

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
    <div
      className={`flex h-full w-full flex-col bg-white lg:flex-row-reverse lg:rounded-[2rem] ${
        isSuccess
          ? "lg:h-[520px] lg:w-[500px] lg:p-16"
          : "lg:h-[600px] lg:w-[920px] lg:p-6"
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
    </div>
  );
};

export default App;
