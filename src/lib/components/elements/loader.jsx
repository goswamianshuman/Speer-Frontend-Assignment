import { Loader as Loading } from "lucide-react";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils/shadcn";

const loadingVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      small: "h-2 w-2",
      large: "h-6 w-6",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const Loader = ({ size }) => {
  return <Loading className={cn(loadingVariants({ size }))} />;
};
