
export default function MenuHeader(){
    return (
        <div className="w-full h-12 bg-slate-100 shadow-xl fixed top-0 left-0 flex justify-between items-center text-slate-600">
            {/* logo of the app  */}
            <div className="text-slate-700 font-medium ml-2">
                HMS.
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mr-6">
                <a href="/">About</a>
                <a href="/">Pricing</a>
                <a href="/">Features</a>
                <a href="/">Documentation</a>
                <a href="auth/login" className="bg-sky-600 text-white rounded shadow-2xs w-24 h-10 bg-linear-to-r from-pink-500 via-red-500 to-orange-500 p-0.5">
                <div className="bg-sky-600 w-full h-full flex justify-center rounded hover:bg-sky-700 transition duration-300 ease-in-out items-center">
                    Login
                </div>
                </a>
            </div>
        </div>
    )
}