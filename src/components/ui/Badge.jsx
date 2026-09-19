export function Badge({ children, variant = "default" }) {
    const styles =
        variant === "accent"
        ? "bg-primary-light text-primary-dark"
        : "bg-primary-light text-text";

    return (
        <span
        className={`inline-flex rounded-full px-3 py-2 text-xs font-bold ${styles}`}
        >
        {children}
        </span>
    );
}
