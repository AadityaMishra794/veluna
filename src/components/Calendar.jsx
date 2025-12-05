// src/components/Calendar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Calendar as CalendarIcon, X, Check } from 'lucide-react';

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const dropdownRef = useRef(null);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleDateClick = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
    
    if (selectedDates.includes(dateStr)) {
      setSelectedDates(selectedDates.filter(d => d !== dateStr));
    } else {
      if (selectedDates.length < 6) {
        setSelectedDates([...selectedDates, dateStr]);
      }
    }
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleSave = () => {
    console.log('Saved period dates:', selectedDates);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const renderCalendarDays = () => {
    const days = [];
    const totalDays = daysInMonth(currentDate);
    const firstDay = firstDayOfMonth(currentDate);

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Actual days
    for (let day = 1; day <= totalDays; day++) {
      const dateStr = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
      const isSelected = selectedDates.includes(dateStr);
      const today = new Date();
      const isToday = 
        day === today.getDate() && 
        currentDate.getMonth() === today.getMonth() && 
        currentDate.getFullYear() === today.getFullYear();

      days.push(
        <div
          key={day}
          className={`calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <>
      <style>{`
        .calendar-wrapper {
          position: relative;
        }

        .calendar-trigger {
          background: none;
          border: none;
          color: #67645D;
          font-size: 0.9375rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.3s ease;
        }

        .calendar-trigger::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #F4C2C2, #f8d6d6);
          transition: width 0.3s ease;
        }

        .calendar-trigger:hover,
        .calendar-trigger.active {
          color: #F4C2C2;
        }

        .calendar-trigger:hover::after,
        .calendar-trigger.active::after {
          width: 100%;
        }

        .calendar-dropdown {
          position: absolute;
          top: calc(100% + 1.5rem);
          right: 0;
          width: 380px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(244, 194, 194, 0.4);
          padding: 1.5rem;
          z-index: 2000;
          opacity: 0;
          transform: translateY(-10px) scale(0.95);
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .calendar-dropdown.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #fff7f7;
        }

        .calendar-title {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .calendar-month {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #2f2b26;
        }

        .calendar-subtitle {
          font-size: 0.75rem;
          color: #F08FA3;
          font-weight: 500;
        }

        .calendar-nav {
          display: flex;
          gap: 0.5rem;
        }

        .calendar-nav-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #F4C2C2;
          background: #fff7f7;
          color: #F08FA3;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          font-size: 1.25rem;
          font-weight: 500;
        }

        .calendar-nav-btn:hover {
          background: #F4C2C2;
          color: #ffffff;
          transform: scale(1.1);
        }

        .calendar-weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .calendar-weekday {
          text-align: center;
          font-size: 0.75rem;
          font-weight: 600;
          color: #67645D;
          opacity: 0.7;
          padding: 0.5rem 0;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .calendar-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #2f2b26;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #fff7f7;
          border: 2px solid transparent;
        }

        .calendar-day.empty {
          cursor: default;
          background: transparent;
        }

        .calendar-day:not(.empty):hover {
          background: #f8d6d6;
          transform: scale(1.05);
        }

        .calendar-day.today {
          border-color: #F4C2C2;
          background: #ffffff;
        }

        .calendar-day.selected {
          background: linear-gradient(135deg, #F4C2C2 0%, #f8d6d6 100%);
          color: #ffffff;
          font-weight: 700;
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(244, 194, 194, 0.5);
        }

        .calendar-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 2px solid #fff7f7;
        }

        .calendar-count {
          font-size: 0.8rem;
          color: #67645D;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .count-badge {
          background: #F4C2C2;
          color: #ffffff;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.75rem;
        }

        .calendar-actions {
          display: flex;
          gap: 0.5rem;
        }

        .calendar-btn {
          padding: 0.5rem 1.25rem;
          border-radius: 999px;
          border: none;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .calendar-btn-clear {
          background: #fff7f7;
          color: #67645D;
          border: 1px solid #F4C2C2;
        }

        .calendar-btn-clear:hover {
          background: #f8d6d6;
        }

        .calendar-btn-save {
          background: linear-gradient(135deg, #F4C2C2 0%, #f8d6d6 100%);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(244, 194, 194, 0.4);
        }

        .calendar-btn-save:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(244, 194, 194, 0.5);
        }

        @media (max-width: 1024px) {
          .calendar-dropdown {
            right: -2rem;
          }
        }

        @media (max-width: 768px) {
          .calendar-dropdown {
            width: 340px;
            padding: 1.25rem;
            right: -1rem;
          }

          .calendar-header {
            margin-bottom: 1.25rem;
            padding-bottom: 0.85rem;
          }

          .calendar-month {
            font-size: 1.1rem;
          }

          .calendar-subtitle {
            font-size: 0.7rem;
          }

          .calendar-nav-btn {
            width: 28px;
            height: 28px;
            font-size: 1.1rem;
          }

          .calendar-weekday {
            font-size: 0.7rem;
            padding: 0.4rem 0;
          }

          .calendar-grid {
            gap: 0.4rem;
            margin-bottom: 1rem;
          }

          .calendar-day {
            font-size: 0.8rem;
            border-radius: 10px;
          }

          .calendar-footer {
            padding-top: 0.85rem;
            flex-wrap: wrap;
            gap: 0.75rem;
          }

          .calendar-count {
            font-size: 0.75rem;
          }

          .count-badge {
            font-size: 0.7rem;
            padding: 0.2rem 0.5rem;
          }

          .calendar-btn {
            padding: 0.45rem 1.1rem;
            font-size: 0.8rem;
          }
        }

        /* PHONE LAYOUT FIX */
        @media (max-width: 600px) {
          .calendar-dropdown {
            position: fixed;
            top: calc(env(safe-area-inset-top, 16px) + 8px);
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            width: 90vw;
            max-width: 340px;
            max-height: calc(100vh - env(safe-area-inset-top, 16px) - 32px);
            overflow-y: auto;
          }

          .calendar-dropdown.open {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 480px) {
          .calendar-dropdown {
            width: 95vw;
            max-width: 320px;
            padding: 1rem;
          }

          .calendar-header {
            margin-bottom: 1rem;
            padding-bottom: 0.75rem;
            flex-wrap: wrap;
            gap: 0.75rem;
          }

          .calendar-title {
            width: 100%;
          }

          .calendar-month {
            font-size: 1rem;
          }

          .calendar-subtitle {
            font-size: 0.68rem;
          }

          .calendar-nav {
            gap: 0.4rem;
          }

          .calendar-nav-btn {
            width: 26px;
            height: 26px;
            font-size: 1rem;
          }

          .calendar-weekdays {
            gap: 0.35rem;
            margin-bottom: 0.6rem;
          }

          .calendar-weekday {
            font-size: 0.65rem;
            padding: 0.35rem 0;
          }

          .calendar-grid {
            gap: 0.35rem;
            margin-bottom: 0.85rem;
          }

          .calendar-day {
            font-size: 0.75rem;
            border-radius: 8px;
          }

          .calendar-footer {
            padding-top: 0.75rem;
            flex-direction: column;
            align-items: stretch;
            gap: 0.85rem;
          }

          .calendar-count {
            font-size: 0.7rem;
            justify-content: center;
          }

          .count-badge {
            font-size: 0.68rem;
            padding: 0.2rem 0.5rem;
          }

          .calendar-actions {
            width: 100%;
          }

          .calendar-btn {
            flex: 1;
            padding: 0.5rem 0.8rem;
            font-size: 0.75rem;
            justify-content: center;
          }
        }

        @media (max-width: 360px) {
          .calendar-dropdown {
            padding: 0.85rem;
          }

          .calendar-header {
            margin-bottom: 0.85rem;
            padding-bottom: 0.65rem;
          }

          .calendar-month {
            font-size: 0.95rem;
          }

          .calendar-subtitle {
            font-size: 0.65rem;
          }

          .calendar-nav-btn {
            width: 24px;
            height: 24px;
            font-size: 0.95rem;
          }

          .calendar-weekday {
            font-size: 0.6rem;
            padding: 0.3rem 0;
          }

          .calendar-grid {
            gap: 0.3rem;
          }

          .calendar-day {
            font-size: 0.7rem;
            border-radius: 7px;
          }

          .calendar-btn {
            padding: 0.45rem 0.7rem;
            font-size: 0.72rem;
          }
        }
      `}</style>

      <div className="calendar-wrapper" ref={dropdownRef}>
        <button
          className={`calendar-trigger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <CalendarIcon size={18} />
          Set Your Calendar
        </button>

        <div className={`calendar-dropdown ${isOpen ? 'open' : ''}`}>
          <div className="calendar-header">
            <div className="calendar-title">
              <div className="calendar-month">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </div>
              <div className="calendar-subtitle">Mark your cycle days</div>
            </div>
            <div className="calendar-nav">
              <button className="calendar-nav-btn" onClick={prevMonth}>‹</button>
              <button className="calendar-nav-btn" onClick={nextMonth}>›</button>
            </div>
          </div>

          <div className="calendar-weekdays">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="calendar-weekday">{day}</div>
            ))}
          </div>

          <div className="calendar-grid">
            {renderCalendarDays()}
          </div>

          <div className="calendar-footer">
            <div className="calendar-count">
              <span className="count-badge">{selectedDates.length}/6</span>
              <span>days selected</span>
            </div>
            <div className="calendar-actions">
              <button 
                className="calendar-btn calendar-btn-clear"
                onClick={() => setSelectedDates([])}
              >
                <X size={14} />
                Clear
              </button>
              <button 
                className="calendar-btn calendar-btn-save"
                onClick={handleSave}
              >
                <Check size={14} />
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
