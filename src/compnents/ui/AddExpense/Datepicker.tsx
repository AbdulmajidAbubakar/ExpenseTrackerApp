import DatePicker from "react-date-picker";


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props={
    value:Value,
    onChange: React.Dispatch<React.SetStateAction<Value>>
}

export default function Datepicker({value,onChange}: Props){
    return      <div>
    <span>Dates</span>
    <div className="bg-[#f0ffcf] w-[40vw] lg:w-[20vw] h-[7vh]  pl-2 flex items-center">
      <DatePicker
        className={"w-[20vw] outline-none h-[5vh]"}
        onChange={onChange}
        value={value}
      />
    </div>
  </div>
}