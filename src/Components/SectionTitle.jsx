import "./title.scss";

const SectionTitle = ({ title }) => {
  return (
    <div className="title-of-any font-titleFont text-3xl font-semibold flex text-center capitalize items-center">
      <span className="hidden md:inline-flex md:w-40 lgl:w-12 h-[3.5px] bg-gray-700 mr-6"></span>
      {title}
      <span className="hidden md:inline-flex md:w-40 lgl:w-12 h-[3.5px] bg-gray-700 ml-6"></span>
    </div>
  );
};

export default SectionTitle;
