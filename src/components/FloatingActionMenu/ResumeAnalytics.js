import React from 'react';

const ResumeAnalytics = ({ data }) => {
  // Simple word count calculation
  const calculateWordCount = () => {
    let totalWords = 0;
    
    // Try to find any text content in the data
    const findTextInObject = (obj, depth = 0) => {
      if (depth > 10) return; // Prevent infinite recursion
      
      if (typeof obj === 'string') {
        const words = obj.trim().split(/\s+/).filter(word => word.length > 0);
        totalWords += words.length;
      } else if (Array.isArray(obj)) {
        obj.forEach(item => findTextInObject(item, depth + 1));
      } else if (obj && typeof obj === 'object') {
        Object.values(obj).forEach(value => findTextInObject(value, depth + 1));
      }
    };
    
    findTextInObject(data);
    return totalWords;
  };

  // Simple completion calculation
  const calculateCompletion = () => {
    let completedSections = 0;
    let totalSections = 6; // Profile, Work, Education, Skills, Awards, References
    
    // Check if we have any data at all
    if (data && Object.keys(data).length > 0) {
      completedSections = 1; // At least we have some data
    }
    
    // Check for resume data
    if (data?.resume && Object.keys(data.resume).length > 0) {
      completedSections += 1;
    }
    
    // Check for @graph data
    if (data?.resume?.['@graph'] && Array.isArray(data.resume['@graph']) && data.resume['@graph'].length > 0) {
      completedSections += 1;
    }
    
    return Math.round((completedSections / totalSections) * 100);
  };

  const wordCount = calculateWordCount();
  const completionPercentage = calculateCompletion();

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Resume Analytics
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Word Count */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Word Count</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{wordCount}</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Completion Percentage */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completion</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{completionPercentage}%</p>
              </div>
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
            <span>Progress</span>
            <span>{completionPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Tips */}
        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>💡 Tip:</strong> {completionPercentage < 50 ? 'Add more sections to improve your resume completeness!' : completionPercentage < 80 ? 'Great progress! Consider adding more details to your sections.' : 'Excellent! Your resume is well-structured and complete.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalytics;
