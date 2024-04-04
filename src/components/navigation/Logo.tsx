import Image from "next/image";

type Props = {
    width: number;
    height: number;
};

export default function Logo({ width = 100, height = 100 }: Props) {
    return (
        <div className="flex justify-center">
            <Image
                src="/images/vercel.svg"
                width={width}
                height={height}
                alt="Company Logo"
            />
        </div>
    );
}
