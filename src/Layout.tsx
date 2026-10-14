import type { ReactNode } from "react";

interface layoutProps {
    encabezado: ReactNode;
    pie: ReactNode;
    children: ReactNode;

}

export function Layout({encabezado, pie, children}: layoutProps){
    return(
        <div className="tienda">
        {encabezado}
        <main className="contenido">{children}</main>
        {pie}
        </div>
    );
}