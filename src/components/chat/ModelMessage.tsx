import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';

export default function ModelMessage({ message }: { message: string }) {
  return (
    <div className="my-10 flex">
      <Avatar className="mr-6">
        <AvatarImage src="/chatGPT.png" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <div className="w-max max-w-3xl rounded-3xl bg-sidebar p-4">
        <p>{message}</p>
      </div>
    </div>
  );
}
