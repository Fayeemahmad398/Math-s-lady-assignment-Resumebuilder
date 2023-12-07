import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


function Header() {

    function DownloadYouResume() {
        const boxOfResumeEle = document.getElementsByClassName("box-right")[0];

        html2canvas(boxOfResumeEle).then((canvas) => {
            const imgContent = canvas.toDataURL("img/png");
            const pdfDoc = new jsPDF('p', 'mm', 'a4');
            const DivWidth = pdfDoc.internal.pageSize.getWidth()
            const DivHeight = pdfDoc.internal.pageSize.getHeight()
            pdfDoc.addImage(imgContent, "PNG", 0, 0, DivWidth, DivHeight);
            pdfDoc.save('createResume.pdf');
        })
    }
    return (
        <div className='header'>
            <div className='resume-icon-box'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8-nzVuOvLgfSiZdxGIVEYL6IIg0nW2IMGQ&usqp=CAU" alt="" />
                <h3>
                    ResumeBuilder
                </h3>
            </div>
            <div>
                <button onClick={DownloadYouResume} className='downloadBtn' >Download </button>
            </div>
        </div>
    )
}

export default Header