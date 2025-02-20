
interface Window {
  gtag: Function;
  gtag_report_conversion: (url?: string) => boolean;
}

declare function gtag_report_conversion(url?: string): boolean;
declare function gtag(
  command: 'event',
  action: string,
  params: {
    send_to: string;
    event_callback?: () => void;
  }
): void;
