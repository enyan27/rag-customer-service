import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@workspace/ui/components/resizable";
import { ConversationsPanel } from "../components/conversations-panel";

export const ConversationsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResizablePanelGroup className="h-full min-w-full flex-1">
      <ResizablePanel minSize="25%" maxSize="75%">
        <ConversationsPanel />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75%">{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
};
