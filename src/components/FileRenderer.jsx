import RenderComponent from './RenderComponent';
import Footer from '../components/Footer';
import ReviewPage from './ReviewPage';
import {useState} from 'react';

const FileRenderer = (props) => {
    //Object.entries convert Json Object into javascript array
    console.log (props.page)
    const formElements = props.page ?? []

    //parse over formElements and store in state
    let formData = {}
    formElements.map ((element) => {
        return formData[element.label] = ''
    })


    const [formValues, setFormValues] = useState (formData)

    //set variable review to review page or not
    const [pageStatus, setPageStatus] = useState('entry')
    return (
        <>
            <div className='container' style={{width: '80%'}}>
                <h1>{pageStatus === 'review' ? `${props.title} - Review`: pageStatus === 'entry' ? `${props.title}`:''} </h1>
                {pageStatus === 'entry' && 
                <div className='row '>
                    {formElements?.map((element, index) => <div key={index} className="my-3">
                        <RenderComponent key={index} element={element} formValues={formValues} setFormValues={setFormValues} />
                    </div>
                    )}
                    <Footer reviewStatus={pageStatus} setPageStatus={setPageStatus}/>
                </div>
                }
                {pageStatus === 'review' && 
                
                <div className='row align-items-center'>
                    {formElements?.map((element, index) => <div key={index} className="my-3">
                        <ReviewPage key={index} element={element} formValues={formValues} />
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