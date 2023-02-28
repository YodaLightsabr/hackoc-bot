import { ActionRow, Embed, Button } from '@conflict/beta/components';
import { getMessageUrl } from "../utils.js?n=16776051473994205";
export default function PreviewEmbed({
  children,
  message
}) {
  const imageUrl = message.attachments.first().url;
  return global.__ConflictViewParser("message", null, global.__ConflictViewParser(Embed, {
    color: 2680168,
    timesamp: Date.now(),
    author: {
      name: message.author.tag,
      icon_url: message.author.displayAvatarURL(),
      url: getMessageUrl(message)
    }
  }, global.__ConflictViewParser("title", null, "\uD83D\uDDBC\uFE0F New Scrapbook Post"), global.__ConflictViewParser("description", null, message.content), global.__ConflictViewParser("image", null, global.__ConflictViewParser("url", null, imageUrl)), children), global.__ConflictViewParser(ActionRow, null, global.__ConflictViewParser(Button, {
    label: "View in #\uD83D\uDDBC-scrapbook",
    url: getMessageUrl(message)
  })));
}