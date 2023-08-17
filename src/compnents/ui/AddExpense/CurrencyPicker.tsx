export default function CurrencyPicker() {
  return (
    <div className="w-[20vw] lg:w-[8vw] mt-2 lg:mt-0 pl-1 lg:pl-2">
      <p
        className="p-4 bg-[#f0ffcf] flex justify-between items-center"
        placeholder=""
      >
        <span> USD</span>
        <span className="text-2xl rotate-90 "> {">"}</span>
      </p>
    </div>
  );
}
