import { Skeleton } from "@/components/ui/skeleton"

export function SingleServiceSkelton() {
     return (
          <div className="flex flex-col w-full my-2 space-y-3">
               <Skeleton className="h-[250px] rounded-md bg-primary/10" />
               <Skeleton className="h-[20px] rounded-sm bg-primary/10" />
               <div className="flex gap-3">
                    <Skeleton className="h-8 rounded-full w-9 bg-primary/10" />
                    <Skeleton className="w-full h-12 rounded-sm bg-primary/10" />
               </div>
               <Skeleton className="h-[20px] rounded-sm bg-primary/10" />
               <Skeleton className="h-[20px] rounded-sm bg-primary/10" />
               <div className="flex gap-5">
                    <Skeleton className="w-full rounded-full h-9 bg-primary/20" />
                    <Skeleton className="w-full rounded-full h-9 bg-primary/20" />
               </div>
          </div>
     )
}
