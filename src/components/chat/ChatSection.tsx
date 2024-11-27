import ChatContent from '@/components/chat/ChatContent.tsx';
import ChatInput from '@/components/chat/ChatInput.tsx';
import ModelSelector from '@/components/chat/ModelSelector.tsx';

export default function ChatSection() {
  return (
    <div className="flex w-full flex-1 flex-grow flex-col">
      <ModelSelector />
      <div className="flex w-full flex-grow flex-col items-center px-10">
        <ChatContent />
        <ChatInput />
      </div>
    </div>
  );
}
