import React from "react";

interface SectionInputGroupProps extends React.ComponentPropsWithoutRef<"section"> {
    children: React.ReactNode;
    title: string;
}

export default function Section({ children, title, ...props }: SectionInputGroupProps) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}