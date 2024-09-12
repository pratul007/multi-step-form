import React from 'react';

interface ProgressBarProps {
  step: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  return (
    <div className="max-w-xl mx-auto my-4 border-b-2 pb-4">
      <div className="flex pb-3">
        <div className="flex-1"></div>
        <div className="flex-1">
          <div
            className={`w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center ${
              step >= 1 ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          >
            <span className="text-white text-center w-full">
              {step > 1 ? (
                <i className="fa fa-check w-full fill-current white"></i>
              ) : (
                '1'
              )}
            </span>
          </div>
        </div>

        <div className="w-1/4 align-center items-center flex">
          <div className="w-full bg-gray-300 rounded">
            <div
              className={`text-xs leading-none py-1 rounded ${
                step >= 2 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>
        <div className="flex-1">
          <div
            className={`w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center ${
              step >= 2 ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          >
            <span className="text-white text-center w-full">
              {step > 2 ? (
                <i className="fa fa-check w-full fill-current white"></i>
              ) : (
                '2'
              )}
            </span>
          </div>
        </div>

        <div className="w-1/4 align-center items-center flex">
          <div className="w-full bg-gray-300 rounded">
            <div
              className={`text-xs leading-none py-1 rounded ${
                step >= 3 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              style={{ width: `${step >= 3 ? '100%' : '20%'}` }}
            ></div>
          </div>
        </div>

        <div className="flex-1">
          <div
            className={`w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center ${
              step === 3 ? 'bg-blue-500' : 'bg-white border-2 border-gray-300'
            }`}
          >
            <span className={`${step === 3 ? 'text-white' : 'text-gray-500'} text-center w-full`}>
              3
            </span>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>

      <div className="flex text-xs text-center">
        <div className="w-1/3">Personal Information</div>
        <div className="w-1/3">Account Details</div>
        <div className="w-1/3">Preferences</div>
      </div>
    </div>
  );
};

export default ProgressBar;
