/* eslint-disable new-cap */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useRef, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import PageContext from '../../../context/PageContext';
import { importJson } from '../../../utils';

import * as _  from 'lodash';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

const ActionsTab = ({ data, theme, dispatch }) => {
  const pageContext = useContext(PageContext);
  const { setPrintDialogOpen } = pageContext;
  const { t } = useTranslation('rightSidebar');
  const fileInputRef = useRef(null);
  
  const exportToResume = () => {
    const backupObj = { data, theme };
    let dataclone = _.cloneDeep(data.resume);
    let javascript_part1 = '<script type="application/ld+json">'+JSON.stringify(dataclone)+"</script>";
    _.set(dataclone['@graph'][1], "@context", "http://schema.org/");
    let javascript_part2 = '<script type="application/ld+json">'+JSON.stringify(dataclone['@graph'][1])+"</script>";
    
    let javascript = javascript_part1 + javascript_part2;
    var zip = new JSZip();
    zip.file("script.js", javascript);
    zip.file("resume.json", JSON.stringify(backupObj));
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        saveAs(content, "Resume-generator.zip");
    });
  };

  const exportToPDF = () => {
    // Trigger print dialog for PDF
    window.print();
  };

  const exportToHTML = () => {
    const htmlContent = generateHTMLResume();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    saveAs(blob, 'resume.html');
  };

  const exportToWord = () => {
    const htmlContent = generateHTMLResume();
    const blob = new Blob([htmlContent], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    saveAs(blob, 'resume.docx');
  };

  const generateHTMLResume = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.profile?.name || 'Resume'}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; color: #333; }
        .header { text-align: center; margin-bottom: 30px; }
        .name { font-size: 28px; font-weight: bold; margin-bottom: 5px; }
        .title { font-size: 18px; color: #666; margin-bottom: 10px; }
        .contact { font-size: 14px; color: #888; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 20px; font-weight: bold; border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 15px; }
        .item { margin-bottom: 15px; }
        .item-title { font-weight: bold; font-size: 16px; }
        .item-subtitle { color: #666; font-size: 14px; margin-bottom: 5px; }
        .item-date { color: #888; font-size: 12px; font-style: italic; }
        .item-description { margin-top: 5px; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #f0f0f0; padding: 5px 10px; border-radius: 15px; font-size: 12px; }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">${data.profile?.name || 'Your Name'}</div>
        <div class="title">${data.profile?.title || 'Your Title'}</div>
        <div class="contact">
            ${data.profile?.email || ''} | ${data.profile?.phone || ''} | ${data.profile?.url || ''}
        </div>
    </div>

    ${data.profile?.summary ? `
    <div class="section">
        <div class="section-title">Summary</div>
        <div class="item-description">${data.profile.summary}</div>
    </div>
    ` : ''}

    ${data.work && data.work.length > 0 ? `
    <div class="section">
        <div class="section-title">Experience</div>
        ${data.work.map(job => `
            <div class="item">
                <div class="item-title">${job.position || 'Position'}</div>
                <div class="item-subtitle">${job.company || 'Company'}</div>
                <div class="item-date">${job.startDate || ''} - ${job.endDate || 'Present'}</div>
                ${job.summary ? `<div class="item-description">${job.summary}</div>` : ''}
                ${job.highlights && job.highlights.length > 0 ? `
                    <ul>
                        ${job.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `).join('')}
    </div>
    ` : ''}

    ${data.education && data.education.length > 0 ? `
    <div class="section">
        <div class="section-title">Education</div>
        ${data.education.map(edu => `
            <div class="item">
                <div class="item-title">${edu.studyType || 'Degree'} in ${edu.area || 'Field'}</div>
                <div class="item-subtitle">${edu.institution || 'Institution'}</div>
                <div class="item-date">${edu.startDate || ''} - ${edu.endDate || ''}</div>
                ${edu.summary ? `<div class="item-description">${edu.summary}</div>` : ''}
            </div>
        `).join('')}
    </div>
    ` : ''}

    ${data.skills && data.skills.length > 0 ? `
    <div class="section">
        <div class="section-title">Skills</div>
        <div class="skills">
            ${data.skills.map(skill => `
                ${skill.keywords ? skill.keywords.map(keyword => `<span class="skill">${keyword}</span>`).join('') : ''}
            `).join('')}
        </div>
    </div>
    ` : ''}
</body>
</html>
    `;
  };

  const loadDemoData = () => {
    dispatch({ type: 'load_demo_data' });
    dispatch({ type: 'save_data' });
  };

  const resetEverything = () => {
    dispatch({ type: 'reset' });
    dispatch({ type: 'save_data' });
  };

  return (
    <div>
      <div className="shadow text-center text-sm p-5">{t('actions.disclaimer')}</div>

      <hr className="my-6" />

      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('actions.importExport.heading')}</h6>

        <p className="text-sm">{t('actions.importExport.body')}</p>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={(e) => importJson(e, dispatch)}
        />
        <a id="downloadAnchor" className="hidden" />

        <div className="mt-4 space-y-3">
          {/* Import Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 px-3 rounded"
          >
            <div className="flex justify-center items-center">
              <i className="material-icons mr-2 font-bold text-base">publish</i>
              <span className="text-sm">{t('actions.importExport.buttons.import')}</span>
            </div>
          </button>

          {/* Export Format Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={exportToPDF}
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-3 rounded"
              title="Export as PDF"
            >
              <div className="flex justify-center items-center">
                <i className="material-icons mr-1 font-bold text-base">picture_as_pdf</i>
                <span className="text-xs">PDF</span>
              </div>
            </button>

            <button
              type="button"
              onClick={exportToWord}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded"
              title="Export as Word Document"
            >
              <div className="flex justify-center items-center">
                <i className="material-icons mr-1 font-bold text-base">description</i>
                <span className="text-xs">Word</span>
              </div>
            </button>

            <button
              type="button"
              onClick={exportToHTML}
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-3 rounded"
              title="Export as HTML"
            >
              <div className="flex justify-center items-center">
                <i className="material-icons mr-1 font-bold text-base">code</i>
                <span className="text-xs">HTML</span>
              </div>
            </button>

            <button
              type="button"
              onClick={exportToResume}
              className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-3 rounded"
              title="Export as JSON/ZIP"
            >
              <div className="flex justify-center items-center">
                <i className="material-icons mr-1 font-bold text-base">get_app</i>
                <span className="text-xs">JSON</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <hr className="my-6" />

      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('actions.downloadResume.heading')}</h6>
        <div className="text-sm">{t('actions.downloadResume.body')}</div>

        <button
          type="button"
          onClick={() => setPrintDialogOpen(true)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">save</i>
            <span className="text-sm">{t('actions.downloadResume.buttons.saveAsPdf')}</span>
          </div>
        </button>
      </div>

      <hr className="my-6" />

      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('actions.loadDemoData.heading')}</h6>

        <div className="text-sm">{t('actions.loadDemoData.body')}</div>

        <button
          type="button"
          onClick={loadDemoData}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">flight_takeoff</i>
            <span className="text-sm">{t('actions.loadDemoData.buttons.loadData')}</span>
          </div>
        </button>
      </div>

      <hr className="my-6" />

      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('actions.reset.heading')}</h6>

        <div className="text-sm">{t('actions.reset.body')}</div>

        <button
          type="button"
          onClick={resetEverything}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-3 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">refresh</i>
            <span className="text-sm">{t('actions.reset.buttons.reset')}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ActionsTab;
