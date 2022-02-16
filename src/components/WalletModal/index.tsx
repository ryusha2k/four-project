import {
    Avatar,
    Button,
    Dialog,
    DialogContent,
    DialogTitle, IconButton, List, ListItemAvatar, ListItemButton, ListItemText,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import Close from "@mui/icons-material/Close";
import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { SxProps } from "@mui/system";
import { ConnectorNames, connectorNamesArray, walletsByName } from "../../utils/web3React";
import useAuth from "../../hooks/useAuth";

const DialogTitleLine = styled('div')({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

interface Props {
    text?: string;
    sx?: SxProps<Theme>;
}

export default function WalletModal({text, sx}: Props) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const {login, logout} = useAuth();
    const {account} = useWeb3React();

    useEffect(() => {
        if (account && open) {
            handleClose();
        }
    }, [account, open]);

    const handleClickOpen = () => {
        if (account) {
            logout();
        } else {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button sx={{...sx}} size='large' onClick={handleClickOpen}>
                {account ? 'Disconnect' : text || 'Connect'}
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: 'black',
                        backgroundImage: 'linear-gradient(35deg, rgba(255, 233, 2, 0.26), rgba(255,255,255,0.1), rgba(255, 100, 100, 0.05))'
                    }
                }}
            >
                <DialogTitle id="responsive-dialog-title">
                    <DialogTitleLine>
                        <div>Connect your wallet</div>
                        <IconButton onClick={handleClose}>
                            <Close/>
                        </IconButton>
                    </DialogTitleLine>
                </DialogTitle>
                <DialogContent sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <List sx={{
                        width: '100%',
                        maxWidth: 360,
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        {connectorNamesArray.map((key: ConnectorNames) => {
                            const option = walletsByName[key];
                            return (
                                <React.Fragment key={key}>
                                    <ListItemButton alignItems="center" onClick={() => login(key)} sx={{borderRadius: 1}}>
                                        <ListItemAvatar>
                                            <Avatar sx={{}} alt={option.name}
                                                    src={`/images/wallets/${option.iconName}`}/>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={option.name}
                                            secondary={option.description}
                                        />
                                    </ListItemButton>



                                </React.Fragment>
                            );
                        })}
                    </List>
                </DialogContent>
            </Dialog>
        </>

    );
}
