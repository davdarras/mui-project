import { useSnackbar } from "notistack";
import { NotificationType, NotifierType } from "../application/NotifierType";

export const notifier = (): NotifierType => {
  const { enqueueSnackbar } = useSnackbar();

  const info = (notification: NotificationType): void => {
    if (notification.type === undefined) {
      notification.type = "default";
    }
    enqueueSnackbar(notification.message, {
      variant: notification.type,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  const notify = (notification: NotificationType): void => {
    if (notification.type === undefined) {
      notification.type = "default";
    }
    enqueueSnackbar(notification.message, {
      variant: notification.type,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  return { notify };
};
