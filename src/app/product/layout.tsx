import { ReactNode } from "react";

export default function Layout({ children, modal }: { 
    children: React.ReactNode;
    modal: ReactNode;
}) {
    return (
        <>
            {children}
            {modal}
        </>
    );
}