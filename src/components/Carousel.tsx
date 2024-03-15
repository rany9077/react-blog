import {useState} from "react";

const IMAGE_1_URL = 
"https://images.unsplash.com/photo-1709409903008-fbc1ce9b7dfa?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const IMAGE_2_URL = 
"https://images.unsplash.com/photo-1707588884167-c482104c6e4b?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const IMAGE_3_URL = 
"https://images.unsplash.com/photo-1707588884167-c482104c6e4b?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function Carousel(){
    const [acttiveImage,setActiveImage] = useState(1);
  
    console.log(acttiveImage)
    return(
        <div>
            <div className="carousel">
                <div className="carousel__slides">
                    <input type="radio" name="radio-buttons" id="img-1" checked={acttiveImage === 1} readOnly />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img src={IMAGE_1_URL} alt="" />
                        </div>
                        <div className="carousel__controls">
                            <label onClick={()=>setActiveImage(3)} className="carousel__slide-prev"><span>&lsaquo;</span></label>
                            <label onClick={()=>setActiveImage(2)} className="carousel__slide-next"><span>&rsaquo;</span></label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" id="img-2" checked={acttiveImage === 2} readOnly />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img src={IMAGE_2_URL} alt="" />
                        </div>
                        <div className="carousel__controls">
                            <label onClick={()=>setActiveImage(1)} className="carousel__slide-prev"><span>&lsaquo;</span></label>
                            <label onClick={()=>setActiveImage(3)} className="carousel__slide-next"><span>&rsaquo;</span></label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" id="img-3" checked={acttiveImage === 3} readOnly />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img src={IMAGE_3_URL} alt="" />
                        </div>
                        <div className="carousel__controls">
                            <label onClick={()=>setActiveImage(2)} className="carousel__slide-prev"><span>&lsaquo;</span></label>
                            <label onClick={()=>setActiveImage(1)} className="carousel__slide-next"><span>&rsaquo;</span></label>
                        </div>
                    </li>
                    <div className="carousel__dots">
                        <label onClick={()=>setActiveImage(1)} className="carousel__dot" id="img-dot-1"></label>
                        <label onClick={()=>setActiveImage(2)} className="carousel__dot" id="img-dot-2"></label>
                        <label onClick={()=>setActiveImage(3)} className="carousel__dot" id="img-dot-3"></label>
                    </div>
                </div>
            </div>
        </div>
    )
}