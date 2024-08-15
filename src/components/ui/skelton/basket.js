import { Skeleton } from "@/components/ui/skeleton"

export function Basket() {
     return (
          <div className="flex flex-col w-full space-y-3">
               <div className="flex items-center justify-between">
                    <Skeleton className="w-64 h-6 rounded-md bg-primary/10" />
                    <Skeleton className="h-6 rounded-md w-36 bg-primary/10" />
                    <Skeleton className="h-6 rounded-md w-28 bg-primary/10" />
                    <Skeleton className="w-40 h-5 rounded-md bg-primary/10" />
                    <div className="flex items-center gap-4">
                         <Skeleton className="w-20 rounded-full h-7 bg-primary/10" />
                         <div className="flex items-center gap-4">
                              <Skeleton className="w-5 h-5 rounded-full bg-primary/10" />
                              <Skeleton className="w-5 h-5 rounded-full bg-primary/10" />
                         </div>
                    </div>
               </div>
          </div>
     )
}
