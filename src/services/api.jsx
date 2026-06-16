import emailjs from "@emailjs/browser";

export const sendContact = async (form) => {
  const data = {
    from_name: form.name,
    email: form.email,
    from_email: form.email,
    subject: form.subject,
    message: form.message,
  };

  // Mail ho anao
  await emailjs.send(
    "service_m2rpo3a",
    "template_bdv1srq",
    data,
    "Zuuh5EsQaEZcPuoAn"
  );

  // Auto-reply ho an'ilay olona
  await emailjs.send(
    "service_m2rpo3a",
    "template_x3jmvv3",
    data,
    "Zuuh5EsQaEZcPuoAn"
  );
};