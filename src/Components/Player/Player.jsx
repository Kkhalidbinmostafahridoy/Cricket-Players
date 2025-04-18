import { IoPeopleCircle } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
const Player = ({ player }) => {

    const { name, country, position, rating, price, behavior, img_url } = player

    return (
        <div>
            <div className=" card card-compact w-96 shadow-xl rounded-lg">
                <figure><img className="w-96 h-64 rounded-xl" src={img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  mt-2"><IoPeopleCircle /></h2>
                </div>
                <p className="mt-[-20px] mx-5 font-bold">{name}</p>
                <div className="mt-2">
                    <h1><CiFlag1></CiFlag1></h1>
                    <p className="mt-[-20px] mx-5 text-gray-400 w-[10px] h-[10px]">{country}</p>
                </div>
                <div className="ml-[215px] mt-[-20px]">
                    <button className="px-3 py-2 bg-slate-100 rounded-md ">{position}</button >
                </div>
                <div className="flex justify-between mt-2">
                    <p>Rating</p>
                    <p className="text-red-400">{rating}</p>
                </div>
                <div className="flex justify-between mt-2">
                    <h2>Behavior</h2>
                    <p>{behavior}</p>
                </div>
                <div className="flex justify-between mt-2">
                    <h1>Price: {price}</h1>
                    <button className="px-3 py-1 bg-blue-400 rounded-xl">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;