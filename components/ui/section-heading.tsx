import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
    className?: string;
    accentIcon?: React.ReactNode;
}

export default function SectionHeading({
    title,
    subtitle,
    align = "center",
    className,
    accentIcon,
}: SectionHeadingProps) {
    const alignClass =
        align === "center"
            ? "text-center items-center"
            : align === "right"
                ? "text-right items-end"
                : "text-left items-start";

    return (
        <div className={cn("flex flex-col gap-3", alignClass, className)}>
            <div className="flex items-center gap-3 justify-center">
                {accentIcon && (
                    <span className="text-[#228573]">{accentIcon}</span>
                )}
                <div className="relative inline-block">
                    <h2 className="text-[36px] md:text-[42px] font-extrabold text-[#065b4b] leading-tight tracking-tight">
                        {title}
                    </h2>
                    {/* Wavy underline accent */}
                    <svg
                        className="absolute -bottom-3 left-0 w-full"
                        height="12"
                        viewBox="0 0 200 12"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 6 Q25 0 50 6 Q75 12 100 6 Q125 0 150 6 Q175 12 200 6"
                            stroke="#3aa692"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                        />
                    </svg>
                </div>
            </div>
            {subtitle && (
                <p className="text-[rgba(6,91,75,0.65)] text-lg mt-2 max-w-2xl">{subtitle}</p>
            )}
        </div>
    );
}
