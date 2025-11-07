'use client';
import React, { useState, useMemo } from 'react';
import { Search, Briefcase, CheckCircle, Clock, XCircle, ChevronDown, Filter, Layers } from 'lucide-react';

// --- MOCK DATA SETUP ---

// Define the structure of an application record
type Application = {
  id: string;
  name: string;
  role: 'Software Engineer' | 'Data Scientist' | 'Product Manager' | 'UX Designer' | 'HR Specialist';
  experience: number; // Years of experience
  status: 'New' | 'Reviewed' | 'Rejected' | 'Interview';
  score: number; // Calculated relevance score (0-100)
  skills: string[];
  lastUpdated: string;
};

// Mock dataset
const MOCK_APPLICATIONS: Application[] = [
  { id: '1001', name: 'Alice Johnson', role: 'Software Engineer', experience: 5, status: 'Interview', score: 92, skills: ['React', 'TypeScript', 'Node.js', 'AWS'], lastUpdated: '2025-11-01' },
  { id: '1002', name: 'Bob Smith', role: 'Data Scientist', experience: 8, status: 'New', score: 85, skills: ['Python', 'Machine Learning', 'SQL', 'Spark'], lastUpdated: '2025-11-07' },
  { id: '1003', name: 'Charlie Brown', role: 'Product Manager', experience: 3, status: 'Reviewed', score: 78, skills: ['Scrum', 'Roadmap', 'User Stories', 'JIRA'], lastUpdated: '2025-10-25' },
  { id: '1004', name: 'Diana Prince', role: 'UX Designer', experience: 10, status: 'Interview', score: 98, skills: ['Figma', 'Prototyping', 'User Research', 'A/B Testing'], lastUpdated: '2025-11-06' },
  { id: '1005', name: 'Ethan Hunt', role: 'Software Engineer', experience: 2, status: 'Rejected', score: 55, skills: ['Java', 'Spring', 'SQL'], lastUpdated: '2025-11-05' },
  { id: '1006', name: 'Fiona Glenanne', role: 'Data Scientist', experience: 6, status: 'Reviewed', score: 90, skills: ['R', 'Statistics', 'NLP', 'Azure'], lastUpdated: '2025-11-04' },
  { id: '1007', name: 'George Costanza', role: 'HR Specialist', experience: 4, status: 'New', score: 72, skills: ['Recruitment', 'Onboarding', 'Compliance'], lastUpdated: '2025-11-07' },
  { id: '1008', name: 'Hannah Montana', role: 'Product Manager', experience: 7, status: 'New', score: 88, skills: ['GTM', 'Market Analysis', 'Metrics'], lastUpdated: '2025-11-07' },
];

const ROLES = ['All', 'Software Engineer', 'Data Scientist', 'Product Manager', 'UX Designer', 'HR Specialist'];
const STATUSES = ['All', 'New', 'Reviewed', 'Interview', 'Rejected'];

// --- UTILITY FUNCTIONS ---

