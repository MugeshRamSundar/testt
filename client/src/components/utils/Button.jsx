const Button = ({ name }) => {
  return (
    <>
      <button className="bg-blue-500 px-3 text-white text-sm py-2 flex rounded-lg font-semibold hover:opacity-90">
        {name}
      </button>
    </>
  );
};

export default Button;
