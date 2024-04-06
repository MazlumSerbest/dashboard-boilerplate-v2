import { CheckCircle2, XCircle } from "lucide-react";

interface Props {
    value: boolean;
    showText?: boolean;
    // size?: "sm" | "md" | "lg" | undefined;
    // variant?:
    //     | "dot"
    //     | "flat"
    //     | "solid"
    //     | "bordered"
    //     | "light"
    //     | "faded"
    //     | "shadow"
    //     | undefined;
}

export default function BoolChip(props: Props) {
    const { value, showText } = props;

    return (
        // <Chip
        //     color={value == true ? "success" : "danger"}
        //     size={size || "sm"}
        //     variant={variant || "flat"}
        // >
        <div className="w-full">
            <div
                className={
                    "flex items-center " +
                    (value ? "bg-green-100" : "bg-red-100") +
                    "  p-1 rounded-full w-min"
                }
            >
                {value ? (
                    <CheckCircle2 className="text-xl text-green-600" />
                ) : (
                    <XCircle className="text-xl text-red-500" />
                )}
                {showText ? (
                    <p
                        className={
                            (value ? "text-green-600" : "text-red-500") +
                            " mx-1"
                        }
                    >
                        {value == true ? "Yes" : "No"}
                    </p>
                ) : null}
            </div>
        </div>
        // </Chip>
    );
}
