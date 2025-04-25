import { Html } from '@elysiajs/html';

export const TemplateBase = ({ children }: Html.PropsWithChildren) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Notesapp</title>
    </head>
    <body class="bg-slate-50 py-8 text-sm">
      <main class="max-w-[300px] m-auto">{children}</main>
    </body>
  </html>
);
