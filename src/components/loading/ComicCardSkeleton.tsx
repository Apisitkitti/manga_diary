import { Card, CardBody, CardFooter, Skeleton } from '@heroui/react'

const ComicCardSkeleton = () => {
    return (
        <Card shadow="sm" className="w-[215px] cursor-pointer">
            <div className="relative h-[200px] w-[200px]">
                <Skeleton className="absolute top-0 right-0 h-[50px] w-[50px] rounded" />
                <Skeleton className="h-full w-full rounded-2xl bg-black" />
            </div>
            <CardBody className="flex flex-col space-y-1 p-3">
                <Skeleton className="h-6 w-[50px] rounded-2xl bg-black" />
            </CardBody>
            <CardFooter className="p-3">
                <Skeleton className="h-6 w-[100px] rounded-2xl bg-black" />
            </CardFooter>
        </Card>
    )
}
export default ComicCardSkeleton
