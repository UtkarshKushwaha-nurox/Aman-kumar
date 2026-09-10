export const WHATSAPP_PHONE = '918209473537';

export interface ConsultationWhatsAppParams {
  name: string;
  phone: string;
  email?: string;
  date?: string;
  time?: string;
  type?: string;
  message?: string;
}

export interface QuestionWhatsAppParams {
  email: string;
  question: string;
  name?: string;
}

/**
 * Constructs a clean, encoded WhatsApp message URL and triggers standard redirection/new tab opening.
 */
export const sendConsultationToWhatsApp = (params: ConsultationWhatsAppParams) => {
  const dateText = params.date && params.date.trim() ? params.date.trim() : 'To be scheduled';
  const timeText = params.time && params.time.trim() ? params.time.trim() : 'Flexible';
  const typeText = params.type && params.type.trim() ? params.type.trim() : 'General Consultation';
  const reasonText = params.message && params.message.trim() ? params.message.trim() : 'N/A';
  const emailLine = params.email && params.email.trim() ? `\n• *Email:* ${params.email.trim()}` : '';

  const message = `Hello Doctor, I would like to book a consultation.

*Patient Details:*
• *Name:* ${params.name.trim()}
• *Phone:* ${params.phone.trim()}${emailLine}
• *Preferred Date:* ${dateText}
• *Preferred Time:* ${timeText}
• *Consultation Type:* ${typeText}
• *Reason / Symptoms:* ${reasonText}

Please confirm my appointment.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

  // Trigger browser navigation / new tab securely
  const link = document.createElement('a');
  link.href = whatsappUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const sendQuestionToWhatsApp = (params: QuestionWhatsAppParams) => {
  const emailText = params.email.trim();
  const questionText = params.question.trim();
  const nameLine = params.name && params.name.trim() ? `• *Name:* ${params.name.trim()}\n` : '';

  const message = `Hello Doctor, I have a question regarding treatments/appointments.

*Inquiry Details:*
${nameLine}• *Email:* ${emailText}
• *Question:* ${questionText}

Please advise when available.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

  const link = document.createElement('a');
  link.href = whatsappUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
