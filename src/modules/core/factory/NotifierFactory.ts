import { NotifierType } from "../application/NotifierType";
import getNotifier from "../infrastructure/Notifier";

export const makeNotifier = (): NotifierType => getNotifier();
