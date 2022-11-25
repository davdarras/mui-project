import { useSnackbar } from "notistack";

type ToastType = "default" | "error" | "success" | "warning" | "info";
export const useToast = () => {
  const { enqueueSnackbar } = useSnackbar();

  const addToast = (message: string, type?: ToastType) => {
    if (type === undefined) {
      type = "default";
    }
    enqueueSnackbar(message, {
      variant: type,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  return { addToast };
};

useToast.displayName = "useToast";
