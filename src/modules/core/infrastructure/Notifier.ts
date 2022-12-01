import { useSnackbar } from "notistack";
import { NotificationType, NotifierType } from "../application/NotifierType";

const useNotifier = (): NotifierType => {
  const { enqueueSnackbar } = useSnackbar();

  const info = (message: string): void => {
    notify({ message: message, type: "info" });
  };

  const warn = (message: string): void => {
    notify({ message: message, type: "warning" });
  };

  const success = (message: string): void => {
    notify({ message: message, type: "success" });
  };

  const error = (message: string): void => {
    notify({ message: message, type: "error" });
  };

  const notify = (notification: NotificationType): void => {
    enqueueSnackbar(notification.message, {
      variant: notification.type,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  return { success, error, warn, info };
};

export default useNotifier;
