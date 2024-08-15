import { Skeleton } from "@/components/ui/skeleton"

export function TimeSelect() {
     return (
          <div className="flex flex-col space-y-3">
               <div className="flex gap-4">
                    <Skeleton className="w-24 h-8 rounded-md bg-primary/10" />
                    <Skeleton className="w-24 h-8 rounded-md bg-primary/10" />
                    <Skeleton className="w-24 h-8 rounded-md bg-primary/10" />
               </div>
               <div className="space-y-2">
                    <Skeleton className="w-full h-6 rounded-md bg-primary/10" />
                    <Skeleton className="w-full h-6 rounded-md bg-primary/10" />
                    <Skeleton className="w-full h-6 rounded-md bg-primary/10" />
                    <Skeleton className="w-full h-6 rounded-md bg-primary/10" />
               </div>
          </div>
     )
}
