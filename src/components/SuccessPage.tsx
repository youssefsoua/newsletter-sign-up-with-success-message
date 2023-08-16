interface ISuccessPageProps {
  email: string;
}
const SuccessPage = (props: ISuccessPageProps) => {
  const { email } = props;
  return (
    <section className="flex h-full flex-col justify-between px-6 pb-10 pt-40 lg:p-0">
      <div className="flex flex-col">
        <img src="./icon-success.svg" alt="Success" className="w-16" />
        <h1 className="pb-4 pt-10 text-[2.5rem] font-bold leading-none text-charcoal-grey lg:text-5xl">
          Thanks for subscribing!
        </h1>
        <p className="py-2 text-charcoal-grey">
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>

      <button className="mt-6 w-full rounded-lg bg-dark-slate-grey from-rose-500 to-tomato px-6 py-4 text-center text-base font-bold text-white hover:bg-gradient-to-r">
        Dismiss message
      </button>
    </section>
  );
};

export default SuccessPage;
