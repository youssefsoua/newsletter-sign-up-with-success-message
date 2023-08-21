interface ISuccessPageProps {
  email: string;
}
const SuccessPage = (props: ISuccessPageProps) => {
  const { email } = props;
  return (
    <section className="flex h-full flex-col justify-between px-6 pt-40 lg:p-0">
      <header className="flex flex-col">
        <img src="./icon-success.svg" alt="Success" className="w-16" />
        <h1 className="pt-10 text-[2.5rem] font-bold leading-none text-charcoal-grey lg:text-5xl">
          Thanks for subscribing!
        </h1>
      </header>
      <p className="py-9 text-charcoal-grey">
        A confirmation email has been sent to <strong>{email}</strong>. Please
        open it and click the button inside to confirm your subscription.
      </p>

      <button className="mt-2 w-full rounded-lg bg-dark-slate-grey from-rose-500 to-tomato px-6 py-4 text-center text-base font-bold text-white hover:bg-gradient-to-r">
        Dismiss message
      </button>
    </section>
  );
};

export default SuccessPage;
