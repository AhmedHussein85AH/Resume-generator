import React, { useState, useEffect } from 'react';

const ResumeHistory = ({ data, dispatch }) => {
  const [history, setHistory] = useState([]);
  const [currentVersion, setCurrentVersion] = useState(0);

  // Load history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('resumeHistory');
    if (savedHistory) {
      const parsedHistory = JSON.parse(savedHistory);
      setHistory(parsedHistory);
      setCurrentVersion(parsedHistory.length - 1);
    }
  }, []);

  // Save current state to history
  const saveToHistory = () => {
    const timestamp = new Date().toLocaleString();
    const newVersion = {
      id: Date.now(),
      timestamp,
      data: JSON.parse(JSON.stringify(data)), // Deep clone
      description: `Auto-save at ${timestamp}`
    };

    const updatedHistory = [...history, newVersion];
    
    // Keep only last 10 versions
    if (updatedHistory.length > 10) {
      updatedHistory.shift();
    }

    setHistory(updatedHistory);
    setCurrentVersion(updatedHistory.length - 1);
    localStorage.setItem('resumeHistory', JSON.stringify(updatedHistory));
  };

  // Restore from history
  const restoreFromHistory = (versionIndex) => {
    if (versionIndex >= 0 && versionIndex < history.length) {
      const version = history[versionIndex];
      dispatch({ type: 'import_data', payload: { data: version.data } });
      setCurrentVersion(versionIndex);
    }
  };

  // Delete version from history
  const deleteVersion = (versionId) => {
    const updatedHistory = history.filter(v => v.id !== versionId);
    setHistory(updatedHistory);
    localStorage.setItem('resumeHistory', JSON.stringify(updatedHistory));
    
    // Adjust current version if needed
    if (currentVersion >= updatedHistory.length) {
      setCurrentVersion(updatedHistory.length - 1);
    }
  };

  // Clear all history
  const clearHistory = () => {
    setHistory([]);
    setCurrentVersion(0);
    localStorage.removeItem('resumeHistory');
  };

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
            <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Resume History
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={saveToHistory}
              className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded-full transition-colors"
            >
              Save Now
            </button>
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-full transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {history.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-sm">No saved versions yet</p>
            <p className="text-xs mt-1">Click "Save Now" to create your first backup</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {history.map((version, index) => (
              <div
                key={version.id}
                className={`p-3 rounded-lg border transition-all ${
                  index === currentVersion
                    ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        Version {index + 1}
                      </span>
                      {index === currentVersion && (
                        <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {version.timestamp}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {version.description}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    {index !== currentVersion && (
                      <button
                        onClick={() => restoreFromHistory(index)}
                        className="p-1 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 rounded transition-colors"
                        title="Restore this version"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                    )}
                    <button
                      onClick={() => deleteVersion(version.id)}
                      className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded transition-colors"
                      title="Delete this version"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {history.length > 0 && (
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>💡 Tip:</strong> Your resume is automatically saved as you make changes. 
              Use "Save Now" to create manual checkpoints before major edits.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeHistory;
