import data from '../pages/personalInfo.json';
import RenderComponent from './RenderComponent';
import Footer from '../components/Footer';
import ReviewPage from './ReviewPage';
import {useState} from 'react';

const FileRenderer = () => {
    //Object.entries convert Json Object into javascript array
    const formElements = data.content ? Object.entries(data.content) : []

    //parse over formElements and store in state
    let formData = {}
    formElements.map ((element) => {
        return formData[element[1].label] = ''
    })


    const [formValues, setFormValues] = useState (formData)

    //set variable review to review page or not
    const [pageStatus, setPageStatus] = useState('entry')
    return (
        <>
            <div className='container' style={{width: '80%'}}>
                <h1>{pageStatus === 'review' ? `${data.title} - Review`: pageStatus === 'entry' ? `${data.title}`:''} </h1>
                {pageStatus === 'entry' && 
                <div className='row '>
                    {formElements?.map((element, index) => <div key={index} className="my-3">
                        <RenderComponent key={element[0]} element={element[1]} formValues={formValues} setFormValues={setFormValues} />
                    </div>
                    )}
                    <Footer reviewStatus={pageStatus} setPageStatus={setPageStatus}/>
                </div>
                }
                {pageStatus === 'review' && 
                
                <div className='row align-items-center'>
                    {formElements?.map((element, index) => <div key={index} className="my-3">
                        <ReviewPage key={element[0]} element={element[1]} formValues={formValues} />
                    </div>
                    )}
                <Footer reviewStatus={pageStatus} setPageStatus={setPageStatus}/>
                </div>
                
                }
                {pageStatus === 'confirm' &&
                    <h3 className='text-center'>Submitted Successfully</h3>
                }
            </div>
        </>
    )

}

export default FileRenderer