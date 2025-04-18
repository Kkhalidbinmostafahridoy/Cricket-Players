import background from '../../assets/background.jpg'
import banner from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div>
            <img src={background} alt="Banner" className='w-[1320px] h-[545px] mt-4' />
            <div>
                <img className= 'mx-[500px] mt-[-500px] w-[248px] h-[200px] rounded-md' src={banner} />
                <h1 className='text-slate-200 text-3xl mt-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-slate-100 mt-3'>Beyond Boundaries Beyond Limits</p>
                <button className='px-3 py-3 bg-yellow-400 text-black rounded-xl mt-4'>Clime Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;