import { LeftComponent } from "./LeftComponent";
import { RightComponent } from "./RightComponent";

export default function Login(){
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <RightComponent />

            <div className="hidden md:block">
                <LeftComponent />
            </div>
        </div>
    )
}