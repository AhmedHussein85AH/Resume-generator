import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const AboutTab = () => {
  const { t } = useTranslation('rightSidebar');

  return (
    <div>
      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('about.documentation.heading')}</h6>

        <div className="text-sm">{t('about.documentation.body')}</div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.Resume-generator.org/"
          className="flex justify-center items-center mt-4 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">description</i>
            <span className="text-sm">{t('about.documentation.buttons.documentation')}</span>
          </div>
        </a>
      </div>

      <hr className="my-5" />

      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('about.bugOrFeatureRequest.heading')}</h6>

        <div className="text-sm">{t('about.bugOrFeatureRequest.body')}</div>

        <div className="grid grid-cols-1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AhmedHussein85AH/Resume-generator/issues/new"
          className="mt-4 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
            <div className="flex justify-center items-center">
              <i className="material-icons mr-2 font-bold text-base">bug_report</i>
              <span className="text-sm">{t('about.bugOrFeatureRequest.buttons.raiseIssue')}</span>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:ahmed.hussein@example.com?subject=Feature Request/Reporting a Bug in Resume-generator: "
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-5 rounded"
          >
            <div className="flex justify-center items-center">
              <i className="material-icons mr-2 font-bold text-base">email</i>
              <span className="text-sm">{t('about.bugOrFeatureRequest.buttons.sendEmail')}</span>
            </div>
          </a>
        </div>
      </div>

      <hr className="my-5" />

      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('about.sourceCode.heading')}</h6>

        <div className="text-sm">{t('about.sourceCode.body')}</div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AhmedHussein85AH/Resume-generator"
          className="flex justify-center items-center mt-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">code</i>
            <span className="text-sm">{t('about.sourceCode.buttons.githubRepo')}</span>
          </div>
        </a>
      </div>

      <hr className="my-5" />

      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('about.license.heading')}</h6>

        <div className="text-sm">{t('about.license.body')}</div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AhmedHussein85AH/Resume-generator/blob/main/LICENSE"
          className="flex justify-center items-center mt-4 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">gavel</i>
            <span className="text-sm">{t('about.license.buttons.mitLicense')}</span>
          </div>
        </a>
      </div>

      <div className="mt-5">
        <p className="text-xs font-gray-600 text-center">
          <Trans t={t} i18nKey="about.footer.credit">
            Made with Love by
            <a
              className="font-bold hover:underline"
              href="https://github.com/AhmedHussein85AH/Resume-generator"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ahmed Hussein
            </a>
          </Trans>
        </p>
        <p className="text-xs font-gray-600 text-center">{t('about.footer.thanks')}</p>
        
        <hr className="my-3" />
        
        <div className="text-xs text-gray-600 text-center">
          <p className="font-bold mb-1">© 2024 Ahmed Hussein. All rights reserved.</p>
          <p className="mb-1">Developed and maintained by Ahmed Hussein, Security Coordinator</p>
          <p className="mb-1">Following professional development standards and best practices</p>
          <p className="mb-2">
            <a
              href="https://www.linkedin.com/in/ahmed-h-6331a0289"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn Profile
            </a>
            {" | "}
            <a
              href="mailto:ahmed.hussein@example.com"
              className="text-blue-600 hover:underline"
            >
              Contact
            </a>
          </p>
          <p className="font-semibold text-gray-700">Happy Use! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
