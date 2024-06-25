import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "fullName";

export const TicketTitle = (record: TTicket): string => {
  return record.fullName?.toString() || String(record.id);
};
