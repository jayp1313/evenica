import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("max-w-6xl mx-auto h-full px-4 sm:px-8 lg:px-8", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
