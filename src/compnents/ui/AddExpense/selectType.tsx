
import Select, { GroupBase } from "react-select";

type Props={
    options: {
        value: string;
        label: string;
    }[],
    option: {
        value: string;
        label: string;
    }
}

export default function SelectType({options, option}: Props){

    const formatGroupLabel = (
        data: GroupBase<{ value: string; label: string }>
      ) => (
        <div>
          <span>{data.label}</span>
          {/* <span >{data.options.length}</span> */}
        </div>
      );
    
    return           <div>
    <span>Type</span>
    <span>
      <Select
        formatGroupLabel={formatGroupLabel}
        className="bg-[#ffffff] w-[30vw] h-[7vh] py-4"
        options={options}
        defaultValue={option}
        onChange={(value) => {
          console.log(value);
        }}
      />
    </span>
  </div>
}