import { Embed } from "@conflict/beta/components";
export default function CommandResponse({
  children,
  error,
  message,
  title,
  emoji
}) {
  if (error) return global.__ConflictViewParser(Embed, {
    color: "#ff3333"
  }, global.__ConflictViewParser("title", null, "\u2757 ", title), global.__ConflictViewParser("description", null, error), children);else return global.__ConflictViewParser(Embed, {
    color: "#33ff33"
  }, global.__ConflictViewParser("title", null, emoji, " ", title), global.__ConflictViewParser("description", null, message), children);
}