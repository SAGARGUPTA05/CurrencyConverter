
function ButtonBtn({ colortype, setColor }) {
  return (
    <button
      className="w-32 h-16 bg-white rounded-md shadow-slate-800 uppercase text-center text-white"
      style={{ backgroundColor: colortype }}
      onClick={() => setColor(colortype)}
    >
      {colortype}
    </button>
  );
}

export default ButtonBtn;
