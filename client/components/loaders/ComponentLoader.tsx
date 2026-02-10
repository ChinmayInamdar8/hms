
interface ComponentLoader{
    isActive:boolean,
    width:number,
    height:number
}

export default function ComponentLoader({isActive, width, height}:ComponentLoader) {
  return (
    <div
      className={`${isActive ? "flex" : "hidden"}`}
    >
      <div className={`w-${width} h-${width} border-4 border-gray-200 border-t-sky-600 rounded-full animate-spin`}></div>
    </div>
  );
}
