export default function BackButton(){
    return  <div
    className="bg-[#454545] w-[50%] flex justify-center items-center text-white"
    onClick={(e) => {
      window.location.href = "/";
    }}
  >
    Back
  </div>
}