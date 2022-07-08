import Image from "next/image";
import img from "../../../../assets/pexels-pixabay-35888.jpg";
const Card = ({ data }) => {
  return (
    <div className="card mb-3 shadow">
      <div class="">
        <div class="card-body px-4 py-2 ">
          <p class="card-title font-semibold">
            {data?.title}{" "}
            {data.subTitle && data.subtitle != "null" ? <span>?</span> : null}
          </p>
          <p className="text-secondary text-ellipsis text-sm">{data.subtitle !='null'? data.subtitle:null}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
