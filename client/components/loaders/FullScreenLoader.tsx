

export default function FullScreenLoader({isActive}:{isActive:boolean}){
    return (
        
<div role="status" className={`w-screen h-screen fixed top-0 left-0 z-50 ${isActive ? 'flex' : 'hidden'} justify-center items-center`}>
    <div className="w-15 h-15 border-5 border-gray-200 border-t-sky-600 rounded-full animate-spin"></div>
    <span className="sr-only">Loading...</span>
</div>

    )
}