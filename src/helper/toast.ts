import { toast, ToastOptions } from 'react-toastify';

export enum ToastType {
    SUCCESS,
    ERROR,
    WARNING,
}

export enum ToastMessageType {
    CREATE,
    UPDATE,
    ERROR,
}

const defaultToastOptions: ToastOptions = {
    position: 'bottom-right',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
};

export class ToastHelper {
    public static showToast(
        object: string,
        toastType: ToastType,
        messageType?: ToastMessageType,
        text?: string
    ) {
        const toastMessage: string = this.getMessage(object, messageType, text);

        switch (toastType) {
            case ToastType.SUCCESS:
                return toast.success(
                    toastMessage,
                    defaultToastOptions
                ) as string;
            case ToastType.ERROR:
                return toast.error(toastMessage, defaultToastOptions) as string;
            case ToastType.WARNING:
                return toast.warning(
                    toastMessage,
                    defaultToastOptions
                ) as string;
            default:
                return toast(toastMessage, defaultToastOptions) as string;
        }
    }

    private static getMessage(
        object: string,
        messageType?: ToastMessageType,
        toastText?: string
    ): string {
        if (toastText) {
            return toastText;
        }
        switch (messageType) {
            case ToastMessageType.CREATE:
                return `${object} successfully created!`;
            case ToastMessageType.ERROR:
                return 'An error occured. Please try again!';
            default:
                return 'Toast message!';
        }
    }
}
