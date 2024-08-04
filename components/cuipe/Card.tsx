type TCard = {
    className?: string;
    children?: React.ReactNode;
};
type TCardHeader = {
    className?: string;
    children?: React.ReactNode;
};
type TCardContent = {
    className?: string;
    children?: React.ReactNode;
};
function Card({ children, className }: TCard) {
    return (
        <div
            className={`w-full h-full shadow-[0_10px_15px_-3px_#0F172A14] border rounded-sm border-blueGray-200 ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
}
function CardHeader({ children, className }: TCardHeader) {
    return (
        <div
            className={`border-b border-blueGray-100 px-5 py-4 [&>*]:text-base [&>*]:font-semibold [&>*]:text-blueGray-800 ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
}
function CardContent({ children, className }: TCardContent) {
    return <div className={`px-5 py-4 ${className || ""}`}>{children}</div>;
}

export { Card, CardHeader, CardContent };
