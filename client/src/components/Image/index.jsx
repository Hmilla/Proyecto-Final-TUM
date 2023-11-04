export default function Image({src, className, description}){
    return(
        <div className={className}>
            <img
              src={src}
              alt=""
              className="object-contain lg:object-cover "
            />
            <p className="fontfamily-lora italic text-sm text-google-blue/60">{description}</p>
        </div>
    )
}