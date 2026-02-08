import React from "react";

export default function ContentWrapper({children}:{children:React.ReactNode}){
    return (
        <div className="w-full px-30 pt-15">
            {children}
        </div>
    )
}