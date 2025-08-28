"use client";

import * as React from "react";



import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/app/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface BaseProps {
  children: React.ReactNode;
}

interface RootResponsiveDialogProps extends BaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface ResponsiveDialogProps extends BaseProps {
  className?: string;
  asChild?: true;
}

const ResponsiveDialogContext = React.createContext<{ isMobile: boolean }>({
  isMobile: false,
});

const useResponsiveDialogContext = () => {
  const context = React.useContext(ResponsiveDialogContext);
  if (!context) {
    throw new Error(
      "Credenza components cannot be rendered outside the Credenza Context"
    );
  }
  return context;
};

const ResponsiveDialog = ({
  children,
  ...props
}: RootResponsiveDialogProps) => {
  const isMobile = useIsMobile();
  const ResponsiveDialog = isMobile ? Drawer : Dialog;

  return (
    <ResponsiveDialogContext.Provider value={{ isMobile }}>
      <ResponsiveDialog {...props} {...(isMobile && { autoFocus: true })}>
        {children}
      </ResponsiveDialog>
    </ResponsiveDialogContext.Provider>
  );
};

const ResponsiveDialogTrigger = ({
  className,
  children,
  ...props
}: ResponsiveDialogProps) => {
  const { isMobile } = useResponsiveDialogContext();
  const ResponsiveDialogTrigger = isMobile ? DrawerTrigger : DialogTrigger;

  return (
    <ResponsiveDialogTrigger className={className} {...props}>
      {children}
    </ResponsiveDialogTrigger>
  );
};

const ResponsiveDialogClose = ({
  className,
  children,
  ...props
}: ResponsiveDialogProps) => {
  const { isMobile } = useResponsiveDialogContext();
  const ResponsiveDialogClose = isMobile ? DrawerClose : DialogClose;

  return (
    <ResponsiveDialogClose className={className} {...props}>
      {children}
    </ResponsiveDialogClose>
  );
};

const ResponsiveDialogContent = ({
  className,
  children,
  ...props
}: ResponsiveDialogProps) => {
  const { isMobile } = useResponsiveDialogContext();
  const ResponsiveDialogContent = isMobile ? DrawerContent : DialogContent;

  return (
    <ResponsiveDialogContent className={cn(className)} {...props}>
      {isMobile ? (
        <ScrollArea className="h-[500px] px-6">{children}</ScrollArea>
      ) : (
        <>{children}</>
      )}
    </ResponsiveDialogContent>
  );
};

const ResponsiveDialogDescription = ({
  className,
  children,
  ...props
}: ResponsiveDialogProps) => {
  const { isMobile } = useResponsiveDialogContext();
  const ResponsiveDialogDescription = isMobile
    ? DrawerDescription
    : DialogDescription;

  return (
    <ResponsiveDialogDescription className={className} {...props}>
      {children}
    </ResponsiveDialogDescription>
  );
};

const ResponsiveDialogHeader = ({
  className,
  children,
  ...props
}: ResponsiveDialogProps) => {
  const { isMobile } = useResponsiveDialogContext();
  const ResponsiveDialogHeader = isMobile ? DrawerHeader : DialogHeader;

  return (
    <ResponsiveDialogHeader className={className} {...props}>
      {children}
    </ResponsiveDialogHeader>
  );
};

const ResponsiveDialogTitle = ({
  className,
  children,
  ...props
}: ResponsiveDialogProps) => {
  const { isMobile } = useResponsiveDialogContext();
  const ResponsiveDialogTitle = isMobile ? DrawerTitle : DialogTitle;

  return (
    <ResponsiveDialogTitle className={className} {...props}>
      {children}
    </ResponsiveDialogTitle>
  );
};

const ResponsiveDialogBody = ({
  className,
  children,
  ...props
}: ResponsiveDialogProps) => {
  return (
    <div className={cn("px-4 md:px-0", className)} {...props}>
      {children}
    </div>
  );
};

const ResponsiveDialogFooter = ({
  className,
  children,
  ...props
}: ResponsiveDialogProps) => {
  const { isMobile } = useResponsiveDialogContext();
  const ResponsiveDialogFooter = isMobile ? DrawerFooter : DialogFooter;

  return (
    <ResponsiveDialogFooter className={cn(className, "px-0")} {...props}>
      {children}
    </ResponsiveDialogFooter>
  );
};

export {
  ResponsiveDialog,
  ResponsiveDialogTrigger,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogBody,
  ResponsiveDialogFooter,
};
