

export default function PriceInput(){
    return   <div className="w-[40vw] lg:w-[15vw] flex flex-col relative m-1">
    <span> Price</span>
    <span className="absolute left-[4%] top-[47%] font-bold text-lg">
      $
    </span>
    <input
      className="p-4 pl-8 bg-[#f0ffcf]"
      placeholder="Price"
      type="number"
    />
  </div>
}