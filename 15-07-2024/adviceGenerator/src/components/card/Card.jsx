const Card = ({ children }) => {
  return (
    <div className="bg-BluGrey text-center rounded-xl shadow-3xl p-8 h-64 my-8 mx-auto relative">
      {children}
    </div>
  );
};
export default Card;
