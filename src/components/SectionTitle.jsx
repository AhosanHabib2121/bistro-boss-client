
const SectionTitle = ({heading, subHeading}) => {
    return (
        <section className=" max-w-xs mx-auto text-center">
            <p className=" text-[#D99904] text-xl font-normal mb-2">{ subHeading }</p>
            <h3 className=" text-3xl font-medium border-[#cbcbcb] border-y-4 py-4">{ heading }</h3>
        </section>
    );
};

export default SectionTitle;