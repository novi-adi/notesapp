import { INote } from '../../types/entity';
import { NoteCard } from '../components/noteCard';
import { NoteForm } from '../components/noteForm';
import { TemplateBase } from '../templates/templateBase';
import { Html } from '@elysiajs/html';

export const Home = ({ notes }: { notes: INote[] }) => {
  return (
    <TemplateBase>
      <main class="space-y-6">
        <div>Notes : </div>
        <NoteForm />
        <div id="notes" class="space-y-4">
          {notes.map((note) => {
            return <NoteCard note={note} />;
          })}
        </div>
      </main>
    </TemplateBase>
  );
};