// Function to get icon and color based on application status
const getStatusBadge = (status: Application['status']) => {
  let color = 'bg-zinc-100 text-zinc-800';
  let Icon = Clock;
  switch (status) {
    case 'New':
      color = 'bg-blue-100 text-blue-800';
      Icon = Clock;
      break;
    case 'Reviewed':
      color = 'bg-yellow-100 text-yellow-800';
      Icon = CheckCircle;
      break;
    case 'Interview':
      color = 'bg-green-100 text-green-800';
      Icon = Layers;
      break;
    case 'Rejected':
      color = 'bg-red-100 text-red-800';
      Icon = XCircle;
      break;
  }
  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${color}`}>
      <Icon className="w-3 h-3 mr-1" />
      {status}
    </span>
  );
};

// --- MAIN COMPONENT ---

export default function App() {
  const [applications, setApplications] = useState<Application[]>(MOCK_APPLICATIONS);
  const [filters, setFilters] = useState({
    role: 'All',
    status: 'All',
    minExperience: 0,
    keyword: '',
  });

  const handleFilterChange = (key: keyof typeof filters, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Memoize the filtering logic to prevent unnecessary re-calculations
  const filteredApplications = useMemo(() => {
    return applications.filter(app => {
      // 1. Filter by Role
      if (filters.role !== 'All' && app.role !== filters.role) {
        return false;
      }

      // 2. Filter by Status
      if (filters.status !== 'All' && app.status !== filters.status) {
        return false;
      }

      // 3. Filter by Minimum Experience
      if (app.experience < filters.minExperience) {
        return false;
      }

      // 4. Filter by Keyword (case-insensitive search across name, role, and skills)
      if (filters.keyword.trim() !== '') {
        const keywordLower = filters.keyword.toLowerCase();
        const skillsString = app.skills.join(' ').toLowerCase();

        if (
          !app.name.toLowerCase().includes(keywordLower) &&
          !app.role.toLowerCase().includes(keywordLower) &&
          !skillsString.includes(keywordLower)
        ) {
          return false;
        }
      }

      return true;
    });
  }, [applications, filters]);

  const FilterControl = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div className="flex flex-col space-y-1">
      <label className="text-xs font-medium text-zinc-500">{label}</label>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-50 p-4 sm:p-8 font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 flex items-center">
          <Filter className="w-7 h-7 mr-3 text-blue-600" />
          Application Screening Dashboard
        </h1>
        <p className="text-zinc-600 mt-1">Review and filter {MOCK_APPLICATIONS.length} incoming job applications.</p>
      </header>

      {/* --- Filter Bar --- */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-zinc-200">
        <div className="flex items-center text-lg font-semibold text-zinc-700 mb-4">
            <Filter className="w-5 h-5 mr-2" /> Quick Filters
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Keyword Search */}
          <FilterControl label="Search Name/Skills">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Keywords (e.g., React, SQL)"
                className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                value={filters.keyword}
                onChange={(e) => handleFilterChange('keyword', e.target.value)}
              />
            </div>
          </FilterControl>

          {/* Role Filter */}
          <FilterControl label="Role Applied">
            <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <select
                  className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
                  value={filters.role}
                  onChange={(e) => handleFilterChange('role', e.target.value)}
                >
                  {ROLES.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            </div>
          </FilterControl>

          {/* Status Filter */}
          <FilterControl label="Application Status">
            <div className="relative">
                <CheckCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <select
                  className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
                  value={filters.status}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                >
                  {STATUSES.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            </div>
          </FilterControl>
          
          {/* Experience Filter */}
          <FilterControl label="Min. Years Experience">
            <input
              type="number"
              min="0"
              placeholder="Min Years"
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={filters.minExperience}
              onChange={(e) => handleFilterChange('minExperience', parseInt(e.target.value) || 0)}
            />
          </FilterControl>
        </div>
      </div>

      {/* --- Results Table --- */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-zinc-200">
        <div className="p-4 bg-zinc-100 border-b border-zinc-200">
          <p className="font-medium text-zinc-700">{filteredApplications.length} of {MOCK_APPLICATIONS.length} Applications Shown</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200">
            <thead className="bg-zinc-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Candidate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-zinc-500 uppercase tracking-wider">Exp. (Yrs)</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-zinc-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Top Skills</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-zinc-200">
              {filteredApplications.length > 0 ? (
                filteredApplications.map(app => (
                  <tr key={app.id} className="hover:bg-blue-50 transition duration-150">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">
                      {app.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                      {app.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-zinc-700">
                      {app.experience}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold" style={{ color: app.score > 85 ? '#10B981' : app.score > 70 ? '#F59E0B' : '#EF4444' }}>
                      {app.score}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {getStatusBadge(app.status)}
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-500 max-w-xs truncate">
                      <div className="flex flex-wrap gap-1">
                          {app.skills.slice(0, 3).map(skill => (
                              <span key={skill} className="px-2 py-0.5 text-xs bg-zinc-200 text-zinc-700 rounded-full font-medium">
                                  {skill}
                              </span>
                          ))}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-lg text-zinc-500">
                    No applications match the current filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}