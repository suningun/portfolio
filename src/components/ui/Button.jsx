export function Button({ children, href, variant = "primary" }) {
    const styles =
        variant === "primary"
        ? "bg-primary text-white hover:bg-primary-dark"
        : "border border-border bg-surface text-text hover:border-primary hover:text-primary";

    return (
        <a
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${styles}`}
        href={href}
        >
        {children}
        </a>
    );
}
