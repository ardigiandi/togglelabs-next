export default function Tech() {
  return (
    <div className="max-w-6xl mx-auto mt-10 z-10 md:-mt-87.5 lg:mt-10 flex flex-col items-center gap-4 bg-transparent">
      <h1 className="text-sm lg:text-base font-normal leading-6 tracking-primary">
        Our Tech Stack
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <img
          src="/images/react.svg"
          alt=""
          className="bg-secondary p-3 rounded-2xl"
        />
        <img
          src="/images/next.svg"
          alt=""
          className="bg-secondary p-3 rounded-2xl"
        />
        <img
          src="/images/tailwind.svg"
          alt=""
          className="bg-secondary p-3 rounded-2xl"
        />
        <img
          src="/images/node.svg"
          alt=""
          className="bg-secondary p-3 rounded-2xl"
        />
        <img
          src="/images/figma.svg"
          alt=""
          className="bg-secondary p-3 rounded-2xl"
        />
        <img
          src="/images/postgresql.svg"
          alt=""
          className="bg-secondary p-3 rounded-2xl"
        />
        <img
          src="/images/mysql.svg"
          alt=""
          className="bg-secondary p-3 rounded-2xl"
        />
      </div>
    </div>
  );
}
