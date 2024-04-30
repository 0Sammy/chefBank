
type ExportPDFButtonProps = {
    clickFunction: () => void;
  }
  
const PDFButton = ({ clickFunction }: ExportPDFButtonProps) => {
    return ( 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clickFunction}>
            Export as PDF
        </button>
     );
}
 
export default PDFButton;