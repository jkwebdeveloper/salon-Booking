import { Skeleton } from "@/components/ui/skeleton"

export function Staff() {
     return (
          <div className="flex flex-col space-y-3">
               <div className="flex gap-4">
                    <Skeleton className="w-20 h-20 mx-auto rounded-full bg-primary/10" />
               </div>
               <div className="space-y-2">
                    <Skeleton className="w-full h-4 rounded-md bg-primary/10" />
               </div>
          </div>
     )
}
