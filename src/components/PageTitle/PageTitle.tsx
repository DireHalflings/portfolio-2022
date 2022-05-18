import React from 'react';

type PageTitleProps = {
  text: string
};

const PageTitle:React.FC<PageTitleProps> = ({ text }) => {
  
  return (
    <div className="page-title-container">
      <div className="page-title">
        { text }
      </div>
    </div>
  )
}
export default PageTitle;