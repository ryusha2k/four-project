export const getTimeFromNow = (time: number): Date => {
    return new Date(new Date().getTime() + time * 1000);
}