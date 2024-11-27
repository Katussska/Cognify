import { Input } from '@/components/ui/input.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';

import { Paperclip, SendHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ChatSection() {
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col">
      <div className="flex justify-center p-5">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="chatgpt">ChatGPT</SelectItem>
            <SelectItem value="claude">Claude</SelectItem>
            <SelectItem value="ollama">Ollama</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-full flex-grow flex-col items-center px-20">
        <div className="flex-grow content-end pb-10">
          <p>//messages</p>
        </div>
        <div className="mb-7 flex w-full flex-row items-center justify-center">
          <Paperclip className="" />
          <Input className="mx-5 max-w-3xl" placeholder={t('chat.inputPlaceholder')} />
          <SendHorizontal />
        </div>
      </div>
    </div>
  );
}
