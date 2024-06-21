"use client";

import { ReactNode, useState } from "react";

export default function Template({children}:{children:React.ReactNode}) {
    const [state, setState] = useState(0);
    return(

        // {/* <h1>template {state}</h1> */}
        // {/* <button onClick={()=> setState(state + 1)}>Klik</button> */}
        <div>{children}</div>
    );
}