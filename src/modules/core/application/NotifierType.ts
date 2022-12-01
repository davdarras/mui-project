export type NotificationType = {
  message: string;
  type: "default" | "error" | "success" | "warning" | "info" | undefined;
};

export type NotifierType = {
  notify: (notification: NotificationType) => void;
};
