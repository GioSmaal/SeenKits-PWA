import { useState } from "react";

function kit({props}) {
    console.log(`${props}`);
    return (
        <div>
            <div className='bg-dynamicKit bg-contain bg-no-repeat w-36 h-36'>
                <p className="text-black underline underline-offset-1">{`bla ${props}`}</p>
            </div>
        </div>

    )
}

export default kit