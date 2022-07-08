import Image from "next/image";
import img from '../../../../assets/pexels-pixabay-35888.jpg'
const Card = ({ data }) => {
    return (
        // <div className="card d-flex h-16">
        //     <div className="">
        //         <Image src={img} width='40%' height='40%' alt="Icon" />
        //     </div>
        //     <div className="">
        //         {data.title} {data?.subTitle && data.subTitle != "" ? <span>?</span> : null}
        //     </div>
        // </div>
        <div className="card mb-3" >
            <div class="row ">
                <div class="card-body px-4 py-2 ">
                    <p class="card-title">{data?.title} {data.subTitle && data.subtitle != 'null' ? <span>?</span> : null}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;