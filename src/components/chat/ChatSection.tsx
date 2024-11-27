import ChatContent from '@/components/chat/ChatContent.tsx';
import ChatInput from '@/components/chat/ChatInput.tsx';
import ModelSelector from '@/components/chat/ModelSelector.tsx';

export default function ChatSection() {
  return (
    <div className="flex h-full flex-col">
      <ModelSelector />
      <div className="flex w-full flex-grow flex-col items-center px-20">
        <ChatContent />
        <ChatInput />
      </div>
    </div>
  );
}
