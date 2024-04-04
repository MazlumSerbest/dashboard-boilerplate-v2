import { LoaderCircle } from "lucide-react";
import Logo from "../navigation/Logo";

export default function Loader() {
    return (
        <div className="flex size-full items-center justify-center">
            <LoaderCircle className="animate-spin size-12 text-indigo-400" />
        </div>
    );
}

export function MainLoader() {
    return (
        <div className="flex animate-pulse w-screen h-dvh items-center justify-center">
            <Logo
                width={120}
                height={50}
            />
        </div>
    );
}
