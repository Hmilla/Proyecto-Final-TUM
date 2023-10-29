export default function Title({className, title}) {
  return (
    <div className={`${className} text-white h-[80px] flex items-center px-5 text-4xl sm:px-20 sm:text-5xl sm:h-[120px]`}>
      <h1>
        <span className="font-bold">| </span> {title}
      </h1>
    </div>
  );
}
