
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
                <a href="auth/login" className="bg-teal-700 text-slate-100 py-1 px-5 rounded shadow-md hover:bg-teal-600">
                <div >
                    Login
                </div>
                </a>
            </div>
        </div>
    )
}