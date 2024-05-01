import Skeleton, { DefaultSkeleton } from "@/components/loaders/Skeleton";

export default function SettingsLoading() {
    return (
        <div>
            <Skeleton>
                <DefaultSkeleton />
            </Skeleton>
        </div>
    );
}
