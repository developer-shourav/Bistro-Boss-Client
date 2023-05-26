

const SectionTitle = ({subHeading, mainHeading}) => {
    return (
        <div className="text-center md:4/12 mx-auto my-10">
            <p className="text-[#D99904] mb-2">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 p-4 inline-block">{mainHeading}</h3>
        </div>
    );
};

export default SectionTitle;