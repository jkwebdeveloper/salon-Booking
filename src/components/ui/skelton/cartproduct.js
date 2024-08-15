import { Skeleton } from "@/components/ui/skeleton"

export function CartProduct() {
     return (
          <div className="flex flex-col w-full space-y-3">
               <div className="flex items-center justify-between">
                    <Skeleton className="w-32 h-6 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 h-6 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 h-5 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 rounded-full h-7 bg-primary/10" />
               </div>
               <div className="flex items-center justify-between">
                    <Skeleton className="w-32 h-6 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 h-6 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 h-5 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 rounded-full h-7 bg-primary/10" />
               </div>
               <div className="flex items-center justify-between">
                    <Skeleton className="w-32 h-6 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 h-6 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 h-5 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 rounded-full h-7 bg-primary/10" />
               </div>
               <div className="flex items-center justify-between">
                    <Skeleton className="w-32 h-6 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 h-6 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 h-5 rounded-md bg-primary/10" />
                    <Skeleton className="w-20 rounded-full h-7 bg-primary/10" />
               </div>
          </div>
     )
}
