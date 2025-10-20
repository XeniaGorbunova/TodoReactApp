import { compose } from "@reduxjs/toolkit";
import type { FC } from "react";
import { TanStackQuery } from "./withTanStackQuery";
import { withStore } from "./withStore";


export const withProviders = compose<FC>(TanStackQuery, withStore);