import { Embed } from "@conflict/beta/components";

export default function CommandResponse ({ children, error, message, title, emoji }) {
    if (error) return (
        <Embed color="#ff3333">
            <title>❗ {title}</title>
            <description>{error}</description>
            {children}
        </Embed>
    );
    else return (
        <Embed color="#33ff33">
            <title>{emoji} {title}</title>
            <description>{message}</description>
            {children}
        </Embed>
    )
}