import { useState, useMemo } from 'react';
import { Job } from '@/types/dashboard';

interface CalendarProps {
  jobs: Job[];
  onJobClick?: (job: Job) => void;
}

type ViewType = 'day' | 'week' | 'month';

export default function Calendar({ jobs, onJobClick }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<ViewType>('week');

  // Helper functions
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return formatDate(date1) === formatDate(date2);
  };

  const getWeekStart = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day;
    return new Date(d.setDate(diff));
  };

  const getMonthStart = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };

  const getMonthEnd = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };

  const getJobColor = (job: Job) => {
    // Priority colors with status variations
    const baseColors = {
      high: 'red',
      medium: 'yellow',
      low: 'green'
    };
    
    const statusOpacity = {
      'completed': '100',
      'in-progress': '200',
      'scheduled': '400',
      'cancelled': '100'
    };

    const color = baseColors[job.priority];
    const opacity = statusOpacity[job.status];
    
    return `bg-${color}-${opacity} border-${color}-${parseInt(opacity) + 100}`;
  };

  const getStatusIcon = (status: Job['status']) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '⚡';
      case 'scheduled':
        return '📅';
      case 'cancelled':
        return '❌';
      default:
        return '📋';
    }
  };

  // Navigation functions
  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    
    switch (view) {
      case 'day':
        newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
        break;
      case 'week':
        newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
        break;
      case 'month':
        newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
        break;
    }
    
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Get jobs for specific date
  const getJobsForDate = (date: Date) => {
    return jobs.filter(job => {
      const jobDate = new Date(job.scheduledDate);
      return isSameDay(jobDate, date);
    });
  };

  // Generate calendar data based on view
  const calendarData = useMemo(() => {
    switch (view) {
      case 'day':
        return [currentDate];
      
      case 'week': {
        const weekStart = getWeekStart(currentDate);
        const week = [];
        for (let i = 0; i < 7; i++) {
          const day = new Date(weekStart);
          day.setDate(weekStart.getDate() + i);
          week.push(day);
        }
        return week;
      }
      
      case 'month': {
        const monthStart = getMonthStart(currentDate);
        const monthEnd = getMonthEnd(currentDate);
        const firstDay = getWeekStart(monthStart);
        const days = [];
        
        const current = new Date(firstDay);
        while (current <= monthEnd || days.length % 7 !== 0) {
          days.push(new Date(current));
          current.setDate(current.getDate() + 1);
        }
        return days;
      }
      
      default:
        return [];
    }
  }, [currentDate, view]);

  const formatDisplayDate = () => {
    const options: Intl.DateTimeFormatOptions = 
      view === 'month' 
        ? { year: 'numeric', month: 'long' }
        : view === 'week'
        ? { month: 'short', day: 'numeric', year: 'numeric' }
        : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    return currentDate.toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Calendar Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {formatDisplayDate()}
            </h2>
            <button
              onClick={goToToday}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Today
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* View Toggle */}
            <div className="flex rounded-md border border-gray-300 overflow-hidden">
              {(['day', 'week', 'month'] as ViewType[]).map((viewType) => (
                <button
                  key={viewType}
                  onClick={() => setView(viewType)}
                  className={`px-3 py-1 text-sm font-medium capitalize ${
                    view === viewType
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {viewType}
                </button>
              ))}
            </div>
            
            {/* Navigation */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigateDate('prev')}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => navigateDate('next')}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="p-6">
        {view === 'day' && (
          <DayView 
            date={currentDate} 
            jobs={getJobsForDate(currentDate)} 
            onJobClick={onJobClick}
            getJobColor={getJobColor}
            getStatusIcon={getStatusIcon}
          />
        )}
        
        {view === 'week' && (
          <WeekView 
            days={calendarData} 
            getJobsForDate={getJobsForDate} 
            onJobClick={onJobClick}
            getJobColor={getJobColor}
            getStatusIcon={getStatusIcon}
          />
        )}
        
        {view === 'month' && (
          <MonthView 
            days={calendarData} 
            currentMonth={currentDate.getMonth()}
            getJobsForDate={getJobsForDate} 
            onJobClick={onJobClick}
            getJobColor={getJobColor}
            getStatusIcon={getStatusIcon}
          />
        )}
      </div>
    </div>
  );
}

// Day View Component
function DayView({ date, jobs, onJobClick, getJobColor, getStatusIcon }: any) {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  
  const getJobsForHour = (hour: number) => {
    return jobs.filter((job: Job) => {
      const jobHour = parseInt(job.scheduledTime.split(':')[0]);
      return jobHour === hour;
    });
  };

  return (
    <div className="space-y-2">
      {hours.map(hour => {
        const hourJobs = getJobsForHour(hour);
        const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        const ampm = hour < 12 ? 'AM' : 'PM';
        
        return (
          <div key={hour} className="flex border-b border-gray-100 pb-2">
            <div className="w-20 text-sm text-gray-500 font-medium">
              {displayHour}:00 {ampm}
            </div>
            <div className="flex-1 space-y-1">
              {hourJobs.map((job: Job) => (
                <div
                  key={job.id}
                  onClick={() => onJobClick?.(job)}
                  className={`p-2 rounded border cursor-pointer hover:shadow-sm ${getJobColor(job)}`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{getStatusIcon(job.status)}</span>
                    <span className="font-medium text-sm">{job.title}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {job.customerName} • {job.estimatedDuration}min
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Week View Component
function WeekView({ days, getJobsForDate, onJobClick, getJobColor, getStatusIcon }: any) {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="grid grid-cols-7 gap-1">
      {/* Day Headers */}
      {days.map((day: Date, index: number) => (
        <div key={index} className="text-center py-2 border-b border-gray-200">
          <div className="text-sm font-medium text-gray-900">
            {dayNames[day.getDay()]}
          </div>
          <div className="text-lg font-semibold text-gray-700">
            {day.getDate()}
          </div>
        </div>
      ))}
      
      {/* Day Content */}
      {days.map((day: Date, index: number) => {
        const dayJobs = getJobsForDate(day);
        return (
          <div key={index} className="min-h-32 p-1 border border-gray-100">
            <div className="space-y-1">
              {dayJobs.slice(0, 3).map((job: Job) => (
                <div
                  key={job.id}
                  onClick={() => onJobClick?.(job)}
                  className={`p-1 rounded text-xs cursor-pointer ${getJobColor(job)}`}
                >
                  <div className="flex items-center space-x-1">
                    <span className="text-xs">{getStatusIcon(job.status)}</span>
                    <span className="truncate">{job.title}</span>
                  </div>
                  <div className="text-xs opacity-75">{job.scheduledTime}</div>
                </div>
              ))}
              {dayJobs.length > 3 && (
                <div className="text-xs text-gray-500 text-center">
                  +{dayJobs.length - 3} more
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Month View Component
function MonthView({ days, currentMonth, getJobsForDate, onJobClick, getJobColor, getStatusIcon }: any) {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div>
      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center py-2 text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day: Date, index: number) => {
          const dayJobs = getJobsForDate(day);
          const isCurrentMonth = day.getMonth() === currentMonth;
          const isToday = new Date().toDateString() === day.toDateString();
          
          return (
            <div 
              key={index} 
              className={`min-h-24 p-1 border border-gray-100 ${
                !isCurrentMonth ? 'bg-gray-50 text-gray-400' : ''
              } ${isToday ? 'bg-blue-50 border-blue-200' : ''}`}
            >
              <div className="text-sm font-medium mb-1">
                {day.getDate()}
              </div>
              <div className="space-y-1">
                {dayJobs.slice(0, 2).map((job: Job) => (
                  <div
                    key={job.id}
                    onClick={() => onJobClick?.(job)}
                    className={`p-1 rounded text-xs cursor-pointer ${getJobColor(job)}`}
                  >
                    <div className="flex items-center space-x-1">
                      <span className="text-xs">{getStatusIcon(job.status)}</span>
                      <span className="truncate">{job.title}</span>
                    </div>
                  </div>
                ))}
                {dayJobs.length > 2 && (
                  <div className="text-xs text-gray-500">
                    +{dayJobs.length - 2}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 