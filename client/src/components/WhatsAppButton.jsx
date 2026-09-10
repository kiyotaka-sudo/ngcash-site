import { MessageCircle } from 'lucide-react';
import { normalizePhoneNumber } from '../utils/phone';
import './WhatsAppButton.css';

export default function WhatsAppButton({
  phoneNumber = '212695433269',
  message = 'Bonjour, je vous contacte via NG Cash',
}) {
  const cleanNumber = normalizePhoneNumber(phoneNumber);
  const link = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  );
}
