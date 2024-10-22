import jerma from './jerma.png'
import icon from './icon.png'

function Upload() {
    return (
        <>
            <div className='container-fluid' style={{backgroundColor: '#e7e7e7'}}>
                <form className='row justify-content-end mt-4' style={{minHeight: '80vh'}}>
                    {/* Left tab */}
                    <div className="col-12 col-lg-2" style={{maxHeight: '20vh'}}>
                        <img className="rounded-circle p-0" src={jerma} style={{height: '30vh', width: '30vh'}}></img>
                    </div>
                    
                    {/* Middle tabs */}
                    <div className='col-12 col-lg-8 mb-2'>
                        {/* Instructions Form */}
                        <form class="container mb-3 border border-black" style={{backgroundColor: 'whitesmoke'}}>
                            <h3>How to upload your own tab files</h3>
                            <p>
                                Please note: this website is only a prototype so there is no upload functionality.<br></br><br></br>
                                This website will let you upload your own custom tablature files to the site's own library. 
                                Your tablature will appear publically on the <a href="/store">store</a> and can be downloaded 
                                by anyone. To upload your tab file, drag and drop it into the uploader below and hit the 'upload' 
                                button. You will need to make sure your file is in a valid format for the upload to work.
                                <br></br><br></br> 
                                The owners of the website hold the right to delete your tab file from the store if the community
                                dislikes it too much, or if it is an exact copy of another tablature.
                            </p>
                        </form>

                        {/* Upload file form */}
                        <form class="container mt-2 mb-3 border border-black" style={{backgroundColor: 'whitesmoke'}}>
                            <h2>Upload your tab file here</h2>
                            <div class="hero">
                                <label for="input-file" id="drop-area">
                                    <input type="file" accept="image/*" id="input-file" hidden></input>
                                    <div id="img-view">
                                        <img src={icon}></img>
                                        <p>Drag and drop or click here<br></br> to upload image</p>
                                        <span>Upload any file from desktop</span>
                                    </div>
                                </label>
                            </div>
                            
                            {/* Modal button */}
                            <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Upload Tab
                            </button>

                            {/* Modal */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            Your tablature file has been successfully uploaded!<br></br><br></br>
                                            
                                            Contents: 
                                            <ul>
                                                <li>File Size - 6MB</li>
                                                <li>Title - A song</li>
                                                <li>Length - 2:37</li>
                                            </ul>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    {/* Right tabs */}
                    <div className='col-12 col-lg-2'>
                        <form class="row col-12 g-3">
                            
                        </form>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Upload;