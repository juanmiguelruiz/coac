export type Day = {
  dayOfWeek: string;
  dayOfMonth: string;
  fullDate: string;
  isSelected: boolean;
};

export interface DateCarouselProps {
  startDate?: string;
  endDate?: string;
  onWeekChange?: (weekStart: string) => void;
  onDayPick?: (date: string) => void;
}

export enum Direction {
  NEXT = 'next',
  PREV = 'prev',
}
