import { client } from '../models/client';
import { INote, TBody } from '../types/entity';
import { NoteCard } from '../views/components/noteCard';
import { NoteForm, NoteFormUpdate } from '../views/components/noteForm';
import { Home } from '../views/pages';
import { Html } from '@elysiajs/html';
import { Context } from 'elysia';

export function getTodos() {
  const allNotes = client.query('SELECT * FROM notes').all() as INote[];

  return <Home notes={allNotes} />;
}

export function createTodo({ body }: Context) {
  const { content } = body as TBody;

  client.query('INSERT INTO notes (content) VALUES (?)').run(content);

  const currentNote = client
    .query('SELECT * FROM notes ORDER BY id DESC LIMIT 1')
    .all() as INote[];

  return (
    <>
      <NoteForm />
      <NoteCard note={currentNote[0]} />
    </>
  );
}

export function deleteTodo({ params }: Context) {
  const { id } = params;
  client.query('DELETE FROM notes WHERE id = ?').run(id);

  return null;
}

export function updateTodoUI({ params }: Context) {
  const { id } = params;

  const currentNote = client
    .query('SELECT * FROM notes WHERE id = ?')
    .all(id) as INote[];

  const numericId = Number(id);
  return (
    <>
      <NoteFormUpdate id={numericId} note={currentNote[0]} />
      <NoteCard note={currentNote[0]} isDisable withOob />
    </>
  );
}
export function updateTodo({ params, body }: Context) {
  const { id } = params;
  const { content } = body as INote;

  client.query('UPDATE notes SET content = ? WHERE id = ?').run(content, id);

  const updateNote = client
    .query('SELECT * FROM notes WHERE id = ?')
    .all(id) as INote[];

  return (
    <>
      <NoteForm />
      <NoteCard note={updateNote[0]} />
    </>
  );
}
