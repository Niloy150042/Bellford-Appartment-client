

const Sectiontitle = ({subheading,heading}) => {
    return (
        <div className="flex justify-center  mt-16 mb-6" >

            <div className="text-center"  >
                <p className="text-3xl font-poppins text-orange-400 py-3" >{heading}</p>

                <p className="text-xl font-cinzel font-bold underline" >{subheading}</p>
            </div>
            
        </div>
    );
};

export default Sectiontitle;