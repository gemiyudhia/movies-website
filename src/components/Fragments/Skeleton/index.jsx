import { Skeleton } from "@/components/ui/skeleton"

export const SkeletonCard = () =>  {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="min-h-screen w-full md:rounded-xl bg-neutral-600" />
    </div>
  )
}
