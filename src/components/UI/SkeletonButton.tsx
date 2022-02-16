import { styled } from "@mui/material/styles";
import { Skeleton } from "@mui/lab";
import React from "react";

export const StyledSkeletonButton = styled(Skeleton)(({theme}) => ({
    display: 'inline-block',
    borderRadius: theme.shape.borderRadius,
    height: '32px',
    width: '35%',
    marginRight: theme.spacing(1)
}));

export const SkeletonButton = () => {
    return (
        <StyledSkeletonButton
            animation="wave"
            variant="rectangular"/>
    );
}
