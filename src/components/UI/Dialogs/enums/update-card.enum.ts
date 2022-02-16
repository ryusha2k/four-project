export enum EUpdateCardDialog {
    ADD,
    ADD_PENDING,
    ADD_SUCCESS,
    ADD_ERROR,
    UPDATE,
    UPDATE_PENDING,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    REMOVE,
    REMOVE_PENDING,
    REMOVE_SUCCESS,
    REMOVE_ERROR,
    SEND,
    SEND_PENDING,
    SEND_SUCCESS,
    SEND_ERROR,
}

export const dialogContent: { [key in EUpdateCardDialog]?: { title: string; button: string; inputLabel: string; } } = {
    [EUpdateCardDialog.ADD]: {
        title: 'Add to sale',
        inputLabel: 'Sale price (ETH)',
        button: 'Add'
    },
    [EUpdateCardDialog.UPDATE]: {
        title: 'Change the price',
        inputLabel: 'New price (ETH)',
        button: 'Update'
    },
    [EUpdateCardDialog.REMOVE]: {
        title: 'Remove from sale',
        inputLabel: '',
        button: 'Confirm'
    },
    [EUpdateCardDialog.SEND]: {
        title: 'Send to',
        inputLabel: 'Recipient address',
        button: 'Send'
    },


}
