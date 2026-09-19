export function Card({ children, className = "" }) {
    return (
        <div
        className={`rounded-lg border border-border bg-surface p-6 ${className}`}
        >
        {children}
        </div>
    );
}

export function CardHeader({ children, className = "" }) {
    return (
        <div className={`mb-4 flex flex-col gap-3 ${className}`}>{children}</div>
    );
}

export function CardTitle({ children }) {
    return <h3 className="text-lg font-bold text-text">{children}</h3>;
}

export function CardContent({ children }) {
    return <div>{children}</div>;
}
