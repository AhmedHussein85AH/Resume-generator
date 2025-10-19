/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect, useContext, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { PanZoom } from 'react-easy-panzoom';

import AppContext from '../../context/AppContext';
import PageContext from '../../context/PageContext';

import FloatingActionMenu from '../FloatingActionMenu/FloatingActionMenu';

import templates from '../../templates';
import PageController from '../../shared/PageController';
import PrintDialog from '../../shared/PrintDialog';
import PanZoomAnimation from '../../shared/PanZoomAnimation';

const App = () => {
  const pageRef = useRef(null);
  const panZoomRef = useRef(null);
  const { i18n } = useTranslation();

  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { theme, settings } = state;

  const pageContext = useContext(PageContext);
  const { setPageRef, setPanZoomRef } = pageContext;

  useEffect(() => {
    setPageRef(pageRef);
    setPanZoomRef(panZoomRef);
    i18n.changeLanguage(settings.language);
    const storedState = JSON.parse(localStorage.getItem('state'));
    dispatch({ type: 'import_data', payload: storedState });
  }, [dispatch, setPageRef, setPanZoomRef, i18n, settings.language]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ctrl+S - Save
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        dispatch({ type: 'save_data' });
        console.log('💾 Resume saved!');
      }
      
      // Ctrl+P - Print
      if (event.ctrlKey && event.key === 'p') {
        event.preventDefault();
        // Trigger print dialog
        window.print();
      }
      
      // Ctrl+E - Export
      if (event.ctrlKey && event.key === 'e') {
        event.preventDefault();
        console.log('📤 Export triggered!');
        // You can add export functionality here
      }
      
      // Escape - Close sidebar
      if (event.key === 'Escape') {
        // This will be handled by the FloatingActionMenu component
        console.log('🚪 Escape pressed');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return (
    <Suspense fallback="Loading...">
      <div className="h-screen flex relative overflow-hidden">
        <FloatingActionMenu />

        <div className="relative z-10 h-screen w-full flex justify-center items-center bg-gradient-to-br from-white/80 via-blue-50/60 to-purple-50/40 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mx-2 ml-4" style={{ marginLeft: '420px' }}>
          <PanZoom
            ref={panZoomRef}
            minZoom="0.4"
            autoCenter
            autoCenterZoomLevel={0.7}
            enableBoundingBox
            boundaryRatioVertical={0.8}
            boundaryRatioHorizontal={0.8}
            style={{ outline: 'none' }}
          >
            <div id="page" ref={pageRef} className="shadow-2xl break-words bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden">
              {templates.find(x => theme.layout.toLowerCase() === x.key).component()}
            </div>
          </PanZoom>

          <PageController />
        </div>

        <div id="printPage" className="break-words">
          {templates.find(x => theme.layout.toLowerCase() === x.key).component()}
        </div>

        <PanZoomAnimation />
        <PrintDialog />
        
        {/* Beautiful Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
