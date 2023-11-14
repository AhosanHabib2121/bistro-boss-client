import { Parallax } from 'react-parallax';

const Cover = ({ bgImg, title, shortDes }) => {
    
    return (
        <Parallax
            blur={{ min: -40, max: 40 }}
            bgImage={bgImg}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className={'hero h-[600px]'} >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">{shortDes}</p>
                        </div>
                    </div>
                </div>
        </Parallax>
        
    );
};

export default Cover;
