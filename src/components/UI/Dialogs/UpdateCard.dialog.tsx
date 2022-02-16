import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import * as React from "react";
import DialogActions from "@mui/material/DialogActions";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useMemo, useState } from "react";
import { dialogContent, EUpdateCardDialog } from "./enums/update-card.enum";

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiPaper-root': {
        width: '100%',
        height: 'auto',
        maxWidth: '400px',
    },
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        width: '100%',
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const {children, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};


export interface Props {
    handle: (price: string) => void;
    open: EUpdateCardDialog | null;
    setOpen: (value: EUpdateCardDialog | null) => void;
}


export default function UpdateCardDialog({handle, open, setOpen}: Props) {
    const [inputValue, setInputValue] = useState<string>('');
    const isValid: boolean = useMemo(() => inputValue.length > 0, [inputValue]);
    const handleClose = () => {
        setOpen(null);
        setInputValue('');
    };

    const handleClick = () => {
        handle(inputValue);
        setInputValue('');
    }

    return (
        <>
            {
                open !== null &&
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="update-dialog"
                    open
                >
                    <BootstrapDialogTitle id="update-dialog" onClose={handleClose}>
                        {dialogContent[open]?.title}
                    </BootstrapDialogTitle>
                    {
                        dialogContent[open]?.inputLabel !== '' &&
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                <TextField
                                    id="price"
                                    size='small'
                                    label={dialogContent[open]?.inputLabel}
                                    variant="outlined"
                                    type="text"
                                    sx={{
                                        width: '100%'
                                    }}
                                    value={inputValue}
                                    onChange={
                                        (event: React.ChangeEvent<HTMLInputElement>) =>
                                            setInputValue(event.target.value)
                                    }
                                />
                            </Typography>
                        </DialogContent>
                    }
                    <DialogActions>
                        <Button
                            onClick={handleClick}
                            variant="contained"
                            disabled={!isValid}
                            sx={{width: '100%'}}
                        >
                            {dialogContent[open]?.button}
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            }
        </>

    );
}
