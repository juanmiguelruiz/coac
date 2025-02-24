import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useGroupsStore } from '@/store/groupsStore';
import { type Day, type DateCarouselProps, Direction } from './types';
import 'dayjs/locale/es';

dayjs.extend(localizedFormat);
dayjs.locale('es');

const DateCarousel = ({
  startDate,
  endDate,
  onWeekChange,
  onDayPick,
}: DateCarouselProps): JSX.Element => {
  const [weekStart, setWeekStart] = useState(dayjs().startOf('week'));
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [days, setDays] = useState<Day[]>([]);
  const updateSelectedDate = useGroupsStore(state => state.updateSelectedDate);

  useEffect(() => {
    const generateDays = () => {
      const newDays: Day[] = [];
      for (let i = 0; i < 7; i++) {
        const currentDay = weekStart.add(i, 'day');
        newDays.push({
          dayOfWeek: currentDay.format('ddd'),
          dayOfMonth: currentDay.format('D'),
          fullDate: currentDay.format('YYYY-MM-DD'),
          isSelected: selectedDate === currentDay.format('YYYY-MM-DD'),
        });
      }
      setDays(newDays);
    };

    generateDays();
  }, [weekStart, selectedDate]);

  const handleDayClick = (date: string) => {
    setSelectedDate(date);
    onDayPick?.(date);
  };

  const handleWeekChange = (direction: Direction) => {
    const newWeekStart =
      direction === Direction.NEXT ? weekStart.add(1, 'week') : weekStart.subtract(1, 'week');

    if (startDate && newWeekStart.isBefore(dayjs(startDate).startOf('week'))) return;
    if (endDate && newWeekStart.isAfter(dayjs(endDate).startOf('week'))) return;

    setWeekStart(newWeekStart);
    onWeekChange?.(newWeekStart.format('YYYY-MM-DD'));
  };

  const goToToday = () => {
    setWeekStart(dayjs().startOf('week'));
    setSelectedDate(dayjs().format('YYYY-MM-DD'));
    updateSelectedDate(dayjs().format('YYYY-MM-DD'));
  };

  const isToday = (date: string) => {
    return date === dayjs().format('YYYY-MM-DD');
  };

  return (
    <div className="w-full max-w-85 text-center">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => handleWeekChange(Direction.PREV)}
          className="hover:bg-gray-200 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-lg font-semibold">{`${weekStart.format('DD MMM')} - ${weekStart.add(6, 'day').format('DD MMM YYYY')}`}</span>
        <button
          onClick={() => handleWeekChange(Direction.NEXT)}
          className="hover:bg-gray-200 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
        <button
          onClick={goToToday}
          className={`px-3 py-1 rounded-xl border ${isToday(selectedDate) ? 'bg-red-200' : 'bg-transparent'}`}
        >
          Hoy
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex gap-1.5">
          {days.map(day => (
            <button
              key={day.fullDate}
              onClick={() => handleDayClick(day.fullDate)}
              className={`flex w-11 flex-col items-center p-1.5 rounded-xl transition-colors border ${day.isSelected ? 'bg-red-200 border-black' : 'border-transparent'}`}
            >
              <span className="text-sm font-medium">{day.dayOfWeek}</span>
              <span className="text-lg font-bold">{day.dayOfMonth}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateCarousel;
