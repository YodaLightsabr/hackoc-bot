import { View } from '@conflict/beta/view';
import { deleteAfter } from '@conflict/beta/hooks';
import { StatelessButton, Button, ActionRow, Embed } from '@conflict/beta/components';
let phrases = ["Discord Bots", "Slash Commands", "Message Components", "User Interfaces", "Scalable Bots", "User Experiences"];
export default function () {
  return new View(global.__ConflictViewParser("message", {
    content: "Welcome to Conflict!"
  }, global.__ConflictViewParser("embeds", null, global.__ConflictViewParser("embed", {
    color: "#ff3333",
    image: {
      url: "https://www.gitbook.com/cdn-cgi/image/width=32,height=32,fit=contain,dpr=1,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqKkjNKHtBhCUHveEGTY2%252Ficon%252F2sgixS2pVqtWMiBvRGg2%252FConflict.png%3Falt%3Dmedia%26token%3D24c0b0f6-f987-46ca-b4a5-8f193d650bcb"
    }
  }, global.__ConflictViewParser("title", null, "Conflict"), global.__ConflictViewParser("description", null, "Build better **", phrases[Math.floor(Math.random() * 1000) % 6], "**."))))).useHooks(deleteAfter(5000));
}