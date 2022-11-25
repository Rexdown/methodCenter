import pdf from '../../assets/icons/pdf.svg';

import './PdfBlock.scss';

function PdfBlock(props) {
  return (
    <div className="pdfBlock">
      <img src={pdf} alt="pdf" className="pdfBlock-img" />
      <p className="pdfBlock-text">{props.text}</p>
    </div>
  );
}

export default PdfBlock;
