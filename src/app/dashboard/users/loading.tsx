import Skeleton, { DefaultSkeleton } from "@/components/loaders/Skeleton";

export default function UsersLoading() {
    return (
        <div>
            <Skeleton>
                <DefaultSkeleton />
            </Skeleton>
        </div>
    );
}
