import { LeftComponent } from "@/app/features/auth/components/LeftComponent"
import { RightComponent } from "@/app/features/auth/components/RightComponent"

export default function Register(){
    return (
        <div className="h-screen w-screen grid grid-cols-2">
            <div><RightComponent/></div>
            <div>
                <LeftComponent/>
            </div>
        </div>
    )
}