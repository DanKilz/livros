import React from "react";
import Link from "next/link";
import LivroLista from "@/pages/LivroLista";

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-light bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  href="/LivroLista" className="nav-link">
                            Catálogo
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/LivroDados" className="nav-link">
                            Novo
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}