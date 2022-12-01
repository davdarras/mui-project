export type NotificationType = {
  message: string;
  type: "default" | "error" | "success" | "warning" | "info" | undefined;
};

export type NotifierType = {
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
  success: (message: string) => void;
};
