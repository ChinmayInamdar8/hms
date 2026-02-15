
interface FeatureBox{
    title:string,
    description:string
}

const homePageFeatureList:FeatureBox[] = [
    {
        title:"Schedule Appointment",
        description:"Makes it Easy for patients to Book Appointment online from anywhere & anytime."
    },
    {
        title:"OPD Management",
        description:"Easily Manage Appointments with one."
    },
    {
        title:"IPD Management",
        description:"This module of hospital management system is designed to manage all Inpatient department"
    },
]

export default function Features(){
    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-center my-20 md:my-70">
            {homePageFeatureList.map((value, index)=><FeatureBox title={value.title} description={value.description} key={value.title} />)}
        </div>
    )
}


function FeatureBox({title, description}: FeatureBox){
    return (
        <div className="w-80 h-40 border border-slate-700 rounded-xl p-4 shadow-xl my-4">
                <h2 className="text-xl font-semibold text-center mb-10">{title}</h2>
                <p className="text-slate-600 text-center">{description}</p>
        </div>
    )
}