import { ChangeEvent, FormEvent, useMemo, useState } from "react";

interface ISubscriptionPageProps {
  email: string;
  onEmailChange: (newEmail: string) => void;
  onSubmit: () => void;
}

const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SubscriptionPage = (props: ISubscriptionPageProps) => {
  const { email, onEmailChange, onSubmit } = props;

  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setIsEmailValid(emailValidationRegex.test(newEmail));
    onEmailChange(newEmail);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const isDisabled = useMemo(
    () => !isEmailValid || email.trim() === "",
    [isEmailValid, email]
  );

  return (
    <>
      <section className="w-full overflow-hidden rounded-b-2xl lg:w-[60%] lg:rounded-2xl">
        <img
          src="./illustration-sign-up-mobile.svg"
          alt="Sign Up"
          className="w-full lg:hidden"
        />
        <img
          src="./illustration-sign-up-desktop.svg"
          alt="Sign Up"
          className="hidden lg:block lg:w-[400px]"
        />
      </section>
      <section className="px-4 py-6 lg:py-16 lg:pl-8 lg:pr-14">
        <h1 className="py-2 text-[2.5rem] font-bold text-charcoal-grey lg:text-[3.5rem]">
          Stay updated!
        </h1>
        <p className="py-2 text-charcoal-grey">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="pb-4 pt-2 text-charcoal-grey">
          <li className=" flex items-start py-1.5">
            <img src="./icon-list.svg" alt="-" className="mr-4" />
            Product discovery and building what matters
          </li>
          <li className=" flex items-start py-1.5">
            <img src="./icon-list.svg" alt="-" className="mr-4" />
            Measuring to ensure updates are a success
          </li>
          <li className=" flex items-start py-1.5">
            <img src="./icon-list.svg" alt="-" className="mr-4" />
            And much more!
          </li>
        </ul>
        <form className="w-full py-2" onSubmit={handleFormSubmit}>
          <div className="mb-2 flex justify-between">
            <label
              htmlFor="email"
              className="text-xs font-bold text-dark-slate-grey"
            >
              Email address
            </label>
            {!isEmailValid && (
              <p className="text-xs font-bold text-tomato">
                Valid email is required
              </p>
            )}
          </div>
          <input
            type="text"
            id="email"
            placeholder="email@company.com"
            className={`w-full rounded-md border bg-white px-6 py-4 ${
              isEmailValid
                ? "border-grey"
                : "border-tomato bg-tomato/10 text-tomato"
            }`}
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className={`mt-6 w-full rounded-lg bg-dark-slate-grey from-rose-500 to-tomato px-6 py-4 text-center font-bold text-white hover:bg-gradient-to-r ${
              isDisabled ? "cursor-not-allowed" : " cursor-pointer"
            } `}
            type="submit"
            disabled={isDisabled}
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>
    </>
  );
};

export default SubscriptionPage;
