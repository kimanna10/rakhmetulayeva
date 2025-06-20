let contact = {
  email: "test@example.com",
  telegram: "@yourhandle",
};

export async function GET() {
  return Response.json(contact);
}

export async function PUT(req) {
  contact = await req.json();
  return Response.json({ message: "Контакты обновлены", contact });
}
