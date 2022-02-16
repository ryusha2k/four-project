import { createAction } from "@reduxjs/toolkit";

export const updateVersion = createAction<void>('global|update-version');

export default updateVersion;
