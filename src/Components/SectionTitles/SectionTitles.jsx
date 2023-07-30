
const SectionTitles = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-3/12 text-center">
            <h3 className="text-yellow-600 mb-2">---{subHeading}---</h3>
            <p className="text-4xl border-y-4 py-4 uppercase">{heading}</p>
        </div>
    );
};

export default SectionTitles;