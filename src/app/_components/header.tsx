import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center my-8 mx-20  border-b ">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/" className="hover:underline">
          Hari
        </Link>
      </h2>
      <div className="flex space-x-6">
        <h4>
          <Link href="/" className="hover:underline">
            Work
          </Link>
        </h4>
        <h4>
          <Link href="/" className="hover:underline">
            Experiment
          </Link>
        </h4>
        <h4>
          <Link href="/" className="hover:underline">
            Inspirations
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Header;
