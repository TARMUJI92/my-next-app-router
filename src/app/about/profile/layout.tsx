import { ReactNode } from "react";

export default function ProfileLayout({children}:{children:ReactNode}) {
    return(
        <>
        <h1>Title</h1>
        <div>{children}</div>
        </>
    )
}
