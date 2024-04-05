import { useIntl } from "react-intl";
import { Paper } from "@mui/material";

export const Welcome = () => {
    const intl = useIntl()
    const welcomeBackText = intl.formatMessage({ id: "welcomeBack" })
    return (
        <Paper style={{
            height: '100vh',
            borderRadius: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h2 id="welcomeBack">{welcomeBackText}</h2>
        </Paper>
    )
}