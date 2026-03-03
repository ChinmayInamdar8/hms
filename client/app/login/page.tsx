import { LeftComponent } from "./LeftComponent";
import { RightComponent } from "./RightComponent";

export default function Login(){
    return (
        <div className="h-screen w-screen grid grid-cols-2">
            <div><RightComponent/></div>
            <div>
                <LeftComponent/>
            </div>
        </div>
    )
}