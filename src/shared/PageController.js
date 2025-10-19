import React, { useContext, useState } from 'react';

import PageContext from '../context/PageContext';

const PageController = () => {
  const pageContext = useContext(PageContext);
  const { panZoomRef, setPrintDialogOpen } = pageContext;
  const [previewMode, setPreviewMode] = useState('desktop'); // 'desktop', 'mobile', 'tablet'

  const zoomIn = () => panZoomRef.current.zoomIn(2);
  const zoomOut = () => panZoomRef.current.zoomOut(2);
  const centerReset = () => {
    panZoomRef.current.autoCenter(1);
    panZoomRef.current.reset(1);
  };

  const setPreviewModeHandler = (mode) => {
    setPreviewMode(mode);
    const pageElement = document.getElementById('page');
    if (pageElement) {
      // Remove existing preview classes
      pageElement.classList.remove('preview-desktop', 'preview-mobile', 'preview-tablet');
      // Add new preview class
      pageElement.classList.add(`preview-${mode}`);
    }
  };

  return (
    <div
      id="pageController"
      className="absolute z-20 opacity-75 hover:opacity-100 transition-all duration-150"
    >
      <div className="text-2xl px-8 border border-gray-200 rounded-full bg-white flex justify-center items-center leading-none select-none">
        <div className="p-3 hover:bg-gray-200 cursor-pointer flex" onClick={zoomIn}>
          <i className="material-icons">zoom_in</i>
        </div>

        <div className="p-3 hover:bg-gray-200 cursor-pointer flex" onClick={zoomOut}>
          <i className="material-icons">zoom_out</i>
        </div>

        <div className="p-3 hover:bg-gray-200 cursor-pointer flex" onClick={centerReset}>
          <i className="material-icons">center_focus_strong</i>
        </div>

        <div className="text-gray-400 p-3">|</div>

        {/* Preview Mode Buttons */}
        <div className={`p-3 hover:bg-gray-200 cursor-pointer flex ${previewMode === 'desktop' ? 'bg-blue-100 text-blue-600' : ''}`} onClick={() => setPreviewModeHandler('desktop')} title="Desktop View">
          <i className="material-icons">desktop_windows</i>
        </div>

        <div className={`p-3 hover:bg-gray-200 cursor-pointer flex ${previewMode === 'tablet' ? 'bg-blue-100 text-blue-600' : ''}`} onClick={() => setPreviewModeHandler('tablet')} title="Tablet View">
          <i className="material-icons">tablet</i>
        </div>

        <div className={`p-3 hover:bg-gray-200 cursor-pointer flex ${previewMode === 'mobile' ? 'bg-blue-100 text-blue-600' : ''}`} onClick={() => setPreviewModeHandler('mobile')} title="Mobile View">
          <i className="material-icons">phone_android</i>
        </div>

        <div className="text-gray-400 p-3">|</div>

        <div className="p-3 hover:bg-gray-200 cursor-pointer flex" onClick={() => window.print()}>
          <i className="material-icons">print</i>
        </div>

        <div
          className="p-3 hover:bg-gray-200 cursor-pointer flex"
          onClick={() => setPrintDialogOpen(true)}
        >
          <i className="material-icons">save</i>
        </div>

        <div className="text-gray-400 p-3">|</div>

        <a
          className="p-3 hover:bg-gray-200 cursor-pointer flex"
          href="https://doc.Resume-generator.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="material-icons">help_outline</i>
        </a>
      </div>
    </div>
  );
};

export default PageController;
