export interface Theme {
    fonts: {
        robotoBold: string;
        robotoRegular: string;
        robotoMedium: string;
    };
    fontSizes: {
        buttonText: string;
        buttonTextWithSubtext: string;
        buttonSubtext: string;
        h1: string;
        h1Mobile: string;
        h2: string;
        h2Mobile: string;
        h3: string;
        h4: string;
        pSmall: string;
        pSmallMobile: string;
        pMedium: string;
        pMediumMobile: string;
        pLarge: string;
        pLargeMobile: string;
        input: string;
        inputLabel: string;
        inputDetail: string;
        inputDisabled: string;
        inputError: string;
        tooltip: string;
    };
    breakpoints: {
        sm: number;
        md: number;
    };
}
