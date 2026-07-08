import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Получаем JSON из формы
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Пароль приложения!
      },
    });

    await transporter.sendMail({
      from: `"Заявка с сайта" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_RECEIVER,
      subject: `Новая заявка от ${name}`,
      html: `
        <h3>Новая заявка с сайта</h3>
        <p><strong>Ф.И.О.:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Сообщение:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Sending email failed:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
