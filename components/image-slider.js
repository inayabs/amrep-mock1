import { useRef, useState } from "react";

const ImageSlider = ({file}) => {
    const [imageRevealFraq,setImageRevealFraq] = useState(0.5);
    const imageContainer = useRef(undefined);

    const slide = (xPosition) =>{
        const containerBoundingRect =
        imageContainer.current.getBoundingClientRect();

        setImageRevealFraq(() => {
        if (xPosition < containerBoundingRect.left) {
            return 0;
        } else if (xPosition > containerBoundingRect.right) {
            return 1;
        } else {
            return (
            (xPosition - containerBoundingRect.left) / containerBoundingRect.width
            );
        }
        });
    }
    const handleMouseDown = ()=>{
        window.onmousemove = handleMouseMove;
        window.onmouseup = handleMouseUp;
    }
    const handleMouseMove = (event)=>{
        slide(event.clientX);
    }
    const handleMouseUp = ()=>{
        window.onmousemove = undefined;
        window.onmouseup = undefined;
    }

    return ( 
        <div className="relative" ref={imageContainer} >
            <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" 
                style={{filter:file.filter, clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${imageRevealFraq * 100}% 100%, 0 100%)`}} 
                className="absolute inset-0"/>

                <div style={{left: `${imageRevealFraq * 100}%`}} className="absolute inset-y-0">
                    <div className="relative h-full">
                        <div className="absolute inset-y-0 bg-white w-0.5 -ml-px opacity-50"></div>
                        <div onMouseDown={handleMouseDown} className="h-12 w-12 rounded-full bg-white -ml-6 -mt-6 absolute top-1/2"></div>
                    </div>
                </div>
        </div>
     );
}
 
export default ImageSlider;