"use client";

import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { ChevronDown, Calendar } from 'lucide-react';

// --- Mock Data ---
// Data for the last 7 days, mimicking the wave shape in the screenshot
const data7Days = [
  { name: 'Jun 24', Mobile: 300, Desktop: 200 },
  { name: 'Jun 25', Mobile: 450, Desktop: 350 },
  { name: 'Jun 26', Mobile: 600, Desktop: 500 },
  { name: 'Jun 27', Mobile: 490, Desktop: 448 }, // Peak data point
  { name: 'Jun 28', Mobile: 320, Desktop: 250 },
  { name: 'Jun 29', Mobile: 550, Desktop: 480 },
  { name: 'Jun 30', Mobile: 700, Desktop: 600 },
];

const data30Days = [
  // Simplified mock data for the 30-day view
  { name: 'Week 1', Mobile: 1500, Desktop: 1200 },
  { name: 'Week 2', Mobile: 2100, Desktop: 1800 },
  { name: 'Week 3', Mobile: 2900, Desktop: 2500 },
  { name: 'Week 4', Mobile: 3500, Desktop: 3000 },
];

const data3Months = [
  // Simplified mock data for the 3-month view
  { name: 'Month 1', Mobile: 8000, Desktop: 6000 },
  { name: 'Month 2', Mobile: 12000, Desktop: 10000 },
  { name: 'Month 3', Mobile: 15000, Desktop: 13000 },
];

// --- Custom Components to simulate shadcn/ui look and feel ---

// Mimics shadcn's Card component
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

// Mimics shadcn's Button component, used for the time range toggles
const ToggleButton: React.FC<{ children: React.ReactNode; isActive?: boolean; onClick?: () => void }> = ({ children, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-3 py-1 text-sm rounded-lg transition-all duration-150
      ${isActive
        ? 'bg-gray-100 text-gray-900 shadow-sm font-medium dark:bg-gray-700 dark:text-gray-50'
        : 'text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'
      }
    `}
  >
    {children}
  </button>
);

// Custom Tooltip component for Recharts, mimicking the design in the screenshot
const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
  if (active && payload && payload.length) {
    // Normalize payload to an array with loose typing from recharts
    const pl = payload as any[];
    // Determine the total to use as the main number
    const mobileData = pl.find((p: any) => p.dataKey === 'Mobile');
    const desktopData = pl.find((p: any) => p.dataKey === 'Desktop');

    return (
      <div className="rounded-lg border bg-white/80 p-3 text-sm shadow-xl backdrop-blur-sm dark:bg-gray-900/80">
        <p className="font-semibold text-gray-900 dark:text-gray-50 mb-2">{String(label)}</p>
        <div className="space-y-1">
          {mobileData && (
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: mobileData.color }}></span>
              <span className="text-gray-700 dark:text-gray-300">Mobile:</span>
              <span className="ml-auto font-medium">
                {typeof mobileData.value === 'number' ? mobileData.value.toLocaleString() : String(mobileData.value ?? '')}
              </span>
            </div>
          )}
          {desktopData && (
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: desktopData.color }}></span>
              <span className="text-gray-700 dark:text-gray-300">Desktop:</span>
              <span className="ml-auto font-medium">
                {typeof desktopData.value === 'number' ? desktopData.value.toLocaleString() : String(desktopData.value ?? '')}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

// Main component simulating the dashboard card
const AnalyticsCard = () => {
  const [timeRange, setTimeRange] = useState('7d'); // Default to Last 7 days

  let activeData;
  let xAxisKey;
  
  switch (timeRange) {
    case '7d':
      activeData = data7Days;
      xAxisKey = 'name';
      break;
    case '30d':
      activeData = data30Days;
      xAxisKey = 'name';
      break;
    case '3m':
      activeData = data3Months;
      xAxisKey = 'name';
      break;
    default:
      activeData = data7Days;
      xAxisKey = 'name';
  }

  const mobileColor = '#8884d8'; // Light purple/blue for 'Mobile'
  const desktopColor = '#4e4e4e'; // Dark gray for 'Desktop'

  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Placeholder for other dashboard elements */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="p-4 rounded-xl border bg-white dark:bg-gray-800 h-28 flex items-center justify-center text-lg font-semibold">
                Metric Card 1
            </div>
            <div className="p-4 rounded-xl border bg-white dark:bg-gray-800 h-28 flex items-center justify-center text-lg font-semibold">
                Metric Card 2
            </div>
            <div className="p-4 rounded-xl border bg-white dark:bg-gray-800 h-28 flex items-center justify-center text-lg font-semibold">
                Metric Card 3
            </div>
            <div className="p-4 rounded-xl border bg-white dark:bg-gray-800 h-28 flex items-center justify-center text-lg font-semibold">
                Metric Card 4
            </div>
        </div>

        {/* The main visitors card */}
        <Card className="shadow-lg">
          {/* Card Header Section */}
          <div className="flex flex-col sm:flex-row justify-between p-6">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Total Visitors</h2>
              <p className="text-sm text-muted-foreground text-gray-500 dark:text-gray-400">Total for the {timeRange === '3m' ? 'last 3 months' : timeRange === '30d' ? 'last 30 days' : 'last 7 days'}</p>
            </div>
            
            {/* Time Range Toggle Group */}
            <div className="flex space-x-2 p-1 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-inner">
              <ToggleButton isActive={timeRange === '3m'} onClick={() => setTimeRange('3m')}>
                Last 3 months
              </ToggleButton>
              <ToggleButton isActive={timeRange === '30d'} onClick={() => setTimeRange('30d')}>
                Last 30 days
              </ToggleButton>
              <ToggleButton isActive={timeRange === '7d'} onClick={() => setTimeRange('7d')}>
                Last 7 days
              </ToggleButton>
            </div>
          </div>

          {/* Card Content (The Chart) */}
          <div className="p-6 pt-0 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                {/* We use no CartesianGrid to match the screenshot's minimalist look */}
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" className="dark:stroke-gray-700" />
                
                {/* XAxis with only tick text at the bottom */}
                <XAxis
                  dataKey={xAxisKey}
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  padding={{ left: 10, right: 10 }}
                  className="dark:text-gray-400"
                />
                
                {/* YAxis is hidden as per the minimalist design in the screenshot */}
                <YAxis hide domain={['auto', 'auto']} /> 
                
                {/* Custom Tooltip */}
                <Tooltip content={<CustomTooltip />} />

                {/* Area for Desktop (Darker/Bottom) */}
                <Area
                  type="monotone"
                  dataKey="Desktop"
                  stroke={desktopColor}
                  fillOpacity={1}
                  fill={`url(#gradientDesktop)`}
                  strokeWidth={2}
                />

                {/* Area for Mobile (Lighter/Top) */}
                <Area
                  type="monotone"
                  dataKey="Mobile"
                  stroke={mobileColor}
                  fillOpacity={1}
                  fill={`url(#gradientMobile)`}
                  strokeWidth={2}
                />
                
                {/* Define the gradients for the area fill to match the screenshot's grayscale look */}
                <defs>
                  <linearGradient id="gradientMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={mobileColor} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={mobileColor} stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="gradientDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={desktopColor} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={desktopColor} stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsCard;

// The main App component to render the example
const App = () => <AnalyticsCard />;

// NOTE: In a real Next.js application using shadcn/ui, you would:
// 1. Install shadcn/ui and its dependencies (recharts, lucide-react, etc.).
// 2. Import the actual Card, ToggleGroup, and Button components.
// 3. Render the <AnalyticsCard /> inside your main dashboard page component.