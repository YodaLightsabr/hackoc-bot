import { View } from '@conflict/beta/view';
export default function ActionRow({
  children
}) {
  return global.__ConflictViewParser("components", null, global.__ConflictViewParser("component", {
    type: 1
  }, global.__ConflictViewParser("components", null, children)));
}