import ModelMessage from '@/components/chat/ModelMessage.tsx';
import UserMessage from '@/components/chat/UserMessage.tsx';

export default function ChatContent() {
  return (
    <div className="mt-1 w-full max-w-4xl flex-grow content-end">
      <ModelMessage
        message={
          'Hello!ajgbvpiaerbpiqrwbfopqirfboquiwyfvbuyv oufwhpuf bw iufgwiprbf iwirfbipwuerbip wpeib pweurf' +
          'wiekfbie bwi biw iwrufbiwbf piwbf ibwi biwbf iwebf ibiw bfiebfiwebfiu bw ubiebfiweb iw iwubf iwubefibwedfi bwi biwub iubwefiweubfiwb ' +
          'wlofn bwiebf iweb ikb ioweb ike bofnlownfobndeol wnmwoi noebf ownef owl'
        }
      />
      <UserMessage message={'Hello!'} />
      <ModelMessage
        message={
          'Hello!ajgbvpiaerbpiqrwbfopqirfboquiwyfvbuyv oufwhpuf bw iufgwiprbf iwirfbipwuerbip wpeib pweurf' +
          'wiekfbie bwi biw iwrufbiwbf piwbf ibwi biwbf iwebf ibiw bfiebfiwebfiu bw ubiebfiweb iw iwubf iwubefibwedfi bwi biwub iubwefiweubfiwb ' +
          'wlofn bwiebf iweb ikb ioweb ike bofnlownfobndeol wnmwoi noebf ownef owl'
        }
      />
    </div>
  );
}
